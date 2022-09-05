(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-table-pagination-table-pagination-module"],{

/***/ "./src/modules/tables/table-pagination/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/tables/table-pagination/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiTablePaginationExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationExample1", function() { return TuiTablePaginationExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table-pagination/table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");





class TuiTablePaginationExample1 {
    constructor() {
        this.page = 3;
        this.size = 10;
    }
}
TuiTablePaginationExample1.ɵfac = function TuiTablePaginationExample1_Factory(t) { return new (t || TuiTablePaginationExample1)(); };
TuiTablePaginationExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTablePaginationExample1, selectors: [["tui-table-pagination-example-1"]], decls: 5, vars: 5, consts: [[3, "total", "page", "size", "pageChange", "sizeChange"]], template: function TuiTablePaginationExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-table-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TuiTablePaginationExample1_Template_tui_table_pagination_pageChange_0_listener($event) { return ctx.page = $event; })("sizeChange", function TuiTablePaginationExample1_Template_tui_table_pagination_sizeChange_0_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", 237)("page", ctx.page)("size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.page, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Items per page: ", ctx.size, "");
    } }, directives: [_addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_3__["TuiTablePaginationComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTablePaginationExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-pagination-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table-pagination/examples/2/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/tables/table-pagination/examples/2/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiTablePaginationExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTablePaginationExample2", function() { return TuiTablePaginationExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table-pagination/table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");






const customOptionContent = ({ $implicit, total, }) => {
    switch ($implicit) {
        case 10:
            return `Ten`;
        case total:
            return `Show all rows`;
        default:
            return $implicit;
    }
};
class TuiTablePaginationExample2 {
    constructor() {
        this.total = 350;
        this.sizeOptions = [10, 50, 100, this.total];
    }
}
TuiTablePaginationExample2.ɵfac = function TuiTablePaginationExample2_Factory(t) { return new (t || TuiTablePaginationExample2)(); };
TuiTablePaginationExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTablePaginationExample2, selectors: [["tui-table-pagination-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_3__["tuiTablePaginationOptionsProvider"])({ sizeOptionContent: customOptionContent }),
        ])], decls: 1, vars: 2, consts: [[3, "total", "items"]], template: function TuiTablePaginationExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-table-pagination", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total)("items", ctx.sizeOptions);
    } }, directives: [_addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTablePaginationExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-pagination-example-2`,
                templateUrl: `./index.html`,
                providers: [
                    Object(_taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_3__["tuiTablePaginationOptionsProvider"])({ sizeOptionContent: customOptionContent }),
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table-pagination/table-pagination.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/tables/table-pagination/table-pagination.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleTuiTablePaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTablePaginationComponent", function() { return ExampleTuiTablePaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/tables/table-pagination/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/tables/table-pagination/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-table/components/table-pagination/table-pagination.component */ "../addon-table/components/table-pagination/table-pagination.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1478194324430836348$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__1 = goog.getMsg("Component to show pagination in table footer");
    I18N_0 = MSG_EXTERNAL_1478194324430836348$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_142654590491855672$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__3 = goog.getMsg("Usage");
    I18N_2 = MSG_EXTERNAL_142654590491855672$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6053806451915629650$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__6 = goog.getMsg("Custom size-option content");
    I18N_5 = MSG_EXTERNAL_6053806451915629650$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟5ed3a7caf5293f1c78ac7cbc21dbd599df19b3fa␟6053806451915629650:Custom size-option content`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiTablePaginationComponent_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " You can customize the component via DI-token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TUI_TABLE_PAGINATION_OPTIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Use function ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "tuiTablePaginationOptionsProvider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to provide new value of this token. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExampleTuiTablePaginationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-table-pagination-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiTablePaginationComponent_ng_template_1_ng_template_7_Template, 9, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-table-pagination-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", _r3)("content", ctx_r0.example2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6816839641464864911$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___9 = goog.getMsg(" Total amount of items/lines in the table. ");
    I18N_8 = MSG_EXTERNAL_6816839641464864911$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟eaf6d24a0f009870b331ae9d771e001e06155f34␟6816839641464864911: Total amount of items/lines in the table. `;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_472889151489355337$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___11 = goog.getMsg(" Items/Lines per page. {$startParagraph} Uses the first element inside {$startTagCode}items{$closeTagCode} by default. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_10 = MSG_EXTERNAL_472889151489355337$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟35463f4b77f9ff5411e98522c622e91581136bc8␟472889151489355337: Items/Lines per page. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Uses the first element inside ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:items${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6481797631087629204$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___13 = goog.getMsg(" Current page. {$startParagraph}Indexing starts at zero.{$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_12 = MSG_EXTERNAL_6481797631087629204$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟eae5c93afe4b3193ae93b7c73f9f78a3b17f7219␟6481797631087629204: Current page. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:Indexing starts at zero.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8829701352843744315$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___15 = goog.getMsg(" Options to select amount of lines per page. ");
    I18N_14 = MSG_EXTERNAL_8829701352843744315$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟5945646525a4f23c75ba8716e4f1087acb1b89a7␟8829701352843744315: Options to select amount of lines per page. `;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8720838308796482253$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___17 = goog.getMsg(" Emits the selected page when user navigates by spin\u00A0buttons or selects new size of items per page. ");
    I18N_16 = MSG_EXTERNAL_8720838308796482253$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟31776859d3ef1d6442876c807f289e80836a2261␟8720838308796482253: Emits the selected page when user navigates by spin buttons or selects new size of items per page. `;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7639320364970904664$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___19 = goog.getMsg(" Emits the new {$startTagCode}size{$closeTagCode} -property (user selects new amount of lines per page). ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_18 = MSG_EXTERNAL_7639320364970904664$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟a2c03c2522a598de3b28473d219c75c3d84150e2␟7639320364970904664: Emits the new ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:size${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: -property (user selects new amount of lines per page). `;
}
function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiTablePaginationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-table-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.page = $event; })("sizeChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_sizeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.size = $event; })("pageChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r9.emitEvent($event); })("sizeChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_sizeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r11.emitEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.total = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.items)("total", ctx_r1.total)("page", ctx_r1.page)("size", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3424664730177588095$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__21 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiTablePaginationModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_20 = MSG_EXTERNAL_3424664730177588095$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟29846a83e0cdbad86f552b549fcde62d80c7bf90␟3424664730177588095: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTablePaginationModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
    I18N_22 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiTablePaginationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiTablePaginationComponent {
    constructor() {
        this.itemsVariants = [
            [10, 20, 50, 100],
            [10, 100, 500],
        ];
        this.total = 1000;
        this.page = 5;
        this.items = this.itemsVariants[0];
        this.size = this.items[0];
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/1/index.ts")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/2/index.html")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/import/insert-template.md"));
    }
}
ExampleTuiTablePaginationComponent.ɵfac = function ExampleTuiTablePaginationComponent_Factory(t) { return new (t || ExampleTuiTablePaginationComponent)(); };
ExampleTuiTablePaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTablePaginationComponent, selectors: [["example-tui-table-pagination"]], decls: 4, vars: 0, consts: [["header", "TablePagination", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], ["id", "usage", 3, "content", 6, "heading"], ["id", "custom-size-option-content", 3, "description", "content", 6, "heading"], ["tokenDescription", ""], [1, "tui-space_bottom-0"], [3, "items", "total", "page", "size", "pageChange", "sizeChange"], ["documentationPropertyName", "total", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "page", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pageChange", "documentationPropertyMode", "output", "documentationPropertyType", "number"], ["documentationPropertyPageChange", "documentationProperty"], ["documentationPropertyName", "sizeChange", "documentationPropertyMode", "output", "documentationPropertyType", "number"], ["documentationPropertySizeChange", "documentationProperty"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiTablePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTablePaginationComponent_ng_template_1_Template, 10, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTablePaginationComponent_ng_template_2_Template, 11, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTablePaginationComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiTablePaginationExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiTablePaginationExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _addon_table_components_table_pagination_table_pagination_component__WEBPACK_IMPORTED_MODULE_9__["TuiTablePaginationComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTablePaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-table-pagination`,
                templateUrl: `./table-pagination.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tables/table-pagination/table-pagination.module.ts":
/*!************************************************************************!*\
  !*** ./src/modules/tables/table-pagination/table-pagination.module.ts ***!
  \************************************************************************/
/*! exports provided: ExampleTuiTablePaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTablePaginationModule", function() { return ExampleTuiTablePaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/tables/table-pagination/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/tables/table-pagination/examples/2/index.ts");
/* harmony import */ var _table_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-pagination.component */ "./src/modules/tables/table-pagination/table-pagination.component.ts");










class ExampleTuiTablePaginationModule {
}
ExampleTuiTablePaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiTablePaginationModule });
ExampleTuiTablePaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiTablePaginationModule_Factory(t) { return new (t || ExampleTuiTablePaginationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiTablePaginationModule, { declarations: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiTablePaginationExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiTablePaginationExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiTablePaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_4__["TuiTablePaginationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"])),
                ],
                declarations: [
                    _table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiTablePaginationExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiTablePaginationExample2"],
                ],
                exports: [_table_pagination_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiTablePaginationComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tables-table-pagination-table-pagination-module.js.map