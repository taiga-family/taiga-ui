(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tag-tag-module"],{

/***/ "./src/modules/components/tag/examples/1/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/tag/examples/1/index.ts ***!
  \********************************************************/
/*! exports provided: TuiTagExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTagExample1", function() { return TuiTagExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");





class TuiTagExample1 {
    constructor() {
        this.tag = `Hello`;
    }
}
TuiTagExample1.ɵfac = function TuiTagExample1_Factory(t) { return new (t || TuiTagExample1)(); };
TuiTagExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTagExample1, selectors: [["tui-tag-example-1"]], decls: 3, vars: 3, consts: [["size", "s", 3, "value"], ["size", "m", 1, "tui-space_left-1", 3, "value"], ["size", "l", 1, "tui-space_left-1", 3, "value"]], template: function TuiTagExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-tag", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tag);
    } }, directives: [_kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiTagComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTagExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tag-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/tag/examples/2/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/tag/examples/2/index.ts ***!
  \********************************************************/
/*! exports provided: TuiTagExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTagExample2", function() { return TuiTagExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");







function TuiTagExample2_tui_tag_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tag", 6);
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tag support-", index_r1 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx_r0.tag);
} }
class TuiTagExample2 {
    constructor() {
        this.tag = `Hello!`;
    }
}
TuiTagExample2.ɵfac = function TuiTagExample2_Factory(t) { return new (t || TuiTagExample2)(); };
TuiTagExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTagExample2, selectors: [["tui-tag-example-2"]], decls: 13, vars: 9, consts: [[1, "tag", 3, "hoverable", "value"], ["status", "primary", 1, "tag", 3, "hoverable", "value"], ["tuiMode", "onDark", 1, "light-mode"], ["tuiMode", "onLight", 1, "dark-mode"], [1, "tui-space_top-3"], ["status", "custom", 3, "class", "hoverable", "value", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["status", "custom", 3, "hoverable", "value"]], template: function TuiTagExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Base colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Support color with CSS and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "status=\"custom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiTagExample2_tui_tag_12_Template, 1, 5, "tui-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", 20);
    } }, directives: [_kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiTagComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__["TuiModeDirective"], _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesDirective"]], styles: [".tag[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.light-mode[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #454e58;\n}\n.dark-mode[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.25rem;\n  background-color: #e5e7ea;\n}\n.support-20[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-20, var(--tui-support-020));\n}\n.support-19[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-19, var(--tui-support-019));\n}\n.support-18[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-18, var(--tui-support-018));\n}\n.support-17[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-17, var(--tui-support-017));\n}\n.support-16[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-16, var(--tui-support-016));\n}\n.support-15[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-15, var(--tui-support-015));\n}\n.support-14[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-14, var(--tui-support-014));\n}\n.support-13[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-13, var(--tui-support-013));\n}\n.support-12[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-12, var(--tui-support-012));\n}\n.support-11[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-11, var(--tui-support-011));\n}\n.support-10[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-10, var(--tui-support-010));\n}\n.support-9[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-9, var(--tui-support-09));\n}\n.support-8[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-8, var(--tui-support-08));\n}\n.support-7[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-7, var(--tui-support-07));\n}\n.support-6[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-6, var(--tui-support-06));\n}\n.support-5[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-5, var(--tui-support-05));\n}\n.support-4[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-4, var(--tui-support-04));\n}\n.support-3[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-3, var(--tui-support-03));\n}\n.support-2[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-2, var(--tui-support-02));\n}\n.support-1[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-1, var(--tui-support-01));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YWcvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RhZy9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBSjtBREdBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDREo7QURYQztFQW1CTywrREFBQTtBQ0xSO0FEZEM7RUFtQk8sK0RBQUE7QUNGUjtBRGpCQztFQW1CTywrREFBQTtBQ0NSO0FEcEJDO0VBbUJPLCtEQUFBO0FDSVI7QUR2QkM7RUFtQk8sK0RBQUE7QUNPUjtBRDFCQztFQW1CTywrREFBQTtBQ1VSO0FEN0JDO0VBbUJPLCtEQUFBO0FDYVI7QURoQ0M7RUFtQk8sK0RBQUE7QUNnQlI7QURuQ0M7RUFtQk8sK0RBQUE7QUNtQlI7QUR0Q0M7RUFtQk8sK0RBQUE7QUNzQlI7QUR6Q0M7RUFtQk8sK0RBQUE7QUN5QlI7QUQ1Q0M7RUFtQk8sNkRBQUE7QUM0QlI7QUQvQ0M7RUFtQk8sNkRBQUE7QUMrQlI7QURsREM7RUFtQk8sNkRBQUE7QUNrQ1I7QURyREM7RUFtQk8sNkRBQUE7QUNxQ1I7QUR4REM7RUFtQk8sNkRBQUE7QUN3Q1I7QUQzREM7RUFtQk8sNkRBQUE7QUMyQ1I7QUQ5REM7RUFtQk8sNkRBQUE7QUM4Q1I7QURqRUM7RUFtQk8sNkRBQUE7QUNpRFI7QURwRUM7RUFtQk8sNkRBQUE7QUNvRFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RhZy9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnIHtcbiAgICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5saWdodC1tb2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGU1ODtcbn1cblxuLmRhcmstbW9kZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWE7XG59XG5cbkBpdGVyYXRpb25zOiAyMDtcblxuLmxvb3AgKEBpKSB3aGVuIChAaSA+IDApIHtcbiAgICAuc3VwcG9ydC1Ae2l9IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogfid2YXIoLS10dWktc3VwcG9ydC1Ae2l9LCB2YXIoLS10dWktc3VwcG9ydC0wQHtpfSkpJztcbiAgICB9XG4gICAgLmxvb3AoQGkgLSAxKTtcbn1cbi5sb29wIChAaXRlcmF0aW9ucyk7XG4iLCIudGFnIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuLmxpZ2h0LW1vZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTRlNTg7XG59XG4uZGFyay1tb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYTtcbn1cbi5zdXBwb3J0LTIwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMjAsIHZhcigtLXR1aS1zdXBwb3J0LTAyMCkpO1xufVxuLnN1cHBvcnQtMTkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xOSwgdmFyKC0tdHVpLXN1cHBvcnQtMDE5KSk7XG59XG4uc3VwcG9ydC0xOCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTE4LCB2YXIoLS10dWktc3VwcG9ydC0wMTgpKTtcbn1cbi5zdXBwb3J0LTE3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTcsIHZhcigtLXR1aS1zdXBwb3J0LTAxNykpO1xufVxuLnN1cHBvcnQtMTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xNiwgdmFyKC0tdHVpLXN1cHBvcnQtMDE2KSk7XG59XG4uc3VwcG9ydC0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTE1LCB2YXIoLS10dWktc3VwcG9ydC0wMTUpKTtcbn1cbi5zdXBwb3J0LTE0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTQsIHZhcigtLXR1aS1zdXBwb3J0LTAxNCkpO1xufVxuLnN1cHBvcnQtMTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMywgdmFyKC0tdHVpLXN1cHBvcnQtMDEzKSk7XG59XG4uc3VwcG9ydC0xMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEyLCB2YXIoLS10dWktc3VwcG9ydC0wMTIpKTtcbn1cbi5zdXBwb3J0LTExIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTEsIHZhcigtLXR1aS1zdXBwb3J0LTAxMSkpO1xufVxuLnN1cHBvcnQtMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMCwgdmFyKC0tdHVpLXN1cHBvcnQtMDEwKSk7XG59XG4uc3VwcG9ydC05IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtOSwgdmFyKC0tdHVpLXN1cHBvcnQtMDkpKTtcbn1cbi5zdXBwb3J0LTgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC04LCB2YXIoLS10dWktc3VwcG9ydC0wOCkpO1xufVxuLnN1cHBvcnQtNyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTcsIHZhcigtLXR1aS1zdXBwb3J0LTA3KSk7XG59XG4uc3VwcG9ydC02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtNiwgdmFyKC0tdHVpLXN1cHBvcnQtMDYpKTtcbn1cbi5zdXBwb3J0LTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC01LCB2YXIoLS10dWktc3VwcG9ydC0wNSkpO1xufVxuLnN1cHBvcnQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTQsIHZhcigtLXR1aS1zdXBwb3J0LTA0KSk7XG59XG4uc3VwcG9ydC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMywgdmFyKC0tdHVpLXN1cHBvcnQtMDMpKTtcbn1cbi5zdXBwb3J0LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0yLCB2YXIoLS10dWktc3VwcG9ydC0wMikpO1xufVxuLnN1cHBvcnQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEsIHZhcigtLXR1aS1zdXBwb3J0LTAxKSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTagExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tag-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/tag/examples/3/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/tag/examples/3/index.ts ***!
  \********************************************************/
/*! exports provided: TuiTagExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTagExample3", function() { return TuiTagExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");





class TuiTagExample3 {
    constructor() {
        this.tag = `Hey there`;
    }
}
TuiTagExample3.ɵfac = function TuiTagExample3_Factory(t) { return new (t || TuiTagExample3)(); };
TuiTagExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTagExample3, selectors: [["tui-tag-example-3"]], decls: 1, vars: 2, consts: [["size", "l", "status", "custom", 1, "tag", 3, "hoverable", "value"]], template: function TuiTagExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tag", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("value", ctx.tag);
    } }, directives: [_kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TuiTagComponent"]], styles: [".tag[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, #c86dd7 0%, #3023ae 100%);\n  color: var(--tui-text-01-night);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YWcvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RhZy9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQzBRSSxrRUFBQTtFRHhRQSwrQkFBQTtBREtKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YWcvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnRhZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M4NmRkNyAwJSwgIzMwMjNhZSAxMDAlKTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLnRhZyB7XG4gICAgLmdyYWRpZW50KCNjODZkZDcsICMzMDIzYWUpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCk7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTagExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tag-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/tag/examples/4/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/tag/examples/4/index.ts ***!
  \********************************************************/
/*! exports provided: TuiTagExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTagExample4", function() { return TuiTagExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_for_for_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/directives/for/for.directive */ "../cdk/directives/for/for.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");








