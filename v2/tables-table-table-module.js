(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-table-table-module"],{

/***/ "./src/modules/tables/table/examples/1/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/tables/table/examples/1/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTableExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableExample1", function() { return TuiTableExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/pipes/format-number/format-number.pipe */ "../core/pipes/format-number/format-number.pipe.ts");













function TuiTableExample1_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiFormatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r1.balance), " ");
} }
function TuiTableExample1_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample1_tr_8_td_1_Template, 3, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "balance");
} }
class TuiTableExample1 {
    constructor() {
        this.data = [
            {
                name: `Alex Inkin`,
                balance: 1323525,
            },
            {
                name: `Roman Sedov`,
                balance: 423242,
            },
        ];
        this.columns = Object.keys(this.data[0]);
    }
}
TuiTableExample1.ɵfac = function TuiTableExample1_Factory(t) { return new (t || TuiTableExample1)(); };
TuiTableExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableExample1, selectors: [["tui-table-example-1"]], decls: 9, vars: 4, consts: [["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "resizable"], ["tuiTh", ""], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]], template: function TuiTableExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiTableExample1_tr_8_Template, 2, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx.data);
    } }, directives: [_addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_4__["TuiThGroupComponent"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_5__["TuiThComponent"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_7__["TuiRowDirective"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_8__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_9__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_10__["TuiTdComponent"]], pipes: [_core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_11__["TuiFormatNumberPipe"]], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL3RhYmxlcy90YWJsZS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwiLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table/examples/2/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/tables/table/examples/2/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTableExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableExample2", function() { return TuiTableExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");

















function TuiTableExample2_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample2_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample2_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample2_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorter", null);
} }
function TuiTableExample2_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorter", null);
} }
function TuiTableExample2_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const index_r7 = ctx_r13.index;
    const item_r6 = ctx_r13.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", index_r7 + 1, ". ", item_r6.name, " ");
} }
function TuiTableExample2_tr_9_td_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + item_r6.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.email, " ");
} }
function TuiTableExample2_tr_9_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample2_tr_9_td_2_a_1_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.email);
} }
function TuiTableExample2_tr_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.status);
} }
function TuiTableExample2_tr_9_td_4_tui_tag_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tag", 14);
} if (rf & 2) {
    const tag_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r19)("autoColor", true);
} }
function TuiTableExample2_tr_9_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample2_tr_9_td_4_tui_tag_1_Template, 1, 2, "tui-tag", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.tags);
} }
function TuiTableExample2_tr_9_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiTableExample2_tr_9_td_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.remove(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample2_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample2_tr_9_td_1_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample2_tr_9_td_2_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample2_tr_9_td_3_Template, 3, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTableExample2_tr_9_td_4_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample2_tr_9_td_5_Template, 2, 0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "actions");
} }
class TuiTableExample2 {
    constructor() {
        this.columns = [`name`, `email`, `status`, `tags`, `actions`];
        this.users = [
            {
                name: `Michael Palin`,
                email: `m.palin@montypython.com`,
                status: `alive`,
                tags: [`Funny`],
            },
            {
                name: `Eric Idle`,
                email: `e.idle@montypython.com`,
                status: `alive`,
                tags: [`Funny`, `Music`],
            },
            {
                name: `John Cleese`,
                email: `j.cleese@montypython.com`,
                status: `alive`,
                tags: [`Funny`, `Tall`, `Actor`],
            },
            {
                name: `Terry Jones`,
                email: ``,
                status: `deceased`,
                tags: [`Funny`, `Director`],
            },
            {
                name: `Terry Gilliam`,
                email: `t.gilliam@montypython.com`,
                status: `alive`,
                tags: [`Funny`, `Director`],
            },
            {
                name: `Graham Chapman`,
                email: ``,
                status: `deceased`,
                tags: [`Funny`, `King Arthur`],
            },
        ];
    }
    remove(item) {
        this.users = this.users.filter(user => user !== item);
    }
}
TuiTableExample2.ɵfac = function TuiTableExample2_Factory(t) { return new (t || TuiTableExample2)(); };
TuiTableExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableExample2, selectors: [["tui-table-example-2"]], decls: 10, vars: 8, consts: [["tuiTable", "", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 4, "tuiHead"], ["tuiTh", "", 3, "sorter", 4, "tuiHead"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTh", ""], ["tuiTh", "", 3, "sorter"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], ["tuiLink", "", 3, "href", 4, "ngIf"], ["tuiLink", "", 3, "href"], ["class", "tui-space_right-1", 3, "value", "autoColor", 4, "ngFor", "ngForOf"], [1, "tui-space_right-1", 3, "value", "autoColor"], ["tuiIconButton", "", "appearance", "flat", "size", "s", "icon", "tuiIconTrash", "title", "Remove", "shape", "rounded", 1, "remove", 3, "click"]], template: function TuiTableExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample2_th_3_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTableExample2_th_4_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample2_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample2_th_6_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiTableExample2_th_7_Template, 1, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiTableExample2_tr_9_Template, 6, 5, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx.users);
    } }, directives: [_addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_4__["TuiThGroupComponent"], _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHeadDirective"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_7__["TuiRowDirective"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_8__["TuiThComponent"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_9__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_10__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_11__["TuiTdComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_13__["TuiLinkComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_14__["TuiTagComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__["TuiButtonComponent"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  border-color: transparent;\n  border-right-color: var(--tui-base-04);\n}\ntd[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]:last-child {\n  border-right-color: transparent;\n}\ntbody[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\ntr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: var(--tui-base-02);\n}\n.alive[_ngcontent-%COMP%], .deceased[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n}\n.alive[_ngcontent-%COMP%]:before, .deceased[_ngcontent-%COMP%]:before {\n  content: '';\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 100%;\n  margin-right: 0.5rem;\n  background: var(--tui-base-04);\n}\n.alive[_ngcontent-%COMP%]:before {\n  background: var(--tui-success-fill);\n}\n.remove[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  opacity: 0;\n}\ntr[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:focus-within   .remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEOztFQUVJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBREtKO0FDSEk7O0VBQ0ksK0JBQUE7QURNUjtBQ0ZBO0VBQ0kseUJBQUE7QURJSjtBQ0RBO0VBQ0ksOEJBQUE7QURHSjtBQ0FBOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FERUo7QUNBSTs7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QURHUjtBQ0NBO0VBQ0ksbUNBQUE7QURDSjtBQ0VBO0VDNExJLDRCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRDVMQSxVQUFBO0FERUo7QUNBSTs7RUFFSSxVQUFBO0FERVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90YWJsZXMvdGFibGUvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xudGQsXG50aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDQpO1xufVxudGQ6bGFzdC1jaGlsZCxcbnRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGJvZHkge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxudHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDIpO1xufVxuLmFsaXZlLFxuLmRlY2Vhc2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYWxpdmU6YmVmb3JlLFxuLmRlY2Vhc2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA0KTtcbn1cbi5hbGl2ZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VjY2Vzcy1maWxsKTtcbn1cbi5yZW1vdmUge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwO1xufVxudHI6aG92ZXIgLnJlbW92ZSxcbnRyOmZvY3VzLXdpdGhpbiAucmVtb3ZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxudGQsXG50aCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDQpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbnRib2R5IHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikgdGQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAyKTtcbn1cblxuLmFsaXZlLFxuLmRlY2Vhc2VkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA0KTtcbiAgICB9XG59XG5cbi5hbGl2ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdWNjZXNzLWZpbGwpO1xufVxuXG4ucmVtb3ZlIHtcbiAgICAudHJhbnNpdGlvbihvcGFjaXR5KTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgdHI6aG92ZXIgJixcbiAgICB0cjpmb2N1cy13aXRoaW4gJiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table/examples/3/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/tables/table/examples/3/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTableExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableExample3", function() { return TuiTableExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollbar.component */ "../core/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_directives_thead_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/thead.directive */ "../addon-table/components/table/directives/thead.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.component */ "../kit/components/text-area/text-area.component.ts");
/* harmony import */ var _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.directive */ "../kit/components/text-area/text-area.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _cdk_directives_validator_validator_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../cdk/directives/validator/validator.directive */ "../cdk/directives/validator/validator.directive.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../core/pipes/format-number/format-number.pipe */ "../core/pipes/format-number/format-number.pipe.ts");



































function TuiTableExample3_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorter", null)("sticky", true);
} }
function TuiTableExample3_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price,\u00A0$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sticky", true);
} }
function TuiTableExample3_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorter", null);
} }
function TuiTableExample3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TuiTableExample3_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample3_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorter", ctx_r5.totalSorter);
} }
function TuiTableExample3_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample3_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample3_tr_14_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-text-area", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_14_th_1_Template_tui_text_area_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onValueChange($event, "name", item_r12, ctx_r19.pythons); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r12.price > 1000 ? 2 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandable", true)("ngModel", item_r12.name)("ngModelOptions", ctx_r13.options);
} }
function TuiTableExample3_tr_14_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-number", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_14_ng_container_2_th_1_Template_tui_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onValueChange($event, "price", item_r12, ctx_r24.pythons); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiValidator", ctx_r23.minPrice)("ngModel", item_r12.price)("ngModelOptions", ctx_r23.options);
} }
function TuiTableExample3_tr_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample3_tr_14_ng_container_2_th_1_Template, 2, 3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.price <= 1000);
} }
function TuiTableExample3_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-count", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_14_td_3_Template_tui_input_count_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onValueChange($event, "quantity", item_r12, ctx_r29.pythons); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r12.quantity)("ngModelOptions", ctx_r15.options);
} }
function TuiTableExample3_tr_14_td_4_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 37);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r33.units);
} }
function TuiTableExample3_tr_14_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_14_td_4_Template_tui_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onValueChange($event, "unit", item_r12, ctx_r34.pythons); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample3_tr_14_td_4_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r12.unit)("ngModelOptions", ctx_r16.options);
} }
function TuiTableExample3_tr_14_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-date", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_14_td_5_Template_tui_input_date_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onValueChange($event, "date", item_r12, ctx_r38.pythons); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r12.date)("ngModelOptions", ctx_r17.options);
} }
function TuiTableExample3_tr_14_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiFormatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r18.getTotal(item_r12)), " ");
} }
function TuiTableExample3_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample3_tr_14_th_1_Template, 2, 4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample3_tr_14_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample3_tr_14_td_3_Template, 2, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTableExample3_tr_14_td_4_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample3_tr_14_td_5_Template, 2, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample3_tr_14_td_6_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "total");
} }
function TuiTableExample3_tr_16_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-text-area", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_16_th_1_Template_tui_text_area_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.onValueChange($event, "name", item_r43, ctx_r50.starwars); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandable", true)("ngModel", item_r43.name)("ngModelOptions", ctx_r44.options);
} }
function TuiTableExample3_tr_16_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-number", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_16_th_2_Template_tui_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onValueChange($event, "price", item_r43, ctx_r54.starwars); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiValidator", ctx_r45.minPrice)("ngModel", item_r43.price)("ngModelOptions", ctx_r45.options);
} }
function TuiTableExample3_tr_16_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-count", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_16_td_3_Template_tui_input_count_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onValueChange($event, "quantity", item_r43, ctx_r58.starwars); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r43.quantity)("ngModelOptions", ctx_r46.options);
} }
function TuiTableExample3_tr_16_td_4_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 37);
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r62.units);
} }
function TuiTableExample3_tr_16_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_16_td_4_Template_tui_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.onValueChange($event, "unit", item_r43, ctx_r63.starwars); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample3_tr_16_td_4_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r43.unit)("ngModelOptions", ctx_r47.options);
} }
function TuiTableExample3_tr_16_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-date", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample3_tr_16_td_5_Template_tui_input_date_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.onValueChange($event, "date", item_r43, ctx_r67.starwars); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r43.date)("ngModelOptions", ctx_r48.options);
} }
function TuiTableExample3_tr_16_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiFormatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r49.getTotal(item_r43)), " ");
} }
function TuiTableExample3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample3_tr_16_th_1_Template, 2, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample3_tr_16_th_2_Template, 2, 3, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample3_tr_16_td_3_Template, 2, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTableExample3_tr_16_td_4_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample3_tr_16_td_5_Template, 2, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample3_tr_16_td_6_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "total");
} }
function TuiTableExample3_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Star Wars\n");
} }
class TuiTableExample3 {
    constructor() {
        this.options = { updateOn: `blur` };
        this.units = [`items`, `kg`, `m`];
        this.pythons = [
            {
                name: `Holy Grail`,
                price: 999999,
                quantity: 1,
                unit: this.units[0],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal(),
            },
            {
                name: `Foot`,
                price: 29.95,
                quantity: 5,
                unit: this.units[2],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal().append({ day: -42 }),
            },
            {
                name: `Shed`,
                price: 499,
                quantity: 2,
                unit: this.units[0],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal().append({ day: -237 }),
            },
        ];
        this.starwars = [
            {
                name: `Lightsaber`,
                price: 4999,
                quantity: 3,
                unit: this.units[0],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal(),
            },
            {
                name: `Spaceship`,
                price: 19999,
                quantity: 1,
                unit: this.units[0],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal().append({ day: -237 }),
            },
            {
                name: `Stormtrooper helmet`,
                price: 14.95,
                quantity: 5,
                unit: this.units[0],
                date: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal().append({ day: -42 }),
            },
        ];
        this.columns = [`name`, `price`, `quantity`, `unit`, `total`];
        this.minPrice = ({ value }) => value > 400 ? null : { minPrice: `Price must be above $400` };
        this.totalSorter = (a, b) => Object(_taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_3__["defaultSort"])(a.price * a.quantity, b.price * b.quantity);
    }
    getTotal({ price, quantity }) {
        return price * quantity;
    }
    onValueChange(value, key, current, data) {
        const updated = Object.assign(Object.assign({}, current), { [key]: value });
        this.pythons =
            data === this.pythons
                ? this.pythons.map(item => (item === current ? updated : item))
                : this.pythons;
        this.starwars =
            data === this.starwars
                ? this.starwars.map(item => (item === current ? updated : item))
                : this.starwars;
    }
}
TuiTableExample3.ɵfac = function TuiTableExample3_Factory(t) { return new (t || TuiTableExample3)(); };
TuiTableExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableExample3, selectors: [["tui-table-example-3"]], decls: 19, vars: 15, consts: [["waIntersectionRoot", "", 1, "scrollbar", 3, "hidden"], ["tuiTable", "", "size", "l", 1, "table", 3, "columns"], ["tuiThead", ""], ["tuiThGroup", ""], ["tuiTh", "", "rowspan", "2", "class", "first", 3, "sorter", "sticky", 4, "tuiHead"], ["tuiTh", "", "rowspan", "2", "class", "number second", 3, "sticky", 4, "tuiHead"], ["tuiTh", "", "colspan", "2", 3, "sorter", 4, "tuiHead"], [4, "tuiHead"], ["tuiTh", "", "rowspan", "2", 4, "tuiHead"], ["tuiTh", "", "rowspan", "2", "class", "number", 3, "sorter", 4, "tuiHead"], ["tuiTh", "", "class", "number border", 4, "tuiHead"], ["tuiTh", "", 4, "tuiHead"], ["tuiTbody", "", "heading", "Monty Python", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTbody", "", 3, "heading", "data"], ["template", ""], ["tuiTh", "", "rowspan", "2", 1, "first", 3, "sorter", "sticky"], ["tuiTh", "", "rowspan", "2", 1, "number", "second", 3, "sticky"], ["tuiTh", "", "colspan", "2", 3, "sorter"], ["tuiTh", "", "rowspan", "2"], ["tuiTh", "", "rowspan", "2", 1, "number", 3, "sorter"], ["tuiTh", "", 1, "number", "border"], ["tuiTh", ""], ["tuiTr", ""], ["tuiTd", "", 3, "colSpan", 4, "tuiCell"], [4, "tuiCell"], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", "", "class", "number text", 4, "tuiCell"], ["tuiTd", "", 3, "colSpan"], [1, "textarea", 3, "expandable", "ngModel", "ngModelOptions", "ngModelChange"], ["tuiTd", "", "class", "second", 4, "ngIf"], ["tuiTd", "", 1, "second"], [1, "number", 3, "tuiValidator", "ngModel", "ngModelOptions", "ngModelChange"], ["tuiTd", ""], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "select", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"], ["tuiTd", "", 1, "number", "text"], ["tuiTd", "", "class", "second", 4, "tuiCell"], [3, "tuiValidator", "ngModel", "ngModelOptions", "ngModelChange"], ["src", "tuiIconStarLarge", 1, "tui-space_right-3"]], template: function TuiTableExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTableExample3_th_4_Template, 2, 2, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample3_th_5_Template, 2, 1, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample3_th_6_Template, 2, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiTableExample3_ng_container_7_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiTableExample3_th_8_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiTableExample3_th_9_Template, 2, 1, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiTableExample3_th_11_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiTableExample3_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TuiTableExample3_tr_14_Template, 7, 6, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TuiTableExample3_tr_16_Template, 7, 6, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TuiTableExample3_ng_template_17_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pythons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx.pythons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _r10)("data", ctx.starwars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx.starwars);
    } }, directives: [_core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_5__["TuiScrollbarComponent"], _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["IntersectionRootDirective"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTableDirective"], _addon_table_components_table_directives_thead_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTheadDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_9__["TuiThGroupComponent"], _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_10__["TuiHeadDirective"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_11__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_12__["TuiRowDirective"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_13__["TuiThComponent"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_14__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_15__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_16__["TuiTdComponent"], _kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_17__["TuiTextAreaComponent"], _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_18__["TuiTextAreaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_21__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_22__["TuiInputNumberDirective"], _cdk_directives_validator_validator_directive__WEBPACK_IMPORTED_MODULE_23__["TuiValidatorDirective"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_24__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_25__["TuiInputCountDirective"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_26__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_27__["TuiSelectDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_28__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_29__["TuiDataListWrapperComponent"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_30__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_31__["TuiInputDateDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_32__["TuiSvgComponent"]], pipes: [_core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_33__["TuiFormatNumberPipe"]], styles: [".table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.textarea[_ngcontent-%COMP%] {\n  min-height: var(--tui-height-l);\n}\n.number[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-direction: row-reverse;\n}\n.first[_ngcontent-%COMP%] {\n  min-width: 11.25rem;\n  max-width: 11.25rem;\n}\n.second[_ngcontent-%COMP%] {\n  left: 11.25rem;\n}\n.text[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-top: 1rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 6.25rem;\n}\n.scrollbar[_ngcontent-%COMP%] {\n  max-height: 18.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURFQTtFQUNJLCtCQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0E7RUFDSSxjQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRFNBO0VBQ0ksaUJBQUE7QUNQSjtBRFVBO0VBQ0ksY0FBQTtBQ1JKO0FEV0E7RUFDSSxvQkFBQTtBQ1RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLnRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LWwpO1xufVxuXG4ubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5maXJzdCB7XG4gICAgbWluLXdpZHRoOiAxMS4yNXJlbTtcbiAgICBtYXgtd2lkdGg6IDExLjI1cmVtO1xufVxuXG4uc2Vjb25kIHtcbiAgICBsZWZ0OiAxMS4yNXJlbTtcbn1cblxuLnRleHQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi8vIER1ZSB0byByb3dTcGFuIHRoaXMgaXRlbSBhcHBlYXJzIHRvIGJlIHRoZSBmaXJzdCBjaGlsZFxuLy8gYnV0IGl0IHNob3VsZG4ndCBoYXZlIHRoZSBsZWZ0IGJvcmRlciBpbiByZWFsaXR5XG4uYm9yZGVyIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNlbGVjdCB7XG4gICAgd2lkdGg6IDYuMjVyZW07XG59XG5cbi5zY3JvbGxiYXIge1xuICAgIG1heC1oZWlnaHQ6IDE4Ljc1cmVtO1xufVxuIiwiLnRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbCk7XG59XG4ubnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5maXJzdCB7XG4gIG1pbi13aWR0aDogMTEuMjVyZW07XG4gIG1heC13aWR0aDogMTEuMjVyZW07XG59XG4uc2Vjb25kIHtcbiAgbGVmdDogMTEuMjVyZW07XG59XG4udGV4dCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNlbGVjdCB7XG4gIHdpZHRoOiA2LjI1cmVtO1xufVxuLnNjcm9sbGJhciB7XG4gIG1heC1oZWlnaHQ6IDE4Ljc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table/examples/4/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/tables/table/examples/4/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTableExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableExample4", function() { return TuiTableExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../core/components/hosted-dropdown/hosted-dropdown.component */ "../core/components/hosted-dropdown/hosted-dropdown.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../core/components/loader/loader.component */ "../core/components/loader/loader.component.ts");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _addon_table_components_reorder_reorder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../addon-table/components/reorder/reorder.component */ "../addon-table/components/reorder/reorder.component.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/sort-by.directive */ "../addon-table/components/table/directives/sort-by.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table-pagination/table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/sortable.directive */ "../addon-table/components/table/directives/sortable.directive.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



































function TuiTableExample4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-reorder", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsChange", function TuiTableExample4_ng_template_8_Template_tui_reorder_itemsChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.initial = $event; })("enabledChange", function TuiTableExample4_ng_template_8_Template_tui_reorder_enabledChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onEnabled($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", ctx_r1.enabled)("items", ctx_r1.initial);
} }
function TuiTableExample4_table_12_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample4_table_12_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample4_table_12_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiTableExample4_table_12_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("match", ctx_r12.isMatch(item_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function TuiTableExample4_table_12_tr_9_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("match", ctx_r13.isMatch(item_r11.dob));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.dob, " ");
} }
function TuiTableExample4_table_12_tr_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("match", ctx_r14.isMatch(ctx_r14.getAge(item_r11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.getAge(item_r11), " ");
} }
function TuiTableExample4_table_12_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample4_table_12_tr_9_td_1_Template, 2, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample4_table_12_tr_9_td_2_Template, 2, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample4_table_12_tr_9_td_3_Template, 2, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "dob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "age");
} }
function TuiTableExample4_table_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiSortByChange", function TuiTableExample4_table_12_Template_table_tuiSortByChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.sorter$.next($event); })("directionChange", function TuiTableExample4_table_12_Template_table_directionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.direction$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTableExample4_table_12_th_5_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample4_table_12_th_6_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiTableExample4_table_12_th_7_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiTableExample4_table_12_tr_9_Template, 4, 3, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-table-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TuiTableExample4_table_12_Template_tui_table_pagination_pageChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onPage($event); })("sizeChange", function TuiTableExample4_table_12_Template_tui_table_pagination_sizeChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onSize($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.tuiLet;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r2.columns)("direction", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 10, ctx_r2.direction$) || 1)("tuiSortBy", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 12, ctx_r2.sorter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "dob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", data_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", data_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx_r2.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, ctx_r2.total$) || 0);
} }
const TODAY = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDay"].currentLocal();
const FIRST = [
    `John`,
    `Jane`,
    `Jack`,
    `Jill`,
    `James`,
    `Joan`,
    `Jim`,
    `Julia`,
    `Joe`,
    `Julia`,
];
const LAST = [
    `Smith`,
    `West`,
    `Brown`,
    `Jones`,
    `Davis`,
    `Miller`,
    `Johnson`,
    `Jackson`,
    `Williams`,
    `Wilson`,
];
const DATA = Array.from({ length: 300 }, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${FIRST[Math.floor(Math.random() * 10)]}`,
    dob: TODAY.append({ day: -Math.floor(Math.random() * 4000) - 7500 }),
}));
const KEYS = {
    Name: `name`,
    Age: `age`,
    'Date of Birth': `dob`,
};
class TuiTableExample4 {
    constructor() {
        this.size$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](10);
        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
        this.direction$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](-1);
        this.sorter$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](`name`);
        this.minAge = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](21);
        this.request$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.sorter$,
            this.direction$,
            this.page$,
            this.size$,
            Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiReplayedValueChangesFrom"])(this.minAge),
        ]).pipe(
        // zero time debounce for a case when both key and direction change
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(query => this.getData(...query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
        this.initial = [`Name`, `Date of Birth`, `Age`];
        this.enabled = this.initial;
        this.columns = [`name`, `dob`, `age`];
        this.search = ``;
        this.arrow = _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TUI_ARROW"];
        this.loading$ = this.request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => !value));
        this.total$ = this.request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isPresent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(({ length }) => length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(1));
        this.data$ = this.request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isPresent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(users => users.filter(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isPresent"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])([]));
    }
    onEnabled(enabled) {
        this.enabled = enabled;
        this.columns = this.initial
            .filter(column => enabled.includes(column))
            .map(column => KEYS[column]);
    }
    onDirection(direction) {
        this.direction$.next(direction);
    }
    onSize(size) {
        this.size$.next(size);
    }
    onPage(page) {
        this.page$.next(page);
    }
    isMatch(value) {
        return !!this.search && Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_DEFAULT_MATCHER"])(value, this.search);
    }
    getAge(user) {
        return getAge(user);
    }
    getData(key, direction, page, size, minAge) {
        console.info(`Making a request`);
        const start = page * size;
        const end = start + size;
        const result = [...DATA]
            .sort(sortBy(key, direction))
            .filter(user => getAge(user) >= minAge)
            .map((user, index) => (index >= start && index < end ? user : null));
        // Imitating server response
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mapTo"])(result));
    }
}
TuiTableExample4.ɵfac = function TuiTableExample4_Factory(t) { return new (t || TuiTableExample4)(); };
TuiTableExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableExample4, selectors: [["tui-table-example-4"]], decls: 14, vars: 12, consts: [["tuiTextfieldSize", "m", 1, "filters"], [1, "input", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"], [1, "tui-space_horizontal-3", 3, "formControl"], [3, "content"], ["tuiButton", "", "size", "m", 3, "iconRight"], ["dropdown", ""], [3, "overlay", "showLoader"], ["tuiTable", "", "class", "table", 3, "columns", "direction", "tuiSortBy", "tuiSortByChange", "directionChange", 4, "tuiLet"], [1, "columns", 3, "enabled", "items", "itemsChange", "enabledChange"], ["tuiTable", "", 1, "table", 3, "columns", "direction", "tuiSortBy", "tuiSortByChange", "directionChange"], ["tuiThGroup", ""], ["tuiTh", "", "tuiSortable", "", 4, "tuiHead"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], [3, "colSpan"], [1, "tui-space_top-2", 3, "total", "pageChange", "sizeChange"], ["tuiTh", "", "tuiSortable", ""], ["tuiTr", ""], ["tuiTd", "", 3, "match", 4, "tuiCell"], ["tuiTd", ""]], template: function TuiTableExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableExample4_Template_tui_input_ngModelChange_1_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Find on page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-count", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Minimum age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-hosted-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Columns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiTableExample4_ng_template_8_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-loader", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiTableExample4_table_12_Template, 15, 16, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.minAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", ctx.arrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlay", true)("showLoader", !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.data$));
    } }, directives: [_core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldSizeDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_11__["TuiInputDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldCleanerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["TuiHostedDropdownComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__["TuiButtonComponent"], _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["TuiLoaderComponent"], _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_18__["TuiLetDirective"], _addon_table_components_reorder_reorder_component__WEBPACK_IMPORTED_MODULE_19__["TuiReorderComponent"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_20__["TuiTableDirective"], _addon_table_components_table_directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_21__["TuiSortByDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_22__["TuiThGroupComponent"], _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_23__["TuiHeadDirective"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_24__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_25__["TuiRowDirective"], _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_26__["TuiTablePaginationComponent"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_27__["TuiThComponent"], _addon_table_components_table_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["TuiSortableDirective"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_29__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_30__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_31__["TuiTdComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__["AsyncPipe"]], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n}\n.input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.columns[_ngcontent-%COMP%] {\n  width: 10.625rem;\n}\n.match[_ngcontent-%COMP%] {\n  background: var(--tui-selection);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzQvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtBQ0FKO0FER0E7RUFDSSxPQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0FDRko7QURLQTtFQUNJLGdDQUFBO0FDSEoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90YWJsZXMvdGFibGUvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dCB7XG4gICAgZmxleDogMTtcbn1cblxuLmNvbHVtbnMge1xuICAgIHdpZHRoOiAxMC42MjVyZW07XG59XG5cbi5tYXRjaCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlbGVjdGlvbik7XG59XG4iLCIudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWx0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnB1dCB7XG4gIGZsZXg6IDE7XG59XG4uY29sdW1ucyB7XG4gIHdpZHRoOiAxMC42MjVyZW07XG59XG4ubWF0Y2gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc2VsZWN0aW9uKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();
function sortBy(key, direction) {
    return (a, b) => key === `age`
        ? direction * Object(_taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__["defaultSort"])(getAge(a), getAge(b))
        : direction * Object(_taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__["defaultSort"])(a[key], b[key]);
}
function getAge({ dob }) {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["toInt"])(months > 0 || (!months && days > 9));
    return years + offset;
}


/***/ }),

/***/ "./src/modules/tables/table/examples/5/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/tables/table/examples/5/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTableExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableExample5", function() { return TuiTableExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollbar.component */ "../core/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollable.directive */ "../core/components/scrollbar/scrollable.directive.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _addon_table_components_table_pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/pipes/table-sort.pipe */ "../addon-table/components/table/pipes/table-sort.pipe.ts");

















function TuiTableExample5_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0 - _r0["_renderedContentOffset"], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sticky", true);
} }
function TuiTableExample5_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0 - _r0["_renderedContentOffset"], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sticky", true);
} }
function TuiTableExample5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0 - _r0["_renderedContentOffset"], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sticky", true)("sorter", ctx_r3.ageSorter);
} }
function TuiTableExample5_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function TuiTableExample5_tr_10_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.dob, " ");
} }
function TuiTableExample5_tr_10_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getAge(item_r5), " ");
} }
function TuiTableExample5_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableExample5_tr_10_td_1_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableExample5_tr_10_td_2_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTableExample5_tr_10_td_3_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "dob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "age");
} }
const TODAY = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal();
const FIRST = [
    `John`,
    `Jane`,
    `Jack`,
    `Jill`,
    `James`,
    `Joan`,
    `Jim`,
    `Julia`,
    `Joe`,
    `Julia`,
];
const LAST = [
    `Smith`,
    `West`,
    `Brown`,
    `Jones`,
    `Davis`,
    `Miller`,
    `Johnson`,
    `Jackson`,
    `Williams`,
    `Wilson`,
];
const DATA = Array.from({ length: 300 }, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${FIRST[Math.floor(Math.random() * 10)]}`,
    dob: TODAY.append({ day: -Math.floor(Math.random() * 4000) - 7500 }),
}));
class TuiTableExample5 {
    constructor() {
        this.data = DATA;
        this.columns = [`name`, `dob`, `age`];
        this.ageSorter = (a, b) => getAge(a) - getAge(b);
    }
    getAge(user) {
        return getAge(user);
    }
}
TuiTableExample5.ɵfac = function TuiTableExample5_Factory(t) { return new (t || TuiTableExample5)(); };
TuiTableExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableExample5, selectors: [["tui-table-example-5"]], decls: 12, vars: 10, consts: [["tuiScrollable", "", 1, "viewport", "tui-zero-scrollbar", 3, "itemSize", "maxBufferPx", "minBufferPx"], ["viewport", ""], ["tuiTable", "", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "sticky", "top", 4, "tuiHead"], ["tuiTh", "", 3, "sticky", "sorter", "top", 4, "tuiHead"], ["tuiTbody", ""], ["tuiTr", "", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiTh", "", 3, "sticky"], ["tuiTh", "", 3, "sticky", "sorter"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]], template: function TuiTableExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiTableExample5_th_6_Template, 2, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiTableExample5_th_7_Template, 2, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiTableExample5_th_8_Template, 2, 4, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TuiTableExample5_tr_10_Template, 4, 3, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "tuiTableSort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 45)("maxBufferPx", 500)("minBufferPx", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "dob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHead", "age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.data));
    } }, directives: [_core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_4__["TuiScrollbarComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkFixedSizeVirtualScroll"], _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_6__["TuiScrollableDirective"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_8__["TuiThGroupComponent"], _addon_table_components_table_directives_head_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHeadDirective"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_10__["TuiTbodyComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkVirtualForOf"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_11__["TuiThComponent"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_12__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_13__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_14__["TuiTdComponent"]], pipes: [_addon_table_components_table_pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_15__["TuiTableSortPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 45px;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 10rem;\n  font-weight: bold;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 3rem;\n}\n.viewport[_ngcontent-%COMP%] {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzUvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlL2V4YW1wbGVzLzUvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREZBO0VBSVEsWUFBQTtBQ0NSO0FER1E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNEWjtBRElRO0VBQ0ksV0FBQTtBQ0ZaO0FET0E7RUFDSSxhQUFBO0FDTEoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90YWJsZXMvdGFibGUvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdHIge1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udmlld3BvcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdHIge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG50YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG50YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDNyZW07XG59XG4udmlld3BvcnQge1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();
function getAge({ dob }) {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["toInt"])(months > 0 || (!months && days > 9));
    return years + offset;
}


/***/ }),

