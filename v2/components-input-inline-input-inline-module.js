(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-inline-input-inline-module"],{

/***/ "./src/modules/components/abstract/control.ts":
/*!****************************************************!*\
  !*** ./src/modules/components/abstract/control.ts ***!
  \****************************************************/
/*! exports provided: AbstractExampleTuiControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiControl", function() { return AbstractExampleTuiControl; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./src/modules/components/abstract/interactive.ts");


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__["AbstractExampleTuiInteractive"] {
    constructor() {
        super(...arguments);
        this.sizeVariants = [`s`, `m`, `l`];
        this.hintContentVariants = [`Some content`];
        this.hintDirectionVariants = [
            `left`,
            `right`,
            `bottom-left`,
            `bottom-right`,
            `bottom-middle`,
            `top-left`,
            `top-right`,
            `top-middle`,
        ];
        this.hintModeVariants = [`error`, `onDark`];
        this.typeVariants = [
            `text`,
            `email`,
            `password`,
            `tel`,
            `url`,
        ];
        this.maxLengthVariants = [10];
        this.autocompleteVariants = [
            ``,
            `off`,
            `cc-name`,
            `cc-number`,
            `cc-exp-month`,
            `cc-exp-year`,
            `cc-type`,
            `given-name`,
            `additional-name`,
            `family-name`,
            `username`,
            `email`,
            `street-address`,
            `postal-code`,
            `country-name`,
        ];
        this.inputModeVariants = [`text`, `numeric`];
        this.customContentVariants = [
            CUSTOM_SVG_NAME,
            `tuiIconSearchLarge`,
            `tuiIconCalendarLarge`,
            `tuiIconVisaMono`,
            `tuiIconMastercardMono`,
        ];
        this.customContentSelected = null;
        this.inputMode = this.inputModeVariants[0];
        this.autocomplete = ``;
        this.maxLength = null;
        this.type = this.typeVariants[0];
        this.cleaner = false;
        this.pseudoInvalid = null;
        this.success = false;
        this.readOnly = false;
        this.labelOutside = false;
        this.size = this.sizeVariants[2];
        this.exampleText = ``;
        this.maxHeight = null;
        this.hintContent = null;
        this.hintDirection = this.hintDirectionVariants[2];
        this.hintMode = null;
        this.dropdownAlignVariants = [`left`, `right`];
        this.dropdownAlign = this.dropdownAlignVariants[0];
        this.dropdownLimitWidthVariants = [`fixed`, `min`];
        this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
        this.dropdownDirectionVariants = [
            `top`,
            `bottom`,
        ];
        this.dropdownDirection = null;
        this.dropdownSided = false;
        this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MIN_HEIGHT"];
        this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MAX_HEIGHT"];
    }
    get customContent() {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
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
}


/***/ }),

/***/ "./src/modules/components/abstract/interactive.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/abstract/interactive.ts ***!
  \********************************************************/
/*! exports provided: AbstractExampleTuiInteractive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiInteractive", function() { return AbstractExampleTuiInteractive; });
class AbstractExampleTuiInteractive {
    constructor() {
        this.pseudoVariants = [false, true];
        this.focusable = true;
        this.pseudoFocused = null;
        this.pseudoHovered = null;
        this.pseudoPressed = null;
    }
}


/***/ }),

/***/ "./src/modules/components/input-inline/examples/1/component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-inline/examples/1/component.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputInlineExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputInlineExample1", function() { return TuiInputInlineExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-inline/input-inline.component */ "../kit/components/input-inline/input-inline.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");








class TuiInputInlineExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Hello 1`),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Hello 2`),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`Hello 3`),
            testValue4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
    }
    get toggleContent() {
        return this.testForm.disabled ? `enable (allow editing)` : `disable`;
    }
    get input4Empty() {
        return this.testForm.get(`testValue4`).value === ``;
    }
    onToggleClick() {
        if (this.testForm.disabled) {
            this.testForm.enable();
        }
        else {
            this.testForm.disable();
        }
    }
}
TuiInputInlineExample1.ɵfac = function TuiInputInlineExample1_Factory(t) { return new (t || TuiInputInlineExample1)(); };
TuiInputInlineExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputInlineExample1, selectors: [["tui-input-inline-example-1"]], decls: 8, vars: 4, consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "input1"], ["formControlName", "testValue2", 1, "input2"], ["formControlName", "testValue3", 1, "input3"], ["formControlName", "testValue4", 1, "input4"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiInputInlineExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-input-inline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-input-inline", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-input-inline", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-inline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " (Show placeholder if control is empty) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputInlineExample1_Template_button_click_6_listener() { return ctx.onToggleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input4_empty", ctx.input4Empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.toggleContent, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputInlineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"]], styles: [".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n.input1[_ngcontent-%COMP%] {\n  border: 2px solid var(--tui-error-fill);\n}\n.input2[_ngcontent-%COMP%] {\n  background: var(--tui-base-09);\n  padding: 0.625rem;\n  color: var(--tui-base-01);\n  letter-spacing: 0.625rem;\n  font-size: 1.25rem;\n}\n.input3[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: bold;\n  background: var(--tui-base-04);\n}\n.input4_empty[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvZXhhbXBsZXMvMS9zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LWlubGluZS9leGFtcGxlcy8xL3N0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDs7O0VBR0ksc0JBQUE7QURLSjtBQ0ZBO0VBQ0ksdUNBQUE7QURJSjtBQ0RBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBREdKO0FDQUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QURFSjtBQ0VJO0VBQ0ksWUFBQTtBREFSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvZXhhbXBsZXMvMS9zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmlucHV0MSxcbi5pbnB1dDIsXG4uaW5wdXQzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbn1cbi5pbnB1dDEge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10dWktZXJyb3ItZmlsbCk7XG59XG4uaW5wdXQyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjI1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG4uaW5wdXQzIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA0KTtcbn1cbi5pbnB1dDRfZW1wdHkge1xuICBvcGFjaXR5OiAwLjM7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5pbnB1dDEsXG4uaW5wdXQyLFxuLmlucHV0MyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbn1cblxuLmlucHV0MSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xufVxuXG4uaW5wdXQyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MjVyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uaW5wdXQzIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTA0KTtcbn1cblxuLmlucHV0NCB7XG4gICAgJl9lbXB0eSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputInlineExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-inline-example-1`,
                templateUrl: `./template.html`,
                styleUrls: [`./style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-inline/examples/2/component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-inline/examples/2/component.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputInlineExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputInlineExample2", function() { return TuiInputInlineExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-inline/input-inline.component */ "../kit/components/input-inline/input-inline.component.ts");
/* harmony import */ var _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/auto-focus/autofocus.directive */ "../cdk/directives/auto-focus/autofocus.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");











function TuiInputInlineExample2_tui_input_inline_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-inline", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.heading = $event; })("focusedChange", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_focusedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFocusedChange($event); })("keydown.esc.prevent", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_keydown_esc_prevent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggle(); })("keydown.enter.prevent", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_keydown_enter_prevent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type a heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.heading);
} }
function TuiInputInlineExample2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputInlineExample2_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.heading);
} }
class TuiInputInlineExample2 {
    constructor(alertService) {
        this.alertService = alertService;
        this.heading = `Page heading`;
        this.editing = false;
    }
    toggle() {
        this.editing = !this.editing;
    }
    onFocusedChange(focused) {
        if (!focused) {
            this.editing = false;
            this.saveHeading(this.heading);
        }
    }
    saveHeading(newHeading) {
        this.alertService.open(newHeading, { label: `New heading` }).subscribe();
    }
}
TuiInputInlineExample2.ɵfac = function TuiInputInlineExample2_Factory(t) { return new (t || TuiInputInlineExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
TuiInputInlineExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputInlineExample2, selectors: [["tui-input-inline-example-2"]], decls: 8, vars: 4, consts: [[1, "header"], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange", "focusedChange", "keydown.esc.prevent", "keydown.enter.prevent", 4, "ngIf", "ngIfElse"], ["text", ""], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange", "focusedChange", "keydown.esc.prevent", "keydown.enter.prevent"], ["tuiIconButton", "", "type", "button", "title", "Edit heading", "size", "xs", "appearance", "icon", "icon", "tuiIconEditLarge", 1, "tui-space_left-1", 3, "click"]], template: function TuiInputInlineExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputInlineExample2_tui_input_inline_1_Template, 2, 1, "tui-input-inline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputInlineExample2_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header_empty", !ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputInlineComponent"], _cdk_directives_auto_focus_autofocus_directive__WEBPACK_IMPORTED_MODULE_6__["TuiAutoFocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  line-height: 1.5rem;\n}\n.header_empty[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvZXhhbXBsZXMvMi9zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LWlubGluZS9leGFtcGxlcy8yL3N0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvZXhhbXBsZXMvMi9zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAmX2VtcHR5IHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbn1cbiIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5oZWFkZXJfZW1wdHkge1xuICBvcGFjaXR5OiAwLjM7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputInlineExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-inline-example-2`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                styleUrls: [`./style.less`],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-inline/examples/3/component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-inline/examples/3/component.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputInlineExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputInlineExample3", function() { return TuiInputInlineExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-inline/input-inline.component */ "../kit/components/input-inline/input-inline.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");










class TuiInputInlineExample3 {
    constructor(cd, destroy$, zone, isCypress) {
        this.cd = cd;
        this.destroy$ = destroy$;
        this.zone = zone;
        this.isCypress = isCypress;
        this.count = `0`;
    }
    ngOnInit() {
        if (this.isCypress) {
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 3000)
            .pipe(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiZoneOptimized"])(this.zone), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["watch"])(this.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(value => {
            this.count = String(value);
        });
    }
}
TuiInputInlineExample3.ɵfac = function TuiInputInlineExample3_Factory(t) { return new (t || TuiInputInlineExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiInputInlineExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputInlineExample3, selectors: [["tui-input-inline-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])], decls: 1, vars: 1, consts: [[1, "input1", 3, "ngModel", "ngModelChange"]], template: function TuiInputInlineExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-inline", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputInlineExample3_Template_tui_input_inline_ngModelChange_0_listener($event) { return ctx.count = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.count);
    } }, directives: [_kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputInlineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".input1[_ngcontent-%COMP%] {\n  border: 2px solid var(--tui-error-fill);\n  padding: 0.625rem;\n  font-size: 1.25rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvZXhhbXBsZXMvMy9zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LWlubGluZS9leGFtcGxlcy8zL3N0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LWlubGluZS9leGFtcGxlcy8zL3N0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uaW5wdXQxIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5pbnB1dDEge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXR1aS1lcnJvci1maWxsKTtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputInlineExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-inline-example-3`,
                templateUrl: `./template.html`,
                styleUrls: [`./style.less`],
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-inline/input-inline.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/input-inline/input-inline.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiInputInlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputInlineComponent", function() { return ExampleTuiInputInlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/components/input-inline/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/components/input-inline/examples/2/component.ts");
/* harmony import */ var _examples_3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3/component */ "./src/modules/components/input-inline/examples/3/component.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/input-inline/input-inline.component */ "../kit/components/input-inline/input-inline.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7522149816559254132$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__1 = goog.getMsg("Inline field");
    I18N_0 = MSG_EXTERNAL_7522149816559254132$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟5da06d4e254872871f93db1252ddb86487e6b931␟7522149816559254132:Inline field`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_565621886775524341$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__6 = goog.getMsg("In heading");
    I18N_5 = MSG_EXTERNAL_565621886775524341$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟5f23eeae13ddbd4994e42211e4e333c68c629b0c␟565621886775524341:In heading`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2598963736286288115$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__9 = goog.getMsg("Dynamic counter increment (3 sec)");
    I18N_8 = MSG_EXTERNAL_2598963736286288115$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟4e5b66db067166d3b22aac82478bb814d41fbeed␟2598963736286288115:Dynamic counter increment (3 sec)`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiInputInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-input-inline-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-input-inline-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-input-inline-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
function ExampleTuiInputInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-inline", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Placeholder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("maxLength", ctx_r3.maxLength);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___12 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_11 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputInlineComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4970794608247875259$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___14 = goog.getMsg(" Maximum number of symbols ");
    I18N_13 = MSG_EXTERNAL_4970794608247875259$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟ceced99e65b9b5e60ca5a4e3c8f63b267c4b225d␟4970794608247875259: Maximum number of symbols `;
}
function ExampleTuiInputInlineComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
function ExampleTuiInputInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputInlineComponent_ng_template_2_ng_template_1_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputInlineComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputInlineComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputInlineComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputInlineComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_356958347911905655$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__16 = goog.getMsg(" Import {$startTagCode}TuiInputInlineModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_15 = MSG_EXTERNAL_356958347911905655$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟31d5e0d4a586ee251415e9a80ed121cc226bef9c␟356958347911905655: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputInlineModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__18 = goog.getMsg("Add to the template:");
    I18N_17 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputInlineComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputInlineComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_2__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-component-ts */ "!!raw-loader!-examples-1-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/1/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-template-html */ "!!raw-loader!-examples-1-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/1/template.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-style-less */ "!!raw-loader!-examples-1-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/1/style.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-component-ts */ "!!raw-loader!-examples-2-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-template-html */ "!!raw-loader!-examples-2-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/template.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-style-less */ "!!raw-loader!-examples-2-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/style.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-component-ts */ "!!raw-loader!-examples-3-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/3/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-template-html */ "!!raw-loader!-examples-3-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/3/template.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-style-less */ "!!raw-loader!-examples-3-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/3/style.less")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`111`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.maxLengthVariants = [10];
        this.maxLength = null;
    }
}
ExampleTuiInputInlineComponent.ɵfac = function ExampleTuiInputInlineComponent_Factory(t) { return ɵExampleTuiInputInlineComponent_BaseFactory(t || ExampleTuiInputInlineComponent); };
ExampleTuiInputInlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputInlineComponent, selectors: [["example-tui-input-inline"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputInline", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "in-heading", 3, "content", 6, "heading"], ["id", "dynamic-increment", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "input", 3, "formControl", "maxLength"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputInlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputInlineComponent_ng_template_1_Template, 11, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputInlineComponent_ng_template_2_Template, 5, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputInlineComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputInlineExample1"], _examples_2_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputInlineExample2"], _examples_3_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputInlineExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_input_inline_input_inline_component__WEBPACK_IMPORTED_MODULE_12__["TuiInputInlineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], styles: [".input[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  border-bottom: 1px solid var(--tui-base-09);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvaW5wdXQtaW5saW5lLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtaW5saW5lL2lucHV0LWlubGluZS5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwyQ0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1pbmxpbmUvaW5wdXQtaW5saW5lLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICAgIG1heC13aWR0aDogMjByZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTA5KTtcbn1cbiIsIi5pbnB1dCB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wOSk7XG59XG4iXX0= */"] });
const ɵExampleTuiInputInlineComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputInlineComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputInlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-inline`,
                templateUrl: `./input-inline.template.html`,
                styleUrls: [`./input-inline.style.less`],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-inline/input-inline.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-inline/input-inline.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiInputInlineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputInlineModule", function() { return ExampleTuiInputInlineModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/components/input-inline/examples/1/component.ts");
/* harmony import */ var _examples_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/component */ "./src/modules/components/input-inline/examples/2/component.ts");
/* harmony import */ var _examples_3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/component */ "./src/modules/components/input-inline/examples/3/component.ts");
/* harmony import */ var _input_inline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-inline.component */ "./src/modules/components/input-inline/input-inline.component.ts");














class ExampleTuiInputInlineModule {
}
ExampleTuiInputInlineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputInlineModule });
ExampleTuiInputInlineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputInlineModule_Factory(t) { return new (t || ExampleTuiInputInlineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputInlineModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiAutoFocusModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputInlineModule, { declarations: [_input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"],
        _examples_1_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputInlineExample1"],
        _examples_2_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputInlineExample2"],
        _examples_3_component__WEBPACK_IMPORTED_MODULE_10__["TuiInputInlineExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputInlineModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiAutoFocusModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputInlineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputInlineModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiAutoFocusModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"])),
                ],
                declarations: [
                    _input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"],
                    _examples_1_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputInlineExample1"],
                    _examples_2_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputInlineExample2"],
                    _examples_3_component__WEBPACK_IMPORTED_MODULE_10__["TuiInputInlineExample3"],
                ],
                exports: [_input_inline_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputInlineComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-inline-input-inline-module.js.map