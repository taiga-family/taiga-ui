(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-range-input-range-module"],{

/***/ "./src/modules/components/input-range/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-range/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputRangeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputRangeExample1", function() { return TuiInputRangeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");










class TuiInputRangeExample1 {
    constructor() {
        this.min = 0;
        this.max = 20;
        this.sliderStep = 1;
        this.steps = (this.max - this.min) / this.sliderStep;
        this.quantum = 0.00001;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([3.14159, 15]);
    }
}
TuiInputRangeExample1.ɵfac = function TuiInputRangeExample1_Factory(t) { return new (t || TuiInputRangeExample1)(); };
TuiInputRangeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputRangeExample1, selectors: [["tui-input-range-example-1"]], decls: 1, vars: 7, consts: [["new", "", 3, "min", "max", "quantum", "steps", "formControl", "tuiTextfieldSize", "tuiTextfieldLabelOutside"]], template: function TuiInputRangeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-input-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("quantum", ctx.quantum)("steps", ctx.steps)("formControl", ctx.control)("tuiTextfieldSize", "m")("tuiTextfieldLabelOutside", true);
    } }, directives: [_kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputRangeComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldLabelOutsideDirective"]], styles: ["tui-input-range[_ngcontent-%COMP%] {\n                max-width: 30rem;\n            }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputRangeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-range-example-1`,
                templateUrl: `./index.html`,
                styles: [
                    `
            tui-input-range {
                max-width: 30rem;
            }
        `,
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/examples/2/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-range/examples/2/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputRangeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputRangeExample2", function() { return TuiInputRangeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");










class TuiInputRangeExample2 {
    constructor() {
        this.max = 50000001;
        this.min = 5001;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([this.min, this.max / 2]);
    }
}
TuiInputRangeExample2.ɵfac = function TuiInputRangeExample2_Factory(t) { return new (t || TuiInputRangeExample2)(); };
TuiInputRangeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputRangeExample2, selectors: [["tui-input-range-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_NUMBER_FORMAT"],
                useValue: {
                    decimalSeparator: `.`,
                    thousandSeparator: `,`,
                    zeroPadding: true,
                },
            },
        ])], decls: 1, vars: 4, consts: [["new", "", 3, "min", "max", "formControl", "tuiTextfieldLabelOutside"]], template: function TuiInputRangeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-input-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("formControl", ctx.control)("tuiTextfieldLabelOutside", true);
    } }, directives: [_kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputRangeComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_6__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldLabelOutsideDirective"]], styles: ["tui-input-range[_ngcontent-%COMP%] {\n                max-width: 30rem;\n            }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputRangeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-range-example-2`,
                templateUrl: `./index.html`,
                styles: [
                    `
            tui-input-range {
                max-width: 30rem;
            }
        `,
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_NUMBER_FORMAT"],
                        useValue: {
                            decimalSeparator: `.`,
                            thousandSeparator: `,`,
                            zeroPadding: true,
                        },
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/examples/3/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-range/examples/3/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputRangeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputRangeExample3", function() { return TuiInputRangeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








function TuiInputRangeExample3_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiInputRangeExample3_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiInputRangeExample3_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In a week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiInputRangeExample3_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", value_r2, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, value_r2, ctx_r6.pluralize), "");
} }
function TuiInputRangeExample3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputRangeExample3_ng_template_2_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputRangeExample3_ng_template_2_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputRangeExample3_ng_template_2_span_3_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputRangeExample3_ng_template_2_span_4_Template, 3, 5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", value_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 7);
} }
class TuiInputRangeExample3 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([0, 7]);
        // See https://angular.io/api/common/I18nPluralPipe
        this.pluralize = {
            '=0': `days later`,
            '=1': `day later`,
            other: `days later`,
        };
    }
}
TuiInputRangeExample3.ɵfac = function TuiInputRangeExample3_Factory(t) { return new (t || TuiInputRangeExample3)(); };
TuiInputRangeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputRangeExample3, selectors: [["tui-input-range-example-3"]], decls: 4, vars: 6, consts: [[3, "min", "max", "leftValueContent", "rightValueContent", "pluralize", "formControl"], ["valueContent", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function TuiInputRangeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Desired departure day\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputRangeExample3_ng_template_2_Template, 5, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 10)("leftValueContent", _r0)("rightValueContent", _r0)("pluralize", ctx.pluralize)("formControl", ctx.control);
    } }, directives: [_kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputRangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["I18nPluralPipe"]], styles: ["tui-input-range[_ngcontent-%COMP%] {\n                max-width: 30rem;\n            }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputRangeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-range-example-3`,
                templateUrl: `./index.html`,
                styles: [
                    `
            tui-input-range {
                max-width: 30rem;
            }
        `,
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/examples/4/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-range/examples/4/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputRangeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputRangeExample4", function() { return TuiInputRangeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");









class TuiInputRangeExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([20, 40]);
        // See https://angular.io/api/common/I18nPluralPipe
        this.pluralize = {
            other: `%`,
        };
    }
}
TuiInputRangeExample4.ɵfac = function TuiInputRangeExample4_Factory(t) { return new (t || TuiInputRangeExample4)(); };
TuiInputRangeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputRangeExample4, selectors: [["tui-input-range-example-4"]], decls: 16, vars: 6, consts: [[1, "wrapper"], ["new", "", 3, "min", "max", "segments", "steps", "pluralize", "formControl"], [1, "ticks-labels"], ["src", "tuiIconSoundOff"], ["src", "tuiIconSound"]], template: function TuiInputRangeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select volume range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-svg", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 100)("segments", 5)("steps", 5)("pluralize", ctx.pluralize)("formControl", ctx.control);
    } }, directives: [_kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputRangeComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__["TuiSvgComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\n.ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-02);\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1yYW5nZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtcmFuZ2UvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3NsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxnQkFBQTtBREtKO0FDRkE7RUNDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFREFBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREtKO0FFTEk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBRk9SO0FFTFE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FGT1o7QUVKUTtFQUNJLGNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUZNWjtBRUZJO0VBQ0ksbURBQUE7QUZJUjtBRURJOztFQUdJLGlCQUFBO0VBQ0Esa0JBQUE7QUZFUjtBRUNZOztFQUNJLFdBQUE7QUZFaEI7QUVDWTs7RUFDSSxZQUFBO0FGRWhCIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1yYW5nZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMzByZW07XG59XG4udGlja3MtbGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi50aWNrcy1sYWJlbHMgPiAqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIDAuNXJlbSk7XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzByZW07XG59XG5cbi50aWNrcy1sYWJlbHMge1xuICAgIC50dWktc2xpZGVyLXRpY2tzLWxhYmVscygpO1xuXG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG4iLCJAdGh1bWItZGlhbWV0ZXJzOiB7XG4gICAgQHM6IDAuNXJlbTtcbiAgICBAbTogMXJlbTtcbn07XG5cbi50dWktc2xpZGVyLXRpY2tzLWxhYmVscyhAaW5wdXQtc2l6ZTogbSkge1xuICAgIEBmaXJzdC10aWNrLWNlbnRlcjogKEB0aHVtYi1kaWFtZXRlcnNbIEBAaW5wdXQtc2l6ZV0gLyAyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBAZmlyc3QtdGljay1jZW50ZXI7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcblxuICAgICYgPiAqIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmbGV4OiAyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBsZWZ0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcmlnaHQ6IC1AZmlyc3QtdGljay1jZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dWktaW5wdXQtc2xpZGVyICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXR1aS1yYWRpdXMtbSkgLyAyICsgQGZpcnN0LXRpY2stY2VudGVyKTtcbiAgICB9XG5cbiAgICB0dWktaW5wdXQtcmFuZ2UgKyAmLFxuICAgIHR1aS1yYW5nZSArICYge1xuICAgICAgICBAdGh1bWI6IEB0aHVtYi1kaWFtZXRlcnNbIEBAaW5wdXQtc2l6ZV07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAdGh1bWI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHRodW1iO1xuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGxlZnQ6IC1AdGh1bWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC1AdGh1bWI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputRangeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-range-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/examples/5/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-range/examples/5/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputRangeExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputRangeExample5", function() { return TuiInputRangeExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiInputRangeExample5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r1);
} }
class TuiInputRangeExample5 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([100000, 500000]);
        this.max = 1000000;
        this.min = 0;
        this.totalSteps = 100;
        this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
        this.segments = this.ticksLabels.length - 1;
        this.keySteps = [
            // [percent, value]
            [0, this.min],
            [25, 10000],
            [50, 100000],
            [75, 500000],
            [100, this.max],
        ];
    }
}
TuiInputRangeExample5.ɵfac = function TuiInputRangeExample5_Factory(t) { return new (t || TuiInputRangeExample5)(); };
TuiInputRangeExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputRangeExample5, selectors: [["tui-input-range-example-5"]], decls: 11, vars: 10, consts: [[1, "wrapper"], ["id", "input-range-with-key-steps", "new", "", 3, "min", "max", "steps", "keySteps", "segments", "formControl"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "input-range-with-key-steps"]], template: function TuiInputRangeExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Not linear growing sliders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiInputRangeExample5_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "output", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("steps", ctx.totalSteps)("keySteps", ctx.keySteps)("segments", ctx.segments)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticksLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx.control.value));
    } }, directives: [_kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputRangeComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\n.ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-02);\n  margin-top: 0.25rem;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1yYW5nZS9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtcmFuZ2UvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3NsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxnQkFBQTtBREtKO0FDRkE7RUNDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFREFBLHlCQUFBO0VBQ0EsbUJBQUE7QURLSjtBRUpJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUZNUjtBRUpRO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBRk1aO0FFSFE7RUFDSSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FGS1o7QUVESTtFQUNJLG1EQUFBO0FGR1I7QUVBSTs7RUFHSSxpQkFBQTtFQUNBLGtCQUFBO0FGQ1I7QUVFWTs7RUFDSSxXQUFBO0FGQ2hCO0FFRVk7O0VBQ0ksWUFBQTtBRkNoQiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtcmFuZ2UvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDMwcmVtO1xufVxuLnRpY2tzLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG4udGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnR1aS1pbnB1dC1zbGlkZXIgKyAudGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0xcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xufVxuXG4udGlja3MtbGFiZWxzIHtcbiAgICAudHVpLXNsaWRlci10aWNrcy1sYWJlbHMoKTtcblxuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbiIsIkB0aHVtYi1kaWFtZXRlcnM6IHtcbiAgICBAczogMC41cmVtO1xuICAgIEBtOiAxcmVtO1xufTtcblxuLnR1aS1zbGlkZXItdGlja3MtbGFiZWxzKEBpbnB1dC1zaXplOiBtKSB7XG4gICAgQGZpcnN0LXRpY2stY2VudGVyOiAoQHRodW1iLWRpYW1ldGVyc1sgQEBpbnB1dC1zaXplXSAvIDIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIEBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuXG4gICAgJiA+ICoge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGxlZnQ6IC1AZmlyc3QtdGljay1jZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICByaWdodDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1aS1pbnB1dC1zbGlkZXIgKyAmIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyBAZmlyc3QtdGljay1jZW50ZXIpO1xuICAgIH1cblxuICAgIHR1aS1pbnB1dC1yYW5nZSArICYsXG4gICAgdHVpLXJhbmdlICsgJiB7XG4gICAgICAgIEB0aHVtYjogQHRodW1iLWRpYW1ldGVyc1sgQEBpbnB1dC1zaXplXTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEB0aHVtYjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAdGh1bWI7XG5cbiAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbGVmdDogLUB0aHVtYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICByaWdodDogLUB0aHVtYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputRangeExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-range-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/input-range.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-range/input-range.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiInputRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputRangeComponent", function() { return ExampleTuiInputRangeComponent; });
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
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-range/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-range/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-range/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-range/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input-range/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../kit/components/input-range/input-range.component */ "../kit/components/input-range/input-range.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");


























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4886205873004282227$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__1 = goog.getMsg("Component to input a range of values");
    I18N_0 = MSG_EXTERNAL_4886205873004282227$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟884e67f64e19bad9159bd976e34d0cb28b977c8e␟4886205873004282227:Component to input a range of values`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__3 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", { "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_2 = MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#4\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__5 = goog.getMsg(" This component is being refactored. Soon\u00A0(next\u00A0major\u00A0release) you will see the fresh version of it! ");
    I18N_4 = MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟09456f65f3a00702ca9aedfa0f1bedf1b28d63ea␟1346465782286970335: This component is being refactored. Soon (next major release) you will see the fresh version of it! `;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8161882918693806927$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__7 = goog.getMsg(" Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of {$startTagCode}InputRange{$closeTagCode} . ", { "startTagCode": "\uFFFD#10\uFFFD", "closeTagCode": "\uFFFD/#10\uFFFD" });
    I18N_6 = MSG_EXTERNAL_8161882918693806927$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟3967698bedd86daeefde45631f31f24ab8575274␟8161882918693806927: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:InputRange${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6762435345585314433$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__9 = goog.getMsg(" However, if you are going to use this component, we recommend to use new version. To enable the \"new version\"-mode, add {$startTagCode}new{$closeTagCode} directive. Example:\u00A0 {$startTagCode}<tui\u2011input\u2011range\u00A0new\u00A0...>{$closeTagCode}", { "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]", "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]" });
    I18N_8 = MSG_EXTERNAL_6762435345585314433$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟8b0d6c0dcb05a753899a615aa9862a0b5869b887␟6762435345585314433: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:new${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:<tui‑input‑range new ...>${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__11 = goog.getMsg("Basic");
    I18N_10 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_416952624038072227$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__14 = goog.getMsg("Override number format");
    I18N_13 = MSG_EXTERNAL_416952624038072227$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟b6abdc66a9baa55f673af8772d69a86e5825d58e␟416952624038072227:Override number format`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8145104323566549928$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__17 = goog.getMsg("Custom value content");
    I18N_16 = MSG_EXTERNAL_8145104323566549928$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟43b7d4bc7a9e19323730882e0a7e164992ae8241␟8145104323566549928:Custom value content`;
}
const _c18 = ["heading", I18N_16];
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7433618922144942348$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__20 = goog.getMsg("Visual segments + labels for ticks");
    I18N_19 = MSG_EXTERNAL_7433618922144942348$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`;
}
const _c21 = ["heading", I18N_19];
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6496774841790769025$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__23 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", { "startTagCode": "\uFFFD#42\uFFFD", "closeTagCode": "\uFFFD/#42\uFFFD" });
    I18N_22 = MSG_EXTERNAL_6496774841790769025$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\uFFFD#42\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#42\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__25 = goog.getMsg("KeySteps");
    I18N_24 = MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
}
const _c26 = ["heading", I18N_24];
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__28 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", { "startTagDt": "\uFFFD#48\uFFFD", "startTagStrong": "\uFFFD#49\uFFFD", "closeTagStrong": "\uFFFD/#49\uFFFD", "closeTagDt": "\uFFFD/#48\uFFFD", "startTagDd": "\uFFFD#50\uFFFD", "closeTagDd": "\uFFFD/#50\uFFFD" });
    I18N_27 = MSG_EXTERNAL_626346517069880366$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__28;
}
else {
    I18N_27 = $localize `:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#48\uFFFD"}:START_TAG_DT:${"\uFFFD#49\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#49\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#48\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#50\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#50\uFFFD"}:CLOSE_TAG_DD:`;
}
function ExampleTuiInputRangeComponent_ng_template_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
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
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3422900533866721611$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___30 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink} . ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_29 = MSG_EXTERNAL_3422900533866721611$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟be9dc2f76de6fa7386bee26f61e50e5056fd59fa␟3422900533866721611: Number formatting can be customized by using ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: . `;
}
function ExampleTuiInputRangeComponent_ng_template_1_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExampleTuiInputRangeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiInputRangeComponent_ng_template_1_ng_template_17_Template, 8, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Slider's step changes value by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " But text inputs allow to type decimal number which is multiple of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "0.00001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "tui-input-range-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](31, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExampleTuiInputRangeComponent_ng_template_1_ng_template_32_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "tui-input-range-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](36, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "tui-input-range-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](39, _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tui-notification", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](41, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "tui-input-range-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](45, _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dl", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](47, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "tui-input-range-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1)("description", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2)("description", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3370799093568900154$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__32 = goog.getMsg(" Can be expanded with {$startLink} TuiTextfieldController {$closeLink}", { "startLink": "\uFFFD#20\uFFFD", "closeLink": "\uFFFD/#20\uFFFD" });
    I18N_31 = MSG_EXTERNAL_3370799093568900154$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__32;
}
else {
    I18N_31 = $localize `:␟c650a3e713b58901a3b840e10c4051f561778c62␟3370799093568900154: Can be expanded with ${"\uFFFD#20\uFFFD"}:START_LINK: TuiTextfieldController ${"\uFFFD/#20\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-range", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Just a very long label. Don't afraid it does not overflow the wrapper, the label is just cut off with ellipsis when it does not fit the wrapper. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.control)("min", ctx_r7.min)("max", ctx_r7.max)("segments", ctx_r7.segments)("keySteps", ctx_r7.keySteps)("pluralize", ctx_r7.pluralize)("steps", ctx_r7.steps)("quantum", ctx_r7.quantum)("leftValueContent", ctx_r7.leftValueContent)("rightValueContent", ctx_r7.rightValueContent)("tuiTextfieldLabelOutside", ctx_r7.labelOutside)("tuiTextfieldSize", ctx_r7.size)("readOnly", ctx_r7.readOnly)("size", ctx_r7.size)("minLabel", ctx_r7.minLabel)("maxLabel", ctx_r7.maxLabel)("segmentsPluralize", ctx_r7.segmentsPluralize);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___34 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_33 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___36 = goog.getMsg(" Min value ");
    I18N_35 = MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___38 = goog.getMsg(" Max value ");
    I18N_37 = MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___38;
}
else {
    I18N_37 = $localize `:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_37);
} }
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1397462847420435865$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___40 = goog.getMsg(" Minimum indivisible value ");
    I18N_39 = MSG_EXTERNAL_1397462847420435865$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___40;
}
else {
    I18N_39 = $localize `:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_39);
} }
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___42 = goog.getMsg(" Number of actual discrete slider steps ");
    I18N_41 = MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___42;
}
else {
    I18N_41 = $localize `:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_41);
} }
var I18N_43;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___44 = goog.getMsg(" A number of visual segments ");
    I18N_43 = MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___44;
}
else {
    I18N_43 = $localize `:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_43);
} }
var I18N_45;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___46 = goog.getMsg(" Anchor points of non-uniform format between value and position ");
    I18N_45 = MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___46;
}
else {
    I18N_45 = $localize `:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_45);
} }
var I18N_47;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8137484247214191672$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___48 = goog.getMsg(" A template for custom view of the left selected value. ");
    I18N_47 = MSG_EXTERNAL_8137484247214191672$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___48;
}
else {
    I18N_47 = $localize `:␟f716bc1e8539db3ccdc8cd0d8b11655e2e367346␟8137484247214191672: A template for custom view of the left selected value. `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_47);
} }
var I18N_49;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9113561072138988969$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___50 = goog.getMsg(" A template for custom view of the right selected value. ");
    I18N_49 = MSG_EXTERNAL_9113561072138988969$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___50;
}
else {
    I18N_49 = $localize `:␟50722b05fc2feefac0326777c1fd2c38a9b91fbf␟9113561072138988969: A template for custom view of the right selected value. `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_49);
} }
var I18N_51;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7711600116926498845$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___52 = goog.getMsg(" Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the {$startLink} ICU format {$closeLink} for i18nPlural ", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_51 = MSG_EXTERNAL_7711600116926498845$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___52;
}
else {
    I18N_51 = $localize `:␟98841b9dd9d4ee376a91d8baa29619937edadf0b␟7711600116926498845: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\uFFFD#1\uFFFD"}:START_LINK: ICU format ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: for i18nPlural `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_53;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2592823355336045770$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___54 = goog.getMsg(" Component is read only ");
    I18N_53 = MSG_EXTERNAL_2592823355336045770$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___54;
}
else {
    I18N_53 = $localize `:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_53);
} }
var I18N_55;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7353171044868783621$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___56 = goog.getMsg(" Size {$startParagraph} Use {$startTagCode}tuiTextfieldSize{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_55 = MSG_EXTERNAL_7353171044868783621$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___56;
}
else {
    I18N_55 = $localize `:␟24cc11d17c49ad1a859f91291c722059f703b71c␟7353171044868783621: Size ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiTextfieldSize${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_57;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_121327813771452274$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___58 = goog.getMsg(" Label for min value {$startParagraph} Use {$startTagCode}leftValueContent{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_57 = MSG_EXTERNAL_121327813771452274$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___58;
}
else {
    I18N_57 = $localize `:␟c120629d4943111364a54f7bb1813b1873250dc1␟121327813771452274: Label for min value ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:leftValueContent${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_59;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_420542345659250099$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___60 = goog.getMsg(" Label for max value {$startParagraph} Use {$startTagCode}rightValueContent{$closeTagCode} instead. {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_59 = MSG_EXTERNAL_420542345659250099$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___60;
}
else {
    I18N_59 = $localize `:␟b9dc97c88ef612779f216b3c98b8bbe08ccc4976␟420542345659250099: Label for max value ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:rightValueContent${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: instead. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_61;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_944204440949859683$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___62 = goog.getMsg(" Plural forms for {$startTagCode}segments{$closeTagCode}{$startParagraph}{$startTagStrong}See examples how to create ticks without this property (outside of the component).{$closeTagStrong}{$closeParagraph}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startParagraph": "\uFFFD#2\uFFFD", "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD" });
    I18N_61 = MSG_EXTERNAL_944204440949859683$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___62;
}
else {
    I18N_61 = $localize `:␟2430b6982a2dd2219359b42968a34486927e0f05␟944204440949859683: Plural forms for ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:segments${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:See examples how to create ticks without this property (outside of the component).${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_63;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2914660250050831108$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___64 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_63 = MSG_EXTERNAL_2914660250050831108$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___64;
}
else {
    I18N_63 = $localize `:␟8755715075b5b08f672f5adda7f1629e1845d0ec␟2914660250050831108: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Label${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_65;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___66 = goog.getMsg(" Size ");
    I18N_65 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___66;
}
else {
    I18N_65 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiInputRangeComponent_ng_template_2_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_65);
} }
function ExampleTuiInputRangeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputRangeComponent_ng_template_2_ng_template_1_Template, 2, 17, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputRangeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.quantum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.steps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.segments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.keySteps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.leftValueContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.rightValueContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputRangeComponent_ng_template_2_ng_template_12_Template, 2, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.pluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiInputRangeComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.readOnly = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiInputRangeComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiInputRangeComponent_ng_template_2_ng_template_15_Template, 3, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.minLabel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiInputRangeComponent_ng_template_2_ng_template_16_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.maxLabel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiInputRangeComponent_ng_template_2_ng_template_17_Template, 4, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.segmentsPluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](19, I18N_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Requires you to import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TuiTextfieldControllerModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ExampleTuiInputRangeComponent_ng_template_2_ng_template_26_Template, 3, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.labelOutside = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ExampleTuiInputRangeComponent_ng_template_2_ng_template_27_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.leftValueContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.rightValueContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.pluralize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.minLabelVariants)("documentationPropertyValue", ctx_r1.minLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.maxLabelVariants)("documentationPropertyValue", ctx_r1.maxLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.segmentsPluralize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.labelOutside);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_67;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2768974860076608761$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__68 = goog.getMsg(" Import {$startTagCode}TuiInputRangeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_67 = MSG_EXTERNAL_2768974860076608761$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__68;
}
else {
    I18N_67 = $localize `:␟5bb45ac9857e1ec4af4c52fff5d02d8d4f344da1␟2768974860076608761: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputRangeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_69;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__70 = goog.getMsg("Add to the template:");
    I18N_69 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__70;
}
else {
    I18N_69 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputRangeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputRangeComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/import/insert-template.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/1/index.ts")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/2/index.html")),
        };
        this.example3 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/3/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/3/index.ts")),
        };
        this.example4 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.ts")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.less")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([0, 10]);
        this.minVariants = [0, 5, 7.77, -10];
        this.min = this.minVariants[0];
        this.maxVariants = [10, 100, 10000];
        this.max = this.maxVariants[0];
        this.segments = 0;
        this.steps = 0;
        this.quantumVariants = [1, 0.001, 10, 100];
        this.quantum = this.quantumVariants[0];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[1];
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
        this.minLabelVariants = [``, `Nothing`];
        this.minLabel = this.minLabelVariants[0];
        this.maxLabelVariants = [``, `Everything`];
        this.maxLabel = this.maxLabelVariants[0];
        this.keyStepsVariants = [[[50, 1000]]];
        this.keySteps = null;
        this.valueContentVariants = [
            ``,
            `TOP SECRET`,
            ({ $implicit: val }) => val === this.max ? `MAX` : `${val}`,
            ({ $implicit: val }) => val === this.min ? `MIN` : `${val}`,
            ({ $implicit: val }) => val === 5 ? `FIVE` : `${val}`,
        ];
        this.leftValueContent = this.valueContentVariants[0];
        this.rightValueContent = this.valueContentVariants[0];
    }
}
ExampleTuiInputRangeComponent.ɵfac = function ExampleTuiInputRangeComponent_Factory(t) { return ɵExampleTuiInputRangeComponent_BaseFactory(t || ExampleTuiInputRangeComponent); };
ExampleTuiInputRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputRangeComponent, selectors: [["example-tui-input-range"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputRangeComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputRange", "package", "KIT", "type", "components"], ["pageTab", ""], ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["status", "warning"], [1, "tui-space_top-0"], ["id", "base", 3, "content", "description", 6, "heading"], ["stepQuantumDescription", ""], ["id", "numberFormat", 3, "content", "description", 6, "heading"], ["numberFormatTokenDescription", ""], ["id", "valueContent", 3, "content", 6, "heading"], ["id", "segments", 3, "content", 6, "heading"], [1, "tui-space_bottom-8"], ["id", "keySteps", 3, "content", 6, "heading"], [1, "tui-space_bottom-8", "tui-space_top-0"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "leftValueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rightValueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize | Record<string, string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segmentsPluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-text_h6"], ["tuiLink", "", "target", "_blank", "routerLink", "/directives/textfield-controller"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["new", "", 3, "formControl", "min", "max", "segments", "keySteps", "pluralize", "steps", "quantum", "leftValueContent", "rightValueContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "readOnly", "size", "minLabel", "maxLabel", "segmentsPluralize"], ["tuiLink", "", "href", "https://unicode-org.github.io/icu/userguide/format_parse/messages/"], ["tuiLink", "", "routerLink", "/components/label"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputRangeComponent_ng_template_1_Template, 52, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputRangeComponent_ng_template_2_Template, 28, 34, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputRangeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputRangeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputRangeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputRangeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputRangeExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputRangeExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_19__["TuiInputRangeComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_20__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_21__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_22__["TuiTextfieldSizeDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_23__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputRangeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputRangeComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-range`,
                templateUrl: `./input-range.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputRangeComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-range/input-range.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/input-range/input-range.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiInputRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputRangeModule", function() { return ExampleTuiInputRangeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-range/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-range/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-range/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-range/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input-range/examples/5/index.ts");
/* harmony import */ var _input_range_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-range.component */ "./src/modules/components/input-range/input-range.component.ts");
















class ExampleTuiInputRangeModule {
}
ExampleTuiInputRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputRangeModule });
ExampleTuiInputRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputRangeModule_Factory(t) { return new (t || ExampleTuiInputRangeModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputRangeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputSliderModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputRangeModule, { declarations: [_input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputRangeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputRangeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputRangeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputRangeExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputRangeExample5"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputSliderModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputRangeModule, [{
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
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"])),
                ],
                declarations: [
                    _input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputRangeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputRangeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputRangeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputRangeExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputRangeExample5"],
                ],
                exports: [_input_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputRangeComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-range-input-range-module.js.map