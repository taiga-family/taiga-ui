(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-stringify-content-stringify-content-module"],{

/***/ "./src/modules/pipes/stringify-content/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/pipes/stringify-content/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiStringifyContentExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiStringifyContentExample1", function() { return TuiStringifyContentExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.component */ "../kit/components/combo-box/combo-box.component.ts");
/* harmony import */ var _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/combo-box/combo-box.directive */ "../kit/components/combo-box/combo-box.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/pipes/filter-by-input/filter-by-input-with.pipe */ "../kit/pipes/filter-by-input/filter-by-input-with.pipe.ts");
/* harmony import */ var _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/pipes/stringify-content/stringify-content.pipe */ "../kit/pipes/stringify-content/stringify-content.pipe.ts");











function TuiStringifyContentExample1_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiFilterByInputWith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiStringifyContent");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx_r0.items, ctx_r0.stringify))("itemContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.stringify));
} }
class TuiStringifyContentExample1 {
    constructor() {
        this.value = null;
        this.items = [
            {
                name: `John`,
                surname: `Cleese`,
            },
            {
                name: `Eric`,
                surname: `Idle`,
            },
        ];
        this.stringify = ({ name, surname }) => `${name} ${surname}`;
    }
}
TuiStringifyContentExample1.ɵfac = function TuiStringifyContentExample1_Factory(t) { return new (t || TuiStringifyContentExample1)(); };
TuiStringifyContentExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiStringifyContentExample1, selectors: [["tui-stringify-content-example1"]], decls: 3, vars: 2, consts: [[1, "b-form", 3, "stringify", "ngModel", "ngModelChange"], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"]], template: function TuiStringifyContentExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-combo-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiStringifyContentExample1_Template_tui_combo_box_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pick your guy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiStringifyContentExample1_tui_data_list_wrapper_2_Template, 3, 7, "tui-data-list-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stringify", ctx.stringify)("ngModel", ctx.value);
    } }, directives: [_kit_components_combo_box_combo_box_component__WEBPACK_IMPORTED_MODULE_3__["TuiComboBoxComponent"], _kit_components_combo_box_combo_box_directive__WEBPACK_IMPORTED_MODULE_4__["TuiComboBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperComponent"]], pipes: [_kit_pipes_filter_by_input_filter_by_input_with_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiFilterByInputWithPipe"], _kit_pipes_stringify_content_stringify_content_pipe__WEBPACK_IMPORTED_MODULE_9__["TuiStringifyContentPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiStringifyContentExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-stringify-content-example1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/stringify-content/stringify-content.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/pipes/stringify-content/stringify-content.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleTuiStringifyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStringifyContentComponent", function() { return ExampleTuiStringifyContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/pipes/stringify-content/examples/1/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");











var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2546706499801111643$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__4 = goog.getMsg(" Pipe that turns {$startTagCode}TuiStringHandler{$closeTagCode} into content that works with {$startTagCode}$implicit{$closeTagCode} . {$startTagTuiDocExample}{$startTagTuiStringifyContentExample1}{$closeTagTuiStringifyContentExample1}{$startTagTuiNotification} With {$startLink}{$startTagCode}FilterByInput{$closeTagCode}{$closeLink} pipe. {$closeTagTuiNotification}{$closeTagTuiDocExample}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#8\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#8\uFFFD]", "startTagTuiDocExample": "\uFFFD#3\uFFFD", "startTagTuiStringifyContentExample1": "\uFFFD#5\uFFFD", "closeTagTuiStringifyContentExample1": "\uFFFD/#5\uFFFD", "startTagTuiNotification": "\uFFFD#6\uFFFD", "startLink": "\uFFFD#7\uFFFD", "closeLink": "\uFFFD/#7\uFFFD", "closeTagTuiNotification": "\uFFFD/#6\uFFFD", "closeTagTuiDocExample": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2546706499801111643$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__4;
}
else {
    I18N_0 = $localize `:␟2d3631bb68ec619b2e9e0f87012bb2bc97c6dc09␟2546706499801111643: Pipe that turns ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:TuiStringHandler${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE: into content that works with ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE: . ${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_STRINGIFY_CONTENT_EXAMPLE1:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_STRINGIFY_CONTENT_EXAMPLE1:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_NOTIFICATION: With ${"\uFFFD#7\uFFFD"}:START_LINK:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:FilterByInput${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#7\uFFFD"}:CLOSE_LINK: pipe. ${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiStringifyContentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-stringify-content-example1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_709866116440590755$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__6 = goog.getMsg(" Import {$startTagCode}TuiStringifyContentPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_709866116440590755$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟7d1a24adf6296388bdf7d01c1da31266e7449b8a␟709866116440590755: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStringifyContentPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__8 = goog.getMsg("Use pipe in template:");
    I18N_7 = MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
}
function ExampleTuiStringifyContentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiStringifyContentComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/1/index.html")),
        };
    }
}
ExampleTuiStringifyContentComponent.ɵfac = function ExampleTuiStringifyContentComponent_Factory(t) { return new (t || ExampleTuiStringifyContentComponent)(); };
ExampleTuiStringifyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiStringifyContentComponent, selectors: [["example-tui-stringify-content"]], decls: 3, vars: 0, consts: [["header", "StringifyContent", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "base", 3, "content", 6, "heading"], [1, "b-form", "tui-space_top-4"], ["tuiLink", "", "routerLink", "/pipes/filter-by-input"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiStringifyContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiStringifyContentComponent_ng_template_1_Template, 9, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiStringifyContentComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiStringifyContentExample1"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiStringifyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-stringify-content`,
                templateUrl: `./stringify-content.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/stringify-content/stringify-content.module.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/pipes/stringify-content/stringify-content.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExampleTuiStringifyContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStringifyContentModule", function() { return ExampleTuiStringifyContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/pipes/stringify-content/examples/1/index.ts");
/* harmony import */ var _stringify_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stringify-content.component */ "./src/modules/pipes/stringify-content/stringify-content.component.ts");











class ExampleTuiStringifyContentModule {
}
ExampleTuiStringifyContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiStringifyContentModule });
ExampleTuiStringifyContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiStringifyContentModule_Factory(t) { return new (t || ExampleTuiStringifyContentModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiStringifyContentModule, { declarations: [_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiStringifyContentExample1"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiStringifyContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterByInputPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiStringifyContentPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiComboBoxModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"])),
                ],
                declarations: [_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiStringifyContentExample1"]],
                exports: [_stringify_content_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStringifyContentComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-stringify-content-stringify-content-module.js.map