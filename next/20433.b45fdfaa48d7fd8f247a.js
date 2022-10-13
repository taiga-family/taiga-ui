"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[20433],{

/***/ 20433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GridModule": () => (/* binding */ GridModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/grid/examples/1/index.ts

let TuiGrid1 = /*#__PURE__*/(() => {
  class TuiGrid1 {}

  TuiGrid1.ɵfac = function TuiGrid1_Factory(t) {
    return new (t || TuiGrid1)();
  };

  TuiGrid1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiGrid1,
    selectors: [["tui-grid-example-1"]],
    decls: 56,
    vars: 0,
    consts: [[1, "tui-container", "tui-container_adaptive", "tui-container_example"], [1, "tui-row", "tui-row_adaptive"], [1, "tui-col_xs-12", "tui-col_md-1", "tui-col_lg-1"], [1, "dummy"], [1, "tui-container", "tui-container_example"], [1, "tui-row"], [1, "tui-col_1"], [1, "dummy", "dummy_fixed"]],
    template: function TuiGrid1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "p");
        core/* ɵɵtext */._uU(1, "Full adaptive layout (3 states)");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "div", 0);
        core/* ɵɵelementStart */.TgZ(3, "div", 1);
        core/* ɵɵelementStart */.TgZ(4, "div", 2);
        core/* ɵɵelement */._UZ(5, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "div", 2);
        core/* ɵɵelement */._UZ(7, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "div", 2);
        core/* ɵɵelement */._UZ(9, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "div", 2);
        core/* ɵɵelement */._UZ(11, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(12, "div", 2);
        core/* ɵɵelement */._UZ(13, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(14, "div", 2);
        core/* ɵɵelement */._UZ(15, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "div", 2);
        core/* ɵɵelement */._UZ(17, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(18, "div", 2);
        core/* ɵɵelement */._UZ(19, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(20, "div", 2);
        core/* ɵɵelement */._UZ(21, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(22, "div", 2);
        core/* ɵɵelement */._UZ(23, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(24, "div", 2);
        core/* ɵɵelement */._UZ(25, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "div", 2);
        core/* ɵɵelement */._UZ(27, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(28, "p");
        core/* ɵɵtext */._uU(29, "Half-adaptive layout (2 states of desktop)");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(30, "div", 4);
        core/* ɵɵelementStart */.TgZ(31, "div", 5);
        core/* ɵɵelementStart */.TgZ(32, "div", 6);
        core/* ɵɵelement */._UZ(33, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(34, "div", 6);
        core/* ɵɵelement */._UZ(35, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(36, "div", 6);
        core/* ɵɵelement */._UZ(37, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(38, "div", 6);
        core/* ɵɵelement */._UZ(39, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(40, "div", 6);
        core/* ɵɵelement */._UZ(41, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(42, "div", 6);
        core/* ɵɵelement */._UZ(43, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(44, "div", 6);
        core/* ɵɵelement */._UZ(45, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(46, "div", 6);
        core/* ɵɵelement */._UZ(47, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(48, "div", 6);
        core/* ɵɵelement */._UZ(49, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(50, "div", 6);
        core/* ɵɵelement */._UZ(51, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(52, "div", 6);
        core/* ɵɵelement */._UZ(53, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(54, "div", 6);
        core/* ɵɵelement */._UZ(55, "div", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    styles: [".dummy[_ngcontent-%COMP%]{height:12.5rem;background-color:rgba(208,2,27,.3)}tui-root._mobiletui-root._mobile[_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%], tui-root._mobiletui-root._mobile   [_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%], tui-root._mobile   tui-root._mobile[_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%], tui-root._mobile   tui-root._mobile   [_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%], tui-root._mobile   tui-root._mobile[_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%], tui-root._mobile   tui-root._mobile   [_nghost-%COMP%]   .dummy_fixed)[_ngcontent-%COMP%]{height:1.25rem}.tui-container_example[_ngcontent-%COMP%]{background-color:rgba(204,228,255,.3)}"],
    changeDetection: 0
  });
  return TuiGrid1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/grid/examples/2/index.ts

let TuiGrid2 = /*#__PURE__*/(() => {
  class TuiGrid2 {}

  TuiGrid2.ɵfac = function TuiGrid2_Factory(t) {
    return new (t || TuiGrid2)();
  };

  TuiGrid2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiGrid2,
    selectors: [["tui-grid-example-2"]],
    decls: 38,
    vars: 0,
    consts: [[1, "tui-container", "tui-container_adaptive"], [1, "tui-row", "tui-row_adaptive"], [1, "tui-col_xs-12", "tui-col_md-2", "tui-col_lg-3"], [1, "dummy"], [1, "tui-col_xs-12", "tui-col_md-1", "tui-col-offset_md-7", "tui-col_lg-1", "tui-col-offset_lg-5"], [1, "tui-col_xs-12", "tui-col_md-2", "tui-col_lg-3", "tui-col_stretch"], [1, "tui-col_xs-12", "tui-col_md-1", "tui-col-offset_md-7", "tui-col_lg-1", "tui-col-offset_lg-5", "tui-col_stretch"], [1, "tui-row", "tui-row_adaptive", "tui-row_example", "tui-row_align_start"], [1, "tui-col_md-4", "tui-col_lg-4"], [1, "tui-row", "tui-row_adaptive", "tui-row_example", "tui-row_align_center"], [1, "tui-row", "tui-row_adaptive", "tui-row_example", "tui-row_align_end"]],
    template: function TuiGrid2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelementStart */.TgZ(1, "div", 1);
        core/* ɵɵelementStart */.TgZ(2, "div", 2);
        core/* ɵɵelementStart */.TgZ(3, "div", 3);
        core/* ɵɵtext */._uU(4, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores atque autem beatae debitis eaque ipsa nemo non sequi ut? Aperiam beatae blanditiis distinctio, eius et excepturi illum nostrum vel. ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "div", 2);
        core/* ɵɵelement */._UZ(6, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "div", 4);
        core/* ɵɵelement */._UZ(8, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "div", 1);
        core/* ɵɵelementStart */.TgZ(10, "div", 5);
        core/* ɵɵelementStart */.TgZ(11, "div", 3);
        core/* ɵɵtext */._uU(12, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores atque autem beatae debitis eaque ipsa nemo non sequi ut? Aperiam beatae blanditiis distinctio, eius et excepturi illum nostrum vel. ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(13, "div", 5);
        core/* ɵɵelement */._UZ(14, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(15, "div", 6);
        core/* ɵɵelement */._UZ(16, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(17, "div", 7);
        core/* ɵɵelementStart */.TgZ(18, "div", 8);
        core/* ɵɵelement */._UZ(19, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(20, "div", 8);
        core/* ɵɵelement */._UZ(21, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(22, "div", 8);
        core/* ɵɵelement */._UZ(23, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(24, "div", 9);
        core/* ɵɵelementStart */.TgZ(25, "div", 8);
        core/* ɵɵelement */._UZ(26, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(27, "div", 8);
        core/* ɵɵelement */._UZ(28, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(29, "div", 8);
        core/* ɵɵelement */._UZ(30, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(31, "div", 10);
        core/* ɵɵelementStart */.TgZ(32, "div", 8);
        core/* ɵɵelement */._UZ(33, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(34, "div", 8);
        core/* ɵɵelement */._UZ(35, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(36, "div", 8);
        core/* ɵɵelement */._UZ(37, "div", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    styles: [".dummy[_ngcontent-%COMP%]{margin-bottom:.75rem;padding:.75rem;width:100%;min-height:2.5rem;box-sizing:border-box;background-color:rgba(208,2,27,.3)}.tui-row_example[_ngcontent-%COMP%]{margin-top:.75rem;height:5.3125rem;box-shadow:0 0 0 2px rgba(204,228,255,.5) inset}"],
    changeDetection: 0
  });
  return TuiGrid2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/grid/grid.component.ts







function GridComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 2);
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "div", 2);
    core/* ɵɵtext */._uU(4, " Class ");
    core/* ɵɵelementStart */.TgZ(5, "code");
    core/* ɵɵtext */._uU(6, "tui-row");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(7, " and set of ");
    core/* ɵɵelementStart */.TgZ(8, "code");
    core/* ɵɵtext */._uU(9, "tui-col_*");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(10, " classes make a grid inside a container ");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "h3", 4);
    core/* ɵɵi18n */.SDv(12, 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "ul", 6);
    core/* ɵɵelementStart */.TgZ(14, "li", 7);
    core/* ɵɵi18nStart */.tHW(15, 8);
    core/* ɵɵelement */._UZ(16, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "li", 7);
    core/* ɵɵi18nStart */.tHW(18, 9);
    core/* ɵɵelement */._UZ(19, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(20, "li", 7);
    core/* ɵɵi18nStart */.tHW(21, 10);
    core/* ɵɵelement */._UZ(22, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(23, "li", 7);
    core/* ɵɵi18nStart */.tHW(24, 11);
    core/* ɵɵelement */._UZ(25, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(26, "h3", 4);
    core/* ɵɵi18n */.SDv(27, 12);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(28, "ul", 6);
    core/* ɵɵelementStart */.TgZ(29, "li", 7);
    core/* ɵɵi18nStart */.tHW(30, 13);
    core/* ɵɵelement */._UZ(31, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(32, "li", 7);
    core/* ɵɵi18nStart */.tHW(33, 14);
    core/* ɵɵelement */._UZ(34, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(35, "li", 7);
    core/* ɵɵi18nStart */.tHW(36, 15);
    core/* ɵɵelement */._UZ(37, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(38, "tui-doc-example", 16);
    core/* ɵɵelement */._UZ(39, "tui-grid-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(40, "tui-doc-example", 17);
    core/* ɵɵelement */._UZ(41, "tui-grid-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(38);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

let GridComponent = /*#__PURE__*/(() => {
  class GridComponent {
    constructor() {
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 38169).then(__webpack_require__.t.bind(__webpack_require__, 38169, 17)),
        LESS: __webpack_require__.e(/* import() */ 8475).then(__webpack_require__.t.bind(__webpack_require__, 8475, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 60921).then(__webpack_require__.t.bind(__webpack_require__, 60921, 17)),
        LESS: __webpack_require__.e(/* import() */ 72563).then(__webpack_require__.t.bind(__webpack_require__, 72563, 17))
      };
    }

  }

  GridComponent.ɵfac = function GridComponent_Factory(t) {
    return new (t || GridComponent)();
  };

  GridComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GridComponent,
    selectors: [["grid"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5737287568482767307$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS_1 = goog.getMsg("Grid");
        i18n_0 = MSG_EXTERNAL_5737287568482767307$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟e0b996bf8fdc049279ea410a0d3955f732731e41␟5737287568482767307:Grid`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_770480936018697961$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__3 = goog.getMsg(" Class {$startTagCode}tui-container{$closeTagCode} makes a container inside content ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_770480936018697961$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟11ef2525ba0328ad512aa934f74302f50c02e407␟770480936018697961: Class ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tui-container${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: makes a container inside content `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6936755338479118048$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__5 = goog.getMsg(" Container classes ");
        i18n_4 = MSG_EXTERNAL_6936755338479118048$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟22e5557eec4f702daf8138faa1ccaa160e126b83␟6936755338479118048: Container classes `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7555684271269320294$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__7 = goog.getMsg("{$startTagCode}.tui-container{$closeTagCode} : width 1104px on screens >= 1280px and 824px on screens <= 1279px ", {
          "startTagCode": "\uFFFD#16\uFFFD",
          "closeTagCode": "\uFFFD/#16\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_7555684271269320294$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟036442e3895fa0dac6f4bd945f0a2247824b53f8␟7555684271269320294:${"\uFFFD#16\uFFFD"}:START_TAG_CODE:.tui-container${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_CODE: : width 1104px on screens >= 1280px and 824px on screens <= 1279px `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8711844206496647521$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__9 = goog.getMsg("{$startTagCode}.tui-container_adaptive{$closeTagCode} : width 1104px on screens >= 1280px, 824px on screens >= 768px and < 1280px, 100% on screens < 768px ", {
          "startTagCode": "\uFFFD#19\uFFFD",
          "closeTagCode": "\uFFFD/#19\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_8711844206496647521$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟40a914683129c4fa545e2f3b3db104f403fa276c␟8711844206496647521:${"\uFFFD#19\uFFFD"}:START_TAG_CODE:.tui-container_adaptive${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: : width 1104px on screens >= 1280px, 824px on screens >= 768px and < 1280px, 100% on screens < 768px `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8763114512843991510$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__11 = goog.getMsg("{$startTagCode}.tui-container_fullwidth{$closeTagCode} : width 100% with 24px margins on screens >= 768px and 16px on screens <= 767px ", {
          "startTagCode": "\uFFFD#22\uFFFD",
          "closeTagCode": "\uFFFD/#22\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8763114512843991510$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟23174dd62aa24f7afbc22db5121ede66f4c014ae␟8763114512843991510:${"\uFFFD#22\uFFFD"}:START_TAG_CODE:.tui-container_fullwidth${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_CODE: : width 100% with 24px margins on screens >= 768px and 16px on screens <= 767px `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7883942376585419815$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__13 = goog.getMsg("{$startTagCode}.tui-container_fixed{$closeTagCode} : width 1104px ", {
          "startTagCode": "\uFFFD#25\uFFFD",
          "closeTagCode": "\uFFFD/#25\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_7883942376585419815$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟50b62fa605718ce38751e15de480b37e1f958082␟7883942376585419815:${"\uFFFD#25\uFFFD"}:START_TAG_CODE:.tui-container_fixed${"\uFFFD/#25\uFFFD"}:CLOSE_TAG_CODE: : width 1104px `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5401345774304284159$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__15 = goog.getMsg(" Columns classes for adaptive layout ");
        i18n_14 = MSG_EXTERNAL_5401345774304284159$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟84261a6de352e3f55b63d702f13f77322ad9255d␟5401345774304284159: Columns classes for adaptive layout `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_130696483167503717$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__17 = goog.getMsg("{$startTagCode}.tui-col_lg-*{$closeTagCode} : screen width >= 1280px (Desktop M) ", {
          "startTagCode": "\uFFFD#31\uFFFD",
          "closeTagCode": "\uFFFD/#31\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_130696483167503717$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟31d2805c9e90a39709c315a46cf7c5c67bc91c79␟130696483167503717:${"\uFFFD#31\uFFFD"}:START_TAG_CODE:.tui-col_lg-*${"\uFFFD/#31\uFFFD"}:CLOSE_TAG_CODE: : screen width >= 1280px (Desktop M) `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8567214701506469229$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__19 = goog.getMsg("{$startTagCode}.tui-col_md-*{$closeTagCode} : 768px =< screen width <= 1279px (Desktop S) ", {
          "startTagCode": "\uFFFD#34\uFFFD",
          "closeTagCode": "\uFFFD/#34\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_8567214701506469229$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟b4536878da833bd8dd5863cb355c249c30848287␟8567214701506469229:${"\uFFFD#34\uFFFD"}:START_TAG_CODE:.tui-col_md-*${"\uFFFD/#34\uFFFD"}:CLOSE_TAG_CODE: : 768px =< screen width <= 1279px (Desktop S) `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1660182540179233494$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__21 = goog.getMsg("{$startTagCode}.tui-col_xs-*{$closeTagCode} : 360px =< screen width <= 767px (Mobile) ", {
          "startTagCode": "\uFFFD#37\uFFFD",
          "closeTagCode": "\uFFFD/#37\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_1660182540179233494$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟02eea7b76243573c8023d9892629a96e0f30e467␟1660182540179233494:${"\uFFFD#37\uFFFD"}:START_TAG_CODE:.tui-col_xs-*${"\uFFFD/#37\uFFFD"}:CLOSE_TAG_CODE: : 360px =< screen width <= 767px (Mobile) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5270716831676273725$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__23 = goog.getMsg("All grids");
        i18n_22 = MSG_EXTERNAL_5270716831676273725$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟24761f7ac7d3661af78d5d877e8515334d39bcb6␟5270716831676273725:All grids`;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8878813847046567019$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__25 = goog.getMsg("modifications");
        i18n_24 = MSG_EXTERNAL_8878813847046567019$$PROJECTS_DEMO_SRC_MODULES_MARKUP_GRID_GRID_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟45ea2fbca5cf537c93aa18047a92929e34cfbd7c␟8878813847046567019:modifications`;
      }

      return [["header", i18n_0], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_2, [1, "title"], i18n_4, [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], [1, "tui-list__item"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, ["id", "mods", "heading", i18n_22, 3, "content"], ["id", "modes", "heading", i18n_24, 3, "content"]];
    },
    template: function GridComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, GridComponent_ng_template_1_Template, 42, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiGrid1, TuiGrid2],
    styles: [".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:1rem 0 .25rem}"],
    changeDetection: 0
  });
  return GridComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/grid/grid.module.ts








let GridModule = /*#__PURE__*/(() => {
  class GridModule {}

  GridModule.ɵfac = function GridModule_Factory(t) {
    return new (t || GridModule)();
  };

  GridModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: GridModule
  });
  GridModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(GridComponent))]]
  });
  return GridModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(GridModule, {
    declarations: [GridComponent, TuiGrid1, TuiGrid2],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [GridComponent]
  });
})();

/***/ })

}]);