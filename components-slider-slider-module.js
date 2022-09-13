(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slider-slider-module"],{

/***/ "./src/modules/components/slider/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample1", function() { return TuiSliderExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");







class TuiSliderExample1 {
    constructor() {
        this.value = 4;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](60);
    }
}
TuiSliderExample1.ɵfac = function TuiSliderExample1_Factory(t) { return new (t || TuiSliderExample1)(); };
TuiSliderExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample1, selectors: [["tui-slider-example-1"]], decls: 2, vars: 2, consts: [["tuiSlider", "", "type", "range", "max", "10", "step", "1", "size", "s", 3, "ngModel", "ngModelChange"], ["tuiSlider", "", "type", "range", "value", "60", "size", "m", 3, "formControl"]], template: function TuiSliderExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiSliderExample1_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl);
    } }, directives: [_kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample2", function() { return TuiSliderExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");





class TuiSliderExample2 {
}
TuiSliderExample2.ɵfac = function TuiSliderExample2_Factory(t) { return new (t || TuiSliderExample2)(); };
TuiSliderExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample2, selectors: [["tui-slider-example-2"]], decls: 3, vars: 0, consts: [["tuiSlider", "", "type", "range", "value", "65", 1, "first"], ["tuiSlider", "", "type", "range", "value", "80", 1, "second"], ["tuiSlider", "", "type", "range", "value", "40", 1, "third"]], template: function TuiSliderExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
    } }, directives: [_kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiSliderComponent"]], styles: [".first[_ngcontent-%COMP%] {\n  --tui-primary: var(--tui-support-01);\n  --tui-primary-hover: var(--tui-support-21);\n  --tui-primary-active: var(--tui-support-02);\n}\n.second[_ngcontent-%COMP%] {\n  --tui-primary: var(--tui-support-03);\n  --tui-primary-hover: var(--tui-support-04);\n  --tui-primary-active: var(--tui-positive);\n}\n.third[_ngcontent-%COMP%] {\n  --tui-primary: var(--tui-support-12);\n  --tui-primary-hover: var(--tui-support-07);\n  --tui-primary-active: var(--tui-support-08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7QUNDSjtBREVBO0VBQ0ksb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0FDQUo7QURHQTtFQUNJLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0IHtcbiAgICAtLXR1aS1wcmltYXJ5OiB2YXIoLS10dWktc3VwcG9ydC0wMSk7XG4gICAgLS10dWktcHJpbWFyeS1ob3ZlcjogdmFyKC0tdHVpLXN1cHBvcnQtMjEpO1xuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiB2YXIoLS10dWktc3VwcG9ydC0wMik7XG59XG5cbi5zZWNvbmQge1xuICAgIC0tdHVpLXByaW1hcnk6IHZhcigtLXR1aS1zdXBwb3J0LTAzKTtcbiAgICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktc3VwcG9ydC0wNCk7XG4gICAgLS10dWktcHJpbWFyeS1hY3RpdmU6IHZhcigtLXR1aS1wb3NpdGl2ZSk7XG59XG5cbi50aGlyZCB7XG4gICAgLS10dWktcHJpbWFyeTogdmFyKC0tdHVpLXN1cHBvcnQtMTIpO1xuICAgIC0tdHVpLXByaW1hcnktaG92ZXI6IHZhcigtLXR1aS1zdXBwb3J0LTA3KTtcbiAgICAtLXR1aS1wcmltYXJ5LWFjdGl2ZTogdmFyKC0tdHVpLXN1cHBvcnQtMDgpO1xufVxuIiwiLmZpcnN0IHtcbiAgLS10dWktcHJpbWFyeTogdmFyKC0tdHVpLXN1cHBvcnQtMDEpO1xuICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktc3VwcG9ydC0yMSk7XG4gIC0tdHVpLXByaW1hcnktYWN0aXZlOiB2YXIoLS10dWktc3VwcG9ydC0wMik7XG59XG4uc2Vjb25kIHtcbiAgLS10dWktcHJpbWFyeTogdmFyKC0tdHVpLXN1cHBvcnQtMDMpO1xuICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktc3VwcG9ydC0wNCk7XG4gIC0tdHVpLXByaW1hcnktYWN0aXZlOiB2YXIoLS10dWktcG9zaXRpdmUpO1xufVxuLnRoaXJkIHtcbiAgLS10dWktcHJpbWFyeTogdmFyKC0tdHVpLXN1cHBvcnQtMTIpO1xuICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktc3VwcG9ydC0wNyk7XG4gIC0tdHVpLXByaW1hcnktYWN0aXZlOiB2YXIoLS10dWktc3VwcG9ydC0wOCk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample3", function() { return TuiSliderExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








function TuiSliderExample3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSliderExample3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const label_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.patchValue(label_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", label_r1, " ");
} }
class TuiSliderExample3 {
    constructor() {
        this.labels = [0, 250, 500, 750, 1000];
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](250);
    }
    patchValue(newValue) {
        this.formControl.patchValue(newValue);
    }
}
TuiSliderExample3.ɵfac = function TuiSliderExample3_Factory(t) { return new (t || TuiSliderExample3)(); };
TuiSliderExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample3, selectors: [["tui-slider-example-3"]], decls: 7, vars: 6, consts: [["tuiSlider", "", "type", "range", "size", "m", 3, "max", "step", "segments", "formControl"], [1, "ticks-labels"], ["class", "tick-label", 3, "click", 4, "ngFor", "ngForOf"], [1, "tick-label", 3, "click"]], template: function TuiSliderExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiSliderExample3_button_2_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1000)("step", 250)("segments", 4)("formControl", ctx.formControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formControl.value);
    } }, directives: [_kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n.tick-label[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  outline: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvc2xpZGVyLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQ0tJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FGQ0o7QUVDSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGQ1I7QUVDUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZDWjtBRUVRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRkFaO0FFSUk7RUFDSSxtREFBQTtBRkZSO0FFS0k7O0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBRkpSO0FFT1k7O0VBQ0ksV0FBQTtBRkpoQjtBRU9ZOztFQUNJLFlBQUE7QUZKaEI7QUNuQ0E7RUV5Q0ksd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUY1Q0EsVUFBQTtFQUNBLGVBQUE7QUQwQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4udGlja3MtbGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbn1cbi50aWNrcy1sYWJlbHMgPiAqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIDAuNXJlbSk7XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMXJlbTtcbn1cbi50aWNrLWxhYmVsIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi50aWNrcy1sYWJlbHMge1xuICAgIC50dWktc2xpZGVyLXRpY2tzLWxhYmVscyhtKTtcbn1cblxuLnRpY2stbGFiZWwge1xuICAgIC5jbGVhcmJ0bigpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample4", function() { return TuiSliderExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");





class TuiSliderExample4 {
}
TuiSliderExample4.ɵfac = function TuiSliderExample4_Factory(t) { return new (t || TuiSliderExample4)(); };
TuiSliderExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample4, selectors: [["tui-slider-example-4"]], decls: 1, vars: 0, consts: [["tuiSlider", "", "type", "range", "disabled", "", "value", "80"]], template: function TuiSliderExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } }, directives: [_kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiSliderComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/examples/5/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/5/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample5", function() { return TuiSliderExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_helpers_slider_key_steps_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/helpers/slider-key-steps.directive */ "../kit/components/slider/helpers/slider-key-steps.directive.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiSliderExample5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r1);
} }
class TuiSliderExample5 {
    constructor() {
        this.labels = [`5 000`, `100 000`, `300 000`, `1 000 000`];
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](720000);
        this.segments = this.labels.length - 1;
        this.keySteps = [
            [0, 5000],
            [100 / 3, 100000],
            [(100 / 3) * 2, 300000],
            [100, 1000000],
        ];
    }
}
TuiSliderExample5.ɵfac = function TuiSliderExample5_Factory(t) { return new (t || TuiSliderExample5)(); };
TuiSliderExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample5, selectors: [["tui-slider-example-5"]], decls: 8, vars: 8, consts: [["tuiSlider", "", "type", "range", 3, "keySteps", "max", "segments", "formControl"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], ["automation-id", "key-steps-example-control-value"]], template: function TuiSliderExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiSliderExample5_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keySteps", ctx.keySteps)("max", 10 * ctx.segments)("segments", ctx.segments)("formControl", ctx.formControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.formControl.value));
    } }, directives: [_kit_components_slider_helpers_slider_key_steps_directive__WEBPACK_IMPORTED_MODULE_4__["TuiSliderKeyStepsDirective"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvc2xpZGVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQ0tJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FGQ0o7QUVDSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGQ1I7QUVDUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZDWjtBRUVRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRkFaO0FFSUk7RUFDSSxtREFBQTtBRkZSO0FFS0k7O0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBRkpSO0FFT1k7O0VBQ0ksV0FBQTtBRkpoQjtBRU9ZOztFQUNJLFlBQUE7QUZKaEIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4udGlja3MtbGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbn1cbi50aWNrcy1sYWJlbHMgPiAqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIDAuNXJlbSk7XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLnRpY2tzLWxhYmVscyB7XG4gICAgLnR1aS1zbGlkZXItdGlja3MtbGFiZWxzKG0pO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/examples/6/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/examples/6/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiSliderExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample6", function() { return TuiSliderExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _kit_components_slider_helpers_slider_thumb_label_slider_thumb_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/helpers/slider-thumb-label/slider-thumb-label.component */ "../kit/components/slider/helpers/slider-thumb-label/slider-thumb-label.component.ts");
/* harmony import */ var _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/manual-hint/manual-hint.directive */ "../core/directives/manual-hint/manual-hint.directive.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");














function TuiSliderExample6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.value), " ");
} }
class TuiSliderExample6 {
    constructor() {
        this.min = 0.5;
        this.max = 2;
        this.value = 1;
        this.active$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.showHint$ = this.active$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(active => (active ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(false)))));
    }
    onKeydown(show) {
        this.active$.next(show);
    }
    change(step) {
        this.value = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiClamp"])(this.value + step, this.min, this.max);
    }
}
TuiSliderExample6.ɵfac = function TuiSliderExample6_Factory(t) { return new (t || TuiSliderExample6)(); };
TuiSliderExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample6, selectors: [["tui-slider-example-6"]], hostBindings: function TuiSliderExample6_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerdown", function TuiSliderExample6_pointerdown_HostBindingHandler() { return ctx.onKeydown(true); })("pointerup", function TuiSliderExample6_pointerup_HostBindingHandler() { return ctx.onKeydown(false); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 7, consts: [[1, "zoom-controller"], ["tuiIconButton", "", "appearance", "flat", "tuiMode", "onDark", "size", "s", "icon", "tuiIconMinus", 1, "minus", 3, "click"], ["tuiSliderThumbLabel", "", 1, "slider-wrapper"], ["tuiHintMode", "onDark", "tuiHintDirection", "top-middle", 3, "tuiManualHint", "tuiManualHintShow"], ["hint", ""], ["tuiSlider", "", "type", "range", "step", "any", 3, "min", "max", "ngModel", "ngModelChange"], ["tuiIconButton", "", "appearance", "flat", "tuiMode", "onDark", "size", "s", "icon", "tuiIconPlus", 1, "plus", 3, "click"]], template: function TuiSliderExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSliderExample6_Template_button_click_1_listener() { return ctx.change(0 - 0.25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiSliderExample6_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiSliderExample6_Template_input_ngModelChange_7_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSliderExample6_Template_button_click_8_listener() { return ctx.change(0.25 - 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiManualHint", _r0)("tuiManualHintShow", !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.showHint$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("ngModel", ctx.value);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_7__["TuiModeDirective"], _kit_components_slider_helpers_slider_thumb_label_slider_thumb_label_component__WEBPACK_IMPORTED_MODULE_8__["TuiSliderThumbLabelComponent"], _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_9__["TuiManualHintDirective"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["PercentPipe"]], styles: [".zoom-controller[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  background: var(--tui-base-05);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 18rem;\n  column-gap: 0.5rem;\n}\n@media screen and (max-width: 37.4625em) {\n  .zoom-controller[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.slider-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.minus[_ngcontent-%COMP%] {\n  border-radius: 1rem 0 0 1rem;\n}\n.plus[_ngcontent-%COMP%] {\n  border-radius: 0 1rem 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NsaWRlci9leGFtcGxlcy82L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNERDtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0FJO0VBQUE7SUFDSSxlQUFBO0VER047QUFDRjtBQ0FBO0VBQ0ksT0FBQTtBREVKO0FDQ0E7RUFDSSw0QkFBQTtBRENKO0FDRUE7RUFDSSw0QkFBQTtBREFKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zbGlkZXIvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnpvb20tY29udHJvbGxlciB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDE4cmVtO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLnpvb20tY29udHJvbGxlciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2xpZGVyLXdyYXBwZXIge1xuICBmbGV4OiAxO1xufVxuLm1pbnVzIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDAgMXJlbTtcbn1cbi5wbHVzIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDFyZW0gMDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuQGJvcmRlci1yYWRpdXM6IDFyZW07XG5cbi56b29tLWNvbnRyb2xsZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA1KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5zbGlkZXItd3JhcHBlciB7XG4gICAgZmxleDogMTtcbn1cblxuLm1pbnVzIHtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cyAwIDAgQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wbHVzIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIEBib3JkZXItcmFkaXVzIEBib3JkZXItcmFkaXVzIDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, { onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: [`pointerdown`, [`true`]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: [`document:pointerup`, [`false`]]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/slider/slider.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/slider/slider.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSliderComponent", function() { return ExampleTuiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/slider/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/slider/examples/2/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/slider/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/slider/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/slider/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/slider/examples/6/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5051981916551990985$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}tuiSlider{$closeTagCode}{$closeTagDt}{$startTagDd} attribute component for native html tag {$startTagCode}<input type=\"range\" />{$closeTagCode} to choose a value from a limited range. {$closeTagDd}", { "startTagDt": "\uFFFD#2\uFFFD", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]", "closeTagDt": "\uFFFD/#2\uFFFD", "startTagDd": "\uFFFD#4\uFFFD", "closeTagDd": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_5051981916551990985$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tuiSlider${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: attribute component for native html tag ${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:<input type="range" />${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6584790122390772242$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Usage:{$closeTagStrong}{$startTagCode}<input tuiSlider type=\"range\" min=\"0\" max=\"100\" step=\"1\" />{$closeTagCode} . ", { "startTagStrong": "\uFFFD#13\uFFFD", "closeTagStrong": "\uFFFD/#13\uFFFD", "startTagCode": "\uFFFD#14\uFFFD", "closeTagCode": "\uFFFD/#14\uFFFD" });
    I18N_2 = MSG_EXTERNAL_6584790122390772242$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟d17c664a1f4783e75fde9506a0cc298adc5d77b8␟6584790122390772242:${"\uFFFD#13\uFFFD"}:START_TAG_STRONG:Usage:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD#14\uFFFD"}:START_TAG_CODE:<input tuiSlider type="range" min="0" max="100" step="1" />${"\uFFFD/#14\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__5 = goog.getMsg("Sizes");
    I18N_4 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__8 = goog.getMsg("Colors");
    I18N_7 = MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3070830036852627562$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__11 = goog.getMsg("With visual segments");
    I18N_10 = MSG_EXTERNAL_3070830036852627562$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7222770680801212686$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__14 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", { "startTagCode": "\uFFFD#26\uFFFD", "closeTagCode": "\uFFFD/#26\uFFFD" });
    I18N_13 = MSG_EXTERNAL_7222770680801212686$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\uFFFD#26\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#26\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7490709384902699339$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__16 = goog.getMsg(" The mixin accepts only a single argument \u2013 size of the slider ( {$startTagCode}m{$closeTagCode} or {$startTagCode}s{$closeTagCode} ). ", { "startTagCode": "[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]", "closeTagCode": "[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]" });
    I18N_15 = MSG_EXTERNAL_7490709384902699339$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:m${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:s${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: ). `;
}
I18N_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_15);
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5769292297914455214$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__18 = goog.getMsg("Disabled");
    I18N_17 = MSG_EXTERNAL_5769292297914455214$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`;
}
const _c19 = ["heading", I18N_17];
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2043510449142398319$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__21 = goog.getMsg("With key steps");
    I18N_20 = MSG_EXTERNAL_2043510449142398319$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`;
}
const _c22 = ["heading", I18N_20];
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__24 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", { "startTagDt": "\uFFFD#39\uFFFD", "startTagStrong": "\uFFFD#40\uFFFD", "closeTagStrong": "\uFFFD/#40\uFFFD", "closeTagDt": "\uFFFD/#39\uFFFD", "startTagDd": "\uFFFD#41\uFFFD", "closeTagDd": "\uFFFD/#41\uFFFD" });
    I18N_23 = MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#39\uFFFD"}:START_TAG_DT:${"\uFFFD#40\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#39\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#41\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#41\uFFFD"}:CLOSE_TAG_DD:`;
}
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7049130908974374044$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__26 = goog.getMsg("Complex");
    I18N_25 = MSG_EXTERNAL_7049130908974374044$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
}
const _c27 = ["heading", I18N_25];
function ExampleTuiSliderComponent_ng_template_1_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tuiSliderThumbLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " for positioning any content so it slides alongside the thumb. ");
} }
function ExampleTuiSliderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Read more about current input's type in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " MDN Docs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](12, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](16, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-slider-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-slider-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](22, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-notification", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](25, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](28, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-slider-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](33, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "tui-slider-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](36, _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "dl", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](38, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "tui-slider-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](44, _c27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ExampleTuiSliderComponent_ng_template_1_ng_template_45_Template, 4, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "tui-slider-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6)("description", _r3);
} }
function ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 20);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r5.max)("min", ctx_r5.min)("step", ctx_r5.step)("formControl", ctx_r5.control)("size", ctx_r5.size)("segments", ctx_r5.segments);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___29 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_28 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2441366795513240531$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___31 = goog.getMsg(" Native attribute {$startLink} max {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_30 = MSG_EXTERNAL_2441366795513240531$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: max ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8291402794161186662$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___33 = goog.getMsg(" Native attribute {$startLink} min {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_32 = MSG_EXTERNAL_8291402794161186662$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: min ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3867818126343854694$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___35 = goog.getMsg(" Native attribute {$startLink} step {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_34 = MSG_EXTERNAL_3867818126343854694$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___35;
}
else {
    I18N_34 = $localize `:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: step ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___37 = goog.getMsg(" Size ");
    I18N_36 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___37;
}
else {
    I18N_36 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_36);
} }
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1000197536572415972$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___39 = goog.getMsg("{$startParagraph}A number of visual segments{$closeParagraph} (use {$startTagCode}1{$closeTagCode} for no ticks) ", { "startParagraph": "\uFFFD#1\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_38 = MSG_EXTERNAL_1000197536572415972$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___39;
}
else {
    I18N_38 = $localize `:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:A number of visual segments${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH: (use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: for no ticks) `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiSliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template, 1, 6, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.step = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.segments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.segments);
} }
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__41 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
    I18N_40 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__41;
}
else {
    I18N_40 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_40);
var I18N_42;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__43 = goog.getMsg("Add to the template:");
    I18N_42 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__43;
}
else {
    I18N_42 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiSliderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Import an Angular module for forms and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TuiSliderModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " in the same module where you want to use our component: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-doc-code", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, I18N_42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleImportModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleDeclareForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleInsertTemplate);
} }
class ExampleTuiSliderComponent {
    constructor() {
        this.sizeVariants = [`s`, `m`];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1);
        this.max = 5;
        this.min = 0;
        this.step = 1;
        this.size = this.sizeVariants[1];
        this.segments = this.max;
        this.exampleImportModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/import/import-module.md"));
        this.exampleDeclareForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/import/declare-form.md"));
        this.exampleInsertTemplate = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/import/insert-template.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index */ "!!raw-loader!-examples-1-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/1/index.ts")),
        };
        this.example2 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index */ "!!raw-loader!-examples-2-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.ts")),
        };
        this.example3 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/3/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index */ "!!raw-loader!-examples-3-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/3/index.ts")),
        };
        this.example4 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index */ "!!raw-loader!-examples-4-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.ts")),
        };
        this.example5 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index */ "!!raw-loader!-examples-5-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.less")),
        };
        this.example6 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index */ "!!raw-loader!-examples-6-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.ts")),
        };
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
            return;
        }
        this.control.enable();
    }
}
ExampleTuiSliderComponent.ɵfac = function ExampleTuiSliderComponent_Factory(t) { return new (t || ExampleTuiSliderComponent)(); };
ExampleTuiSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiSliderComponent, selectors: [["example-slider"]], decls: 4, vars: 0, consts: [["header", "Slider", "package", "KIT", "type", "components"], ["pageTab", ""], ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "colors", 3, "content", 6, "heading"], ["id", "segments", 3, "content", 6, "heading"], [1, "tui-space_bottom-8"], [1, "tui-space_top-0"], ["id", "disabled", 3, "content", 6, "heading"], ["id", "keySteps", 3, "content", 6, "heading"], [1, "tui-space_bottom-8", "tui-space_top-0"], ["id", "complex", 3, "content", "description", 6, "heading"], ["tuiSliderThumbLabelDescription", ""], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "step", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiSlider", "", "type", "range", 3, "max", "min", "step", "formControl", "size", "segments"], ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max", "target", "_blank"], ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min", "target", "_blank"], ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step", "target", "_blank"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSliderComponent_ng_template_1_Template, 48, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiSliderComponent_ng_template_2_Template, 9, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSliderComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiSliderExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiSliderExample2"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationComponent"], _examples_3_index__WEBPACK_IMPORTED_MODULE_9__["TuiSliderExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_10__["TuiSliderExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_11__["TuiSliderExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_12__["TuiSliderExample6"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-slider`,
                templateUrl: `./slider.component.html`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider/slider.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/slider/slider.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSliderModule", function() { return ExampleTuiSliderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/slider/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/slider/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/slider/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/slider/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/slider/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/slider/examples/6/index.ts");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider.component */ "./src/modules/components/slider/slider.component.ts");
















class ExampleTuiSliderModule {
}
ExampleTuiSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiSliderModule });
ExampleTuiSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiSliderModule_Factory(t) { return new (t || ExampleTuiSliderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiManualHintModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiSliderComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiSliderModule, { declarations: [_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiSliderComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSliderExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSliderExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiSliderExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiSliderExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiSliderExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_12__["TuiSliderExample6"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiManualHintModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiManualHintModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiSliderComponent"])),
                ],
                declarations: [
                    _slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiSliderComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSliderExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSliderExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiSliderExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiSliderExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiSliderExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_12__["TuiSliderExample6"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-slider-slider-module.js.map