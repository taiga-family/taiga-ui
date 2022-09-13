(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-combo-box-combo-box-module"],{

/***/ "./src/modules/components/combo-box/combo-box.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/combo-box/combo-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleTuiComboBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiComboBoxComponent", function() { return ExampleTuiComboBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/combo-box/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/combo-box/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/combo-box/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/combo-box/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/combo-box/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/combo-box/examples/6/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_strict_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../kit/components/combo-box/combo-box-strict.directive */ "../kit/components/combo-box/combo-box-strict.directive.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-max-length.directive */ "../core/directives/textfield-controller/textfield-max-length.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");






































const _c0 = ["valueTemplateContent"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2233355546414937711$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__2 = goog.getMsg("{$startTagCode}ComboBox{$closeTagCode} is a textfield with a dropdown with items. You can choose one of available options or input a value manually. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_1 = MSG_EXTERNAL_2233355546414937711$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟da1522a11e1532aa028931b46d0a630078c358ff␟2233355546414937711:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:ComboBox${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a textfield with a dropdown with items. You can choose one of available options or input a value manually. `;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4520248067908818846$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__4 = goog.getMsg("Async data loading");
    I18N_3 = MSG_EXTERNAL_4520248067908818846$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟69c22e16da706bb601a0de9b79bf4032e21f238f␟4520248067908818846:Async data loading`;
}
const _c5 = ["heading", I18N_3];
function ExampleTuiComboBoxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](4, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tui-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "tui-combo-box-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "tui-combo-box-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "tui-combo-box-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "tui-combo-box-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tui-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Note that virtual scroll can imperatively remove focused option from DOM. This causes ExpressionChange errors and to solve those take a look at a tiny ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "IndexChange");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " directive included in this example. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "tui-combo-box-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "tui-combo-box-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example6);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6504226182753238526$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__7 = goog.getMsg("{$startParagraph} Set a value with copied object from items to check {$startTagCode}identityMatcher{$closeTagCode} : {$closeParagraph}{$startTagButton} Set {$closeTagButton}", { "startParagraph": "\uFFFD#6\uFFFD", "startTagCode": "\uFFFD#7\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD", "closeParagraph": "\uFFFD/#6\uFFFD", "startTagButton": "\uFFFD#8\uFFFD", "closeTagButton": "\uFFFD/#8\uFFFD" });
    I18N_6 = MSG_EXTERNAL_6504226182753238526$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\uFFFD#6\uFFFD"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:identityMatcher${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: : ${"\uFFFD/#6\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#8\uFFFD"}:START_TAG_BUTTON: Set ${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_BUTTON:`;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-data-list-wrapper", 23);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r13.filter(ctx_r13.search));
} }
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-combo-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchChange", function ExampleTuiComboBoxComponent_ng_template_2_ng_template_1_Template_tui_combo_box_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Choose an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiComboBoxComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("valueContent", ctx_r3.valueContent)("identityMatcher", ctx_r3.identityMatcher)("readOnly", ctx_r3.readOnly)("strict", ctx_r3.strict)("stringify", ctx_r3.stringify)("strictMatcher", ctx_r3.strictMatcher)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldMaxLength", ctx_r3.maxLength)("tuiTextfieldExampleText", ctx_r3.exampleText)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("search", ctx_r3.search);
} }
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "tui-svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_8 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___11 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside (emits {$startTagCode}null{$closeTagCode} when item from list selected) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_10 = MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: when item from list selected) `;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4796409722932472766$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___13 = goog.getMsg(" A function that compares search and value to define a match between them. {$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagStrong": "\uFFFD#1\uFFFD", "closeTagStrong": "\uFFFD/#1\uFFFD" });
    I18N_12 = MSG_EXTERNAL_4796409722932472766$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟543ca5b39fc7e55317cb8527b1a5a8dd1e6802b6␟4796409722932472766: A function that compares search and value to define a match between them. ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3675570845695787426$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___15 = goog.getMsg(" Value must only be an item of suggestions\u00A0 {$startTagCode}<T>{$closeTagCode}{$startParagraph}{$startTagStrong} When {$startTagCode}false{$closeTagCode} , make sure your handlers, such as {$startTagCode}stringify{$closeTagCode} can handle {$startTagCode}string{$closeTagCode} value, as well as {$startTagCode}<T>{$closeTagCode}{$closeTagStrong}{$closeParagraph}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]", "startParagraph": "\uFFFD#2\uFFFD", "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD" });
    I18N_14 = MSG_EXTERNAL_3675570845695787426$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟eadba23b9d931a6ed170c7473e4f7eca5e0a4c1b␟3675570845695787426: Value must only be an item of suggestions  ${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:<T>${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_STRONG: When ${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:false${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: , make sure your handlers, such as ${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:stringify${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: can handle ${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:string${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: value, as well as ${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:<T>${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:`;
}
I18N_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](I18N_14);
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6911526919291779574$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___17 = goog.getMsg(" A function that compares search text and item to define a match between them. Lowercase string comparasion function by default. {$startTagStrong}Should be a pure function{$closeTagStrong}", { "startTagStrong": "\uFFFD#1\uFFFD", "closeTagStrong": "\uFFFD/#1\uFFFD" });
    I18N_16 = MSG_EXTERNAL_6911526919291779574$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟eb3f18b604c7b79baae1fd3865abc04b7a5d1388␟6911526919291779574: A function that compares search text and item to define a match between them. Lowercase string comparasion function by default. ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Should be a pure function${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4616897131727147893$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___19 = goog.getMsg(" A function that transforms object into a string. {$startTagCode}String(value){$closeTagCode} by default. {$startTagStrong}Should be a pure function{$closeTagStrong}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_18 = MSG_EXTERNAL_4616897131727147893$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:String(value)${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Should be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5590474436936398231$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___21 = goog.getMsg(" A template for custom view of selected value ");
    I18N_20 = MSG_EXTERNAL_5590474436936398231$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `;
}
function ExampleTuiComboBoxComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_20);
} }
function ExampleTuiComboBoxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-demo", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiComboBoxComponent_ng_template_2_ng_template_1_Template, 3, 26, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiComboBoxComponent_ng_template_2_ng_template_2_Template, 4, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](5, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleTuiComboBoxComponent_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.setValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExampleTuiComboBoxComponent_ng_template_2_ng_template_10_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExampleTuiComboBoxComponent_ng_template_2_ng_template_11_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ExampleTuiComboBoxComponent_ng_template_2_ng_template_12_Template, 2, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.identityMatcher = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ExampleTuiComboBoxComponent_ng_template_2_ng_template_13_Template, 8, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.strict = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ExampleTuiComboBoxComponent_ng_template_2_ng_template_14_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.strictMatcher = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ExampleTuiComboBoxComponent_ng_template_2_ng_template_15_Template, 3, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.stringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ExampleTuiComboBoxComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiComboBoxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.selectedValueTemplate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "inherited-documentation", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.identityMatcherVariants)("documentationPropertyValue", ctx_r1.identityMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.strict);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.strictMatcherVariants)("documentationPropertyValue", ctx_r1.strictMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stringifyVariants)("documentationPropertyValue", ctx_r1.stringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueTemplateVariants)("documentationPropertyValue", ctx_r1.selectedValueTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropdown", true);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4145645488382398957$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__23 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiComboBoxModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_22 = MSG_EXTERNAL_4145645488382398957$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟56c3d22f1452d68987c942338d4525f7075fcb42␟4145645488382398957: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiComboBoxModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8602164619926939169$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__25 = goog.getMsg(" See samples to learn more about working with {$startTagCode}tui-data-list-wrapper{$closeTagCode} or without them ", { "startTagCode": "\uFFFD#8\uFFFD", "closeTagCode": "\uFFFD/#8\uFFFD" });
    I18N_24 = MSG_EXTERNAL_8602164619926939169$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-data-list-wrapper${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: or without them `;
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__27 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]", "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]" });
    I18N_26 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](I18N_26);
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
    I18N_28 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_COMBO_BOX_COMBO_BOX_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiComboBoxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](3, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](7, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "tui-doc-code", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    toString() {
        return `${this.name} (${this.balance})`;
    }
}
class ExampleTuiComboBoxComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.valueTemplateRef = ``;
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.less")),
            'user.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-user */ "!!raw-loader!-examples-2-user").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/user */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/user.ts")),
            'request.service.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-request-service */ "!!raw-loader!-examples-2-request-service").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/request.service */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/request.service.ts")),
            'database-mock-data.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-database-mock-data */ "!!raw-loader!-examples-2-database-mock-data").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/database-mock-data */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/database-mock-data.ts")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.html")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.less")),
            'index-change.directive.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-change-directive-ts */ "!!raw-loader!-examples-5-index-change-directive-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index-change.directive.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index-change.directive.ts")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.html")),
        };
        this.items = [
            new Account(`Rubles`, 500),
            new Account(`Dollars`, 237),
            new Account(`Netherlands Antillean Guilder and Falkland Islands Pound`, 700),
        ];
        this.strict = true;
        this.search = ``;
        this.valueTemplateVariants = [``, `Template`];
        this.selectedValueTemplate = ``;
        this.stringifyVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_STRINGIFY"],
            item => String(String(item).match(/\d+/)),
        ];
        this.stringify = this.stringifyVariants[0];
        this.strictMatcherVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_STRICT_MATCHER"],
            (item, search, stringify) => Number.parseInt(stringify(item).match(/\d+/g)[0], 10) ===
                Number.parseInt(search, 10),
        ];
        this.strictMatcher = this.strictMatcherVariants[0];
        this.identityMatcherVariants = [
            (item1, item2) => item1 === item2,
            (item1, item2) => item1.balance === item2.balance,
        ];
        this.identityMatcher = this.identityMatcherVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    get valueContent() {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : ``;
    }
    filter(query) {
        return this.items.filter(item => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"])(item, query || ``));
    }
    setValue() {
        this.control.setValue(new Account(`Dollars`, 237));
    }
}
ExampleTuiComboBoxComponent.ɵfac = function ExampleTuiComboBoxComponent_Factory(t) { return ɵExampleTuiComboBoxComponent_BaseFactory(t || ExampleTuiComboBoxComponent); };
ExampleTuiComboBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiComboBoxComponent, selectors: [["example-tui-combo-box"]], viewQuery: function ExampleTuiComboBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueTemplateRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ExampleTuiComboBoxComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "ComboBox", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["id", "async", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "wrapper", "heading", "DataListWrapper", "description", "With filtering through tuiFilterByInput pipe", 3, "content"], ["id", "stringify", "heading", "Stringify", "description", "With filtering through tuiFilterByInputWith pipe using custom stringify handler", 3, "content"], ["id", "virtual", "heading", "Virtual scroll", 3, "content"], ["id", "options-stringify", "heading", "Options (stringify)", 3, "content"], [3, "control"], ["valueTemplateContent", ""], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "strict", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "strictMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringMatcher | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "stringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "valueContent", "identityMatcher", "readOnly", "strict", "stringify", "strictMatcher", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "tuiTextfieldCleaner", "tuiTextfieldMaxLength", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "search", "searchChange"], [3, "items", 4, "tuiDataList"], [3, "items"], [1, "item-template"], ["src", "tuiIconCheck", 1, "item-template-icon"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiComboBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiComboBoxComponent_ng_template_1_Template, 29, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiComboBoxComponent_ng_template_2_Template, 18, 13, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleTuiComboBoxComponent_ng_template_3_Template, 19, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["TuiNotificationComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiComboBoxExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiComboBoxExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiComboBoxExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_14__["TuiComboBoxExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_15__["TuiComboBoxExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_16__["TuiComboBoxExample6"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDemoComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__["InheritedDocumentationComponent"], _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_22__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_23__["TuiComboBoxDirective"], _kit_components_combo_box_combo_box_strict_directive__WEBPACK_IMPORTED_MODULE_24__["TuiComboBoxStrictDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_25__["TuiDropdownControllerDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_26__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldMaxLengthDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_29__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_30__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_31__["TuiTextfieldSizeDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_32__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_33__["TuiDataListWrapperComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_34__["TuiSvgComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_35__["TuiDocCodeComponent"]], styles: [".item-template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.item-template-icon[_ngcontent-%COMP%] {\n  margin-right: 0.375rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jb21iby1ib3gvY29tYm8tYm94LnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY29tYm8tYm94L2NvbWJvLWJveC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9jb21iby1ib3guc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtLXRlbXBsYXRlLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC4zNzVyZW07XG59XG4iLCIuaXRlbS10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS10ZW1wbGF0ZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjM3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], ExampleTuiComboBoxComponent.prototype, "filter", null);
const ɵExampleTuiComboBoxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ExampleTuiComboBoxComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiComboBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-combo-box`,
                templateUrl: `./combo-box.template.html`,
                styleUrls: [`./combo-box.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ExampleTuiComboBoxComponent),
                    },
                ],
            }]
    }], null, { valueTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`valueTemplateContent`]
        }], filter: [] }); })();


/***/ }),

/***/ "./src/modules/components/combo-box/combo-box.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/combo-box.module.ts ***!
  \**************************************************************/
/*! exports provided: ExampleTuiComboBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiComboBoxModule", function() { return ExampleTuiComboBoxModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _combo_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./combo-box.component */ "./src/modules/components/combo-box/combo-box.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/combo-box/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/combo-box/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/combo-box/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/combo-box/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/combo-box/examples/5/index.ts");
/* harmony import */ var _examples_5_index_change_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/5/index-change.directive */ "./src/modules/components/combo-box/examples/5/index-change.directive.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/combo-box/examples/6/index.ts");





















class ExampleTuiComboBoxModule {
}
ExampleTuiComboBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExampleTuiComboBoxModule });
ExampleTuiComboBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ExampleTuiComboBoxModule_Factory(t) { return new (t || ExampleTuiComboBoxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiComboBoxModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLoaderModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiStringifyContentPipeModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExampleTuiComboBoxModule, { declarations: [_combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_12__["TuiComboBoxExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_13__["TuiComboBoxExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_14__["TuiComboBoxExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_15__["TuiComboBoxExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_16__["TuiComboBoxExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiComboBoxExample6"],
        _examples_5_index_change_directive__WEBPACK_IMPORTED_MODULE_17__["IndexChangeDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiComboBoxModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLoaderModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiStringifyContentPipeModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExampleTuiComboBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiComboBoxModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLoaderModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiStringifyContentPipeModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"])),
                ],
                declarations: [
                    _combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_12__["TuiComboBoxExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_13__["TuiComboBoxExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_14__["TuiComboBoxExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_15__["TuiComboBoxExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_16__["TuiComboBoxExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiComboBoxExample6"],
                    _examples_5_index_change_directive__WEBPACK_IMPORTED_MODULE_17__["IndexChangeDirective"],
                ],
                exports: [_combo_box_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiComboBoxComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/1/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/1/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample1", function() { return TuiComboBoxExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");




















function TuiComboBoxExample1_form_0_tui_data_list_wrapper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 8);
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", items_r3)("itemContent", _r1);
} }
function TuiComboBoxExample1_form_0_tui_data_list_wrapper_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 8);
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", items_r3)("itemContent", _r1);
} }
function TuiComboBoxExample1_form_0_tui_data_list_wrapper_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 8);
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", items_r3)("itemContent", _r1);
} }
function TuiComboBoxExample1_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-combo-box", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function TuiComboBoxExample1_form_0_Template_tui_combo_box_searchChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Find the best employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiComboBoxExample1_form_0_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSearchChange(ctx_r12.extractValueFromEvent($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiComboBoxExample1_form_0_tui_data_list_wrapper_4_Template, 1, 2, "tui-data-list-wrapper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-combo-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Find the best employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiComboBoxExample1_form_0_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSearchChange(ctx_r13.extractValueFromEvent($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiComboBoxExample1_form_0_tui_data_list_wrapper_8_Template, 1, 2, "tui-data-list-wrapper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-combo-box", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Choose a developer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiComboBoxExample1_form_0_Template_input_input_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSearchChange(ctx_r14.extractValueFromEvent($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiComboBoxExample1_form_0_tui_data_list_wrapper_12_Template, 1, 2, "tui-data-list-wrapper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.testValue)("valueContent", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.testValue)("valueContent", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.testValue)("valueContent", _r1);
} }
function TuiComboBoxExample1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", data_r15.avatarUrl || null)("text", data_r15.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15);
} }
class User {
    constructor(firstName, lastName, avatarUrl = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const databaseMockData = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]),
];
class TuiComboBoxExample1 {
    constructor() {
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.items$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(value => value !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(search => this.serverRequest(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(databaseMockData));
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](databaseMockData[1]);
    }
    onSearchChange(searchQuery) {
        this.search$.next(searchQuery);
    }
    extractValueFromEvent(event) {
        var _a;
        return ((_a = event.target) === null || _a === void 0 ? void 0 : _a.value) || null;
    }
    /**
     * Service request emulation
     */
    serverRequest(searchQuery) {
        const result = databaseMockData.filter(user => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"])(user, searchQuery || ``));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(Math.random() * 1000 + 500));
    }
}
TuiComboBoxExample1.ɵfac = function TuiComboBoxExample1_Factory(t) { return new (t || TuiComboBoxExample1)(); };
TuiComboBoxExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample1, selectors: [["tui-combo-box-example-1"]], decls: 4, vars: 3, consts: [["class", "b-form", 3, "tuiTextfieldCleaner", 4, "tuiLet"], ["content", ""], [1, "b-form", 3, "tuiTextfieldCleaner"], ["tuiTextfieldSize", "s", 3, "formControl", "valueContent", "searchChange"], ["tuiTextfield", "", "placeholder", "Type a name", 3, "input"], [3, "items", "itemContent", 4, "tuiDataList"], ["tuiTextfieldSize", "m", 1, "tui-space_vertical-5", 3, "formControl", "valueContent"], [3, "formControl", "valueContent"], [3, "items", "itemContent"], [1, "template"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"], [1, "name"]], template: function TuiComboBoxExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiComboBoxExample1_form_0_Template, 13, 7, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiComboBoxExample1_ng_template_2_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__["TuiLetDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldCleanerDirective"], _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_10__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_11__["TuiComboBoxDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_13__["TuiTextfieldComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["TuiDataListWrapperComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__["TuiAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-shrink: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jb21iby1ib3gvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBREtKO0FDRkE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QURJSjtBQ0RBO0VDcVFJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFRHJRQSxjQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4udGVtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF2YXRhciB7XG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZsZXgtc2hyaW5rOiAxO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4udGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF2YXRhciB7XG4gICAgbWFyZ2luOiAwIEBzcGFjZSAqIDIgMCAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubmFtZSB7XG4gICAgLnRleHQtb3ZlcmZsb3coKTtcbiAgICBmbGV4LXNocmluazogMTtcbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/2/database-mock-data.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/2/database-mock-data.ts ***!
  \***************************************************************************/
/*! exports provided: databaseMockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseMockData", function() { return databaseMockData; });
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/modules/components/combo-box/examples/2/user.ts");


const databaseMockData = [
    new _user__WEBPACK_IMPORTED_MODULE_1__["User"](`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new _user__WEBPACK_IMPORTED_MODULE_1__["User"](`Alex`, `Inkin`, _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]),
];


/***/ }),

/***/ "./src/modules/components/combo-box/examples/2/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/2/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample2", function() { return TuiComboBoxExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _database_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database-mock-data */ "./src/modules/components/combo-box/examples/2/database-mock-data.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request.service */ "./src/modules/components/combo-box/examples/2/request.service.ts");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../core/components/loader/loader.component */ "../core/components/loader/loader.component.ts");



















function TuiComboBoxExample2_tui_combo_box_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", item_r5.avatarUrl || null)("text", item_r5.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function TuiComboBoxExample2_tui_combo_box_0_ng_template_5_tui_data_list_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10)("disabled", item_r10.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", item_r10.avatarUrl || null)("text", item_r10.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
} }
function TuiComboBoxExample2_tui_combo_box_0_ng_template_5_tui_data_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiComboBoxExample2_tui_combo_box_0_ng_template_5_tui_data_list_0_button_1_Template, 4, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filtered_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filtered_r1);
} }
function TuiComboBoxExample2_tui_combo_box_0_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 11);
} }
function TuiComboBoxExample2_tui_combo_box_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiComboBoxExample2_tui_combo_box_0_ng_template_5_tui_data_list_0_Template, 2, 1, "tui-data-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiComboBoxExample2_tui_combo_box_0_ng_template_5_ng_template_1_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const filtered_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filtered_r1)("ngIfElse", _r7);
} }
function TuiComboBoxExample2_tui_combo_box_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function TuiComboBoxExample2_tui_combo_box_0_Template_tui_combo_box_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Find the best employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiComboBoxExample2_tui_combo_box_0_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiComboBoxExample2_tui_combo_box_0_ng_template_5_Template, 3, 2, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control)("valueContent", _r2)("search", ctx_r0.search);
} }
class TuiComboBoxExample2 {
    constructor(service) {
        this.service = service;
        this.search = ``;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_database_mock_data__WEBPACK_IMPORTED_MODULE_4__["databaseMockData"][0]);
    }
}
TuiComboBoxExample2.ɵfac = function TuiComboBoxExample2_Factory(t) { return new (t || TuiComboBoxExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"])); };
TuiComboBoxExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample2, selectors: [["tui-combo-box-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])], decls: 2, vars: 3, consts: [["class", "b-form", 3, "formControl", "valueContent", "search", "searchChange", 4, "tuiLet"], [1, "b-form", 3, "formControl", "valueContent", "search", "searchChange"], ["tuiTextfield", "", "placeholder", "Type a name"], ["value", ""], ["tuiDataList", ""], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"], [1, "name"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["tuiOption", "", 3, "value", "disabled", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "disabled"], [1, "tui-space_vertical-4"]], template: function TuiComboBoxExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiComboBoxExample2_tui_combo_box_0_Template, 6, 3, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.service.request(ctx.search)));
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLetDirective"], _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_7__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_8__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDataListDirective"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_11__["TuiAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__["TuiOptionComponent"], _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["TuiLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".avatar[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-shrink: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jb21iby1ib3gvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBREtKO0FDRkE7RUMwUUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VEMVFBLGNBQUE7QURNSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY29tYm8tYm94L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5hdmF0YXIge1xuICBtYXJnaW46IDAgMC41cmVtIDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ubmFtZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmbGV4LXNocmluazogMTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmF2YXRhciB7XG4gICAgbWFyZ2luOiAwIEBzcGFjZSAqIDIgMCAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubmFtZSB7XG4gICAgLnRleHQtb3ZlcmZsb3coKTtcbiAgICBmbGV4LXNocmluazogMTtcbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return [{ type: _request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/2/request.service.ts":
/*!************************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/2/request.service.ts ***!
  \************************************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _database_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database-mock-data */ "./src/modules/components/combo-box/examples/2/database-mock-data.ts");







// @dynamic
class RequestService {
    constructor(destroy$) {
        this.destroy$ = destroy$;
        this.request$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Imitating server request with switchMap + delay pair
        this.response$ = this.request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(query => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_database_mock_data__WEBPACK_IMPORTED_MODULE_4__["databaseMockData"].filter(user => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TUI_DEFAULT_MATCHER"])(user, query))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(Math.random() * 1000 + 500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ bufferSize: 1, refCount: true }));
    }
    request(query) {
        this.request$.next(query || ``);
        return this.response$;
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDestroyService"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDestroyService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/2/user.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/2/user.ts ***!
  \*************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(firstName, lastName, avatarUrl = null, disabled = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
        this.disabled = disabled;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}


/***/ }),

/***/ "./src/modules/components/combo-box/examples/3/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/3/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample3", function() { return TuiComboBoxExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_pipes_filter_by_input_filter_by_input_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/pipes/filter-by-input/filter-by-input.pipe */ "../kit/pipes/filter-by-input/filter-by-input.pipe.ts");










function TuiComboBoxExample3_tui_data_list_wrapper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiFilterByInput");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.items));
} }
class TuiComboBoxExample3 {
    constructor() {
        this.items = [
            `John Cleese`,
            `Eric Idle`,
            `Graham Chapman`,
            `Michael Palin`,
            `Terry Gilliam`,
            `Terry Jones`,
        ];
        this.value = ``;
    }
}
TuiComboBoxExample3.ɵfac = function TuiComboBoxExample3_Factory(t) { return new (t || TuiComboBoxExample3)(); };
TuiComboBoxExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample3, selectors: [["tui-combo-box-example-3"]], decls: 4, vars: 1, consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], ["tuiTextfield", "", "placeholder", "Type a name"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiComboBoxExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiComboBoxExample3_Template_tui_combo_box_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Find the best employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiComboBoxExample3_tui_data_list_wrapper_3_Template, 2, 3, "tui-data-list-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_2__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperComponent"]], pipes: [_kit_pipes_filter_by_input_filter_by_input_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/4/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/4/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample4", function() { return TuiComboBoxExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/pipes/filter-by-input/filter-by-input-with.pipe */ "../kit/pipes/filter-by-input/filter-by-input-with.pipe.ts");
/* harmony import */ var _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/pipes/stringify-content/stringify-content.pipe */ "../kit/pipes/stringify-content/stringify-content.pipe.ts");











