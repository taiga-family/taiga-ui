(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-editor-new-editor-new-module"],{

/***/ "./src/modules/components/editor-new/editor-new.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/editor-new/editor-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleEditorNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleEditorNewComponent", function() { return ExampleEditorNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/editor-new/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/editor-new/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/editor-new/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/editor-new/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/editor-new/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/editor-new/examples/6/index.ts");
/* harmony import */ var _examples_7_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/7/index */ "./src/modules/components/editor-new/examples/7/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");



























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6878290531283347707$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__1 = goog.getMsg(" Rich Text Editor based on {$startLink} TipTap Editor {$closeLink} for using with Angular forms. For safety reasons use a {$startLink_1} sanitizer {$closeLink} with this component. ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startLink_1": "\uFFFD#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6878290531283347707$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟7384ac6e9673eac2ca0755fd1c7a8f4cd617d393␟6878290531283347707: Rich Text Editor based on ${"\uFFFD#2\uFFFD"}:START_LINK: TipTap Editor ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\uFFFD#3\uFFFD"}:START_LINK_1: sanitizer ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: with this component. `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3861813736526108182$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__3 = goog.getMsg(" This component is experimental. Use it with caution. Expect breaking changes ");
    I18N_2 = MSG_EXTERNAL_3861813736526108182$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟afe4d6e2ec039466b1c6bbd77c7ed59d2bbf5032␟3861813736526108182: This component is experimental. Use it with caution. Expect breaking changes `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8668316348766652939$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__5 = goog.getMsg("Custom tool");
    I18N_4 = MSG_EXTERNAL_8668316348766652939$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟eb45fe7dc22c363f63b6d6fadfbc3f59a27aecff␟8668316348766652939:Custom tool`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7771894138659657979$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__8 = goog.getMsg("{$startListItem} Create component with tool button (which can get access to {$startLink} original TipTap editor API {$closeLink} via {$startTagCode}TuiTiptapEditorService{$closeTagCode} from {$startTagCode}@taiga-ui/addon-editor{$closeTagCode} ). {$closeListItem}{$startListItem} Pass the component as content projection (with {$startTagCode}ngProjectAs=\"tools\"{$closeTagCode} ) to {$startTagCode}<tui-editor>{$closeTagCode} . {$closeListItem}", { "startListItem": "[\uFFFD#11\uFFFD|\uFFFD#15\uFFFD]", "startLink": "\uFFFD#12\uFFFD", "closeLink": "\uFFFD/#12\uFFFD", "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]", "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]", "closeListItem": "[\uFFFD/#11\uFFFD|\uFFFD/#15\uFFFD]" });
    I18N_7 = MSG_EXTERNAL_7771894138659657979$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟80d0aad7cf71915f6aae574bd227ebd7389fef84␟7771894138659657979:${"[\uFFFD#11\uFFFD|\uFFFD#15\uFFFD]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\uFFFD#12\uFFFD"}:START_LINK: original TipTap editor API ${"\uFFFD/#12\uFFFD"}:CLOSE_LINK: via ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:TuiTiptapEditorService${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#11\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#11\uFFFD|\uFFFD#15\uFFFD]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:ngProjectAs="tools"${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: ) to ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:<tui-editor>${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD/#11\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_7);
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3990837998974463308$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__10 = goog.getMsg("Resizable image");
    I18N_9 = MSG_EXTERNAL_3990837998974463308$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟f6e53c7abc5122d1541fe5cfa4dc5220ac8efb0c␟3990837998974463308:Resizable image`;
}
const _c11 = ["heading", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2473520866467645409$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__13 = goog.getMsg("Preview for images");
    I18N_12 = MSG_EXTERNAL_2473520866467645409$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟86b5f3ccdbd16599aa8d4bbb4863c89ad9765727␟2473520866467645409:Preview for images`;
}
const _c14 = ["heading", I18N_12];
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2859238356795781221$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__16 = goog.getMsg("Custom processing content");
    I18N_15 = MSG_EXTERNAL_2859238356795781221$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟31d92508c2a108ef09514c1b3a18449130892445␟2859238356795781221:Custom processing content`;
}
const _c17 = ["heading", I18N_15];
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8116090618226965501$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__19 = goog.getMsg("Draggable groups the looks like in Notion");
    I18N_18 = MSG_EXTERNAL_8116090618226965501$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟6ad3244077a72df80081e9add4295ed2fea7544f␟8116090618226965501:Draggable groups the looks like in Notion`;
}
const _c20 = ["heading", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4148315862675822682$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__22 = goog.getMsg("Simple create nested groups");
    I18N_21 = MSG_EXTERNAL_4148315862675822682$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟4a95d96176a733e60eb883df1c62627dab7f2148␟4148315862675822682:Simple create nested groups`;
}
const _c23 = ["heading", I18N_21];
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3767163507419562069$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__25 = goog.getMsg("Uploading images to hosting");
    I18N_24 = MSG_EXTERNAL_3767163507419562069$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟bd608cde6ee5724a15ebb3be9804114cbd1782f8␟3767163507419562069:Uploading images to hosting`;
}
const _c26 = ["heading", I18N_24];
function ExampleEditorNewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You can create your own tool: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-editor-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tui-editor-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](23, _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "tui-editor-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](26, _c17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "tui-editor-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tui-doc-example", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](29, _c20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tui-editor-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tui-doc-example", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](32, _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "tui-editor-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tui-doc-example", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tui-editor-example-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example7);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___28 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_27 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleEditorNewComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7940519464117146012$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___30 = goog.getMsg(" Example pass HTML code ");
    I18N_29 = MSG_EXTERNAL_7940519464117146012$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟f687e715de245f498c0a37306e79b12200de4a82␟7940519464117146012: Example pass HTML code `;
}
function ExampleEditorNewComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___32 = goog.getMsg(" Example text shown on empty focused input ");
    I18N_31 = MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `;
}
function ExampleEditorNewComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___34 = goog.getMsg(" Example text shown on empty focused input ");
    I18N_33 = MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `;
}
function ExampleEditorNewComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2877889858952730048$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___36 = goog.getMsg(" Allowed edit tools ");
    I18N_35 = MSG_EXTERNAL_2877889858952730048$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `;
}
function ExampleEditorNewComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
function ExampleEditorNewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-editor", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start typing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HTML:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-editor-socket", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Text:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleEditorNewComponent_ng_template_2_ng_template_11_Template, 2, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleEditorNewComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleEditorNewComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleEditorNewComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.control.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleEditorNewComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleEditorNewComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.exampleText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleEditorNewComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleEditorNewComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.maxHeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleEditorNewComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleEditorNewComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.tools = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r1.maxHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.control)("focusable", ctx_r1.focusable)("exampleText", ctx_r1.exampleText)("readOnly", ctx_r1.readOnly)("tools", ctx_r1.tools)("pseudoInvalid", ctx_r1.pseudoInvalid)("pseudoFocused", ctx_r1.pseudoFocused)("pseudoHovered", ctx_r1.pseudoHovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.control.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.control.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.control.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.exampleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.maxHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.toolsVariants)("documentationPropertyValue", ctx_r1.tools);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1340683940823692236$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__38 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiEditorModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_37 = MSG_EXTERNAL_1340683940823692236$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiEditorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__40 = goog.getMsg("Add to the template:");
    I18N_39 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5735999802171173508$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__42 = goog.getMsg("Provide the required extensions or use the default ones:");
    I18N_41 = MSG_EXTERNAL_5735999802171173508$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__42;
}
else {
    I18N_41 = $localize `:␟97c5c1e54acb7f33324912552bd6d76d1e201310␟5735999802171173508:Provide the required extensions or use the default ones:`;
}
function ExampleEditorNewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-doc-code", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.provideExtensions);
} }
var I18N_43;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8578885722748078515$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__44 = goog.getMsg("TUI_EDITOR_OPTIONS");
    I18N_43 = MSG_EXTERNAL_8578885722748078515$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__44;
}
else {
    I18N_43 = $localize `:␟efaa49ce895f1db3267f161305f62fa8bd4c8e7b␟8578885722748078515:TUI_EDITOR_OPTIONS`;
}
var I18N_45;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4694114107272609448$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__46 = goog.getMsg("{$startTagDt}{$startTagCode}colors{$closeTagCode}{$closeTagDt}{$startTagDd} map of colors in toolbar's dropdowns with color-selection. {$startParagraph} It accepts {$startTagCode}ReadonlyMap<string, string>{$closeTagCode} : the {$startTagStrong}key{$closeTagStrong} is the name of the color (used only for hint and accessibility), the {$startTagStrong}value{$closeTagStrong} \u2013 HTML color code. {$closeParagraph}{$closeTagDd}{$startTagDt}{$startTagCode}blankColor{$closeTagCode}{$closeTagDt}{$startTagDd} Null color. It is used in situations when there is no color selected. {$startParagraph} it accepts {$startTagCode}string{$closeTagCode} (HTML color code). {$closeParagraph}{$closeTagDd}", { "startTagDt": "[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]", "startTagCode": "[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]", "closeTagCode": "[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]", "closeTagDt": "[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]", "startTagDd": "[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]", "startParagraph": "[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]", "startTagStrong": "[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]", "closeTagStrong": "[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]", "closeParagraph": "[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]", "closeTagDd": "[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]" });
    I18N_45 = MSG_EXTERNAL_4694114107272609448$$SRC_MODULES_COMPONENTS_EDITOR_NEW_EDITOR_NEW_COMPONENT_TS__46;
}
else {
    I18N_45 = $localize `:␟5371228197c6562593d60fad333c3a5184d01859␟4694114107272609448:${"[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_DT:${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:colors${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_DT:${"[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]"}:START_TAG_DD: map of colors in toolbar's dropdowns with color-selection. ${"[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]"}:START_PARAGRAPH: It accepts ${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:ReadonlyMap<string, string>${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE: : the ${"[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_STRONG:key${"[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_STRONG: is the name of the color (used only for hint and accessibility), the ${"[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_STRONG:value${"[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_STRONG: – HTML color code. ${"[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_DT:${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:blankColor${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_DT:${"[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]"}:START_TAG_DD: Null color. It is used in situations when there is no color selected. ${"[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]"}:START_PARAGRAPH: it accepts ${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:string${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE: (HTML color code). ${"[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]"}:CLOSE_TAG_DD:`;
}
I18N_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_45);
function ExampleEditorNewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can configure some editor's params via DI-token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TUI_EDITOR_OPTIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Usage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description of the available configurations:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, I18N_45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dd", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dd", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r3.exampleEditorOptionsToken);
} }
class ExampleEditorNewComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_4__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/import/insert-template.md"));
        this.provideExtensions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-provide-extensions-md */ "!!raw-loader!-examples-import-provide-extensions-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/provide-extensions.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/import/provide-extensions.md"));
        this.exampleEditorOptionsToken = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-editor-options-token-md */ "!!raw-loader!-examples-import-editor-options-token-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/editor-options-token.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/import/editor-options-token.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/index.less")),
            'smiles-tool/emoji.extension.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-smiles-tool-emoji-extension-ts */ "!!raw-loader!-examples-1-smiles-tool-emoji-extension-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/smiles-tool/emoji.extension.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts")),
            'smiles-tool/smiles-tool.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-smiles-tool-smiles-tool-component-ts */ "!!raw-loader!-examples-1-smiles-tool-smiles-tool-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/smiles-tool/smiles-tool.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts")),
            'smiles-tool/smiles-tool.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-smiles-tool-smiles-tool-template-html */ "!!raw-loader!-examples-1-smiles-tool-smiles-tool-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/smiles-tool/smiles-tool.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.template.html")),
            'smiles-tool/smiles-tool.styles.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-smiles-tool-smiles-tool-styles-less */ "!!raw-loader!-examples-1-smiles-tool-smiles-tool-styles-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/smiles-tool/smiles-tool.styles.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.styles.less")),
            'smiles-tool/smiles-tool.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-smiles-tool-smiles-tool-module-ts */ "!!raw-loader!-examples-1-smiles-tool-smiles-tool-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/smiles-tool/smiles-tool.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.module.ts")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/index.less")),
            'image-preview/image-preview.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-image-preview-image-preview-component-ts */ "!!raw-loader!-examples-3-image-preview-image-preview-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/image-preview/image-preview.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts")),
            'image-preview/image-preview.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-image-preview-image-preview-module-ts */ "!!raw-loader!-examples-3-image-preview-image-preview-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/image-preview/image-preview.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.module.ts")),
            'image-preview/image-preview.style.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-image-preview-image-preview-style-less */ "!!raw-loader!-examples-3-image-preview-image-preview-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/image-preview/image-preview.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.style.less")),
            'image-preview.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-image-preview-image-preview-template-html */ "!!raw-loader!-examples-3-image-preview-image-preview-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/image-preview/image-preview.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.template.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.less")),
            'legacy-editor.ts': __webpack_require__.e(/*! import() | !raw-loader!-addon-editor-utils-legacy-converter-ts */ "!!raw-loader!-addon-editor-utils-legacy-converter-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./../../../../../addon-editor/utils/legacy-converter.ts */ "../../node_modules/raw-loader/dist/cjs.js!../addon-editor/utils/legacy-converter.ts")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.html")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.less")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-html */ "!!raw-loader!-examples-7-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-less */ "!!raw-loader!-examples-7-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.less")),
            './image-loader.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-image-loader */ "!!raw-loader!-examples-7-image-loader").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/image-loader */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/image-loader.ts")),
            './imgbb.service.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-7-imgbb-service */ "!!raw-loader!-examples-7-imgbb-service").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/imgbb.service */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/imgbb.service.ts")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toolsVariants = [
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["defaultEditorTools"],
            [
                _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].Bold,
                _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].Italic,
                _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].Strikethrough,
                _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].HR,
            ],
        ];
        this.tools = this.toolsVariants[0];
    }
}
ExampleEditorNewComponent.ɵfac = function ExampleEditorNewComponent_Factory(t) { return ɵExampleEditorNewComponent_BaseFactory(t || ExampleEditorNewComponent); };
ExampleEditorNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleEditorNewComponent, selectors: [["example-tui-editor-new"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleEditorNewComponent),
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_EXTENSIONS"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["defaultEditorExtensions"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["tiptapEditorStyles"],
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 0, consts: [["header", "Editor[new]", "package", "ADDON-EDITOR", "type", "components"], ["pageTab", ""], ["pageTab", "DI tokens"], ["tuiLink", "", "href", "https://www.tiptap.dev/"], ["tuiLink", "", "routerLink", "/icon-set", "fragment", "sanitizer"], ["status", "warning", 1, "tui-space_top-4"], ["id", "custom-tool", 3, "content", 6, "heading"], [1, "tui-list", "tui-space_bottom-6"], [1, "tui-list__item"], ["tuiLink", "", "target", "_blank", "href", "https://tiptap.dev/api/introduction"], ["id", "resizable-image", 3, "content", 6, "heading"], ["id", "preview-image", 3, "content", 6, "heading"], ["id", "custom-processing", 3, "content", 6, "heading"], ["id", "draggable-groups", 3, "content", 6, "heading"], ["id", "nested-groups", 3, "content", 6, "heading"], ["id", "upload-images", 3, "content", 6, "heading"], ["new", "", 3, "formControl", "focusable", "exampleText", "readOnly", "tools", "pseudoInvalid", "pseudoFocused", "pseudoHovered"], [3, "content"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "ngModel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "exampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max-height", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tools", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<TuiEditorTool>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], [3, "code"], [1, "tui-space_bottom-5"]], template: function ExampleEditorNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleEditorNewComponent_ng_template_1_Template, 37, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleEditorNewComponent_ng_template_2_Template, 16, 18, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleEditorNewComponent_ng_template_3_Template, 14, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleEditorNewComponent_ng_template_4_Template, 27, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_12__["TuiEditorNewExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_13__["TuiEditorNewExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_14__["TuiEditorNewExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_15__["TuiEditorNewExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_16__["TuiEditorNewExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_17__["TuiEditorNewExample6"], _examples_7_index__WEBPACK_IMPORTED_MODULE_18__["TuiEditorNewExample7"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDemoComponent"], _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_20__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_21__["TuiEditorSocketComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_22__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_23__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_24__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleEditorNewComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleEditorNewComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleEditorNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-editor-new`,
                templateUrl: `./editor-new.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleEditorNewComponent),
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_EXTENSIONS"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["defaultEditorExtensions"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["tiptapEditorStyles"],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/editor-new.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/editor-new/editor-new.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiEditorNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiEditorNewModule", function() { return ExampleTuiEditorNewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _editor_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-new.component */ "./src/modules/components/editor-new/editor-new.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/editor-new/examples/1/index.ts");
/* harmony import */ var _examples_1_smiles_tool_smiles_tool_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/smiles-tool/smiles-tool.module */ "./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.module.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/editor-new/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/editor-new/examples/3/index.ts");
/* harmony import */ var _examples_3_image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/image-preview/image-preview.module */ "./src/modules/components/editor-new/examples/3/image-preview/image-preview.module.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/editor-new/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/editor-new/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/editor-new/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/components/editor-new/examples/7/index.ts");




















class ExampleTuiEditorNewModule {
}
ExampleTuiEditorNewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiEditorNewModule });
ExampleTuiEditorNewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiEditorNewModule_Factory(t) { return new (t || ExampleTuiEditorNewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorNewModule"],
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorSocketModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _examples_1_smiles_tool_smiles_tool_module__WEBPACK_IMPORTED_MODULE_10__["ExampleSmilesToolModule"],
            _examples_3_image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_13__["ImagePreviewExampleModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["tuiGenerateRoutes"])(_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiEditorNewModule, { declarations: [_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiEditorNewExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiEditorNewExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiEditorNewExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiEditorNewExample4"],
        _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiEditorNewExample6"],
        _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiEditorNewExample5"],
        _examples_7__WEBPACK_IMPORTED_MODULE_17__["TuiEditorNewExample7"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorNewModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorSocketModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _examples_1_smiles_tool_smiles_tool_module__WEBPACK_IMPORTED_MODULE_10__["ExampleSmilesToolModule"],
        _examples_3_image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_13__["ImagePreviewExampleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiEditorNewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorNewModule"],
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorSocketModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _examples_1_smiles_tool_smiles_tool_module__WEBPACK_IMPORTED_MODULE_10__["ExampleSmilesToolModule"],
                    _examples_3_image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_13__["ImagePreviewExampleModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["tuiGenerateRoutes"])(_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"])),
                ],
                declarations: [
                    _editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiEditorNewExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiEditorNewExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiEditorNewExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiEditorNewExample4"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiEditorNewExample6"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiEditorNewExample5"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_17__["TuiEditorNewExample7"],
                ],
                exports: [_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorNewComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: importStarterKit, importEmojiExtension, TuiEditorNewExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importStarterKit", function() { return importStarterKit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importEmojiExtension", function() { return importEmojiExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample1", function() { return TuiEditorNewExample1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _smiles_tool_smiles_tool_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smiles-tool/smiles-tool.component */ "./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts");
/* harmony import */ var _addon_editor_components_toolbar_new_toolbar_tool_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/toolbar-new/toolbar-tool.directive */ "../addon-editor/components/toolbar-new/toolbar-tool.directive.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");












function importStarterKit() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts"))).StarterKit;
    });
}
function importEmojiExtension() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return (yield __webpack_require__.e(/*! import() | smiles-tool-emoji-extension */ "smiles-tool-emoji-extension").then(__webpack_require__.bind(null, /*! ./smiles-tool/emoji.extension */ "./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts"))).EmojiExtension;
    });
}
class TuiEditorNewExample1 {
    constructor() {
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorTool"].Undo];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
}
TuiEditorNewExample1.ɵfac = function TuiEditorNewExample1_Factory(t) { return new (t || TuiEditorNewExample1)(); };
TuiEditorNewExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiEditorNewExample1, selectors: [["tui-editor-example-1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_EXTENSIONS"],
                useValue: [importStarterKit(), importEmojiExtension()],
            },
        ])], decls: 7, vars: 2, consts: [["new", "", 1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiToolbarTool", ""], [1, "hint"], ["src", "tuiIconArrowLeft"]], template: function TuiEditorNewExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Smiles are custom tool. Try it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "smiles-tool", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tui-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " click it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _smiles_tool_smiles_tool_component__WEBPACK_IMPORTED_MODULE_7__["ExampleSmilesToolComponent"], _addon_editor_components_toolbar_new_toolbar_tool_directive__WEBPACK_IMPORTED_MODULE_8__["TuiToolbarToolDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__["TuiSvgComponent"]], styles: [".hint[_ngcontent-%COMP%] {\n  color: var(--tui-base-05);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50IHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIuaGludCB7XG4gIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wNSk7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiEditorNewExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-editor-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_EXTENSIONS"],
                        useValue: [importStarterKit(), importEmojiExtension()],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExampleSmilesToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleSmilesToolComponent", function() { return ExampleSmilesToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../core/components/hosted-dropdown/hosted-dropdown.component */ "../core/components/hosted-dropdown/hosted-dropdown.component.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function ExampleSmilesToolComponent_ng_template_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleSmilesToolComponent_ng_template_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const smile_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.insertSmile(smile_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const smile_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", smile_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ExampleSmilesToolComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleSmilesToolComponent_ng_template_3_button_1_Template, 1, 1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activeZone_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiActiveZoneParent", activeZone_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.smiles);
} }
class ExampleSmilesToolComponent {
    constructor(editor) {
        this.editor = editor;
        /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */
        this.smiles = [
            `&#129409;`,
            `&#9200;`,
            `&#9749;`,
            `&#9989;`,
            `&#10060;`,
            `&#10071;`,
            `&#10133;`,
            `&#128064;`,
            `&#128070;`,
            `&#128076;`,
            `&#128522;`,
            `&#128640;`,
        ];
    }
    insertSmile(smile) {
        this.editor
            .getOriginTiptapEditor()
            .chain()
            .focus()
            .insertContent(`<p data-type="emoji">${smile}</p>`)
            .insertContent(` `)
            .run();
    }
}
ExampleSmilesToolComponent.ɵfac = function ExampleSmilesToolComponent_Factory(t) { return new (t || ExampleSmilesToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_1__["TuiTiptapEditorService"])); };
ExampleSmilesToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleSmilesToolComponent, selectors: [["smiles-tool"]], decls: 5, vars: 3, consts: [["tuiDropdownAlign", "left", 1, "t-wrapper", 3, "content"], ["dropdown", ""], ["tuiIconButton", "", "type", "button", "size", "s", "icon", "tuiIconStarLarge", "appearance", "icon", "automation-id", "smiles-tool__button", 1, "tool-button", 3, "pseudoPressed", "focusable"], ["smileDropdown", ""], [1, "smiles", 3, "tuiActiveZoneParent"], ["class", "smile", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], [1, "smile", 3, "innerHTML", "click"]], template: function ExampleSmilesToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-hosted-dropdown", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleSmilesToolComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pseudoPressed", _r0.open)("focusable", _r0.open);
    } }, directives: [_core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["TuiHostedDropdownComponent"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownControllerDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".tool-button[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.tool-button[_ngcontent-%COMP%]:hover {\n  background: var(--tui-secondary-hover);\n}\n.smiles[_ngcontent-%COMP%] {\n  max-width: 18rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.smile[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  flex: 1 0 21%;\n  cursor: pointer;\n  border-radius: var(--tui-radius-s);\n  font: var(--tui-font-heading-4);\n  padding: 1rem;\n}\n.smile[_ngcontent-%COMP%]:hover {\n  background: var(--tui-secondary-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzEvc21pbGVzLXRvb2wvc21pbGVzLXRvb2wuc3R5bGVzLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZWRpdG9yLW5ldy9leGFtcGxlcy8xL3NtaWxlcy10b29sL3NtaWxlcy10b29sLnN0eWxlcy5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUNtT0ksK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0FGN05KO0FDTEk7RUFDSSxzQ0FBQTtBRE9SO0FDSEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBREtKO0FDRkE7RUM2Qkksd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFpTEEsK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEbE5BLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7QURXSjtBQ1RJO0VBQ0ksc0NBQUE7QURXUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZWRpdG9yLW5ldy9leGFtcGxlcy8xL3NtaWxlcy10b29sL3NtaWxlcy10b29sLnN0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnRvb2wtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi50b29sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWNvbmRhcnktaG92ZXIpO1xufVxuLnNtaWxlcyB7XG4gIG1heC13aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc21pbGUge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGZsZXg6IDEgMCAyMSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1zKTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy00KTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zbWlsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWNvbmRhcnktaG92ZXIpO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4udG9vbC1idXR0b24ge1xuICAgIC50cmFuc2l0aW9uKGJhY2tncm91bmQpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWNvbmRhcnktaG92ZXIpO1xuICAgIH1cbn1cblxuLnNtaWxlcyB7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc21pbGUge1xuICAgIC5jbGVhcmJ0bigpO1xuICAgIC50cmFuc2l0aW9uKGJhY2tncm91bmQpO1xuICAgIGZsZXg6IDEgMCAyMSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtcyk7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy00KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWNvbmRhcnktaG92ZXIpO1xuICAgIH1cbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleSmilesToolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `smiles-tool`,
                templateUrl: `./smiles-tool.template.html`,
                styleUrls: [`./smiles-tool.styles.less`],
            }]
    }], function () { return [{ type: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_1__["TuiTiptapEditorService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_1__["TuiTiptapEditorService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ExampleSmilesToolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleSmilesToolModule", function() { return ExampleSmilesToolModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _smiles_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smiles-tool.component */ "./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts");






class ExampleSmilesToolModule {
}
ExampleSmilesToolModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleSmilesToolModule });
ExampleSmilesToolModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleSmilesToolModule_Factory(t) { return new (t || ExampleSmilesToolModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHostedDropdownModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiActiveZoneModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownControllerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleSmilesToolModule, { declarations: [_smiles_tool_component__WEBPACK_IMPORTED_MODULE_4__["ExampleSmilesToolComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHostedDropdownModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiActiveZoneModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownControllerModule"]], exports: [_smiles_tool_component__WEBPACK_IMPORTED_MODULE_4__["ExampleSmilesToolComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleSmilesToolModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHostedDropdownModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiActiveZoneModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownControllerModule"],
                ],
                declarations: [_smiles_tool_component__WEBPACK_IMPORTED_MODULE_4__["ExampleSmilesToolComponent"]],
                exports: [_smiles_tool_component__WEBPACK_IMPORTED_MODULE_4__["ExampleSmilesToolComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample2", function() { return TuiEditorNewExample2; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");














class TuiEditorNewExample2 {
    constructor(imageLoader, http, destroy$) {
        this.imageLoader = imageLoader;
        this.http = http;
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorTool"].Undo, _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TuiEditorTool"].Img];
        this.base64Image$ = this.http
            .get(`assets/images/lumberjack.png`, { responseType: `blob` })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(file => this.imageLoader(file)));
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](``);
        this.base64Image$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(destroy$)).subscribe(src => {
            this.control.patchValue(`<img data-type="image-editor" src="${src}" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`);
        });
    }
}
TuiEditorNewExample2.ɵfac = function TuiEditorNewExample2_Factory(t) { return new (t || TuiEditorNewExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_IMAGE_LOADER"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyService"])); };
TuiEditorNewExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiEditorNewExample2, selectors: [["tui-editor-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyService"],
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_EXTENSIONS"],
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: (injector) => [
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(m => m.StarterKit),
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(m => m.createImageEditorExtension(injector)),
                ],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["tiptapEditorStyles"],
            },
        ])], decls: 4, vars: 3, consts: [["new", "", 1, "editor", 3, "formControl", "tools"], [3, "content"]], template: function TuiEditorNewExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "tui-editor-socket", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_9__["TuiEditorSocketComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2VkaXRvci1uZXcvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgbWluLWhlaWdodDogMzByZW07XG59XG4iLCIuZWRpdG9yIHtcbiAgbWluLWhlaWdodDogMzByZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiEditorNewExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-editor-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyService"],
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_EXTENSIONS"],
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                        useFactory: (injector) => [
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(m => m.StarterKit),
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(m => m.createImageEditorExtension(injector)),
                        ],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["tiptapEditorStyles"],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_5__["TUI_IMAGE_LOADER"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
            }] }, { type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ImagePreviewExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewExampleComponent", function() { return ImagePreviewExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../addon-preview/components/preview/preview.component */ "../addon-preview/components/preview/preview.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../addon-preview/components/preview/preview-action/preview-action.directive */ "../addon-preview/components/preview/preview-action/preview-action.directive.ts");










