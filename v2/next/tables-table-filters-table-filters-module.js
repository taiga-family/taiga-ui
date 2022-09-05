(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-table-filters-table-filters-module"],{

/***/ "./src/modules/tables/table-filters/examples/1/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/tables/table-filters/examples/1/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiTableFiltersExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersExample1", function() { return TuiTableFiltersExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_table_directives_table_filters_table_filters_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-table/directives/table-filters/table-filters.directive */ "../addon-table/directives/table-filters/table-filters.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _addon_table_directives_table_filters_table_filter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/directives/table-filters/table-filter.directive */ "../addon-table/directives/table-filters/table-filter.directive.ts");
/* harmony import */ var _addon_table_directives_table_filters_generic_filter_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/directives/table-filters/generic-filter.directive */ "../addon-table/directives/table-filters/generic-filter.directive.ts");
/* harmony import */ var _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/toggle/toggle.component */ "../kit/components/toggle/toggle.component.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _addon_table_directives_table_filters_table_filters_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../addon-table/directives/table-filters/table-filters.pipe */ "../addon-table/directives/table-filters/table-filters.pipe.ts");
/* harmony import */ var _core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../core/pipes/format-number/format-number.pipe */ "../core/pipes/format-number/format-number.pipe.ts");






















function TuiTableFiltersExample1_tr_15_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
function TuiTableFiltersExample1_tr_15_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiFormatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r1.balance), " ");
} }
function TuiTableFiltersExample1_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTableFiltersExample1_tr_15_td_1_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableFiltersExample1_tr_15_td_2_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "balance");
} }
const _c0 = function () { return { standalone: true }; };
class TuiTableFiltersExample1 {
    constructor() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
        });
        this.data = [
            { name: `Alex Inkin`, balance: 1323525 },
            { name: `Roman Sedov`, balance: 523242 },
            { name: `Vladimir Potekhin`, balance: 645465 },
            { name: `Nikita Barsukov`, balance: 468468 },
            { name: `Maxim Ivanov`, balance: 498654 },
        ];
        this.columns = Object.keys(this.data[0]);
        this.filter = (item, value) => item >= value;
    }
    onToggle(enabled) {
        if (enabled) {
            this.form.enable();
        }
        else {
            this.form.disable();
        }
    }
}
TuiTableFiltersExample1.ɵfac = function TuiTableFiltersExample1_Factory(t) { return new (t || TuiTableFiltersExample1)(); };
TuiTableFiltersExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableFiltersExample1, selectors: [["tui-table-filters-example-1"]], decls: 18, vars: 11, consts: [["tuiTableFilters", ""], [1, "form", 3, "formGroup"], ["tuiTableFilter", "balance", "formControlName", "balance", 1, "control", 3, "tuiGenericFilter"], [3, "ngModelOptions", "ngModel", "ngModelChange"], ["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", ""], ["tuiTbody", ""], ["tuiTr", "", 4, "ngFor", "ngForOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]], template: function TuiTableFiltersExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Minimal balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiTableFiltersExample1_Template_tui_toggle_ngModelChange_5_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enable filtering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TuiTableFiltersExample1_tr_15_Template, 3, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "tuiTableFilters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiGenericFilter", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("ngModel", ctx.form.enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, ctx.data)));
    } }, directives: [_addon_table_directives_table_filters_table_filters_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberDirective"], _addon_table_directives_table_filters_table_filter_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTableFilterDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _addon_table_directives_table_filters_generic_filter_directive__WEBPACK_IMPORTED_MODULE_8__["TuiGenericFilterDirective"], _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_9__["TuiToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_11__["TuiThGroupComponent"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_12__["TuiThComponent"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_13__["TuiTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_15__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_16__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_17__["TuiTdComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _addon_table_directives_table_filters_table_filters_pipe__WEBPACK_IMPORTED_MODULE_18__["TuiTableFiltersPipe"], _core_pipes_format_number_format_number_pipe__WEBPACK_IMPORTED_MODULE_19__["TuiFormatNumberPipe"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.control[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 2rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlLWZpbHRlcnMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90YWJsZXMvdGFibGUtZmlsdGVycy9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGFibGVzL3RhYmxlLWZpbHRlcnMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY29udHJvbCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY29udHJvbCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableFiltersExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-filters-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table-filters/table-filters.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/tables/table-filters/table-filters.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiTableFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableFiltersComponent", function() { return ExampleTuiTableFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/tables/table-filters/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7647057403155936863$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__4 = goog.getMsg("{$startParagraph}This module allows you to filter table data in a flexible way.{$closeParagraph}{$startTagTuiDocExample}{$startTagTuiTableFiltersExample_1}{$closeTagTuiTableFiltersExample_1}{$closeTagTuiDocExample}", { "startParagraph": "\uFFFD#1\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD", "startTagTuiDocExample": "\uFFFD#2\uFFFD", "startTagTuiTableFiltersExample_1": "\uFFFD#4\uFFFD", "closeTagTuiTableFiltersExample_1": "\uFFFD/#4\uFFFD", "closeTagTuiDocExample": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7647057403155936863$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__4;
}
else {
    I18N_0 = $localize `:␟2f730067ca934c818edfc4496064e5793903a535␟7647057403155936863:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:This module allows you to filter table data in a flexible way.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_TABLE_FILTERS_EXAMPLE_1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_TABLE_FILTERS_EXAMPLE_1:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
function ExampleTuiTableFiltersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-table-filters-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6680845003239236590$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__6 = goog.getMsg(" Import {$startTagCode}TuiTableFiltersModule{$closeTagCode} into a module where you want to filter data for your table ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_6680845003239236590$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟84ac78f530c18595843720bf1c0005c88ecd7de6␟6680845003239236590: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableFiltersModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to filter data for your table `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9084780547311506721$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__8 = goog.getMsg("Add directives and pipe to the template:");
    I18N_7 = MSG_EXTERNAL_9084780547311506721$$SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟a0f536f29bef501e23a6d1ff6dcc04be52c83050␟9084780547311506721:Add directives and pipe to the template:`;
}
function ExampleTuiTableFiltersComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiTableFiltersComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/1/index.less")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/import/insert-template.md"));
    }
}
ExampleTuiTableFiltersComponent.ɵfac = function ExampleTuiTableFiltersComponent_Factory(t) { return new (t || ExampleTuiTableFiltersComponent)(); };
ExampleTuiTableFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTableFiltersComponent, selectors: [["example-table-filters"]], decls: 3, vars: 0, consts: [["header", "TableFilters", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "basic", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiTableFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTableFiltersComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTableFiltersComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiTableFiltersExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTableFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-table-filters`,
                templateUrl: `./table-filters.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table-filters/table-filters.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/tables/table-filters/table-filters.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiTableFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableFiltersModule", function() { return ExampleTuiTableFiltersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/tables/table-filters/examples/1/index.ts");
/* harmony import */ var _table_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-filters.component */ "./src/modules/tables/table-filters/table-filters.component.ts");












class ExampleTuiTableFiltersModule {
}
ExampleTuiTableFiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiTableFiltersModule });
ExampleTuiTableFiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiTableFiltersModule_Factory(t) { return new (t || ExampleTuiTableFiltersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiFormatNumberPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableFiltersModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiTableFiltersModule, { declarations: [_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTableFiltersExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiFormatNumberPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableFiltersModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiTableFiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiFormatNumberPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableFiltersModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"])),
                ],
                declarations: [_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTableFiltersExample1"]],
                exports: [_table_filters_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTableFiltersComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tables-table-filters-table-filters-module.js.map