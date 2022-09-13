(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-dropdown-context-dropdown-context-module"],{

/***/ "./src/modules/directives/dropdown-context/dropdown-context.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/directives/dropdown-context/dropdown-context.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExampleTuiDropdownContextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownContextComponent", function() { return ExampleTuiDropdownContextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/dropdown-context/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/directives/dropdown-context/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/directives/dropdown-context/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/directives/dropdown-context/dropdown-context.directive */ "../kit/directives/dropdown-context/dropdown-context.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component */ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7603078759587781889$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS_1 = goog.getMsg("DropdownContext");
    I18N_0 = MSG_EXTERNAL_7603078759587781889$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟70be90489923017d382219191e356dcde0fdf3c4␟7603078759587781889:DropdownContext`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9191144177401253312$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__4 = goog.getMsg("{$startTagCode}DropdownContext{$closeTagCode} allows to show custom right click context dropdown. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_9191144177401253312$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟dd56eddadb13fe774c5ac6d5a85ef1479223a77e␟9191144177401253312:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:DropdownContext${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to show custom right click context dropdown. `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_884799098279829624$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__9 = goog.getMsg("Context menu");
    I18N_8 = MSG_EXTERNAL_884799098279829624$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟a171e48d14fd02dbd2608b1647d7e8f4b5b71269␟884799098279829624:Context menu`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7772034102662804846$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__12 = goog.getMsg("Report mistake form");
    I18N_11 = MSG_EXTERNAL_7772034102662804846$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟5ed826cd094d1079177f845d8fcdfae6e7bbae54␟7772034102662804846:Report mistake form`;
}
const _c13 = ["heading", I18N_11];
function ExampleTuiDropdownContextComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-dropdown-context-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-dropdown-context-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-dropdown-context-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.exampleBasic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.exampleContextMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.exampleReportMistakeForm);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8884320053740662429$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__15 = goog.getMsg(" Right click on me to {$startTagStrong}see a dropdown{$closeTagStrong}", { "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD" });
    I18N_14 = MSG_EXTERNAL_8884320053740662429$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟7478179a9b576b0f44e4f912cdc3d5f4c8d9f2df␟8884320053740662429: Right click on me to ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:see a dropdown${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiDropdownContextComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDropdownContextComponent_ng_template_3_ng_template_4_Template_button_click_2_listener() { const close_r8 = ctx.close; return close_r8(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Close me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS___17 = goog.getMsg(" Content ");
    I18N_16 = MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
}
function ExampleTuiDropdownContextComponent_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
function ExampleTuiDropdownContextComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiDropdownContextComponent_ng_template_3_ng_template_4_Template, 4, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiDropdownContextComponent_ng_template_3_ng_template_7_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dropdown-controller-documentation");
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContext", _r5)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6306684698565387611$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiDropdownContextModule{$closeTagCode} into a module where you want to use our directive ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_18 = MSG_EXTERNAL_6306684698565387611$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟3b4f4a9ec71187482b44dba63fdd3d968a6d11f2␟6306684698565387611: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownContextModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
    I18N_20 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiDropdownContextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
function ExampleTuiDropdownContextComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tips:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Arrow Up/Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to focus closest element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To close dropdown: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Esc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Make ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "mouse left click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " outside of dropdown content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Open new dropdown via ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "mouse right click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Declare local template variable which access to property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " template context object ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " and call it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " (for example, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "<ng-template let-close=\"close\"></ng-template>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " To get ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ActiveZone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " of opened dropdown you should declare local template variable which access to property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "activeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " of template context object ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " (for example, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "<ng-template let-activeZone=\"activeZone\"></ng-template>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " ). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExampleTuiDropdownContextComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/import/insert-template.md"));
        this.exampleBasic = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/1/index.less")),
        };
        this.exampleContextMenu = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.less")),
        };
        this.exampleReportMistakeForm = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/3/index.less")),
        };
        this.dropdownAlignVariants = [`left`, `right`];
        this.dropdownDirectionVariants = [
            `bottom`,
            `top`,
        ];
        this.dropdownLimitWidthVariants = [
            `min`,
            `auto`,
            `fixed`,
        ];
        this.dropdownAlign = this.dropdownAlignVariants[0];
        this.dropdownDirection = null;
        this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MIN_HEIGHT"];
        this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MAX_HEIGHT"];
        this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
        this.dropdownSided = false;
    }
}
ExampleTuiDropdownContextComponent.ɵfac = function ExampleTuiDropdownContextComponent_Factory(t) { return new (t || ExampleTuiDropdownContextComponent)(); };
ExampleTuiDropdownContextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDropdownContextComponent, selectors: [["example-dropdown-context"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiDropdownContextComponent),
            },
        ])], decls: 7, vars: 0, consts: [["package", "KIT", "type", "directives", 6, "header"], ["pageTab", ""], ["tips", ""], [1, "description"], [3, "ngTemplateOutlet"], ["id", "basic", 3, "content", 6, "heading"], ["id", "contextMenu", 3, "content", 6, "heading"], ["id", "reportMistakeForm", 3, "content", 6, "heading"], [3, "tuiDropdownContext", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth"], ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdownContext", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], [1, "dropdown"], ["tuiButton", "", "type", "button", 3, "click"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], [1, "tips__title"], [1, "tips__list"], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["tuiLink", "", "href", "https://angular.io/api/common/NgTemplateOutlet#properties", "target", "_blank"], ["tuiLink", "", "routerLink", "/directives/active-zone", "target", "_blank"]], template: function ExampleTuiDropdownContextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDropdownContextComponent_ng_template_2_Template, 13, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDropdownContextComponent_ng_template_3_Template, 9, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiDropdownContextComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiDropdownContextComponent_ng_template_5_Template, 50, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownContextExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiDropdownContextExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownContextExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDropdownContextDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_15__["DropdownControllerDocumentationComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__["TuiButtonComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_18__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"]], styles: [".description[_ngcontent-%COMP%] {\n  margin: 0 0 2rem;\n}\n.tips__title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n}\n.tips__list[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.tips__list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: decimal;\n  padding-left: 0.5rem;\n  margin: 1rem 0;\n}\n.tips__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.dropdown[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2Ryb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24tY29udGV4dC9kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREdJO0VBQ0ksK0JBQUE7QUNEUjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREtJO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNIUjtBRE1JO0VBQ0ksY0FBQTtBQ0pSO0FEUUE7RUFDSSxhQUFBO0FDTkoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duLWNvbnRleHQvZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwIDAgMnJlbTtcbn1cblxuLnRpcHMge1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbiAgICB9XG5cbiAgICAmX19saXN0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgICZfX2xpc3QgPiBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cblxuICAgICZfX2xpc3QgbGkge1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG59XG5cbi5kcm9wZG93biB7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cbiIsIi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDJyZW07XG59XG4udGlwc19fdGl0bGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xufVxuLnRpcHNfX2xpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4udGlwc19fbGlzdCA+IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4udGlwc19fbGlzdCBsaSB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmRyb3Bkb3duIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDropdownContextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-dropdown-context`,
                templateUrl: `./dropdown-context.component.html`,
                styleUrls: [`./dropdown-context.component.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                providers: [
                    {
                        provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiDropdownContextComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-context/dropdown-context.module.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/directives/dropdown-context/dropdown-context.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleTuiDropdownContextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownContextModule", function() { return ExampleTuiDropdownContextModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module */ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module.ts");
/* harmony import */ var _dropdown_context_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-context.component */ "./src/modules/directives/dropdown-context/dropdown-context.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/dropdown-context/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/directives/dropdown-context/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/directives/dropdown-context/examples/3/index.ts");
















class ExampleTuiDropdownContextModule {
}
ExampleTuiDropdownContextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDropdownContextModule });
ExampleTuiDropdownContextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDropdownContextModule_Factory(t) { return new (t || ExampleTuiDropdownContextModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownContextModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiTextAreaModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_context_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiDropdownContextComponent"])),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_9__["DropdownControllerDocumentationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDropdownContextModule, { declarations: [_dropdown_context_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiDropdownContextComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiDropdownContextExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiDropdownContextExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiDropdownContextExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownContextModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiTextAreaModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_9__["DropdownControllerDocumentationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDropdownContextModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_5__["TuiTableModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownContextModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiTextAreaModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiActiveZoneModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_context_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiDropdownContextComponent"])),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _components_abstract_dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_9__["DropdownControllerDocumentationModule"],
                ],
                declarations: [
                    _dropdown_context_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiDropdownContextComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiDropdownContextExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiDropdownContextExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiDropdownContextExample3"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-context/examples/1/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/directives/dropdown-context/examples/1/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiDropdownContextExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownContextExample1", function() { return TuiDropdownContextExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/directives/dropdown-context/dropdown-context.directive */ "../kit/directives/dropdown-context/dropdown-context.directive.ts");






function TuiDropdownContextExample1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing special");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiDropdownContextExample1 {
}
TuiDropdownContextExample1.ɵfac = function TuiDropdownContextExample1_Factory(t) { return new (t || TuiDropdownContextExample1)(); };
TuiDropdownContextExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownContextExample1, selectors: [["tui-dropdown-context-example-1"]], decls: 5, vars: 1, consts: [["src", "tuiIconSettingsLarge", 1, "icon", 3, "tuiDropdownContext"], ["iconInfo", ""], [1, "text"]], template: function TuiDropdownContextExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Make right click on this icon -> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiDropdownContextExample1_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContext", _r0);
    } }, directives: [_core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_3__["TuiSvgComponent"], _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDropdownContextDirective"]], styles: [".text[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  cursor: context-menu;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24tY29udGV4dC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uaWNvbiB7XG4gICAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG59XG4iLCIudGV4dCB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi5pY29uIHtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownContextExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-context-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-context/examples/2/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/directives/dropdown-context/examples/2/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiDropdownContextExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownContextExample2", function() { return TuiDropdownContextExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/directives/dropdown-context/dropdown-context.directive */ "../kit/directives/dropdown-context/dropdown-context.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_data_list_dropdown_manager_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list-dropdown-manager.directive */ "../core/components/data-list/data-list-dropdown-manager.directive.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");














function TuiDropdownContextExample2_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r2, " ");
} }
function TuiDropdownContextExample2_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r7, " ");
} }
function TuiDropdownContextExample2_tr_6_ng_template_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDropdownContextExample2_tr_6_ng_template_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r13 = ctx.$implicit; const close_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().close; const rowInfo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r14.printToConsole(item_r13.title, rowInfo_r3); return close_r8(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r13.iconName);
} }
function TuiDropdownContextExample2_tr_6_ng_template_2_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r19, " ");
} }
function TuiDropdownContextExample2_tr_6_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDropdownContextExample2_tr_6_ng_template_2_ng_template_4_button_1_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activeZone_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().activeZone;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiActiveZoneParent", activeZone_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.moreOptions);
} }
function TuiDropdownContextExample2_tr_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDropdownContextExample2_tr_6_ng_template_2_button_1_Template, 3, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDropdownContextExample2_tr_6_ng_template_2_ng_template_4_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const activeZone_r9 = ctx.activeZone;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiActiveZoneParent", activeZone_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdown", false)("tuiDropdownContent", _r11)("tuiDropdownSided", true);
} }
function TuiDropdownContextExample2_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDropdownContextExample2_tr_6_td_1_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiDropdownContextExample2_tr_6_ng_template_2_Template, 6, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowInfo_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContext", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectValues(rowInfo_r3));
} }
class TuiDropdownContextExample2 {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.menuItems = [
            { title: `View`, iconName: `tuiIconEyeOpen` },
            { title: `Copy`, iconName: `tuiIconCopy` },
            { title: `Delete`, iconName: `tuiIconTrash` },
            { title: `Move`, iconName: `tuiIconFolder` },
        ];
        this.tableData = [
            { character: `Ross Geller`, actor: `David Schwimmer` },
            { character: `Chandler Bing`, actor: `Matthew Perry` },
            { character: `Joey Tribbiani`, actor: `Matt LeBlanc` },
            { character: `Phoebe Buffay`, actor: `Lisa Kudrow` },
            { character: `Monica Geller`, actor: `Courteney Cox` },
            { character: `Rachel Green`, actor: `Jennifer Aniston` },
        ];
        this.tableColumns = Object.keys(this.tableData[0]);
        this.moreOptions = [`Option 1`, `Option 2`, `Option 3`];
        this.getObjectValues = (obj) => Object.values(obj);
    }
    printToConsole(action, contextInfo) {
        this.dialogService
            .open(`[${action}]: ${JSON.stringify(contextInfo)}`)
            .subscribe();
    }
}
TuiDropdownContextExample2.ɵfac = function TuiDropdownContextExample2_Factory(t) { return new (t || TuiDropdownContextExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"])); };
TuiDropdownContextExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownContextExample2, selectors: [["tui-dropdown-context-example-2"]], decls: 7, vars: 2, consts: [[1, "tui-table"], [1, "tui-table__tr", "tui-table__tr_hover_disabled"], ["class", "tui-table__th", 4, "ngFor", "ngForOf"], ["class", "tui-table__tr", 3, "tuiDropdownContext", 4, "ngFor", "ngForOf"], [1, "tui-table__th"], [1, "tui-table__tr", 3, "tuiDropdownContext"], ["class", "tui-table__td", 4, "ngFor", "ngForOf"], ["contextMenu", ""], [1, "tui-table__td"], ["role", "menu", "tuiDataListDropdownManager", "", 1, "context-menu", 3, "tuiActiveZoneParent"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", "tuiDropdownAlign", "right", 3, "tuiDropdown", "tuiDropdownContent", "tuiDropdownSided"], ["nestedMenu", ""], ["tuiOption", "", 3, "click"], [1, "icon", 3, "src"], ["tuiDataListDropdownManager", "", 3, "tuiActiveZoneParent"], ["tuiOption", "", 4, "ngFor", "ngForOf"], ["tuiOption", ""]], template: function TuiDropdownContextExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Make right click on any table's row.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiDropdownContextExample2_th_5_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiDropdownContextExample2_tr_6_Template, 4, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownContextDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__["TuiDataListComponent"], _core_components_data_list_data_list_dropdown_manager_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDropdownManagerDirective"], _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_8__["TuiActiveZoneDirective"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_9__["TuiOptionComponent"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_11__["TuiSvgComponent"]], styles: [".context-menu[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24tY29udGV4dC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV4dC1tZW51IHtcbiAgICB3aWR0aDogOHJlbTtcbn1cbiIsIi5jb250ZXh0LW1lbnUge1xuICB3aWR0aDogOHJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownContextExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-context-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-context/examples/3/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/directives/dropdown-context/examples/3/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiDropdownContextExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownContextExample3", function() { return TuiDropdownContextExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/directives/dropdown-context/dropdown-context.directive */ "../kit/directives/dropdown-context/dropdown-context.directive.ts");
/* harmony import */ var _kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.component */ "../kit/components/text-area/text-area.component.ts");
/* harmony import */ var _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.directive */ "../kit/components/text-area/text-area.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");










function TuiDropdownContextExample3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-text-area", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Have you found a mistake ? Write about it!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDropdownContextExample3_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const close_r2 = ctx.close; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r3.report(); return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SEND IT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.testForm);
} }
class TuiDropdownContextExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            reportText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Misspell HERE!`),
        });
    }
    report() {
        console.info(this.testForm.value);
    }
}
TuiDropdownContextExample3.ɵfac = function TuiDropdownContextExample3_Factory(t) { return new (t || TuiDropdownContextExample3)(); };
TuiDropdownContextExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownContextExample3, selectors: [["tui-dropdown-context-example-3"]], decls: 6, vars: 2, consts: [[3, "tuiDropdownContext"], ["reportForm", ""], [1, "container", 3, "formGroup"], ["formControlName", "reportText"], ["type", "button", "tuiButton", "", 1, "button", 3, "click"]], template: function TuiDropdownContextExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Some text with mistake. Make right click on it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Another text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDropdownContextExample3_ng_template_4_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContext", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContext", _r0);
    } }, directives: [_kit_directives_dropdown_context_dropdown_context_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDropdownContextDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_5__["TuiTextAreaComponent"], _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextAreaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["TuiButtonComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-width: 20rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.button[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1jb250ZXh0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cbiIsIi5jb250YWluZXIge1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownContextExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-context-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-dropdown-context-dropdown-context-module.js.map