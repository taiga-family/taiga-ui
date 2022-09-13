(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-format-format-module"],{

/***/ "./src/modules/utils/format/examples/1/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/1/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample1", function() { return TuiFormatExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");









class TuiFormatExample1 {
    constructor() {
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](11),
        });
    }
    get px() {
        const { value } = this.parametersForm.value;
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["px"])(value);
    }
}
TuiFormatExample1.ɵfac = function TuiFormatExample1_Factory(t) { return new (t || TuiFormatExample1)(); };
TuiFormatExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample1, selectors: [["tui-format-example-1"]], decls: 5, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"]], template: function TuiFormatExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.px, "' = px(value); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/examples/2/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/2/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample2", function() { return TuiFormatExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");











class TuiFormatExample2 {
    constructor() {
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sourceString: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Friend!`),
            minResultLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](21),
            padString: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Hey, `),
        });
    }
    get paddedStart() {
        const { sourceString, minResultLength, padString } = this.parametersForm.value;
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["padStart"])(sourceString || ``, minResultLength || 0, padString || ` `);
    }
}
TuiFormatExample2.ɵfac = function TuiFormatExample2_Factory(t) { return new (t || TuiFormatExample2)(); };
TuiFormatExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample2, selectors: [["tui-format-example-2"]], decls: 9, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "sourceString", 1, "tui-space_top-2"], ["formControlName", "minResultLength", 1, "tui-space_top-2"], ["formControlName", "padString", 1, "tui-space_top-2"]], template: function TuiFormatExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " sourceString ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input-number", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " minResultLength ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " padString ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.paddedStart, " = padStart(sourceString, minResultLength, padString); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputNumberDirective"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/examples/3/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/3/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample3", function() { return TuiFormatExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");











function TuiFormatExample3_tui_data_list_wrapper_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
class TuiFormatExample3 {
    constructor() {
        this.items = [`USD`, `RUB`, `643`, `KZT`, `051`, `KRW`, `CHF`, `EUR`, `GBP`];
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    get currency() {
        const { currency } = this.parametersForm.value;
        return Object(_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["getCurrencySymbol"])(currency);
    }
}
TuiFormatExample3.ɵfac = function TuiFormatExample3_Factory(t) { return new (t || TuiFormatExample3)(); };
TuiFormatExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample3, selectors: [["tui-format-example-3"]], decls: 6, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "currency", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiFormatExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " currency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiFormatExample3_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currency, " = getCurrencySymbol(currency); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__["TuiSelectDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperComponent"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/examples/4/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/4/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample4", function() { return TuiFormatExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");









class TuiFormatExample4 {
    constructor() {
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`roman sEdOv`),
        });
    }
    get capitalized() {
        const { value } = this.parametersForm.value;
        return Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(value);
    }
}
TuiFormatExample4.ɵfac = function TuiFormatExample4_Factory(t) { return new (t || TuiFormatExample4)(); };
TuiFormatExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample4, selectors: [["tui-format-example-4"]], decls: 5, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"]], template: function TuiFormatExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.capitalized, "' = capitalize(value); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzQvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/examples/5/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/5/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample5", function() { return TuiFormatExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");









class TuiFormatExample5 {
    constructor() {
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`+79991234567`),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`+7`),
            phoneMask: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`### ###-##-##`),
        });
    }
    get formattedPhone() {
        const { value, countryCode, phoneMask } = this.parametersForm.value;
        return Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["formatPhone"])(value, countryCode, phoneMask);
    }
}
TuiFormatExample5.ɵfac = function TuiFormatExample5_Factory(t) { return new (t || TuiFormatExample5)(); };
TuiFormatExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample5, selectors: [["tui-format-example-5"]], decls: 9, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "countryCode", 1, "tui-space_top-2"], ["formControlName", "phoneMask", 1, "tui-space_top-2"]], template: function TuiFormatExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " countryCode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " phoneMask ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.formattedPhone, "' = formatPhone(value, countryCode, phoneMask); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzUvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzUvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzUvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/examples/6/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/examples/6/index.ts ***!
  \******************************************************/