const _c0 = ["previewImages"];
function ImagePreviewExampleComponent_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImagePreviewExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-preview", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagePreviewExampleComponent_ng_template_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagePreviewExampleComponent_ng_template_0_Template_button_click_2_listener() { const dialog_r2 = ctx.$implicit; return dialog_r2.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rotatable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.image);
} }
class ImagePreviewExampleComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    showImage(image) {
        this.image = image;
        this.dialogService.open(this.template || ``).subscribe();
    }
}
ImagePreviewExampleComponent.ɵfac = function ImagePreviewExampleComponent_Factory(t) { return new (t || ImagePreviewExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"])); };
ImagePreviewExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagePreviewExampleComponent, selectors: [["image-preview-example"]], viewQuery: function ImagePreviewExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 2, vars: 0, consts: [["previewImages", ""], [3, "rotatable"], ["loading", "lazy", "alt", "", "class", "t-image-preview", 3, "src", 4, "ngIf"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], ["loading", "lazy", "alt", "", 1, "t-image-preview", 3, "src"]], template: function ImagePreviewExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagePreviewExampleComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__["TuiPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_7__["TuiPreviewActionDirective"]], styles: [".t-image-preview[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzMvaW1hZ2UtcHJldmlldy9pbWFnZS1wcmV2aWV3LnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZWRpdG9yLW5ldy9leGFtcGxlcy8zL2ltYWdlLXByZXZpZXcvaW1hZ2UtcHJldmlldy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzMvaW1hZ2UtcHJldmlldy9pbWFnZS1wcmV2aWV3LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudC1pbWFnZS1wcmV2aWV3IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi50LWltYWdlLXByZXZpZXcge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePreviewExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `image-preview-example`,
                templateUrl: `./image-preview.template.html`,
                styleUrls: [`./image-preview.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"]]
            }] }]; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`previewImages`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/3/image-preview/image-preview.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/3/image-preview/image-preview.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ImagePreviewExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewExampleModule", function() { return ImagePreviewExampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _image_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-preview.component */ "./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts");








class ImagePreviewExampleModule {
}
ImagePreviewExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ImagePreviewExampleModule });
ImagePreviewExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ImagePreviewExampleModule_Factory(t) { return new (t || ImagePreviewExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["TuiPreviewModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
        ],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImagePreviewExampleModule, { declarations: [_image_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["TuiPreviewModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"]], exports: [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
        _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
        _image_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImagePreviewExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["TuiPreviewModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
                ],
                exports: [
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
                    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_2__["TuiEditorImagePreviewModule"],
                    _image_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewExampleComponent"],
                ],
                declarations: [_image_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewExampleComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/3/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/3/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample3", function() { return TuiEditorNewExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");
/* harmony import */ var _addon_editor_directives_image_preview_image_preview_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-editor/directives/image-preview/image-preview.directive */ "../addon-editor/directives/image-preview/image-preview.directive.ts");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-preview/image-preview.component */ "./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts");












class TuiEditorNewExample3 {
    constructor() {
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Undo, _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Img];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.control.patchValue(`<p>Small image</p><img data-type="image-editor" src="assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="assets/images/big-wallpaper.jpg" width="500">`);
    }
}
TuiEditorNewExample3.ɵfac = function TuiEditorNewExample3_Factory(t) { return new (t || TuiEditorNewExample3)(); };
TuiEditorNewExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiEditorNewExample3, selectors: [["tui-editor-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                useFactory: (injector) => [
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(m => m.StarterKit),
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(m => m.createImageEditorExtension(injector)),
                ],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
            },
        ])], decls: 6, vars: 3, consts: [["new", "", 1, "editor", 3, "formControl", "tools"], [3, "content", "imagePreview"], ["preview", ""]], template: function TuiEditorNewExample3_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-editor-socket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imagePreview", function TuiEditorNewExample3_Template_tui_editor_socket_imagePreview_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.showImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "image-preview-example", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_7__["TuiEditorSocketComponent"], _addon_editor_directives_image_preview_image_preview_directive__WEBPACK_IMPORTED_MODULE_8__["TuiEditorImagePreviewDirective"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_9__["ImagePreviewExampleComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2VkaXRvci1uZXcvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgbWluLWhlaWdodDogMzByZW07XG59XG4iLCIuZWRpdG9yIHtcbiAgbWluLWhlaWdodDogMzByZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiEditorNewExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-editor-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                        useFactory: (injector) => [
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(m => m.StarterKit),
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(m => m.createImageEditorExtension(injector)),
                        ],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/4/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/4/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample4", function() { return TuiEditorNewExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");









class TuiEditorNewExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](
        // Legacy HTML markup from DB
        `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
}
TuiEditorNewExample4.ɵfac = function TuiEditorNewExample4_Factory(t) { return new (t || TuiEditorNewExample4)(); };
TuiEditorNewExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiEditorNewExample4, selectors: [["tui-editor-example-4"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["defaultEditorExtensions"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_CONTENT_PROCESSOR"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tuiLegacyEditorConverter"],
            },
        ])], decls: 9, vars: 3, consts: [["new", "", 1, "editor", 3, "formControl"], [1, "socket", 3, "content"]], template: function TuiEditorNewExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Placeholder\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-editor-socket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_5__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_6__["TuiEditorSocketComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n.socket[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzQvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2VkaXRvci1uZXcvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG59XG5cbi5zb2NrZXQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbiIsIi5lZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAyMHJlbTtcbn1cbi5zb2NrZXQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiEditorNewExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-editor-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["defaultEditorExtensions"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_CONTENT_PROCESSOR"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tuiLegacyEditorConverter"],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/5/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/5/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample5", function() { return TuiEditorNewExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");









class TuiEditorNewExample5 {
    constructor() {
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].Undo, _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TuiEditorTool"].Group];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.control.patchValue(`<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>`);
    }
}
TuiEditorNewExample5.ɵfac = function TuiEditorNewExample5_Factory(t) { return new (t || TuiEditorNewExample5)(); };
TuiEditorNewExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiEditorNewExample5, selectors: [["tui-editor-example-5"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"],
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["tiptapEditorStyles"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_EXTENSIONS"],
                useValue: [
                    __webpack_require__.e(/*! import() | tiptap-starter-kit */ "tiptap-starter-kit").then(__webpack_require__.bind(null, /*! @tiptap/starter-kit */ "../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js")).then(({ default: module }) => module),
                    __webpack_require__.e(/*! import() | tiptap-extension-placeholder */ "tiptap-extension-placeholder").then(__webpack_require__.bind(null, /*! @tiptap/extension-placeholder */ "../../node_modules/@tiptap/extension-placeholder/dist/tiptap-extension-placeholder.esm.js")).then(({ Placeholder }) => Placeholder.configure({
                        emptyNodeClass: `t-editor-placeholder`,
                        placeholder: `Type '/' for command`,
                        includeChildren: true,
                    })),
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/group */ "../addon-editor/extensions/group/index.ts")).then(({ createGroupExtension }) => createGroupExtension({ nested: false, createOnEnter: true })),
                ],
            },
        ])], decls: 8, vars: 4, consts: [["new", "", 1, "notion-editor", 3, "formControl", "tools"], [3, "content"]], template: function TuiEditorNewExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-editor-socket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_5__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_6__["TuiEditorSocketComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiEditorNewExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-editor-example-5`,
                templateUrl: `./index.html`,
                providers: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"],
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["tiptapEditorStyles"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_3__["TUI_EDITOR_EXTENSIONS"],
                        useValue: [
                            __webpack_require__.e(/*! import() | tiptap-starter-kit */ "tiptap-starter-kit").then(__webpack_require__.bind(null, /*! @tiptap/starter-kit */ "../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js")).then(({ default: module }) => module),
                            __webpack_require__.e(/*! import() | tiptap-extension-placeholder */ "tiptap-extension-placeholder").then(__webpack_require__.bind(null, /*! @tiptap/extension-placeholder */ "../../node_modules/@tiptap/extension-placeholder/dist/tiptap-extension-placeholder.esm.js")).then(({ Placeholder }) => Placeholder.configure({
                                emptyNodeClass: `t-editor-placeholder`,
                                placeholder: `Type '/' for command`,
                                includeChildren: true,
                            })),
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/group */ "../addon-editor/extensions/group/index.ts")).then(({ createGroupExtension }) => createGroupExtension({ nested: false, createOnEnter: true })),
                        ],
                    },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/6/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/6/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample6", function() { return TuiEditorNewExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");










