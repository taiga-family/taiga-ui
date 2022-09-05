(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-input-input-module~directives-dropdown-context-dropdown-context-module~markup-bre~4295d3df"],{

/***/ "../addon-table/components/index.ts":
/*!******************************************!*\
  !*** ../addon-table/components/index.ts ***!
  \******************************************/
/*! exports provided: TuiReorderComponent, TuiReorderModule, TuiResizableColumnComponent, TuiResizableColumnDirective, TuiResizableColumnModule, TuiCellDirective, TuiHeadDirective, TuiResizedDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTableDirective, TuiTheadDirective, TuiTableSortPipe, stuckFactory, TUI_STUCK, TUI_STUCK_PROVIDER, TABLE_FACTORY, TUI_TABLE_PROVIDER, TABLE_THRESHOLD, TABLE_LABEL, inputCountOptionsFactory, TUI_TABLE_PROVIDERS, TuiTableModule, TuiTbodyComponent, TuiTdComponent, TuiThComponent, TuiThGroupComponent, TuiTrComponent, TuiTablePaginationComponent, TuiTablePaginationModule, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, TUI_TABLE_PAGINATION_OPTIONS, tuiTablePaginationOptionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-table/components/reorder */ "../addon-table/components/reorder/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderComponent", function() { return _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_0__["TuiReorderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderModule", function() { return _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_0__["TuiReorderModule"]; });

/* harmony import */ var _taiga_ui_addon_table_components_resizable_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-table/components/resizable-column */ "../addon-table/components/resizable-column/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnComponent", function() { return _taiga_ui_addon_table_components_resizable_column__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnDirective", function() { return _taiga_ui_addon_table_components_resizable_column__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnModule", function() { return _taiga_ui_addon_table_components_resizable_column__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnModule"]; });

/* harmony import */ var _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-table/components/table */ "../addon-table/components/table/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCellDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiCellDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiHeadDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiHeadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizedDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiResizedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRowDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiRowDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortByDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiSortByDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortableDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiSortableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTheadDirective", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableSortPipe", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTableSortPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stuckFactory", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["stuckFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK_PROVIDER", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_FACTORY", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TABLE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDER", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_THRESHOLD", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TABLE_THRESHOLD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_LABEL", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TABLE_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputCountOptionsFactory", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["inputCountOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDERS", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PROVIDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableModule", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTbodyComponent", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTbodyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTdComponent", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTdComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThComponent", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiThComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThGroupComponent", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiThGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTrComponent", function() { return _taiga_ui_addon_table_components_table__WEBPACK_IMPORTED_MODULE_2__["TuiTrComponent"]; });

/* harmony import */ var _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-table/components/table-pagination */ "../addon-table/components/table-pagination/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationComponent", function() { return _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__["TuiTablePaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationModule", function() { return _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__["TuiTablePaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_DEFAULT_OPTIONS", function() { return _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__["TUI_TABLE_PAGINATION_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_OPTIONS", function() { return _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__["TUI_TABLE_PAGINATION_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiTablePaginationOptionsProvider", function() { return _taiga_ui_addon_table_components_table_pagination__WEBPACK_IMPORTED_MODULE_3__["tuiTablePaginationOptionsProvider"]; });







/***/ }),

/***/ "../addon-table/components/resizable-column/index.ts":
/*!***********************************************************!*\
  !*** ../addon-table/components/resizable-column/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiResizableColumnComponent, TuiResizableColumnDirective, TuiResizableColumnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizable_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizable-column.component */ "../addon-table/components/resizable-column/resizable-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnComponent", function() { return _resizable_column_component__WEBPACK_IMPORTED_MODULE_0__["TuiResizableColumnComponent"]; });

/* harmony import */ var _resizable_column_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resizable-column.directive */ "../addon-table/components/resizable-column/resizable-column.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnDirective", function() { return _resizable_column_directive__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnDirective"]; });

/* harmony import */ var _resizable_column_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizable-column.module */ "../addon-table/components/resizable-column/resizable-column.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnModule", function() { return _resizable_column_module__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnModule"]; });






/***/ }),

/***/ "../addon-table/components/resizable-column/resizable-column.component.ts":
/*!********************************************************************************!*\
  !*** ../addon-table/components/resizable-column/resizable-column.component.ts ***!
  \********************************************************************************/
/*! exports provided: TuiResizableColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnComponent", function() { return TuiResizableColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizable-column.directive */ "../addon-table/components/resizable-column/resizable-column.directive.ts");




const _c0 = ["tuiResizableColumn", ""];
const _c1 = ["*"];
/** @deprecated use `<th tuiTh [resizable]="true">` from {@link TuiTableModule} */
class TuiResizableColumnComponent {
    constructor() {
        this.width = null;
    }
    onResize(width) {
        this.width = width;
    }
}
TuiResizableColumnComponent.ɵfac = function TuiResizableColumnComponent_Factory(t) { return new (t || TuiResizableColumnComponent)(); };
TuiResizableColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiResizableColumnComponent, selectors: [["th", "tuiResizableColumn", ""]], hostVars: 2, hostBindings: function TuiResizableColumnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px");
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_ELEMENT_REF"],
                useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            },
        ])], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "t-bar", 3, "tuiResizableColumn"]], template: function TuiResizableColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiResizableColumn", function TuiResizableColumnComponent_Template_div_tuiResizableColumn_1_listener($event) { return ctx.onResize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnDirective"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]:last-child   .t-bar[_ngcontent-%COMP%] {\n  display: none;\n}\n.t-bar[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -1px;\n  width: 3px;\n  justify-self: flex-end;\n  border-left: 2px solid transparent;\n  background: var(--tui-support-12);\n  background-clip: content-box;\n  cursor: ew-resize;\n  opacity: 0;\n}\n.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvcmVzaXphYmxlLWNvbHVtbi9yZXNpemFibGUtY29sdW1uLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3Jlc2l6YWJsZS1jb2x1bW4vcmVzaXphYmxlLWNvbHVtbi5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxrQkFBQTtBREtKO0FDSEk7RUFDSSxhQUFBO0FES1I7QUNEQTtFQzJOSSw0QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUQzTkEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QURLSjtBQ0hJOztFQUVJLFVBQUE7QURLUiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3Jlc2l6YWJsZS1jb2x1bW4vcmVzaXphYmxlLWNvbHVtbi5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdDpsYXN0LWNoaWxkIC50LWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udC1iYXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTFweDtcbiAgd2lkdGg6IDNweDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXN1cHBvcnQtMTIpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgb3BhY2l0eTogMDtcbn1cbi50LWJhcjpob3Zlcixcbi50LWJhcjphY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpsYXN0LWNoaWxkIC50LWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4udC1iYXIge1xuICAgIC50cmFuc2l0aW9uKG9wYWNpdHkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIHdpZHRoOiAzcHg7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdXBwb3J0LTEyKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiResizableColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `th[tuiResizableColumn]`,
                templateUrl: `./resizable-column.template.html`,
                styleUrls: [`./resizable-column.style.less`],
                providers: [
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_ELEMENT_REF"],
                        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
                    },
                ],
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: [`style.width.px`]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/resizable-column/resizable-column.directive.ts":
/*!********************************************************************************!*\
  !*** ../addon-table/components/resizable-column/resizable-column.directive.ts ***!
  \********************************************************************************/
/*! exports provided: TuiResizableColumnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnDirective", function() { return TuiResizableColumnDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






/** @deprecated use `<th tuiTh [resizable]="true">` from {@link TuiTableModule} */
// @dynamic
class TuiResizableColumnDirective {
    constructor(documentRef, elementRef, parentRef) {
        this.documentRef = documentRef;
        this.elementRef = elementRef;
        this.parentRef = parentRef;
        this.tuiResizableColumn = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.elementRef.nativeElement, `mousedown`).pipe(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            const { width, right } = this.parentRef.nativeElement.getBoundingClientRect();
            return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.documentRef, `mousemove`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ clientX }) => width + clientX - right), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.documentRef, `mouseup`)));
        }));
    }
}
TuiResizableColumnDirective.ɵfac = function TuiResizableColumnDirective_Factory(t) { return new (t || TuiResizableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_ELEMENT_REF"])); };
TuiResizableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiResizableColumnDirective, selectors: [["", "tuiResizableColumn", ""]], outputs: { tuiResizableColumn: "tuiResizableColumn" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiResizableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiResizableColumn]`,
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_ELEMENT_REF"]]
            }] }]; }, { tuiResizableColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/resizable-column/resizable-column.module.ts":
/*!*****************************************************************************!*\
  !*** ../addon-table/components/resizable-column/resizable-column.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TuiResizableColumnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnModule", function() { return TuiResizableColumnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resizable_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resizable-column.component */ "../addon-table/components/resizable-column/resizable-column.component.ts");
/* harmony import */ var _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizable-column.directive */ "../addon-table/components/resizable-column/resizable-column.directive.ts");




/** @deprecated use `<th tuiTh [resizable]="true">` from {@link TuiTableModule} */
class TuiResizableColumnModule {
}
TuiResizableColumnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiResizableColumnModule });
TuiResizableColumnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiResizableColumnModule_Factory(t) { return new (t || TuiResizableColumnModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiResizableColumnModule, { declarations: [_resizable_column_component__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnComponent"], _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnDirective"]], exports: [_resizable_column_component__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnComponent"], _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiResizableColumnModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_resizable_column_component__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnComponent"], _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnDirective"]],
                exports: [_resizable_column_component__WEBPACK_IMPORTED_MODULE_1__["TuiResizableColumnComponent"], _resizable_column_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizableColumnDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/components/table-pagination/index.ts":
/*!***********************************************************!*\
  !*** ../addon-table/components/table-pagination/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiTablePaginationComponent, TuiTablePaginationModule, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, TUI_TABLE_PAGINATION_OPTIONS, tuiTablePaginationOptionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationComponent", function() { return _table_pagination_component__WEBPACK_IMPORTED_MODULE_0__["TuiTablePaginationComponent"]; });

/* harmony import */ var _table_pagination_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-pagination.module */ "../addon-table/components/table-pagination/table-pagination.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationModule", function() { return _table_pagination_module__WEBPACK_IMPORTED_MODULE_1__["TuiTablePaginationModule"]; });

/* harmony import */ var _table_pagination_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-pagination-options */ "../addon-table/components/table-pagination/table-pagination-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_DEFAULT_OPTIONS", function() { return _table_pagination_options__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PAGINATION_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_OPTIONS", function() { return _table_pagination_options__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PAGINATION_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiTablePaginationOptionsProvider", function() { return _table_pagination_options__WEBPACK_IMPORTED_MODULE_2__["tuiTablePaginationOptionsProvider"]; });






/***/ }),

/***/ "../addon-table/components/table-pagination/table-pagination-options.ts":
/*!******************************************************************************!*\
  !*** ../addon-table/components/table-pagination/table-pagination-options.ts ***!
  \******************************************************************************/
/*! exports provided: TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, TUI_TABLE_PAGINATION_OPTIONS, tuiTablePaginationOptionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_DEFAULT_OPTIONS", function() { return TUI_TABLE_PAGINATION_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_OPTIONS", function() { return TUI_TABLE_PAGINATION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiTablePaginationOptionsProvider", function() { return tuiTablePaginationOptionsProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

function defaultSizeOptionContent({ $implicit }) {
    return `${$implicit}`;
}
const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
    sizeOptionContent: defaultSizeOptionContent,
};
const TUI_TABLE_PAGINATION_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Default parameters for TablePagination component`, { factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS });
function tuiTablePaginationOptionsProvider(options) {
    return {
        provide: TUI_TABLE_PAGINATION_OPTIONS,
        useValue: Object.assign(Object.assign({}, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS), options),
    };
}


/***/ }),

