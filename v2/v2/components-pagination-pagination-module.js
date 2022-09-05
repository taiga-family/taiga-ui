(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pagination-pagination-module"],{

/***/ "./src/modules/components/pagination/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pagination/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPaginationExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPaginationExample1", function() { return TuiPaginationExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");







class TuiPaginationExample1 {
    constructor() {
        this.length = 64;
        this.index = 10;
    }
    goToPage(index) {
        this.index = index;
        console.info(`New page:`, index);
    }
}
TuiPaginationExample1.ɵfac = function TuiPaginationExample1_Factory(t) { return new (t || TuiPaginationExample1)(); };
TuiPaginationExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPaginationExample1, selectors: [["tui-pagination-example-1"]], decls: 2, vars: 5, consts: [["secondary", "index", "size", "m", 1, "slider", 3, "max", "quantum", "ngModel", "ngModelChange"], [3, "length", "index", "indexChange"]], template: function TuiPaginationExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiPaginationExample1_Template_tui_input_slider_ngModelChange_0_listener($event) { return ctx.index = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiPaginationExample1_Template_tui_pagination_indexChange_1_listener($event) { return ctx.goToPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.length - 1)("quantum", 1)("ngModel", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("index", ctx.index);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationComponent"]], styles: [".slider[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiIsIi5zbGlkZXIge1xuICB3aWR0aDogMTIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPaginationExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pagination-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pagination/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pagination/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPaginationExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPaginationExample2", function() { return TuiPaginationExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");







class TuiPaginationExample2 {
    constructor() {
        this.activePadding = 2;
    }
}
TuiPaginationExample2.ɵfac = function TuiPaginationExample2_Factory(t) { return new (t || TuiPaginationExample2)(); };
TuiPaginationExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPaginationExample2, selectors: [["tui-pagination-example-2"]], decls: 2, vars: 6, consts: [["secondary", "activePadding", "size", "m", 1, "slider", 3, "max", "quantum", "ngModel", "ngModelChange"], [3, "activePadding", "length", "index"]], template: function TuiPaginationExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiPaginationExample2_Template_tui_input_slider_ngModelChange_0_listener($event) { return ctx.activePadding = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-pagination", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 6)("quantum", 1)("ngModel", ctx.activePadding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activePadding", ctx.activePadding)("length", 64)("index", 10);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationComponent"]], styles: [".slider[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiIsIi5zbGlkZXIge1xuICB3aWR0aDogMTIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPaginationExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pagination-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pagination/examples/3/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pagination/examples/3/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPaginationExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPaginationExample3", function() { return TuiPaginationExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");







class TuiPaginationExample3 {
    constructor() {
        this.sidePadding = 3;
    }
}
TuiPaginationExample3.ɵfac = function TuiPaginationExample3_Factory(t) { return new (t || TuiPaginationExample3)(); };
TuiPaginationExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPaginationExample3, selectors: [["tui-pagination-example-3"]], decls: 2, vars: 6, consts: [["secondary", "sidePadding", "size", "m", 1, "slider", 3, "max", "quantum", "ngModel", "ngModelChange"], [3, "sidePadding", "length", "index"]], template: function TuiPaginationExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiPaginationExample3_Template_tui_input_slider_ngModelChange_0_listener($event) { return ctx.sidePadding = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-pagination", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 6)("quantum", 1)("ngModel", ctx.sidePadding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidePadding", ctx.sidePadding)("length", 64)("index", 10);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationComponent"]], styles: [".slider[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiIsIi5zbGlkZXIge1xuICB3aWR0aDogMTIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPaginationExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pagination-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pagination/examples/4/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pagination/examples/4/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPaginationExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPaginationExample4", function() { return TuiPaginationExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");





function TuiPaginationExample4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.days[index_r2], "\n");
} }
class TuiPaginationExample4 {
    constructor() {
        this.days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];
    }
}
TuiPaginationExample4.ɵfac = function TuiPaginationExample4_Factory(t) { return new (t || TuiPaginationExample4)(); };
TuiPaginationExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPaginationExample4, selectors: [["tui-pagination-example-4"]], decls: 3, vars: 2, consts: [[3, "length", "content"], ["test", ""]], template: function TuiPaginationExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPaginationExample4_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 7)("content", _r0);
    } }, directives: [_kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["TuiPaginationComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPaginationExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pagination-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pagination/pagination.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/pagination/pagination.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPaginationComponent", function() { return ExampleTuiPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/pagination/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/pagination/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/pagination/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/pagination/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4234058188529646153$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__1 = goog.getMsg("Pagination component enables the user to select a specific page from a range of pages");
    I18N_0 = MSG_EXTERNAL_4234058188529646153$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟661de1abe57e9dcf4ef0b9887972092fa3139ec3␟4234058188529646153:Pagination component enables the user to select a specific page from a range of pages`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1343291924581059799$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__6 = goog.getMsg("Visible pages around active");
    I18N_5 = MSG_EXTERNAL_1343291924581059799$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1450301538176787808$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__9 = goog.getMsg("Visible edge pages");
    I18N_8 = MSG_EXTERNAL_1450301538176787808$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__12 = goog.getMsg("Custom");
    I18N_11 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c13 = ["heading", I18N_11];
function ExampleTuiPaginationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-pagination-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-pagination-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-pagination-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-pagination-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1810512560805883949$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___15 = goog.getMsg(" Accepts focus with keyboard ");
    I18N_14 = MSG_EXTERNAL_1810512560805883949$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6937522081049060052$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___17 = goog.getMsg(" Active page index ");
    I18N_16 = MSG_EXTERNAL_6937522081049060052$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4207451728711936955$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___19 = goog.getMsg(" Total pages count ");
    I18N_18 = MSG_EXTERNAL_4207451728711936955$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___21 = goog.getMsg(" Size ");
    I18N_20 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7208302007968196085$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___23 = goog.getMsg(" Amount of visible pages around active page ");
    I18N_22 = MSG_EXTERNAL_7208302007968196085$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8219649223317915483$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___25 = goog.getMsg(" Amount of visible pages at the edges ");
    I18N_24 = MSG_EXTERNAL_8219649223317915483$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `;
}
function ExampleTuiPaginationComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiPaginationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function ExampleTuiPaginationComponent_ng_template_2_Template_tui_pagination_indexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPaginationComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.focusable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiPaginationComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiPaginationComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiPaginationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiPaginationComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.activePadding = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiPaginationComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.sidePadding = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r1.focusable)("length", ctx_r1.length)("size", ctx_r1.size)("activePadding", ctx_r1.activePadding)("sidePadding", ctx_r1.sidePadding)("index", ctx_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.focusable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.activePadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.sidePadding);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4453511622032715639$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiPaginationModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_26 = MSG_EXTERNAL_4453511622032715639$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPaginationModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
    I18N_28 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PAGINATION_PAGINATION_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiPaginationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiPaginationComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.html")),
        };
        this.focusable = true;
        this.index = 0;
        this.length = 8;
        this.sizeVariants = [`s`, `m`];
        this.size = this.sizeVariants[1];
        this.activePadding = 1;
        this.sidePadding = 1;
    }
}
ExampleTuiPaginationComponent.ɵfac = function ExampleTuiPaginationComponent_Factory(t) { return new (t || ExampleTuiPaginationComponent)(); };
ExampleTuiPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPaginationComponent, selectors: [["example-tui-pagination"]], decls: 4, vars: 0, consts: [["header", "Pagination", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "around", 3, "content", 6, "heading"], ["id", "edges", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], [3, "focusable", "length", "size", "activePadding", "sidePadding", "index", "indexChange"], ["documentationPropertyName", "focusable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "index", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "length", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activePadding", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "sidePadding", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPaginationComponent_ng_template_1_Template, 14, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPaginationComponent_ng_template_2_Template, 9, 13, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPaginationComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiPaginationExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiPaginationExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDemoComponent"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["TuiPaginationComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-pagination`,
                templateUrl: `./pagination.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pagination/pagination.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/pagination/pagination.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPaginationModule", function() { return ExampleTuiPaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/pagination/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/pagination/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/pagination/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/pagination/examples/4/index.ts");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination.component */ "./src/modules/components/pagination/pagination.component.ts");














class ExampleTuiPaginationModule {
}
ExampleTuiPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPaginationModule });
ExampleTuiPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPaginationModule_Factory(t) { return new (t || ExampleTuiPaginationModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputSliderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiRadioListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"])),
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiPaginationExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiPaginationExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiPaginationExample4"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputSliderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiRadioListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"]], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPaginationModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputSliderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiRadioListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"])),
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
                ],
                declarations: [
                    _pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiPaginationExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiPaginationExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiPaginationExample4"],
                ],
                exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPaginationComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pagination-pagination-module.js.map