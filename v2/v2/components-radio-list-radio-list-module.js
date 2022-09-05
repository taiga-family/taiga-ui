(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-radio-list-radio-list-module"],{

/***/ "./src/modules/components/radio-list/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/radio-list/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiRadioListExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRadioListExample1", function() { return TuiRadioListExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/radio-list/radio-list.component */ "../kit/components/radio-list/radio-list.component.ts");







function TuiRadioListExample1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Option \u00AB", data_r4.name, "\u00BB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.description);
} }
function TuiRadioListExample1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00AB", data_r5.name, "\u00BB ");
} }
class TuiRadioListExample1 {
    constructor() {
        this.items = [
            {
                name: `Simple`,
                description: `Something usual`,
            },
            {
                name: `Advanced`,
                description: `Something better`,
            },
            {
                name: `PRO`,
                description: `Something cool`,
            },
        ];
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tariff: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.items[0]),
        });
    }
}
TuiRadioListExample1.ɵfac = function TuiRadioListExample1_Factory(t) { return new (t || TuiRadioListExample1)(); };
TuiRadioListExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRadioListExample1, selectors: [["tui-radio-list-example-1"]], decls: 11, vars: 6, consts: [[1, "tui-row"], [1, "tui-col_md-4"], [3, "formGroup"], ["formControlName", "tariff", 3, "items", "itemContent"], ["tariff1ItemContent", ""], ["formControlName", "tariff", "orientation", "horizontal", 3, "items", "itemContent"], ["tariff2ItemContent", ""], [1, "description"]], template: function TuiRadioListExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-radio-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiRadioListExample1_ng_template_4_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-radio-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiRadioListExample1_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("itemContent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("itemContent", _r2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_4__["TuiRadioListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xs);\n  margin-top: 0.25rem;\n  color: var(--tui-text-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3JhZGlvLWxpc3QvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gICAgbWFyZ2luLXRvcDogQHNwYWNlO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRadioListExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-radio-list-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/radio-list/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/radio-list/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiRadioListExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRadioListExample2", function() { return TuiRadioListExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/radio-list/radio-list.component */ "../kit/components/radio-list/radio-list.component.ts");







function TuiRadioListExample2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Option \u00AB", data_r4.name, "\u00BB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.description);
} }
function TuiRadioListExample2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00AB", data_r5.name, "\u00BB ");
} }
class TuiRadioListExample2 {
    constructor() {
        this.items = [
            {
                name: `Simple`,
                description: `Something usual`,
            },
            {
                name: `Advanced`,
                description: `Something better`,
            },
            {
                name: `PRO`,
                description: `Something cool`,
            },
        ];
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tariff: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.items[0]),
        });
    }
}
TuiRadioListExample2.ɵfac = function TuiRadioListExample2_Factory(t) { return new (t || TuiRadioListExample2)(); };
TuiRadioListExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRadioListExample2, selectors: [["tui-radio-list-example-2"]], decls: 11, vars: 6, consts: [[1, "tui-row"], [1, "tui-col_md-4"], [3, "formGroup"], ["formControlName", "tariff", "size", "l", 3, "items", "itemContent"], ["tariff1ItemContent", ""], ["formControlName", "tariff", "orientation", "horizontal", "size", "l", 3, "items", "itemContent"], ["tariff2ItemContent", ""], [1, "description"]], template: function TuiRadioListExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-radio-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiRadioListExample2_ng_template_4_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-radio-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiRadioListExample2_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("itemContent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("itemContent", _r2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_4__["TuiRadioListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  margin-top: 0.25rem;\n  color: var(--tui-text-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3JhZGlvLWxpc3QvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIG1hcmdpbi10b3A6IEBzcGFjZTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRadioListExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-radio-list-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/radio-list/radio-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/radio-list/radio-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiRadioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRadioListComponent", function() { return ExampleTuiRadioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/radio-list/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/radio-list/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/radio-list/radio-list.component */ "../kit/components/radio-list/radio-list.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4793573930891017833$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__1 = goog.getMsg("Component for fast showing many radio buttons. It supports also custom content");
    I18N_0 = MSG_EXTERNAL_4793573930891017833$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟3a9a3a268766eb8da82e5eaedaf865056f1d5da2␟4793573930891017833:Component for fast showing many radio buttons. It supports also custom content`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__6 = goog.getMsg("Big size");
    I18N_5 = MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiRadioListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-radio-list-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-radio-list-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
function ExampleTuiRadioListComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-radio-list", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("items", ctx_r3.items)("orientation", ctx_r3.orientation)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("size", ctx_r3.size)("itemContent", _r4)("disabledItemHandler", ctx_r3.disabledItemHandler)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
} }
function ExampleTuiRadioListComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Option \u00AB", data_r10.name, "\u00BB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10.description);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_8 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiRadioListComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___11 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_10 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiRadioListComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6598740144900503893$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___13 = goog.getMsg(" Direction of group ");
    I18N_12 = MSG_EXTERNAL_6598740144900503893$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟4b5e527bf1b048530ab61297a358799a5489a3fd␟6598740144900503893: Direction of group `;
}
function ExampleTuiRadioListComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___15 = goog.getMsg(" Size ");
    I18N_14 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiRadioListComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
function ExampleTuiRadioListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiRadioListComponent_ng_template_2_ng_template_1_Template, 1, 12, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiRadioListComponent_ng_template_2_ng_template_2_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiRadioListComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiRadioListComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiRadioListComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.orientation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiRadioListComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRadioListComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1615504379280277164$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__17 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiRadioListModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_16 = MSG_EXTERNAL_1615504379280277164$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟ad0a275fb08cc92fc6532795b334f6e42e88d186␟1615504379280277164: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRadioListModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__19 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_18 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_18);
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
    I18N_20 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_RADIO_LIST_RADIO_LIST_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiRadioListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiRadioListComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_4__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/import/declare-form.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.less")),
        };
        this.orientationVariants = [`vertical`, `horizontal`];
        this.orientation = this.orientationVariants[0];
        this.items = [
            {
                name: `Simple`,
                description: `It is simple`,
            },
            {
                name: `Advanced`,
                description: `For better clients`,
            },
            {
                name: `PRO`,
                description: `For pro and cool clients`,
            },
        ];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_TRUE_HANDLER"],
            item => item.name === `Advanced`,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.items[0]);
    }
}
ExampleTuiRadioListComponent.ɵfac = function ExampleTuiRadioListComponent_Factory(t) { return ɵExampleTuiRadioListComponent_BaseFactory(t || ExampleTuiRadioListComponent); };
ExampleTuiRadioListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiRadioListComponent, selectors: [["example-tui-radio-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiRadioListComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "RadioList", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "large", 3, "content", 6, "heading"], [3, "control"], ["itemContent", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-space_bottom-3", 3, "formControl", "items", "orientation", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "size", "itemContent", "disabledItemHandler", "focusable", "readOnly"], [1, "description"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiRadioListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiRadioListComponent_ng_template_1_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiRadioListComponent_ng_template_2_Template, 10, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiRadioListComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiRadioListExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_14__["InheritedDocumentationComponent"], _kit_components_radio_list_radio_list_component__WEBPACK_IMPORTED_MODULE_15__["TuiRadioListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], styles: [".description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xs);\n  margin-top: 0.25rem;\n  color: var(--tui-text-03);\n}\n[data-size='l'][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L3JhZGlvLWxpc3Quc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYWRpby1saXN0L3JhZGlvLWxpc3Quc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FES0o7QUNISTtFQUNJLDRCQUFBO0FES1IiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3JhZGlvLWxpc3QvcmFkaW8tbGlzdC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG5bZGF0YS1zaXplPSdsJ10gLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcblxuICAgIFtkYXRhLXNpemU9J2wnXSAmIHtcbiAgICAgICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
const ɵExampleTuiRadioListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiRadioListComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiRadioListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-radio-list`,
                templateUrl: `./radio-list.template.html`,
                styleUrls: [`./radio-list.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiRadioListComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/radio-list/radio-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/radio-list/radio-list.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiRadioListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRadioListModule", function() { return ExampleTuiRadioListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/radio-list/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/radio-list/examples/2/index.ts");
/* harmony import */ var _radio_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio-list.component */ "./src/modules/components/radio-list/radio-list.component.ts");














class ExampleTuiRadioListModule {
}
ExampleTuiRadioListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiRadioListModule });
ExampleTuiRadioListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiRadioListModule_Factory(t) { return new (t || ExampleTuiRadioListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiRadioListModule, { declarations: [_radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiRadioListExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiRadioListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"])),
                ],
                declarations: [
                    _radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiRadioListExample2"],
                ],
                exports: [_radio_list_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRadioListComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-radio-list-radio-list-module.js.map