/*! exports provided: TuiFormatExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatExample6", function() { return TuiFormatExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");









class TuiFormatExample6 {
    constructor() {
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](123456.789),
            decimalLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2),
            decimalSeparator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`.`),
            thousandSeparator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](` `),
        });
    }
    get formattedNumber() {
        const { value, decimalLimit, decimalSeparator, thousandSeparator } = this.parametersForm.value;
        return Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["formatNumber"])(value, decimalLimit, decimalSeparator, thousandSeparator);
    }
}
TuiFormatExample6.ɵfac = function TuiFormatExample6_Factory(t) { return new (t || TuiFormatExample6)(); };
TuiFormatExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFormatExample6, selectors: [["tui-format-example-6"]], decls: 11, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "decimalLimit", 1, "tui-space_top-2"], ["formControlName", "decimalSeparator", 1, "tui-space_top-2"], ["formControlName", "thousandSeparator", 1, "tui-space_top-2"]], template: function TuiFormatExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " decimalLimit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " decimalSeparator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " thousandSeparator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.formattedNumber, "' = formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzYvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzYvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZm9ybWF0L2V4YW1wbGVzLzYvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-format-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/format.component.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/format/format.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFormatComponent", function() { return ExampleFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/utils/format/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/utils/format/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/utils/format/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/utils/format/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/utils/format/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/utils/format/examples/6/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5358165867706649494$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_1 = goog.getMsg("Format utils");
    I18N_0 = MSG_EXTERNAL_5358165867706649494$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1341457636714080363$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__7 = goog.getMsg("A set of format utils");
    I18N_6 = MSG_EXTERNAL_1341457636714080363$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5245623836371299072$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__9 = goog.getMsg("Adds 'px' to a number");
    I18N_8 = MSG_EXTERNAL_5245623836371299072$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`;
}
const _c10 = ["description", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1473019084371139706$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__12 = goog.getMsg("Adds a fillter to a string");
    I18N_11 = MSG_EXTERNAL_1473019084371139706$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟7d1831d06991cb25671ca5b74e6c0327bbf87280␟1473019084371139706:Adds a fillter to a string`;
}
const _c13 = ["description", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7442713877787930163$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__15 = goog.getMsg("Returns a currency symbol from its three letter code or ISO 4217");
    I18N_14 = MSG_EXTERNAL_7442713877787930163$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`;
}
const _c16 = ["description", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6708488179256599720$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__18 = goog.getMsg("Capitalizes every word in a string");
    I18N_17 = MSG_EXTERNAL_6708488179256599720$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`;
}
const _c19 = ["description", I18N_17];
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1504114262974304913$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__21 = goog.getMsg("Formats a phone number with separators");
    I18N_20 = MSG_EXTERNAL_1504114262974304913$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`;
}
const _c22 = ["description", I18N_20];
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7477502181232818354$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__24 = goog.getMsg("Formats a number with separators");
    I18N_23 = MSG_EXTERNAL_7477502181232818354$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`;
}
const _c25 = ["description", I18N_23];
function ExampleFormatComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-format-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-format-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-format-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-format-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-format-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](18, _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-format-example-6");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__27 = goog.getMsg("Import into component and use:");
    I18N_26 = MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
}
function ExampleFormatComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.importComponentExample);
} }
class ExampleFormatComponent {
    constructor() {
        this.importComponentExample = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-component-md */ "!!raw-loader!-examples-import-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/import/import-component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.less")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.less")),
        };
    }
}
ExampleFormatComponent.ɵfac = function ExampleFormatComponent_Factory(t) { return new (t || ExampleFormatComponent)(); };
ExampleFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleFormatComponent, selectors: [["example-format"]], decls: 5, vars: 0, consts: [["package", "CDK / CORE", "path", "cdk/utils/format", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "px", "heading", "px", 3, "content", 6, "description"], ["id", "padStart", "heading", "padStart", 3, "content", 6, "description"], ["id", "getCurrencySymbol", "heading", "getCurrencySymbol", 3, "content", 6, "description"], ["id", "capitalize", "heading", "capitalize", 3, "content", 6, "description"], ["id", "formatPhone", "heading", "formatPhone", 3, "content", 6, "description"], ["id", "formatNumber", "heading", "formatNumber", 3, "content", 6, "description"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleFormatComponent_ng_template_2_Template, 20, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleFormatComponent_ng_template_3_Template, 5, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiFormatExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiFormatExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiFormatExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiFormatExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiFormatExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_10__["TuiFormatExample6"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-format`,
                templateUrl: `./format.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/format/format.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/utils/format/format.module.ts ***!
  \***************************************************/
/*! exports provided: ExampleFormatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFormatModule", function() { return ExampleFormatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/utils/format/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/utils/format/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/utils/format/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/utils/format/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/utils/format/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/utils/format/examples/6/index.ts");
/* harmony import */ var _format_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./format.component */ "./src/modules/utils/format/format.component.ts");
















class ExampleFormatModule {
}
ExampleFormatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleFormatModule });
ExampleFormatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleFormatModule_Factory(t) { return new (t || ExampleFormatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleFormatModule, { declarations: [_format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiFormatExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiFormatExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiFormatExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiFormatExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiFormatExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_12__["TuiFormatExample6"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleFormatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"])),
                ],
                declarations: [
                    _format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiFormatExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiFormatExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiFormatExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiFormatExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiFormatExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_12__["TuiFormatExample6"],
                ],
                exports: [_format_component__WEBPACK_IMPORTED_MODULE_13__["ExampleFormatComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=utils-format-format-module.js.map