function TuiTagExample4_tui_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-tag", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("edited", function TuiTagExample4_tui_tag_1_Template_tui_tag_edited_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleTagEdited($event, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r3)("hoverable", true)("editable", true)("removable", true);
} }
function TuiTagExample4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "All tags were removed. But Taiga UI is still an awesome UI-kit library ;)");
} }
class TuiTagExample4 {
    constructor() {
        this.tags = [
            `Taiga UI`,
            `is an open-source library`,
            `for awesome people`,
        ];
    }
    handleTagEdited(newCaption, currentIndex) {
        this.tags = this.tags
            .map((caption, index) => (index === currentIndex ? newCaption : caption))
            .filter(Boolean);
    }
}
TuiTagExample4.ɵfac = function TuiTagExample4_Factory(t) { return new (t || TuiTagExample4)(); };
TuiTagExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTagExample4, selectors: [["tui-tag-example-4"]], decls: 11, vars: 2, consts: [[1, "tags"], ["size", "l", "status", "custom", "class", "tag", 3, "value", "hoverable", "editable", "removable", "edited", 4, "ngFor", "ngForOf", "ngForEmpty"], ["emptyTags", ""], ["status", "info", 1, "tui-space_top-2"], ["size", "l", "status", "custom", 1, "tag", 3, "value", "hoverable", "editable", "removable", "edited"]], template: function TuiTagExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTagExample4_tui_tag_1_Template, 1, 4, "tui-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTagExample4_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-notification", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TuiForModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " if you want to be able to pass empty list template to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags)("ngForEmpty", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _cdk_directives_for_for_directive__WEBPACK_IMPORTED_MODULE_4__["TuiForDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationComponent"], _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TuiTagComponent"]], styles: [".tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.tag[_ngcontent-%COMP%] {\n  background-image: linear-gradient(60deg, #2d96ff 0%, #ff5011 100%);\n  color: var(--tui-text-01-night);\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YWcvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RhZy9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBREtKO0FDRkE7RUNxUUksa0VBQUE7RURuUUEsK0JBQUE7RUFDQSxlQUFBO0FESUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RhZy9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4udGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMmQ5NmZmIDAlLCAjZmY1MDExIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi50YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWcge1xuICAgIC5ncmFkaWVudCgjMmQ5NmZmLCAjZmY1MDExLCA2MGRlZyk7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbiAgICBtYXJnaW46IDAuMjVyZW07XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTagExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tag-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/tag/examples/5/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/tag/examples/5/index.ts ***!
  \********************************************************/
/*! exports provided: TuiTagExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTagExample5", function() { return TuiTagExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");






class TuiTagExample5 {
    constructor() {
        this.tag = `Hello`;
    }
}
TuiTagExample5.ɵfac = function TuiTagExample5_Factory(t) { return new (t || TuiTagExample5)(); };
TuiTagExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTagExample5, selectors: [["tui-tag-example-5"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["tuiTagOptionsProvider"])({
                size: `l`,
                status: `success`,
            }),
        ])], decls: 1, vars: 1, consts: [[3, "value"]], template: function TuiTagExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tag", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tag);
    } }, directives: [_kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_4__["TuiTagComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTagExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-tag-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["tuiTagOptionsProvider"])({
                        size: `l`,
                        status: `success`,
                    }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/tag/tag.component.ts":
/*!*****************************************************!*\
  !*** ./src/modules/components/tag/tag.component.ts ***!
  \*****************************************************/
/*! exports provided: ExampleTuiTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTagComponent", function() { return ExampleTuiTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/tag/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/tag/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/tag/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/tag/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/tag/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../kit/components/tag/tag.component */ "../kit/components/tag/tag.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















const _c0 = ["errorIcon"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_295203182456039842$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__2 = goog.getMsg(" Tags show information and they can be edited, deleted or clicked. ");
    I18N_1 = MSG_EXTERNAL_295203182456039842$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟95afdef92ca6e417108fb4e9bad4ceaf0514ac85␟295203182456039842: Tags show information and they can be edited, deleted or clicked. `;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8206584416798270856$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__4 = goog.getMsg(" They work with both {$startTagCode}tui-tag{$closeTagCode} and {$startTagCode}a[tuiTag]{$closeTagCode} selectors ", { "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_3 = MSG_EXTERNAL_8206584416798270856$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟5b08ad414c0a58fe7b0a8263c4e9c1999c43a1dd␟8206584416798270856: They work with both ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tui-tag${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:a[tuiTag]${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: selectors `;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__6 = goog.getMsg("sizes");
    I18N_5 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5168008278809915722$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__9 = goog.getMsg("Statuses");
    I18N_8 = MSG_EXTERNAL_5168008278809915722$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__12 = goog.getMsg("Custom");
    I18N_11 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3517265394332969172$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__15 = goog.getMsg("Removing and editing");
    I18N_14 = MSG_EXTERNAL_3517265394332969172$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟41865fbc6b6179fbea9f00f5fe560296379dbbae␟3517265394332969172:Removing and editing`;
}
const _c16 = ["heading", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__18 = goog.getMsg("Options");
    I18N_17 = MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
}
const _c19 = ["heading", I18N_17];
function ExampleTuiTagComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-tag-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-tag-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-tag-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](16, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-tag-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-tag-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
function ExampleTuiTagComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 21);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8149263575141944006$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___21 = goog.getMsg(" Autocolor for tag ");
    I18N_20 = MSG_EXTERNAL_8149263575141944006$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟5dc8dede05cd96176a148ac9ef6903e2e69c7c01␟8149263575141944006: Autocolor for tag `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___23 = goog.getMsg(" Disabled state ");
    I18N_22 = MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9017081683650079535$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___25 = goog.getMsg(" Tag can be edited ");
    I18N_24 = MSG_EXTERNAL_9017081683650079535$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟a0d09fc6cdb9dc805a1f9e3edf35a1d48a6ee611␟9017081683650079535: Tag can be edited `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5631539240413317224$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___27 = goog.getMsg(" Enable hovered state ");
    I18N_26 = MSG_EXTERNAL_5631539240413317224$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟835de877756233ad75dbf3f8b110329410fc6301␟5631539240413317224: Enable hovered state `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3722490975342576231$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___29 = goog.getMsg(" Content left to text ");
    I18N_28 = MSG_EXTERNAL_3722490975342576231$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟5ab0f60094e7f95cd638b7fbb4a0212154ca72ef␟3722490975342576231: Content left to text `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_28);
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2232609659014816311$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___31 = goog.getMsg(" Max length of tag (when editing) ");
    I18N_30 = MSG_EXTERNAL_2232609659014816311$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟a6c5bcaafa25d6b6ed5fa384ce15bca35b7fea0c␟2232609659014816311: Max length of tag (when editing) `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_30);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3648526541094460583$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___33 = goog.getMsg(" Tag can be removed ");
    I18N_32 = MSG_EXTERNAL_3648526541094460583$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟27c0a2e50d00641d72e96a64d7f98e3dd94b51be␟3648526541094460583: Tag can be removed `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_32);
} }
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9144462955561175316$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___35 = goog.getMsg(" Show loader ");
    I18N_34 = MSG_EXTERNAL_9144462955561175316$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___35;
}
else {
    I18N_34 = $localize `:␟fd6a3d0fbd7b60fe58776d947d37575928932f78␟9144462955561175316: Show loader `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_34);
} }
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___37 = goog.getMsg(" Size ");
    I18N_36 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___37;
}
else {
    I18N_36 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_36);
} }
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2582737706860576258$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___39 = goog.getMsg(" Changes color ");
    I18N_38 = MSG_EXTERNAL_2582737706860576258$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___39;
}
else {
    I18N_38 = $localize `:␟c5c6e2a34f208558f7223439cbd18026d71e5b66␟2582737706860576258: Changes color `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_38);
} }
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_580179718383755103$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___41 = goog.getMsg(" String value of tag ");
    I18N_40 = MSG_EXTERNAL_580179718383755103$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___41;
}
else {
    I18N_40 = $localize `:␟7920a4b3acedba1a6e2994a0ed0597881a0e4904␟580179718383755103: String value of tag `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_40);
} }
var I18N_42;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6732262185323970980$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___43 = goog.getMsg(" Emits tag change (if it was edited to space or empty string, it emits delete) ");
    I18N_42 = MSG_EXTERNAL_6732262185323970980$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___43;
}
else {
    I18N_42 = $localize `:␟1cb3184a4cf142c1c098282d864fe595194533c8␟6732262185323970980: Emits tag change (if it was edited to space or empty string, it emits delete) `;
}
function ExampleTuiTagComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_42);
} }
function ExampleTuiTagComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("edited", function ExampleTuiTagComponent_ng_template_2_Template_tui_tag_edited_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.editTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTagComponent_ng_template_2_ng_template_2_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiTagComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.autoColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiTagComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiTagComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.editable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiTagComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.hoverable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiTagComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.leftContentSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiTagComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiTagComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.removable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiTagComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.showLoader = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiTagComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiTagComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiTagComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiTagComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("autoColor", ctx_r1.autoColor)("disabled", ctx_r1.disabled)("editable", ctx_r1.editable)("hoverable", ctx_r1.hoverable)("removable", ctx_r1.removable)("leftContent", ctx_r1.leftContent)("maxLength", ctx_r1.maxLength)("size", ctx_r1.size)("showLoader", ctx_r1.showLoader)("status", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.autoColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hoverable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.leftContentVariants)("documentationPropertyValue", ctx_r1.leftContentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.value);
} }
var I18N_44;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_532909106182212111$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__45 = goog.getMsg(" Import {$startTagCode}TuiTagModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_44 = MSG_EXTERNAL_532909106182212111$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__45;
}
else {
    I18N_44 = $localize `:␟7d1662d80315eb2755d56ddc7b352c1c8fdfb6d0␟532909106182212111: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTagModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_46;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__47 = goog.getMsg("Add to the template:");
    I18N_46 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__47;
}
else {
    I18N_46 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_48;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6117404636101957311$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__49 = goog.getMsg(" Optionally use the {$startTagCode}TUI_TAG_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", { "startTagCode": "\uFFFD#13\uFFFD", "closeTagCode": "\uFFFD/#13\uFFFD" });
    I18N_48 = MSG_EXTERNAL_6117404636101957311$$SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__49;
}
else {
    I18N_48 = $localize `:␟ff3fab96342bd4ac8291b166ac1b17f9572cbd99␟6117404636101957311: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_TAG_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
}
function ExampleTuiTagComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](12, I18N_48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
} }
class ExampleTuiTagComponent {
    constructor() {
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/import/define-options.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.html")),
        };
        this.removable = false;
        this.disabled = false;
        this.editable = false;
        this.autoColor = false;
        this.hoverable = false;
        this.showLoader = false;
        this.value = `John Cleese`;
        this.maxLengthVariants = [10, 20];
        this.maxLength = null;
        this.statusVariants = [
            `default`,
            `primary`,
            `custom`,
            `success`,
            `error`,
            `warning`,
        ];
        this.status = this.statusVariants[0];
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[1];
        this.leftContentVariants = [``, `Error icon`];
        this.leftContentSelected = ``;
    }
    get leftContent() {
        return this.errorTemplate && this.leftContentSelected !== null
            ? this.errorTemplate
            : ``;
    }
    editTag(value) {
        this.value = value;
    }
}
ExampleTuiTagComponent.ɵfac = function ExampleTuiTagComponent_Factory(t) { return new (t || ExampleTuiTagComponent)(); };
ExampleTuiTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTagComponent, selectors: [["example-tag"]], viewQuery: function ExampleTuiTagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorTemplate = _t.first);
    } }, decls: 4, vars: 0, consts: [["header", "Tag", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "statuses", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "options", 3, "content", 6, "heading"], [3, "value", "autoColor", "disabled", "editable", "hoverable", "removable", "leftContent", "maxLength", "size", "showLoader", "status", "edited"], ["errorIcon", ""], ["documentationPropertyName", "autoColor", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hoverable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "leftContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "removable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStatus | TuiSupportColor", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "edited", "documentationPropertyMode", "output", "documentationPropertyType", "string"], ["src", "tuiIconAttention", 1, "error-icon"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTagComponent_ng_template_1_Template, 21, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTagComponent_ng_template_2_Template, 17, 26, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTagComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiTagExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiTagExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiTagExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiTagExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiTagExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDemoComponent"], _kit_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__["TuiTagComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__["TuiSvgComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], styles: [".error-icon[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--tui-negative);\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YWcvdGFnLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvdGFnL3RhZy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvdGFnL3RhZy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS10dWktbmVnYXRpdmUpO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbn1cbiIsIi5lcnJvci1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS10dWktbmVnYXRpdmUpO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tag`,
                templateUrl: `./tag.template.html`,
                styleUrls: [`./tag.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, { errorTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`errorIcon`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/tag/tag.module.ts":
/*!**************************************************!*\
  !*** ./src/modules/components/tag/tag.module.ts ***!
  \**************************************************/
/*! exports provided: ExampleTuiTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTagModule", function() { return ExampleTuiTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/tag/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/tag/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/tag/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/tag/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/tag/examples/5/index.ts");
/* harmony import */ var _tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tag.component */ "./src/modules/components/tag/tag.component.ts");
















class ExampleTuiTagModule {
}
ExampleTuiTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiTagModule });
ExampleTuiTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiTagModule_Factory(t) { return new (t || ExampleTuiTagModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTagModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiForModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiTagModule, { declarations: [_tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTagExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiTagExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiTagExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiTagExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiTagExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTagModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiForModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTagModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiForModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"])),
                ],
                declarations: [
                    _tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTagExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiTagExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiTagExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiTagExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiTagExample5"],
                ],
                exports: [_tag_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiTagComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-tag-tag-module.js.map