/***/ "../addon-table/components/table-pagination/table-pagination.component.ts":
/*!********************************************************************************!*\
  !*** ../addon-table/components/table-pagination/table-pagination.component.ts ***!
  \********************************************************************************/
/*! exports provided: TuiTablePaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationComponent", function() { return TuiTablePaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-table/tokens */ "../addon-table/tokens/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _table_pagination_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-pagination-options */ "../addon-table/components/table-pagination/table-pagination-options.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/components/hosted-dropdown/hosted-dropdown.component */ "../core/components/hosted-dropdown/hosted-dropdown.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
















function TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_tui_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-svg", 12);
} }
function TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, total: a1 }; };
function TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.onItem(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_tui_svg_3_Template, 1, 0, "tui-svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r5.options.sizeOptionContent)("context", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r6, ctx_r5.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r6 === ctx_r5.size)("ngIfElse", _r8);
} }
function TuiTablePaginationComponent_ng_container_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiTablePaginationComponent_ng_container_0_ng_template_11_ng_container_1_Template, 6, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.items);
} }
function TuiTablePaginationComponent_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiTablePaginationComponent_ng_container_0_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiTablePaginationComponent_ng_container_0_ng_container_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.forth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const spinTexts_r12 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.leftDisabled)("title", spinTexts_r12[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.rightDisabled)("title", spinTexts_r12[1]);
} }
function TuiTablePaginationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tui-hosted-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openChange", function TuiTablePaginationComponent_ng_container_0_Template_tui_hosted_dropdown_openChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.open = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TuiTablePaginationComponent_ng_container_0_ng_template_11_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TuiTablePaginationComponent_ng_container_0_ng_container_16_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.pages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.linesPerPage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", _r2)("open", ctx_r0.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.start + 1, "\u2013", ctx_r0.end, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.of, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, ctx_r0.spinTexts$));
} }
// @dynamic
class TuiTablePaginationComponent {
    constructor(spinTexts$, texts$, options) {
        this.spinTexts$ = spinTexts$;
        this.texts$ = texts$;
        this.options = options;
        this.items = [10, 20, 50, 100];
        this.total = 0;
        this.page = 0;
        this.size = this.items[0];
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = false;
    }
    get pages() {
        return Math.ceil(this.total / this.size);
    }
    get start() {
        return this.page * this.size;
    }
    get end() {
        return Math.min(this.start + this.size, this.total);
    }
    get leftDisabled() {
        return !this.start;
    }
    get rightDisabled() {
        return this.end === this.total;
    }
    onItem(size) {
        const { start } = this;
        this.size = size;
        this.sizeChange.emit(size);
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.pageChange.emit(this.page);
    }
    back() {
        this.page--;
        this.pageChange.emit(this.page);
    }
    forth() {
        this.page++;
        this.pageChange.emit(this.page);
    }
}
TuiTablePaginationComponent.ɵfac = function TuiTablePaginationComponent_Factory(t) { return new (t || TuiTablePaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_SPIN_TEXTS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PAGINATION_TEXTS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_pagination_options__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PAGINATION_OPTIONS"])); };
TuiTablePaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiTablePaginationComponent, selectors: [["tui-table-pagination"]], inputs: { items: "items", total: "total", page: "page", size: "size" }, outputs: { pageChange: "pageChange", sizeChange: "sizeChange" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "t-pages"], [1, "t-strong"], ["automation-id", "tui-table-pagination__lines-per-page-wrapper"], [3, "content", "open", "openChange"], ["tuiLink", ""], ["content", ""], [4, "ngFor", "ngForOf"], ["tuiOption", "", "size", "s", 1, "t-item", 3, "click"], ["polymorpheus-outlet", "", 3, "content", "context"], ["src", "tuiIconCheckLarge", "class", "t-checkmark", 4, "ngIf", "ngIfElse"], ["fakeIcon", ""], ["src", "tuiIconCheckLarge", 1, "t-checkmark"], [1, "t-checkmark"], ["tuiIconButton", "", "type", "button", "size", "xs", "appearance", "icon", "icon", "tuiIconChevronLeft", 1, "t-back", 3, "disabled", "title", "click"], ["tuiIconButton", "", "type", "button", "size", "xs", "appearance", "icon", "icon", "tuiIconChevronRight", 3, "disabled", "title", "click"]], template: function TuiTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiTablePaginationComponent_ng_container_0_Template, 18, 12, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.texts$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["TuiHostedDropdownComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__["TuiLinkComponent"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_10__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_11__["TuiOptionComponent"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__["PolymorpheusOutletComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__["TuiSvgComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["TuiButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  font: var(--tui-font-text-s);\n  align-items: center;\n  color: var(--tui-text-03);\n}\n.t-strong[_ngcontent-%COMP%] {\n  color: var(--tui-text-01);\n}\n.t-pages[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.t-item[_ngcontent-%COMP%] {\n  min-width: 5.5rem;\n  box-sizing: border-box;\n}\n.t-checkmark[_ngcontent-%COMP%] {\n  min-width: 1.5rem;\n  border-left: 5px solid transparent;\n}\n.t-back[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUtcGFnaW5hdGlvbi90YWJsZS1wYWdpbmF0aW9uLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlLXBhZ2luYXRpb24vdGFibGUtcGFnaW5hdGlvbi5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FES0o7QUNGQTtFQUNJLHlCQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0FER0o7QUNBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QURFSjtBQ0NBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtBRENKO0FDRUE7RUFDSSwwQkFBQTtBREFKIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUtcGFnaW5hdGlvbi90YWJsZS1wYWdpbmF0aW9uLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4udC1zdHJvbmcge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuLnQtcGFnZXMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udC1pdGVtIHtcbiAgbWluLXdpZHRoOiA1LjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udC1jaGVja21hcmsge1xuICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50LWJhY2sge1xuICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuNXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG5cbi50LXN0cm9uZyB7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcbn1cblxuLnQtcGFnZXMge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnQtaXRlbSB7XG4gICAgbWluLXdpZHRoOiA1LjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnQtY2hlY2ttYXJrIHtcbiAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udC1iYWNrIHtcbiAgICBtYXJnaW46IDAgMC4yNXJlbSAwIDEuNXJlbTtcbn1cbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTablePaginationComponent.prototype, "items", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTablePaginationComponent.prototype, "total", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTablePaginationComponent.prototype, "page", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTablePaginationComponent.prototype, "size", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTablePaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-table-pagination`,
                templateUrl: `./table-pagination.template.html`,
                styleUrls: [`./table-pagination.style.less`],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_SPIN_TEXTS"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PAGINATION_TEXTS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_table_pagination_options__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PAGINATION_OPTIONS"]]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], sizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table-pagination/table-pagination.module.ts":
/*!*****************************************************************************!*\
  !*** ../addon-table/components/table-pagination/table-pagination.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TuiTablePaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationModule", function() { return TuiTablePaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _table_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");






class TuiTablePaginationModule {
}
TuiTablePaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiTablePaginationModule });
TuiTablePaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiTablePaginationModule_Factory(t) { return new (t || TuiTablePaginationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDataListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiTablePaginationModule, { declarations: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDataListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"]], exports: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTablePaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDataListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"],
                ],
                declarations: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationComponent"]],
                exports: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/components/table/directives/cell.directive.ts":
/*!********************************************************************!*\
  !*** ../addon-table/components/table/directives/cell.directive.ts ***!
  \********************************************************************/
/*! exports provided: TuiCellDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCellDirective", function() { return TuiCellDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");




class TuiCellDirective {
    constructor(template) {
        this.template = template;
        this.tuiCell = ``;
    }
}
TuiCellDirective.ɵfac = function TuiCellDirective_Factory(t) { return new (t || TuiCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
TuiCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiCellDirective, selectors: [["", "tuiCell", ""]], inputs: { tuiCell: "tuiCell" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiCellDirective.prototype, "tuiCell", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiCell]`,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
            }] }]; }, { tuiCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/head.directive.ts":
/*!********************************************************************!*\
  !*** ../addon-table/components/table/directives/head.directive.ts ***!
  \********************************************************************/
/*! exports provided: TuiHeadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiHeadDirective", function() { return TuiHeadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class TuiHeadDirective {
    constructor(template) {
        this.template = template;
    }
}
TuiHeadDirective.ɵfac = function TuiHeadDirective_Factory(t) { return new (t || TuiHeadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
TuiHeadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiHeadDirective, selectors: [["", "tuiHead", ""]], inputs: { tuiHead: "tuiHead" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiHeadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `[tuiHead]`,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
            }] }]; }, { tuiHead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/resized.directive.ts":
/*!***********************************************************************!*\
  !*** ../addon-table/components/table/directives/resized.directive.ts ***!
  \***********************************************************************/
/*! exports provided: TuiResizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiResizedDirective", function() { return TuiResizedDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






// @dynamic
class TuiResizedDirective {
    constructor(documentRef, elementRef, parentRef) {
        this.documentRef = documentRef;
        this.elementRef = elementRef;
        this.parentRef = parentRef;
        this.tuiResized = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.elementRef.nativeElement, `mousedown`).pipe(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            const { width, right } = this.parentRef.nativeElement.getBoundingClientRect();
            return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.documentRef, `mousemove`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ clientX }) => width + clientX - right), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["typedFromEvent"])(this.documentRef, `mouseup`)));
        }));
    }
}
TuiResizedDirective.ɵfac = function TuiResizedDirective_Factory(t) { return new (t || TuiResizedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_ELEMENT_REF"])); };
TuiResizedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiResizedDirective, selectors: [["", "tuiResized", ""]], outputs: { tuiResized: "tuiResized" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiResizedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiResized]`,
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_ELEMENT_REF"]]
            }] }]; }, { tuiResized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/row.directive.ts":
/*!*******************************************************************!*\
  !*** ../addon-table/components/table/directives/row.directive.ts ***!
  \*******************************************************************/
/*! exports provided: TuiRowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRowDirective", function() { return TuiRowDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");




class TuiRowDirective {
    constructor(template) {
        this.template = template;
        this.tuiRowOf = [];
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
}
TuiRowDirective.ɵfac = function TuiRowDirective_Factory(t) { return new (t || TuiRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
TuiRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiRowDirective, selectors: [["ng-template", "tuiRow", ""]], inputs: { tuiRowOf: "tuiRowOf" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiRowDirective.prototype, "tuiRowOf", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `ng-template[tuiRow]`,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
            }] }]; }, { tuiRowOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/sort-by.directive.ts":
/*!***********************************************************************!*\
  !*** ../addon-table/components/table/directives/sort-by.directive.ts ***!
  \***********************************************************************/
/*! exports provided: TuiSortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSortByDirective", function() { return TuiSortByDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable.directive */ "../addon-table/components/table/directives/sortable.directive.ts");
/* harmony import */ var _table_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table.directive */ "../addon-table/components/table/directives/table.directive.ts");








