(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-spaces-spaces-module"],{

/***/ "./src/modules/markup/spaces/examples/1/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/spaces/examples/1/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiSpacingExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSpacingExample1", function() { return TuiSpacingExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2781026574520276304$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" Margin top {$startTagCode}tui-space_top-<value>{$closeTagCode}", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2781026574520276304$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟43eae6b60b4232c11a7183d30b8537c4a3787b08␟2781026574520276304: Margin top ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tui-space_top-<value>${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8589967845732928415$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" Margin bottom {$startTagCode}tui-space_bottom-<value>{$closeTagCode}", { "startTagCode": "\uFFFD#21\uFFFD", "closeTagCode": "\uFFFD/#21\uFFFD" });
    I18N_2 = MSG_EXTERNAL_8589967845732928415$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟2f66b959f921327d8f3835835b3a2992101d5275␟8589967845732928415: Margin bottom ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:tui-space_bottom-<value>${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8125293152573422623$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_5 = goog.getMsg(" Margin right {$startTagCode}tui-space_right-<value>{$closeTagCode}", { "startTagCode": "\uFFFD#40\uFFFD", "closeTagCode": "\uFFFD/#40\uFFFD" });
    I18N_4 = MSG_EXTERNAL_8125293152573422623$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟d7c71d0bdeb371c2d90405a09a40273c0892d24d␟8125293152573422623: Margin right ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:tui-space_right-<value>${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6480391602915517459$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_7 = goog.getMsg(" Margin left {$startTagCode}tui-space_left-<value>{$closeTagCode}", { "startTagCode": "\uFFFD#60\uFFFD", "closeTagCode": "\uFFFD/#60\uFFFD" });
    I18N_6 = MSG_EXTERNAL_6480391602915517459$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟6b718bc95e71a96d2cc53de9ee971f0bf57f334a␟6480391602915517459: Margin left ${"\uFFFD#60\uFFFD"}:START_TAG_CODE:tui-space_left-<value>${"\uFFFD/#60\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1016868870778987287$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_9 = goog.getMsg(" Vertical and horizontal margins {$startTagCode}tui-space_vertical-<value>{$closeTagCode} and {$startTagCode}tui-space_horizontal-<value>{$closeTagCode}", { "startTagCode": "[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]", "closeTagCode": "[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]" });
    I18N_8 = MSG_EXTERNAL_1016868870778987287$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_1_INDEX_TS_9;
}
else {
    I18N_8 = $localize `:␟c6571a7d4c84a25dd25a339fbd91e2a9a773e187␟1016868870778987287: Vertical and horizontal margins ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:tui-space_vertical-<value>${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:tui-space_horizontal-<value>${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
class TuiSpacingExample1 {
}
TuiSpacingExample1.ɵfac = function TuiSpacingExample1_Factory(t) { return new (t || TuiSpacingExample1)(); };
TuiSpacingExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSpacingExample1, selectors: [["tui-spaces-example-1"]], decls: 89, vars: 0, consts: [[1, "title"], [1, "row"], [1, "example", "tui-space_top-1", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-1"], [1, "example", "tui-space_top-2", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-2"], [1, "example", "tui-space_top-3", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-3"], [1, "example", "tui-space_top-4", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-4"], [1, "example", "tui-space_top-5", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_top-5"], [1, "row", "row_align-items_bottom"], [1, "example", "tui-space_bottom-1", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-1"], [1, "example", "tui-space_bottom-2", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-2"], [1, "example", "tui-space_bottom-3", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-3"], [1, "example", "tui-space_bottom-4", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-4"], [1, "example", "tui-space_bottom-5", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_bottom-5"], [1, "example", "tui-space_right-1"], ["cdkCopyToClipboard", "tui-space_right-1"], [1, "example", "tui-space_right-2"], ["cdkCopyToClipboard", "tui-space_right-2"], [1, "example", "tui-space_right-3"], ["cdkCopyToClipboard", "tui-space_right-3"], [1, "example", "tui-space_right-4"], ["cdkCopyToClipboard", "tui-space_right-4"], [1, "example", "tui-space_right-5"], ["cdkCopyToClipboard", "tui-space_right-5"], [1, "example"], [1, "example", "tui-space_left-1"], ["cdkCopyToClipboard", "tui-space_left-1"], [1, "example", "tui-space_left-2"], ["cdkCopyToClipboard", "tui-space_left-2"], [1, "example", "tui-space_left-3"], ["cdkCopyToClipboard", "tui-space_left-3"], [1, "example", "tui-space_left-4"], ["cdkCopyToClipboard", "tui-space_left-4"], [1, "example", "tui-space_left-5"], ["cdkCopyToClipboard", "tui-space_left-5"], [1, "example", "tui-space_vertical-4"], ["cdkCopyToClipboard", "tui-space_vertical-4"], [1, "example", "tui-space_horizontal-4"], ["cdkCopyToClipboard", "tui-space_horizontal-4"]], template: function TuiSpacingExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-copy", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "tui-space_top-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-copy", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "tui-space_top-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-copy", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "tui-space_top-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-copy", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "tui-space_top-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-copy", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "tui-space_top-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](20, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tui-doc-copy", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "tui-space_bottom-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tui-doc-copy", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "tui-space_bottom-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tui-doc-copy", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "tui-space_bottom-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tui-doc-copy", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "tui-space_bottom-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tui-doc-copy", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "tui-space_bottom-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](39, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tui-doc-copy", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "tui-space_right-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tui-doc-copy", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "tui-space_right-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tui-doc-copy", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "tui-space_right-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tui-doc-copy", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "tui-space_right-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tui-doc-copy", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "tui-space_right-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](59, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tui-doc-copy", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "tui-space_left-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tui-doc-copy", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "tui-space_left-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tui-doc-copy", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "tui-space_left-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tui-doc-copy", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "tui-space_left-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tui-doc-copy", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "tui-space_left-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](79, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tui-doc-copy", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "tui-space_vertical-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tui-doc-copy", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "tui-space_horizontal-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n  margin: 1.5rem 0 0.75rem;\n}\n.description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.row_align-items_bottom[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.example[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 11.25rem;\n  height: 4.6875rem;\n  background-color: var(--tui-base-01);\n  border-radius: var(--tui-radius-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NwYWNlcy9leGFtcGxlcy8xL2luZGV4LnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9zcGFjZXMvZXhhbXBsZXMvMS9pbmRleC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxjQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0Esd0JBQUE7QURJSjtBQ0RBO0VBQ0ksNEJBQUE7QURHSjtBQ0FBO0VBQ0ksYUFBQTtBREVKO0FDQUk7RUFDSSxxQkFBQTtBREVSO0FDRUE7RUFDSSw0QkFBQTtFQ3VISSxnREFBQTtFRHJISixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QURBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9zcGFjZXMvZXhhbXBsZXMvMS9pbmRleC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gIG1hcmdpbjogMS41cmVtIDAgMC43NXJlbTtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3dfYWxpZ24taXRlbXNfYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmV4YW1wbGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTEuMjVyZW07XG4gIGhlaWdodDogNC42ODc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xuICAgIG1hcmdpbjogMS41cmVtIDAgMC43NXJlbTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9hbGlnbi1pdGVtc19ib3R0b20ge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxufVxuXG4uZXhhbXBsZSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgICAuc2hhZG93KDEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTEuMjVyZW07XG4gICAgaGVpZ2h0OiA0LjY4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSpacingExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-spaces-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/spaces/examples/2/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/spaces/examples/2/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiSpacingExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSpacingExample2", function() { return TuiSpacingExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4234562778517590026$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Margin top {$startTagCode}.tui-space(top, <value>);{$closeTagCode}", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_4234562778517590026$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟1b880e3c0fdf47d9310a5ee0deba9e8345c1614a␟4234562778517590026: Margin top ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:.tui-space(top, <value>);${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6296142632874877074$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" Margin bottom {$startTagCode}.tui-space(bottom, <value>);{$closeTagCode}", { "startTagCode": "\uFFFD#21\uFFFD", "closeTagCode": "\uFFFD/#21\uFFFD" });
    I18N_2 = MSG_EXTERNAL_6296142632874877074$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟4a3e49cc3e358c7808e6e7e970cd190ea12f9eb2␟6296142632874877074: Margin bottom ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:.tui-space(bottom, <value>);${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6540572016873140224$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Margin right {$startTagCode}.tui-space(right, <value>);{$closeTagCode}", { "startTagCode": "\uFFFD#40\uFFFD", "closeTagCode": "\uFFFD/#40\uFFFD" });
    I18N_4 = MSG_EXTERNAL_6540572016873140224$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟077ac3d7d8c04f871ce4e06b86b4b43932e26959␟6540572016873140224: Margin right ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:.tui-space(right, <value>);${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7118782343753729756$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_7 = goog.getMsg(" Margin left {$startTagCode}.tui-space(left, <value>);{$closeTagCode}", { "startTagCode": "\uFFFD#60\uFFFD", "closeTagCode": "\uFFFD/#60\uFFFD" });
    I18N_6 = MSG_EXTERNAL_7118782343753729756$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟cd8ea17317166aeae5ff25b5903f44b475aee96e␟7118782343753729756: Margin left ${"\uFFFD#60\uFFFD"}:START_TAG_CODE:.tui-space(left, <value>);${"\uFFFD/#60\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1756761301686756517$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_9 = goog.getMsg(" Vertical and horizontal margins {$startTagCode}.tui-space(vertical, <value>);{$closeTagCode} and {$startTagCode}.tui-space(horizontal, <value>);{$closeTagCode}", { "startTagCode": "[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]", "closeTagCode": "[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]" });
    I18N_8 = MSG_EXTERNAL_1756761301686756517$$SRC_MODULES_MARKUP_SPACES_EXAMPLES_2_INDEX_TS_9;
}
else {
    I18N_8 = $localize `:␟3b9f9868a1a21ce8f6b971f323dcdf694988837a␟1756761301686756517: Vertical and horizontal margins ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:.tui-space(vertical, <value>);${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#80\uFFFD|\uFFFD#81\uFFFD]"}:START_TAG_CODE:.tui-space(horizontal, <value>);${"[\uFFFD/#80\uFFFD|\uFFFD/#81\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
class TuiSpacingExample2 {
}
TuiSpacingExample2.ɵfac = function TuiSpacingExample2_Factory(t) { return new (t || TuiSpacingExample2)(); };
TuiSpacingExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSpacingExample2, selectors: [["tui-spaces-example-2"]], decls: 89, vars: 0, consts: [[1, "title"], [1, "row"], [1, "example", "example_top-1"], ["cdkCopyToClipboard", ".tui-space(top, 1);"], [1, "example", "example_top-2"], ["cdkCopyToClipboard", ".tui-space(top, 2);"], [1, "example", "example_top-3"], ["cdkCopyToClipboard", ".tui-space(top, 3);"], [1, "example", "example_top-4"], ["cdkCopyToClipboard", ".tui-space(top, 4);"], [1, "example", "example_top-5"], ["cdkCopyToClipboard", ".tui-space(top, 5);"], [1, "row", "row_align-items_bottom"], [1, "example", "example_bottom-1"], ["cdkCopyToClipboard", ".tui-space(bottom, 1);"], [1, "example", "example_bottom-2"], ["cdkCopyToClipboard", ".tui-space(bottom, 2);"], [1, "example", "example_bottom-3"], ["cdkCopyToClipboard", ".tui-space(bottom, 3);"], [1, "example", "example_bottom-4"], ["cdkCopyToClipboard", ".tui-space(bottom, 4);"], [1, "example", "example_bottom-5"], ["cdkCopyToClipboard", ".tui-space(bottom, 5);"], [1, "example", "example_right-1"], ["cdkCopyToClipboard", ".tui-space(right, 1);"], [1, "example", "example_right-2"], ["cdkCopyToClipboard", ".tui-space(right, 2);"], [1, "example", "example_right-3"], ["cdkCopyToClipboard", ".tui-space(right, 3);"], [1, "example", "example_right-4"], ["cdkCopyToClipboard", ".tui-space(right, 4);"], [1, "example", "example_right-5"], ["cdkCopyToClipboard", ".tui-space(right, 5);"], [1, "example"], [1, "example", "example_left-1"], ["cdkCopyToClipboard", ".tui-space(left, 1);"], [1, "example", "example_left-2"], ["cdkCopyToClipboard", ".tui-space(left, 2);"], [1, "example", "example_left-3"], ["cdkCopyToClipboard", ".tui-space(left, 3);"], [1, "example", "example_left-4"], ["cdkCopyToClipboard", ".tui-space(left, 4);"], [1, "example", "example_left-5"], ["cdkCopyToClipboard", ".tui-space(left, 5);"], [1, "example", "example_vertical"], ["cdkCopyToClipboard", ".tui-space(vertical, 4);"], [1, "example", "example_horizontal"], ["cdkCopyToClipboard", ".tui-space(horizontal, 4);"]], template: function TuiSpacingExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-copy", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".tui-space(top, 1);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-copy", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".tui-space(top, 2);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-copy", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".tui-space(top, 3);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-copy", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".tui-space(top, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-copy", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".tui-space(top, 5);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](20, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tui-doc-copy", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".tui-space(bottom, 1);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tui-doc-copy", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".tui-space(bottom, 2);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tui-doc-copy", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ".tui-space(bottom, 3);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tui-doc-copy", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".tui-space(bottom, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tui-doc-copy", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".tui-space(bottom, 5);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](39, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tui-doc-copy", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".tui-space(right, 1);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tui-doc-copy", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".tui-space(right, 2);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tui-doc-copy", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".tui-space(right, 3);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tui-doc-copy", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ".tui-space(right, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tui-doc-copy", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".tui-space(right, 5);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](59, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tui-doc-copy", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ".tui-space(left, 1);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tui-doc-copy", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ".tui-space(left, 2);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tui-doc-copy", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ".tui-space(left, 3);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tui-doc-copy", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".tui-space(left, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tui-doc-copy", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ".tui-space(left, 5);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](79, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tui-doc-copy", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ".tui-space(vertical, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tui-doc-copy", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".tui-space(horizontal, 4);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n  margin: 1.5rem 0 0.75rem;\n}\n.description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.row_align-items_bottom[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.example[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font: var(--tui-font-text-m);\n  box-shadow: 0 1.125rem 1.875rem rgba(0, 0, 0, 0.48);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 11.25rem;\n  height: 4.6875rem;\n  background-color: var(--tui-base-01);\n  border-radius: var(--tui-radius-m);\n}\n.example_top-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.example_top-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.example_top-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.example_top-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.example_top-5[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.example_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.example_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.example_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.example_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.example_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.example_right-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.example_right-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.example_right-3[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.example_right-4[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.example_right-5[_ngcontent-%COMP%] {\n  margin-right: 1.25rem;\n}\n.example_left-1.example[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.example_left-2.example[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.example_left-3.example[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.example_left-4.example[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.example_left-5.example[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n.example_vertical[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.example_horizontal[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NwYWNlcy9leGFtcGxlcy8yL2luZGV4LnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9zcGFjZXMvZXhhbXBsZXMvMi9pbmRleC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxjQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0Esd0JBQUE7QURJSjtBQ0RBO0VBQ0ksNEJBQUE7QURHSjtBQ0FBO0VBQ0ksYUFBQTtBREVKO0FDQUk7RUFDSSxxQkFBQTtBREVSO0FDRUE7RUMwU1EsbUJBQUE7RUR4U0osNEJBQUE7RUNnSUksbURBQUE7RUQ5SEosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0FEQUo7QUNFSTtFQ2lSSSxtQkFBQTtBRmhSUjtBQ0dJO0VDNlFJLGtCQUFBO0FGN1FSO0FDSUk7RUN5UUksbUJBQUE7QUYxUVI7QUNLSTtFQ3FRSSxnQkFBQTtBRnZRUjtBQ01JO0VDaVFJLG1CQUFBO0FGcFFSO0FDT0k7RUNpUUksc0JBQUE7QUZyUVI7QUNRSTtFQzZQSSxxQkFBQTtBRmxRUjtBQ1NJO0VDeVBJLHNCQUFBO0FGL1BSO0FDVUk7RUNxUEksbUJBQUE7QUY1UFI7QUNXSTtFQ2lQSSxzQkFBQTtBRnpQUjtBQ1lJO0VDMFBJLHFCQUFBO0FGblFSO0FDYUk7RUNzUEksb0JBQUE7QUZoUVI7QUNjSTtFQ2tQSSxxQkFBQTtBRjdQUjtBQ2VJO0VDOE9JLGtCQUFBO0FGMVBSO0FDZ0JJO0VDME9JLHFCQUFBO0FGdlBSO0FDaUJJO0VDa09JLG9CQUFBO0FGaFBSO0FDa0JJO0VDOE5JLG1CQUFBO0FGN09SO0FDbUJJO0VDME5JLG9CQUFBO0FGMU9SO0FDb0JJO0VDc05JLGlCQUFBO0FGdk9SO0FDcUJJO0VDa05JLG9CQUFBO0FGcE9SO0FDc0JJO0VDeU1JLGdCQUFBO0VBQ0EsbUJBQUE7QUY1TlI7QUNzQkk7RUNrTkksa0JBQUE7RUFDQSxpQkFBQTtBRnJPUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9zcGFjZXMvZXhhbXBsZXMvMi9pbmRleC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gIG1hcmdpbjogMS41cmVtIDAgMC43NXJlbTtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3dfYWxpZ24taXRlbXNfYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmV4YW1wbGUge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTEuMjVyZW07XG4gIGhlaWdodDogNC42ODc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG59XG4uZXhhbXBsZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG4uZXhhbXBsZV90b3AtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5leGFtcGxlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbn1cbi5leGFtcGxlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5leGFtcGxlX3RvcC01IHtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5leGFtcGxlX2JvdHRvbS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5leGFtcGxlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmV4YW1wbGVfYm90dG9tLTMge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLmV4YW1wbGVfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmV4YW1wbGVfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmV4YW1wbGVfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5leGFtcGxlX3JpZ2h0LTIge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5leGFtcGxlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG4uZXhhbXBsZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmV4YW1wbGVfcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbi5leGFtcGxlX2xlZnQtMS5leGFtcGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG4uZXhhbXBsZV9sZWZ0LTIuZXhhbXBsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uZXhhbXBsZV9sZWZ0LTMuZXhhbXBsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuLmV4YW1wbGVfbGVmdC00LmV4YW1wbGUge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5leGFtcGxlX2xlZnQtNS5leGFtcGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG59XG4uZXhhbXBsZV92ZXJ0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZXhhbXBsZV9ob3Jpem9udGFsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwLjc1cmVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX2FsaWduLWl0ZW1zX2JvdHRvbSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG59XG5cbi5leGFtcGxlIHtcbiAgICAudHVpLXNwYWNlKGxlZnQsIDIpO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgLnNoYWRvdygzKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDExLjI1cmVtO1xuICAgIGhlaWdodDogNC42ODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIC50dWktc3BhY2UodG9wLCAxKTtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgLnR1aS1zcGFjZSh0b3AsIDIpO1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICAudHVpLXNwYWNlKHRvcCwgMyk7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIC50dWktc3BhY2UodG9wLCA0KTtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgLnR1aS1zcGFjZSh0b3AsIDUpO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICAudHVpLXNwYWNlKGJvdHRvbSwgMSk7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIC50dWktc3BhY2UoYm90dG9tLCAyKTtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgLnR1aS1zcGFjZShib3R0b20sIDMpO1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICAudHVpLXNwYWNlKGJvdHRvbSwgNCk7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIC50dWktc3BhY2UoYm90dG9tLCA1KTtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICAudHVpLXNwYWNlKHJpZ2h0LCAxKTtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICAudHVpLXNwYWNlKHJpZ2h0LCAyKTtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICAudHVpLXNwYWNlKHJpZ2h0LCAzKTtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICAudHVpLXNwYWNlKHJpZ2h0LCA0KTtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICAudHVpLXNwYWNlKHJpZ2h0LCA1KTtcbiAgICB9XG5cbiAgICAmX2xlZnQtMS5leGFtcGxlIHtcbiAgICAgICAgLnR1aS1zcGFjZShsZWZ0LCAxKTtcbiAgICB9XG5cbiAgICAmX2xlZnQtMi5leGFtcGxlIHtcbiAgICAgICAgLnR1aS1zcGFjZShsZWZ0LCAyKTtcbiAgICB9XG5cbiAgICAmX2xlZnQtMy5leGFtcGxlIHtcbiAgICAgICAgLnR1aS1zcGFjZShsZWZ0LCAzKTtcbiAgICB9XG5cbiAgICAmX2xlZnQtNC5leGFtcGxlIHtcbiAgICAgICAgLnR1aS1zcGFjZShsZWZ0LCA0KTtcbiAgICB9XG5cbiAgICAmX2xlZnQtNS5leGFtcGxlIHtcbiAgICAgICAgLnR1aS1zcGFjZShsZWZ0LCA1KTtcbiAgICB9XG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgLnR1aS1zcGFjZSh2ZXJ0aWNhbCwgNCk7XG4gICAgfVxuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgLnR1aS1zcGFjZShob3Jpem9udGFsLCA0KTtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSpacingExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-spaces-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/spaces/spaces.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/spaces/spaces.component.ts ***!
  \*******************************************************/
/*! exports provided: SpacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacesComponent", function() { return SpacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/markup/spaces/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/markup/spaces/examples/2/index.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_660809762116764762$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS_1 = goog.getMsg("Spaces");
    I18N_0 = MSG_EXTERNAL_660809762116764762$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟041a8f5e357685f1af16ffb9ffda7f2db6dcef20␟660809762116764762:Spaces`;
}
const _c2 = ["header", I18N_0];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1956073378030411818$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__5 = goog.getMsg("Classes");
    I18N_4 = MSG_EXTERNAL_1956073378030411818$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟1172ffb28e42ff5ae0d36af63448744a3af23d41␟1956073378030411818:Classes`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5391778508352850475$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__8 = goog.getMsg("Mixins");
    I18N_7 = MSG_EXTERNAL_5391778508352850475$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟7503a8046c7cb804d840f16206896e9075dcc0e0␟5391778508352850475:Mixins`;
}
const _c9 = ["heading", I18N_7];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4643080773802688727$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__10 = goog.getMsg("{$startTagNgTemplate}{$startTagDiv} You can use global classes or LESS mixins to make (n multiples 4px) margins {$closeTagDiv}{$startTagDiv_1}{$startTagStrong}Classes{$closeTagStrong} are included in global styles of core library, you do not need to setup them {$closeTagDiv}{$startTagDiv} You can build a class with direction and value between 0 and 15 ( {$startTagCode}tui-space_<direction>-<value>{$closeTagCode} ). {$closeTagDiv}{$startTagDiv_1}{$startTagStrong}Mixins{$closeTagStrong} are included in local LESS styles, so you need to import them into LESS styles file and add it to classes of your component {$closeTagDiv}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$startParagraph} Mixin also gets a direction and a value ( {$startTagCode}.tui-space(<direction>, <value>);{$closeTagCode} ). {$closeParagraph}{$startTagTuiDocExample}{$startTagTuiSpacesExample_1}{$closeTagTuiSpacesExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiSpacesExample_2}{$closeTagTuiSpacesExample_2}{$closeTagTuiDocExample}{$closeTagNgTemplate}", { "startTagNgTemplate": "\uFFFD*3:1\uFFFD", "closeTagNgTemplate": "\uFFFD/*3:1\uFFFD", "startTagDiv": "[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]", "closeTagDiv": "[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]", "startTagDiv_1": "[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]", "startTagStrong": "[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]", "closeTagStrong": "[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]", "startTagCode": "[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]", "closeTagCode": "[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]", "startTagTuiDocCode": "\uFFFD#8:1\uFFFD", "closeTagTuiDocCode": "\uFFFD/#8:1\uFFFD", "startParagraph": "\uFFFD#9:1\uFFFD", "closeParagraph": "\uFFFD/#9:1\uFFFD", "startTagTuiDocExample": "\uFFFD#11:1\uFFFD", "startTagTuiSpacesExample_1": "\uFFFD#13:1\uFFFD", "closeTagTuiSpacesExample_1": "\uFFFD/#13:1\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#11:1\uFFFD|\uFFFD/#14:1\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#14:1\uFFFD", "startTagTuiSpacesExample_2": "\uFFFD#16:1\uFFFD", "closeTagTuiSpacesExample_2": "\uFFFD/#16:1\uFFFD" });
    I18N_3 = MSG_EXTERNAL_4643080773802688727$$SRC_MODULES_MARKUP_SPACES_SPACES_COMPONENT_TS__10;
}
else {
    I18N_3 = $localize `:␟2e09c48e4438c9fb6cb90d4812c9b5a8feb3c76e␟4643080773802688727:${"\uFFFD*3:1\uFFFD"}:START_TAG_NG_TEMPLATE:${"[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]"}:START_TAG_DIV: You can use global classes or LESS mixins to make (n multiples 4px) margins ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]"}:START_TAG_DIV_1:${"[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]"}:START_TAG_STRONG:Classes${"[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]"}:CLOSE_TAG_STRONG: are included in global styles of core library, you do not need to setup them ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#1:1\uFFFD|\uFFFD#4:1\uFFFD]"}:START_TAG_DIV: You can build a class with direction and value between 0 and 15 ( ${"[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]"}:START_TAG_CODE:tui-space_<direction>-<value>${"[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2:1\uFFFD|\uFFFD#6:1\uFFFD]"}:START_TAG_DIV_1:${"[\uFFFD#3:1\uFFFD|\uFFFD#7:1\uFFFD]"}:START_TAG_STRONG:Mixins${"[\uFFFD/#3:1\uFFFD|\uFFFD/#7:1\uFFFD]"}:CLOSE_TAG_STRONG: are included in local LESS styles, so you need to import them into LESS styles file and add it to classes of your component ${"[\uFFFD/#1:1\uFFFD|\uFFFD/#2:1\uFFFD|\uFFFD/#4:1\uFFFD|\uFFFD/#6:1\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#8:1\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#8:1\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD#9:1\uFFFD"}:START_PARAGRAPH: Mixin also gets a direction and a value ( ${"[\uFFFD#5:1\uFFFD|\uFFFD#10:1\uFFFD]"}:START_TAG_CODE:.tui-space(<direction>, <value>);${"[\uFFFD/#5:1\uFFFD|\uFFFD/#10:1\uFFFD]"}:CLOSE_TAG_CODE: ). ${"\uFFFD/#9:1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#11:1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#13:1\uFFFD"}:START_TAG_TUI_SPACES_EXAMPLE_1:${"\uFFFD/#13:1\uFFFD"}:CLOSE_TAG_TUI_SPACES_EXAMPLE_1:${"[\uFFFD/#11:1\uFFFD|\uFFFD/#14:1\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#14:1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#16:1\uFFFD"}:START_TAG_TUI_SPACES_EXAMPLE_2:${"\uFFFD/#16:1\uFFFD"}:CLOSE_TAG_TUI_SPACES_EXAMPLE_2:${"[\uFFFD/#11:1\uFFFD|\uFFFD/#14:1\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD/*3:1\uFFFD"}:CLOSE_TAG_NG_TEMPLATE:`;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
function SpacesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-doc-code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-spaces-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-spaces-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.exampleBasicImportsLess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
class SpacesComponent {
    constructor() {
        this.exampleBasicImportsLess = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-basic-imports-less-md */ "!!raw-loader!-examples-import-basic-imports-less-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/basic-imports-less.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/import/basic-imports-less.md"));
        this.exampleIndexLess = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-index-less-md */ "!!raw-loader!-examples-import-index-less-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/index-less.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/import/index-less.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-style-less */ "!!raw-loader!-examples-1-index-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/1/index.style.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-style-less */ "!!raw-loader!-examples-2-index-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/2/index.style.less")),
        };
    }
}
SpacesComponent.ɵfac = function SpacesComponent_Factory(t) { return new (t || SpacesComponent)(); };
SpacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpacesComponent, selectors: [["spaces"]], decls: 4, vars: 0, consts: [[6, "header"], ["pageTab", ""], [1, "tui-space_bottom-3"], [1, "tui-space_top-3", "tui-space_bottom-3"], ["filename", "styles.less", 3, "code"], ["id", "classes", 3, "content", 6, "heading"], ["id", "mixins", 3, "content", 6, "heading"]], template: function SpacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpacesComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocCodeComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiSpacingExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiSpacingExample2"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `spaces`,
                templateUrl: `spaces.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/spaces/spaces.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/markup/spaces/spaces.module.ts ***!
  \****************************************************/
/*! exports provided: SpacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacesModule", function() { return SpacesModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/markup/spaces/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/markup/spaces/examples/2/index.ts");
/* harmony import */ var _spaces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spaces.component */ "./src/modules/markup/spaces/spaces.component.ts");










class SpacesModule {
}
SpacesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpacesModule });
SpacesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SpacesModule_Factory(t) { return new (t || SpacesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpacesModule, { declarations: [_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiSpacingExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiSpacingExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpacesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"])),
                ],
                declarations: [_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiSpacingExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiSpacingExample2"]],
                exports: [_spaces_component__WEBPACK_IMPORTED_MODULE_7__["SpacesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-spaces-spaces-module.js.map