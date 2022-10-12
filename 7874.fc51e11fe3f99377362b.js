"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7874],{

/***/ 7874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TablesModule": () => (/* binding */ TablesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/checkbox/checkbox.component.ts
var checkbox_component = __webpack_require__(29270);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/tables/examples/1/index.ts




let TuiTablesExample1 = /*#__PURE__*/(() => {
  class TuiTablesExample1 {
    constructor() {
      this.testValue = new fesm2015_forms/* FormControl */.NI(true);
    }

  }

  TuiTablesExample1.ɵfac = function TuiTablesExample1_Factory(t) {
    return new (t || TuiTablesExample1)();
  };

  TuiTablesExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTablesExample1,
    selectors: [["tui-tables-example-1"]],
    decls: 53,
    vars: 1,
    consts: [[1, "tui-table"], [1, "tui-table__tr", "tui-table__tr_border_none"], [1, "tui-table__th", "tui-table__th_first"], [3, "formControl"], [1, "tui-table__th"], [1, "tui-table__th", "tui-table__th_last"], [1, "tui-table__td", "tui-table__td_first"], [1, "tui-table__td"], [1, "tui-table__td", "tui-table__td_last"]],
    template: function TuiTablesExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "table", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tr", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "th", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-checkbox", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(6, "Title");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(8, "Author");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(10, "Date");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "th", 5);
        fesm2015_core/* ɵɵtext */._uU(12, "Platform");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "tr", 1);
        fesm2015_core/* ɵɵelement */._UZ(14, "td", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(16, "How to cook RxJS in an Angular app");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(18, "Roman Sedov");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(20, "20.06.2020");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(22, "angular.institute");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "tr", 1);
        fesm2015_core/* ɵɵelement */._UZ(24, "td", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(26, "Taking down the Emperor: Declarative approach");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(27, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(28, "Alex Inkin");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(30, "26.08.2020");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(32, "angular.institute");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "tr", 1);
        fesm2015_core/* ɵɵelement */._UZ(34, "td", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(36, "The 10 best Angular tips selected by the community");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(37, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(38, "Roman Sedov");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(39, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(40, "28.07.2020");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(41, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(42, "indepth.dev");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(43, "tr", 1);
        fesm2015_core/* ɵɵelement */._UZ(44, "td", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(45, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(46, "Agnostic components in Angular");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(47, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(48, "Alex Inkin");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(49, "td", 7);
        fesm2015_core/* ɵɵtext */._uU(50, "05.08.2020");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(51, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(52, "indepth.dev");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.testValue);
      }
    },
    directives: [checkbox_component/* TuiCheckboxComponent */.f, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTablesExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/tables/tables.component.ts









function TablesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 4);
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "a", 6);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "h3", 7);
    fesm2015_core/* ɵɵi18n */.SDv(8, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "ul", 9);
    fesm2015_core/* ɵɵi18nStart */.tHW(10, 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(20, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(22, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "h3", 7);
    fesm2015_core/* ɵɵi18n */.SDv(24, 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "ul", 9);
    fesm2015_core/* ɵɵi18nStart */.tHW(26, 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(28, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(30, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(32, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(34, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(36, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(38, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(40, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(42, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(44, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(45, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(46, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(47, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(48, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(49, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(50, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(52, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(53, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(54, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(55, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(56, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(57, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(58, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(59, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(60, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(61, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(62, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(63, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(64, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(65, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(66, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(67, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(68, "tui-tables-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(67);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

let TablesComponent = /*#__PURE__*/(() => {
  class TablesComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 86359).then(__webpack_require__.t.bind(__webpack_require__, 86359, 17)),
        HTML: __webpack_require__.e(/* import() */ 57831).then(__webpack_require__.t.bind(__webpack_require__, 57831, 17))
      };
    }

  }

  TablesComponent.ɵfac = function TablesComponent_Factory(t) {
    return new (t || TablesComponent)();
  };

  TablesComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TablesComponent,
    selectors: [["tables"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4114020677798356875$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS_1 = goog.getMsg("Tables");
        i18n_0 = MSG_EXTERNAL_4114020677798356875$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟fca3a09a894bdef44717e06cde6b1e50b3191267␟4114020677798356875:Tables`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7429645122394301630$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__3 = goog.getMsg(" Use {$startTagStrong}.tui-table{$closeTagStrong} class to add Taiga styles to a table ", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7429645122394301630$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟f6460d5bcf1a0c6b5ebf3e9486203cc0b1bdd9f7␟7429645122394301630: Use ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:.tui-table${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: class to add Taiga styles to a table `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4109933585689006832$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__5 = goog.getMsg(" An advanced separate {$startTagCode}@taiga-ui/table{$closeTagCode} package with interactive tables is {$startLink} here {$closeLink}", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD",
          "startLink": "\uFFFD#6\uFFFD",
          "closeLink": "\uFFFD/#6\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4109933585689006832$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟18fc845dbac0a9ad46d7f6a5d6967126bc0aa852␟4109933585689006832: An advanced separate ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:@taiga-ui/table${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: package with interactive tables is ${"\uFFFD#6\uFFFD"}:START_LINK: here ${"\uFFFD/#6\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5380071918323078075$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__7 = goog.getMsg(" Elements ");
        i18n_6 = MSG_EXTERNAL_5380071918323078075$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟97c084d1ef6f4e1c1bd1b79ceef3b5caa7017a45␟5380071918323078075: Elements `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4343689090823695320$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__9 = goog.getMsg("{$startListItem}{$startTagCode}.tui-table__tr{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__th{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__td{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__subtext{$closeTagCode} : small secondary text into a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort{$closeTagCode} : sorting action button {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort-icon{$closeTagCode} : sorting action button icon {$closeListItem}", {
          "startListItem": "[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]",
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]",
          "closeListItem": "[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_4343689090823695320$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟2659fdd82b9367ca3e7aba320422b464f7f21210␟4343689090823695320:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__tr${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__th${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__td${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__subtext${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : small secondary text into a cell ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__sort${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : sorting action button ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__sort-icon${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : sorting action button icon ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3460633242956630632$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__11 = goog.getMsg(" Modifiers ");
        i18n_10 = MSG_EXTERNAL_3460633242956630632$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟bcb9be93e5e30310a2724eb38be7db28069807ea␟3460633242956630632: Modifiers `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4461737378801163721$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__13 = goog.getMsg("{$startListItem}{$startTagCode}.tui-table_layout_fixed{$closeTagCode} : fixed cell width {$closeListItem}{$startListItem}{$startTagCode}.tui-table_font-size_l{$closeTagCode} : \"l\" text size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table_font-size_s{$closeTagCode} : \"s\" text size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table_size_l{$closeTagCode} : \"l\" cell size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_border_top{$closeTagCode} : border top for the row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_border_none{$closeTagCode} : removes border bottom {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_hover_disabled{$closeTagCode} : removes hovered state of row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_cursor_pointer{$closeTagCode} : adds \"cursor: pointer\" for hovered row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__th_font-size_l{$closeTagCode} : \"l\" text size for table headings {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_font-size_l{$closeTagCode} : \"l\" text size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_font-size_s{$closeTagCode} : \"s\" text size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_size_l{$closeTagCode} : \"l\" size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_align_center{$closeTagCode} : align center for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_first, .tui-table__th_first{$closeTagCode} : removes left padding of the cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_last, .tui-table__th_last{$closeTagCode} : removes right padding of the cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_center, .tui-table__th_text_center{$closeTagCode} : alignes text center in a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_right, .tui-table__th_text_right{$closeTagCode} : alignes text right in a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_overflow{$closeTagCode} : adds \"...\" when text overflows {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort_active{$closeTagCode} : active state for sort button {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort_up{$closeTagCode} : arrow up state for sort button {$closeListItem}", {
          "startListItem": "[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]",
          "startTagCode": "[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]",
          "closeTagCode": "[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]",
          "closeListItem": "[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"
        });
        i18n_12 = MSG_EXTERNAL_4461737378801163721$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟297954b578febb0a4994be5d3628b42775e0c7be␟4461737378801163721:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_layout_fixed${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : fixed cell width ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_font-size_s${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "s" text size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" cell size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_border_top${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : border top for the row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_border_none${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes border bottom ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_hover_disabled${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes hovered state of row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_cursor_pointer${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : adds "cursor: pointer" for hovered row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__th_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for table headings ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_font-size_s${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "s" text size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_align_center${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : align center for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_first, .tui-table__th_first${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes left padding of the cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_last, .tui-table__th_last${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes right padding of the cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_center, .tui-table__th_text_center${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : alignes text center in a cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_right, .tui-table__th_text_right${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : alignes text right in a cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_overflow${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : adds "..." when text overflows ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__sort_active${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : active state for sort button ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__sort_up${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : arrow up state for sort button ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_12 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__15 = goog.getMsg("Basic");
        i18n_14 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      return [["header", i18n_0], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_2, [1, "tui-space_top-4"], i18n_4, ["tuiLink", "", "routerLink", "/components/table"], [1, "title"], i18n_6, [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], i18n_8, [1, "tui-list__item"], i18n_10, i18n_12, ["id", "base", "heading", i18n_14, 3, "content"]];
    },
    template: function TablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TablesComponent_ng_template_1_Template, 69, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiTablesExample1],
    styles: [".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:.75rem 0 .25rem}"],
    changeDetection: 0
  });
  return TablesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/tables/tables.module.ts










let TablesModule = /*#__PURE__*/(() => {
  class TablesModule {}

  TablesModule.ɵfac = function TablesModule_Factory(t) {
    return new (t || TablesModule)();
  };

  TablesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TablesModule
  });
  TablesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiCheckboxModule, kit.TuiInputTagModule, core.TuiSvgModule, kit.TuiTagModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(TablesComponent))]]
  });
  return TablesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TablesModule, {
    declarations: [TablesComponent, TuiTablesExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiCheckboxModule, kit.TuiInputTagModule, core.TuiSvgModule, kit.TuiTagModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule */.Bz],
    exports: [TablesComponent]
  });
})();

/***/ })

}]);