class TuiSortByDirective {
    constructor(table) {
        this.table = table;
        this.sortables = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["EMPTY_QUERY"];
        this.tuiSortBy = null;
        this.tuiSortByChange = this.table.sorterChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(() => !!this.sortables.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(sorter => this.getKey(sorter)));
    }
    getKey(sorter) {
        var _a, _b;
        return (_b = (_a = this.sortables.find(s => s.sorter === sorter)) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : null;
    }
}
TuiSortByDirective.ɵfac = function TuiSortByDirective_Factory(t) { return new (t || TuiSortByDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTableDirective"])); };
TuiSortByDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiSortByDirective, selectors: [["table", "tuiTable", "", "tuiSortBy", ""]], contentQueries: function TuiSortByDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _sortable_directive__WEBPACK_IMPORTED_MODULE_4__["TuiSortableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sortables = _t);
    } }, inputs: { tuiSortBy: "tuiSortBy" }, outputs: { tuiSortByChange: "tuiSortByChange" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiSortByDirective.prototype, "tuiSortBy", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiSortByDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `table[tuiTable][tuiSortBy]`,
            }]
    }], function () { return [{ type: _table_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_table_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTableDirective"]]
            }] }]; }, { sortables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["TuiSortableDirective"], { descendants: true }]
        }], tuiSortBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tuiSortByChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/sortable.directive.ts":
/*!************************************************************************!*\
  !*** ../addon-table/components/table/directives/sortable.directive.ts ***!
  \************************************************************************/
/*! exports provided: TuiSortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSortableDirective", function() { return TuiSortableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _sort_by_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-by.directive */ "../addon-table/components/table/directives/sort-by.directive.ts");
/* harmony import */ var _table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.directive */ "../addon-table/components/table/directives/table.directive.ts");








class TuiSortableDirective {
    constructor(sortBy, table, th) {
        this.sortBy = sortBy;
        this.table = table;
        this.th = th;
        this.sorter = () => 0;
    }
    get key() {
        return this.th.key;
    }
    ngOnInit() {
        this.sorter = this.match ? this.table.sorter : this.sorter;
        this.th.sorter = this.sorter;
    }
    ngDoCheck() {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }
    get match() {
        return this.sortBy.tuiSortBy === this.key;
    }
}
TuiSortableDirective.ɵfac = function TuiSortableDirective_Factory(t) { return new (t || TuiSortableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _sort_by_directive__WEBPACK_IMPORTED_MODULE_2__["TuiSortByDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_th_th_component__WEBPACK_IMPORTED_MODULE_1__["TuiThComponent"])); };
TuiSortableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiSortableDirective, selectors: [["th", "tuiTh", "", "tuiSortable", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSortableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `th[tuiTh][tuiSortable]`,
            }]
    }], function () { return [{ type: _sort_by_directive__WEBPACK_IMPORTED_MODULE_2__["TuiSortByDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _sort_by_directive__WEBPACK_IMPORTED_MODULE_2__["TuiSortByDirective"])]
            }] }, { type: _table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"]]
            }] }, { type: _th_th_component__WEBPACK_IMPORTED_MODULE_1__["TuiThComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_th_th_component__WEBPACK_IMPORTED_MODULE_1__["TuiThComponent"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../addon-table/components/table/directives/table.directive.ts":
/*!*********************************************************************!*\
  !*** ../addon-table/components/table/directives/table.directive.ts ***!
  \*********************************************************************/
/*! exports provided: TuiTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableDirective", function() { return TuiTableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/stuck.provider */ "../addon-table/components/table/providers/stuck.provider.ts");
/* harmony import */ var _providers_table_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/table.providers */ "../addon-table/components/table/providers/table.providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");









class TuiTableDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiController"] {
    constructor(entries$, mode$, stuck$, changeDetectorRef) {
        super();
        this.entries$ = entries$;
        this.mode$ = mode$;
        this.stuck$ = stuck$;
        this.changeDetectorRef = changeDetectorRef;
        this.columns = [];
        this.size = `m`;
        this.direction = 1;
        this.directionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sorterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sorter = () => 0;
    }
    updateSorter(sorter) {
        if (this.sorter === sorter) {
            this.direction = this.direction === 1 ? -1 : 1;
            this.directionChange.emit(this.direction);
        }
        else {
            this.sorter = sorter || (() => 0);
            this.sorterChange.emit(this.sorter);
            this.direction = 1;
            this.directionChange.emit(1);
        }
        this.change$.next();
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
}
TuiTableDirective.ɵfac = function TuiTableDirective_Factory(t) { return new (t || TuiTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["IntersectionObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_MODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_STUCK"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TuiTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiTableDirective, selectors: [["table", "tuiTable", ""]], hostAttrs: [2, "border-collapse", "separate"], hostVars: 1, hostBindings: function TuiTableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("$.data-mode.attr", function TuiTableDirective___data_mode_attr_HostBindingHandler() { return ctx.mode$; })("$.class._stuck", function TuiTableDirective___class__stuck_HostBindingHandler() { return ctx.stuck$; });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
    } }, inputs: { columns: "columns", size: "size", direction: "direction", sorter: "sorter" }, outputs: { directionChange: "directionChange", sorterChange: "sorterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"](_providers_table_providers__WEBPACK_IMPORTED_MODULE_6__["TUI_TABLE_PROVIDERS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTableDirective.prototype, "columns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTableDirective.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTableDirective.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiTableDirective.prototype, "sorter", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `table[tuiTable]`,
                providers: _providers_table_providers__WEBPACK_IMPORTED_MODULE_6__["TUI_TABLE_PROVIDERS"],
                host: {
                    '($.data-mode.attr)': `mode$`,
                    '($.class._stuck)': `stuck$`,
                    style: `border-collapse: separate`,
                },
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["IntersectionObserverService"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_MODE"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_STUCK"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }]; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], directionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], sorterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], sorter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/directives/thead.directive.ts":
/*!*********************************************************************!*\
  !*** ../addon-table/components/table/directives/thead.directive.ts ***!
  \*********************************************************************/
/*! exports provided: TuiTheadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTheadDirective", function() { return TuiTheadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/stuck.provider */ "../addon-table/components/table/providers/stuck.provider.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





class TuiTheadDirective {
    constructor(stuck$) {
        this.stuck$ = stuck$;
    }
}
TuiTheadDirective.ɵfac = function TuiTheadDirective_Factory(t) { return new (t || TuiTheadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK"])); };
TuiTheadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiTheadDirective, selectors: [["thead", "tuiThead", ""]], hostBindings: function TuiTheadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("$.class._stuck", function TuiTheadDirective___class__stuck_HostBindingHandler() { return ctx.stuck$; });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK_PROVIDER"],
            _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["IntersectionObserverService"],
            {
                provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["INTERSECTION_ROOT_MARGIN"],
                useValue: `0px 10000px 10000px 10000px`,
            },
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTheadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `thead[tuiThead]`,
                providers: [
                    _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK_PROVIDER"],
                    _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["IntersectionObserverService"],
                    {
                        provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["INTERSECTION_ROOT_MARGIN"],
                        useValue: `0px 10000px 10000px 10000px`,
                    },
                ],
                host: {
                    '($.class._stuck)': `stuck$`,
                },
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__["TUI_STUCK"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../addon-table/components/table/index.ts":
/*!************************************************!*\
  !*** ../addon-table/components/table/index.ts ***!
  \************************************************/
/*! exports provided: TuiCellDirective, TuiHeadDirective, TuiResizedDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTableDirective, TuiTheadDirective, TuiTableSortPipe, stuckFactory, TUI_STUCK, TUI_STUCK_PROVIDER, TABLE_FACTORY, TUI_TABLE_PROVIDER, TABLE_THRESHOLD, TABLE_LABEL, inputCountOptionsFactory, TUI_TABLE_PROVIDERS, TuiTableModule, TuiTbodyComponent, TuiTdComponent, TuiThComponent, TuiThGroupComponent, TuiTrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_cell_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCellDirective", function() { return _directives_cell_directive__WEBPACK_IMPORTED_MODULE_0__["TuiCellDirective"]; });

/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiHeadDirective", function() { return _directives_head_directive__WEBPACK_IMPORTED_MODULE_1__["TuiHeadDirective"]; });

/* harmony import */ var _directives_resized_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/resized.directive */ "../addon-table/components/table/directives/resized.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizedDirective", function() { return _directives_resized_directive__WEBPACK_IMPORTED_MODULE_2__["TuiResizedDirective"]; });

/* harmony import */ var _directives_row_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRowDirective", function() { return _directives_row_directive__WEBPACK_IMPORTED_MODULE_3__["TuiRowDirective"]; });

/* harmony import */ var _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/sort-by.directive */ "../addon-table/components/table/directives/sort-by.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortByDirective", function() { return _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_4__["TuiSortByDirective"]; });

/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/sortable.directive */ "../addon-table/components/table/directives/sortable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortableDirective", function() { return _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_5__["TuiSortableDirective"]; });

/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableDirective", function() { return _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"]; });

