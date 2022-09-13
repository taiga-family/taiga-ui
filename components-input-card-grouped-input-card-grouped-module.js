(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-card-grouped-input-card-grouped-module"],{

/***/ "./src/modules/components/input-card-grouped/examples/1/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/examples/1/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiInputCardGroupedExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedExample1", function() { return TuiInputCardGroupedExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card-grouped/input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");










const _c0 = function () { return []; };
class TuiInputCardGroupedExample1 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["tuiCardNumberValidator"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["tuiCardExpireValidator"],
        ]);
    }
    get card() {
        const value = this.control.value ? this.control.value.card : ``;
        if (value.length < 7) {
            return null;
        }
        switch (value.charAt(0)) {
            case `0`:
            case `1`:
            case `2`:
                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;
            case `3`:
            case `4`:
            case `5`:
                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;
            case `6`:
            case `7`:
                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;
            case `8`:
            case `9`:
            default:
                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
        }
    }
}
TuiInputCardGroupedExample1.ɵfac = function TuiInputCardGroupedExample1_Factory(t) { return new (t || TuiInputCardGroupedExample1)(); };
TuiInputCardGroupedExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCardGroupedExample1, selectors: [["tui-input-card-grouped-example-1"]], decls: 4, vars: 9, consts: [[3, "cardSrc", "formControl"], [3, "formControl", "error"]], template: function TuiInputCardGroupedExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-input-card-grouped", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tuiFieldError");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardSrc", ctx.card)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))));
    } }, directives: [_addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["TuiErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardGroupedExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-card-grouped-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-card-grouped/examples/2/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/examples/2/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiInputCardGroupedExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedExample2", function() { return TuiInputCardGroupedExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card-grouped/input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");













function TuiInputCardGroupedExample2_tui_data_list_3_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardNumber", item_r3.card.slice(0 - 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r3.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.card.slice(0 - 5));
} }
function TuiInputCardGroupedExample2_tui_data_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function TuiInputCardGroupedExample2_tui_data_list_3_Template_tui_data_list_keydown_escape_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r5.onEsc(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputCardGroupedExample2_tui_data_list_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r7.onClick(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiInputCardGroupedExample2_tui_data_list_3_button_5_Template, 6, 5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
class TuiInputCardGroupedExample2 {
    constructor() {
        this.items = [
            { card: `4321***1234`, expire: `12/21`, name: `Salary`, bank: `Tinkoff` },
            {
                card: `8765***5678`,
                expire: `03/42`,
                cvc: `***`,
                name: `Tips`,
                bank: `Bank of America`,
            },
            { card: `4200***9000`, name: `Dogecoins`, bank: `Crypto` },
        ];
        this.card = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ meta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.items[0]) });
    }
    onClick(component) {
        var _a;
        (_a = this.card.get(`meta`)) === null || _a === void 0 ? void 0 : _a.setValue(null);
        this.onEsc(component);
    }
    onEsc(component) {
        var _a;
        (_a = component.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.focus();
        component.open = false;
    }
}
TuiInputCardGroupedExample2.ɵfac = function TuiInputCardGroupedExample2_Factory(t) { return new (t || TuiInputCardGroupedExample2)(); };
TuiInputCardGroupedExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCardGroupedExample2, selectors: [["tui-input-card-grouped-example-2"]], decls: 4, vars: 1, consts: [[3, "formGroup"], ["formControlName", "meta"], ["component", ""], [3, "keydown.escape", 4, "tuiDataList"], [3, "keydown.escape"], ["tuiOption", "", "size", "l", 3, "click"], ["src", "tuiIconPlus", 1, "new"], [1, "label"], ["tuiOption", "", "size", "l", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", "size", "l", 3, "value"], ["size", "s", 1, "card", 3, "cardNumber"], ["tuiLabel", "", 1, "label", 3, "label"]], template: function TuiInputCardGroupedExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-card-grouped", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputCardGroupedExample2_tui_data_list_3_Template, 6, 1, "tui-data-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.card);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputCardGroupedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDataListDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["TuiDataListComponent"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_6__["TuiOptionComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["TuiCardComponent"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_10__["TuiLabelComponent"]], styles: [".new[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 1.5rem;\n  border-radius: 4px;\n  background: var(--tui-secondary);\n  color: var(--tui-link);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--tui-support-01);\n}\nbutton[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%] {\n  background: var(--tui-support-05);\n}\n.label[_ngcontent-%COMP%] {\n  margin: 0 auto 0 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LWNhcmQtZ3JvdXBlZC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFDSSxpQ0FBQTtBQ0FKO0FERUk7RUFDSSxpQ0FBQTtBQ0FSO0FESUE7RUFDSSx3QkFBQTtBQ0ZKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldyB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktbGluayk7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0wMSk7XG5cbiAgICBidXR0b246bnRoLWNoaWxkKDQpICYge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0wNSk7XG4gICAgfVxufVxuXG4ubGFiZWwge1xuICAgIG1hcmdpbjogMCBhdXRvIDAgMC43NXJlbTtcbn1cbiIsIi5uZXcge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS10dWktbGluayk7XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1zdXBwb3J0LTAxKTtcbn1cbmJ1dHRvbjpudGgtY2hpbGQoNCkgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc3VwcG9ydC0wNSk7XG59XG4ubGFiZWwge1xuICBtYXJnaW46IDAgYXV0byAwIDAuNzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardGroupedExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-card-grouped-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-card-grouped/examples/3/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/examples/3/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiInputCardGroupedExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedExample3", function() { return TuiInputCardGroupedExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card-grouped/input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");











function TuiInputCardGroupedExample3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
const _c0 = function () { return []; };
class TuiInputCardGroupedExample3 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["tuiCardNumberValidator"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["tuiCardExpireValidator"],
        ]);
    }
}
TuiInputCardGroupedExample3.ɵfac = function TuiInputCardGroupedExample3_Factory(t) { return new (t || TuiInputCardGroupedExample3)(); };
TuiInputCardGroupedExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCardGroupedExample3, selectors: [["tui-input-card-grouped-example-3"]], decls: 6, vars: 9, consts: [[3, "cardSrc", "formControl"], ["polymorpheus", ""], ["template", "polymorpheus"], [3, "formControl", "error"], ["width", "32", "height", "32", "alt", "custom-icon", "src", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg"]], template: function TuiInputCardGroupedExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-input-card-grouped", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputCardGroupedExample3_ng_template_1_Template, 1, 0, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "tuiFieldError");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardSrc", _r0)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))));
    } }, directives: [_addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusTemplate"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_6__["TuiErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardGroupedExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-card-grouped-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-card-grouped/examples/4/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/examples/4/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiInputCardGroupedExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedExample4", function() { return TuiInputCardGroupedExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card-grouped/input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");







class TuiInputCardGroupedExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
            card: ``,
            expire: ``,
            cvc: `***`,
        });
    }
}
TuiInputCardGroupedExample4.ɵfac = function TuiInputCardGroupedExample4_Factory(t) { return new (t || TuiInputCardGroupedExample4)(); };
TuiInputCardGroupedExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCardGroupedExample4, selectors: [["tui-input-card-grouped-example-4"]], decls: 1, vars: 1, consts: [[3, "formControl"]], template: function TuiInputCardGroupedExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-input-card-grouped", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardGroupedExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-card-grouped-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-card-grouped/input-card-grouped.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/input-card-grouped.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExampleTuiInputCardGroupedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCardGroupedComponent", function() { return ExampleTuiInputCardGroupedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _abstract_interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/interactive */ "./src/modules/components/abstract/interactive.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-card-grouped/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-card-grouped/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-card-grouped/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-card-grouped/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-commerce/components/input-card-grouped/input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2004268377756025676$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__1 = goog.getMsg("With validation");
    I18N_0 = MSG_EXTERNAL_2004268377756025676$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟576c74546986ae39d66902c10b330cef17c11742␟2004268377756025676:With validation`;
}
const _c2 = ["heading", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7395231025733752915$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__4 = goog.getMsg("With saved cards");
    I18N_3 = MSG_EXTERNAL_7395231025733752915$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟0b16cb2ad793d315ec0749caae74c51ea59f9dd1␟7395231025733752915:With saved cards`;
}
const _c5 = ["heading", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1342170688498447742$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__7 = goog.getMsg("With custom card template");
    I18N_6 = MSG_EXTERNAL_1342170688498447742$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟9c59728c1210370022fbb770bda0d0b8fe1631c6␟1342170688498447742:With custom card template`;
}
const _c8 = ["heading", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_134626459094672385$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__10 = goog.getMsg("Custom form state");
    I18N_9 = MSG_EXTERNAL_134626459094672385$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟d44becd24fa66aa31f134974747e1892db15c99a␟134626459094672385:Custom form state`;
}
const _c11 = ["heading", I18N_9];
function ExampleTuiInputCardGroupedComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "InputCardGrouped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is used to input a card as a separated control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-input-card-grouped-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-input-card-grouped-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-input-card-grouped-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-input-card-grouped-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1504302675191121980$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__13 = goog.getMsg(" Add {$startTagCode}tuiCreateLuhnValidator(customMessage?){$closeTagCode} to control validators to validate it with Luhn algorithm ", { "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD" });
    I18N_12 = MSG_EXTERNAL_1504302675191121980$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-card-grouped", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("binChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template_tui_input_card_grouped_binChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onBinChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("autocompleteEnabled", ctx_r3.autocompleteEnabled)("cardSrc", ctx_r3.cardSrc)("codeLength", ctx_r3.codeLength)("exampleText", ctx_r3.exampleText)("readOnly", ctx_r3.readOnly)("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed);
} }
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-card", 16);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_14 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7840524756891506982$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___17 = goog.getMsg(" Browser autocomplete of card ");
    I18N_16 = MSG_EXTERNAL_7840524756891506982$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟83ad20bde41f48a65e1ef7997973b9229940e933␟7840524756891506982: Browser autocomplete of card `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4001054117328009637$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___19 = goog.getMsg(" SVG card icon ");
    I18N_18 = MSG_EXTERNAL_4001054117328009637$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟fc048dc15100d76d9c59634a4cd574e69f6c4c27␟4001054117328009637: SVG card icon `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6871064863310761724$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___21 = goog.getMsg(" An example of input ");
    I18N_20 = MSG_EXTERNAL_6871064863310761724$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟26c4e17869f9a11168b776fecc88a93ba994a18b␟6871064863310761724: An example of input `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7430416980180297706$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___23 = goog.getMsg(" Code length ");
    I18N_22 = MSG_EXTERNAL_7430416980180297706$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟8772d8eccb2dc868d0dec6c6c5db9e2264085070␟7430416980180297706: Code length `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3816861219916976422$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___25 = goog.getMsg(" BIN value (card first 6 symbols) ");
    I18N_24 = MSG_EXTERNAL_3816861219916976422$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟8457ba25b1fa93009d4263b1ed4635c9d9c693f1␟3816861219916976422: BIN value (card first 6 symbols) `;
}
function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiInputCardGroupedComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template, 1, 11, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.autocompleteEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cardSrcSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.exampleText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.codeLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "inherited-documentation");
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.autocompleteEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.getContentVariants(_r4))("documentationPropertyValue", ctx_r1.cardSrcSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.exampleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.codeLengthVariants)("documentationPropertyValue", ctx_r1.codeLength);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1773577931530005511$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiInputCardGroupedModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_26 = MSG_EXTERNAL_1773577931530005511$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟33a49eba1a9f88fb51f268aeef91a4fce5f46b26␟1773577931530005511: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputCardGroupedModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
    I18N_28 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputCardGroupedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputCardGroupedComponent extends _abstract_interactive__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiInteractive"] {
    constructor(alertService) {
        super();
        this.alertService = alertService;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-input-card-grouped-examples-4-index-ts */ "!!raw-loader!-input-card-grouped-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!../input-card-grouped/examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-input-card-grouped-examples-4-index-html */ "!!raw-loader!-input-card-grouped-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!../input-card-grouped/examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/4/index.html")),
        };
        this.cards = {
            common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
            universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
            mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
        };
        this.cardSrcVariants = Object.keys(this.cards);
        this.cardSrcSelected = null;
        this.autocompleteEnabled = false;
        this.exampleText = `0000 0000 0000 0000`;
        this.codeLengthVariants = [3, 4];
        this.codeLength = this.codeLengthVariants[0];
        this.pseudoInvalid = null;
        this.readOnly = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    get cardSrc() {
        return typeof this.cardSrcSelected === `string`
            ? this.cards[this.cardSrcSelected]
            : this.cardSrcSelected;
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
    onBinChange(bin) {
        this.alertService.open(`bin: ${bin}`).subscribe();
    }
    getContentVariants(template) {
        return [...this.cardSrcVariants, template];
    }
}
ExampleTuiInputCardGroupedComponent.ɵfac = function ExampleTuiInputCardGroupedComponent_Factory(t) { return new (t || ExampleTuiInputCardGroupedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
ExampleTuiInputCardGroupedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputCardGroupedComponent, selectors: [["example-input-card-grouped"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCardGroupedComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputCardGrouped", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], ["id", "validation", 3, "content", 6, "heading"], ["id", "select", 3, "content", 6, "heading"], ["id", "cardSrc", 3, "content", 6, "heading"], ["id", "form-state", 3, "content", 6, "heading"], [3, "control"], [1, "b-full-width", "tui-space_bottom-6"], ["template", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autocompleteEnabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardSrc", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "exampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "codeLength", "documentationPropertyMode", "input", "documentationPropertyType", "3 | 4", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "binChange", "documentationPropertyMode", "output", "documentationPropertyType", "string | null"], [3, "formControl", "autocompleteEnabled", "cardSrc", "codeLength", "exampleText", "readOnly", "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "binChange"], ["cardNumber", "1234", "paymentSystem", "maestro", "size", "s", 1, "card"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputCardGroupedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardGroupedComponent_ng_template_1_Template, 16, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCardGroupedComponent_ng_template_2_Template, 16, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCardGroupedComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiInputCardGroupedExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiInputCardGroupedExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputCardGroupedExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputCardGroupedExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_16__["InheritedDocumentationComponent"], _addon_commerce_components_input_card_grouped_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_17__["TuiInputCardGroupedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["TuiCardComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocCodeComponent"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.control[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0.25rem;\n}\n.control[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 1.25rem;\n}\n.error[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n}\n.card[_ngcontent-%COMP%] {\n  background: #87ceeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvaW5wdXQtY2FyZC1ncm91cGVkLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtY2FyZC1ncm91cGVkL2lucHV0LWNhcmQtZ3JvdXBlZC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBREtKO0FDRkE7RUFDSSxPQUFBO0VBQ0Esc0JBQUE7QURJSjtBQ0ZJO0VBQ0kscUJBQUE7QURJUjtBQ0FBO0VBQ0ksZUFBQTtBREVKO0FDQ0E7RUFDSSwrQkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtBREFKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvaW5wdXQtY2FyZC1ncm91cGVkLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250cm9sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG59XG4uZXJyb3Ige1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4udGl0bGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjODdjZWViO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250cm9sIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgfVxufVxuXG4uZXJyb3Ige1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZDogIzg3Y2VlYjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputCardGroupedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-input-card-grouped`,
                templateUrl: `./input-card-grouped.template.html`,
                styleUrls: [`./input-card-grouped.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCardGroupedComponent),
                    },
                ],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-card-grouped/input-card-grouped.module.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/components/input-card-grouped/input-card-grouped.module.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleTuiInputCardGroupedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCardGroupedModule", function() { return ExampleTuiInputCardGroupedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-card-grouped/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-card-grouped/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-card-grouped/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-card-grouped/examples/4/index.ts");
/* harmony import */ var _input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-card-grouped.component */ "./src/modules/components/input-card-grouped/input-card-grouped.component.ts");

















class ExampleTuiInputCardGroupedModule {
}
ExampleTuiInputCardGroupedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputCardGroupedModule });
ExampleTuiInputCardGroupedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputCardGroupedModule_Factory(t) { return new (t || ExampleTuiInputCardGroupedModule)(); }, imports: [[
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"])),
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputCardGroupedModule, { declarations: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiInputCardGroupedExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiInputCardGroupedExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiInputCardGroupedExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_13__["TuiInputCardGroupedExample4"]], imports: [_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"]], exports: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputCardGroupedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardGroupedModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"])),
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
                ],
                declarations: [
                    _input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiInputCardGroupedExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiInputCardGroupedExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiInputCardGroupedExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_13__["TuiInputCardGroupedExample4"],
                ],
                exports: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTuiInputCardGroupedComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-card-grouped-input-card-grouped-module.js.map