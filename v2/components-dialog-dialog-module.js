(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dialog-dialog-module"],{

/***/ "./src/modules/components/dialog/dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDialogComponent", function() { return ExampleTuiDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/dialog/examples/1/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/dialog/examples/6/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/dialog/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/dialog/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/dialog/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/dialog/examples/5/index.ts");
/* harmony import */ var _examples_7_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/7/index */ "./src/modules/components/dialog/examples/7/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");



























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7877694283409984279$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS_1 = goog.getMsg("Your own dialogs");
    I18N_0 = MSG_EXTERNAL_7877694283409984279$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟1d50bf7c320a9243978918c70e727901261fd0c4␟7877694283409984279:Your own dialogs`;
}
const _c2 = ["pageTab", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1247184373144257028$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__4 = goog.getMsg("Optional built-in implementation of Taiga UI modals");
    I18N_3 = MSG_EXTERNAL_1247184373144257028$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟ce7723a223bebc4b2a6ddd84f1c1990a0cfd6709␟1247184373144257028:Optional built-in implementation of Taiga UI modals`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1797714382154117764$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__6 = goog.getMsg(" If you want custom dialogs see {$startLink} this link {$closeLink} on creating your own implementation ", { "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_1797714382154117764$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟648a8dd8a0eb167c9f9e5945bf084d8a66310819␟1797714382154117764: If you want custom dialogs see ${"\uFFFD#4\uFFFD"}:START_LINK: this link ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: on creating your own implementation `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5345819773685575486$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__8 = goog.getMsg(" Use {$startTagCode}{$startTagStrong}TUI_DIALOGS_CLOSE{$closeTagStrong}{$closeTagCode} token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout: {$startParagraph}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$closeParagraph}", { "startTagCode": "\uFFFD#7\uFFFD", "startTagStrong": "\uFFFD#8\uFFFD", "closeTagStrong": "\uFFFD/#8\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD", "startParagraph": "\uFFFD#9\uFFFD", "startTagTuiDocCode": "\uFFFD#10\uFFFD", "closeTagTuiDocCode": "\uFFFD/#10\uFFFD", "closeParagraph": "\uFFFD/#9\uFFFD" });
    I18N_7 = MSG_EXTERNAL_5345819773685575486$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟c6a7e22d706f226be2fea24b843c900848f03d2e␟5345819773685575486: Use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:${"\uFFFD#8\uFFFD"}:START_TAG_STRONG:TUI_DIALOGS_CLOSE${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout: ${"\uFFFD#9\uFFFD"}:START_PARAGRAPH:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD/#9\uFFFD"}:CLOSE_PARAGRAPH:`;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1771579351294536177$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__10 = goog.getMsg("Dialog from string");
    I18N_9 = MSG_EXTERNAL_1771579351294536177$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟a686062f2725289cb3627d70b3d0094970cd9dca␟1771579351294536177:Dialog from string`;
}
const _c11 = ["heading", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3618801107271860538$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__13 = goog.getMsg("Dialog with directive");
    I18N_12 = MSG_EXTERNAL_3618801107271860538$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟608d29bba6c32a7b5dfa73928b02f183600ee73e␟3618801107271860538:Dialog with directive`;
}
const _c14 = ["heading", I18N_12];
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3606618943323087151$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__16 = goog.getMsg("Component dialog");
    I18N_15 = MSG_EXTERNAL_3606618943323087151$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟3949e338becfd28a82052b00bc979abb08552cfc␟3606618943323087151:Component dialog`;
}
const _c17 = ["heading", I18N_15];
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4940716035428343351$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__19 = goog.getMsg("Dialog from template");
    I18N_18 = MSG_EXTERNAL_4940716035428343351$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟4b0fe3a803dfe4cf166a537875203806bf4b4f0f␟4940716035428343351:Dialog from template`;
}
const _c20 = ["heading", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1307707756568638130$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__22 = goog.getMsg("Mobile dialog");
    I18N_21 = MSG_EXTERNAL_1307707756568638130$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟b4b51beef39318587b1321b9952db1549cc9d388␟1307707756568638130:Mobile dialog`;
}
const _c23 = ["heading", I18N_21];
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4115953377354902178$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__25 = goog.getMsg("Dialog with header");
    I18N_24 = MSG_EXTERNAL_4115953377354902178$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟0f9419e1509da5d33b55e3fb92bec7282a6fdffd␟4115953377354902178:Dialog with header`;
}
const _c26 = ["heading", I18N_24];
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_643875148834197847$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__28 = goog.getMsg("Fullscreen mobile dialog with autofocus");
    I18N_27 = MSG_EXTERNAL_643875148834197847$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__28;
}
else {
    I18N_27 = $localize `:␟eb4186807f6779368d1fe61e90940d0d746e3744␟643875148834197847:Fullscreen mobile dialog with autofocus`;
}
const _c29 = ["heading", I18N_27];
function ExampleTuiDialogComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-notification", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Do not forget to add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TuiDialogModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " into your app.module to use dialogs (See also \"Setup\" for details) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](18, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-dialog-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](21, _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-dialog-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](24, _c17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tui-dialog-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tui-dialog-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](30, _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-dialog-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](33, _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "tui-dialog-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tui-doc-example", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](36, _c29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "tui-dialog-example-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.dialogsCloseToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example7);
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5645451818099140036$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__31 = goog.getMsg("{$startParagraph} To show a dialog, use method {$startTagTuiDocCode}{$closeTagTuiDocCode}{$closeParagraph} of {$startTagCode}TuiDialogService{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} input data type. In this sample, input data has type {$startTagCode}number{$closeTagCode} and output data has type {$startTagCode}string{$closeTagCode} . {$startParagraph} You can also just unsubscribe from {$startTagCode}Observable{$closeTagCode} to close a dialog (this observable is returned from {$startTagCode}open{$closeTagCode} method). You can save a subscription for that or use {$startTagCode}takeUntil{$closeTagCode} like tools from {$startTagCode}RxJs{$closeTagCode}{$closeParagraph}", { "startParagraph": "[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]", "startTagTuiDocCode": "\uFFFD#8\uFFFD", "closeTagTuiDocCode": "\uFFFD/#8\uFFFD", "closeParagraph": "[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]", "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]" });
    I18N_30 = MSG_EXTERNAL_5645451818099140036$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__31;
}
else {
    I18N_30 = $localize `:␟12afe59c2a449fd23a24b67889fbda031f6e47da␟5645451818099140036:${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_PARAGRAPH: To show a dialog, use method ${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_PARAGRAPH: of ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:TuiDialogService${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: input data type. In this sample, input data has type ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:number${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: and output data has type ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:string${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_PARAGRAPH: You can also just unsubscribe from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: to close a dialog (this observable is returned from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:takeUntil${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: like tools from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:RxJs${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_PARAGRAPH:`;
}
I18N_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_30);
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1416152749492899734$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___33 = goog.getMsg(" I am an example of dialog ");
    I18N_32 = MSG_EXTERNAL_1416152749492899734$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟4c7aeceae808db46171e4f873177bf293696bd0e␟1416152749492899734: I am an example of dialog `;
}
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_256323569582258112$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___35 = goog.getMsg(" Dialog has {$startTagCode}Observer{$closeTagCode} in its context to call {$startTagCode}next{$closeTagCode} , {$startTagCode}complete{$closeTagCode} or {$startTagCode}error{$closeTagCode} of stream. There is also a {$startTagCode}completeWith{$closeTagCode} method to pass data and close dialog with one action ", { "startTagCode": "[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]", "closeTagCode": "[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]" });
    I18N_34 = MSG_EXTERNAL_256323569582258112$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___35;
}
else {
    I18N_34 = $localize `:␟79844ab27e228d1300d66e21a191b521f2e607f5␟256323569582258112: Dialog has ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:Observer${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: in its context to call ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:next${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:complete${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:error${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: of stream. There is also a ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:completeWith${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: method to pass data and close dialog with one action `;
}
I18N_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_34);
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6058086608431441514$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___37 = goog.getMsg("Input data: {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_36 = MSG_EXTERNAL_6058086608431441514$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___37;
}
else {
    I18N_36 = $localize `:␟254e4a9a1e95849ce0b0aac6883316bd59d2f30c␟6058086608431441514:Input data: ${"\uFFFD0\uFFFD"}:INTERPOLATION:.`;
}
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6532097318971912659$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___39 = goog.getMsg(" There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside ");
    I18N_38 = MSG_EXTERNAL_6532097318971912659$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___39;
}
else {
    I18N_38 = $localize `:␟2539761ea1e35160b56af3781a06a3437da7745c␟6532097318971912659: There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside `;
}
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_83119307066036689$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____42 = goog.getMsg(" Template can be customized ");
    I18N_41 = MSG_EXTERNAL_83119307066036689$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____42;
}
else {
    I18N_41 = $localize `:␟32ebb8be9392652a777e6c79a3bea6c57b80c130␟83119307066036689: Template can be customized `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_3_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4782742146343455471$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____43 = goog.getMsg(" Dynamic height change {$startTagNgTemplate} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! {$closeTagNgTemplate}", { "startTagNgTemplate": "\uFFFD*18:1\uFFFD", "closeTagNgTemplate": "\uFFFD/*18:1\uFFFD" });
    I18N_40 = MSG_EXTERNAL_4782742146343455471$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____43;
}
else {
    I18N_40 = $localize `:␟75f1bd62d07962d3838742466ea49bb4fbc49b90␟4782742146343455471: Dynamic height change ${"\uFFFD*18:1\uFFFD"}:START_TAG_NG_TEMPLATE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! ${"\uFFFD/*18:1\uFFFD"}:CLOSE_TAG_NG_TEMPLATE:`;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_3_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_40, 1);
} }
function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDialogComponent_ng_template_2_ng_template_3_h2_2_Template, 2, 0, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, I18N_36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-accordion", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, I18N_40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExampleTuiDialogComponent_ng_template_2_ng_template_3_ng_template_18_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_19_listener() { const observer_r13 = ctx.$implicit; return observer_r13.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_21_listener() { const observer_r13 = ctx.$implicit; return observer_r13.next("Hi"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Say \"Hi\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_23_listener() { const completeWith_r16 = ctx.completeWith; return completeWith_r16("Hi and bye!"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Say \"Hi and bye!\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r14 = ctx.size;
    const data_r15 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("big", size_r14 === "xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", size_r14 === "xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](data_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](11);
} }
var I18N_44;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3736431394797625973$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___45 = goog.getMsg(" Show a cross to close dialog ");
    I18N_44 = MSG_EXTERNAL_3736431394797625973$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___45;
}
else {
    I18N_44 = $localize `:␟a1b20ff999c9640a82965d77fd4d207567b34502␟3736431394797625973: Show a cross to close dialog `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_44);
} }
var I18N_46;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6819182888436584573$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___47 = goog.getMsg(" Dialog can be canceled with Escape key or with a click outside ");
    I18N_46 = MSG_EXTERNAL_6819182888436584573$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___47;
}
else {
    I18N_46 = $localize `:␟52766d5606f8949d3106268067f8a9df902852ae␟6819182888436584573: Dialog can be canceled with Escape key or with a click outside `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_46);
} }
var I18N_48;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6585835507882773263$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___49 = goog.getMsg(" Input data for dialog, type <I> ");
    I18N_48 = MSG_EXTERNAL_6585835507882773263$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___49;
}
else {
    I18N_48 = $localize `:␟fed37126f54f6f719380faf1f1e6b749c6536376␟6585835507882773263: Input data for dialog, type <I> `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_48);
} }
var I18N_50;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8741377272090946252$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___51 = goog.getMsg(" Content above a heading ");
    I18N_50 = MSG_EXTERNAL_8741377272090946252$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___51;
}
else {
    I18N_50 = $localize `:␟6bcf9d4cfe9aeb7aa105a2ce2235e956f45c5689␟8741377272090946252: Content above a heading `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_50);
} }
var I18N_52;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4730648600142301155$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___53 = goog.getMsg(" Heading of dialog ");
    I18N_52 = MSG_EXTERNAL_4730648600142301155$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___53;
}
else {
    I18N_52 = $localize `:␟804205d2472c83819d09d2fa3dcc4ef51fc62dad␟4730648600142301155: Heading of dialog `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_52);
} }
var I18N_54;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8954617186696208261$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___55 = goog.getMsg(" Cross click, overlay click or Escape click emits an error into {$startTagCode}Observable{$closeTagCode} (you can catch it with \"catch\" operator or onError handler) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_54 = MSG_EXTERNAL_8954617186696208261$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___55;
}
else {
    I18N_54 = $localize `:␟8a22f2d973fc300f72c09e07cb0fbc6d7cdcd42a␟8954617186696208261: Cross click, overlay click or Escape click emits an error into ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:Observable${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: (you can catch it with "catch" operator or onError handler) `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_56;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___57 = goog.getMsg(" Size ");
    I18N_56 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___57;
}
else {
    I18N_56 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiDialogComponent_ng_template_2_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_56);
} }
function ExampleTuiDialogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDialogComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.showDialog(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template, 25, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExampleTuiDialogComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.closeable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExampleTuiDialogComponent_ng_template_2_ng_template_21_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.dismissible = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExampleTuiDialogComponent_ng_template_2_ng_template_22_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.data = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExampleTuiDialogComponent_ng_template_2_ng_template_23_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExampleTuiDialogComponent_ng_template_2_ng_template_24_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExampleTuiDialogComponent_ng_template_2_ng_template_25_Template, 2, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.required = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ExampleTuiDialogComponent_ng_template_2_ng_template_26_Template, 1, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.closeable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.dismissible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_58;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3227202460516574859$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__59 = goog.getMsg(" Add {$startTagCode}TuiDialogModule{$closeTagCode} into your app.module ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_58 = MSG_EXTERNAL_3227202460516574859$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__59;
}
else {
    I18N_58 = $localize `:␟f07c69869a3ce18f47b01935b1a8ead0e7410f4c␟3227202460516574859: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDialogModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
}
var I18N_60;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_404924514778011937$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__61 = goog.getMsg(" Use {$startTagCode}open{$closeTagCode} method to show a dialog, subscribe to an {$startTagCode}Observable{$closeTagCode} : ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_60 = MSG_EXTERNAL_404924514778011937$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__61;
}
else {
    I18N_60 = $localize `:␟2ed34ad97769579b0a2cd2a73d5884333610b62f␟404924514778011937: Use ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: method to show a dialog, subscribe to an ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: : `;
}
I18N_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_60);
var I18N_62;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7493627506876302037$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__63 = goog.getMsg(" If you want to use your own component as a dialog content, use {$startTagCode}POLYMORPHEUS_CONTEXT{$closeTagCode} in it. Dialog will provide with this token some useful options: {$startTagCode}$implicit{$closeTagCode} with {$startTagCode}Observer<O>{$closeTagCode} and {$startTagCode}completeWith{$closeTagCode} hook to call {$startTagCode}next{$closeTagCode} and {$startTagCode}complete{$closeTagCode} in one action. Do not forget to add your dialog component into {$startTagCode}entryComponents{$closeTagCode} of your module where you use dialog ", { "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]", "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]" });
    I18N_62 = MSG_EXTERNAL_7493627506876302037$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__63;
}
else {
    I18N_62 = $localize `:␟a9de9542b123113af26aaf3c2c29d42caab041d2␟7493627506876302037: If you want to use your own component as a dialog content, use ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: in it. Dialog will provide with this token some useful options: ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:Observer<O>${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:completeWith${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: hook to call ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:next${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:complete${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: in one action. Do not forget to add your dialog component into ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:entryComponents${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: of your module where you use dialog `;
}
I18N_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_62);
var I18N_64;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4053510454814781699$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__65 = goog.getMsg(" You can also use a {$startLink} template {$closeLink}", { "startLink": "\uFFFD#25\uFFFD", "closeLink": "\uFFFD/#25\uFFFD" });
    I18N_64 = MSG_EXTERNAL_4053510454814781699$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__65;
}
else {
    I18N_64 = $localize `:␟8e1f35a1ec9a7effa8833227870e9b990d96e959␟4053510454814781699: You can also use a ${"\uFFFD#25\uFFFD"}:START_LINK: template ${"\uFFFD/#25\uFFFD"}:CLOSE_LINK:`;
}
var I18N_66;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7366196043250081255$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__67 = goog.getMsg(" Use {$startTagCode}Observer{$closeTagCode} from {$startTagCode}$implicit{$closeTagCode} field of context to close a dialog or get some data ", { "startTagCode": "[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]", "closeTagCode": "[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]" });
    I18N_66 = MSG_EXTERNAL_7366196043250081255$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__67;
}
else {
    I18N_66 = $localize `:␟91ee042985c1174de60304c55f094df69b69fc0c␟7366196043250081255: Use ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:Observer${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: field of context to close a dialog or get some data `;
}
I18N_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_66);
var I18N_68;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4116027893149592500$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__69 = goog.getMsg(" If you use dialog components in lazy loading modules, do not forget to pass into {$startTagCode}new PolymorpheusComponent Injector{$closeTagCode} of component where you open a dialog ", { "startTagCode": "\uFFFD#35\uFFFD", "closeTagCode": "\uFFFD/#35\uFFFD" });
    I18N_68 = MSG_EXTERNAL_4116027893149592500$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__69;
}
else {
    I18N_68 = $localize `:␟46878c30a93e93fdcd415742dbfc5eb3c1c83797␟4116027893149592500: If you use dialog components in lazy loading modules, do not forget to pass into ${"\uFFFD#35\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\uFFFD/#35\uFFFD"}:CLOSE_TAG_CODE: of component where you open a dialog `;
}
var I18N_70;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4210644035876782944$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__71 = goog.getMsg(" Dialogs have experimental feature with closing them on browser backward navigation. It was achieved through manipulation of {$startTagCode}{$startTagStrong}window.history{$closeTagStrong}{$closeTagCode} . ", { "startTagCode": "\uFFFD#40\uFFFD", "startTagStrong": "\uFFFD#41\uFFFD", "closeTagStrong": "\uFFFD/#41\uFFFD", "closeTagCode": "\uFFFD/#40\uFFFD" });
    I18N_70 = MSG_EXTERNAL_4210644035876782944$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__71;
}
else {
    I18N_70 = $localize `:␟b8215110c06020b19cfe79c37eaa93ec737c78be␟4210644035876782944: Dialogs have experimental feature with closing them on browser backward navigation. It was achieved through manipulation of ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:${"\uFFFD#41\uFFFD"}:START_TAG_STRONG:window.history${"\uFFFD/#41\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_72;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7894941606914093222$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__73 = goog.getMsg(" The feature is disabled by default because it can cause troubles in some cases. To enable this feature for your app use {$startTagCode}{$startTagStrong}TUI_DIALOG_CLOSES_ON_BACK{$closeTagStrong}{$closeTagCode} token. ", { "startTagCode": "\uFFFD#44\uFFFD", "startTagStrong": "\uFFFD#45\uFFFD", "closeTagStrong": "\uFFFD/#45\uFFFD", "closeTagCode": "\uFFFD/#44\uFFFD" });
    I18N_72 = MSG_EXTERNAL_7894941606914093222$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__73;
}
else {
    I18N_72 = $localize `:␟54b45b781929dc1b95e06d15119dc6743e2fc719␟7894941606914093222: The feature is disabled by default because it can cause troubles in some cases. To enable this feature for your app use ${"\uFFFD#44\uFFFD"}:START_TAG_CODE:${"\uFFFD#45\uFFFD"}:START_TAG_STRONG:TUI_DIALOG_CLOSES_ON_BACK${"\uFFFD/#45\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#44\uFFFD"}:CLOSE_TAG_CODE: token. `;
}
function ExampleTuiDialogComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, I18N_62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-doc-code", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](24, I18N_64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](28, I18N_66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-doc-code", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](34, I18N_68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tui-doc-code", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](39, I18N_70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](43, I18N_72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleServiceUsage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleImportModuleComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleCustomDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleLazyModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleDialogClosesOnBackToken);
} }
var I18N_74;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6239344883531610814$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__75 = goog.getMsg(" You can create your own dialogs. For example, special dialogs for mobile apps or with very customizable appearance. ");
    I18N_74 = MSG_EXTERNAL_6239344883531610814$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__75;
}
else {
    I18N_74 = $localize `:␟23901f02d1c1eb074d8b3cec720c020c0aacbb08␟6239344883531610814: You can create your own dialogs. For example, special dialogs for mobile apps or with very customizable appearance. `;
}
var I18N_76;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7955073863786570375$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__77 = goog.getMsg(" Then you need to provide a stream of your dialogs into multi token {$startTagCode}TUI_DIALOGS{$closeTagCode} . ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_76 = MSG_EXTERNAL_7955073863786570375$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__77;
}
else {
    I18N_76 = $localize `:␟bf9690a0d452859245ec41e0530f5addfe3c6625␟7955073863786570375: Then you need to provide a stream of your dialogs into multi token ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TUI_DIALOGS${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_78;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2979572952468566428$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__79 = goog.getMsg(" You can also use {$startTagCode}AbstractTuiDialogService{$closeTagCode} to create this stream of dialogs. ", { "startTagCode": "\uFFFD#7\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD" });
    I18N_78 = MSG_EXTERNAL_2979572952468566428$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__79;
}
else {
    I18N_78 = $localize `:␟9c30564df6be32ac49a076485006448a5b6634af␟2979572952468566428: You can also use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:AbstractTuiDialogService${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: to create this stream of dialogs. `;
}
var I18N_80;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5856247484231506150$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__81 = goog.getMsg(" See example of custom dialog {$startLink} here {$closeLink} . ", { "startLink": "\uFFFD#10\uFFFD", "closeLink": "\uFFFD/#10\uFFFD" });
    I18N_80 = MSG_EXTERNAL_5856247484231506150$$SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__81;
}
else {
    I18N_80 = $localize `:␟00c0fe5a892a9249c1851574b1edd06a1c3f85b5␟5856247484231506150: See example of custom dialog ${"\uFFFD#10\uFFFD"}:START_LINK: here ${"\uFFFD/#10\uFFFD"}:CLOSE_LINK: . `;
}
function ExampleTuiDialogComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExampleTuiDialogComponent {
    constructor(alertService, dialogService) {
        this.alertService = alertService;
        this.dialogService = dialogService;
        this.method = __webpack_require__.e(/*! import() | !raw-loader!-method-md */ "!!raw-loader!-method-md").then(__webpack_require__.bind(null, /*! !raw-loader!./method.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/method.md"));
        this.dialogsCloseToken = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-dialogs-close-token-md */ "!!raw-loader!-examples-import-dialogs-close-token-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/dialogs-close-token.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/dialogs-close-token.md"));
        this.exampleDialogClosesOnBackToken = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-dialog-closes-on-back-token-md */ "!!raw-loader!-examples-import-dialog-closes-on-back-token-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/dialog-closes-on-back-token.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/dialog-closes-on-back-token.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/index.html")),
            'dialog-example/dialog-example.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-dialog-example-dialog-example-module-ts */ "!!raw-loader!-examples-2-dialog-example-dialog-example-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/dialog-example/dialog-example.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.module.ts")),
            'dialog-example/dialog-example.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-dialog-example-dialog-example-component-ts */ "!!raw-loader!-examples-2-dialog-example-dialog-example-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/dialog-example/dialog-example.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts")),
            'dialog-example/dialog-example.style.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-dialog-example-dialog-example-style-less */ "!!raw-loader!-examples-2-dialog-example-dialog-example-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/dialog-example/dialog-example.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.style.less")),
            'dialog-example/dialog-example.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-dialog-example-dialog-example-template-html */ "!!raw-loader!-examples-2-dialog-example-dialog-example-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/dialog-example/dialog-example.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.template.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.less")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.html")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-html */ "!!raw-loader!-examples-7-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.html")),
            'search-example/search-dialog-example.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-search-example-search-dialog-example-component-ts */ "!!raw-loader!-examples-7-search-example-search-dialog-example-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/search-example/search-dialog-example.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts")),
            'search-example/search-dialog-example.component.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-search-example-search-dialog-example-template-html */ "!!raw-loader!-examples-7-search-example-search-dialog-example-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/search-example/search-dialog-example.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog-example.template.html")),
            'search-example/search-dialog-example.component.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-search-example-search-dialog-example-component-less */ "!!raw-loader!-examples-7-search-example-search-dialog-example-component-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/search-example/search-dialog-example.component.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.less")),
            'search-dialog.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-search-example-search-dialog-module-ts */ "!!raw-loader!-examples-7-search-example-search-dialog-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/search-example/search-dialog.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog.module.ts")),
        };
        this.exampleImportModuleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-component-md */ "!!raw-loader!-examples-import-import-module-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/import-module-component.md"));
        this.exampleServiceUsage = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-usage-md */ "!!raw-loader!-examples-import-service-usage-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service-usage.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/service-usage.md"));
        this.exampleCustomDialog = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-custom-dialog-md */ "!!raw-loader!-examples-import-custom-dialog-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/custom-dialog.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/custom-dialog.md"));
        this.exampleLazyModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-lazy-module-md */ "!!raw-loader!-examples-import-lazy-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/lazy-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/lazy-module.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-module-md */ "!!raw-loader!-examples-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/module.md"));
        this.data = 100;
        this.closeable = true;
        this.dismissible = true;
        this.required = false;
        this.sizeVariants = [
            `s`,
            `m`,
            `l`,
            `fullscreen`,
            `page`,
            `auto`,
        ];
        this.size = this.sizeVariants[1];
        this.label = ``;
    }
    showDialog(content) {
        const { data, label, required, closeable, dismissible, size } = this;
        this.dialogService
            .open(content, { data, label, required, closeable, dismissible, size })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(response => this.alertService.open(String(response))))
            .subscribe();
    }
}
ExampleTuiDialogComponent.ɵfac = function ExampleTuiDialogComponent_Factory(t) { return new (t || ExampleTuiDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"])); };
ExampleTuiDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDialogComponent, selectors: [["example-tui-dialog"]], decls: 6, vars: 0, consts: [["header", "Dialog", "package", "CORE"], ["pageTab", ""], [6, "pageTab"], ["tuiLink", "", "routerLink", "/dialogs"], [1, "tui-space_vertical-4"], [3, "code"], ["status", "warning", 1, "tui-space_vertical-4"], ["id", "string", 3, "content", 6, "heading"], ["id", "directive", 3, "content", 6, "heading"], ["id", "data", "description", "Using two-way data transfer", 3, "content", 6, "heading"], ["id", "template", 3, "content", 6, "heading"], ["id", "mobile", 3, "content", 6, "heading"], ["id", "header", 3, "content", 6, "heading"], ["id", "mobile-fullscreen", 3, "content", 6, "heading"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [1, "b-full-width"], ["documentationPropertyName", "closeable", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "dismissible", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "data", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "header", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "label", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "required", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyType", "TuiDialogSize", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [4, "ngIf"], [1, "container"], ["tuiAccordionItemContent", ""], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-2", "tui-space_right-1", 3, "click"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.module.ts", 3, "code"], ["routerLink", "/dialogs", "fragment", "example-template", "tuiLink", ""], ["filename", "myDialog.component.ts", 3, "code"]], template: function ExampleTuiDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiDialogComponent_ng_template_1_Template, 38, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDialogComponent_ng_template_2_Template, 27, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDialogComponent_ng_template_3_Template, 47, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiDialogComponent_ng_template_4_Template, 11, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiDialogExampleComponent1"], _examples_6_index__WEBPACK_IMPORTED_MODULE_12__["TuiDialogExampleComponent6"], _examples_2_index__WEBPACK_IMPORTED_MODULE_13__["TuiDialogExampleComponent2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_14__["TuiDialogExampleComponent3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_15__["TuiDialogExampleComponent4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_16__["TuiDialogExampleComponent5"], _examples_7_index__WEBPACK_IMPORTED_MODULE_17__["TuiDialogExampleComponent7"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDocDocumentationPropertyConnectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_22__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_23__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_24__["TuiAccordionItemContentDirective"]], styles: [".big[_ngcontent-%COMP%] {\n  font-size: 3.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZyB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbn1cbiIsIi5iaWcge1xuICBmb250LXNpemU6IDMuMTI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-dialog`,
                templateUrl: `./dialog.template.html`,
                styleUrls: [`./dialog.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/dialog.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/dialog/dialog.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDialogModule", function() { return ExampleTuiDialogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog.component */ "./src/modules/components/dialog/dialog.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/dialog/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/dialog/examples/2/index.ts");
/* harmony import */ var _examples_2_dialog_example_dialog_example_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/2/dialog-example/dialog-example.module */ "./src/modules/components/dialog/examples/2/dialog-example/dialog-example.module.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/dialog/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/dialog/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/dialog/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/dialog/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/components/dialog/examples/7/index.ts");
/* harmony import */ var _examples_7_search_example_search_dialog_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/7/search-example/search-dialog.module */ "./src/modules/components/dialog/examples/7/search-example/search-dialog.module.ts");























class ExampleTuiDialogModule {
}
ExampleTuiDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDialogModule });
ExampleTuiDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDialogModule_Factory(t) { return new (t || ExampleTuiDialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDialogModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiMarkerIconModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiPreventDefaultModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__["TuiElasticStickyModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiAutoFocusModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _examples_2_dialog_example_dialog_example_module__WEBPACK_IMPORTED_MODULE_14__["DialogExampleModule"],
            _examples_7_search_example_search_dialog_module__WEBPACK_IMPORTED_MODULE_20__["SearchDialogExampleModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDialogModule, { declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_12__["TuiDialogExampleComponent1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_13__["TuiDialogExampleComponent2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_15__["TuiDialogExampleComponent3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_16__["TuiDialogExampleComponent4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_17__["TuiDialogExampleComponent5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiDialogExampleComponent6"],
        _examples_7__WEBPACK_IMPORTED_MODULE_19__["TuiDialogExampleComponent7"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDialogModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiMarkerIconModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiPreventDefaultModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__["TuiElasticStickyModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiAutoFocusModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _examples_2_dialog_example_dialog_example_module__WEBPACK_IMPORTED_MODULE_14__["DialogExampleModule"],
        _examples_7_search_example_search_dialog_module__WEBPACK_IMPORTED_MODULE_20__["SearchDialogExampleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDialogModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiMarkerIconModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiPreventDefaultModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_6__["TuiElasticStickyModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiAutoFocusModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _examples_2_dialog_example_dialog_example_module__WEBPACK_IMPORTED_MODULE_14__["DialogExampleModule"],
                    _examples_7_search_example_search_dialog_module__WEBPACK_IMPORTED_MODULE_20__["SearchDialogExampleModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"])),
                ],
                declarations: [
                    _dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_12__["TuiDialogExampleComponent1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_13__["TuiDialogExampleComponent2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_15__["TuiDialogExampleComponent3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_16__["TuiDialogExampleComponent4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_17__["TuiDialogExampleComponent5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiDialogExampleComponent6"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_19__["TuiDialogExampleComponent7"],
                ],
                exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiDialogComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent1", function() { return TuiDialogExampleComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");







class TuiDialogExampleComponent1 {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    showDialog() {
        this.dialogService
            .open(`This is a plain string dialog`, { label: `Heading`, size: `s` })
            .subscribe();
    }
    showDialogWithCustomButton() {
        this.dialogService
            .open(`Good, Anakin, Good!`, {
            label: `Star wars. Episode III`,
            size: `s`,
            data: { button: `Do it!` },
        })
            .subscribe();
    }
}
TuiDialogExampleComponent1.ɵfac = function TuiDialogExampleComponent1_Factory(t) { return new (t || TuiDialogExampleComponent1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"])); };
TuiDialogExampleComponent1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent1, selectors: [["tui-dialog-example-1"]], decls: 4, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "click"]], template: function TuiDialogExampleComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent1_Template_button_click_0_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent1_Template_button_click_2_listener() { return ctx.showDialogWithCustomButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show (custom button text)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExampleComponent", function() { return DialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../cdk/directives/auto-focus/autofocus.directive */ "../cdk/directives/auto-focus/autofocus.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");



















function DialogExampleComponent_tui_data_list_wrapper_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
function DialogExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This one is a template dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogExampleComponent {
    constructor(dialogService, context) {
        this.dialogService = dialogService;
        this.context = context;
        this.value = null;
        this.name = ``;
        this.items = [10, 50, 100];
    }
    get hasValue() {
        return this.value !== null;
    }
    get data() {
        return this.context.data;
    }
    submit() {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }
    showDialog(content) {
        this.dialogService.open(content, { dismissible: true }).subscribe();
    }
}
DialogExampleComponent.ɵfac = function DialogExampleComponent_Factory(t) { return new (t || DialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["POLYMORPHEUS_CONTEXT"])); };
DialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogExampleComponent, selectors: [["dialog-example"]], decls: 16, vars: 7, consts: [[1, "text"], [3, "value"], ["tuiTextfieldSize", "m", "tuiAutoFocus", "", 3, "ngModel", "ngModelChange"], ["tuiTextfieldSize", "m", 1, "tui-space_top-3", "tui-space_bottom-5", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], ["type", "range", "tuiSlider", "", 1, "tui-space_bottom-5", 3, "ngModel", "max"], ["tuiButton", "", "type", "button", "size", "m", 3, "disabled", "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [3, "items"], [1, "dialog"]], template: function DialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your balance: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-money", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogExampleComponent_Template_tui_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Type a name\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogExampleComponent_Template_tui_select_ngModelChange_5_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Select a sum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogExampleComponent_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogExampleComponent_Template_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogExampleComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.showDialog(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Show one more dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DialogExampleComponent_ng_template_14_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", 5)("max", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.hasValue);
    } }, directives: [_addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["TuiAutoFocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_11__["TuiSelectDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDataListDirective"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__["TuiButtonComponent"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_16__["TuiDataListWrapperComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.heading[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-3);\n  margin: 0 0 1.5rem;\n}\n.text[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvMi9kaWFsb2ctZXhhbXBsZS9kaWFsb2ctZXhhbXBsZS5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RpYWxvZy9leGFtcGxlcy8yL2RpYWxvZy1leGFtcGxlL2RpYWxvZy1leGFtcGxlLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGNBQUE7QURLSjtBQ0ZBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBRElKO0FDREE7RUFDSSxtQkFBQTtBREdKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvMi9kaWFsb2ctZXhhbXBsZS9kaWFsb2ctZXhhbXBsZS5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkaW5nIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy0zKTtcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xufVxuLnRleHQge1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTMpO1xuICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcbn1cblxuLnRleHQge1xuICAgIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `dialog-example`,
                templateUrl: `./dialog-example.template.html`,
                styleUrls: [`./dialog-example.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiDialogService"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/2/dialog-example/dialog-example.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/components/dialog/examples/2/dialog-example/dialog-example.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DialogExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExampleModule", function() { return DialogExampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _dialog_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-example.component */ "./src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts");









class DialogExampleModule {
}
DialogExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DialogExampleModule });
DialogExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DialogExampleModule_Factory(t) { return new (t || DialogExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiAutoFocusModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DialogExampleModule, { declarations: [_dialog_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiAutoFocusModule"]], exports: [_dialog_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiAutoFocusModule"],
                ],
                declarations: [_dialog_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogExampleComponent"]],
                exports: [_dialog_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogExampleComponent"]],
                entryComponents: [_dialog_example_component__WEBPACK_IMPORTED_MODULE_7__["DialogExampleComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent2", function() { return TuiDialogExampleComponent2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-example/dialog-example.component */ "./src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");









class TuiDialogExampleComponent2 {
    constructor(dialogService, injector) {
        this.dialogService = dialogService;
        this.injector = injector;
        this.dialog = this.dialogService.open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusComponent"](_dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__["DialogExampleComponent"], this.injector), {
            data: 237,
            dismissible: true,
            label: `Heading`,
        });
    }
    showDialog() {
        this.dialog.subscribe({
            next: data => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }
}
TuiDialogExampleComponent2.ɵfac = function TuiDialogExampleComponent2_Factory(t) { return new (t || TuiDialogExampleComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TuiDialogExampleComponent2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent2, selectors: [["tui-dialog-example-2"]], decls: 2, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiDialogExampleComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent2_Template_button_click_0_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent3", function() { return TuiDialogExampleComponent3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1550533956626487430$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_3_INDEX_TS__1 = goog.getMsg("You can show a dialog with template");
    I18N_0 = MSG_EXTERNAL_1550533956626487430$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_3_INDEX_TS__1;
}
else {
    I18N_0 = $localize `:␟23fb64e2b61c88e5ae324ddaaffdeb93531310a7␟1550533956626487430:You can show a dialog with template`;
}
function TuiDialogExampleComponent3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent3_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.withdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Withdraw\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent3_ng_template_5_Template_button_click_8_listener() { const observer_r2 = ctx.$implicit; return observer_r2.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.money);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
} }
class TuiDialogExampleComponent3 {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.money = 1000;
    }
    showDialog(content) {
        this.dialogService.open(content).subscribe();
    }
    withdraw() {
        this.money -= 100;
    }
}
TuiDialogExampleComponent3.ɵfac = function TuiDialogExampleComponent3_Factory(t) { return new (t || TuiDialogExampleComponent3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"])); };
TuiDialogExampleComponent3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent3, selectors: [["tui-dialog-example-3"]], decls: 7, vars: 1, consts: [[3, "value"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"]], template: function TuiDialogExampleComponent3_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your balance: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-money", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.showDialog(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiDialogExampleComponent3_ng_template_5_Template, 10, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.money);
    } }, directives: [_addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent4", function() { return TuiDialogExampleComponent4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/prevent-default/prevent-default.directive */ "../cdk/directives/prevent-default/prevent-default.directive.ts");
/* harmony import */ var _addon_mobile_directives_elastic_sticky_elastic_sticky_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-mobile/directives/elastic-sticky/elastic-sticky.directive */ "../addon-mobile/directives/elastic-sticky/elastic-sticky.directive.ts");
/* harmony import */ var _kit_components_marker_icon_marker_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/marker-icon/marker-icon.component */ "../kit/components/marker-icon/marker-icon.component.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1964361128745074985$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" Show long mobile dialog with filters\n");
    I18N_0 = MSG_EXTERNAL_1964361128745074985$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟f4bec00b634ea1d412c80233b5032a210ec28a75␟1964361128745074985: Show long mobile dialog with filters
`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2849823341943584228$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS___3 = goog.getMsg(" Filters ");
    I18N_2 = MSG_EXTERNAL_2849823341943584228$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS___3;
}
else {
    I18N_2 = $localize `:␟185931f794b6387d51a965bcda45410d51c7e887␟2849823341943584228: Filters `;
}
function TuiDialogExampleComponent4_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent4_ng_template_2_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onFilterClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiDialogExampleComponent4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiDialogExampleComponent4_ng_template_2_button_0_Template, 2, 0, "button", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.filters);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2559247086012281277$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__5 = goog.getMsg("{$startHeadingLevel1}Additional information{$closeHeadingLevel1}{$startParagraph} In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. {$closeParagraph}", { "startHeadingLevel1": "\uFFFD#14\uFFFD", "closeHeadingLevel1": "\uFFFD/#14\uFFFD", "startParagraph": "\uFFFD#15\uFFFD", "closeParagraph": "\uFFFD/#15\uFFFD" });
    I18N_4 = MSG_EXTERNAL_2559247086012281277$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__5;
}
else {
    I18N_4 = $localize `:␟e018cd0265da73f04dac9fe3a648c5808b47a77e␟2559247086012281277:${"\uFFFD#14\uFFFD"}:START_HEADING_LEVEL1:Additional information${"\uFFFD/#14\uFFFD"}:CLOSE_HEADING_LEVEL1:${"\uFFFD#15\uFFFD"}:START_PARAGRAPH: In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. ${"\uFFFD/#15\uFFFD"}:CLOSE_PARAGRAPH:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2559247086012281277$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__7 = goog.getMsg("{$startHeadingLevel1}Additional information{$closeHeadingLevel1}{$startParagraph} In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. {$closeParagraph}", { "startHeadingLevel1": "\uFFFD#18\uFFFD", "closeHeadingLevel1": "\uFFFD/#18\uFFFD", "startParagraph": "\uFFFD#19\uFFFD", "closeParagraph": "\uFFFD/#19\uFFFD" });
    I18N_6 = MSG_EXTERNAL_2559247086012281277$$SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__7;
}
else {
    I18N_6 = $localize `:␟e018cd0265da73f04dac9fe3a648c5808b47a77e␟2559247086012281277:${"\uFFFD#18\uFFFD"}:START_HEADING_LEVEL1:Additional information${"\uFFFD/#18\uFFFD"}:CLOSE_HEADING_LEVEL1:${"\uFFFD#19\uFFFD"}:START_PARAGRAPH: In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. ${"\uFFFD/#19\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function TuiDialogExampleComponent4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiElasticSticky", function TuiDialogExampleComponent4_ng_template_4_Template_header_tuiElasticSticky_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onElastic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "8 March, 23:51");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-marker-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Card payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sushi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-money", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r3.transform)("width", ctx_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 300);
} }
class TuiDialogExampleComponent4 {
    constructor(dialogService, portalService) {
        this.dialogService = dialogService;
        this.portalService = portalService;
        this.filters = false;
        this.scale = 1;
    }
    get transform() {
        return `scale(${this.scale})`;
    }
    get width() {
        return `calc((100% + 4rem) * ${1 / this.scale})`;
    }
    onElastic(value) {
        this.scale = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["clamp"])(value, 0.5, 1);
    }
    onFilterClick() {
        this.filters = true;
        this.dialogService.open(`Dialog with filters`).subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }
    showDialog(content, button) {
        const templateRef = this.portalService.addTemplate(button);
        this.dialogService.open(content).subscribe({
            complete: () => {
                this.portalService.removeTemplate(templateRef);
            },
        });
    }
}
TuiDialogExampleComponent4.ɵfac = function TuiDialogExampleComponent4_Factory(t) { return new (t || TuiDialogExampleComponent4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPortalService"])); };
TuiDialogExampleComponent4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent4, selectors: [["tui-dialog-example-4"]], decls: 6, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", "tui-space_bottom-2", 3, "click"], ["button", ""], ["long", ""], ["tuiButton", "", "type", "button", "tuiPreventDefault", "touchmove", "class", "portal", 3, "click", 4, "ngIf"], ["tuiButton", "", "type", "button", "tuiPreventDefault", "touchmove", 1, "portal", 3, "click"], [1, "background"], [1, "header", 3, "tuiElasticSticky"], [1, "logo"], [1, "date"], ["src", "tuiIconChevronDownLarge", 1, "icon"], [1, "wrapper"], [1, "description"], [1, "title"], ["decimal", "always", 1, "money", 3, "value"]], template: function TuiDialogExampleComponent4_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.showDialog(_r2, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiDialogExampleComponent4_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDialogExampleComponent4_ng_template_4_Template, 20, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_7__["TuiPreventDefaultDirective"], _addon_mobile_directives_elastic_sticky_elastic_sticky_directive__WEBPACK_IMPORTED_MODULE_8__["TuiElasticStickyDirective"], _kit_components_marker_icon_marker_icon_component__WEBPACK_IMPORTED_MODULE_9__["TuiMarkerIconComponent"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_10__["TuiMoneyComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;\n}\n.portal[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  bottom: 1.25rem;\n  -webkit-animation: tuiFadeIn var(--tui-duration) var(--tui-duration);\n          animation: tuiFadeIn var(--tui-duration) var(--tui-duration);\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: calc(100% + 4rem);\n  margin-top: -2rem;\n  margin-left: -2rem;\n  text-align: center;\n  word-wrap: break-word;\n  background: var(--tui-support-20);\n  border-radius: 1rem 1rem 0 0;\n  transform-origin: top left;\n}\n.background[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1rem;\n  height: 2rem;\n  width: calc(100% + 4rem);\n  margin: -2rem 0 -2rem -2rem;\n  background: var(--tui-support-20);\n  border-radius: 1rem 1rem 0 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  background: var(--tui-base-02);\n  padding: 3.125rem 0 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 5.5rem;\n  color: var(--tui-base-01);\n}\n.date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.0625rem;\n  line-height: 1.125rem;\n  padding: 0.75rem 0;\n}\n.icon[data-size='m'][_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0.25rem;\n  width: 5rem;\n  height: 5rem;\n  box-shadow: 0 0 0 2px var(--tui-base-02);\n  color: var(--tui-base-02);\n  background: var(--tui-support-20);\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  line-height: 1.125rem;\n  margin: 0.5rem 0 0;\n  color: #9299a2;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.0625rem;\n  line-height: 1.25rem;\n  margin: 1.5rem 0 0.25rem;\n}\n.money[_ngcontent-%COMP%] {\n  font-size: 2.125rem;\n  line-height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RpYWxvZy9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNERDtFQUNJLGtFQUFBO0FER0o7QUNBQTtFQ05JLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VETUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxvRUFBQTtVQUFBLDREQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBRElKO0FDREE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QURHSjtBQ0FBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QURFSjtBQ0NBO0VBQ0ksOEJBQUE7RUFDQSx3QkFBQTtBRENKO0FDRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBREFKO0FDR0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBREZKO0FDS0E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FESEo7QUNNQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FESko7QUNPQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QURMSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZGlhbG9nL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuLnBvcnRhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEuMjVyZW07XG4gIGFuaW1hdGlvbjogdHVpRmFkZUluIHZhcigtLXR1aS1kdXJhdGlvbikgdmFyKC0tdHVpLWR1cmF0aW9uKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRyZW0pO1xuICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXN1cHBvcnQtMjApO1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAtMXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XG4gIG1hcmdpbjogLTJyZW0gMCAtMnJlbSAtMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXN1cHBvcnQtMjApO1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xufVxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMik7XG4gIHBhZGRpbmc6IDMuMTI1cmVtIDAgMnJlbTtcbn1cbi5sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUuNXJlbTtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbn1cbi5kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbn1cbi5pY29uW2RhdGEtc2l6ZT0nbSddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tdHVpLWJhc2UtMDIpO1xuICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0yMCk7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gIGNvbG9yOiAjOTI5OWEyO1xufVxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjI1cmVtO1xufVxuLm1vbmV5IHtcbiAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuQGNvbG9yLW1vYmlsZS1ncmF5OiAjOTI5OWEyO1xuXG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG4ucG9ydGFsIHtcbiAgICAuY2VudGVyLWxlZnQoKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxLjI1cmVtO1xuICAgIGFuaW1hdGlvbjogdHVpRmFkZUluIHZhcigtLXR1aS1kdXJhdGlvbikgdmFyKC0tdHVpLWR1cmF0aW9uKTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0yMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbn1cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAtMXJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDRyZW0pO1xuICAgIG1hcmdpbjogLTJyZW0gMCAtMnJlbSAtMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0yMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcbn1cblxuLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAyKTtcbiAgICBwYWRkaW5nOiAzLjEyNXJlbSAwIDJyZW07XG59XG5cbi5sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1LjVyZW07XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbn1cblxuLmRhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG59XG5cbi5pY29uW2RhdGEtc2l6ZT0nbSddIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXR1aS1iYXNlLTAyKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdXBwb3J0LTIwKTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xuICAgIGNvbG9yOiBAY29sb3ItbW9iaWxlLWdyYXk7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjA2MjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwLjI1cmVtO1xufVxuXG4ubW9uZXkge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"]]
            }] }, { type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPortalService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiPortalService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/5/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/5/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent5", function() { return TuiDialogExampleComponent5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");







function TuiDialogExampleComponent5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Take a look ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent5_ng_template_4_Template_button_click_2_listener() { const observer_r4 = ctx.$implicit; return observer_r4.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Very cool! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiDialogExampleComponent5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiDialogExampleComponent5 {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    onClick(content, header, size) {
        this.dialogService
            .open(content, {
            label: `What a cool library set`,
            header,
            size,
        })
            .subscribe();
    }
}
TuiDialogExampleComponent5.ɵfac = function TuiDialogExampleComponent5_Factory(t) { return new (t || TuiDialogExampleComponent5)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"])); };
TuiDialogExampleComponent5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent5, selectors: [["tui-dialog-example-5"]], decls: 8, vars: 0, consts: [["tuiButton", "", "size", "m", 1, "tui-space_right-2", "tui-space_bottom-2", 3, "click"], ["tuiButton", "", "size", "m", 3, "click"], ["content", ""], ["header", ""], [1, "buttons"], [1, "header"], ["src", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", "alt", "Cool"]], template: function TuiDialogExampleComponent5_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onClick(_r0, _r2, "m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onClick(_r0, _r2, "fullscreen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show fullscreen\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDialogExampleComponent5_ng_template_4_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiDialogExampleComponent5_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: center;\n  background: #ffdd2d;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RpYWxvZy9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREtKO0FDRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRElKO0FDRkk7RUFDSSxzQkFBQTtBRElSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZkZDJkO1xufVxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAuYnV0dG9ucyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZGQyZDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuXG4gICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAmIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-5`,
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

/***/ "./src/modules/components/dialog/examples/6/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/6/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent6", function() { return TuiDialogExampleComponent6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_dialog_dialog_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/dialog/dialog.directive */ "../core/components/dialog/dialog.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/auto-focus/autofocus.directive */ "../cdk/directives/auto-focus/autofocus.directive.ts");











function TuiDialogExampleComponent6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TuiDialogExampleComponent6_ng_template_2_Template_form_ngSubmit_0_listener() { const observer_r1 = ctx.$implicit; return observer_r1.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This abstracts away service and subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Some value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.exampleForm);
} }
const _c0 = function () { return { label: "Declarative directive", size: "s" }; };
class TuiDialogExampleComponent6 {
    constructor() {
        this.exampleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            exampleControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
        this.open = false;
    }
    showDialog() {
        this.open = true;
    }
}
TuiDialogExampleComponent6.ɵfac = function TuiDialogExampleComponent6_Factory(t) { return new (t || TuiDialogExampleComponent6)(); };
TuiDialogExampleComponent6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent6, selectors: [["tui-dialog-example-6"]], decls: 3, vars: 3, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], [3, "tuiDialogOptions", "tuiDialog", "tuiDialogChange"], [3, "formGroup", "ngSubmit"], ["tuiAutoFocus", "", "formControlName", "exampleControl"], ["tuiButton", "", "type", "submit"]], template: function TuiDialogExampleComponent6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent6_Template_button_click_0_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiDialogExampleComponent6_ng_template_2_Template, 8, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiDialogChange", function TuiDialogExampleComponent6_Template_ng_template_tuiDialogChange_2_listener($event) { return ctx.open = $event; });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDialogOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("tuiDialog", ctx.open);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _core_components_dialog_dialog_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDialogDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"], _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__["TuiAutoFocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-6`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/7/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/dialog/examples/7/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiDialogExampleComponent7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogExampleComponent7", function() { return TuiDialogExampleComponent7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _search_example_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-example/search-dialog-example.component */ "./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");









class TuiDialogExampleComponent7 {
    constructor(dialogService, injector) {
        this.dialogService = dialogService;
        this.injector = injector;
    }
    showDialog() {
        this.dialogService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusComponent"](_search_example_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__["SearchDialogExampleComponent"], this.injector), {
            size: `page`,
            closeable: true,
            dismissible: true,
        })
            .subscribe();
    }
}
TuiDialogExampleComponent7.ɵfac = function TuiDialogExampleComponent7_Factory(t) { return new (t || TuiDialogExampleComponent7)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TuiDialogExampleComponent7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogExampleComponent7, selectors: [["tui-dialog-example-7"]], decls: 2, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiDialogExampleComponent7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogExampleComponent7_Template_button_click_0_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogExampleComponent7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialog-example-7`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDialogService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SearchDialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogExampleComponent", function() { return SearchDialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../cdk/directives/auto-focus/autofocus.directive */ "../cdk/directives/auto-focus/autofocus.directive.ts");







class SearchDialogExampleComponent {
    constructor(context) {
        this.context = context;
    }
    close() {
        this.context.completeWith(false);
    }
}
SearchDialogExampleComponent.ɵfac = function SearchDialogExampleComponent_Factory(t) { return new (t || SearchDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"])); };
SearchDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchDialogExampleComponent, selectors: [["search-dialog-example"]], decls: 5, vars: 0, consts: [[1, "search-content"], [1, "search-title"], ["tuiAutoFocus", "", "iconAlign", "left"]], template: function SearchDialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-primitive-textfield", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " What do you want to find? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_4__["TuiPrimitiveTextfieldDirective"], _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__["TuiAutoFocusDirective"]], styles: ["[_nghost-%COMP%]   .search-content[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .search-content[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .search-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.search-title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n  margin: 0 0 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZXMvNy9zZWFyY2gtZXhhbXBsZS9zZWFyY2gtZGlhbG9nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZGlhbG9nL2V4YW1wbGVzLzcvc2VhcmNoLWV4YW1wbGUvc2VhcmNoLWRpYWxvZy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsb0JBQUE7QUNBUjtBREZBO0VBT1ksVUFBQTtBQ0ZaO0FET0E7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FDTEoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RpYWxvZy9leGFtcGxlcy83L3NlYXJjaC1leGFtcGxlL3NlYXJjaC1kaWFsb2ctZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuc2VhcmNoLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgICB9XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIHtcbiAgICAgICAgLnNlYXJjaC1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtdGl0bGUge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gICAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbn1cbiIsIjpob3N0IC5zZWFyY2gtY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xufVxuOmhvc3QgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAuc2VhcmNoLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLnNlYXJjaC10aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gIG1hcmdpbjogMCAwIDEuMjVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchDialogExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `search-dialog-example`,
                templateUrl: `./search-dialog-example.template.html`,
                styleUrls: [`./search-dialog-example.component.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/dialog/examples/7/search-example/search-dialog.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/components/dialog/examples/7/search-example/search-dialog.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SearchDialogExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogExampleModule", function() { return SearchDialogExampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-dialog-example.component */ "./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts");






class SearchDialogExampleModule {
}
SearchDialogExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchDialogExampleModule });
SearchDialogExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SearchDialogExampleModule_Factory(t) { return new (t || SearchDialogExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiAutoFocusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchDialogExampleModule, { declarations: [_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiAutoFocusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"]], exports: [_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchDialogExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiAutoFocusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"],
                ],
                declarations: [_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogExampleComponent"]],
                exports: [_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogExampleComponent"]],
                entryComponents: [_search_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogExampleComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-dialog-dialog-module.js.map