/* harmony import */ var _directives_thead_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/thead.directive */ "../addon-table/components/table/directives/thead.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTheadDirective", function() { return _directives_thead_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTheadDirective"]; });

/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/table-sort.pipe */ "../addon-table/components/table/pipes/table-sort.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableSortPipe", function() { return _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiTableSortPipe"]; });

/* harmony import */ var _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/stuck.provider */ "../addon-table/components/table/providers/stuck.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stuckFactory", function() { return _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_9__["stuckFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK", function() { return _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_9__["TUI_STUCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK_PROVIDER", function() { return _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_9__["TUI_STUCK_PROVIDER"]; });

/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/table.provider */ "../addon-table/components/table/providers/table.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_FACTORY", function() { return _providers_table_provider__WEBPACK_IMPORTED_MODULE_10__["TABLE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDER", function() { return _providers_table_provider__WEBPACK_IMPORTED_MODULE_10__["TUI_TABLE_PROVIDER"]; });

/* harmony import */ var _providers_table_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/table.providers */ "../addon-table/components/table/providers/table.providers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_THRESHOLD", function() { return _providers_table_providers__WEBPACK_IMPORTED_MODULE_11__["TABLE_THRESHOLD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_LABEL", function() { return _providers_table_providers__WEBPACK_IMPORTED_MODULE_11__["TABLE_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputCountOptionsFactory", function() { return _providers_table_providers__WEBPACK_IMPORTED_MODULE_11__["inputCountOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDERS", function() { return _providers_table_providers__WEBPACK_IMPORTED_MODULE_11__["TUI_TABLE_PROVIDERS"]; });

/* harmony import */ var _table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table.module */ "../addon-table/components/table/table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableModule", function() { return _table_module__WEBPACK_IMPORTED_MODULE_12__["TuiTableModule"]; });

/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTbodyComponent", function() { return _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_13__["TuiTbodyComponent"]; });

/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTdComponent", function() { return _td_td_component__WEBPACK_IMPORTED_MODULE_14__["TuiTdComponent"]; });

/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThComponent", function() { return _th_th_component__WEBPACK_IMPORTED_MODULE_15__["TuiThComponent"]; });

/* harmony import */ var _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThGroupComponent", function() { return _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_16__["TuiThGroupComponent"]; });

/* harmony import */ var _tr_tr_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTrComponent", function() { return _tr_tr_component__WEBPACK_IMPORTED_MODULE_17__["TuiTrComponent"]; });





















/***/ }),

/***/ "../addon-table/components/table/pipes/table-sort.pipe.ts":
/*!****************************************************************!*\
  !*** ../addon-table/components/table/pipes/table-sort.pipe.ts ***!
  \****************************************************************/
/*! exports provided: TuiTableSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableSortPipe", function() { return TuiTableSortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");






class TuiTableSortPipe {
    constructor(table) {
        this.table = table;
    }
    transform(data) {
        return this.sort(data, this.table.sorter, this.table.direction);
    }
    sort(data, sorter, direction) {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
}
TuiTableSortPipe.ɵfac = function TuiTableSortPipe_Factory(t) { return new (t || TuiTableSortPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"])); };
TuiTableSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tuiTableSort", type: TuiTableSortPipe, pure: false });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiPure"]
], TuiTableSortPipe.prototype, "sort", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTableSortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: `tuiTableSort`,
                pure: false,
            }]
    }], function () { return [{ type: _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"]]
            }] }]; }, { sort: [] }); })();


/***/ }),

/***/ "../addon-table/components/table/providers/stuck.provider.ts":
/*!*******************************************************************!*\
  !*** ../addon-table/components/table/providers/stuck.provider.ts ***!
  \*******************************************************************/
/*! exports provided: stuckFactory, TUI_STUCK, TUI_STUCK_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stuckFactory", function() { return stuckFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK", function() { return TUI_STUCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK_PROVIDER", function() { return TUI_STUCK_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



// eslint-disable-next-line @typescript-eslint/naming-convention
function stuckFactory({ nativeElement }, entries$) {
    const stream$ = entries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([{ intersectionRatio }]) => intersectionRatio < 1));
    nativeElement[`$.class._stuck`] = stream$;
    return stream$;
}
const TUI_STUCK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Stream of sticky stuck events`);
const TUI_STUCK_PROVIDER = {
    provide: TUI_STUCK,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["IntersectionObserverService"]],
    useFactory: stuckFactory,
};


/***/ }),

/***/ "../addon-table/components/table/providers/table.provider.ts":
/*!*******************************************************************!*\
  !*** ../addon-table/components/table/providers/table.provider.ts ***!
  \*******************************************************************/
/*! exports provided: TABLE_FACTORY, TUI_TABLE_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_FACTORY", function() { return TABLE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDER", function() { return TUI_TABLE_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/table-sort.pipe */ "../addon-table/components/table/pipes/table-sort.pipe.ts");





// TODO: 3.0 remove in ivy compilation
const TABLE_FACTORY = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["watchedControllerFactory"];
const TUI_TABLE_PROVIDER = [
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDestroyService"],
    _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiTableSortPipe"],
    {
        provide: _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"],
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDestroyService"]],
        useFactory: TABLE_FACTORY,
    },
];


/***/ }),

/***/ "../addon-table/components/table/providers/table.providers.ts":
/*!********************************************************************!*\
  !*** ../addon-table/components/table/providers/table.providers.ts ***!
  \********************************************************************/
/*! exports provided: TABLE_THRESHOLD, TABLE_LABEL, inputCountOptionsFactory, TUI_TABLE_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_THRESHOLD", function() { return TABLE_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_LABEL", function() { return TABLE_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputCountOptionsFactory", function() { return inputCountOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDERS", function() { return TUI_TABLE_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/intersection-observer */ "../../node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _stuck_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stuck.provider */ "../addon-table/components/table/providers/stuck.provider.ts");






// TODO: 3.0 remove in ivy compilation
const TABLE_THRESHOLD = [0, 1];
const TABLE_LABEL = {
    labelOutside: true,
};
// eslint-disable-next-line @typescript-eslint/naming-convention
function inputCountOptionsFactory(options) {
    return Object.assign(Object.assign({}, options), { hideButtons: true });
}
const TUI_TABLE_PROVIDERS = [
    {
        provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["INTERSECTION_ROOT_MARGIN"],
        useValue: `10000px 10000px 10000px 0px`,
    },
    {
        provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["INTERSECTION_THRESHOLD"],
        useValue: TABLE_THRESHOLD,
    },
    {
        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TUI_TEXTFIELD_APPEARANCE"],
        // TODO: 3.0 remove in ivy compilation
        useValue: `table`,
    },
    {
        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TUI_TEXTFIELD_LABEL_OUTSIDE"],
        useValue: TABLE_LABEL,
    },
    {
        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TUI_INPUT_COUNT_OPTIONS"],
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TUI_INPUT_COUNT_OPTIONS"]]],
        useFactory: inputCountOptionsFactory,
    },
    {
        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TUI_TEXTFIELD_SIZE"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"]),
    },
    _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["IntersectionObserverService"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["MODE_PROVIDER"],
    _stuck_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_STUCK_PROVIDER"],
];


/***/ }),

/***/ "../addon-table/components/table/table.module.ts":
/*!*******************************************************!*\
  !*** ../addon-table/components/table/table.module.ts ***!
  \*******************************************************/
/*! exports provided: TuiTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableModule", function() { return TuiTableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _directives_cell_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _directives_resized_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/resized.directive */ "../addon-table/components/table/directives/resized.directive.ts");
/* harmony import */ var _directives_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/sort-by.directive */ "../addon-table/components/table/directives/sort-by.directive.ts");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/sortable.directive */ "../addon-table/components/table/directives/sortable.directive.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _directives_thead_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/thead.directive */ "../addon-table/components/table/directives/thead.directive.ts");
/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/table-sort.pipe */ "../addon-table/components/table/pipes/table-sort.pipe.ts");
/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _tr_tr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");




















class TuiTableModule {
}
TuiTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiTableModule });
TuiTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiTableModule_Factory(t) { return new (t || TuiTableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMapperPipeModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiSvgModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiTableModule, { declarations: [_directives_table_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTableDirective"],
        _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_14__["TuiTbodyComponent"],
        _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_17__["TuiThGroupComponent"],
        _th_th_component__WEBPACK_IMPORTED_MODULE_16__["TuiThComponent"],
        _td_td_component__WEBPACK_IMPORTED_MODULE_15__["TuiTdComponent"],
        _tr_tr_component__WEBPACK_IMPORTED_MODULE_18__["TuiTrComponent"],
        _directives_cell_directive__WEBPACK_IMPORTED_MODULE_5__["TuiCellDirective"],
        _directives_head_directive__WEBPACK_IMPORTED_MODULE_6__["TuiHeadDirective"],
        _directives_row_directive__WEBPACK_IMPORTED_MODULE_8__["TuiRowDirective"],
        _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["TuiSortByDirective"],
        _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_10__["TuiSortableDirective"],
        _directives_thead_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTheadDirective"],
        _directives_resized_directive__WEBPACK_IMPORTED_MODULE_7__["TuiResizedDirective"],
        _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiTableSortPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMapperPipeModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiSvgModule"]], exports: [_directives_table_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTableDirective"],
        _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_14__["TuiTbodyComponent"],
        _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_17__["TuiThGroupComponent"],
        _th_th_component__WEBPACK_IMPORTED_MODULE_16__["TuiThComponent"],
        _td_td_component__WEBPACK_IMPORTED_MODULE_15__["TuiTdComponent"],
        _tr_tr_component__WEBPACK_IMPORTED_MODULE_18__["TuiTrComponent"],
        _directives_cell_directive__WEBPACK_IMPORTED_MODULE_5__["TuiCellDirective"],
        _directives_head_directive__WEBPACK_IMPORTED_MODULE_6__["TuiHeadDirective"],
        _directives_row_directive__WEBPACK_IMPORTED_MODULE_8__["TuiRowDirective"],
        _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["TuiSortByDirective"],
        _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_10__["TuiSortableDirective"],
        _directives_thead_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTheadDirective"],
        _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiTableSortPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMapperPipeModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiSvgModule"]],
                declarations: [
                    _directives_table_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTableDirective"],
                    _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_14__["TuiTbodyComponent"],
                    _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_17__["TuiThGroupComponent"],
                    _th_th_component__WEBPACK_IMPORTED_MODULE_16__["TuiThComponent"],
                    _td_td_component__WEBPACK_IMPORTED_MODULE_15__["TuiTdComponent"],
                    _tr_tr_component__WEBPACK_IMPORTED_MODULE_18__["TuiTrComponent"],
                    _directives_cell_directive__WEBPACK_IMPORTED_MODULE_5__["TuiCellDirective"],
                    _directives_head_directive__WEBPACK_IMPORTED_MODULE_6__["TuiHeadDirective"],
                    _directives_row_directive__WEBPACK_IMPORTED_MODULE_8__["TuiRowDirective"],
                    _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["TuiSortByDirective"],
                    _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_10__["TuiSortableDirective"],
                    _directives_thead_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTheadDirective"],
                    _directives_resized_directive__WEBPACK_IMPORTED_MODULE_7__["TuiResizedDirective"],
                    _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiTableSortPipe"],
                ],
                exports: [
                    _directives_table_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTableDirective"],
                    _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_14__["TuiTbodyComponent"],
                    _th_group_th_group_component__WEBPACK_IMPORTED_MODULE_17__["TuiThGroupComponent"],
                    _th_th_component__WEBPACK_IMPORTED_MODULE_16__["TuiThComponent"],
                    _td_td_component__WEBPACK_IMPORTED_MODULE_15__["TuiTdComponent"],
                    _tr_tr_component__WEBPACK_IMPORTED_MODULE_18__["TuiTrComponent"],
                    _directives_cell_directive__WEBPACK_IMPORTED_MODULE_5__["TuiCellDirective"],
                    _directives_head_directive__WEBPACK_IMPORTED_MODULE_6__["TuiHeadDirective"],
                    _directives_row_directive__WEBPACK_IMPORTED_MODULE_8__["TuiRowDirective"],
                    _directives_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__["TuiSortByDirective"],
                    _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_10__["TuiSortableDirective"],
                    _directives_thead_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTheadDirective"],
                    _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiTableSortPipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/components/table/tbody/tbody.component.ts":
/*!****************************************************************!*\
  !*** ../addon-table/components/table/tbody/tbody.component.ts ***!
  \****************************************************************/
/*! exports provided: TuiTbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTbodyComponent", function() { return TuiTbodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _directives_row_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/table-sort.pipe */ "../addon-table/components/table/pipes/table-sort.pipe.ts");
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/table.provider */ "../addon-table/components/table/providers/table.provider.ts");
/* harmony import */ var _tr_tr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");















const _c0 = ["tuiTbody", ""];
function TuiTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiTbodyComponent_tr_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "tui-svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colSpan", ctx_r0.table.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-chevron_rotated", ctx_r0.open);
} }
function TuiTbodyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "tuiMapper");
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.row.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, item_r5, ctx_r4.toContext, index_r6));
} }
function TuiTbodyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiTbodyComponent_ng_container_2_ng_container_1_Template, 2, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.sorted);
} }
const _c1 = ["*"];
class TuiTbodyComponent {
    constructor(pipe, table) {
        this.pipe = pipe;
        this.table = table;
        this.data = [];
        this.heading = ``;
        this.open = true;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rows = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["EMPTY_QUERY"];
        this.toContext = ($implicit, index) => ({ $implicit, index });
    }
    get sorted() {
        return this.pipe.transform(this.data);
    }
    onClick() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}
