(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-mapper-mapper-module"],{

/***/ "./src/modules/pipes/mapper/examples/1/component.ts":
/*!**********************************************************!*\
  !*** ./src/modules/pipes/mapper/examples/1/component.ts ***!
  \**********************************************************/
/*! exports provided: TuiMapperExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMapperExample1", function() { return TuiMapperExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");





class TuiMapperExample1 {
    constructor() {
        this.mapper = (amount, currencySymbol) => `Total: ${amount} ${currencySymbol}`;
    }
}
TuiMapperExample1.ɵfac = function TuiMapperExample1_Factory(t) { return new (t || TuiMapperExample1)(); };
TuiMapperExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMapperExample1, selectors: [["tui-mapper-example1"]], decls: 3, vars: 5, template: function TuiMapperExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiMapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transform 10 into ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, 10, ctx.mapper, "\u20BD"), "");
    } }, pipes: [_cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_3__["TuiMapperPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMapperExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mapper-example1`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/mapper/examples/2/component.ts":
/*!**********************************************************!*\
  !*** ./src/modules/pipes/mapper/examples/2/component.ts ***!
  \**********************************************************/
/*! exports provided: TuiMapperExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMapperExample2", function() { return TuiMapperExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");





class TuiMapperExample2 {
    constructor() {
        this.numbers = [1, 2, 3, 4, 5];
        this.mapper = (numbers, multiplier) => numbers.map(number => number * multiplier);
    }
}
TuiMapperExample2.ɵfac = function TuiMapperExample2_Factory(t) { return new (t || TuiMapperExample2)(); };
TuiMapperExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMapperExample2, selectors: [["tui-mapper-example2"]], decls: 3, vars: 6, template: function TuiMapperExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiMapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Transform ", ctx.numbers, " into ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx.numbers, ctx.mapper, 3), "");
    } }, pipes: [_cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_3__["TuiMapperPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMapperExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mapper-example2`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/mapper/mapper.component.ts":
/*!******************************************************!*\
  !*** ./src/modules/pipes/mapper/mapper.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiMapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMapperComponent", function() { return ExampleTuiMapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/mapper/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/pipes/mapper/examples/2/component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");









var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8594746851560578197$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__5 = goog.getMsg("With array");
    I18N_4 = MSG_EXTERNAL_8594746851560578197$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟10fe4829c652ad18f53ca09cab7eb79044c55fe4␟8594746851560578197:With array`;
}
const _c6 = ["heading", I18N_4];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1345914388717321709$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__7 = goog.getMsg(" Pipe to transform a value with a function {$startTagTuiDocExample}{$startTagTuiMapperExample1}{$closeTagTuiMapperExample1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiMapperExample2}{$closeTagTuiMapperExample2}{$closeTagTuiDocExample}", { "startTagTuiDocExample": "\uFFFD#1\uFFFD", "startTagTuiMapperExample1": "\uFFFD#3\uFFFD", "closeTagTuiMapperExample1": "\uFFFD/#3\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#4\uFFFD", "startTagTuiMapperExample2": "\uFFFD#6\uFFFD", "closeTagTuiMapperExample2": "\uFFFD/#6\uFFFD" });
    I18N_0 = MSG_EXTERNAL_1345914388717321709$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__7;
}
else {
    I18N_0 = $localize `:␟60db275aad6d6fcafa5648c920947a74ad7d2502␟1345914388717321709: Pipe to transform a value with a function ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_MAPPER_EXAMPLE1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE1:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_MAPPER_EXAMPLE2:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE2:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiMapperComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-mapper-example1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-mapper-example2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7049964330523039628$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiMapperPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_8 = MSG_EXTERNAL_7049964330523039628$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟09e5f19ff0177e58dfd6fff3ef772381bc2db785␟7049964330523039628: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMapperPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1250387402385487280$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__11 = goog.getMsg("Use pipe in template with function and its arguments:");
    I18N_10 = MSG_EXTERNAL_1250387402385487280$$SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
}
function ExampleTuiMapperComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_10);
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
class ExampleTuiMapperComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-component-ts */ "!!raw-loader!-examples-1-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/1/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-template-html */ "!!raw-loader!-examples-1-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/1/template.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-component-ts */ "!!raw-loader!-examples-2-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-template-html */ "!!raw-loader!-examples-2-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/template.html")),
        };
    }
}
ExampleTuiMapperComponent.ɵfac = function ExampleTuiMapperComponent_Factory(t) { return new (t || ExampleTuiMapperComponent)(); };
ExampleTuiMapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiMapperComponent, selectors: [["example-tui-mapper"]], decls: 3, vars: 0, consts: [["header", "Mapper", "package", "CDK", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "base", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiMapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiMapperComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMapperComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_5__["TuiMapperExample1"], _examples_2_component__WEBPACK_IMPORTED_MODULE_6__["TuiMapperExample2"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCodeComponent"]], styles: [".text[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvbWFwcGVyL21hcHBlci5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9waXBlcy9tYXBwZXIvbWFwcGVyLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvbWFwcGVyL21hcHBlci5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xufVxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDEuMTg3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiMapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-mapper`,
                templateUrl: `./mapper.template.html`,
                styleUrls: [`./mapper.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/mapper/mapper.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/pipes/mapper/mapper.module.ts ***!
  \***************************************************/
/*! exports provided: ExampleTuiMapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMapperModule", function() { return ExampleTuiMapperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/pipes/mapper/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/pipes/mapper/examples/2/component.ts");
/* harmony import */ var _mapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapper.component */ "./src/modules/pipes/mapper/mapper.component.ts");










class ExampleTuiMapperModule {
}
ExampleTuiMapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiMapperModule });
ExampleTuiMapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiMapperModule_Factory(t) { return new (t || ExampleTuiMapperModule)(); }, imports: [[
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiMapperModule, { declarations: [_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_5__["TuiMapperExample1"], _examples_2_component__WEBPACK_IMPORTED_MODULE_6__["TuiMapperExample2"]], imports: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiMapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"])),
                ],
                declarations: [_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_5__["TuiMapperExample1"], _examples_2_component__WEBPACK_IMPORTED_MODULE_6__["TuiMapperExample2"]],
                exports: [_mapper_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiMapperComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-mapper-mapper-module.js.map