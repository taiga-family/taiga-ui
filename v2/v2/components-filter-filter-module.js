(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-filter-filter-module"],{

/***/ "./src/modules/components/filter/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/filter/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFilterExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFilterExample1", function() { return TuiFilterExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/filter/filter.component */ "../kit/components/filter/filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








class TuiFilterExample1 {
    constructor() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([`Food`]),
        });
        this.items = [
            `News`,
            `Food`,
            `Clothes`,
            `Popular`,
            `Goods`,
            `Furniture`,
            `Tech`,
            `Building materials`,
        ];
        this.disabledItemHandler = item => item.length < 7;
    }
}
TuiFilterExample1.ɵfac = function TuiFilterExample1_Factory(t) { return new (t || TuiFilterExample1)(); };
TuiFilterExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFilterExample1, selectors: [["tui-filter-example-1"]], decls: 6, vars: 6, consts: [[3, "formGroup"], ["formControlName", "filters", "size", "s", 3, "disabledItemHandler", "items"]], template: function TuiFilterExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabledItemHandler", ctx.disabledItemHandler)("items", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.form.value), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  max-width: 34.375rem;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n  margin: 0 0 0.75rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: inline;\n}\n.tag[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.25rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2ZpbHRlci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QURJSjtBQ0RBO0VBQ0ksZUFBQTtBREdKO0FDQUE7RUFDSSwyQkFBQTtBREVKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi50YWcge1xuICBtYXJnaW46IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xuICAgIG1hcmdpbjogMCAwIEBzcGFjZSAqIDM7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50YWcge1xuICAgIG1hcmdpbjogMCBAc3BhY2UgQHNwYWNlIDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFilterExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-filter-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/filter/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/filter/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFilterExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFilterExample2", function() { return TuiFilterExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/filter/filter.component */ "../kit/components/filter/filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








function TuiFilterExample2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.title, "\n");
} }
const COMPLETED = {
    title: `Done`,
    operations: [
        {
            amount: 100,
        },
        {
            amount: 200,
        },
    ],
};
class TuiFilterExample2 {
    constructor() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([
                {
                    title: `Drafts`,
                },
            ]),
        });
        this.items = [
            COMPLETED,
            {
                title: `Drafts`,
                operations: [
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 100,
                    },
                ],
            },
            {
                title: `For sign`,
                operations: [],
            },
            {
                title: `Queue`,
                operations: [
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                ],
            },
        ];
        this.identityMatcher = (item1, item2) => item1.title === item2.title;
        this.badgeHandler = item => item.operations.length;
    }
}
TuiFilterExample2.ɵfac = function TuiFilterExample2_Factory(t) { return new (t || TuiFilterExample2)(); };
TuiFilterExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFilterExample2, selectors: [["tui-filter-example-2"]], decls: 8, vars: 8, consts: [[3, "formGroup"], ["formControlName", "filters", 3, "identityMatcher", "content", "badgeHandler", "items"], ["content", ""]], template: function TuiFilterExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiFilterExample2_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identityMatcher", ctx.identityMatcher)("content", _r0)("badgeHandler", ctx.badgeHandler)("items", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.form.value), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  max-width: 34.375rem;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n  margin: 0 0 0.75rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: inline;\n}\n.tag[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.25rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2ZpbHRlci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QURJSjtBQ0RBO0VBQ0ksZUFBQTtBREdKO0FDQUE7RUFDSSwyQkFBQTtBREVKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi50YWcge1xuICBtYXJnaW46IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xuICAgIG1hcmdpbjogMCAwIEBzcGFjZSAqIDM7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50YWcge1xuICAgIG1hcmdpbjogMCBAc3BhY2UgQHNwYWNlIDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFilterExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-filter-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/filter/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/filter/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFilterExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFilterExample3", function() { return TuiFilterExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/filter/filter.component */ "../kit/components/filter/filter.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiFilterExample3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-svg", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getItemIcon(item_r2));
} }
const getIcon = {
    Calendar: `tuiIconCalendarLarge`,
    Favorite: `tuiIconStarLarge`,
    Messages: `tuiIconCommentLarge`,
    FAQ: `tuiIconHelpCircleLarge`,
    Settings: `tuiIconSettingsLarge`,
};
class TuiFilterExample3 {
    constructor() {
        this.items = [`Calendar`, `Favorite`, `Messages`, `FAQ`, `Settings`];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            filters: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]),
        });
    }
    getItemIcon(title) {
        return getIcon[title];
    }
}
TuiFilterExample3.ɵfac = function TuiFilterExample3_Factory(t) { return new (t || TuiFilterExample3)(); };
TuiFilterExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFilterExample3, selectors: [["tui-filter-example-3"]], decls: 8, vars: 6, consts: [[3, "formGroup"], ["formControlName", "filters", 3, "content", "items"], ["content", ""], [1, "tui-space_left-2", 3, "src"]], template: function TuiFilterExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiFilterExample3_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _r0)("items", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.form.value), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_5__["TuiSvgComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  max-width: 34.375rem;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n  margin: 0 0 0.75rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: inline;\n}\n.tag[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.25rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2ZpbHRlci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QURJSjtBQ0RBO0VBQ0ksZUFBQTtBREdKO0FDQUE7RUFDSSwyQkFBQTtBREVKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cbi50aXRsZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi50YWcge1xuICBtYXJnaW46IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDM0LjM3NXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xuICAgIG1hcmdpbjogMCAwIEBzcGFjZSAqIDM7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50YWcge1xuICAgIG1hcmdpbjogMCBAc3BhY2UgQHNwYWNlIDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFilterExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-filter-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/filter/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/filter/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFilterExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFilterExample4", function() { return TuiFilterExample4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/filter/filter.component */ "../kit/components/filter/filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");












var Department;
(function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["HeadOffice"] = "Heads";
    Department["Delivery"] = "Delivery";
})(Department || (Department = {}));
class TuiFilterExample4 {
    constructor() {
        this.items = Object.values(Department);
        this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
    }
    get model$() {
        return this.filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => (value.length === this.items.length ? [] : value)));
    }
    get buttonAppearance$() {
        return this.filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => value.length === this.items.length
            ? "whiteblock-active" /* WhiteblockActive */
            : "whiteblock" /* Whiteblock */));
    }
    onModelChange(model) {
        this.filters$.next(model);
    }
    toggleAll() {
        this.filters$.next(this.items.length === this.filters$.value.length ? [] : [...this.items]);
    }
}
TuiFilterExample4.ɵfac = function TuiFilterExample4_Factory(t) { return new (t || TuiFilterExample4)(); };
TuiFilterExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiFilterExample4, selectors: [["tui-filter-example-4"]], decls: 8, vars: 7, consts: [[1, "tui-space_bottom-4"], [1, "filters-with-all"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-1", 3, "appearance", "click"], [3, "items", "ngModel", "ngModelChange"]], template: function TuiFilterExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Choose a department:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiFilterExample4_Template_button_click_3_listener() { return ctx.toggleAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tui-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiFilterExample4_Template_tui_filter_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.buttonAppearance$) || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx.model$));
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["TuiButtonComponent"], _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".filters-with-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWx0ZXIvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2ZpbHRlci9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2ZpbHRlci9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uZmlsdGVycy13aXRoLWFsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uZmlsdGVycy13aXRoLWFsbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiFilterExample4.prototype, "model$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiFilterExample4.prototype, "buttonAppearance$", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiFilterExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-filter-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { model$: [], buttonAppearance$: [] }); })();