TuiTbodyComponent.ɵfac = function TuiTbodyComponent_Factory(t) { return new (t || TuiTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiTableSortPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"]))); };
TuiTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiTbodyComponent, selectors: [["tbody", "tuiTbody", ""]], contentQueries: function TuiTbodyComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _directives_row_directive__WEBPACK_IMPORTED_MODULE_3__["TuiRowDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _tr_tr_component__WEBPACK_IMPORTED_MODULE_7__["TuiTrComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.row = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rows = _t);
    } }, inputs: { data: "data", heading: "heading", open: "open" }, outputs: { openChange: "openChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"](_providers_table_provider__WEBPACK_IMPORTED_MODULE_6__["TUI_TABLE_PROVIDER"])], attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "t-heading", 3, "colSpan"], ["type", "button", 1, "t-expand", 3, "click"], ["polymorpheus-outlet", "", 1, "t-name", 3, "content"], ["src", "tuiIconChevronDownLarge", 1, "t-chevron"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function TuiTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiTbodyComponent_tr_1_Template, 5, 4, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiTbodyComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open && ctx.row);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusOutletComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__["TuiSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]], pipes: [_cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_11__["TuiMapperPipe"]], styles: ["[_nghost-%COMP%] {\n  border-color: var(--tui-base-04);\n}\n[_nghost-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n}\n.t-expand[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  box-sizing: border-box;\n  outline: none;\n  font-weight: bold;\n  cursor: pointer;\n  border-color: inherit;\n}\n.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%] {\n  background: var(--tui-selection);\n}\n.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after {\n  content: '';\n  position: -webkit-sticky;\n  position: sticky;\n  height: 100%;\n  border-left: 1px solid;\n  border-color: inherit;\n}\n.t-expand[_ngcontent-%COMP%]:before {\n  left: 0;\n}\n.t-expand[_ngcontent-%COMP%]:after {\n  right: 0;\n}\n.t-heading[_ngcontent-%COMP%] {\n  height: var(--tui-height-m);\n  font: var(--tui-font-text-s);\n  padding: 0;\n  background: var(--tui-base-02);\n  border-bottom: 1px solid var(--tui-base-04);\n  border-color: inherit;\n}\ntable[data-size='l'][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size='l']   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n  height: var(--tui-height-l);\n}\n.t-name[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0.75rem;\n  display: inline-block;\n}\ntable[data-size='l'][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size='l']   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n.t-chevron[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0.75rem;\n  margin: 0 0.6875rem 0 auto;\n}\n.t-chevron_rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGJvZHkvdGJvZHkuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGJvZHkvdGJvZHkuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksZ0NBQUE7QURLSjtBQ05BO0VBSVEscUJBQUE7QURLUjtBQ0RBO0VDcUNJLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VEeENBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QURRSjtBQ05JO0VBQ0ksZ0NBQUE7QURRUjtBQ0xJOztFQUVJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QURPUjtBQ0pJO0VBQ0ksT0FBQTtBRE1SO0FDSEk7RUFDSSxRQUFBO0FES1I7QUNEQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0FER0o7QUNESTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7QURHUjtBQ0NBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBRENKO0FDQ0k7RUFDSSxVQUFBO0FEQ1I7QUNHQTtFQ2lLSSw4QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RURqS0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBRENKO0FDQ0k7RUFDSSx5QkFBQTtBRENSIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGJvZHkvdGJvZHkuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbjpob3N0IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNCk7XG59XG46aG9zdCB0ciB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cbi50LWV4cGFuZCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuLnQtZXhwYW5kOmZvY3VzLXZpc2libGUgLnQtbmFtZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWxlY3Rpb24pO1xufVxuLnQtZXhwYW5kOmJlZm9yZSxcbi50LWV4cGFuZDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cbi50LWV4cGFuZDpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuLnQtZXhwYW5kOmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG59XG4udC1oZWFkaW5nIHtcbiAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LW0pO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wNCk7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1zaXplPSdsJ10pIC50LWhlYWRpbmcge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBoZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbCk7XG59XG4udC1uYW1lIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMC43NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLXNpemU9J2wnXSkgLnQtbmFtZSB7XG4gIGxlZnQ6IDFyZW07XG59XG4udC1jaGV2cm9uIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICByaWdodDogMC43NXJlbTtcbiAgbWFyZ2luOiAwIDAuNjg3NXJlbSAwIGF1dG87XG59XG4udC1jaGV2cm9uX3JvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNCk7XG5cbiAgICB0ciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgICB9XG59XG5cbi50LWV4cGFuZCB7XG4gICAgLmNsZWFyYnRuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG5cbiAgICAmOmZvY3VzLXZpc2libGUgLnQtbmFtZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWxlY3Rpb24pO1xuICAgIH1cblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi50LWhlYWRpbmcge1xuICAgIGhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1tKTtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wNCk7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuXG4gICAgOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLXNpemU9J2wnXSkgJiB7XG4gICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1sKTtcbiAgICB9XG59XG5cbi50LW5hbWUge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgbGVmdDogMC43NXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICA6aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtc2l6ZT0nbCddKSAmIHtcbiAgICAgICAgbGVmdDogMXJlbTtcbiAgICB9XG59XG5cbi50LWNoZXZyb24ge1xuICAgIC50cmFuc2l0aW9uKHRyYW5zZm9ybSk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICByaWdodDogMC43NXJlbTtcbiAgICBtYXJnaW46IDAgMC42ODc1cmVtIDAgYXV0bztcblxuICAgICZfcm90YXRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiTbodyComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiTbodyComponent.prototype, "heading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiTbodyComponent.prototype, "open", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiTbodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tbody[tuiTbody]`,
                templateUrl: `./tbody.template.html`,
                styleUrls: [`./tbody.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: _providers_table_provider__WEBPACK_IMPORTED_MODULE_6__["TUI_TABLE_PROVIDER"],
            }]
    }], function () { return [{ type: _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiTableSortPipe"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiTableSortPipe"]]
            }] }, { type: _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"])]
            }] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _directives_row_directive__WEBPACK_IMPORTED_MODULE_3__["TuiRowDirective"])]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _tr_tr_component__WEBPACK_IMPORTED_MODULE_7__["TuiTrComponent"])]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/td/td.component.ts":
/*!**********************************************************!*\
  !*** ../addon-table/components/table/td/td.component.ts ***!
  \**********************************************************/
/*! exports provided: TuiTdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTdComponent", function() { return TuiTdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");



const _c0 = ["tuiTd", ""];
const _c1 = ["*"];
class TuiTdComponent {
}
TuiTdComponent.ɵfac = function TuiTdComponent_Factory(t) { return new (t || TuiTdComponent)(); };
TuiTdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTdComponent, selectors: [["th", "tuiTd", ""], ["td", "tuiTd", ""]], contentQueries: function TuiTdComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
    } }, hostVars: 2, hostBindings: function TuiTdComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_editable", ctx.control);
    } }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function TuiTdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  height: var(--tui-height-m);\n  font: var(--tui-font-text-s);\n  text-align: left;\n  padding: 0 0.75rem;\n  background: var(--tui-base-01);\n  border: 1px solid var(--tui-base-04);\n  border-top: none;\n  box-sizing: border-box;\n  transform: translate3d(0, 0, 0);\n}\n[_nghost-%COMP%]:first-child {\n  left: 0;\n}\n[_nghost-%COMP%]:not(:first-child) {\n  border-left: none;\n}\n._editable[_nghost-%COMP%]:focus-within {\n  z-index: 1;\n}\n._editable[_nghost-%COMP%] {\n  padding: 0;\n  vertical-align: top;\n}\nth[_nghost-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n}\nth[_nghost-%COMP%]:after {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 100%;\n  width: 0.3125rem;\n  pointer-events: none;\n  background: rgba(237, 237, 237, 0.7);\n  opacity: 0;\n}\nth[_nghost-%COMP%]:focus-within:not(:disabled) {\n  z-index: 11;\n}\ntable[data-mode='onDark'][_nghost-%COMP%]:after, table[data-mode='onDark']   [_nghost-%COMP%]:after {\n  background: rgba(60, 60, 60, 0.9);\n}\ntable._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%] {\n  z-index: 10;\n}\ntable._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after {\n  opacity: 1;\n}\ntable[data-size='l'][_nghost-%COMP%], table[data-size='l']   [_nghost-%COMP%] {\n  font: var(--tui-font-text-m);\n  height: var(--tui-height-l);\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\ntable[data-size='l']._editable[_nghost-%COMP%], table[data-size='l']   ._editable[_nghost-%COMP%] {\n  padding: 0;\n}\ntd[_nghost-%COMP%]:focus-within {\n  z-index: 1;\n}\ntd[_nghost-%COMP%]:not(:focus-within) {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGQvdGQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGQvdGQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsK0JBQUE7QURJSjtBQ0ZJO0VBQ0ksT0FBQTtBRElSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDQUk7RUFDSSxVQUFBO0FERVI7QUNDSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBRENSO0FDR0E7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtBRERKO0FDR0k7RUNnTUEsNEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEaE1JLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QURDUjtBQ0VJO0VBQ0ksV0FBQTtBREFSO0FDSUE7RUFDSSxpQ0FBQTtBREZKO0FDS0E7RUFDSSxXQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7QURKSjtBQ09BO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUROSjtBQ1FJO0VBQ0ksVUFBQTtBRE5SO0FDV0k7RUFDSSxVQUFBO0FEVFI7QUNZSTtFQUNJLFVBQUE7QURWUiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL3RkL3RkLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LW0pO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDQpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuOmhvc3Q6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAwO1xufVxuOmhvc3Q6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbjpob3N0Ll9lZGl0YWJsZTpmb2N1cy13aXRoaW4ge1xuICB6LWluZGV4OiAxO1xufVxuOmhvc3QuX2VkaXRhYmxlIHtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbjpob3N0KHRoKSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCh0aCk6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDAuMzEyNXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAyMzcsIDIzNywgMC43KTtcbiAgb3BhY2l0eTogMDtcbn1cbjpob3N0KHRoKTpmb2N1cy13aXRoaW46bm90KDpkaXNhYmxlZCkge1xuICB6LWluZGV4OiAxMTtcbn1cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1tb2RlPSdvbkRhcmsnXSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2MCwgNjAsIDAuOSk7XG59XG46aG9zdC1jb250ZXh0KHRhYmxlLl9zdHVjaykge1xuICB6LWluZGV4OiAxMDtcbn1cbjpob3N0LWNvbnRleHQodGFibGUuX3N0dWNrKTpsYXN0LW9mLXR5cGU6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLXNpemU9J2wnXSkge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBoZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbCk7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1zaXplPSdsJ10pLl9lZGl0YWJsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCh0ZCk6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0KHRkKTpub3QoOmZvY3VzLXdpdGhpbikge1xuICB6LWluZGV4OiAwO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1tKTtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wNCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vIENyZWF0ZSBuZXcgdmlld3BvcnQgZm9yIGZpeGVkIHBvc2l0aW9uaW5nXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICB9XG5cbiAgICAmLl9lZGl0YWJsZTpmb2N1cy13aXRoaW4ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICYuX2VkaXRhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG59XG5cbjpob3N0KHRoKSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIC50cmFuc2l0aW9uKG9wYWNpdHkpO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDAuMzEyNXJlbTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAyMzcsIDIzNywgMC43KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzLXdpdGhpbjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgIH1cbn1cblxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLW1vZGU9J29uRGFyayddKTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjAsIDYwLCAwLjkpO1xufVxuXG46aG9zdC1jb250ZXh0KHRhYmxlLl9zdHVjaykge1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG46aG9zdC1jb250ZXh0KHRhYmxlLl9zdHVjayk6bGFzdC1vZi10eXBlOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtc2l6ZT0nbCddKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgICBoZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbCk7XG4gICAgLy8gRG9uJ3QgYWZmZWN0IHZlcnRpY2FsIHBhZGRpbmcgZm9yIGVhc2llciBvdmVycmlkZVxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXG4gICAgJi5fZWRpdGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuOmhvc3QodGQpIHtcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgJjpub3QoOmZvY3VzLXdpdGhpbikge1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `th[tuiTd], td[tuiTd]`,
                template: `
        <ng-content></ng-content>
    `,
                styleUrls: [`./td.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: [`class._editable`]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/th-group/th-group.component.ts":
/*!**********************************************************************!*\
  !*** ../addon-table/components/table/th-group/th-group.component.ts ***!
  \**********************************************************************/
/*! exports provided: TuiThGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiThGroupComponent", function() { return TuiThGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/table.provider */ "../addon-table/components/table/providers/table.provider.ts");
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");











