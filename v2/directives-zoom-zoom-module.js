(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-zoom-zoom-module"],{

/***/ "./src/modules/directives/zoom/examples/1/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/directives/zoom/examples/1/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiZoomExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiZoomExample1", function() { return TuiZoomExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _cdk_directives_zoom_zoom_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/zoom/zoom.directive */ "../cdk/directives/zoom/zoom.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









class TuiZoomExample1 {
    constructor() {
        this.delta$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.scale$ = this.delta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])((scale, next) => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["clamp"])(scale + next, 0.5, 3), 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(1));
        this.transform$ = this.scale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(scale => `scale(${scale})`));
    }
    onZoom({ delta }) {
        this.delta$.next(delta);
    }
}
TuiZoomExample1.ɵfac = function TuiZoomExample1_Factory(t) { return new (t || TuiZoomExample1)(); };
TuiZoomExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiZoomExample1, selectors: [["tui-zoom-example-1"]], decls: 7, vars: 10, consts: [[1, "t-container", 3, "tuiZoom"], [1, "t-zoomable"]], template: function TuiZoomExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiZoom", function TuiZoomExample1_Template_div_tuiZoom_0_listener($event) { return ctx.onZoom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.transform$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.scale$), "1.0-3"));
    } }, directives: [_cdk_directives_zoom_zoom_directive__WEBPACK_IMPORTED_MODULE_6__["TuiZoomDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.t-container[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 12rem;\n  background-color: var(--tui-secondary);\n}\n.t-zoomable[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background-color: var(--tui-primary);\n  border-radius: var(--tui-radius-l);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy96b29tL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy96b29tL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy96b29tL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50LWNvbnRhaW5lcixcbi50LXpvb21hYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMTJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG59XG5cbi50LXpvb21hYmxlIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbCk7XG59XG4iLCIudC1jb250YWluZXIsXG4udC16b29tYWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IDEycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcbn1cbi50LXpvb21hYmxlIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLWwpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiZoomExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-zoom-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/zoom/zoom.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/directives/zoom/zoom.component.ts ***!
  \*******************************************************/
/*! exports provided: ExampleTuiZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiZoomComponent", function() { return ExampleTuiZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/zoom/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6421460271971606186$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS_1 = goog.getMsg("Zoom");
    I18N_0 = MSG_EXTERNAL_6421460271971606186$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟e76cd6dbaa898f85934f363fef654b29e44d004b␟6421460271971606186:Zoom`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7159822271573365477$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__4 = goog.getMsg("{$startTagCode}tuiZoom{$closeTagCode} directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_7159822271573365477$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟e6b130c134abcffac0e7a556ee8e7d5e3b56f182␟7159822271573365477:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiZoom${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8227596913155490392$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__6 = goog.getMsg("Simple");
    I18N_5 = MSG_EXTERNAL_8227596913155490392$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟1ea31081e50390f86dac9d44f30ce6d662d9b486␟8227596913155490392:Simple`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiZoomComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-zoom-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2830324911231252653$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiZoomModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_8 = MSG_EXTERNAL_2830324911231252653$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟b353d913cbd741c6c16613accf378b4da1d7201a␟2830324911231252653: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiZoomModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3799636229807761262$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__11 = goog.getMsg("Add to the template and subscribe to a change:");
    I18N_10 = MSG_EXTERNAL_3799636229807761262$$SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;
}
function ExampleTuiZoomComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleComponent);
} }
class ExampleTuiZoomComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/import/insert-template.md"));
        this.exampleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-component-md */ "!!raw-loader!-examples-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/import/component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/1/index.html")),
        };
    }
}
ExampleTuiZoomComponent.ɵfac = function ExampleTuiZoomComponent_Factory(t) { return new (t || ExampleTuiZoomComponent)(); };
ExampleTuiZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiZoomComponent, selectors: [["example-tui-zoom"]], decls: 4, vars: 0, consts: [["package", "CDK", "type", "directives", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "multiple", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiZoomComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiZoomComponent_ng_template_3_Template, 11, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiZoomExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-zoom`,
                templateUrl: `./zoom.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/zoom/zoom.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/directives/zoom/zoom.module.ts ***!
  \****************************************************/
/*! exports provided: ExampleTuiZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiZoomModule", function() { return ExampleTuiZoomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/zoom/examples/1/index.ts");
/* harmony import */ var _zoom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zoom.component */ "./src/modules/directives/zoom/zoom.component.ts");









class ExampleTuiZoomModule {
}
ExampleTuiZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiZoomModule });
ExampleTuiZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiZoomModule_Factory(t) { return new (t || ExampleTuiZoomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiZoomModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiZoomModule, { declarations: [_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiZoomExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiZoomModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiZoomModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"])),
                ],
                declarations: [_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiZoomExample1"]],
                exports: [_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiZoomComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-zoom-zoom-module.js.map