"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34777],{

/***/ 34777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SpacesModule": () => (/* binding */ SpacesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/spaces/examples/1/index.ts



let TuiSpacingExample1 = /*#__PURE__*/(() => {
  class TuiSpacingExample1 {}

  TuiSpacingExample1.ɵfac = function TuiSpacingExample1_Factory(t) {
    return new (t || TuiSpacingExample1)();
  };

  TuiSpacingExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiSpacingExample1,
    selectors: [["tui-spaces-example-1"]],
    decls: 89,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2781026574520276304$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" Margin top {$startTagCode}tui-space_top-<value>{$closeTagCode}", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2781026574520276304$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟43eae6b60b4232c11a7183d30b8537c4a3787b08␟2781026574520276304: Margin top ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tui-space_top-<value>${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8589967845732928415$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" Margin bottom {$startTagCode}tui-space_bottom-<value>{$closeTagCode}", {
          "startTagCode": "\uFFFD#21\uFFFD",
          "closeTagCode": "\uFFFD/#21\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_8589967845732928415$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟2f66b959f921327d8f3835835b3a2992101d5275␟8589967845732928415: Margin bottom ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:tui-space_bottom-<value>${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8125293152573422623$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_5 = goog.getMsg(" Margin right {$startTagCode}tui-space_right-<value>{$closeTagCode}", {
          "startTagCode": "\uFFFD#40\uFFFD",
          "closeTagCode": "\uFFFD/#40\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_8125293152573422623$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟d7c71d0bdeb371c2d90405a09a40273c0892d24d␟8125293152573422623: Margin right ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:tui-space_right-<value>${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6480391602915517459$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_7 = goog.getMsg(" Margin left {$startTagCode}tui-space_left-<value>{$closeTagCode}", {
          "startTagCode": "\uFFFD#60\uFFFD",
          "closeTagCode": "\uFFFD/#60\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6480391602915517459$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_7;
      } else {
        i18n_6 = $localize`:␟6b718bc95e71a96d2cc53de9ee971f0bf57f334a␟6480391602915517459: Margin left ${"\uFFFD#60\uFFFD"}:START_TAG_CODE:tui-space_left-<value>${"\uFFFD/#60\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1016868870778987287$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_9 = goog.getMsg(" Vertical and horizontal margins {$startTagCode}tui-space_vertical-<value>{$closeTagCode} and {$startTagCode}tui-space_horizontal-<value>{$closeTagCode}", {
          "startTagCode": "[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]",
          "closeTagCode": "[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_1016868870778987287$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_9;
      } else {
        i18n_8 = $localize`:␟c6571a7d4c84a25dd25a339fbd91e2a9a773e187␟1016868870778987287: Vertical and horizontal margins ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:tui-space_vertical-<value>${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:tui-space_horizontal-<value>${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_8 = core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      return [[1, "title"], i18n_0, [1, "row"], [1, "example", "tui-space_top-1", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-1"], [1, "example", "tui-space_top-2", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-2"], [1, "example", "tui-space_top-3", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-3"], [1, "example", "tui-space_top-4", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-4"], [1, "example", "tui-space_top-5", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-5"], i18n_2, [1, "row", "row_align-items_bottom"], [1, "example", "tui-space_bottom-1", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-1"], [1, "example", "tui-space_bottom-2", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-2"], [1, "example", "tui-space_bottom-3", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-3"], [1, "example", "tui-space_bottom-4", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-4"], [1, "example", "tui-space_bottom-5", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-5"], i18n_4, [1, "example", "tui-space_right-1"], ["cdkCopyToClipboard", "tui-space_right-1"], [1, "example", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_right-2"], [1, "example", "tui-space_right-3"], ["cdkCopyToClipboard", "tui-space_right-3"], [1, "example", "tui-space_right-4"], ["cdkCopyToClipboard", "tui-space_right-4"], [1, "example", "tui-space_right-5"], ["cdkCopyToClipboard", "tui-space_right-5"], [1, "example"], i18n_6, [1, "example", "tui-space_left-1"], ["cdkCopyToClipboard", "tui-space_left-1"], [1, "example", "tui-space_left-2"], ["cdkCopyToClipboard", "tui-space_left-2"], [1, "example", "tui-space_left-3"], ["cdkCopyToClipboard", "tui-space_left-3"], [1, "example", "tui-space_left-4"], ["cdkCopyToClipboard", "tui-space_left-4"], [1, "example", "tui-space_left-5"], ["cdkCopyToClipboard", "tui-space_left-5"], i18n_8, [1, "example", "tui-space_vertical-4"], ["cdkCopyToClipboard", "tui-space_vertical-4"], [1, "example", "tui-space_horizontal-4"], ["cdkCopyToClipboard", "tui-space_horizontal-4"]];
    },
    template: function TuiSpacingExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        core/* ɵɵi18nStart */.tHW(1, 1);
        core/* ɵɵelement */._UZ(2, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "div", 2);
        core/* ɵɵelementStart */.TgZ(4, "div", 3);
        core/* ɵɵelementStart */.TgZ(5, "tui-doc-copy", 4);
        core/* ɵɵtext */._uU(6, "tui-space_top-1");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "div", 5);
        core/* ɵɵelementStart */.TgZ(8, "tui-doc-copy", 6);
        core/* ɵɵtext */._uU(9, "tui-space_top-2");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "div", 7);
        core/* ɵɵelementStart */.TgZ(11, "tui-doc-copy", 8);
        core/* ɵɵtext */._uU(12, "tui-space_top-3");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(13, "div", 9);
        core/* ɵɵelementStart */.TgZ(14, "tui-doc-copy", 10);
        core/* ɵɵtext */._uU(15, "tui-space_top-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "div", 11);
        core/* ɵɵelementStart */.TgZ(17, "tui-doc-copy", 12);
        core/* ɵɵtext */._uU(18, "tui-space_top-5");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(19, "h2", 0);
        core/* ɵɵi18nStart */.tHW(20, 13);
        core/* ɵɵelement */._UZ(21, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(22, "div", 14);
        core/* ɵɵelementStart */.TgZ(23, "div", 15);
        core/* ɵɵelementStart */.TgZ(24, "tui-doc-copy", 16);
        core/* ɵɵtext */._uU(25, "tui-space_bottom-1");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "div", 17);
        core/* ɵɵelementStart */.TgZ(27, "tui-doc-copy", 18);
        core/* ɵɵtext */._uU(28, "tui-space_bottom-2");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(29, "div", 19);
        core/* ɵɵelementStart */.TgZ(30, "tui-doc-copy", 20);
        core/* ɵɵtext */._uU(31, "tui-space_bottom-3");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(32, "div", 21);
        core/* ɵɵelementStart */.TgZ(33, "tui-doc-copy", 22);
        core/* ɵɵtext */._uU(34, "tui-space_bottom-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(35, "div", 23);
        core/* ɵɵelementStart */.TgZ(36, "tui-doc-copy", 24);
        core/* ɵɵtext */._uU(37, "tui-space_bottom-5");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(38, "h2", 0);
        core/* ɵɵi18nStart */.tHW(39, 25);
        core/* ɵɵelement */._UZ(40, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(41, "div", 2);
        core/* ɵɵelementStart */.TgZ(42, "div", 26);
        core/* ɵɵelementStart */.TgZ(43, "tui-doc-copy", 27);
        core/* ɵɵtext */._uU(44, "tui-space_right-1");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(45, "div", 28);
        core/* ɵɵelementStart */.TgZ(46, "tui-doc-copy", 29);
        core/* ɵɵtext */._uU(47, "tui-space_right-2");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(48, "div", 30);
        core/* ɵɵelementStart */.TgZ(49, "tui-doc-copy", 31);
        core/* ɵɵtext */._uU(50, "tui-space_right-3");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(51, "div", 32);
        core/* ɵɵelementStart */.TgZ(52, "tui-doc-copy", 33);
        core/* ɵɵtext */._uU(53, "tui-space_right-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(54, "div", 34);
        core/* ɵɵelementStart */.TgZ(55, "tui-doc-copy", 35);
        core/* ɵɵtext */._uU(56, "tui-space_right-5");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(57, "div", 36);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(58, "h2", 0);
        core/* ɵɵi18nStart */.tHW(59, 37);
        core/* ɵɵelement */._UZ(60, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(61, "div", 2);
        core/* ɵɵelement */._UZ(62, "div", 36);
        core/* ɵɵelementStart */.TgZ(63, "div", 38);
        core/* ɵɵelementStart */.TgZ(64, "tui-doc-copy", 39);
        core/* ɵɵtext */._uU(65, "tui-space_left-1");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(66, "div", 40);
        core/* ɵɵelementStart */.TgZ(67, "tui-doc-copy", 41);
        core/* ɵɵtext */._uU(68, "tui-space_left-2");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(69, "div", 42);
        core/* ɵɵelementStart */.TgZ(70, "tui-doc-copy", 43);
        core/* ɵɵtext */._uU(71, "tui-space_left-3");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(72, "div", 44);
        core/* ɵɵelementStart */.TgZ(73, "tui-doc-copy", 45);
        core/* ɵɵtext */._uU(74, "tui-space_left-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(75, "div", 46);
        core/* ɵɵelementStart */.TgZ(76, "tui-doc-copy", 47);
        core/* ɵɵtext */._uU(77, "tui-space_left-5");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(78, "h2", 0);
        core/* ɵɵi18nStart */.tHW(79, 48);
        core/* ɵɵelement */._UZ(80, "code");
        core/* ɵɵelement */._UZ(81, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(82, "div", 2);
        core/* ɵɵelementStart */.TgZ(83, "div", 49);
        core/* ɵɵelementStart */.TgZ(84, "tui-doc-copy", 50);
        core/* ɵɵtext */._uU(85, "tui-space_vertical-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(86, "div", 51);
        core/* ɵɵelementStart */.TgZ(87, "tui-doc-copy", 52);
        core/* ɵɵtext */._uU(88, "tui-space_horizontal-4");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    styles: ["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.5rem 0 .75rem}.description[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.row[_ngcontent-%COMP%]{display:flex}.row_align-items_bottom[_ngcontent-%COMP%]{align-items:flex-end}.example[_ngcontent-%COMP%]{font:var(--tui-font-text-m);box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;width:11.25rem;height:4.6875rem;background-color:var(--tui-base-01);border-radius:var(--tui-radius-m)}"],
    changeDetection: 0
  });
  return TuiSpacingExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/spaces/examples/2/index.ts



let TuiSpacingExample2 = /*#__PURE__*/(() => {
  class TuiSpacingExample2 {}

  TuiSpacingExample2.ɵfac = function TuiSpacingExample2_Factory(t) {
    return new (t || TuiSpacingExample2)();
  };

  TuiSpacingExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiSpacingExample2,
    selectors: [["tui-spaces-example-2"]],
    decls: 89,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4234562778517590026$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Margin top {$startTagCode}.tui-space(top, <value>);{$closeTagCode}", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_4234562778517590026$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟1b880e3c0fdf47d9310a5ee0deba9e8345c1614a␟4234562778517590026: Margin top ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:.tui-space(top, <value>);${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6296142632874877074$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" Margin bottom {$startTagCode}.tui-space(bottom, <value>);{$closeTagCode}", {
          "startTagCode": "\uFFFD#21\uFFFD",
          "closeTagCode": "\uFFFD/#21\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6296142632874877074$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟4a3e49cc3e358c7808e6e7e970cd190ea12f9eb2␟6296142632874877074: Margin bottom ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:.tui-space(bottom, <value>);${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6540572016873140224$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Margin right {$startTagCode}.tui-space(right, <value>);{$closeTagCode}", {
          "startTagCode": "\uFFFD#40\uFFFD",
          "closeTagCode": "\uFFFD/#40\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_6540572016873140224$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟077ac3d7d8c04f871ce4e06b86b4b43932e26959␟6540572016873140224: Margin right ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:.tui-space(right, <value>);${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7118782343753729756$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_7 = goog.getMsg(" Margin left {$startTagCode}.tui-space(left, <value>);{$closeTagCode}", {
          "startTagCode": "\uFFFD#60\uFFFD",
          "closeTagCode": "\uFFFD/#60\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_7118782343753729756$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_7;
      } else {
        i18n_6 = $localize`:␟cd8ea17317166aeae5ff25b5903f44b475aee96e␟7118782343753729756: Margin left ${"\uFFFD#60\uFFFD"}:START_TAG_CODE:.tui-space(left, <value>);${"\uFFFD/#60\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1756761301686756517$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_9 = goog.getMsg(" Vertical and horizontal margins {$startTagCode}.tui-space(vertical, <value>);{$closeTagCode} and {$startTagCode}.tui-space(horizontal, <value>);{$closeTagCode}", {
          "startTagCode": "[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]",
          "closeTagCode": "[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_1756761301686756517$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_9;
      } else {
        i18n_8 = $localize`:␟3b9f9868a1a21ce8f6b971f323dcdf694988837a␟1756761301686756517: Vertical and horizontal margins ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:.tui-space(vertical, <value>);${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:.tui-space(horizontal, <value>);${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_8 = core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      return [[1, "title"], i18n_0, [1, "row"], [1, "example", "example_top-1"], ["cdkCopyToClipboard", ".tui-space(top, 1);"], [1, "example", "example_top-2"], ["cdkCopyToClipboard", ".tui-space(top, 2);"], [1, "example", "example_top-3"], ["cdkCopyToClipboard", ".tui-space(top, 3);"], [1, "example", "example_top-4"], ["cdkCopyToClipboard", ".tui-space(top, 4);"], [1, "example", "example_top-5"], ["cdkCopyToClipboard", ".tui-space(top, 5);"], i18n_2, [1, "row", "row_align-items_bottom"], [1, "example", "example_bottom-1"], ["cdkCopyToClipboard", ".tui-space(bottom, 1);"], [1, "example", "example_bottom-2"], ["cdkCopyToClipboard", ".tui-space(bottom, 2);"], [1, "example", "example_bottom-3"], ["cdkCopyToClipboard", ".tui-space(bottom, 3);"], [1, "example", "example_bottom-4"], ["cdkCopyToClipboard", ".tui-space(bottom, 4);"], [1, "example", "example_bottom-5"], ["cdkCopyToClipboard", ".tui-space(bottom, 5);"], i18n_4, [1, "example", "example_right-1"], ["cdkCopyToClipboard", ".tui-space(right, 1);"], [1, "example", "example_right-2"], ["cdkCopyToClipboard", ".tui-space(right, 2);"], [1, "example", "example_right-3"], ["cdkCopyToClipboard", ".tui-space(right, 3);"], [1, "example", "example_right-4"], ["cdkCopyToClipboard", ".tui-space(right, 4);"], [1, "example", "example_right-5"], ["cdkCopyToClipboard", ".tui-space(right, 5);"], [1, "example"], i18n_6, [1, "example", "example_left-1"], ["cdkCopyToClipboard", ".tui-space(left, 1);"], [1, "example", "example_left-2"], ["cdkCopyToClipboard", ".tui-space(left, 2);"], [1, "example", "example_left-3"], ["cdkCopyToClipboard", ".tui-space(left, 3);"], [1, "example", "example_left-4"], ["cdkCopyToClipboard", ".tui-space(left, 4);"], [1, "example", "example_left-5"], ["cdkCopyToClipboard", ".tui-space(left, 5);"], i18n_8, [1, "example", "example_vertical"], ["cdkCopyToClipboard", ".tui-space(vertical, 4);"], [1, "example", "example_horizontal"], ["cdkCopyToClipboard", ".tui-space(horizontal, 4);"]];
    },
    template: function TuiSpacingExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        core/* ɵɵi18nStart */.tHW(1, 1);
        core/* ɵɵelement */._UZ(2, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "div", 2);
        core/* ɵɵelementStart */.TgZ(4, "div", 3);
        core/* ɵɵelementStart */.TgZ(5, "tui-doc-copy", 4);
        core/* ɵɵtext */._uU(6, ".tui-space(top, 1);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "div", 5);
        core/* ɵɵelementStart */.TgZ(8, "tui-doc-copy", 6);
        core/* ɵɵtext */._uU(9, ".tui-space(top, 2);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "div", 7);
        core/* ɵɵelementStart */.TgZ(11, "tui-doc-copy", 8);
        core/* ɵɵtext */._uU(12, ".tui-space(top, 3);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(13, "div", 9);
        core/* ɵɵelementStart */.TgZ(14, "tui-doc-copy", 10);
        core/* ɵɵtext */._uU(15, ".tui-space(top, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "div", 11);
        core/* ɵɵelementStart */.TgZ(17, "tui-doc-copy", 12);
        core/* ɵɵtext */._uU(18, ".tui-space(top, 5);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(19, "h2", 0);
        core/* ɵɵi18nStart */.tHW(20, 13);
        core/* ɵɵelement */._UZ(21, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(22, "div", 14);
        core/* ɵɵelementStart */.TgZ(23, "div", 15);
        core/* ɵɵelementStart */.TgZ(24, "tui-doc-copy", 16);
        core/* ɵɵtext */._uU(25, ".tui-space(bottom, 1);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "div", 17);
        core/* ɵɵelementStart */.TgZ(27, "tui-doc-copy", 18);
        core/* ɵɵtext */._uU(28, ".tui-space(bottom, 2);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(29, "div", 19);
        core/* ɵɵelementStart */.TgZ(30, "tui-doc-copy", 20);
        core/* ɵɵtext */._uU(31, ".tui-space(bottom, 3);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(32, "div", 21);
        core/* ɵɵelementStart */.TgZ(33, "tui-doc-copy", 22);
        core/* ɵɵtext */._uU(34, ".tui-space(bottom, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(35, "div", 23);
        core/* ɵɵelementStart */.TgZ(36, "tui-doc-copy", 24);
        core/* ɵɵtext */._uU(37, ".tui-space(bottom, 5);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(38, "h2", 0);
        core/* ɵɵi18nStart */.tHW(39, 25);
        core/* ɵɵelement */._UZ(40, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(41, "div", 2);
        core/* ɵɵelementStart */.TgZ(42, "div", 26);
        core/* ɵɵelementStart */.TgZ(43, "tui-doc-copy", 27);
        core/* ɵɵtext */._uU(44, ".tui-space(right, 1);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(45, "div", 28);
        core/* ɵɵelementStart */.TgZ(46, "tui-doc-copy", 29);
        core/* ɵɵtext */._uU(47, ".tui-space(right, 2);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(48, "div", 30);
        core/* ɵɵelementStart */.TgZ(49, "tui-doc-copy", 31);
        core/* ɵɵtext */._uU(50, ".tui-space(right, 3);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(51, "div", 32);
        core/* ɵɵelementStart */.TgZ(52, "tui-doc-copy", 33);
        core/* ɵɵtext */._uU(53, ".tui-space(right, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(54, "div", 34);
        core/* ɵɵelementStart */.TgZ(55, "tui-doc-copy", 35);
        core/* ɵɵtext */._uU(56, ".tui-space(right, 5);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(57, "div", 36);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(58, "h2", 0);
        core/* ɵɵi18nStart */.tHW(59, 37);
        core/* ɵɵelement */._UZ(60, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(61, "div", 2);
        core/* ɵɵelement */._UZ(62, "div", 36);
        core/* ɵɵelementStart */.TgZ(63, "div", 38);
        core/* ɵɵelementStart */.TgZ(64, "tui-doc-copy", 39);
        core/* ɵɵtext */._uU(65, ".tui-space(left, 1);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(66, "div", 40);
        core/* ɵɵelementStart */.TgZ(67, "tui-doc-copy", 41);
        core/* ɵɵtext */._uU(68, ".tui-space(left, 2);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(69, "div", 42);
        core/* ɵɵelementStart */.TgZ(70, "tui-doc-copy", 43);
        core/* ɵɵtext */._uU(71, ".tui-space(left, 3);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(72, "div", 44);
        core/* ɵɵelementStart */.TgZ(73, "tui-doc-copy", 45);
        core/* ɵɵtext */._uU(74, ".tui-space(left, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(75, "div", 46);
        core/* ɵɵelementStart */.TgZ(76, "tui-doc-copy", 47);
        core/* ɵɵtext */._uU(77, ".tui-space(left, 5);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(78, "h2", 0);
        core/* ɵɵi18nStart */.tHW(79, 48);
        core/* ɵɵelement */._UZ(80, "code");
        core/* ɵɵelement */._UZ(81, "code");
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(82, "div", 2);
        core/* ɵɵelementStart */.TgZ(83, "div", 49);
        core/* ɵɵelementStart */.TgZ(84, "tui-doc-copy", 50);
        core/* ɵɵtext */._uU(85, ".tui-space(vertical, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(86, "div", 51);
        core/* ɵɵelementStart */.TgZ(87, "tui-doc-copy", 52);
        core/* ɵɵtext */._uU(88, ".tui-space(horizontal, 4);");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    styles: ["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.5rem 0 .75rem}.description[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.row[_ngcontent-%COMP%]{display:flex}.row_align-items_bottom[_ngcontent-%COMP%]{align-items:flex-end}.example[_ngcontent-%COMP%]{margin-left:.5rem;font:var(--tui-font-text-m);box-shadow:0 1.125rem 1.875rem rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;width:11.25rem;height:4.6875rem;background-color:var(--tui-base-01);border-radius:var(--tui-radius-m)}.example_top-1[_ngcontent-%COMP%]{margin-top:.25rem}.example_top-2[_ngcontent-%COMP%]{margin-top:.5rem}.example_top-3[_ngcontent-%COMP%]{margin-top:.75rem}.example_top-4[_ngcontent-%COMP%]{margin-top:1rem}.example_top-5[_ngcontent-%COMP%]{margin-top:1.25rem}.example_bottom-1[_ngcontent-%COMP%]{margin-bottom:.25rem}.example_bottom-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.example_bottom-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.example_bottom-4[_ngcontent-%COMP%]{margin-bottom:1rem}.example_bottom-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.example_right-1[_ngcontent-%COMP%]{margin-right:.25rem}.example_right-2[_ngcontent-%COMP%]{margin-right:.5rem}.example_right-3[_ngcontent-%COMP%]{margin-right:.75rem}.example_right-4[_ngcontent-%COMP%]{margin-right:1rem}.example_right-5[_ngcontent-%COMP%]{margin-right:1.25rem}.example_left-1.example[_ngcontent-%COMP%]{margin-left:.25rem}.example_left-2.example[_ngcontent-%COMP%]{margin-left:.5rem}.example_left-3.example[_ngcontent-%COMP%]{margin-left:.75rem}.example_left-4.example[_ngcontent-%COMP%]{margin-left:1rem}.example_left-5.example[_ngcontent-%COMP%]{margin-left:1.25rem}.example_vertical[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.example_horizontal[_ngcontent-%COMP%]{margin-right:1rem;margin-left:1rem}"],
    changeDetection: 0
  });
  return TuiSpacingExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/spaces/spaces.component.ts








function SpacesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 1, 1);
    core/* ɵɵelement */._UZ(1, "div", 3);
    core/* ɵɵelementStart */.TgZ(2, "div", 4);
    core/* ɵɵelement */._UZ(3, "strong");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "div", 3);
    core/* ɵɵelement */._UZ(5, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "div", 4);
    core/* ɵɵelement */._UZ(7, "strong");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(8, "tui-doc-code", 5);
    core/* ɵɵelementStart */.TgZ(9, "p");
    core/* ɵɵelement */._UZ(10, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    core/* ɵɵelement */._UZ(12, "tui-spaces-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 7);
    core/* ɵɵelement */._UZ(14, "tui-spaces-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(8);
    core/* ɵɵproperty */.Q6J("code", ctx_r0.exampleBasicImportsLess);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

let SpacesComponent = /*#__PURE__*/(() => {
  class SpacesComponent {
    constructor() {
      this.exampleBasicImportsLess = __webpack_require__.e(/* import() */ 46107).then(__webpack_require__.t.bind(__webpack_require__, 46107, 17));
      this.exampleIndexLess = __webpack_require__.e(/* import() */ 32575).then(__webpack_require__.t.bind(__webpack_require__, 32575, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 76421).then(__webpack_require__.t.bind(__webpack_require__, 76421, 17)),
        HTML: __webpack_require__.e(/* import() */ 43040).then(__webpack_require__.t.bind(__webpack_require__, 43040, 17)),
        LESS: __webpack_require__.e(/* import() */ 28502).then(__webpack_require__.t.bind(__webpack_require__, 28502, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 82409).then(__webpack_require__.t.bind(__webpack_require__, 82409, 17)),
        HTML: __webpack_require__.e(/* import() */ 58043).then(__webpack_require__.t.bind(__webpack_require__, 58043, 17)),
        LESS: __webpack_require__.e(/* import() */ 15343).then(__webpack_require__.t.bind(__webpack_require__, 15343, 17))
      };
    }

  }

  SpacesComponent.ɵfac = function SpacesComponent_Factory(t) {
    return new (t || SpacesComponent)();
  };

  SpacesComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SpacesComponent,
    selectors: [["spaces"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_660809762116764762$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS_1 = goog.getMsg("Spaces");
        i18n_0 = MSG_EXTERNAL_660809762116764762$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟041a8f5e357685f1af16ffb9ffda7f2db6dcef20␟660809762116764762:Spaces`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1956073378030411818$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__4 = goog.getMsg("Classes");
        i18n_3 = MSG_EXTERNAL_1956073378030411818$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟1172ffb28e42ff5ae0d36af63448744a3af23d41␟1956073378030411818:Classes`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5391778508352850475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__6 = goog.getMsg("Mixins");
        i18n_5 = MSG_EXTERNAL_5391778508352850475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟7503a8046c7cb804d840f16206896e9075dcc0e0␟5391778508352850475:Mixins`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4643080773802688727$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__7 = goog.getMsg("{$startTagNgTemplate}{$startTagDiv} You can use global classes or LESS mixins to make (n multiples 4px) margins {$closeTagDiv}{$startTagDiv_1}{$startTagStrong}Classes{$closeTagStrong} are included in global styles of core library, you do not need to setup them {$closeTagDiv}{$startTagDiv} You can build a class with direction and value between 0 and 15 ( {$startTagCode}tui-space_<direction>-<value>{$closeTagCode} ). {$closeTagDiv}{$startTagDiv_1}{$startTagStrong}Mixins{$closeTagStrong} are included in local LESS styles, so you need to import them into LESS styles file and add it to classes of your component {$closeTagDiv}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$startParagraph} Mixin also gets a direction and a value ( {$startTagCode}.tui-space(<direction>, <value>);{$closeTagCode} ). {$closeParagraph}{$startTagTuiDocExample}{$startTagTuiSpacesExample_1}{$closeTagTuiSpacesExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiSpacesExample_2}{$closeTagTuiSpacesExample_2}{$closeTagTuiDocExample}{$closeTagNgTemplate}", {
          "startTagNgTemplate": "\uFFFD*2:1\uFFFD",
          "closeTagNgTemplate": "\uFFFD/*2:1\uFFFD",
          "startTagDiv": "[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]",
          "closeTagDiv": "[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]",
          "startTagDiv_1": "[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]",
          "startTagStrong": "[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]",
          "closeTagStrong": "[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]",
          "startTagCode": "[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]",
          "closeTagCode": "[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]",
          "startTagTuiDocCode": "\uFFFD#8:1\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#8:1\uFFFD",
          "startParagraph": "\uFFFD#9:1\uFFFD",
          "closeParagraph": "\uFFFD/#9:1\uFFFD",
          "startTagTuiDocExample": "\uFFFD#11:1\uFFFD",
          "startTagTuiSpacesExample_1": "\uFFFD#12:1\uFFFD",
          "closeTagTuiSpacesExample_1": "\uFFFD/#12:1\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#11:1\uFFFD|\uFFFD/#13:1\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#13:1\uFFFD",
          "startTagTuiSpacesExample_2": "\uFFFD#14:1\uFFFD",
          "closeTagTuiSpacesExample_2": "\uFFFD/#14:1\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_4643080773802688727$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__7;
      } else {
        i18n_2 = $localize`:␟2e09c48e4438c9fb6cb90d4812c9b5a8feb3c76e␟4643080773802688727:${"\uFFFD*2:1\uFFFD"}:START_TAG_NG_TEMPLATE:${"[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]"}:START_TAG_DIV: You can use global classes or LESS mixins to make (n multiples 4px) margins ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]"}:START_TAG_DIV_1:${"[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]"}:START_TAG_STRONG:Classes${"[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]"}:CLOSE_TAG_STRONG: are included in global styles of core library, you do not need to setup them ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]"}:START_TAG_DIV: You can build a class with direction and value between 0 and 15 ( ${"[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]"}:START_TAG_CODE:tui-space_<direction>-<value>${"[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]"}:START_TAG_DIV_1:${"[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]"}:START_TAG_STRONG:Mixins${"[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]"}:CLOSE_TAG_STRONG: are included in local LESS styles, so you need to import them into LESS styles file and add it to classes of your component ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#8:1\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#8:1\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD#9:1\uFFFD"}:START_PARAGRAPH: Mixin also gets a direction and a value ( ${"[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]"}:START_TAG_CODE:.tui-space(<direction>, <value>);${"[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]"}:CLOSE_TAG_CODE: ). ${"\uFFFD/#9:1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#11:1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#12:1\uFFFD"}:START_TAG_TUI_SPACES_EXAMPLE_1:${"\uFFFD/#12:1\uFFFD"}:CLOSE_TAG_TUI_SPACES_EXAMPLE_1:${"[\uFFFD/#11:1\uFFFD|\uFFFD/#13:1\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#13:1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#14:1\uFFFD"}:START_TAG_TUI_SPACES_EXAMPLE_2:${"\uFFFD/#14:1\uFFFD"}:CLOSE_TAG_TUI_SPACES_EXAMPLE_2:${"[\uFFFD/#11:1\uFFFD|\uFFFD/#13:1\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD/*2:1\uFFFD"}:CLOSE_TAG_NG_TEMPLATE:`;
      }

      i18n_2 = core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      return [["header", i18n_0], i18n_2, ["pageTab", ""], [1, "tui-space_bottom-3"], [1, "tui-space_top-3", "tui-space_bottom-3"], ["filename", "styles.less", 3, "code"], ["id", "classes", "heading", i18n_3, 3, "content"], ["id", "mixins", "heading", i18n_5, 3, "content"]];
    },
    template: function SpacesComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵi18nStart */.tHW(1, 1);
        core/* ɵɵtemplate */.YNc(2, SpacesComponent_ng_template_2_Template, 15, 3, "ng-template", 2);
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, code_component/* TuiDocCodeComponent */.c, example_component/* TuiDocExampleComponent */.f, TuiSpacingExample1, TuiSpacingExample2],
    encapsulation: 2,
    changeDetection: 0
  });
  return SpacesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/spaces/spaces.module.ts









let SpacesModule = /*#__PURE__*/(() => {
  class SpacesModule {}

  SpacesModule.ɵfac = function SpacesModule_Factory(t) {
    return new (t || SpacesModule)();
  };

  SpacesModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: SpacesModule
  });
  SpacesModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(SpacesComponent))]]
  });
  return SpacesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(SpacesModule, {
    declarations: [SpacesComponent, TuiSpacingExample1, TuiSpacingExample2],
    imports: [common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [SpacesComponent]
  });
})();

/***/ })

}]);