const _c0 = ["tuiThGroup", ""];
function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r3.toString(), " ");
} }
function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template, 2, 1, "th", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.th && !ctx_r5.heads.length);
} }
function TuiThGroupComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const headings_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (headings_r1[key_r3.toString()] == null ? null : headings_r1[key_r3.toString()].template) || _r4);
} }
function TuiThGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiThGroupComponent_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.table.columns);
} }
const _c1 = ["*"];
class TuiThGroupComponent {
    constructor(table) {
        this.table = table;
        this.heads = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["EMPTY_QUERY"];
        this.heads$ = this.heads.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.heads.reduce((record, item) => (Object.assign(Object.assign({}, record), { [item.tuiHead]: item })), {})));
    }
}
TuiThGroupComponent.ɵfac = function TuiThGroupComponent_Factory(t) { return new (t || TuiThGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"]))); };
TuiThGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiThGroupComponent, selectors: [["tr", "tuiThGroup", ""]], contentQueries: function TuiThGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _th_th_component__WEBPACK_IMPORTED_MODULE_6__["TuiThComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _directives_head_directive__WEBPACK_IMPORTED_MODULE_3__["TuiHeadDirective"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.th = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heads = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_providers_table_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PROVIDER"]])], attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTh", "", 4, "ngIf"], ["tuiTh", ""]], template: function TuiThGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiThGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.heads$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _th_th_component__WEBPACK_IMPORTED_MODULE_6__["TuiThComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiThGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tr[tuiThGroup]`,
                templateUrl: `./th-group.template.html`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [_providers_table_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PROVIDER"]],
            }]
    }], function () { return [{ type: _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"])]
            }] }]; }, { th: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _th_th_component__WEBPACK_IMPORTED_MODULE_6__["TuiThComponent"])]
        }], heads: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_head_directive__WEBPACK_IMPORTED_MODULE_3__["TuiHeadDirective"])]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/th/th.component.ts":
/*!**********************************************************!*\
  !*** ../addon-table/components/table/th/th.component.ts ***!
  \**********************************************************/
/*! exports provided: TuiThComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiThComponent", function() { return TuiThComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-table/utils */ "../addon-table/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/head.directive */ "../addon-table/components/table/directives/head.directive.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _directives_resized_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/resized.directive */ "../addon-table/components/table/directives/resized.directive.ts");













const _c0 = ["tuiTh", ""];
function TuiThComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiThComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.table.updateSorter(ctx_r4.sorter); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "tui-svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-sort_sorted", ctx_r0.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, ctx_r0.table.change$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-sort-icon_rotated", ctx_r0.isCurrent && ctx_r0.table.direction === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.icon);
} }
function TuiThComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
function TuiThComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tuiResized", function TuiThComponent_div_3_Template_div_tuiResized_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onResized($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = ["*"];
class TuiThComponent {
    constructor(head, table) {
        this.head = head;
        this.table = table;
        this.sorter = this.head
            ? (a, b) => Object(_taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_2__["defaultSort"])(a[this.key], b[this.key])
            : null;
        this.resizable = false;
        this.sticky = false;
        this.width = null;
    }
    get key() {
        if (!this.head) {
            throw new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiTableSortKeyException"]();
        }
        return this.head.tuiHead;
    }
    get isCurrent() {
        return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
    }
    get icon() {
        return this.isCurrent ? `tuiIconSortDown` : `tuiIconSortOff`;
    }
    onResized(width) {
        this.width = width;
    }
}
TuiThComponent.ɵfac = function TuiThComponent_Factory(t) { return new (t || TuiThComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_directives_head_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHeadDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"]), 8)); };
TuiThComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiThComponent, selectors: [["th", "tuiTh", ""]], hostVars: 4, hostBindings: function TuiThComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_sticky", ctx.sticky);
    } }, inputs: { sorter: "sorter", resizable: "resizable", sticky: "sticky" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_ELEMENT_REF"],
                useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            },
        ])], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["type", "button", "class", "t-sort", 3, "t-sort_sorted", "click", 4, "ngIf", "ngIfElse"], ["content", ""], ["class", "t-bar", 3, "tuiResized", 4, "ngIf"], ["type", "button", 1, "t-sort", 3, "click"], [3, "ngTemplateOutlet"], [1, "t-sort-icon", 3, "src"], [1, "t-bar", 3, "tuiResized"]], template: function TuiThComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiThComponent_button_0_Template, 5, 9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiThComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiThComponent_div_3_Template, 1, 0, "div", 2);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sorter && ctx.table)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resizable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__["TuiSvgComponent"], _directives_resized_directive__WEBPACK_IMPORTED_MODULE_9__["TuiResizedDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  transition-property: box-shadow;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: relative;\n  top: 0;\n  z-index: 20;\n  height: var(--tui-height-m);\n  font: var(--tui-font-text-s);\n  text-align: left;\n  font-weight: bold;\n  color: var(--tui-text-02);\n  background: var(--tui-base-01);\n  cursor: default;\n  padding: 0 0.75rem;\n  box-sizing: border-box;\n  box-shadow: 0 0.3125rem rgba(237, 237, 237, 0);\n  border: 1px solid var(--tui-base-04);\n}\n[_nghost-%COMP%]:not(:first-child) {\n  border-left: none;\n}\n._sticky[_nghost-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 30;\n}\n._sticky[_nghost-%COMP%]:first-child {\n  left: 0;\n}\n._sticky[_nghost-%COMP%]:after {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 100%;\n  bottom: 0;\n  width: 0.3125rem;\n  pointer-events: none;\n  background: rgba(237, 237, 237, 0.7);\n  opacity: 0;\n}\ntr[_nghost-%COMP%]:not(:first-child), tr:not(:first-child)   [_nghost-%COMP%] {\n  border-top: none;\n}\ntable[data-size='l'][_nghost-%COMP%], table[data-size='l']   [_nghost-%COMP%] {\n  height: var(--tui-height-l);\n  font: var(--tui-font-text-m);\n  font-weight: bold;\n  padding: 0 1rem;\n}\nthead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\ntable._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after {\n  opacity: 1;\n}\nthead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%] {\n  box-shadow: 0 0.3125rem rgba(237, 237, 237, 0.7);\n}\ntable[data-mode='onDark'][_nghost-%COMP%]:after, table[data-mode='onDark']   [_nghost-%COMP%]:after {\n  background: rgba(60, 60, 60, 0.9);\n}\ntable[data-mode='onDark'][_nghost-%COMP%]   thead[tuiThead]._stuck[_ngcontent-%COMP%], table[data-mode='onDark']   thead[tuiThead]._stuck   [_nghost-%COMP%] {\n  box-shadow: 0 0.3125rem rgba(60, 60, 60, 0.9);\n}\ntable[data-mode='onDark'][_nghost-%COMP%]   thead[tuiThead]._stuck[_ngcontent-%COMP%]:first-child, table[data-mode='onDark']   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child {\n  box-shadow: 0.0625rem 0.3125rem rgba(60, 60, 60, 0.9);\n}\ntable[data-size='l'][_nghost-%COMP%]   thead[tuiThead][_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), table[data-size='l']   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%] {\n  top: var(--tui-height-l);\n}\ntable[data-size='m'][_nghost-%COMP%]   thead[tuiThead][_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), table[data-size='m']   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%] {\n  top: var(--tui-height-m);\n}\ntable[data-size='s'][_nghost-%COMP%]   thead[tuiThead][_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), table[data-size='s']   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%] {\n  top: var(--tui-height-s);\n}\n.t-sort[_ngcontent-%COMP%] {\n  transition-property: color;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  display: inline-flex;\n  flex-direction: inherit;\n  align-items: center;\n  outline: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n.t-sort_sorted[_ngcontent-%COMP%] {\n  color: var(--tui-text-01);\n}\n.t-sort_sorted[_ngcontent-%COMP%]   .t-sort-icon_rotated[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n}\n.t-sort[_ngcontent-%COMP%]:focus-visible {\n  background: var(--tui-selection);\n}\n.t-sort[_ngcontent-%COMP%]:hover {\n  color: var(--tui-text-01);\n}\n.t-bar[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -1px;\n  width: 3px;\n  justify-self: flex-end;\n  border-left: 2px solid transparent;\n  background: var(--tui-support-12);\n  background-clip: content-box;\n  cursor: ew-resize;\n  opacity: 0;\n}\n.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGgvdGguc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvdGgvdGguc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VDbU9JLCtCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRG5PQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG9DQUFBO0FET0o7QUNMSTtFQUNJLGlCQUFBO0FET1I7QUNKSTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0FETVI7QUNKUTtFQUNJLE9BQUE7QURNWjtBQ0hRO0VDc01KLDRCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRHRNUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FET1o7QUNGQTtFQUNJLGdCQUFBO0FESUo7QUNEQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURHSjtBQ0FBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxVQUFBO0FEQ0o7QUNFQTtFQUNJLGdEQUFBO0FEQUo7QUNHQTtFQUNJLGlDQUFBO0FEREo7QUNJQTtFQUNJLDZDQUFBO0FERko7QUNLQTtFQUNJLHFEQUFBO0FESEo7QUNNQTtFQUNJLHdCQUFBO0FESko7QUNPQTtFQUNJLHdCQUFBO0FETEo7QUNRQTtFQUNJLHdCQUFBO0FETko7QUNTQTtFQ3dJSSwwQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUF4TEEsd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUQ0Q0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREFKO0FDRUk7RUFDSSx5QkFBQTtBREFSO0FDRVE7RUFDSSxxQkFBQTtBREFaO0FDSUk7RUFDSSxnQ0FBQTtBREZSO0FDS0k7RUFDSSx5QkFBQTtBREhSO0FDT0E7RUM2R0ksNEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEN0dBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FESEo7QUNLSTs7RUFFSSxVQUFBO0FESFIiLCJmaWxlIjoicHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS90aC90aC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjA7XG4gIGhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1tKTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMC4zMTI1cmVtIHJnYmEoMjM3LCAyMzcsIDIzNywgMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTA0KTtcbn1cbjpob3N0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG46aG9zdC5fc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMzA7XG59XG46aG9zdC5fc3RpY2t5OmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogMDtcbn1cbjpob3N0Ll9zdGlja3k6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDAuMzEyNXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAyMzcsIDIzNywgMC43KTtcbiAgb3BhY2l0eTogMDtcbn1cbjpob3N0LWNvbnRleHQodHI6bm90KDpmaXJzdC1jaGlsZCkpIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1zaXplPSdsJ10pIHtcbiAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LWwpO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuOmhvc3QtY29udGV4dCh0aGVhZFt0dWlUaGVhZF0pIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cbjpob3N0LWNvbnRleHQodGFibGUuX3N0dWNrKS5fc3RpY2t5OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0LWNvbnRleHQodGhlYWRbdHVpVGhlYWRdLl9zdHVjaykge1xuICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSByZ2JhKDIzNywgMjM3LCAyMzcsIDAuNyk7XG59XG46aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtbW9kZT0nb25EYXJrJ10pOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjAsIDYwLCAwLjkpO1xufVxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLW1vZGU9J29uRGFyayddIHRoZWFkW3R1aVRoZWFkXS5fc3R1Y2spIHtcbiAgYm94LXNoYWRvdzogMCAwLjMxMjVyZW0gcmdiYSg2MCwgNjAsIDYwLCAwLjkpO1xufVxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLW1vZGU9J29uRGFyayddIHRoZWFkW3R1aVRoZWFkXS5fc3R1Y2spOmZpcnN0LWNoaWxkIHtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMzEyNXJlbSByZ2JhKDYwLCA2MCwgNjAsIDAuOSk7XG59XG46aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtc2l6ZT0nbCddIHRoZWFkW3R1aVRoZWFkXSB0cjpudGgtY2hpbGQoMikpIHtcbiAgdG9wOiB2YXIoLS10dWktaGVpZ2h0LWwpO1xufVxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLXNpemU9J20nXSB0aGVhZFt0dWlUaGVhZF0gdHI6bnRoLWNoaWxkKDIpKSB7XG4gIHRvcDogdmFyKC0tdHVpLWhlaWdodC1tKTtcbn1cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1zaXplPSdzJ10gdGhlYWRbdHVpVGhlYWRdIHRyOm50aC1jaGlsZCgyKSkge1xuICB0b3A6IHZhcigtLXR1aS1oZWlnaHQtcyk7XG59XG4udC1zb3J0IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnQtc29ydF9zb3J0ZWQge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuLnQtc29ydF9zb3J0ZWQgLnQtc29ydC1pY29uX3JvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG4udC1zb3J0OmZvY3VzLXZpc2libGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc2VsZWN0aW9uKTtcbn1cbi50LXNvcnQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuLnQtYmFyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0xcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdXBwb3J0LTEyKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIG9wYWNpdHk6IDA7XG59XG4udC1iYXI6aG92ZXIsXG4udC1iYXI6YWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIC50cmFuc2l0aW9uKGJveC1zaGFkb3cpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjA7XG4gICAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LW0pO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCAwLjMxMjVyZW0gcmdiYSgyMzcsIDIzNywgMjM3LCAwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wNCk7XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5fc3RpY2t5IHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgei1pbmRleDogMzA7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAudHJhbnNpdGlvbihvcGFjaXR5KTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwLjMxMjVyZW07XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAyMzcsIDIzNywgMC43KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjpob3N0LWNvbnRleHQodHI6bm90KDpmaXJzdC1jaGlsZCkpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG46aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtc2l6ZT0nbCddKSB7XG4gICAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LWwpO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMCAxcmVtO1xufVxuXG46aG9zdC1jb250ZXh0KHRoZWFkW3R1aVRoZWFkXSkge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbjpob3N0LWNvbnRleHQodGFibGUuX3N0dWNrKS5fc3RpY2t5OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdC1jb250ZXh0KHRoZWFkW3R1aVRoZWFkXS5fc3R1Y2spIHtcbiAgICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSByZ2JhKDIzNywgMjM3LCAyMzcsIDAuNyk7XG59XG5cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1tb2RlPSdvbkRhcmsnXSk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDYwLCA2MCwgMC45KTtcbn1cblxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLW1vZGU9J29uRGFyayddIHRoZWFkW3R1aVRoZWFkXS5fc3R1Y2spIHtcbiAgICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSByZ2JhKDYwLCA2MCwgNjAsIDAuOSk7XG59XG5cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1tb2RlPSdvbkRhcmsnXSB0aGVhZFt0dWlUaGVhZF0uX3N0dWNrKTpmaXJzdC1jaGlsZCB7XG4gICAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMzEyNXJlbSByZ2JhKDYwLCA2MCwgNjAsIDAuOSk7XG59XG5cbjpob3N0LWNvbnRleHQodGFibGVbZGF0YS1zaXplPSdsJ10gdGhlYWRbdHVpVGhlYWRdIHRyOm50aC1jaGlsZCgyKSkge1xuICAgIHRvcDogdmFyKC0tdHVpLWhlaWdodC1sKTtcbn1cblxuOmhvc3QtY29udGV4dCh0YWJsZVtkYXRhLXNpemU9J20nXSB0aGVhZFt0dWlUaGVhZF0gdHI6bnRoLWNoaWxkKDIpKSB7XG4gICAgdG9wOiB2YXIoLS10dWktaGVpZ2h0LW0pO1xufVxuXG46aG9zdC1jb250ZXh0KHRhYmxlW2RhdGEtc2l6ZT0ncyddIHRoZWFkW3R1aVRoZWFkXSB0cjpudGgtY2hpbGQoMikpIHtcbiAgICB0b3A6IHZhcigtLXR1aS1oZWlnaHQtcyk7XG59XG5cbi50LXNvcnQge1xuICAgIC50cmFuc2l0aW9uKGNvbG9yKTtcbiAgICAuY2xlYXJidG4oKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJl9zb3J0ZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xuXG4gICAgICAgICYgLnQtc29ydC1pY29uX3JvdGF0ZWQge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG4gICAgfVxufVxuXG4udC1iYXIge1xuICAgIC50cmFuc2l0aW9uKG9wYWNpdHkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIHdpZHRoOiAzcHg7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdXBwb3J0LTEyKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiThComponent.prototype, "sorter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiThComponent.prototype, "resizable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiThComponent.prototype, "sticky", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiThComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `th[tuiTh]`,
                templateUrl: `./th.template.html`,
                styleUrls: [`./th.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_ELEMENT_REF"],
                        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
                    },
                ],
            }]
    }], function () { return [{ type: _directives_head_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHeadDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_directives_head_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHeadDirective"]]
            }] }, { type: _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"])]
            }] }]; }, { sorter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], resizable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sticky: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._sticky`]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.width.px`]
        }] }); })();


