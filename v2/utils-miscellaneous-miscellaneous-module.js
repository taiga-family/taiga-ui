(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-miscellaneous-miscellaneous-module"],{

/***/ "./src/modules/utils/miscellaneous/examples/1/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/examples/1/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiMiscellaneousExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMiscellaneousExample1", function() { return TuiMiscellaneousExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");





class TuiMiscellaneousExample1 {
    get assertResult() {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiAssert"].assert(isFriday, `Today is not a friday`);
        return isFriday
            ? `Nothing in console`
            : `There is a console assert: 'Today is not a friday'`;
    }
}
TuiMiscellaneousExample1.ɵfac = function TuiMiscellaneousExample1_Factory(t) { return new (t || TuiMiscellaneousExample1)(); };
TuiMiscellaneousExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMiscellaneousExample1, selectors: [["tui-miscellaneous-example-1"]], decls: 2, vars: 1, template: function TuiMiscellaneousExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assertResult);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMiscellaneousExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-miscellaneous-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/miscellaneous/examples/2/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/examples/2/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiMiscellaneousExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMiscellaneousExample2", function() { return TuiMiscellaneousExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");





class TuiMiscellaneousExample2 {
    get flatted() {
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["flatLength"])([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    }
}
TuiMiscellaneousExample2.ɵfac = function TuiMiscellaneousExample2_Factory(t) { return new (t || TuiMiscellaneousExample2)(); };
TuiMiscellaneousExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMiscellaneousExample2, selectors: [["tui-miscellaneous-example-2"]], decls: 2, vars: 1, template: function TuiMiscellaneousExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.flatted, " = flatLength([[1, 2], [3, 4], [5, 6]]);");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMiscellaneousExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-miscellaneous-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/miscellaneous/examples/4/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/examples/4/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiMiscellaneousExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMiscellaneousExample4", function() { return TuiMiscellaneousExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");