class TuiEditorNewExample6 {
    constructor() {
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Undo, _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Group];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.control.patchValue(`<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>`);
    }
}
TuiEditorNewExample6.ɵfac = function TuiEditorNewExample6_Factory(t) { return new (t || TuiEditorNewExample6)(); };
TuiEditorNewExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiEditorNewExample6, selectors: [["tui-editor-example-6"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                useValue: [
                    __webpack_require__.e(/*! import() | tiptap-starter-kit */ "tiptap-starter-kit").then(__webpack_require__.bind(null, /*! @tiptap/starter-kit */ "../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js")).then(({ default: module }) => module),
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/group */ "../addon-editor/extensions/group/index.ts")).then(({ createGroupExtension }) => createGroupExtension({
                        draggable: false,
                        // @note: you can override css styles with your own classes
                        groupNodeClass: `group`,
                        groupPointerNodeClass: ``,
                    })),
                ],
            },
        ])], decls: 8, vars: 4, consts: [["new", "", 1, "editor", 3, "formControl", "tools"], [3, "content"]], template: function TuiEditorNewExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-editor-socket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_6__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_7__["TuiEditorSocketComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n.editor[_ngcontent-%COMP%]     .group {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzYvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzYvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURGQTtFQUlRLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5RUFBQTtBQ0NSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzYvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Ige1xuICAgIG1pbi1oZWlnaHQ6IDMwcmVtO1xuXG4gICAgOjpuZy1kZWVwIC5ncm91cCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxufVxuIiwiLmVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xufVxuLmVkaXRvciA6Om5nLWRlZXAgLmdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiEditorNewExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-editor-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                        useValue: [
                            __webpack_require__.e(/*! import() | tiptap-starter-kit */ "tiptap-starter-kit").then(__webpack_require__.bind(null, /*! @tiptap/starter-kit */ "../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js")).then(({ default: module }) => module),
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/group */ "../addon-editor/extensions/group/index.ts")).then(({ createGroupExtension }) => createGroupExtension({
                                draggable: false,
                                // @note: you can override css styles with your own classes
                                groupNodeClass: `group`,
                                groupPointerNodeClass: ``,
                            })),
                        ],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/7/image-loader.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/7/image-loader.ts ***!
  \**********************************************************************/