/***/ }),

/***/ "../addon-table/components/table/tr/tr.component.ts":
/*!**********************************************************!*\
  !*** ../addon-table/components/table/tr/tr.component.ts ***!
  \**********************************************************/
/*! exports provided: TuiTrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTrComponent", function() { return TuiTrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _directives_cell_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/table.provider */ "../addon-table/components/table/providers/table.provider.ts");
/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../td/td.component */ "../addon-table/components/table/td/td.component.ts");












const _c0 = ["tuiTr", ""];
function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.ngIf;
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7[key_r3.toString()], " ");
} }
function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.item$));
} }
function TuiTrComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (items_r1[key_r3.toString()] == null ? null : items_r1[key_r3.toString()].template) || _r4);
} }
function TuiTrComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTrComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.table.columns);
} }
class TuiTrComponent {
    constructor(table, body) {
        this.table = table;
        this.body = body;
        this.cells = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["EMPTY_QUERY"];
        this.cells$ = this.cells.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.cells.reduce((record, item) => (Object.assign(Object.assign({}, record), { [item.tuiCell]: item })), {})));
        this.item$ = this.body.rows.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.body.sorted[this.body.rows.toArray().findIndex(row => row === this)]));
    }
}
TuiTrComponent.ɵfac = function TuiTrComponent_Factory(t) { return new (t || TuiTrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__["TuiTbodyComponent"]))); };
TuiTrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTrComponent, selectors: [["tr", "tuiTr", ""]], contentQueries: function TuiTrComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _directives_cell_directive__WEBPACK_IMPORTED_MODULE_3__["TuiCellDirective"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cells = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_providers_table_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PROVIDER"]])], attrs: _c0, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTd", "", 4, "ngIf"], ["tuiTd", ""]], template: function TuiTrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiTrComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.cells$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _td_td_component__WEBPACK_IMPORTED_MODULE_8__["TuiTdComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tr[tuiTr]`,
                templateUrl: `./tr.template.html`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [_providers_table_provider__WEBPACK_IMPORTED_MODULE_5__["TUI_TABLE_PROVIDER"]],
            }]
    }], function () { return [{ type: _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTableDirective"])]
            }] }, { type: _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__["TuiTbodyComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_6__["TuiTbodyComponent"])]
            }] }]; }, { cells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _directives_cell_directive__WEBPACK_IMPORTED_MODULE_3__["TuiCellDirective"])]
        }] }); })();


/***/ }),

/***/ "../addon-table/directives/index.ts":
/*!******************************************!*\
  !*** ../addon-table/directives/index.ts ***!
  \******************************************/
/*! exports provided: AbstractTuiTableFilter, TuiGenericFilterDirective, TuiTableFilterDirective, TuiTableFiltersDirective, TuiTableFiltersModule, TuiTableFiltersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-table/directives/table-filters */ "../addon-table/directives/table-filters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTuiTableFilter", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["AbstractTuiTableFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiGenericFilterDirective", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["TuiGenericFilterDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFilterDirective", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["TuiTableFilterDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersDirective", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["TuiTableFiltersDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersModule", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["TuiTableFiltersModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersPipe", function() { return _taiga_ui_addon_table_directives_table_filters__WEBPACK_IMPORTED_MODULE_0__["TuiTableFiltersPipe"]; });




/***/ }),

/***/ "../addon-table/directives/table-filters/abstract-table-filter.ts":
/*!************************************************************************!*\
  !*** ../addon-table/directives/table-filters/abstract-table-filter.ts ***!
  \************************************************************************/
/*! exports provided: AbstractTuiTableFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTuiTableFilter", function() { return AbstractTuiTableFilter; });
class AbstractTuiTableFilter {
}


/***/ }),

/***/ "../addon-table/directives/table-filters/generic-filter.directive.ts":
/*!***************************************************************************!*\
  !*** ../addon-table/directives/table-filters/generic-filter.directive.ts ***!
  \***************************************************************************/
/*! exports provided: TuiGenericFilterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiGenericFilterDirective", function() { return TuiGenericFilterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _abstract_table_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-table-filter */ "../addon-table/directives/table-filters/abstract-table-filter.ts");




class TuiGenericFilterDirective extends _abstract_table_filter__WEBPACK_IMPORTED_MODULE_2__["AbstractTuiTableFilter"] {
    constructor() {
        super(...arguments);
        this.tuiGenericFilter = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_TRUE_HANDLER"];
    }
    filter(item, value) {
        return this.tuiGenericFilter(item, value);
    }
}
TuiGenericFilterDirective.ɵfac = function TuiGenericFilterDirective_Factory(t) { return ɵTuiGenericFilterDirective_BaseFactory(t || TuiGenericFilterDirective); };
TuiGenericFilterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiGenericFilterDirective, selectors: [["", "tuiGenericFilter", ""]], inputs: { tuiGenericFilter: "tuiGenericFilter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_table_filter__WEBPACK_IMPORTED_MODULE_2__["AbstractTuiTableFilter"],
                useExisting: TuiGenericFilterDirective,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵTuiGenericFilterDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiGenericFilterDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiGenericFilterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `[tuiGenericFilter]`,
                providers: [
                    {
                        provide: _abstract_table_filter__WEBPACK_IMPORTED_MODULE_2__["AbstractTuiTableFilter"],
                        useExisting: TuiGenericFilterDirective,
                    },
                ],
            }]
    }], null, { tuiGenericFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/directives/table-filters/index.ts":
/*!********************************************************!*\
  !*** ../addon-table/directives/table-filters/index.ts ***!
  \********************************************************/
/*! exports provided: AbstractTuiTableFilter, TuiGenericFilterDirective, TuiTableFilterDirective, TuiTableFiltersDirective, TuiTableFiltersModule, TuiTableFiltersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_table_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-table-filter */ "../addon-table/directives/table-filters/abstract-table-filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTuiTableFilter", function() { return _abstract_table_filter__WEBPACK_IMPORTED_MODULE_0__["AbstractTuiTableFilter"]; });