function TuiComboBoxExample4_tui_data_list_wrapper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiFilterByInputWith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiStringifyContent");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx_r0.items, ctx_r0.stringify))("itemContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.stringify));
} }
class TuiComboBoxExample4 {
    constructor() {
        this.value = null;
        this.items = [
            { name: `John`, surname: `Cleese` },
            { name: `Eric`, surname: `Idle` },
            { name: `Graham`, surname: `Chapman` },
            { name: `Michael`, surname: `Palin` },
            { name: `Terry`, surname: `Gilliam` },
            { name: `Terry`, surname: `Jones` },
        ];
        this.stringify = (item) => `${item.name} ${item.surname}`;
    }
}
TuiComboBoxExample4.ɵfac = function TuiComboBoxExample4_Factory(t) { return new (t || TuiComboBoxExample4)(); };
TuiComboBoxExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample4, selectors: [["tui-combo-box-example-4"]], decls: 4, vars: 2, consts: [[1, "b-form", 3, "stringify", "ngModel", "ngModelChange"], ["tuiTextfield", "", "placeholder", "Type a name"], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"]], template: function TuiComboBoxExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiComboBoxExample4_Template_tui_combo_box_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Find the best employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiComboBoxExample4_tui_data_list_wrapper_3_Template, 3, 7, "tui-data-list-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stringify", ctx.stringify)("ngModel", ctx.value);
    } }, directives: [_kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_2__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperComponent"]], pipes: [_kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputWithPipe"], _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_9__["TuiStringifyContentPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/5/index-change.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/5/index-change.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: IndexChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexChangeDirective", function() { return IndexChangeDirective; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



class IndexChangeDirective {
    constructor(strategy) {
        this.strategy = strategy;
        this.indexChange = this.strategy.scrolledIndexChange;
    }
}
IndexChangeDirective.ɵfac = function IndexChangeDirective_Factory(t) { return new (t || IndexChangeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["VIRTUAL_SCROLL_STRATEGY"])); };
IndexChangeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: IndexChangeDirective, selectors: [["", "indexChange", ""]], outputs: { indexChange: "indexChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexChangeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[indexChange]`,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["VIRTUAL_SCROLL_STRATEGY"]]
            }] }]; }, { indexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/5/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/5/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample5", function() { return TuiComboBoxExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollable.directive */ "../core/components/scrollbar/scrollable.directive.ts");
/* harmony import */ var _index_change_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-change.directive */ "./src/modules/components/combo-box/examples/5/index-change.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_pipes_filter_by_input_filter_by_input_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/pipes/filter-by-input/filter-by-input.pipe */ "../kit/pipes/filter-by-input/filter-by-input.pipe.ts");















function TuiComboBoxExample5_ng_container_2_cdk_virtual_scroll_viewport_1_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5, " ");
} }
function TuiComboBoxExample5_ng_container_2_cdk_virtual_scroll_viewport_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiComboBoxExample5_ng_container_2_cdk_virtual_scroll_viewport_1_Template_cdk_virtual_scroll_viewport_indexChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r3.handleFocusLossIfNecessary(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-data-list", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiComboBoxExample5_ng_container_2_cdk_virtual_scroll_viewport_1_button_3_Template, 2, 2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = ctx.tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", items_r2.length * 44, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", items_r2);
} }
function TuiComboBoxExample5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiComboBoxExample5_ng_container_2_cdk_virtual_scroll_viewport_1_Template, 4, 4, "cdk-virtual-scroll-viewport", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiFilterByInput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.countries));
} }
class TuiComboBoxExample5 {
    constructor() {
        this.value = null;
        this.countries = [
            `Afghanistan`,
            `Albania`,
            `Algeria`,
            `American Samoa`,
            `Andorra`,
            `Angola`,
            `Anguilla`,
            `Antarctica`,
            `Antigua and Barbuda`,
            `Argentina`,
            `Armenia`,
            `Aruba`,
            `Australia`,
            `Austria`,
            `Azerbaijan`,
            `Bahamas`,
            `Bahrain`,
            `Bangladesh`,
            `Barbados`,
            `Belarus`,
            `Belgium`,
            `Belize`,
            `Benin`,
            `Bermuda`,
            `Bhutan`,
            `Bolivia`,
            `Bonaire, Sint Eustatius and Saba`,
            `Bosnia and Herzegovina`,
            `Botswana`,
            `Bouvet Island`,
            `Brazil`,
            `British Indian Ocean Territory`,
            `Brunei Darussalam`,
            `Bulgaria`,
            `Burkina Faso`,
            `Burundi`,
            `Cabo Verde`,
            `Cambodia`,
            `Cameroon`,
            `Canada`,
            `Cayman Islands`,
            `Central African Republic`,
            `Chad`,
            `Chile`,
            `China`,
            `Christmas Island`,
            `Cocos (Keeling) Islands`,
            `Colombia`,
            `Comoros`,
            `Congo`,
            `Cook Islands`,
            `Costa Rica`,
            `Croatia`,
            `Cuba`,
            `Curaçao`,
            `Cyprus`,
            `Czechia`,
            `Côte d'Ivoire`,
            `Denmark`,
            `Djibouti`,
            `Dominica`,
            `Dominican Republic`,
            `Ecuador`,
            `Egypt`,
            `El Salvador`,
            `Equatorial Guinea`,
            `Eritrea`,
            `Estonia`,
            `Eswatini`,
            `Ethiopia`,
            `Falkland Islands`,
            `Faroe Islands`,
            `Fiji`,
            `Finland`,
            `France`,
            `French Guiana`,
            `French Polynesia`,
            `French Southern Territories`,
            `Gabon`,
            `Gambia`,
            `Georgia`,
            `Germany`,
            `Ghana`,
            `Gibraltar`,
            `Greece`,
            `Greenland`,
            `Grenada`,
            `Guadeloupe`,
            `Guam`,
            `Guatemala`,
            `Guernsey`,
            `Guinea`,
            `Guinea-Bissau`,
            `Guyana`,
            `Haiti`,
            `Heard Island and McDonald Islands`,
            `Holy See`,
            `Honduras`,
            `Hong Kong`,
            `Hungary`,
            `Iceland`,
            `India`,
            `Indonesia`,
            `Iran`,
            `Iraq`,
            `Ireland`,
            `Isle of Man`,
            `Israel`,
            `Italy`,
            `Jamaica`,
            `Japan`,
            `Jersey`,
            `Jordan`,
            `Kazakhstan`,
            `Kenya`,
            `Kiribati`,
            `Korea`,
            `Kuwait`,
            `Kyrgyzstan`,
            `Lao People's Democratic Republic`,
            `Latvia`,
            `Lebanon`,
            `Lesotho`,
            `Liberia`,
            `Libya`,
            `Liechtenstein`,
            `Lithuania`,
            `Luxembourg`,
            `Macao`,
            `Madagascar`,
            `Malawi`,
            `Malaysia`,
            `Maldives`,
            `Mali`,
            `Malta`,
            `Marshall Islands`,
            `Martinique`,
            `Mauritania`,
            `Mauritius`,
            `Mayotte`,
            `Mexico`,
            `Micronesia`,
            `Moldova`,
            `Monaco`,
            `Mongolia`,
            `Montenegro`,
            `Montserrat`,
            `Morocco`,
            `Mozambique`,
            `Myanmar`,
            `Namibia`,
            `Nauru`,
            `Nepal`,
            `Netherlands`,
            `New Caledonia`,
            `New Zealand`,
            `Nicaragua`,
            `Niger`,
            `Nigeria`,
            `Niue`,
            `Norfolk Island`,
            `Northern Mariana Islands`,
            `Norway`,
            `Oman`,
            `Pakistan`,
            `Palau`,
            `Palestine, State of`,
            `Panama`,
            `Papua New Guinea`,
            `Paraguay`,
            `Peru`,
            `Philippines`,
            `Pitcairn`,
            `Poland`,
            `Portugal`,
            `Puerto Rico`,
            `Qatar`,
            `Republic of North Macedonia`,
            `Romania`,
            `Russian Federation`,
            `Rwanda`,
            `Réunion`,
            `Saint Barthélemy`,
            `Saint Helena`,
            `Saint Kitts and Nevis`,
            `Saint Lucia`,
            `Saint Martin`,
            `Saint Pierre and Miquelon`,
            `Saint Vincent and the Grenadines`,
            `Samoa`,
            `San Marino`,
            `Sao Tome and Principe`,
            `Saudi Arabia`,
            `Senegal`,
            `Serbia`,
            `Seychelles`,
            `Sierra Leone`,
            `Singapore`,
            `Sint Maarten (Dutch part)`,
            `Slovakia`,
            `Slovenia`,
            `Solomon Islands`,
            `Somalia`,
            `South Africa`,
            `South Georgia`,
            `South Sudan`,
            `Spain`,
            `Sri Lanka`,
            `Sudan`,
            `Suriname`,
            `Svalbard and Jan Mayen`,
            `Sweden`,
            `Switzerland`,
            `Syrian Arab Republic`,
            `Taiwan`,
            `Tajikistan`,
            `Tanzania, United Republic of`,
            `Thailand`,
            `Timor-Leste`,
            `Togo`,
            `Tokelau`,
            `Tonga`,
            `Trinidad and Tobago`,
            `Tunisia`,
            `Turkey`,
            `Turkmenistan`,
            `Turks and Caicos Islands`,
            `Tuvalu`,
            `Uganda`,
            `Ukraine`,
            `United Arab Emirates`,
            `United Kingdom`,
            `United States of America`,
            `Uruguay`,
            `Uzbekistan`,
            `Vanuatu`,
            `Venezuela`,
            `Viet Nam`,
            `Virgin Islands (British)`,
            `Virgin Islands (U.S.)`,
            `Wallis and Futuna`,
            `Western Sahara`,
            `Yemen`,
            `Zambia`,
            `Zimbabwe`,
            `Åland Islands`,
        ];
    }
}
TuiComboBoxExample5.ɵfac = function TuiComboBoxExample5_Factory(t) { return new (t || TuiComboBoxExample5)(); };
TuiComboBoxExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample5, selectors: [["tui-combo-box-example-5"]], decls: 3, vars: 1, consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], [4, "tuiDataList"], ["tuiScrollable", "", "class", "scroll", 3, "height", "itemSize", "indexChange", 4, "tuiLet"], ["tuiScrollable", "", 1, "scroll", 3, "itemSize", "indexChange"], ["list", ""], ["tuiOption", "", 3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiOption", "", 3, "value"]], template: function TuiComboBoxExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiComboBoxExample5_Template_tui_combo_box_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiComboBoxExample5_ng_container_2_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_7__["TuiLetDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkFixedSizeVirtualScroll"], _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_9__["TuiScrollableDirective"], _index_change_directive__WEBPACK_IMPORTED_MODULE_10__["IndexChangeDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_11__["TuiDataListComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__["TuiOptionComponent"]], pipes: [_kit_pipes_filter_by_input_filter_by_input_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiFilterByInputPipe"]], styles: [".scroll[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  \n  min-height: 64px;\n  max-height: 200px;\n}\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jb21iby1ib3gvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFREtFLHFCQUFxQjtFRW1WbkIscUJBQUE7RUFDQSx3QkFBQTtFRmpWRixvQkFBb0I7RUNObEIsZ0JBQUE7RUFDQSxpQkFBQTtBRFFKO0FFaVZJOztFQUVJLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUYvVVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NvbWJvLWJveC9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uc2Nyb2xsIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogc3R5bGVsaW50LWVuYWJsZSovXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uc2Nyb2xsIHtcbiAgICAuc2Nyb2xsYmFyLWhpZGRlbigpO1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/combo-box/examples/6/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/combo-box/examples/6/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiComboBoxExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiComboBoxExample6", function() { return TuiComboBoxExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");














function TuiComboBoxExample6_tui_data_list_wrapper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
const STRINGIFY_EMPLOYEE = (item) => `${item.name} (${item.dept.title})`;
class TuiComboBoxExample6 {
    constructor() {
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.items = [
            { id: 42, name: `John Cleese`, dept: { id: 566, title: `Financial` } },
            { id: 237, name: `Eric Idle`, dept: { id: 560, title: `Staffing` } },
            { id: 666, name: `Michael Palin`, dept: { id: 566, title: `Financial` } },
            { id: 123, name: `Terry Gilliam`, dept: { id: 500, title: `Administrative` } },
            { id: 777, name: `Terry Jones`, dept: { id: 566, title: `Financial` } },
            { id: 999, name: `Graham Chapman`, dept: { id: 560, title: `Staffing` } },
        ];
    }
}
TuiComboBoxExample6.ɵfac = function TuiComboBoxExample6_Factory(t) { return new (t || TuiComboBoxExample6)(); };
TuiComboBoxExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiComboBoxExample6, selectors: [["tui-combo-box-example-6"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiItemsHandlersProvider"])({ stringify: STRINGIFY_EMPLOYEE })])], decls: 5, vars: 2, consts: [[1, "b-form"], ["tuiTextfieldSize", "m", 3, "formControl", "tuiTextfieldLabelOutside"], ["tuiTextfield", "", "placeholder", "Type a name"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiComboBoxExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-combo-box", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiComboBoxExample6_tui_data_list_wrapper_4_Template, 1, 1, "tui-data-list-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.testValue)("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_5__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["TuiDataListWrapperComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiComboBoxExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-combo-box-example-6`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiItemsHandlersProvider"])({ stringify: STRINGIFY_EMPLOYEE })],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-combo-box-combo-box-module.js.map