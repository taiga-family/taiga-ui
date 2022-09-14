(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-tables-tables-module"],{

/***/ "./src/modules/markup/tables/examples/1/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/tables/examples/1/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiTablesExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTablesExample1", function() { return TuiTablesExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox/checkbox.component */ "../kit/components/checkbox/checkbox.component.ts");







class TuiTablesExample1 {
    constructor() {
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
    }
}
TuiTablesExample1.ɵfac = function TuiTablesExample1_Factory(t) { return new (t || TuiTablesExample1)(); };
TuiTablesExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTablesExample1, selectors: [["tui-tables-example-1"]], decls: 53, vars: 1, consts: [[1, "tui-table"], [1, "tui-table__tr", "tui-table__tr_border_none"], [1, "tui-table__th", "tui-table__th_first"], [3, "formControl"], [1, "tui-table__th"], [1, "tui-table__th", "tui-table__th_last"], [1, "tui-table__td", "tui-table__td_first"], [1, "tui-table__td"], [1, "tui-table__td", "tui-table__td_last"]], template: function TuiTablesExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "How to cook RxJS in an Angular app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Roman Sedov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "20.06.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "angular.institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Taking down the Emperor: Declarative approach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Alex Inkin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "26.08.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "angular.institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The 10 best Angular tips selected by the community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Roman Sedov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "28.07.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "indepth.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Agnostic components in Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Alex Inkin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "05.08.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "indepth.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.testValue);
    } }, directives: [_kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTablesExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tables-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/tables/tables.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/tables/tables.component.ts ***!
  \*******************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/markup/tables/examples/1/index.ts");










var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4114020677798356875$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS_1 = goog.getMsg("Tables");
    I18N_0 = MSG_EXTERNAL_4114020677798356875$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟fca3a09a894bdef44717e06cde6b1e50b3191267␟4114020677798356875:Tables`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7429645122394301630$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__4 = goog.getMsg(" Use {$startTagStrong}.tui-table{$closeTagStrong} class to add Taiga styles to a table ", { "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_7429645122394301630$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟f6460d5bcf1a0c6b5ebf3e9486203cc0b1bdd9f7␟7429645122394301630: Use ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:.tui-table${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: class to add Taiga styles to a table `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4109933585689006832$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__6 = goog.getMsg(" An advanced separate {$startTagCode}@taiga-ui/table{$closeTagCode} package with interactive tables is {$startLink} here {$closeLink}", { "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD", "startLink": "\uFFFD#6\uFFFD", "closeLink": "\uFFFD/#6\uFFFD" });
    I18N_5 = MSG_EXTERNAL_4109933585689006832$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟18fc845dbac0a9ad46d7f6a5d6967126bc0aa852␟4109933585689006832: An advanced separate ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:@taiga-ui/table${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: package with interactive tables is ${"\uFFFD#6\uFFFD"}:START_LINK: here ${"\uFFFD/#6\uFFFD"}:CLOSE_LINK:`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5380071918323078075$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__8 = goog.getMsg(" Elements ");
    I18N_7 = MSG_EXTERNAL_5380071918323078075$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟97c084d1ef6f4e1c1bd1b79ceef3b5caa7017a45␟5380071918323078075: Elements `;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4343689090823695320$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__10 = goog.getMsg("{$startListItem}{$startTagCode}.tui-table__tr{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__th{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__td{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-table__subtext{$closeTagCode} : small secondary text into a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort{$closeTagCode} : sorting action button {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort-icon{$closeTagCode} : sorting action button icon {$closeListItem}", { "startListItem": "[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]", "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]", "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]", "closeListItem": "[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]" });
    I18N_9 = MSG_EXTERNAL_4343689090823695320$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟2659fdd82b9367ca3e7aba320422b464f7f21210␟4343689090823695320:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__tr${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__th${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__td${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__subtext${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : small secondary text into a cell ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__sort${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : sorting action button ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_CODE:.tui-table__sort-icon${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_CODE: : sorting action button icon ${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_9);
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3460633242956630632$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__12 = goog.getMsg(" Modifiers ");
    I18N_11 = MSG_EXTERNAL_3460633242956630632$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟bcb9be93e5e30310a2724eb38be7db28069807ea␟3460633242956630632: Modifiers `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4461737378801163721$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__14 = goog.getMsg("{$startListItem}{$startTagCode}.tui-table_layout_fixed{$closeTagCode} : fixed cell width {$closeListItem}{$startListItem}{$startTagCode}.tui-table_font-size_l{$closeTagCode} : \"l\" text size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table_font-size_s{$closeTagCode} : \"s\" text size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table_size_l{$closeTagCode} : \"l\" cell size for the whole table {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_border_top{$closeTagCode} : border top for the row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_border_none{$closeTagCode} : removes border bottom {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_hover_disabled{$closeTagCode} : removes hovered state of row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__tr_cursor_pointer{$closeTagCode} : adds \"cursor: pointer\" for hovered row {$closeListItem}{$startListItem}{$startTagCode}.tui-table__th_font-size_l{$closeTagCode} : \"l\" text size for table headings {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_font-size_l{$closeTagCode} : \"l\" text size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_font-size_s{$closeTagCode} : \"s\" text size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_size_l{$closeTagCode} : \"l\" size for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_align_center{$closeTagCode} : align center for a single cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_first, .tui-table__th_first{$closeTagCode} : removes left padding of the cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_last, .tui-table__th_last{$closeTagCode} : removes right padding of the cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_center, .tui-table__th_text_center{$closeTagCode} : alignes text center in a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_right, .tui-table__th_text_right{$closeTagCode} : alignes text right in a cell {$closeListItem}{$startListItem}{$startTagCode}.tui-table__td_text_overflow{$closeTagCode} : adds \"...\" when text overflows {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort_active{$closeTagCode} : active state for sort button {$closeListItem}{$startListItem}{$startTagCode}.tui-table__sort_up{$closeTagCode} : arrow up state for sort button {$closeListItem}", { "startListItem": "[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]", "startTagCode": "[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]", "closeTagCode": "[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]", "closeListItem": "[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]" });
    I18N_13 = MSG_EXTERNAL_4461737378801163721$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟297954b578febb0a4994be5d3628b42775e0c7be␟4461737378801163721:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_layout_fixed${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : fixed cell width ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_font-size_s${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "s" text size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table_size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" cell size for the whole table ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_border_top${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : border top for the row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_border_none${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes border bottom ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_hover_disabled${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes hovered state of row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__tr_cursor_pointer${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : adds "cursor: pointer" for hovered row ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__th_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for table headings ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_font-size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" text size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_font-size_s${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "s" text size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_size_l${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : "l" size for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_align_center${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : align center for a single cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_first, .tui-table__th_first${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes left padding of the cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_last, .tui-table__th_last${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : removes right padding of the cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_center, .tui-table__th_text_center${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : alignes text center in a cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_right, .tui-table__th_text_right${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : alignes text right in a cell ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__td_text_overflow${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : adds "..." when text overflows ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__sort_active${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : active state for sort button ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#27\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD|\uFFFD#45\uFFFD|\uFFFD#47\uFFFD|\uFFFD#49\uFFFD|\uFFFD#51\uFFFD|\uFFFD#53\uFFFD|\uFFFD#55\uFFFD|\uFFFD#57\uFFFD|\uFFFD#59\uFFFD|\uFFFD#61\uFFFD|\uFFFD#63\uFFFD|\uFFFD#65\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD|\uFFFD#44\uFFFD|\uFFFD#46\uFFFD|\uFFFD#48\uFFFD|\uFFFD#50\uFFFD|\uFFFD#52\uFFFD|\uFFFD#54\uFFFD|\uFFFD#56\uFFFD|\uFFFD#58\uFFFD|\uFFFD#60\uFFFD|\uFFFD#62\uFFFD|\uFFFD#64\uFFFD|\uFFFD#66\uFFFD]"}:START_TAG_CODE:.tui-table__sort_up${"[\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#46\uFFFD|\uFFFD/#48\uFFFD|\uFFFD/#50\uFFFD|\uFFFD/#52\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#56\uFFFD|\uFFFD/#58\uFFFD|\uFFFD/#60\uFFFD|\uFFFD/#62\uFFFD|\uFFFD/#64\uFFFD|\uFFFD/#66\uFFFD]"}:CLOSE_TAG_CODE: : arrow up state for sort button ${"[\uFFFD/#27\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD|\uFFFD/#45\uFFFD|\uFFFD/#47\uFFFD|\uFFFD/#49\uFFFD|\uFFFD/#51\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#57\uFFFD|\uFFFD/#59\uFFFD|\uFFFD/#61\uFFFD|\uFFFD/#63\uFFFD|\uFFFD/#65\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_13);
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__16 = goog.getMsg("Basic");
    I18N_15 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_MARKUP_TABLES_TABLES_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c17 = ["heading", I18N_15];
function TablesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](26, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](68, _c17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "tui-tables-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
class TablesComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/tables/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/tables/examples/1/index.html")),
        };
    }
}
TablesComponent.ɵfac = function TablesComponent_Factory(t) { return new (t || TablesComponent)(); };
TablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablesComponent, selectors: [["tables"]], decls: 3, vars: 0, consts: [[6, "header"], ["pageTab", ""], [1, "tui-space_bottom-3"], [1, "tui-space_top-4"], ["tuiLink", "", "routerLink", "/components/table"], [1, "title"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], [1, "tui-list__item"], ["id", "base", 3, "content", 6, "heading"]], template: function TablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TablesComponent_ng_template_2_Template, 70, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiTablesExample1"]], styles: [".title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n  margin: 0.75rem 0 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3RhYmxlcy90YWJsZXMuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3RhYmxlcy90YWJsZXMuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksK0JBQUE7RUFDQSx5QkFBQTtBREtKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3RhYmxlcy90YWJsZXMuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG4gIG1hcmdpbjogMC43NXJlbSAwIDAuMjVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi50aXRsZSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy01KTtcbiAgICBtYXJnaW46IDAuNzVyZW0gMCAwLjI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tables`,
                templateUrl: `tables.template.html`,
                styleUrls: [`./tables.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/tables/tables.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/markup/tables/tables.module.ts ***!
  \****************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/markup/tables/examples/1/index.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tables.component */ "./src/modules/markup/tables/tables.component.ts");











class TablesModule {
}
TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TablesModule_Factory(t) { return new (t || TablesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TablesModule, { declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiTablesExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"])),
                ],
                declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiTablesExample1"]],
                exports: [_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-tables-tables-module.js.map