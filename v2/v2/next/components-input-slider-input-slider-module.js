(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-slider-input-slider-module"],{

/***/ "./src/modules/components/input-slider/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-slider/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiInputSliderExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputSliderExample1", function() { return TuiInputSliderExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");








class TuiInputSliderExample1 {
    constructor() {
        this.min = 5;
        this.max = 20;
        this.sliderStep = 1;
        this.steps = (this.max - this.min) / this.sliderStep;
        this.quantum = 0.01;
        this.hint = `Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](6.5);
    }
}
TuiInputSliderExample1.ɵfac = function TuiInputSliderExample1_Factory(t) { return new (t || TuiInputSliderExample1)(); };
TuiInputSliderExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputSliderExample1, selectors: [["tui-input-slider-example-1"]], decls: 2, vars: 6, consts: [[1, "control", 3, "min", "max", "steps", "quantum", "formControl", "tuiHintContent"]], template: function TuiInputSliderExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select interest rate\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("steps", ctx.steps)("quantum", ctx.quantum)("formControl", ctx.control)("tuiHintContent", ctx.hint);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerDirective"]], styles: [".control[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1zbGlkZXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtc2xpZGVyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5jb250cm9sIHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAuY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmNvbnRyb2wge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputSliderExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-slider-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/examples/2/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-slider/examples/2/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiInputSliderExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputSliderExample2", function() { return TuiInputSliderExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");








class TuiInputSliderExample2 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](40);
        this.segments = 5;
        this.max = 100;
        this.min = 0;
    }
    increase() {
        this.control.patchValue(Math.min(this.control.value + 20, this.max));
    }
    decrease() {
        this.control.patchValue(Math.max(this.control.value - 20, this.min));
    }
}
TuiInputSliderExample2.ɵfac = function TuiInputSliderExample2_Factory(t) { return new (t || TuiInputSliderExample2)(); };
TuiInputSliderExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputSliderExample2, selectors: [["tui-input-slider-example-2"]], decls: 16, vars: 4, consts: [[1, "wrapper"], ["new", "", 3, "min", "max", "segments", "formControl"], [1, "slider-ticks-labels"], ["tuiIconButton", "", "type", "button", "size", "xs", "icon", "tuiIconDislikeLarge", "appearance", "icon", 3, "click"], ["tuiIconButton", "", "type", "button", "size", "xs", "icon", "tuiIconLikeLarge", "appearance", "icon", 3, "click"]], template: function TuiInputSliderExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Rate your mind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputSliderExample2_Template_button_click_5_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputSliderExample2_Template_button_click_15_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("segments", 5)("formControl", ctx.control);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputSliderComponent"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiNewInputSliderDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 70%;\n}\n@media screen and (max-width: 37.4625em) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.slider-ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-02);\n  margin-top: 0.5rem;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1zbGlkZXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvc2xpZGVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0hBO0VDSEksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RURJQSx5QkFBQTtFQUNBLGtCQUFBO0FETUo7QUVUSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGV1I7QUVUUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZXWjtBRVJRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRlVaO0FFTkk7RUFDSSxtREFBQTtBRlFSO0FFTEk7O0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBRk1SO0FFSFk7O0VBQ0ksV0FBQTtBRk1oQjtBRUhZOztFQUNJLFlBQUE7QUZNaEIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA3MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2xpZGVyLXRpY2tzLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTAuNXJlbTtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMXJlbTtcbn1cbnR1aS1pbnB1dC1yYW5nZSArIC5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi53cmFwcGVyIHtcbiAgICB3aWR0aDogNzAlO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgICAudHVpLXNsaWRlci10aWNrcy1sYWJlbHMoKTtcblxuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputSliderExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-slider-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/examples/3/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-slider/examples/3/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiInputSliderExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputSliderExample3", function() { return TuiInputSliderExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








function TuiInputSliderExample3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r1);
} }
class TuiInputSliderExample3 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10000);
        this.max = 1000000;
        this.min = 0;
        this.totalSteps = 100;
        this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
        this.keySteps = [
            // [percent, value]
            [25, 10000],
            [50, 100000],
            [75, 500000],
        ];
    }
}
TuiInputSliderExample3.ɵfac = function TuiInputSliderExample3_Factory(t) { return new (t || TuiInputSliderExample3)(); };
TuiInputSliderExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputSliderExample3, selectors: [["tui-input-slider-example-3"]], decls: 9, vars: 8, consts: [[1, "wrapper"], ["new", "", 3, "min", "max", "steps", "keySteps", "formControl", "segments"], [1, "slider-ticks-labels"], [4, "ngFor", "ngForOf"]], template: function TuiInputSliderExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Not linear growing slider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputSliderExample3_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("steps", ctx.totalSteps)("keySteps", ctx.keySteps)("formControl", ctx.control)("segments", ctx.ticksLabels.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticksLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputSliderComponent"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiNewInputSliderDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.slider-ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-02);\n  margin-top: 0.5rem;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1zbGlkZXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvc2xpZGVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0hBO0VDSEksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RURJQSx5QkFBQTtFQUNBLGtCQUFBO0FETUo7QUVUSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGV1I7QUVUUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZXWjtBRVJRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRlVaO0FFTkk7RUFDSSxtREFBQTtBRlFSO0FFTEk7O0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBRk1SO0FFSFk7O0VBQ0ksV0FBQTtBRk1oQjtBRUhZOztFQUNJLFlBQUE7QUZNaEIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2xpZGVyLXRpY2tzLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTAuNXJlbTtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMXJlbTtcbn1cbnR1aS1pbnB1dC1yYW5nZSArIC5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi53cmFwcGVyIHtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgICAudHVpLXNsaWRlci10aWNrcy1sYWJlbHMoKTtcblxuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputSliderExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-slider-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/examples/4/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-slider/examples/4/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiInputSliderExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputSliderExample4", function() { return TuiInputSliderExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");









function TuiInputSliderExample4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 3);
} }
function TuiInputSliderExample4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 4);
} }
class TuiInputSliderExample4 {
    constructor() {
        this.userAnswer = 2;
    }
}
TuiInputSliderExample4.ɵfac = function TuiInputSliderExample4_Factory(t) { return new (t || TuiInputSliderExample4)(); };
TuiInputSliderExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputSliderExample4, selectors: [["tui-input-slider-example-4"]], decls: 6, vars: 4, consts: [["tuiHintContent", "Select the answer to see how the right custom content changes", 1, "control", 3, "min", "max", "tuiTextfieldCustomContent", "ngModel", "ngModelChange"], ["right", ""], ["wrong", ""], ["src", "tuiIconCheckCircleLarge", 1, "success"], ["src", "tuiIconCloseCircleLarge", 1, "error"]], template: function TuiInputSliderExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputSliderExample4_Template_tui_input_slider_ngModelChange_0_listener($event) { return ctx.userAnswer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2+2=?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputSliderExample4_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputSliderExample4_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 10)("tuiTextfieldCustomContent", ctx.userAnswer === 4 ? _r0 : _r2)("ngModel", ctx.userAnswer);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputSliderComponent"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_4__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCustomContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"]], styles: [".control[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.success[_ngcontent-%COMP%] {\n  color: var(--tui-success-fill);\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--tui-error-fill);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1zbGlkZXIvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0hBO0VBQ0ksOEJBQUE7QURLSjtBQ0ZBO0VBQ0ksNEJBQUE7QURJSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtc2xpZGVyL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5jb250cm9sIHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAuY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLXR1aS1zdWNjZXNzLWZpbGwpO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHZhcigtLXR1aS1lcnJvci1maWxsKTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmNvbnRyb2wge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnN1Y2Nlc3Mge1xuICAgIGNvbG9yOiB2YXIoLS10dWktc3VjY2Vzcy1maWxsKTtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputSliderExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-slider-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/examples/5/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-slider/examples/5/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiInputSliderExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputSliderExample5", function() { return TuiInputSliderExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");








class TuiInputSliderExample5 {
    constructor() {
        this.max = 100;
        this.min = 0;
        this.controlWithMinLabel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.min);
        this.controlWithMaxLabel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.max);
        this.customLabel = ({ $implicit, }) => {
            switch ($implicit) {
                case this.max:
                    return `Digits can't describe my love!`;
                case this.min:
                    return `Just a label for min value`;
                case (this.max - this.min) / 2:
                    return `Middle`;
                default:
                    return $implicit;
            }
        };
    }
}
TuiInputSliderExample5.ɵfac = function TuiInputSliderExample5_Factory(t) { return new (t || TuiInputSliderExample5)(); };
TuiInputSliderExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputSliderExample5, selectors: [["tui-input-slider-example-5"]], decls: 9, vars: 9, consts: [[1, "control"], ["new", "", "tuiTextfieldSize", "m", 3, "min", "max", "segments", "valueContent", "formControl"], [1, "slider-ticks-labels"], [1, "control", 3, "min", "max", "valueContent", "formControl"]], template: function TuiInputSliderExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-input-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Other custom label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-input-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " How much do you love Taiga UI?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("segments", 2)("valueContent", ctx.customLabel)("formControl", ctx.controlWithMinLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("valueContent", ctx.customLabel)("formControl", ctx.controlWithMaxLabel);
    } }, directives: [_kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputSliderComponent"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_4__["TuiNewInputSliderDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 3rem;\n  row-gap: 1rem;\n}\n.control[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 17rem;\n}\n.slider-ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n  margin-top: 0.25rem;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .slider-ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1zbGlkZXIvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvc2xpZGVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FES0o7QUNGQTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtBRElKO0FDREE7RUNQSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFRE9BLG1CQUFBO0FES0o7QUVWSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGWVI7QUVWUTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZZWjtBRVRRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRldaO0FFUEk7RUFDSSxtREFBQTtBRlNSO0FFTkk7O0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBRk9SO0FFSlk7O0VBQ0ksV0FBQTtBRk9oQjtBRUpZOztFQUNJLFlBQUE7QUZPaEIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXNsaWRlci9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sdW1uLWdhcDogM3JlbTtcbiAgcm93LWdhcDogMXJlbTtcbn1cbi5jb250cm9sIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxN3JlbTtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTAuNXJlbTtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAuc2xpZGVyLXRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMXJlbTtcbn1cbnR1aS1pbnB1dC1yYW5nZSArIC5zbGlkZXItdGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnNsaWRlci10aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBjb2x1bW4tZ2FwOiAzcmVtO1xuICAgIHJvdy1nYXA6IDFyZW07XG59XG5cbi5jb250cm9sIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMTdyZW07XG59XG5cbi5zbGlkZXItdGlja3MtbGFiZWxzIHtcbiAgICAudHVpLXNsaWRlci10aWNrcy1sYWJlbHMoKTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputSliderExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-slider-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/input-slider.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-slider/input-slider.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiInputSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputSliderComponent", function() { return ExampleTuiInputSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-slider/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-slider/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-slider/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-slider/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input-slider/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");






























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4701019213831986187$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__1 = goog.getMsg("Component to input a limited range");
    I18N_0 = MSG_EXTERNAL_4701019213831986187$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟da84b6ac893fbeaa337a2ee175f98e44ea263e53␟4701019213831986187:Component to input a limited range`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__3 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", { "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_2 = MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#4\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__5 = goog.getMsg(" This component is being refactored. Soon\u00A0(next\u00A0major\u00A0release) you will see the fresh version of it! ");
    I18N_4 = MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟09456f65f3a00702ca9aedfa0f1bedf1b28d63ea␟1346465782286970335: This component is being refactored. Soon (next major release) you will see the fresh version of it! `;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5413578172167275671$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__7 = goog.getMsg(" Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of {$startTagCode}InputSlider{$closeTagCode} . ", { "startTagCode": "\uFFFD#10\uFFFD", "closeTagCode": "\uFFFD/#10\uFFFD" });
    I18N_6 = MSG_EXTERNAL_5413578172167275671$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟bfb2903390228726a5f8ff6f51253b7e93c97766␟5413578172167275671: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:InputSlider${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9082621872322123077$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__9 = goog.getMsg(" However, if you are going to use this component, we recommend to use new version. To enable the \"new version\"-mode, add {$startTagCode}new{$closeTagCode} directive. Example:\u00A0 {$startTagCode}<tui\u2011input\u2011slider\u00A0new\u00A0...>{$closeTagCode}", { "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]", "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]" });
    I18N_8 = MSG_EXTERNAL_9082621872322123077$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟8feb5bfef9a4b7cff28749375a1c23e744c51ef9␟9082621872322123077: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:new${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:<tui‑input‑slider new ...>${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__11 = goog.getMsg("Basic");
    I18N_10 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4430738955357466377$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__14 = goog.getMsg("With slider segments + ticks labels");
    I18N_13 = MSG_EXTERNAL_4430738955357466377$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟414bc269fadd0a392ae0e0c30dddc639ecf38308␟4430738955357466377:With slider segments + ticks labels`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6496774841790769025$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__17 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", { "startTagCode": "\uFFFD#24\uFFFD", "closeTagCode": "\uFFFD/#24\uFFFD" });
    I18N_16 = MSG_EXTERNAL_6496774841790769025$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\uFFFD#24\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__19 = goog.getMsg("KeySteps");
    I18N_18 = MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
}
const _c20 = ["heading", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__22 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", { "startTagDt": "\uFFFD#30\uFFFD", "startTagStrong": "\uFFFD#31\uFFFD", "closeTagStrong": "\uFFFD/#31\uFFFD", "closeTagDt": "\uFFFD/#30\uFFFD", "startTagDd": "\uFFFD#32\uFFFD", "closeTagDd": "\uFFFD/#32\uFFFD" });
    I18N_21 = MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#30\uFFFD"}:START_TAG_DT:${"\uFFFD#31\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#31\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#30\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#32\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#32\uFFFD"}:CLOSE_TAG_DD:`;
}
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1981532857133559654$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__24 = goog.getMsg("With right label");
    I18N_23 = MSG_EXTERNAL_1981532857133559654$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟818721a28fa595e0323921b4c1236d050863888a␟1981532857133559654:With right label`;
}
const _c25 = ["heading", I18N_23];
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1831689276170871729$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__27 = goog.getMsg("With min and max labels");
    I18N_26 = MSG_EXTERNAL_1831689276170871729$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟b3392662fa9d7ced0969f5600ace480d8814f9b2␟1831689276170871729:With min and max labels`;
}
const _c28 = ["heading", I18N_26];
function ExampleTuiInputSliderComponent_ng_template_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Look into this example to understand difference between input-props ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "[steps]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[quantum]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExampleTuiInputSliderComponent_ng_template_1_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PolymorpheusContent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " into property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[valueContent]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to create custom label for selected value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExampleTuiInputSliderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](12, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](16, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiInputSliderComponent_ng_template_1_ng_template_17_Template, 8, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-input-slider-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](21, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tui-notification", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](23, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tui-input-slider-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dl", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](29, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "tui-input-slider-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tui-input-slider-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](38, _c28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ExampleTuiInputSliderComponent_ng_template_1_ng_template_39_Template, 8, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "tui-input-slider-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1)("description", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5)("description", _r5);
} }
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-slider", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Range ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.control)("min", ctx_r7.min)("max", ctx_r7.max)("quantum", ctx_r7.quantum)("steps", ctx_r7.steps)("segments", ctx_r7.segments)("keySteps", ctx_r7.keySteps)("valueContent", ctx_r7.valueContent)("prefix", ctx_r7.prefix)("postfix", ctx_r7.postfix)("focusable", ctx_r7.focusable)("readOnly", ctx_r7.readOnly)("pseudoInvalid", ctx_r7.pseudoInvalid)("pseudoFocused", ctx_r7.pseudoFocused)("pseudoHovered", ctx_r7.pseudoHovered)("pseudoPressed", ctx_r7.pseudoPressed)("tuiTextfieldAutocomplete", ctx_r7.autocomplete)("tuiTextfieldCleaner", ctx_r7.cleaner)("tuiTextfieldCustomContent", ctx_r7.customContentSelected)("tuiTextfieldExampleText", ctx_r7.exampleText)("tuiTextfieldSize", ctx_r7.size)("tuiHintContent", ctx_r7.hintContent)("tuiHintDirection", ctx_r7.hintDirection)("tuiHintMode", ctx_r7.hintMode)("size", ctx_r7.size)("pluralize", ctx_r7.pluralize)("segmentsPluralize", ctx_r7.segmentsPluralize)("minLabel", ctx_r7.minLabel)("maxLabel", ctx_r7.maxLabel)("secondary", ctx_r7.secondary);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___30 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_29 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___32 = goog.getMsg(" Min value ");
    I18N_31 = MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___34 = goog.getMsg(" Max value ");
    I18N_33 = MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1397462847420435865$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___36 = goog.getMsg(" Minimum indivisible value ");
    I18N_35 = MSG_EXTERNAL_1397462847420435865$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4237291911130958356$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___38 = goog.getMsg(" Number of actual discrete slider steps {$startParagraph} If property is not set (i.e. equals to default value {$startTagStrong}0{$closeTagStrong} ), number of steps equals {$startTagCode}(max\u00A0-\u00A0min)\u00A0/\u00A0quantum{$closeTagCode}{$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_37 = MSG_EXTERNAL_4237291911130958356$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___38;
}
else {
    I18N_37 = $localize `:␟ec72eae05a138e9b2354cf744ac484f3337a97fc␟4237291911130958356: Number of actual discrete slider steps ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: If property is not set (i.e. equals to default value ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:0${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: ), number of steps equals ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:(max - min) / quantum${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6136081272055532664$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___40 = goog.getMsg(" A number of visual segments (use {$startTagCode}1{$closeTagCode} for no ticks) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_39 = MSG_EXTERNAL_6136081272055532664$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___40;
}
else {
    I18N_39 = $localize `:␟82c284d033b06d2b8d3981aee455bfaacb6161a0␟6136081272055532664: A number of visual segments (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for no ticks) `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_718529244239473960$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___42 = goog.getMsg(" Key steps to bind slider position and value ");
    I18N_41 = MSG_EXTERNAL_718529244239473960$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___42;
}
else {
    I18N_41 = $localize `:␟1182f923918428fd2bd242abbe914d25c5bcc8b2␟718529244239473960: Key steps to bind slider position and value `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_41);
} }
var I18N_43;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2065100572177810620$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___44 = goog.getMsg(" A template for custom view of selected value. ");
    I18N_43 = MSG_EXTERNAL_2065100572177810620$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___44;
}
else {
    I18N_43 = $localize `:␟28b10912f5003a70ad541588744588b529765487␟2065100572177810620: A template for custom view of selected value. `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_43);
} }
var I18N_45;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_889438292388771446$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___46 = goog.getMsg(" A prefix symbol, like currency ");
    I18N_45 = MSG_EXTERNAL_889438292388771446$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___46;
}
else {
    I18N_45 = $localize `:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_45);
} }
var I18N_47;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8021237919117600846$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___48 = goog.getMsg(" A postfix symbol, like currency ");
    I18N_47 = MSG_EXTERNAL_8021237919117600846$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___48;
}
else {
    I18N_47 = $localize `:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_47);
} }
var I18N_49;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2066906981833700357$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___50 = goog.getMsg(" Label for min value. {$startParagraph} Use {$startTagCode}valueContent{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_49 = MSG_EXTERNAL_2066906981833700357$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___50;
}
else {
    I18N_49 = $localize `:␟1da2e49ec7a81707c60057691485b35c4d6e903c␟2066906981833700357: Label for min value. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:valueContent${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_51;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5350505271497478616$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___52 = goog.getMsg(" Label for max value. {$startParagraph} Use {$startTagCode}valueContent{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_51 = MSG_EXTERNAL_5350505271497478616$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___52;
}
else {
    I18N_51 = $localize `:␟78ea6e5653976a7cef87c559753b920e79a2301f␟5350505271497478616: Label for max value. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:valueContent${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_53;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7182917713268788214$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___54 = goog.getMsg(" Size {$startParagraph} Use {$startTagCode}tuiTextfieldSize{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_53 = MSG_EXTERNAL_7182917713268788214$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___54;
}
else {
    I18N_53 = $localize `:␟670816cf03fac29b2e5d23f77ef6e1fb501253bd␟7182917713268788214: Size ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiTextfieldSize${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_55;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5126699717542253184$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___56 = goog.getMsg(" Right label. {$startParagraph} Use {$startTagCode}tuiTextfieldCustomContent{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_55 = MSG_EXTERNAL_5126699717542253184$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___56;
}
else {
    I18N_55 = $localize `:␟e7e4494152db4972ca7474e5bbc2877b451a6a54␟5126699717542253184: Right label. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiTextfieldCustomContent${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_57;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3141591604148812993$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___58 = goog.getMsg(" Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the {$startLink} ICU format {$closeLink} for i18nPlural. {$startParagraph} Use {$startTagCode}postfix{$closeTagCode} instead. {$closeParagraph}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startParagraph": "\uFFFD#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD" });
    I18N_57 = MSG_EXTERNAL_3141591604148812993$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___58;
}
else {
    I18N_57 = $localize `:␟cbcfbbb5fb6ddb885527431a4656793ebc0b95b8␟3141591604148812993: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\uFFFD#1\uFFFD"}:START_LINK: ICU format ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: for i18nPlural. ${"\uFFFD#2\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:postfix${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_59;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2928562630242617259$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___60 = goog.getMsg(" Plural forms for {$startTagCode}segments{$closeTagCode}{$startParagraph}See examples how create ticks without this property (outside of the component).{$closeParagraph}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startParagraph": "\uFFFD#2\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD" });
    I18N_59 = MSG_EXTERNAL_2928562630242617259$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___60;
}
else {
    I18N_59 = $localize `:␟9dc520f459e8a0ce152252aa84109e2420ea8f9d␟2928562630242617259: Plural forms for ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:segments${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:See examples how create ticks without this property (outside of the component).${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputSliderComponent_ng_template_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiInputSliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputSliderComponent_ng_template_2_ng_template_1_Template, 2, 30, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputSliderComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputSliderComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputSliderComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputSliderComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.quantum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputSliderComponent_ng_template_2_ng_template_7_Template, 4, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.steps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputSliderComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.segments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputSliderComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.keySteps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputSliderComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.valueContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputSliderComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.prefix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputSliderComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.postfix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiInputSliderComponent_ng_template_2_ng_template_13_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.minLabel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiInputSliderComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.maxLabel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiInputSliderComponent_ng_template_2_ng_template_15_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiInputSliderComponent_ng_template_2_ng_template_16_Template, 3, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.secondarySelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiInputSliderComponent_ng_template_2_ng_template_17_Template, 4, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.pluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExampleTuiInputSliderComponent_ng_template_2_ng_template_18_Template, 3, 0, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.segmentsPluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.quantumVariants)("documentationPropertyValue", ctx_r1.quantum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.keyStepsVariants)("documentationPropertyValue", ctx_r1.keySteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.valueContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.postfix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.minLabelVariants)("documentationPropertyValue", ctx_r1.minLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.maxLabelVariants)("documentationPropertyValue", ctx_r1.maxLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.secondaryVariants)("documentationPropertyValue", ctx_r1.secondarySelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.pluralize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyDeprecated", true)("documentationPropertyValue", ctx_r1.segmentsPluralize);
} }
var I18N_61;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4365654195713409511$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__62 = goog.getMsg(" Import {$startTagCode}TuiInputSliderModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_61 = MSG_EXTERNAL_4365654195713409511$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__62;
}
else {
    I18N_61 = $localize `:␟5c5b855d47959ade58e22dd4b99dd7ce3a6b66f9␟4365654195713409511: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputSliderModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_63;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__64 = goog.getMsg("Add to the template:");
    I18N_63 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__64;
}
else {
    I18N_63 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputSliderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputSliderComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/import/insert-template.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index */ "!!raw-loader!-examples-1-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/1/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/1/index.less")),
        };
        this.example2 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index */ "!!raw-loader!-examples-2-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.ts")),
        };
        this.example3 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/3/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index */ "!!raw-loader!-examples-3-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/3/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/3/index.less")),
        };
        this.example4 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index */ "!!raw-loader!-examples-4-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.less")),
        };
        this.example5 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index */ "!!raw-loader!-examples-5-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.less")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.minVariants = [0, 1, 5, 7.77, -10];
        this.min = this.minVariants[0];
        this.maxVariants = [10, 100, 10000];
        this.max = this.maxVariants[0];
        this.segmentsVariants = [0, 1, 5, 13];
        this.segments = 1;
        this.steps = 0;
        this.quantumVariants = [1, 0.01, 0.001, 0.0001, 10, 20, 100];
        this.quantum = this.quantumVariants[0];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[1];
        this.prefix = ``;
        this.postfix = ``;
        this.pluralizeVariants = [
            [`year`, `years`, `years`],
            { one: `thing`, few: `things`, many: `things`, other: `things` },
            {
                one: `year`,
                other: `years`,
            },
        ];
        this.pluralize = null;
        this.segmentsPluralize = null;
        this.secondaryVariants = [`getter of percent`, `Something`];
        this.secondarySelected = null;
        this.valueContentVariants = [
            ``,
            `TOP SECRET`,
            ({ $implicit: val }) => val === this.max ? `MAX` : val,
            ({ $implicit: val }) => val === this.min ? `MIN` : val,
            ({ $implicit: val }) => (val === 5 ? `FIVE` : val),
        ];
        this.valueContent = this.valueContentVariants[0];
        this.minLabelVariants = [``, `Nothing`];
        this.minLabel = this.minLabelVariants[0];
        this.maxLabelVariants = [``, `Everything`];
        this.maxLabel = this.maxLabelVariants[0];
        this.keyStepsVariants = [[[50, 1000]]];
        this.keySteps = null;
        this.autocompleteVariants = [`off`, `transaction-amount`];
        this.autocomplete = ``;
        this.customContentVariants = [
            `tuiIconVisaMono`,
            `tuiIconMastercardMono`,
        ];
        this.customContentSelected = null;
    }
    get secondary() {
        return this.secondarySelected === this.secondaryVariants[0]
            ? `${Math.round((this.control.value / this.max) * 100)}%`
            : this.secondarySelected || ``;
    }
}
ExampleTuiInputSliderComponent.ɵfac = function ExampleTuiInputSliderComponent_Factory(t) { return ɵExampleTuiInputSliderComponent_BaseFactory(t || ExampleTuiInputSliderComponent); };
ExampleTuiInputSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputSliderComponent, selectors: [["example-tui-input-slider"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputSliderComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputSlider", "package", "KIT", "type", "components"], ["pageTab", ""], ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["status", "warning"], [1, "tui-space_top-0"], ["id", "base", 3, "content", "description", 6, "heading"], ["stepQuantumDescription", ""], ["id", "slider-segments", 3, "content", 6, "heading"], [1, "tui-space_bottom-8"], ["id", "key-steps", 3, "content", 6, "heading"], [1, "tui-space_bottom-8", "tui-space_top-0"], ["id", "right-label", 3, "content", 6, "heading"], ["id", "min-max-labels", 3, "content", "description", 6, "heading"], ["valueContentDescription", ""], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-polymorpheus"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "secondary", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize | Record<string, string>", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segmentsPluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize", 3, "documentationPropertyValues", "documentationPropertyDeprecated", "documentationPropertyValue", "documentationPropertyValueChange"], ["new", "", 3, "formControl", "min", "max", "quantum", "steps", "segments", "keySteps", "valueContent", "prefix", "postfix", "focusable", "readOnly", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "tuiTextfieldAutocomplete", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldExampleText", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "size", "pluralize", "segmentsPluralize", "minLabel", "maxLabel", "secondary"], ["tuiLink", "", "href", "https://unicode-org.github.io/icu/userguide/format_parse/messages/"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputSliderComponent_ng_template_1_Template, 42, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputSliderComponent_ng_template_2_Template, 20, 34, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputSliderComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputSliderExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputSliderExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputSliderExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputSliderExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputSliderExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_19__["InheritedDocumentationComponent"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_20__["TuiInputSliderComponent"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_20__["TuiNewInputSliderDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_21__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_22__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_23__["TuiTextfieldCustomContentDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_25__["TuiTextfieldSizeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_26__["TuiHintControllerDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_27__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputSliderComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputSliderComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-slider`,
                templateUrl: `./input-slider.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputSliderComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-slider/input-slider.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-slider/input-slider.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiInputSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputSliderModule", function() { return ExampleTuiInputSliderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-slider/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-slider/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-slider/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-slider/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input-slider/examples/5/index.ts");
/* harmony import */ var _input_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-slider.component */ "./src/modules/components/input-slider/input-slider.component.ts");
















class ExampleTuiInputSliderModule {
}
ExampleTuiInputSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputSliderModule });
ExampleTuiInputSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputSliderModule_Factory(t) { return new (t || ExampleTuiInputSliderModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputRangeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputSliderModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputSliderModule, { declarations: [_input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputSliderExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputSliderExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputSliderExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputSliderExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputSliderExample5"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputSliderModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputRangeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputSliderModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"])),
                ],
                declarations: [
                    _input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputSliderExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputSliderExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputSliderExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputSliderExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputSliderExample5"],
                ],
                exports: [_input_slider_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputSliderComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-slider-input-slider-module.js.map