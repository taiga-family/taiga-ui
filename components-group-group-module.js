(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-group-group-module"],{

/***/ "./src/modules/components/group/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/group/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiGroupExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiGroupExample1", function() { return TuiGroupExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");



















function TuiGroupExample1_tui_data_list_wrapper_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
const _c0 = function () { return []; };
class TuiGroupExample1 {
    constructor() {
        this.items = [`Option 1`, `Option 2`, `Option 3`];
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            multiSelectControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
}
TuiGroupExample1.ɵfac = function TuiGroupExample1_Factory(t) { return new (t || TuiGroupExample1)(); };
TuiGroupExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiGroupExample1, selectors: [["tui-group-example-1"]], decls: 21, vars: 22, consts: [[1, "input-wrapper", 3, "formGroup"], ["tuiGroup", "", 1, "group"], ["formControlName", "testValue", "tuiTextfieldExampleText", "House", "tuiHintContent", "Write a number", 1, "tui-group__inherit-item"], ["formControlName", "testValue", 3, "error"], ["formControlName", "multiSelectControl", "tuiHintContent", "Write house building", 1, "tui-group__inherit-item", 3, "tuiTextfieldLabelOutside", "editable", "expandable"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["formControlName", "multiSelectControl", 3, "error"], ["formControlName", "testValue3", "tuiTextfieldExampleText", "Apartment number", "tuiHintContent", "Write an apartment number only", 1, "tui-group__inherit-item"], ["formControlName", "testValue3", 3, "error"], ["tuiMultiSelectGroup", "", 3, "items"]], template: function TuiGroupExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " House ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-multi-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Building ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiGroupExample1_tui_data_list_wrapper_11_Template, 1, 1, "tui-data-list-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Apartment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("editable", false)("expandable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldExampleTextDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_8__["TuiHintControllerDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiErrorComponent"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_10__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_14__["TuiMultiSelectGroupDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiFieldErrorPipe"]], styles: [".group[_ngcontent-%COMP%] {\n  max-width: 30.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9ncm91cC9leGFtcGxlcy8xL2luZGV4LnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZ3JvdXAvZXhhbXBsZXMvMS9pbmRleC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZ3JvdXAvZXhhbXBsZXMvMS9pbmRleC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDMwLjI1cmVtO1xufVxuIiwiLmdyb3VwIHtcbiAgbWF4LXdpZHRoOiAzMC4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiGroupExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-group-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/group/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/group/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiGroupExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiGroupExample2", function() { return TuiGroupExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");






class TuiGroupExample2 {
}
TuiGroupExample2.ɵfac = function TuiGroupExample2_Factory(t) { return new (t || TuiGroupExample2)(); };
TuiGroupExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiGroupExample2, selectors: [["tui-group-example-2"]], decls: 6, vars: 1, consts: [["tuiGroup", "", 1, "group", 3, "collapsed"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "l"], ["tuiIconButton", "", "type", "button", "appearance", "outline", "size", "l", "title", "A sample of icon-button in a group", "icon", "tuiIconChevronDownLarge", 1, "tui-group__auto-width-item"]], template: function TuiGroupExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Button 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Button 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true);
    } }, directives: [_core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_3__["TuiGroupDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], styles: [".group[_ngcontent-%COMP%] {\n  max-width: 30.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9ncm91cC9leGFtcGxlcy8yL2luZGV4LnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZ3JvdXAvZXhhbXBsZXMvMi9pbmRleC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZ3JvdXAvZXhhbXBsZXMvMi9pbmRleC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDMwLjI1cmVtO1xufVxuIiwiLmdyb3VwIHtcbiAgbWF4LXdpZHRoOiAzMC4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiGroupExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-group-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/group/examples/3/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/group/examples/3/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiGroupExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiGroupExample3", function() { return TuiGroupExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/radio-block/radio-block.component */ "../kit/components/radio-block/radio-block.component.ts");








class TuiGroupExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`orange`),
        });
    }
}
TuiGroupExample3.ɵfac = function TuiGroupExample3_Factory(t) { return new (t || TuiGroupExample3)(); };
TuiGroupExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiGroupExample3, selectors: [["tui-group-example-3"]], decls: 7, vars: 2, consts: [["tuiGroup", "", "orientation", "vertical", 1, "group", 3, "collapsed", "formGroup"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "orange"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "apple"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "pineapple"]], template: function TuiGroupExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-radio-block", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Oranges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-radio-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Apples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-radio-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pineapples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true)("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_5__["TuiRadioBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiGroupExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-group-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/group/examples/4/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/group/examples/4/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiGroupExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiGroupExample4", function() { return TuiGroupExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/radio-block/radio-block.component */ "../kit/components/radio-block/radio-block.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2643401854460028912$$SRC_MODULES_COMPONENTS_GROUP_EXAMPLES_4_INDEX_TS_1 = goog.getMsg("Directive helps to avoid extra layers of HTML");
    I18N_0 = MSG_EXTERNAL_2643401854460028912$$SRC_MODULES_COMPONENTS_GROUP_EXAMPLES_4_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟3168c38bbf89a73903196f867a4e4f002f565bb2␟2643401854460028912:Directive helps to avoid extra layers of HTML`;
}
class TuiGroupExample4 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
    }
}
TuiGroupExample4.ɵfac = function TuiGroupExample4_Factory(t) { return new (t || TuiGroupExample4)(); };
TuiGroupExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiGroupExample4, selectors: [["tui-group-example-4"]], decls: 9, vars: 2, consts: [["tuiGroup", "", 3, "collapsed", "formGroup"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "orange"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "apple"], ["size", "l", "contentAlign", "right", "formControlName", "testValue", "item", "pineapple"]], template: function TuiGroupExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-radio-block", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Oranges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-radio-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Apples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-radio-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Pineapples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true)("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_5__["TuiRadioBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiGroupExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-group-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/group/group.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/group/group.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiGroupComponent", function() { return ExampleTuiGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/group/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/group/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/group/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/group/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2269295498324893113$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__1 = goog.getMsg(" A component and a directive for grouping other components. For example, {$startLink} textfields {$closeLink} and {$startLink_1} buttons {$closeLink} . ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startLink_1": "\uFFFD#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2269295498324893113$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟8f6b1bf3087cf8d3e0e258a4775c54aba7bb0288␟2269295498324893113: A component and a directive for grouping other components. For example, ${"\uFFFD#2\uFFFD"}:START_LINK: textfields ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: buttons ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: . `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_513351405665328906$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__3 = goog.getMsg(" Items take all available width. If you want to prevent it, use {$startTagCode} class=\" {$startTagStrong}tui-group__auto-width-item{$closeTagStrong} \" {$closeTagCode} . ", { "startTagCode": "\uFFFD#6\uFFFD", "startTagStrong": "\uFFFD#7\uFFFD", "closeTagStrong": "\uFFFD/#7\uFFFD", "closeTagCode": "\uFFFD/#6\uFFFD" });
    I18N_2 = MSG_EXTERNAL_513351405665328906$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟777f85a475cfeda513d7f45a151fad697ffb94b7␟513351405665328906: Items take all available width. If you want to prevent it, use ${"\uFFFD#6\uFFFD"}:START_TAG_CODE: class=" ${"\uFFFD#7\uFFFD"}:START_TAG_STRONG:tui-group__auto-width-item${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_STRONG: " ${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2142095385739153385$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__5 = goog.getMsg(" If you want item to inherit border radius, use class {$startTagCode} class=\" {$startTagStrong}tui-group__inherit-item{$closeTagStrong} \" {$closeTagCode}", { "startTagCode": "\uFFFD#10\uFFFD", "startTagStrong": "\uFFFD#11\uFFFD", "closeTagStrong": "\uFFFD/#11\uFFFD", "closeTagCode": "\uFFFD/#10\uFFFD" });
    I18N_4 = MSG_EXTERNAL_2142095385739153385$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟77b727b4779fd86c3a6192ce9660fb21d45e6fd1␟2142095385739153385: If you want item to inherit border radius, use class ${"\uFFFD#10\uFFFD"}:START_TAG_CODE: class=" ${"\uFFFD#11\uFFFD"}:START_TAG_STRONG:tui-group__inherit-item${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_STRONG: " ${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_541844674688516032$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__7 = goog.getMsg("Vertical group");
    I18N_6 = MSG_EXTERNAL_541844674688516032$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟e1d09edd2cc0850c73ea6833ed81869140da6334␟541844674688516032:Vertical group`;
}
const _c8 = ["heading", I18N_6];
function ExampleTuiGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-group-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-group-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](17, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-group-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-group-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6422270180661528002$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___10 = goog.getMsg(" Enable adaptive mode (for mobile) ");
    I18N_9 = MSG_EXTERNAL_6422270180661528002$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___10;
}
else {
    I18N_9 = $localize `:␟18a1189a5c3b23654b7cb197f454cd73e2c17c40␟6422270180661528002: Enable adaptive mode (for mobile) `;
}
function ExampleTuiGroupComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_9);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3110308235139033006$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___12 = goog.getMsg(" Remove margin between items ( {$startTagCode}2px{$closeTagCode} by default) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_11 = MSG_EXTERNAL_3110308235139033006$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟5ed4d47c7039da2f1e004a0639323a2534dfb066␟3110308235139033006: Remove margin between items ( ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:2px${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default) `;
}
function ExampleTuiGroupComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3956809924808632175$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___14 = goog.getMsg(" The first and the last items are rounded ");
    I18N_13 = MSG_EXTERNAL_3956809924808632175$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟0a9f60d68a5d8757a2894e19745fce748bfc3733␟3956809924808632175: The first and the last items are rounded `;
}
function ExampleTuiGroupComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8118152330348299882$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___16 = goog.getMsg(" Horizontal or vertical direction of group ");
    I18N_15 = MSG_EXTERNAL_8118152330348299882$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟a9dec835970963973ebe7c67dca01e56515d3935␟8118152330348299882: Horizontal or vertical direction of group `;
}
function ExampleTuiGroupComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_470234041963629293$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___18 = goog.getMsg(" Size of rounding ");
    I18N_17 = MSG_EXTERNAL_470234041963629293$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟be479201f8685f79ea9beaee88f6123149f313dc␟470234041963629293: Size of rounding `;
}
function ExampleTuiGroupComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
function ExampleTuiGroupComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Button 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Button 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Button 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiGroupComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.adaptive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiGroupComponent_ng_template_2_ng_template_10_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.collapsed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiGroupComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.rounded = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiGroupComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.orientation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiGroupComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiGroupComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adaptive", ctx_r1.adaptive)("collapsed", ctx_r1.collapsed)("rounded", ctx_r1.rounded)("orientation", ctx_r1.orientation)("size", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.adaptive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.rounded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2237696305230569187$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__20 = goog.getMsg(" Import {$startTagCode}TuiGroupModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_19 = MSG_EXTERNAL_2237696305230569187$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟71ef1f6cc7c1717170b109a821b56e52dbf7a18c␟2237696305230569187: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiGroupModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__22 = goog.getMsg("Add to the template:");
    I18N_21 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_GROUP_GROUP_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiGroupComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-style-less */ "!!raw-loader!-examples-1-index-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/1/index.style.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-style-less */ "!!raw-loader!-examples-2-index-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/2/index.style.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.html")),
        };
        this.adaptive = false;
        this.rounded = true;
        this.collapsed = false;
        this.orientationVariants = [`horizontal`, `vertical`];
        this.orientation = this.orientationVariants[0];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
    }
}
ExampleTuiGroupComponent.ɵfac = function ExampleTuiGroupComponent_Factory(t) { return new (t || ExampleTuiGroupComponent)(); };
ExampleTuiGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiGroupComponent, selectors: [["example-group"]], decls: 4, vars: 0, consts: [["header", "Group", "package", "CORE", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/components/input"], ["tuiLink", "", "routerLink", "/components/button"], ["id", "inputs", "heading", "Inputs", 3, "content"], ["id", "buttons", "heading", "ButtonGroup", 3, "content"], ["id", "vertical", 3, "content", 6, "heading"], ["id", "directive", "heading", "Directive", 3, "content"], ["tuiGroup", "", 1, "group", 3, "adaptive", "collapsed", "rounded", "orientation", "size"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "l"], ["documentationPropertyName", "adaptive", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiGroupComponent_ng_template_1_Template, 21, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiGroupComponent_ng_template_2_Template, 14, 12, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiGroupComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiGroupExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_8__["TuiGroupExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_9__["TuiGroupExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_10__["TuiGroupExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_12__["TuiGroupDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], styles: [".group[_ngcontent-%COMP%] {\n  max-width: 30.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9ncm91cC9ncm91cC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwL2dyb3VwLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9ncm91cC9ncm91cC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDMwLjI1cmVtO1xufVxuIiwiLmdyb3VwIHtcbiAgbWF4LXdpZHRoOiAzMC4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-group`,
                templateUrl: `./group.template.html`,
                styleUrls: [`./group.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/group/group.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/components/group/group.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiGroupModule", function() { return ExampleTuiGroupModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/group/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/group/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/group/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/group/examples/4/index.ts");
/* harmony import */ var _group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./group.component */ "./src/modules/components/group/group.component.ts");















class ExampleTuiGroupModule {
}
ExampleTuiGroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiGroupModule });
ExampleTuiGroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiGroupModule_Factory(t) { return new (t || ExampleTuiGroupModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiProjectClassModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiComboBoxModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMultiSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiGroupModule, { declarations: [_group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiGroupExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiGroupExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiGroupExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiGroupExample4"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiProjectClassModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiComboBoxModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMultiSelectModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiGroupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiProjectClassModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiComboBoxModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMultiSelectModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"])),
                ],
                declarations: [
                    _group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiGroupExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiGroupExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiGroupExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiGroupExample4"],
                ],
                exports: [_group_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiGroupComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-group-group-module.js.map