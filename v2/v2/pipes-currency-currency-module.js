(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-currency-currency-module"],{

/***/ "./src/modules/pipes/currency/currency.component.ts":
/*!**********************************************************!*\
  !*** ./src/modules/pipes/currency/currency.component.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCurrencyComponent", function() { return ExampleTuiCurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/currency/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/pipes/currency/examples/2/component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-commerce/pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");



















var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2572384218273688291$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__5 = goog.getMsg("With Input");
    I18N_4 = MSG_EXTERNAL_2572384218273688291$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟96bdc0b7f954e93557510ae70b833743c300d653␟2572384218273688291:With Input`;
}
const _c6 = ["heading", I18N_4];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1811243633647313273$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__7 = goog.getMsg(" Pipe for transforming number into money. It is usually used with {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink}{$startTagTuiDocExample}{$startTagTuiCurrencyExample1}{$closeTagTuiCurrencyExample1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiCurrencyExample2}{$closeTagTuiCurrencyExample2}{$closeTagTuiDocExample}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagTuiDocExample": "\uFFFD#3\uFFFD", "startTagTuiCurrencyExample1": "\uFFFD#5\uFFFD", "closeTagTuiCurrencyExample1": "\uFFFD/#5\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#3\uFFFD|\uFFFD/#6\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#6\uFFFD", "startTagTuiCurrencyExample2": "\uFFFD#8\uFFFD", "closeTagTuiCurrencyExample2": "\uFFFD/#8\uFFFD" });
    I18N_0 = MSG_EXTERNAL_1811243633647313273$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__7;
}
else {
    I18N_0 = $localize `:␟c9d1e275ce56cedba8fb6c09babe88f7db78b1c9␟1811243633647313273: Pipe for transforming number into money. It is usually used with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_CURRENCY_EXAMPLE1:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE1:${"[\uFFFD/#3\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_CURRENCY_EXAMPLE2:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE2:${"[\uFFFD/#3\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiCurrencyComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-currency-example1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-currency-example2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
function ExampleTuiCurrencyComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-number", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Type a sum ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("postfix", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r3.currency));
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1951189859517522583$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS___9 = goog.getMsg(" Currency symbol ");
    I18N_8 = MSG_EXTERNAL_1951189859517522583$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟530c774891e15083e0ccaeafe4c297a539edf552␟1951189859517522583: Currency symbol `;
}
function ExampleTuiCurrencyComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
function ExampleTuiCurrencyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-demo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCurrencyComponent_ng_template_2_ng_template_2_Template, 3, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCurrencyComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCurrencyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.currency = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.currencyVariants)("documentationPropertyValue", ctx_r1.currency);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_960347934321337844$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiCurrencyPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_10 = MSG_EXTERNAL_960347934321337844$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟1bad6b65fccb2e60efe1ce559d3436a49cf19565␟960347934321337844: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCurrencyPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3015667190571581067$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__13 = goog.getMsg("Use pipe in template with input:");
    I18N_12 = MSG_EXTERNAL_3015667190571581067$$SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟0ea7f0392ec03341377efee339ad5f8d8de0d93d␟3015667190571581067:Use pipe in template with input:`;
}
function ExampleTuiCurrencyComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiCurrencyComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/import/insert-template.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-template-html */ "!!raw-loader!-examples-1-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/1/template.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-component-ts */ "!!raw-loader!-examples-2-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-template-html */ "!!raw-loader!-examples-2-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/template.html")),
        };
        this.currencyVariants = [null, 826, 840, `EUR`, `RUB`, `UGX`, `USD`];
        this.currency = this.currencyVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](6432, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
}
ExampleTuiCurrencyComponent.ɵfac = function ExampleTuiCurrencyComponent_Factory(t) { return new (t || ExampleTuiCurrencyComponent)(); };
ExampleTuiCurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCurrencyComponent, selectors: [["example-tui-currency"]], decls: 4, vars: 0, consts: [["header", "Currency", "package", "ADDON-COMMERCE", "path", "addon-commerce/pipes/currency.pipe.ts"], ["pageTab", ""], ["tuiLink", "", "routerLink", "/components/input-number"], ["id", "base", 3, "content", 6, "heading"], ["id", "withInput", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "currency", "documentationPropertyMode", "input", "documentationPropertyType", "TuiCurrencyVariants", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "postfix"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCurrencyComponent_ng_template_1_Template, 9, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCurrencyComponent_ng_template_2_Template, 4, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCurrencyComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_8__["TuiCurrencyExample1"], _examples_2_component__WEBPACK_IMPORTED_MODULE_9__["TuiCurrencyExample2"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], pipes: [_addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiCurrencyPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-currency`,
                templateUrl: `./currency.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/currency/currency.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/pipes/currency/currency.module.ts ***!
  \*******************************************************/
/*! exports provided: ExampleTuiCurrencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCurrencyModule", function() { return ExampleTuiCurrencyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./currency.component */ "./src/modules/pipes/currency/currency.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/currency/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/pipes/currency/examples/2/component.ts");













class ExampleTuiCurrencyModule {
}
ExampleTuiCurrencyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCurrencyModule });
ExampleTuiCurrencyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCurrencyModule_Factory(t) { return new (t || ExampleTuiCurrencyModule)(); }, imports: [[
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCurrencyModule, { declarations: [_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"], _examples_2_component__WEBPACK_IMPORTED_MODULE_10__["TuiCurrencyExample2"], _examples_1_component__WEBPACK_IMPORTED_MODULE_9__["TuiCurrencyExample1"]], imports: [_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCurrencyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"])),
                ],
                declarations: [_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"], _examples_2_component__WEBPACK_IMPORTED_MODULE_10__["TuiCurrencyExample2"], _examples_1_component__WEBPACK_IMPORTED_MODULE_9__["TuiCurrencyExample1"]],
                exports: [_currency_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCurrencyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/currency/examples/1/component.ts":
/*!************************************************************!*\
  !*** ./src/modules/pipes/currency/examples/1/component.ts ***!
  \************************************************************/
/*! exports provided: TuiCurrencyExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyExample1", function() { return TuiCurrencyExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-commerce/pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");





class TuiCurrencyExample1 {
}
TuiCurrencyExample1.ɵfac = function TuiCurrencyExample1_Factory(t) { return new (t || TuiCurrencyExample1)(); };
TuiCurrencyExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCurrencyExample1, selectors: [["tui-currency-example1"]], decls: 3, vars: 3, template: function TuiCurrencyExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("100 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "RUB"), "");
    } }, pipes: [_addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["TuiCurrencyPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCurrencyExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-currency-example1`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/currency/examples/2/component.ts":
/*!************************************************************!*\
  !*** ./src/modules/pipes/currency/examples/2/component.ts ***!
  \************************************************************/
/*! exports provided: TuiCurrencyExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyExample2", function() { return TuiCurrencyExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-commerce/pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");









class TuiCurrencyExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100),
        });
    }
}
TuiCurrencyExample2.ɵfac = function TuiCurrencyExample2_Factory(t) { return new (t || TuiCurrencyExample2)(); };
TuiCurrencyExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCurrencyExample2, selectors: [["tui-currency-example2"]], decls: 4, vars: 4, consts: [[3, "formGroup"], ["formControlName", "testValue", 3, "postfix"]], template: function TuiCurrencyExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-number", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Type a sum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postfix", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, 826));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_6__["TuiCurrencyPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCurrencyExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-currency-example2`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-currency-currency-module.js.map