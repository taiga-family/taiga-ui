(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-bar-bar-module"],{

/***/ "./src/modules/charts/bar/bar.component.ts":
/*!*************************************************!*\
  !*** ./src/modules/charts/bar/bar.component.ts ***!
  \*************************************************/
/*! exports provided: ExampleTuiBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarComponent", function() { return ExampleTuiBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/bar/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/bar/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-charts/components/bar/bar.component */ "../addon-charts/components/bar/bar.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6587679027921703718$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS_1 = goog.getMsg("Bar");
    I18N_0 = MSG_EXTERNAL_6587679027921703718$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟511bd0e434a0204423622097d7f28ca9d946269b␟6587679027921703718:Bar`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4909406230971978781$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__4 = goog.getMsg("A bar for bar chart");
    I18N_3 = MSG_EXTERNAL_4909406230971978781$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟eca585a8f7011fb71c5819f142e2a90ac24edecd␟4909406230971978781:A bar for bar chart`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_107972732106533073$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__9 = goog.getMsg("Segments");
    I18N_8 = MSG_EXTERNAL_107972732106533073$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟044529b22038befea803a2eb9b91ad4c68ed07db␟107972732106533073:Segments`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiBarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-bar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-bar-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___12 = goog.getMsg(" Size ");
    I18N_11 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiBarComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7703224395772741235$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___14 = goog.getMsg(" An array of segments ");
    I18N_13 = MSG_EXTERNAL_7703224395772741235$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟8b8c33fdf93ac88fe4cda3e6ccdabbfba9e0232b␟7703224395772741235: An array of segments `;
}
function ExampleTuiBarComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
function ExampleTuiBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarComponent_ng_template_3_ng_template_4_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r1.size)("value", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7576166659982546507$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__16 = goog.getMsg(" Import {$startTagCode}TuiBarModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_15 = MSG_EXTERNAL_7576166659982546507$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__18 = goog.getMsg("Add to the template:");
    I18N_17 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiBarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiBarComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.less")),
        };
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[1];
        this.valueVariants = [
            [30, 20, 10],
            [237, 50, 10, 5, 1],
        ];
        this.value = this.valueVariants[0];
    }
}
ExampleTuiBarComponent.ɵfac = function ExampleTuiBarComponent_Factory(t) { return new (t || ExampleTuiBarComponent)(); };
ExampleTuiBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiBarComponent, selectors: [["example-tui-bar"]], decls: 5, vars: 0, consts: [["package", "ADDON-CHARTS", "type", "components", 6, "header"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "segments", 3, "content", 6, "heading"], [1, "bar", 3, "size", "value"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiBarComponent_ng_template_2_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarComponent_ng_template_3_Template, 5, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiBarExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiBarExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocDemoComponent"], _addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_8__["TuiBarComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocCodeComponent"]], styles: [".bar[_ngcontent-%COMP%] {\n  height: 6.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci9iYXIuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci9iYXIuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXIvYmFyLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyIHtcbiAgICBoZWlnaHQ6IDYuMjVyZW07XG59XG4iLCIuYmFyIHtcbiAgaGVpZ2h0OiA2LjI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-bar`,
                templateUrl: `./bar.template.html`,
                styleUrls: [`./bar.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar/bar.module.ts":
/*!**********************************************!*\
  !*** ./src/modules/charts/bar/bar.module.ts ***!
  \**********************************************/
/*! exports provided: ExampleTuiBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarModule", function() { return ExampleTuiBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar.component */ "./src/modules/charts/bar/bar.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/bar/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/bar/examples/2/index.ts");










class ExampleTuiBarModule {
}
ExampleTuiBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiBarModule });
ExampleTuiBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiBarModule_Factory(t) { return new (t || ExampleTuiBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiBarModule, { declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiBarExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiBarExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"])),
                ],
                declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiBarExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiBarExample2"]],
                exports: [_bar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar/examples/1/index.ts":
/*!****************************************************!*\
  !*** ./src/modules/charts/bar/examples/1/index.ts ***!
  \****************************************************/
/*! exports provided: TuiBarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarExample1", function() { return TuiBarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar/bar.component */ "../addon-charts/components/bar/bar.component.ts");





class TuiBarExample1 {
}
TuiBarExample1.ɵfac = function TuiBarExample1_Factory(t) { return new (t || TuiBarExample1)(); };
TuiBarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarExample1, selectors: [["tui-bar-example-1"]], decls: 1, vars: 0, consts: [[1, "bar"]], template: function TuiBarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar", 0);
    } }, directives: [_addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarComponent"]], styles: [".bar[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  background: var(--tui-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXIge1xuICAgIGhlaWdodDogNi4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG4iLCIuYmFyIHtcbiAgaGVpZ2h0OiA2LjI1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar/examples/2/index.ts":
/*!****************************************************!*\
  !*** ./src/modules/charts/bar/examples/2/index.ts ***!
  \****************************************************/
/*! exports provided: TuiBarExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarExample2", function() { return TuiBarExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar/bar.component */ "../addon-charts/components/bar/bar.component.ts");





class TuiBarExample2 {
    constructor() {
        this.value = [30, 15, 10];
    }
}
TuiBarExample2.ɵfac = function TuiBarExample2_Factory(t) { return new (t || TuiBarExample2)(); };
TuiBarExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarExample2, selectors: [["tui-bar-example-2"]], decls: 1, vars: 1, consts: [["size", "s", 1, "bar", 3, "value"]], template: function TuiBarExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_addon_charts_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarComponent"]], styles: [".bar[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  --tui-chart-0: gold;\n  --tui-chart-1: skyblue;\n  --tui-chart-2: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyIHtcbiAgICBoZWlnaHQ6IDYuMjVyZW07XG5cbiAgICAtLXR1aS1jaGFydC0wOiBnb2xkO1xuICAgIC0tdHVpLWNoYXJ0LTE6IHNreWJsdWU7XG4gICAgLS10dWktY2hhcnQtMjogcGluaztcbn1cbiIsIi5iYXIge1xuICBoZWlnaHQ6IDYuMjVyZW07XG4gIC0tdHVpLWNoYXJ0LTA6IGdvbGQ7XG4gIC0tdHVpLWNoYXJ0LTE6IHNreWJsdWU7XG4gIC0tdHVpLWNoYXJ0LTI6IHBpbms7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-bar-bar-module.js.map