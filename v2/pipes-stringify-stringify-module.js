(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-stringify-stringify-module"],{

/***/ "./src/modules/pipes/stringify/examples/1/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/pipes/stringify/examples/1/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiStringifyExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiStringifyExample1", function() { return TuiStringifyExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_pipes_stringify_stringify_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/pipes/stringify/stringify.pipe */ "../kit/pipes/stringify/stringify.pipe.ts");
/* harmony import */ var _kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/pipes/filter-by-input/filter-by-input-with.pipe */ "../kit/pipes/filter-by-input/filter-by-input-with.pipe.ts");
/* harmony import */ var _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/pipes/stringify-content/stringify-content.pipe */ "../kit/pipes/stringify-content/stringify-content.pipe.ts");












function TuiStringifyExample1_tui_data_list_wrapper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiFilterByInputWith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiStringify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tuiStringifyContent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "tuiStringify");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx_r0.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "name")))("itemContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "name")));
} }
class TuiStringifyExample1 {
    constructor() {
        this.value = null;
        this.items = [
            {
                name: `John Cleese`,
                role: `Black Knight`,
            },
            {
                name: `Eric Idle`,
                role: `Dead collector`,
            },
        ];
    }
}
TuiStringifyExample1.ɵfac = function TuiStringifyExample1_Factory(t) { return new (t || TuiStringifyExample1)(); };
TuiStringifyExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiStringifyExample1, selectors: [["tui-stringify-example1"]], decls: 4, vars: 4, consts: [[1, "b-form", 3, "stringify", "ngModel", "ngModelChange"], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"]], template: function TuiStringifyExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiStringifyExample1_Template_tui_combo_box_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiStringify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pick your guy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiStringifyExample1_tui_data_list_wrapper_3_Template, 5, 11, "tui-data-list-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stringify", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "name"))("ngModel", ctx.value);
    } }, directives: [_kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperComponent"]], pipes: [_kit_pipes_stringify_stringify_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiStringifyPipe"], _kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_9__["TuiFilterByInputWithPipe"], _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_10__["TuiStringifyContentPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiStringifyExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-stringify-example1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/stringify/stringify.component.ts":
/*!************************************************************!*\
  !*** ./src/modules/pipes/stringify/stringify.component.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiStringifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStringifyComponent", function() { return ExampleTuiStringifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/pipes/stringify/examples/1/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");











var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7469533319471669743$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__4 = goog.getMsg(" Pipe that creates {$startTagCode}TuiStringHandler{$closeTagCode} by given key. {$startTagTuiDocExample}{$startTagTuiStringifyExample1}{$closeTagTuiStringifyExample1}{$startTagTuiNotification} With {$startLink}{$startTagCode}FilterByInput{$closeTagCode}{$closeLink} and {$startLink_1}{$startTagCode}StringifyContent{$closeTagCode}{$closeLink} pipes. {$closeTagTuiNotification}{$closeTagTuiDocExample}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]", "startTagTuiDocExample": "\uFFFD#2\uFFFD", "startTagTuiStringifyExample1": "\uFFFD#4\uFFFD", "closeTagTuiStringifyExample1": "\uFFFD/#4\uFFFD", "startTagTuiNotification": "\uFFFD#5\uFFFD", "startLink": "\uFFFD#6\uFFFD", "closeLink": "[\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]", "startLink_1": "\uFFFD#8\uFFFD", "closeTagTuiNotification": "\uFFFD/#5\uFFFD", "closeTagTuiDocExample": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7469533319471669743$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__4;
}
else {
    I18N_0 = $localize `:␟9b7a1fb74683759045af4bab18edee9522f6421f␟7469533319471669743: Pipe that creates ${"[\uFFFD#1\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:TuiStringHandler${"[\uFFFD/#1\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: by given key. ${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_STRINGIFY_EXAMPLE1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_STRINGIFY_EXAMPLE1:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_NOTIFICATION: With ${"\uFFFD#6\uFFFD"}:START_LINK:${"[\uFFFD#1\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:FilterByInput${"[\uFFFD/#1\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#8\uFFFD"}:START_LINK_1:${"[\uFFFD#1\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:StringifyContent${"[\uFFFD/#1\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_LINK: pipes. ${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiStringifyComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-stringify-example1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7586728798520122256$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__6 = goog.getMsg(" Import {$startTagCode}TuiStringifyPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_7586728798520122256$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟42c7f128e318e91bcd48cd79717d50ef50de6bf6␟7586728798520122256: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStringifyPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__8 = goog.getMsg("Use pipe in template:");
    I18N_7 = MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
}
function ExampleTuiStringifyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiStringifyComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/1/index.html")),
        };
    }
}
ExampleTuiStringifyComponent.ɵfac = function ExampleTuiStringifyComponent_Factory(t) { return new (t || ExampleTuiStringifyComponent)(); };
ExampleTuiStringifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiStringifyComponent, selectors: [["example-tui-stringify"]], decls: 3, vars: 0, consts: [["header", "Stringify", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "base", 3, "content", 6, "heading"], [1, "tui-space_top-4"], ["tuiLink", "", "routerLink", "/pipes/filter-by-input"], ["tuiLink", "", "routerLink", "/pipes/stringify-content"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiStringifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiStringifyComponent_ng_template_1_Template, 10, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiStringifyComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiStringifyExample1"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiStringifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-stringify`,
                templateUrl: `./stringify.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/stringify/stringify.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/pipes/stringify/stringify.module.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiStringifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStringifyModule", function() { return ExampleTuiStringifyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/pipes/stringify/examples/1/index.ts");
/* harmony import */ var _stringify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stringify.component */ "./src/modules/pipes/stringify/stringify.component.ts");











class ExampleTuiStringifyModule {
}
ExampleTuiStringifyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiStringifyModule });
ExampleTuiStringifyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiStringifyModule_Factory(t) { return new (t || ExampleTuiStringifyModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiStringifyModule, { declarations: [_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiStringifyExample1"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiStringifyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"])),
                ],
                declarations: [_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiStringifyExample1"]],
                exports: [_stringify_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-stringify-stringify-module.js.map