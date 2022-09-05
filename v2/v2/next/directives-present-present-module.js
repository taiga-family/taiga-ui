(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-present-present-module"],{

/***/ "./src/modules/directives/present/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/directives/present/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiPresentExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPresentExample1", function() { return TuiPresentExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/directives/hovered/hovered.directive */ "../cdk/directives/hovered/hovered.directive.ts");
/* harmony import */ var _kit_directives_present_present_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/directives/present/present.directive */ "../kit/directives/present/present.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");








var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9077025469050371295$$SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS_2 = goog.getMsg("Counter of component appearance minus counter of its disappearance:");
    I18N_1 = MSG_EXTERNAL_9077025469050371295$$SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS_2;
}
else {
    I18N_1 = $localize `:␟ae22a3cf2aa4f558b8e5339a8828934dca1db1cc␟9077025469050371295:Counter of component appearance minus counter of its disappearance:`;
}
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7044645915109166344$$SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS__3 = goog.getMsg(" Hover {$startTagSpan} I am a component hidden with CSS {$closeTagSpan}{$startTagSpan_1} I am a component hidden with *ngIf {$closeTagSpan}", { "startTagSpan": "\uFFFD#2\uFFFD", "closeTagSpan": "[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]", "startTagSpan_1": "\uFFFD*3:1\uFFFD\uFFFD#1:1\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7044645915109166344$$SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS__3;
}
else {
    I18N_0 = $localize `:␟7cd644c498b69bc3f7194ce48190b3df87292d9e␟7044645915109166344: Hover ${"\uFFFD#2\uFFFD"}:START_TAG_SPAN: I am a component hidden with CSS ${"[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]"}:CLOSE_TAG_SPAN:${"\uFFFD*3:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_SPAN_1: I am a component hidden with *ngIf ${"[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]"}:CLOSE_TAG_SPAN:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function TuiPresentExample1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiPresentChange", function TuiPresentExample1_span_3_Template_span_tuiPresentChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onIf($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
class TuiPresentExample1 {
    constructor() {
        this.counterCSS = 0;
        this.counterIf = 0;
        this.hovered = false;
    }
    onHovered(hovered) {
        this.hovered = hovered;
    }
    onCSS(visible) {
        this.counterCSS += visible ? 1 : -1;
    }
    onIf(visible) {
        this.counterIf += visible ? 1 : -1;
    }
}
TuiPresentExample1.ɵfac = function TuiPresentExample1_Factory(t) { return new (t || TuiPresentExample1)(); };
TuiPresentExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPresentExample1, selectors: [["tui-present-example-1"]], decls: 12, vars: 5, consts: [[3, "tuiHoveredChange"], [3, "tuiPresentChange"], [3, "tuiPresentChange", 4, "ngIf"], [3, "value"]], template: function TuiPresentExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiHoveredChange", function TuiPresentExample1_Template_p_tuiHoveredChange_0_listener($event) { return ctx.onHovered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiPresentChange", function TuiPresentExample1_Template_span_tuiPresentChange_2_listener($event) { return ctx.onCSS($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiPresentExample1_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " CSS: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ngIf: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.hovered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hovered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.counterCSS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.counterIf);
    } }, directives: [_cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_3__["TuiHoveredDirective"], _kit_directives_present_present_directive__WEBPACK_IMPORTED_MODULE_4__["TuiPresentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__["TuiBadgeComponent"]], styles: [".hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9wcmVzZW50L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9wcmVzZW50L2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvcHJlc2VudC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPresentExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-present-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/present/present.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/directives/present/present.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiPresentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPresentComponent", function() { return ExampleTuiPresentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/present/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6522877977962061564$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS_1 = goog.getMsg("Present");
    I18N_0 = MSG_EXTERNAL_6522877977962061564$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟9acc685ba486c486bf39972d10827622a7acbd02␟6522877977962061564:Present`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9105695448473968927$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__4 = goog.getMsg("{$startTagCode}tuiPresentChange{$closeTagCode} allows to detect appearance of elements in DOM ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_9105695448473968927$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟68ffa88b424884f6f5d007587d01553dd130a576␟9105695448473968927:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiPresentChange${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to detect appearance of elements in DOM `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiPresentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-present-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3451653107334231798$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiPresentModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_8 = MSG_EXTERNAL_3451653107334231798$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟a8301097342fdee8e7a9cce37a8a87560c6f4cd7␟3451653107334231798: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPresentModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
    I18N_10 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiPresentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
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
class ExampleTuiPresentComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/1/index.less")),
        };
    }
}
ExampleTuiPresentComponent.ɵfac = function ExampleTuiPresentComponent_Factory(t) { return new (t || ExampleTuiPresentComponent)(); };
ExampleTuiPresentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPresentComponent, selectors: [["example-tui-present"]], decls: 4, vars: 0, consts: [["package", "CORE", "path", "kit/directives/present", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "base", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPresentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPresentComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPresentComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiPresentExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPresentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-present`,
                templateUrl: `./present.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/present/present.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/directives/present/present.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiPresentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPresentModule", function() { return ExampleTuiPresentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/present/examples/1/index.ts");
/* harmony import */ var _present_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./present.component */ "./src/modules/directives/present/present.component.ts");










class ExampleTuiPresentModule {
}
ExampleTuiPresentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPresentModule });
ExampleTuiPresentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPresentModule_Factory(t) { return new (t || ExampleTuiPresentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPresentModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPresentModule, { declarations: [_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPresentExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPresentModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPresentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPresentModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"])),
                ],
                declarations: [_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPresentExample1"]],
                exports: [_present_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPresentComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-present-present-module.js.map