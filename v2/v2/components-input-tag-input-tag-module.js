(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-tag-input-tag-module"],{

/***/ "./src/modules/components/input-tag/examples/1/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/1/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample1", function() { return TuiInputTagExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");








class TuiInputTagExample1 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
    }
}
TuiInputTagExample1.ɵfac = function TuiInputTagExample1_Factory(t) { return new (t || TuiInputTagExample1)(); };
TuiInputTagExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample1, selectors: [["tui-input-tag-example-1"]], decls: 4, vars: 2, consts: [[1, "b-form", 3, "tuiTextfieldLabelOutside", "formControl"]], template: function TuiInputTagExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("formControl", ctx.control);
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputTagComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/2/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/2/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample2", function() { return TuiInputTagExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");












function TuiInputTagExample2_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.items$));
} }
const databaseMockData = [
    `John Cleese`,
    `Eric Idle`,
    `Michael Palin`,
    `Terry Gilliam`,
    `Terry Jones`,
    `Graham Chapman`,
];
class TuiInputTagExample2 {
    constructor() {
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.value = [];
        this.items$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(search => this.serverRequest(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(databaseMockData));
    }
    onSearchChange(search) {
        this.search$.next(search);
    }
    /**
     * Server request emulation
     */
    serverRequest(search) {
        const result = databaseMockData.filter(item => item.toLowerCase().includes(search.toLowerCase()));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(Math.random() * 1000 + 500));
    }
}
TuiInputTagExample2.ɵfac = function TuiInputTagExample2_Factory(t) { return new (t || TuiInputTagExample2)(); };
TuiInputTagExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample2, selectors: [["tui-input-tag-example-2"]], decls: 3, vars: 2, consts: [[1, "b-form", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange", "searchChange"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiInputTagExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputTagExample2_Template_tui_input_tag_ngModelChange_0_listener($event) { return ctx.value = $event; })("searchChange", function TuiInputTagExample2_Template_tui_input_tag_searchChange_0_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose your Pythons' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputTagExample2_tui_data_list_wrapper_2_Template, 2, 3, "tui-data-list-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputTagComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_8__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["TuiDataListWrapperComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/3/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/3/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample3", function() { return TuiInputTagExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");










class TuiInputTagExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([`I`, `love`, `Angular`]),
        });
    }
}
TuiInputTagExample3.ɵfac = function TuiInputTagExample3_Factory(t) { return new (t || TuiInputTagExample3)(); };
TuiInputTagExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample3, selectors: [["tui-input-tag-example-3"]], decls: 13, vars: 6, consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["formControlName", "testValue", 1, "tui-space_top-2", 3, "tuiTextfieldCleaner"]], template: function TuiInputTagExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-input-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputTagComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldCleanerDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/4/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/4/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample4", function() { return TuiInputTagExample4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");
















function TuiInputTagExample4_ng_container_4_tui_data_list_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function TuiInputTagExample4_ng_container_4_tui_data_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiInputTagExample4_ng_container_4_tui_data_list_1_button_1_Template, 2, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.filtered);
} }
function TuiInputTagExample4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiInputTagExample4_ng_container_4_tui_data_list_1_Template, 2, 1, "tui-data-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return []; };
function createControlValidator(handler) {
    return ({ value }) => {
        const invalidTags = value ? value.filter(handler) : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["EMPTY_ARRAY"];
        return invalidTags.length > 0
            ? {
                tags: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiValidationError"](`Some tags are invalid`),
            }
            : null;
    };
}
const ITEMS = [`The Midnight`, `FM-84`, `Timecop1983`, `GUNSHIP`];
function tagValidator(tag) {
    return !/\d/.test(tag);
}
class TuiInputTagExample4 {
    constructor() {
        this.search = ``;
        this.tagValidator = tagValidator;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([], createControlValidator(tagValidator));
    }
    get filtered() {
        return this.filterBy(this.search, this.control.value);
    }
    filterBy(search, value) {
        return ITEMS.filter(item => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_DEFAULT_MATCHER"])(item, search) && !value.includes(item));
    }
}
TuiInputTagExample4.ɵfac = function TuiInputTagExample4_Factory(t) { return new (t || TuiInputTagExample4)(); };
TuiInputTagExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputTagExample4, selectors: [["tui-input-tag-example-4"]], decls: 8, vars: 12, consts: [[1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "tagValidator", "search", "searchChange"], [4, "ngIf"], [3, "formControl", "error"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"]], template: function TuiInputTagExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "In this sample, tags with digits are invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchChange", function TuiInputTagExample4_Template_tui_input_tag_searchChange_2_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Try it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiInputTagExample4_ng_container_4_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tui-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "tuiFieldError");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("tuiTextfieldLabelOutside", true)("tagValidator", ctx.tagValidator)("search", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filtered.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("error", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0))));
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldLabelOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiErrorComponent"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDataListDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_11__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__["TuiOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiInputTagExample4.prototype, "filterBy", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputTagExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-tag-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__["encapsulation"],
            }]
    }], null, { filterBy: [] }); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/5/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/5/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample5", function() { return TuiInputTagExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");