/***/ }),

/***/ "./src/modules/components/filter/filter.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/filter/filter.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFilterComponent", function() { return ExampleTuiFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/filter/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/filter/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/filter/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/filter/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/filter/filter.component */ "../kit/components/filter/filter.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6973195341614832335$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__1 = goog.getMsg(" Components shows separated items that can be used to filter content on the page. There are also an option with badges. ");
    I18N_0 = MSG_EXTERNAL_6973195341614832335$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟9919bf787bc7c0a8e71a9e457491487af5a0a81c␟6973195341614832335: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1282387873164068840$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__6 = goog.getMsg("With badges");
    I18N_5 = MSG_EXTERNAL_1282387873164068840$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__9 = goog.getMsg("Custom");
    I18N_8 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6633556289912992409$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__12 = goog.getMsg("With all button");
    I18N_11 = MSG_EXTERNAL_6633556289912992409$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`;
}
const _c13 = ["heading", I18N_11];
function ExampleTuiFilterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-filter-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-filter-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-filter-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-filter-example-4");
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
} }
function ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-filter", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggledItem", function ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template_tui_filter_toggledItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onToggledItemChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("badgeHandler", ctx_r3.badgeHandler)("disabledItemHandler", ctx_r3.disabledItemHandler)("items", ctx_r3.items)("size", ctx_r3.size);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5781311404027237254$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___15 = goog.getMsg(" Function that gets and item and returns a badge value. Uses {$startTagCode}valueOf{$closeTagCode} to get a number to show by default ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_14 = MSG_EXTERNAL_5781311404027237254$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟cd98273289fb99517690cbce1b1d0d11f8d0d0c8␟5781311404027237254: Function that gets and item and returns a badge value. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:valueOf${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: to get a number to show by default `;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9103376824632144211$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___17 = goog.getMsg(" Template for custom content in filter ");
    I18N_16 = MSG_EXTERNAL_9103376824632144211$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___19 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_18 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8367237806229821940$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___21 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_20 = MSG_EXTERNAL_8367237806229821940$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7860704213160462565$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___23 = goog.getMsg(" Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses {$startTagCode}toString{$closeTagCode} for view ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_22 = MSG_EXTERNAL_7860704213160462565$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟81389767cdcd4e6282691e8eecc5bd1cdf2a1307␟7860704213160462565: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:toString${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for view `;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___25 = goog.getMsg(" Size ");
    I18N_24 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4387032186612939582$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___27 = goog.getMsg(" toggled event of item ");
    I18N_26 = MSG_EXTERNAL_4387032186612939582$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `;
}
function ExampleTuiFilterComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
function ExampleTuiFilterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template, 1, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiFilterComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.badgeHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiFilterComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiFilterComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiFilterComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiFilterComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiFilterComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiFilterComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.badgeHandlerVariants)("documentationPropertyValue", ctx_r1.badgeHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8315740496990906089$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__29 = goog.getMsg(" Import {$startTagCode}TuiFilterModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_28 = MSG_EXTERNAL_8315740496990906089$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟1ab787c2eb6660c931fda91647e7159854cb6941␟8315740496990906089: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFilterModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
    I18N_30 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__31;
}
else {
    I18N_30 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiFilterComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ItemWithBadge {
    constructor(text, badgeValue) {
        this.text = text;
        this.badgeValue = badgeValue;
    }
    toString() {
        return this.text;
    }
    valueOf() {
        return this.badgeValue ? this.badgeValue : null;
    }
}
class ExampleTuiFilterComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.less")),
        };
        this.initialItems = [`Alex Inkin`, `Roman Sedov`];
        this.itemsVariants = [
            [`Alex Inkin`, `Roman Sedov`],
            [
                new ItemWithBadge(`Focused Zone`, 10),
                new ItemWithBadge(`Dropdown`, 100),
                new ItemWithBadge(`Menu Items`, 30),
                new ItemWithBadge(`Accordion`),
            ],
        ];
        this.badgeHandlerVariants = [
            item => Number(item),
            item => String(item).length,
        ];
        this.badgeHandler = this.badgeHandlerVariants[0];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            item => item === `Roman Sedov`,
            item => (item.valueOf() || 0) >= 30,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.items = this.itemsVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.initialItems);
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[1];
    }
    onToggledItemChange(item) {
        this.alertService.open(String(item)).subscribe();
    }
}
ExampleTuiFilterComponent.ɵfac = function ExampleTuiFilterComponent_Factory(t) { return new (t || ExampleTuiFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"])); };
ExampleTuiFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiFilterComponent, selectors: [["example-filters"]], decls: 4, vars: 0, consts: [["header", "Filter", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "badge", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "all", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "badgeHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "content", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent<any>"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "T[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "toggledItem", "documentationPropertyMode", "output", "documentationPropertyType", "T"], [3, "formControl", "badgeHandler", "disabledItemHandler", "items", "size", "toggledItem"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiFilterComponent_ng_template_1_Template, 14, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiFilterComponent_ng_template_2_Template, 10, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiFilterComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiFilterExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiFilterExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiFilterExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_11__["TuiFilterExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["TuiFilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-filters`,
                templateUrl: `./filter.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/filter/filter.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/filter/filter.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFilterModule", function() { return ExampleTuiFilterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/filter/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/filter/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/filter/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/filter/examples/4/index.ts");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter.component */ "./src/modules/components/filter/filter.component.ts");















class ExampleTuiFilterModule {
}
ExampleTuiFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiFilterModule });
ExampleTuiFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiFilterModule_Factory(t) { return new (t || ExampleTuiFilterModule)(); }, imports: [[
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiFilterModule, { declarations: [_filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiFilterExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiFilterExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiFilterExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiFilterExample4"]], imports: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiFilterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFilterModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTagModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"])),
                ],
                declarations: [
                    _filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiFilterExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiFilterExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiFilterExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiFilterExample4"],
                ],
                exports: [_filter_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiFilterComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-filter-filter-module.js.map