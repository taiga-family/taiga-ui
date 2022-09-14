(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-filter-filter-module"],{

/***/ "./src/modules/pipes/filter/examples/1/component.ts":
/*!**********************************************************!*\
  !*** ./src/modules/pipes/filter/examples/1/component.ts ***!
  \**********************************************************/
/*! exports provided: TuiFilterExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFilterExample1", function() { return TuiFilterExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/pipes/filter/filter.pipe */ "../cdk/pipes/filter/filter.pipe.ts");






function TuiFilterExample1_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
} }
class TuiFilterExample1 {
    constructor() {
        this.items = [
            {
                name: `Sword`,
                price: 1000,
            },
            {
                name: `Axe`,
                price: 100,
            },
            {
                name: `Spear`,
                price: 500,
            },
        ];
        this.matcher = (item, search) => item.price > search;
    }
}
TuiFilterExample1.ɵfac = function TuiFilterExample1_Factory(t) { return new (t || TuiFilterExample1)(); };
TuiFilterExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFilterExample1, selectors: [["tui-filter-example1"]], decls: 9, vars: 5, consts: [[1, "tui-table", "table"], [1, "tui-table__th", "cell_name"], [1, "tui-table__th", "cell_sum"], [4, "ngFor", "ngForOf"], [1, "tui-table__td", "cell_name"], [1, "tui-table__td", "cell_sum"]], template: function TuiFilterExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sum, $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiFilterExample1_tr_7_Template, 5, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "tuiFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 1, ctx.items, ctx.matcher, 300));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiFilterPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFilterExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-filter-example1`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/filter/filter.component.ts":
/*!******************************************************!*\
  !*** ./src/modules/pipes/filter/filter.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFilterComponent", function() { return ExampleTuiFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/filter/examples/1/component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1365788925292352994$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__4 = goog.getMsg(" Pipe for filtering an array {$startTagTuiDocExample}{$startTagTuiFilterExample1}{$closeTagTuiFilterExample1}{$closeTagTuiDocExample}", { "startTagTuiDocExample": "\uFFFD#1\uFFFD", "startTagTuiFilterExample1": "\uFFFD#3\uFFFD", "closeTagTuiFilterExample1": "\uFFFD/#3\uFFFD", "closeTagTuiDocExample": "\uFFFD/#1\uFFFD" });
    I18N_0 = MSG_EXTERNAL_1365788925292352994$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__4;
}
else {
    I18N_0 = $localize `:␟94367b4a97b8f508723bb7e666f107af5f89034d␟1365788925292352994: Pipe for filtering an array ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_FILTER_EXAMPLE1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_FILTER_EXAMPLE1:${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
function ExampleTuiFilterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-filter-example1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2902555709652686989$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__6 = goog.getMsg(" Import {$startTagCode}TuiFilterPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_2902555709652686989$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟0d79a28307cbe51e81b15186c1b80d6c1781e592␟2902555709652686989: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFilterPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1250387402385487280$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__8 = goog.getMsg("Use pipe in template with function and its arguments:");
    I18N_7 = MSG_EXTERNAL_1250387402385487280$$SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
}
function ExampleTuiFilterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiFilterComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-component-ts */ "!!raw-loader!-examples-1-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/1/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-template-html */ "!!raw-loader!-examples-1-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/1/template.html")),
        };
    }
}
ExampleTuiFilterComponent.ɵfac = function ExampleTuiFilterComponent_Factory(t) { return new (t || ExampleTuiFilterComponent)(); };
ExampleTuiFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiFilterComponent, selectors: [["example-tui-filter"]], decls: 3, vars: 0, consts: [["header", "Filter", "package", "CDK", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "base", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiFilterComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiFilterComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_5__["TuiFilterExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-filter`,
                templateUrl: `./filter.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/filter/filter.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/pipes/filter/filter.module.ts ***!
  \***************************************************/
/*! exports provided: ExampleTuiFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFilterModule", function() { return ExampleTuiFilterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/filter/examples/1/component.ts");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter.component */ "./src/modules/pipes/filter/filter.component.ts");










class ExampleTuiFilterModule {
}
ExampleTuiFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiFilterModule });
ExampleTuiFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiFilterModule_Factory(t) { return new (t || ExampleTuiFilterModule)(); }, imports: [[
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiFilterPipeModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiFilterModule, { declarations: [_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiFilterExample1"]], imports: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiFilterPipeModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiFilterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiFilterPipeModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"])),
                ],
                declarations: [_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiFilterExample1"]],
                exports: [_filter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiFilterComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-filter-filter-module.js.map