class TuiInputTagExample5 {
    constructor() {
        this.value = [`گراهام چپمن`, `جان کلیز`];
    }
}
TuiInputTagExample5.ɵfac = function TuiInputTagExample5_Factory(t) { return new (t || TuiInputTagExample5)(); };
TuiInputTagExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample5, selectors: [["tui-input-tag-example-5"]], decls: 1, vars: 3, consts: [["icon", "tuiIconSearchLarge", "iconAlign", "left", "tuiHintContent", "\u0645\u0648\u0646\u062A\u06CC \u067E\u0627\u06CC\u062A\u0648\u0646", 1, "input", 3, "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]], template: function TuiInputTagExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputTagExample5_Template_tui_input_tag_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagComponent"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_4__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".input[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  direction: rtl;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC10YWcvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXRhZy9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC10YWcvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIiwiLmlucHV0IHtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/6/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/6/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample6", function() { return TuiInputTagExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");








class TuiInputTagExample6 {
    constructor() {
        this.value = [`not`, `unique`, `tags, with`, `custom`, `separator`, `separator`];
        this.customSeparator = `;`;
    }
}
TuiInputTagExample6.ɵfac = function TuiInputTagExample6_Factory(t) { return new (t || TuiInputTagExample6)(); };
TuiInputTagExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample6, selectors: [["tui-input-tag-example-6"]], decls: 1, vars: 5, consts: [["icon", "tuiIconSearchLarge", "iconAlign", "left", 1, "input", 3, "uniqueTags", "separator", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]], template: function TuiInputTagExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputTagExample6_Template_tui_input_tag_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uniqueTags", false)("separator", ctx.customSeparator)("tuiTextfieldCleaner", true)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagComponent"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".input[_ngcontent-%COMP%] {\n  max-width: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC10YWcvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0LXRhZy9leGFtcGxlcy82L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC10YWcvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuIiwiLmlucHV0IHtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/examples/7/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/examples/7/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiInputTagExample7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputTagExample7", function() { return TuiInputTagExample7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");







class TuiInputTagExample7 {
    constructor() {
        this.value = [`Use`, `space`, `button`];
        this.customSeparator = /[\s,]/; // Use space or comma to create new tag
    }
}
TuiInputTagExample7.ɵfac = function TuiInputTagExample7_Factory(t) { return new (t || TuiInputTagExample7)(); };
TuiInputTagExample7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputTagExample7, selectors: [["tui-input-tag-example-7"]], decls: 1, vars: 3, consts: [[1, "b-form", 3, "separator", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"]], template: function TuiInputTagExample7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputTagExample7_Template_tui_input_tag_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("separator", ctx.customSeparator)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputTagComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputTagExample7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-tag-example-7`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/input-tag.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/input-tag/input-tag.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleTuiInputTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputTagComponent", function() { return ExampleTuiInputTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-tag/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-tag/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-tag/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-tag/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input-tag/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/input-tag/examples/6/index.ts");
/* harmony import */ var _examples_7_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/7/index */ "./src/modules/components/input-tag/examples/7/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../kit/components/input-tag/input-tag.component */ "../kit/components/input-tag/input-tag.component.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-max-length.directive */ "../core/directives/textfield-controller/textfield-max-length.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_682295232355881622$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputTag{$closeTagCode} allows to input several tags with autocomplete and list in dropdown. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_682295232355881622$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟afcbf8b99d1a559f2d4d82b878687bf91c4dc49b␟682295232355881622:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputTag${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to input several tags with autocomplete and list in dropdown. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_989459206984870037$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__6 = goog.getMsg("Async items loading");
    I18N_5 = MSG_EXTERNAL_989459206984870037$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟1abaa1c3acfb9987cf9a1c84422e8baef7af845e␟989459206984870037:Async items loading`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__9 = goog.getMsg("sizes");
    I18N_8 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3176539569174538377$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__12 = goog.getMsg("Custom validation");
    I18N_11 = MSG_EXTERNAL_3176539569174538377$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟9f773bc90c4bb84c592f2ed4763f1dbc3320e7e3␟3176539569174538377:Custom validation`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2885218428372331823$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__15 = goog.getMsg("Direction: RTL");
    I18N_14 = MSG_EXTERNAL_2885218428372331823$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`;
}
const _c16 = ["heading", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4936688169379716572$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__18 = goog.getMsg("Custom separator");
    I18N_17 = MSG_EXTERNAL_4936688169379716572$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟0d231f5447e6c607e870e25fa79277b55c41c3dd␟4936688169379716572:Custom separator`;
}
const _c19 = ["heading", I18N_17];
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2465031901930244222$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__21 = goog.getMsg("No spaces inside tags");
    I18N_20 = MSG_EXTERNAL_2465031901930244222$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟732faab5edc3c0659d1ad673424d45f843542394␟2465031901930244222:No spaces inside tags`;
}
const _c22 = ["heading", I18N_20];
function ExampleTuiInputTagComponent_ng_template_1_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Use power of RegExp to forbid spaces inside tags via property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "[separator]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " . ");
} }
function ExampleTuiInputTagComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-input-tag-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-input-tag-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-input-tag-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-input-tag-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](16, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-input-tag-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-input-tag-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](22, _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExampleTuiInputTagComponent_ng_template_1_ng_template_23_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tui-input-tag-example-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example7)("description", _r3);
} }
function ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-tag", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template_tui_input_tag_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter Pythons' names ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.control)("tuiDropdownAlign", ctx_r5.dropdownAlign)("tuiDropdownDirection", ctx_r5.dropdownDirection)("tuiDropdownLimitWidth", ctx_r5.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r5.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r5.dropdownMaxHeight)("tuiHintContent", ctx_r5.hintContent)("tuiHintDirection", ctx_r5.hintDirection)("tuiHintMode", ctx_r5.hintMode)("tuiTextfieldCleaner", ctx_r5.cleaner)("tuiTextfieldExampleText", ctx_r5.exampleText)("tuiTextfieldLabelOutside", ctx_r5.labelOutside)("tuiTextfieldMaxLength", ctx_r5.maxLength)("tuiTextfieldSize", ctx_r5.size)("focusable", ctx_r5.focusable)("disabledItemHandler", ctx_r5.disabledItemHandler)("editable", ctx_r5.editable)("expandable", ctx_r5.expandable)("uniqueTags", ctx_r5.uniqueTags)("separator", ctx_r5.separator)("icon", ctx_r5.icon)("iconAlign", ctx_r5.iconAlign)("readOnly", ctx_r5.readOnly)("allowSpaces", ctx_r5.allowSpaces)("tagValidator", ctx_r5.tagValidator)("inputHidden", ctx_r5.inputHidden)("pseudoHovered", ctx_r5.pseudoHovered)("pseudoPressed", ctx_r5.pseudoPressed)("pseudoFocused", ctx_r5.pseudoFocused)("pseudoInvalid", ctx_r5.pseudoInvalid)("search", ctx_r5.search);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___24 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_23 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___26 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside (emits {$startTagCode}null{$closeTagCode} when item from list selected) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_25 = MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: when item from list selected) `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiInputTagComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Allow spaces inside tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In next major release spaces are always allowed by default.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Use property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "[separator]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to forbid spaces. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " See this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7890132259542012587$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___28 = goog.getMsg(" Handler for deactivation some tags ");
    I18N_27 = MSG_EXTERNAL_7890132259542012587$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟602d2ca3dd3d6bd61166eb562cbc5a7d3ba64eb6␟7890132259542012587: Handler for deactivation some tags `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
function ExampleTuiInputTagComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Ability to enter unique or non-unique tags ");
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6978135358566748527$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___30 = goog.getMsg(" Tags are editable ");
    I18N_29 = MSG_EXTERNAL_6978135358566748527$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟6287011b40da302e14ccffef5a614afb7cc7e283␟6978135358566748527: Tags are editable `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4902838123072095655$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___32 = goog.getMsg(" Control height can be expanded to show all tags ");
    I18N_31 = MSG_EXTERNAL_4902838123072095655$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5475543650697092168$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___34 = goog.getMsg(" String or RegExp to separate tags ");
    I18N_33 = MSG_EXTERNAL_5475543650697092168$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟30f5c50c55cc36d40d8bfec07bf28cee6bb9f1b5␟5475543650697092168: String or RegExp to separate tags `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4275468601899207994$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___36 = goog.getMsg(" An icon. It can be stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_35 = MSG_EXTERNAL_4275468601899207994$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟acedafda2219bad0373461a93b48a42684d1c408␟4275468601899207994: An icon. It can be stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___38 = goog.getMsg(" Icon align ");
    I18N_37 = MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___38;
}
else {
    I18N_37 = $localize `:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_37);
} }
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1436849720143811983$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___40 = goog.getMsg(" Hide input field. For example, to prevent adding new tags ");
    I18N_39 = MSG_EXTERNAL_1436849720143811983$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___40;
}
else {
    I18N_39 = $localize `:␟6ce45bd4a1fda17e0ac98d65053d1109077c6d83␟1436849720143811983: Hide input field. For example, to prevent adding new tags `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_39);
} }
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3924647870684137368$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___42 = goog.getMsg(" A function that cheks that tag is valid ");
    I18N_41 = MSG_EXTERNAL_3924647870684137368$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS___42;
}
else {
    I18N_41 = $localize `:␟24fc826e9f6d1737ab827b2db51272e81e476b65␟3924647870684137368: A function that cheks that tag is valid `;
}
function ExampleTuiInputTagComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_41);
} }
function ExampleTuiInputTagComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputTagComponent_ng_template_2_ng_template_1_Template, 2, 31, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputTagComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputTagComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputTagComponent_ng_template_2_ng_template_5_Template, 14, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.allowSpaces = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputTagComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputTagComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.uniqueTags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputTagComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.editable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputTagComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.expandable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputTagComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.separator = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputTagComponent_ng_template_2_ng_template_11_Template, 3, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.icon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputTagComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.iconAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiInputTagComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.inputHidden = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiInputTagComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.tagValidator = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "inherited-documentation", 24);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValue", ctx_r1.allowSpaces);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.uniqueTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.expandable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.separatorVariants)("documentationPropertyValue", ctx_r1.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconAlignVariants)("documentationPropertyValue", ctx_r1.iconAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.inputHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.tagValidatorVariants)("documentationPropertyValue", ctx_r1.tagValidator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropdown", true);
} }
var I18N_43;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8882593062505514869$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__44 = goog.getMsg(" Import {$startTagCode}TuiInputTagModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_43 = MSG_EXTERNAL_8882593062505514869$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__44;
}
else {
    I18N_43 = $localize `:␟a48b1b6fe4f1a0418758cda1de24c138cf8d5ad5␟8882593062505514869: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputTagModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_45;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__46 = goog.getMsg("Add to the template:");
    I18N_45 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_TAG_INPUT_TAG_COMPONENT_TS__46;
}
else {
    I18N_45 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputTagComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputTagComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_4__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.html")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.less")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.less")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-html */ "!!raw-loader!-examples-7-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.html")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([`John Cleese`, `Eric Idle`, `Michael Palin`], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.editable = true;
        this.expandable = true;
        this.allowSpaces = true;
        this.uniqueTags = true;
        this.separatorVariants = [`,`, `;`, /[\d]/, /[\s,]/];
        this.separator = this.separatorVariants[0];
        this.iconVariants = [`tuiIconSearchLarge`];
        this.icon = ``;
        this.iconAlignVariants = [`left`, `right`];
        this.iconAlign = this.iconAlignVariants[1];
        this.maxLengthVariants = [10, 20];
        this.maxLength = null;
        this.search = ``;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[this.sizeVariants.length - 1];
        this.tagValidatorVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_TRUE_HANDLER"],
            item => item === `test`,
            item => item !== `mail`,
        ];
        this.tagValidator = this.tagValidatorVariants[0];
        this.inputHidden = false;
        this.disabledItemHandlerVariants = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"], item => String(item)[0] === `T`];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
    }
}
ExampleTuiInputTagComponent.ɵfac = function ExampleTuiInputTagComponent_Factory(t) { return ɵExampleTuiInputTagComponent_BaseFactory(t || ExampleTuiInputTagComponent); };
ExampleTuiInputTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputTagComponent, selectors: [["example-input-tag"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputTagComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputTag", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["id", "base", 3, "content", 6, "heading"], ["id", "async", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "validation", 3, "content", 6, "heading"], ["id", "rtl", 3, "content", 6, "heading"], ["id", "separator", 3, "content", 6, "heading"], ["id", "no-spaces-inside-tags", 3, "content", "description", 6, "heading"], ["forbidSpacesDescription", ""], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "allowSpaces", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyDeprecated", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "uniqueTags", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expandable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "separator", "documentationPropertyMode", "input", "documentationPropertyType", "string | RegExp", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "inputHidden", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tagValidator", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "tuiTextfieldCleaner", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldMaxLength", "tuiTextfieldSize", "focusable", "disabledItemHandler", "editable", "expandable", "uniqueTags", "separator", "icon", "iconAlign", "readOnly", "allowSpaces", "tagValidator", "inputHidden", "pseudoHovered", "pseudoPressed", "pseudoFocused", "pseudoInvalid", "search", "searchChange"], ["tuiLink", "", "routerLink", "/components/input-tag", "fragment", "no-spaces-inside-tags"], ["tuiLink", "", "routerLink", "/services/svg-service"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputTagComponent_ng_template_1_Template, 26, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputTagComponent_ng_template_2_Template, 16, 20, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputTagComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiInputTagExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiInputTagExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputTagExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputTagExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputTagExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputTagExample6"], _examples_7_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputTagExample7"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_19__["InheritedDocumentationComponent"], _kit_components_input_tag_input_tag_component__WEBPACK_IMPORTED_MODULE_20__["TuiInputTagComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_21__["TuiDropdownControllerDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_22__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_23__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_25__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldMaxLengthDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldSizeDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_28__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterLinkWithHref"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_30__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputTagComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputTagComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-input-tag`,
                templateUrl: `./input-tag.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputTagComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-tag/input-tag.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/input-tag/input-tag.module.ts ***!
  \**************************************************************/
/*! exports provided: ExampleTuiInputTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputTagModule", function() { return ExampleTuiInputTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-tag/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-tag/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-tag/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-tag/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input-tag/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/input-tag/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/components/input-tag/examples/7/index.ts");
/* harmony import */ var _input_tag_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./input-tag.component */ "./src/modules/components/input-tag/input-tag.component.ts");


















class ExampleTuiInputTagModule {
}
ExampleTuiInputTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputTagModule });
ExampleTuiInputTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputTagModule_Factory(t) { return new (t || ExampleTuiInputTagModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputTagModule, { declarations: [_input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputTagExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputTagExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputTagExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputTagExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputTagExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_13__["TuiInputTagExample6"],
        _examples_7__WEBPACK_IMPORTED_MODULE_14__["TuiInputTagExample7"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDataListWrapperModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTagModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"])),
                ],
                declarations: [
                    _input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputTagExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputTagExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputTagExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputTagExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiInputTagExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_13__["TuiInputTagExample6"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_14__["TuiInputTagExample7"],
                ],
                exports: [_input_tag_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputTagComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-tag-input-tag-module.js.map