/* harmony import */ var _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-filter.directive */ "../addon-table/directives/table-filters/generic-filter.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiGenericFilterDirective", function() { return _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"]; });

/* harmony import */ var _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-filter.directive */ "../addon-table/directives/table-filters/table-filter.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFilterDirective", function() { return _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__["TuiTableFilterDirective"]; });

/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-filters.directive */ "../addon-table/directives/table-filters/table-filters.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersDirective", function() { return _table_filters_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableFiltersDirective"]; });

/* harmony import */ var _table_filters_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-filters.module */ "../addon-table/directives/table-filters/table-filters.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersModule", function() { return _table_filters_module__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersModule"]; });

/* harmony import */ var _table_filters_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-filters.pipe */ "../addon-table/directives/table-filters/table-filters.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersPipe", function() { return _table_filters_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiTableFiltersPipe"]; });









/***/ }),

/***/ "../addon-table/directives/table-filters/table-filter.directive.ts":
/*!*************************************************************************!*\
  !*** ../addon-table/directives/table-filters/table-filter.directive.ts ***!
  \*************************************************************************/
/*! exports provided: TuiTableFilterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableFilterDirective", function() { return TuiTableFilterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-table/components */ "../addon-table/components/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_table_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abstract-table-filter */ "../addon-table/directives/table-filters/abstract-table-filter.ts");
/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-filters.directive */ "../addon-table/directives/table-filters/table-filters.directive.ts");












class TuiTableFilterDirective {
    constructor(head, delegate, control, filters) {
        this.head = head;
        this.delegate = delegate;
        this.control = control;
        this.filters = filters;
        this.refresh$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => {
            var _a;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.control.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"], ((_a = this.control.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())) || rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]);
        });
        this.filters.register(this);
    }
    ngOnDestroy() {
        this.filters.unregister(this);
    }
    filter(item) {
        const { disabled, value } = this.control;
        return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
    }
    get key() {
        var _a;
        return this.tuiTableFilter || ((_a = this.head) === null || _a === void 0 ? void 0 : _a.tuiHead);
    }
}
TuiTableFilterDirective.ɵfac = function TuiTableFilterDirective_Factory(t) { return new (t || TuiTableFilterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_2__["TuiHeadDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abstract_table_filter__WEBPACK_IMPORTED_MODULE_5__["AbstractTuiTableFilter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_table_filters_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableFiltersDirective"])); };
TuiTableFilterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiTableFilterDirective, selectors: [["", "tuiTableFilter", ""]], inputs: { tuiTableFilter: "tuiTableFilter" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableFilterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `[tuiTableFilter]`,
            }]
    }], function () { return [{ type: _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_2__["TuiHeadDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_2__["TuiHeadDirective"]]
            }] }, { type: _abstract_table_filter__WEBPACK_IMPORTED_MODULE_5__["AbstractTuiTableFilter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_abstract_table_filter__WEBPACK_IMPORTED_MODULE_5__["AbstractTuiTableFilter"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]
            }] }, { type: _table_filters_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableFiltersDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_table_filters_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableFiltersDirective"]]
            }] }]; }, { tuiTableFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-table/directives/table-filters/table-filters.directive.ts":
/*!**************************************************************************!*\
  !*** ../addon-table/directives/table-filters/table-filters.directive.ts ***!
  \**************************************************************************/
/*! exports provided: TuiTableFiltersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersDirective", function() { return TuiTableFiltersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




class TuiTableFiltersDirective {
    constructor() {
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filters = [];
    }
    register(filter) {
        this.filters = this.filters.concat(filter);
        this.update();
    }
    unregister(filter) {
        this.filters = this.filters.filter(item => item !== filter);
        this.update();
    }
    filter(items) {
        return this.refresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["identity"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => items.filter(item => this.check(item))));
    }
    check(item) {
        return this.filters.every(filter => filter.filter(item));
    }
    update() {
        this.refresh$.next(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...this.filters.map(({ refresh$ }) => refresh$)));
    }
}
TuiTableFiltersDirective.ɵfac = function TuiTableFiltersDirective_Factory(t) { return new (t || TuiTableFiltersDirective)(); };
TuiTableFiltersDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TuiTableFiltersDirective, selectors: [["", "tuiTableFilters", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableFiltersDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `[tuiTableFilters]`,
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/directives/table-filters/table-filters.module.ts":
/*!***********************************************************************!*\
  !*** ../addon-table/directives/table-filters/table-filters.module.ts ***!
  \***********************************************************************/
/*! exports provided: TuiTableFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersModule", function() { return TuiTableFiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-filter.directive */ "../addon-table/directives/table-filters/generic-filter.directive.ts");
/* harmony import */ var _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-filter.directive */ "../addon-table/directives/table-filters/table-filter.directive.ts");
/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-filters.directive */ "../addon-table/directives/table-filters/table-filters.directive.ts");
/* harmony import */ var _table_filters_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-filters.pipe */ "../addon-table/directives/table-filters/table-filters.pipe.ts");






class TuiTableFiltersModule {
}
TuiTableFiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiTableFiltersModule });
TuiTableFiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiTableFiltersModule_Factory(t) { return new (t || TuiTableFiltersModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiTableFiltersModule, { declarations: [_table_filters_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableFiltersDirective"],
        _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__["TuiTableFilterDirective"],
        _table_filters_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersPipe"],
        _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"]], exports: [_table_filters_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableFiltersDirective"],
        _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__["TuiTableFilterDirective"],
        _table_filters_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersPipe"],
        _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableFiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _table_filters_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableFiltersDirective"],
                    _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__["TuiTableFilterDirective"],
                    _table_filters_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersPipe"],
                    _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"],
                ],
                exports: [
                    _table_filters_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTableFiltersDirective"],
                    _table_filter_directive__WEBPACK_IMPORTED_MODULE_2__["TuiTableFilterDirective"],
                    _table_filters_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiTableFiltersPipe"],
                    _generic_filter_directive__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-table/directives/table-filters/table-filters.pipe.ts":
/*!*********************************************************************!*\
  !*** ../addon-table/directives/table-filters/table-filters.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: TuiTableFiltersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersPipe", function() { return TuiTableFiltersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-filters.directive */ "../addon-table/directives/table-filters/table-filters.directive.ts");




class TuiTableFiltersPipe {
    constructor(filters) {
        this.filters = filters;
    }
    transform(items) {
        return this.filters.filter(items);
    }
}
TuiTableFiltersPipe.ɵfac = function TuiTableFiltersPipe_Factory(t) { return new (t || TuiTableFiltersPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_table_filters_directive__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersDirective"])); };
TuiTableFiltersPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiTableFilters", type: TuiTableFiltersPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableFiltersPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: `tuiTableFilters`,
            }]
    }], function () { return [{ type: _table_filters_directive__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_table_filters_directive__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersDirective"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../addon-table/index.ts":
/*!*******************************!*\
  !*** ../addon-table/index.ts ***!
  \*******************************/
/*! exports provided: TuiReorderComponent, TuiReorderModule, TuiResizableColumnComponent, TuiResizableColumnDirective, TuiResizableColumnModule, TuiCellDirective, TuiHeadDirective, TuiResizedDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTableDirective, TuiTheadDirective, TuiTableSortPipe, stuckFactory, TUI_STUCK, TUI_STUCK_PROVIDER, TABLE_FACTORY, TUI_TABLE_PROVIDER, TABLE_THRESHOLD, TABLE_LABEL, inputCountOptionsFactory, TUI_TABLE_PROVIDERS, TuiTableModule, TuiTbodyComponent, TuiTdComponent, TuiThComponent, TuiThGroupComponent, TuiTrComponent, TuiTablePaginationComponent, TuiTablePaginationModule, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, TUI_TABLE_PAGINATION_OPTIONS, tuiTablePaginationOptionsProvider, AbstractTuiTableFilter, TuiGenericFilterDirective, TuiTableFilterDirective, TuiTableFiltersDirective, TuiTableFiltersModule, TuiTableFiltersPipe, TUI_TABLE_SHOW_HIDE_MESSAGE, TUI_TABLE_PAGINATION_TEXTS, defaultSort, tuiDefaultSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-table/components */ "../addon-table/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiReorderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiReorderModule", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiReorderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiResizableColumnComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiResizableColumnDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizableColumnModule", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiResizableColumnModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCellDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiCellDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiHeadDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiHeadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiResizedDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiResizedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRowDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiRowDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortByDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiSortByDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSortableDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiSortableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTheadDirective", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableSortPipe", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTableSortPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stuckFactory", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["stuckFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_STUCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_STUCK_PROVIDER", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_STUCK_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_FACTORY", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TABLE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDER", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_THRESHOLD", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TABLE_THRESHOLD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TABLE_LABEL", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TABLE_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputCountOptionsFactory", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["inputCountOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PROVIDERS", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_PROVIDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableModule", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTbodyComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTbodyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTdComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTdComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiThComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiThGroupComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiThGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTrComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTrComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationComponent", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTablePaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationModule", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TuiTablePaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_DEFAULT_OPTIONS", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_PAGINATION_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_OPTIONS", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["TUI_TABLE_PAGINATION_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiTablePaginationOptionsProvider", function() { return _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__["tuiTablePaginationOptionsProvider"]; });

/* harmony import */ var _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-table/directives */ "../addon-table/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTuiTableFilter", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["AbstractTuiTableFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiGenericFilterDirective", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["TuiGenericFilterDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFilterDirective", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["TuiTableFilterDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersDirective", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersModule", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiTableFiltersPipe", function() { return _taiga_ui_addon_table_directives__WEBPACK_IMPORTED_MODULE_1__["TuiTableFiltersPipe"]; });

/* harmony import */ var _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-table/tokens */ "../addon-table/tokens/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_SHOW_HIDE_MESSAGE", function() { return _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_SHOW_HIDE_MESSAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_TABLE_PAGINATION_TEXTS", function() { return _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_TABLE_PAGINATION_TEXTS"]; });

/* harmony import */ var _taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-table/utils */ "../addon-table/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSort", function() { return _taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_3__["defaultSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultSort", function() { return _taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultSort"]; });







/***/ }),

/***/ "../addon-table/utils/default-sort.ts":
/*!********************************************!*\
  !*** ../addon-table/utils/default-sort.ts ***!
  \********************************************/
/*! exports provided: defaultSort, tuiDefaultSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSort", function() { return defaultSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultSort", function() { return tuiDefaultSort; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");

/**
 * @deprecated: use {@link tuiDefaultSort} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function defaultSort(x, y) {
    const a = x instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiDay"] ? Number(x.toUtcNativeDate()) : x;
    const b = y instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiDay"] ? Number(y.toUtcNativeDate()) : y;
    if (a === b) {
        return 0;
    }
    if (typeof a === `string` && typeof b === `string`) {
        return a.localeCompare(b);
    }
    return a > b ? 1 : -1;
}
const tuiDefaultSort = defaultSort;


/***/ }),

/***/ "../addon-table/utils/index.ts":
/*!*************************************!*\
  !*** ../addon-table/utils/index.ts ***!
  \*************************************/
/*! exports provided: defaultSort, tuiDefaultSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-sort */ "../addon-table/utils/default-sort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSort", function() { return _default_sort__WEBPACK_IMPORTED_MODULE_0__["defaultSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultSort", function() { return _default_sort__WEBPACK_IMPORTED_MODULE_0__["tuiDefaultSort"]; });




/***/ })

}]);
//# sourceMappingURL=default~components-input-input-module~directives-dropdown-context-dropdown-context-module~markup-bre~4295d3df.js.map