function TuiMiscellaneousExample4_tui_data_list_wrapper_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
class TuiMiscellaneousExample4 {
    constructor() {
        this.items = [
            `6734567890123456`,
            `5536567890123456`,
            `2202567890123456`,
            `4405567890123456`,
            `4000567890123456`,
        ];
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
    }
    get paymentSystem() {
        const { cardNumber } = this.parametersForm.value;
        return Object(_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["getPaymentSystem"])(cardNumber);
    }
}
TuiMiscellaneousExample4.ɵfac = function TuiMiscellaneousExample4_Factory(t) { return new (t || TuiMiscellaneousExample4)(); };
TuiMiscellaneousExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMiscellaneousExample4, selectors: [["tui-miscellaneous-example-4"]], decls: 6, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "cardNumber", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiMiscellaneousExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Choose card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiMiscellaneousExample4_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.paymentSystem, "' = getPaymentSystem(cardNumber); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__["TuiSelectDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperComponent"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvbWlzY2VsbGFuZW91cy9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL3V0aWxzL21pc2NlbGxhbmVvdXMvZXhhbXBsZXMvNC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy91dGlscy9taXNjZWxsYW5lb3VzL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMiscellaneousExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-miscellaneous-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/miscellaneous/examples/5/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/examples/5/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiMiscellaneousExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMiscellaneousExample5", function() { return TuiMiscellaneousExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");











function TuiMiscellaneousExample5_tui_data_list_wrapper_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
class TuiMiscellaneousExample5 {
    constructor() {
        this.items = [`String`, `null`, `undefined`];
        this.parametersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    get isPresent() {
        const { value } = this.parametersForm.value;
        const objectedValue = this.objectifyValue(value);
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isPresent"])(objectedValue);
    }
    objectifyValue(value) {
        if (value === `null`) {
            return null;
        }
        if (value === `undefined`) {
            return undefined;
        }
        return value;
    }
}
TuiMiscellaneousExample5.ɵfac = function TuiMiscellaneousExample5_Factory(t) { return new (t || TuiMiscellaneousExample5)(); };
TuiMiscellaneousExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMiscellaneousExample5, selectors: [["tui-miscellaneous-example-5"]], decls: 6, vars: 2, consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiMiscellaneousExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiMiscellaneousExample5_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isPresent, " = isPresent(value); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parametersForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_6__["TuiSelectDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperComponent"]], styles: [".parameters[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 13.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvbWlzY2VsbGFuZW91cy9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL3V0aWxzL21pc2NlbGxhbmVvdXMvZXhhbXBsZXMvNS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy91dGlscy9taXNjZWxsYW5lb3VzL2V4YW1wbGVzLzUvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbWV0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMy43NXJlbTtcbn1cbiIsIi5wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgd2lkdGg6IDEzLjc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMiscellaneousExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-miscellaneous-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/miscellaneous/miscellaneous.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/miscellaneous.component.ts ***!
  \********************************************************************/
/*! exports provided: ExampleMiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMiscellaneousComponent", function() { return ExampleMiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/utils/miscellaneous/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/utils/miscellaneous/examples/2/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/utils/miscellaneous/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/utils/miscellaneous/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_788967566322079082$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS_1 = goog.getMsg("Miscellaneous");
    I18N_0 = MSG_EXTERNAL_788967566322079082$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟f398ef0b34074b4560e84ef5317ea054e78a752a␟788967566322079082:Miscellaneous`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5150738835928000159$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__4 = goog.getMsg("Some utils to simplify the development process");
    I18N_3 = MSG_EXTERNAL_5150738835928000159$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟c676d43c710fec8019330348fa0df2c00362f699␟5150738835928000159:Some utils to simplify the development process`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6294798745949256000$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__6 = goog.getMsg("Logs assert into console in dev mode");
    I18N_5 = MSG_EXTERNAL_6294798745949256000$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟f10d1538fd526ebffa07d75e2380b111f5438a1c␟6294798745949256000:Logs assert into console in dev mode`;
}
const _c7 = ["description", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5469082953515383630$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__9 = goog.getMsg("Calculates a length of elements of two dimensional array");
    I18N_8 = MSG_EXTERNAL_5469082953515383630$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟2f599a78aea67c3b476d1c718f2e8c3b464a9257␟5469082953515383630:Calculates a length of elements of two dimensional array`;
}
const _c10 = ["description", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7224030121581173286$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__12 = goog.getMsg("Card number to its payment system");
    I18N_11 = MSG_EXTERNAL_7224030121581173286$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟5105c7dbe368aca66ee4710b6940836ace147001␟7224030121581173286:Card number to its payment system`;
}
const _c13 = ["description", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2199641579905414520$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__15 = goog.getMsg("Checks value not to be null or undefined");
    I18N_14 = MSG_EXTERNAL_2199641579905414520$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟f6929faea8489787de4425621b6b893ee9a50c10␟2199641579905414520:Checks value not to be null or undefined`;
}
const _c16 = ["description", I18N_14];
function ExampleMiscellaneousComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-miscellaneous-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-miscellaneous-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-miscellaneous-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-miscellaneous-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__18 = goog.getMsg("Import into component and use:");
    I18N_17 = MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
}
function ExampleMiscellaneousComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.importComponentExample);
} }
class ExampleMiscellaneousComponent {
    constructor() {
        this.importComponentExample = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-component-md */ "!!raw-loader!-examples-import-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/import/import-component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/2/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.less")),
        };
    }
}
ExampleMiscellaneousComponent.ɵfac = function ExampleMiscellaneousComponent_Factory(t) { return new (t || ExampleMiscellaneousComponent)(); };
ExampleMiscellaneousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleMiscellaneousComponent, selectors: [["example-format"]], decls: 4, vars: 0, consts: [["package", "CDK", "type", "utils", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "assert", "heading", "assert", 3, "content", 6, "description"], ["id", "flatLength", "heading", "flatLength", 3, "content", 6, "description"], ["id", "getPaymentSystem", "heading", "getPaymentSystem", 3, "content", 6, "description"], ["id", "isPresent", "heading", "isPresent", 3, "content", 6, "description"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleMiscellaneousComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleMiscellaneousComponent_ng_template_2_Template, 14, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleMiscellaneousComponent_ng_template_3_Template, 5, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiMiscellaneousExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiMiscellaneousExample2"], _examples_4_index__WEBPACK_IMPORTED_MODULE_7__["TuiMiscellaneousExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_8__["TuiMiscellaneousExample5"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleMiscellaneousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-format`,
                templateUrl: `./miscellaneous.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/miscellaneous/miscellaneous.module.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/utils/miscellaneous/miscellaneous.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleMiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMiscellaneousModule", function() { return ExampleMiscellaneousModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/utils/miscellaneous/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/utils/miscellaneous/examples/2/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/utils/miscellaneous/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/utils/miscellaneous/examples/5/index.ts");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./miscellaneous.component */ "./src/modules/utils/miscellaneous/miscellaneous.component.ts");














class ExampleMiscellaneousModule {
}
ExampleMiscellaneousModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleMiscellaneousModule });
ExampleMiscellaneousModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleMiscellaneousModule_Factory(t) { return new (t || ExampleMiscellaneousModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleMiscellaneousModule, { declarations: [_miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMiscellaneousExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMiscellaneousExample2"],
        _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiMiscellaneousExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiMiscellaneousExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleMiscellaneousModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSelectModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"])),
                ],
                declarations: [
                    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMiscellaneousExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMiscellaneousExample2"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiMiscellaneousExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiMiscellaneousExample5"],
                ],
                exports: [_miscellaneous_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMiscellaneousComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=utils-miscellaneous-miscellaneous-module.js.map