/*! exports provided: imageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLoader", function() { return imageLoader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


function imageLoader(service) {
    return (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(fileReader, `load`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => String(fileReader.result)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(base64 => service.save(base64)));
    };
}


/***/ }),

/***/ "./src/modules/components/editor-new/examples/7/imgbb.service.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/7/imgbb.service.ts ***!
  \***********************************************************************/
/*! exports provided: ImgbbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgbbService", function() { return ImgbbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






class ImgbbService {
    static createBody(base64) {
        const formData = new FormData();
        formData.append(`image`, base64.split(`,`).pop() || ``);
        return new URLSearchParams(formData);
    }
    save(base64) {
        const { host, apiKey, expiration } = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imgbb;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(fetch(`${host}/1/upload?key=${apiKey}&expiration=${expiration}`, {
            method: `POST`,
            body: ImgbbService.createBody(base64),
            headers: { 'Content-Type': `application/x-www-form-urlencoded` },
        }).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return response.json(); }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data.url));
    }
}
ImgbbService.ɵfac = function ImgbbService_Factory(t) { return new (t || ImgbbService)(); };
ImgbbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImgbbService, factory: ImgbbService.ɵfac, providedIn: `root` });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgbbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: `root`,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/editor-new/examples/7/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/7/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiEditorNewExample7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiEditorNewExample7", function() { return TuiEditorNewExample7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-editor */ "../addon-editor/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-loader */ "./src/modules/components/editor-new/examples/7/image-loader.ts");
/* harmony import */ var _imgbb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgbb.service */ "./src/modules/components/editor-new/examples/7/imgbb.service.ts");
/* harmony import */ var _addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-new/editor-new.component */ "../addon-editor/components/editor-new/editor-new.component.ts");
/* harmony import */ var _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-editor/components/editor-socket/editor-socket.component */ "../addon-editor/components/editor-socket/editor-socket.component.ts");












