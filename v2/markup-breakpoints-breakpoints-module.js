(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-breakpoints-breakpoints-module"],{

/***/ "./src/modules/markup/breakpoints/breakpoints.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/markup/breakpoints/breakpoints.component.ts ***!
  \*****************************************************************/
/*! exports provided: BreakpointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointsComponent", function() { return BreakpointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _raw_loader_taiga_ui_core_styles_variables_media_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!@taiga-ui/core/styles/variables/media.less */ "../../node_modules/raw-loader/dist/cjs.js!../core/styles/variables/media.less");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/markup/breakpoints/examples/1/index.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_capitalize_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example-capitalize.pipe */ "../addon-doc/src/components/example/example-capitalize.pipe.ts");






















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_142654590491855672$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__1 = goog.getMsg("Usage");
    I18N_0 = MSG_EXTERNAL_142654590491855672$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
}
const _c2 = ["heading", I18N_0];
function BreakpointsComponent_ng_template_1_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiDocExampleCapitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, column_r4), " ");
} }
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6710491094032305894$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS____4 = goog.getMsg(" Copy ");
    I18N_3 = MSG_EXTERNAL_6710491094032305894$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS____4;
}
else {
    I18N_3 = $localize `:␟05ca612ca8581241491f7530e7de9072d7faf854␟6710491094032305894: Copy `;
}
function BreakpointsComponent_ng_template_1_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-copy", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breakpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", breakpoint_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breakpoint_r5.name, " ");
} }
function BreakpointsComponent_ng_template_1_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreakpointsComponent_ng_template_1_tr_9_td_1_Template, 4, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
} }
function BreakpointsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Breakpoints are widths that determine how your responsive layout behaves across different viewport sizes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "caption", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our library includes the following breakpoints:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BreakpointsComponent_ng_template_1_th_7_Template, 3, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BreakpointsComponent_ng_template_1_tr_9_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "example-css-breakpoints-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r0.columnsNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnsNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.breakpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx_r0.breakpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8508891461081815033$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__6 = goog.getMsg("Add import to your file with styles:");
    I18N_5 = MSG_EXTERNAL_8508891461081815033$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟d4196e005ebcfe5b54ea57595bb8e05024f4eaf5␟8508891461081815033:Add import to your file with styles:`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4891856038364692663$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__8 = goog.getMsg("Use breakpoints inside media queries:");
    I18N_7 = MSG_EXTERNAL_4891856038364692663$$SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟ff525313ecc790b4f8e66c7a3afcd7b57a32fbfb␟4891856038364692663:Use breakpoints inside media queries:`;
}
function BreakpointsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.importTaigaUILocalLess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleBaseUsage);
} }
class BreakpointsComponent {
    constructor() {
        this.breakpoints = parseBreakpoints(removeLegacyVariables(_raw_loader_taiga_ui_core_styles_variables_media_less__WEBPACK_IMPORTED_MODULE_3__["default"]));
        this.columnsNames = Object.keys(this.breakpoints[0]);
        this.importTaigaUILocalLess = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-taiga-ui-local-less-md */ "!!raw-loader!-examples-import-import-taiga-ui-local-less-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-taiga-ui-local-less.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/import/import-taiga-ui-local-less.md"));
        this.exampleBaseUsage = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-base-breakpoint-usage-md */ "!!raw-loader!-examples-import-base-breakpoint-usage-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/base-breakpoint-usage.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/import/base-breakpoint-usage.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/1/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/1/index.ts")),
        };
    }
}
BreakpointsComponent.ɵfac = function BreakpointsComponent_Factory(t) { return new (t || BreakpointsComponent)(); };
BreakpointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreakpointsComponent, selectors: [["css-breakpoints"]], decls: 3, vars: 0, consts: [["header", "Breakpoints", "package", "CORE", "path", "core/styles/variables"], ["pageTab", ""], ["pageTab", "Setup"], ["tuiTable", "", 3, "columns"], [1, "table-caption"], ["tuiThGroup", ""], ["tuiTh", "", 4, "ngFor", "ngForOf"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["id", "usage", 3, "content", 6, "heading"], ["tuiTh", ""], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], [1, "copy", 3, "cdkCopyToClipboard"], [1, "b-demo-steps"], ["filename", "your-file.styles.less", 3, "code"]], template: function BreakpointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreakpointsComponent_ng_template_1_Template, 13, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreakpointsComponent_ng_template_2_Template, 9, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_7__["TuiThGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_9__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_10__["TuiRowDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_12__["ExampleBreakpointsComponent1"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_13__["TuiThComponent"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_14__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_15__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_16__["TuiTdComponent"], _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["CdkCopyToClipboard"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocCodeComponent"]], pipes: [_addon_doc_src_components_example_example_capitalize_pipe__WEBPACK_IMPORTED_MODULE_20__["TuiDocExampleCapitalizePipe"]], styles: [".table-caption[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 0.5rem;\n}\n.copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  opacity: 0;\n}\n.copy[_ngcontent-%COMP%]     button {\n  border-radius: 0;\n  height: 100%;\n}\n.copy[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2JyZWFrcG9pbnRzL2JyZWFrcG9pbnRzLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9icmVha3BvaW50cy9icmVha3BvaW50cy5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FES0o7QUNGQTtFQ3dCSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFnTUosNEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEN05BLFVBQUE7QURVSjtBQ2JBO0VBTVEsZ0JBQUE7RUFDQSxZQUFBO0FEVVI7QUNQSTtFQUNJLFVBQUE7QURTUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9icmVha3BvaW50cy9icmVha3BvaW50cy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnRhYmxlLWNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29weSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwO1xufVxuLmNvcHkgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb3B5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLnRhYmxlLWNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uY29weSB7XG4gICAgLmZ1bGxzaXplKCk7XG4gICAgLnRyYW5zaXRpb24ob3BhY2l0eSk7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIDo6bmctZGVlcCBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `css-breakpoints`,
                templateUrl: `./breakpoints.template.html`,
                styleUrls: [`./breakpoints.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();
// TODO delete in v3.0
function removeLegacyVariables(file) {
    const codeComment = `// actual`;
    const startOffset = file.includes(codeComment)
        ? file.indexOf(codeComment) + codeComment.length
        : 0;
    return file.slice(startOffset).trim();
}
function parseBreakpoints(file) {
    return file
        .split(`;`)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
        const [name, ...value] = line.split(`:`);
        return { name, value: value.join(`:`).replace(/[~'"]/g, ``).trim() };
    });
}


/***/ }),

/***/ "./src/modules/markup/breakpoints/breakpoints.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/markup/breakpoints/breakpoints.module.ts ***!
  \**************************************************************/
/*! exports provided: BreakpointsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointsModule", function() { return BreakpointsModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _breakpoints_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breakpoints.component */ "./src/modules/markup/breakpoints/breakpoints.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/markup/breakpoints/examples/1/index.ts");










class BreakpointsModule {
}
BreakpointsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BreakpointsModule });
BreakpointsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BreakpointsModule_Factory(t) { return new (t || BreakpointsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["tuiGenerateRoutes"])(_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreakpointsModule, { declarations: [_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["ExampleBreakpointsComponent1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BreakpointsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["tuiGenerateRoutes"])(_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"])),
                ],
                declarations: [_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["ExampleBreakpointsComponent1"]],
                exports: [_breakpoints_component__WEBPACK_IMPORTED_MODULE_6__["BreakpointsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/breakpoints/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/markup/breakpoints/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: ExampleBreakpointsComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleBreakpointsComponent1", function() { return ExampleBreakpointsComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");





function ExampleBreakpointsComponent1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breakpoint_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("item ", breakpoint_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", breakpoint_r1, " ");
} }
class ExampleBreakpointsComponent1 {
    constructor() {
        this.breakpoints = [
            `mobile-m`,
            `mobile-m-min`,
            `mobile-m-interval`,
            `tablet-lg`,
            `tablet-lg-min`,
            `tablet-lg-interval`,
            `desktop-s`,
            `desktop-s-min`,
            `desktop-s-interval`,
            `desktop-m-min`,
        ];
    }
}
ExampleBreakpointsComponent1.ɵfac = function ExampleBreakpointsComponent1_Factory(t) { return new (t || ExampleBreakpointsComponent1)(); };
ExampleBreakpointsComponent1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleBreakpointsComponent1, selectors: [["example-css-breakpoints-1"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [3, "class", 4, "ngFor", "ngForOf"]], template: function ExampleBreakpointsComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleBreakpointsComponent1_span_1_Template, 2, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakpoints);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  gap: 1px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: auto;\n  font: var(--tui-font-text-xs);\n}\n@media screen and (min-width: 64em) {\n  .wrapper[_ngcontent-%COMP%] {\n    font: var(--tui-font-text-s);\n    width: 500px;\n  }\n}\n.item[_ngcontent-%COMP%] {\n  height: 100px;\n  background: var(--tui-neutral-bg);\n  color: var(--tui-text-01);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 47.9625em) {\n  .mobile-m[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (min-width: 22.5em) {\n  .mobile-m-min[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media (min-width: 22.5em) and (max-width: 47.9625em) {\n  .mobile-m-interval[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (max-width: 63.9625em) {\n  .tablet-lg[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (min-width: 48em) {\n  .tablet-lg-min[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media (min-width: 48em) and (max-width: 63.9625em) {\n  .tablet-lg-interval[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (max-width: 79.9625em) {\n  .desktop-s[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (min-width: 64em) {\n  .desktop-s-min[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media (min-width: 64em) and (max-width: 79.9625em) {\n  .desktop-s-interval[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n@media screen and (min-width: 80em) {\n  .desktop-m-min[_ngcontent-%COMP%] {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n  }\n}\n.desktop-m-min[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2JyZWFrcG9pbnRzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2JyZWFrcG9pbnRzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSw0QkFBQTtJQUNBLFlBQUE7RURNTjtBQUNGO0FDSEE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FES0o7QUNHUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFREFWO0FBQ0Y7QUNIUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFRE1WO0FBQ0Y7QUNUUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFRFlWO0FBQ0Y7QUNmUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFRGtCVjtBQUNGO0FDckJRO0VBQUE7SUFDSSw4QkFBQTtJQUNBLDhCQUFBO0VEd0JWO0FBQ0Y7QUMzQlE7RUFBQTtJQUNJLDhCQUFBO0lBQ0EsOEJBQUE7RUQ4QlY7QUFDRjtBQ2pDUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFRG9DVjtBQUNGO0FDdkNRO0VBQUE7SUFDSSw4QkFBQTtJQUNBLDhCQUFBO0VEMENWO0FBQ0Y7QUM3Q1E7RUFBQTtJQUNJLDhCQUFBO0lBQ0EsOEJBQUE7RURnRFY7QUFDRjtBQ25EUTtFQUFBO0lBQ0ksOEJBQUE7SUFDQSw4QkFBQTtFRHNEVjtBQUNGO0FDbERBO0VBQ0ksbUJBQUE7QURvREoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvYnJlYWtwb2ludHMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC53cmFwcGVyIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuLml0ZW0ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktbmV1dHJhbC1iZyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcuOTYyNWVtKSB7XG4gIC5tb2JpbGUtbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeS10ZXh0KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjIuNWVtKSB7XG4gIC5tb2JpbGUtbS1taW4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnktdGV4dCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIGFuZCAobWF4LXdpZHRoOiA0Ny45NjI1ZW0pIHtcbiAgLm1vYmlsZS1tLWludGVydmFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXR1aS1wcmltYXJ5LXRleHQpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45NjI1ZW0pIHtcbiAgLnRhYmxldC1sZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeS10ZXh0KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xuICAudGFibGV0LWxnLW1pbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeS10ZXh0KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIGFuZCAobWF4LXdpZHRoOiA2My45NjI1ZW0pIHtcbiAgLnRhYmxldC1sZy1pbnRlcnZhbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeS10ZXh0KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkuOTYyNWVtKSB7XG4gIC5kZXNrdG9wLXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnktdGV4dCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmRlc2t0b3Atcy1taW4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnktdGV4dCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogNzkuOTYyNWVtKSB7XG4gIC5kZXNrdG9wLXMtaW50ZXJ2YWwge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnktdGV4dCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgLmRlc2t0b3AtbS1taW4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnktdGV4dCk7XG4gIH1cbn1cbi5kZXNrdG9wLW0tbWluIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAxcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG5cbiAgICBAbWVkaWEgQGRlc2t0b3Atcy1taW4ge1xuICAgICAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktbmV1dHJhbC1iZyk7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBicmVha3BvaW50czogbW9iaWxlLW0sIG1vYmlsZS1tLW1pbiwgbW9iaWxlLW0taW50ZXJ2YWwsIHRhYmxldC1sZywgdGFibGV0LWxnLW1pbiwgdGFibGV0LWxnLWludGVydmFsLCBkZXNrdG9wLXMsXG4gICAgZGVza3RvcC1zLW1pbiwgZGVza3RvcC1zLWludGVydmFsLCBkZXNrdG9wLW0tbWluO1xuXG5lYWNoKEBicmVha3BvaW50cywge1xuICAgIC5Ae3ZhbHVlfSB7XG4gICAgICAgIEBtZWRpYSBAQHZhbHVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeS10ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4uZGVza3RvcC1tLW1pbiB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleBreakpointsComponent1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-css-breakpoints-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-breakpoints-breakpoints-module.js.map