/***/ "./src/modules/tables/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/modules/tables/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: ExampleTuiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableComponent", function() { return ExampleTuiTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/tables/table/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/tables/table/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/tables/table/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/tables/table/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/tables/table/examples/5/index.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__5 = goog.getMsg("Custom");
    I18N_4 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4208877297843037352$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__8 = goog.getMsg("Editable");
    I18N_7 = MSG_EXTERNAL_4208877297843037352$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟4a01c175f90dd92b432f4a4a199d2c7bb9d997ff␟4208877297843037352:Editable`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_874907631161735200$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__11 = goog.getMsg("Server sorting");
    I18N_10 = MSG_EXTERNAL_874907631161735200$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟6c1d856595ca5300d7740ce8f523471f48b29099␟874907631161735200:Server sorting`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3924785165106362812$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__14 = goog.getMsg("Virtual scroll");
    I18N_13 = MSG_EXTERNAL_3924785165106362812$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟bdb7f01db95540f02fe9e127d968a3592650bdfb␟3924785165106362812:Virtual scroll`;
}
const _c15 = ["heading", I18N_13];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_999295939815958486$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__16 = goog.getMsg("{$startParagraph}This module allows you to create various tables, both static and editable.{$closeParagraph}{$startTagTuiDocExample}{$startTagTuiTableExample_1}{$closeTagTuiTableExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiTableExample_2}{$closeTagTuiTableExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiTableExample_3}{$closeTagTuiTableExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiTableExample_4}{$closeTagTuiTableExample_4}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiTableExample_5}{$closeTagTuiTableExample_5}{$closeTagTuiDocExample}", { "startParagraph": "\uFFFD#1\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD", "startTagTuiDocExample": "\uFFFD#2\uFFFD", "startTagTuiTableExample_1": "\uFFFD#4\uFFFD", "closeTagTuiTableExample_1": "\uFFFD/#4\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#5\uFFFD", "startTagTuiTableExample_2": "\uFFFD#7\uFFFD", "closeTagTuiTableExample_2": "\uFFFD/#7\uFFFD", "startTagTuiDocExample_2": "\uFFFD#8\uFFFD", "startTagTuiTableExample_3": "\uFFFD#10\uFFFD", "closeTagTuiTableExample_3": "\uFFFD/#10\uFFFD", "startTagTuiDocExample_3": "\uFFFD#11\uFFFD", "startTagTuiTableExample_4": "\uFFFD#13\uFFFD", "closeTagTuiTableExample_4": "\uFFFD/#13\uFFFD", "startTagTuiDocExample_4": "\uFFFD#14\uFFFD", "startTagTuiTableExample_5": "\uFFFD#16\uFFFD", "closeTagTuiTableExample_5": "\uFFFD/#16\uFFFD" });
    I18N_0 = MSG_EXTERNAL_999295939815958486$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__16;
}
else {
    I18N_0 = $localize `:␟d1f8917776e05e92cbe3e15b42af335965c10544␟999295939815958486:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:This module allows you to create various tables, both static and editable.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_1:${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#7\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_2:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_2:${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_3:${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_3:${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#13\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_4:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_4:${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#14\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#16\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_5:${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_5:${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-table-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-table-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-table-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-table-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-table-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6038105766511382280$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____18 = goog.getMsg(" An array of keys to set up columns order ");
    I18N_17 = MSG_EXTERNAL_6038105766511382280$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____18;
}
else {
    I18N_17 = $localize `:␟89bed7b5e22562ade0aaeb0e5d89d02e9a38f9f5␟6038105766511382280: An array of keys to set up columns order `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9176490006062528137$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____20 = goog.getMsg(" Cells size ");
    I18N_19 = MSG_EXTERNAL_9176490006062528137$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____20;
}
else {
    I18N_19 = $localize `:␟503db49326c453553c75c17bd84c246da7b8cc42␟9176490006062528137: Cells size `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_956753889439190452$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____22 = goog.getMsg(" Sort function (basic JavaScript array sort API) ");
    I18N_21 = MSG_EXTERNAL_956753889439190452$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____22;
}
else {
    I18N_21 = $localize `:␟c6a7ce5ce655e7c9b56eb96bc0d8d4c065e40487␟956753889439190452: Sort function (basic JavaScript array sort API) `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3356602485871191914$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____24 = goog.getMsg(" Direction for sorting ");
    I18N_23 = MSG_EXTERNAL_3356602485871191914$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____24;
}
else {
    I18N_23 = $localize `:␟edd5c209c3efa39caa8dd54e71fd30074d587f93␟3356602485871191914: Direction for sorting `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3861989173407506687$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____26 = goog.getMsg(" Makes this column resizable ");
    I18N_25 = MSG_EXTERNAL_3861989173407506687$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____26;
}
else {
    I18N_25 = $localize `:␟e1020d055839d52f953a984a64f21f9045702d7c␟3861989173407506687: Makes this column resizable `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3840502432103986973$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____28 = goog.getMsg(" Sorter function for this column ");
    I18N_27 = MSG_EXTERNAL_3840502432103986973$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____28;
}
else {
    I18N_27 = $localize `:␟ed304d2a0bd803a2c13af82cddc57f334fb715a3␟3840502432103986973: Sorter function for this column `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5718794858755814002$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____30 = goog.getMsg(" Makes heading cell horizontally sticky ");
    I18N_29 = MSG_EXTERNAL_5718794858755814002$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____30;
}
else {
    I18N_29 = $localize `:␟5661e3c2c1a8a03afc71f5d4c5c8d35d55a102a5␟5718794858755814002: Makes heading cell horizontally sticky `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7067793220185461117$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____32 = goog.getMsg(" Data to display ");
    I18N_31 = MSG_EXTERNAL_7067793220185461117$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____32;
}
else {
    I18N_31 = $localize `:␟55833d9c282a8bc8cd8badf77ce8a06785559c2b␟7067793220185461117: Data to display `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1883323480392210677$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____34 = goog.getMsg(" Optional heading content for the group that makes it collapsable ");
    I18N_33 = MSG_EXTERNAL_1883323480392210677$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____34;
}
else {
    I18N_33 = $localize `:␟7f8211250b905745b68129739616ce034938332b␟1883323480392210677: Optional heading content for the group that makes it collapsable `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1451038701451306374$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____36 = goog.getMsg(" Open/collapsed state of the group ");
    I18N_35 = MSG_EXTERNAL_1451038701451306374$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____36;
}
else {
    I18N_35 = $localize `:␟03fc9e5cecea44e0eeda5c8918d4d9a65da6d61a␟1451038701451306374: Open/collapsed state of the group `;
}
function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
function ExampleTuiTableComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "table[tuiTable]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parent directive that sets the table up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_7_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_8_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "thead[tuiThead]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Used on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " to make it sticky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "tr[tuiThGroup]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Used inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " to layout headings for the columns. You can have multiple rows and use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "rowSpan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " elements if you want to create some complex heading for your table. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "th[tuiTh]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Used inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "tr[tuiThGroup]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " to style heading cells. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tui-doc-documentation", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_40_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_41_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_42_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "tbody[tuiTbody]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sets up a group of data. You can have multiple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " inside your table. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tui-doc-documentation", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_52_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_53_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_54_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "tr[tuiTr]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Used inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " to layout cells. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "td[tuiTd] or th[tuiTd]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " A cell directive to be placed in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " . Use it on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " if you want to make a sticky column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValues", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValues", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValues", false);
} }
function ExampleTuiTableComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*tuiHead=\"key\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Used to define template for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " for particular key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Goes inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " element inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*tuiRow=\"let item of data\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Used to define template for a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*tuiCell=\"key\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Used to define template for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " for particular key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Goes inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " element ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExampleTuiTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-accordion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Directives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTableComponent_ng_template_2_ng_template_3_Template, 77, 3, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Structural directives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiTableComponent_ng_template_2_ng_template_6_Template, 34, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", true);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1455119302450018015$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__38 = goog.getMsg(" Import {$startTagCode}TuiTableModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_37 = MSG_EXTERNAL_1455119302450018015$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟a26f59dd5869b43c41a873c4cb2d0d94ad46d4b8␟1455119302450018015: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__40 = goog.getMsg("Add to the template:");
    I18N_39 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiTableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiTableComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.less")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/import/insert-template.md"));
    }
}
ExampleTuiTableComponent.ɵfac = function ExampleTuiTableComponent_Factory(t) { return new (t || ExampleTuiTableComponent)(); };
ExampleTuiTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTableComponent, selectors: [["example-table"]], decls: 4, vars: 0, consts: [["header", "Table", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], ["id", "basic", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "editable", 3, "content", 6, "heading"], ["id", "server", "description", "With tuiSortBy directive to work with column titles instead of sorters", 3, "content", 6, "heading"], ["id", "virtual", 3, "content", 6, "heading"], [3, "open"], ["tuiAccordionItemContent", ""], [3, "showValues"], ["documentationPropertyName", "columns", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL"], ["documentationPropertyName", "sorter", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiComparator<T>"], ["documentationPropertyName", "direction", "documentationPropertyMode", "input-output", "documentationPropertyType", "-1 | 1"], ["documentationPropertyName", "resizable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean"], ["documentationPropertyName", "sorter", "documentationPropertyMode", "input", "documentationPropertyType", "TuiComparator<T> | null"], ["documentationPropertyName", "sticky", "documentationPropertyMode", "input", "documentationPropertyType", "boolean"], ["documentationPropertyName", "data", "documentationPropertyMode", "input", "documentationPropertyType", "readonly T[]"], ["documentationPropertyName", "heading", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "open", "documentationPropertyMode", "input-output", "documentationPropertyType", "boolean"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTableComponent_ng_template_1_Template, 17, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTableComponent_ng_template_2_Template, 7, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTableComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiTableExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiTableExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiTableExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiTableExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiTableExample5"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_11__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_12__["TuiAccordionItemContentDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-table`,
                templateUrl: `./table.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table/table.module.ts":
/*!**************************************************!*\
  !*** ./src/modules/tables/table/table.module.ts ***!
  \**************************************************/
/*! exports provided: ExampleTuiTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableModule", function() { return ExampleTuiTableModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/tables/table/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/tables/table/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/tables/table/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/tables/table/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/tables/table/examples/5/index.ts");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./table.component */ "./src/modules/tables/table/table.component.ts");



















class ExampleTuiTableModule {
}
ExampleTuiTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExampleTuiTableModule });
ExampleTuiTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ExampleTuiTableModule_Factory(t) { return new (t || ExampleTuiTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["IntersectionObserverModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiScrollbarModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTableModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTextAreaModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputNumberModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputCountModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiSelectModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiFormatNumberPipeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiValidatorModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTagModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLoaderModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiLetModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTablePaginationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiHostedDropdownModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiArrowModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiReorderModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["generateRoutes"])(_table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExampleTuiTableModule, { declarations: [_table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiTableExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiTableExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiTableExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiTableExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiTableExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["IntersectionObserverModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiScrollbarModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTableModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTextAreaModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputCountModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiSelectModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiFormatNumberPipeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiValidatorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLoaderModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiLetModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTablePaginationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiHostedDropdownModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiArrowModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiReorderModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExampleTuiTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
                    _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["IntersectionObserverModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiScrollbarModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTableModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTextAreaModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputNumberModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputCountModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiSelectModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiFormatNumberPipeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiValidatorModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiTagModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiLoaderModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__["TuiLetModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiTablePaginationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__["TuiHostedDropdownModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__["TuiArrowModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_7__["TuiReorderModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["generateRoutes"])(_table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"])),
                ],
                declarations: [
                    _table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiTableExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiTableExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiTableExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiTableExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiTableExample5"],
                ],
                exports: [_table_component__WEBPACK_IMPORTED_MODULE_16__["ExampleTuiTableComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tables-table-table-module.js.map