class TuiEditorNewExample7 {
    constructor() {
        this.builtInTools = [_taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Undo, _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TuiEditorTool"].Img];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.control.patchValue(`<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`);
    }
}
TuiEditorNewExample7.ɵfac = function TuiEditorNewExample7_Factory(t) { return new (t || TuiEditorNewExample7)(); };
TuiEditorNewExample7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiEditorNewExample7, selectors: [["tui-editor-example-7"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                useFactory: (injector) => [
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(({ StarterKit }) => StarterKit),
                    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(({ createImageEditorExtension }) => createImageEditorExtension(injector)),
                ],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_MIN_IMAGE_WIDTH"],
                useValue: 150,
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_MAX_IMAGE_WIDTH"],
                useValue: 400,
            },
            {
                provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_IMAGE_LOADER"],
                useFactory: _image_loader__WEBPACK_IMPORTED_MODULE_6__["imageLoader"],
                deps: [_imgbb_service__WEBPACK_IMPORTED_MODULE_7__["ImgbbService"]],
            },
        ])], decls: 8, vars: 4, consts: [["new", "", 1, "editor", 3, "formControl", "tools"], [3, "content"]], template: function TuiEditorNewExample7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-editor-socket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("tools", ctx.builtInTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_addon_editor_components_editor_new_editor_new_component__WEBPACK_IMPORTED_MODULE_8__["TuiEditorNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_editor_components_editor_socket_editor_socket_component__WEBPACK_IMPORTED_MODULE_9__["TuiEditorSocketComponent"]], styles: [".editor[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzcvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9lZGl0b3ItbmV3L2V4YW1wbGVzLzcvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2VkaXRvci1uZXcvZXhhbXBsZXMvNy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICAgbWluLWhlaWdodDogMzByZW07XG59XG4iLCIuZWRpdG9yIHtcbiAgbWluLWhlaWdodDogMzByZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiEditorNewExample7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-editor-example-7`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"],
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_EXTENSIONS"],
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                        useFactory: (injector) => [
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/starter-kit */ "../addon-editor/extensions/starter-kit/index.ts")).then(({ StarterKit }) => StarterKit),
                            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @taiga-ui/addon-editor/extensions/image-editor */ "../addon-editor/extensions/image-editor/index.ts")).then(({ createImageEditorExtension }) => createImageEditorExtension(injector)),
                        ],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_STYLES"],
                        useValue: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["tiptapEditorStyles"],
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_MIN_IMAGE_WIDTH"],
                        useValue: 150,
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_EDITOR_MAX_IMAGE_WIDTH"],
                        useValue: 400,
                    },
                    {
                        provide: _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_4__["TUI_IMAGE_LOADER"],
                        useFactory: _image_loader__WEBPACK_IMPORTED_MODULE_6__["imageLoader"],
                        deps: [_imgbb_service__WEBPACK_IMPORTED_MODULE_7__["ImgbbService"]],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-editor-new-editor-new-module.js.map