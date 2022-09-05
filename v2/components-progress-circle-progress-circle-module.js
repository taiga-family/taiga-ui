(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progress-circle-progress-circle-module"],{

/***/ "./src/modules/components/progress-circle/examples/1/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/progress-circle/examples/1/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiProgressCircleExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressCircleExample1", function() { return TuiProgressCircleExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-circle/progress-circle.component */ "../kit/components/progress/progress-circle/progress-circle.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









class TuiProgressCircleExample1 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.max = 100;
        this.value$ = this.isCypress
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(30)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(300, 200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(i => i + 30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(value => value <= this.max));
    }
}
TuiProgressCircleExample1.ɵfac = function TuiProgressCircleExample1_Factory(t) { return new (t || TuiProgressCircleExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiProgressCircleExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressCircleExample1, selectors: [["tui-progress-circle-example-1"]], decls: 2, vars: 4, consts: [["size", "xl", 3, "max", "value"]], template: function TuiProgressCircleExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-progress-circle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.max)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.value$) || 0);
    } }, directives: [_kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_6__["TuiProgressCircleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressCircleExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-circle-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/progress-circle/examples/2/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/progress-circle/examples/2/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiProgressCircleExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressCircleExample2", function() { return TuiProgressCircleExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-circle/progress-circle.component */ "../kit/components/progress/progress-circle/progress-circle.component.ts");





class TuiProgressCircleExample2 {
}
TuiProgressCircleExample2.ɵfac = function TuiProgressCircleExample2_Factory(t) { return new (t || TuiProgressCircleExample2)(); };
TuiProgressCircleExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressCircleExample2, selectors: [["tui-progress-circle-example-2"]], decls: 4, vars: 8, consts: [["size", "xl", 3, "max", "value"], ["size", "l", 3, "max", "value"], ["size", "m", 3, "max", "value"], ["size", "s", 3, "max", "value"]], template: function TuiProgressCircleExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-progress-circle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-progress-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-progress-circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-progress-circle", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("value", 60);
    } }, directives: [_kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_3__["TuiProgressCircleComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0FDQ1IiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0ID4gKiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressCircleExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-circle-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-circle/examples/3/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/progress-circle/examples/3/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiProgressCircleExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressCircleExample3", function() { return TuiProgressCircleExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-label/progress-label.component */ "../kit/components/progress/progress-label/progress-label.component.ts");
/* harmony import */ var _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-circle/progress-circle.component */ "../kit/components/progress/progress-circle/progress-circle.component.ts");










function TuiProgressCircleExample3_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COMPLETED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-progress-circle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", value_r1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r0.max)("value", value_r1);
} }
class TuiProgressCircleExample3 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.max = 100;
        this.value$ = this.isCypress
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(30)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(300, 200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(i => i + 30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(value => value <= this.max));
    }
}
TuiProgressCircleExample3.ɵfac = function TuiProgressCircleExample3_Factory(t) { return new (t || TuiProgressCircleExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiProgressCircleExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressCircleExample3, selectors: [["tui-progress-circle-example-3"]], decls: 2, vars: 3, consts: [["tuiProgressLabel", "", 4, "ngIf"], ["tuiProgressLabel", ""], [1, "text"], [1, "percent"], ["size", "xl", 3, "max", "value"]], template: function TuiProgressCircleExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiProgressCircleExample3_label_0_Template, 6, 3, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.value$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_7__["TuiProgressLabelComponent"], _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_8__["TuiProgressCircleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".text[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-03);\n}\n.percent[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFQTtFQUNJLCtCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xufVxuXG4ucGVyY2VudCB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cbiIsIi50ZXh0IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbn1cbi5wZXJjZW50IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressCircleExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-circle-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/progress-circle/examples/4/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/progress-circle/examples/4/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiProgressCircleExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressCircleExample4", function() { return TuiProgressCircleExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-circle/progress-circle.component */ "../kit/components/progress/progress-circle/progress-circle.component.ts");





class TuiProgressCircleExample4 {
}
TuiProgressCircleExample4.ɵfac = function TuiProgressCircleExample4_Factory(t) { return new (t || TuiProgressCircleExample4)(); };
TuiProgressCircleExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressCircleExample4, selectors: [["tui-progress-circle-example-4"]], decls: 10, vars: 8, consts: [["size", "xl", "color", "url(#gradient)", 3, "max", "value"], ["size", "l", 1, "progress", 3, "max", "value"], ["size", "m", 1, "progress", 3, "max", "value"], ["size", "s", 1, "progress", 3, "max", "value"], ["width", "0", "height", "0"], ["id", "gradient", "gradientTransform", "rotate(95)"], ["offset", "0%", "stop-color", "var(--tui-support-02)"], ["offset", "45%", "stop-color", "var(--tui-support-14)"], ["offset", "100%", "stop-color", "var(--tui-support-12)"]], template: function TuiProgressCircleExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-progress-circle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-progress-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-progress-circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-progress-circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "linearGradient", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 4)("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 4)("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 4)("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 4)("value", 3);
    } }, directives: [_kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_3__["TuiProgressCircleComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.progress[data-size='l'][_ngcontent-%COMP%] {\n  color: var(--tui-support-01);\n}\n.progress[data-size='m'][_ngcontent-%COMP%] {\n  color: var(--tui-support-03);\n}\n.progress[data-size='s'][_ngcontent-%COMP%] {\n  color: var(--tui-support-09);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURJSTtFQUNJLDRCQUFBO0FDRlI7QURLSTtFQUNJLDRCQUFBO0FDSFI7QURNSTtFQUNJLDRCQUFBO0FDSlIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuLnByb2dyZXNzIHtcbiAgICAmW2RhdGEtc2l6ZT0nbCddIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTAxKTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbSddIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTAzKTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0ncyddIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTA5KTtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ucHJvZ3Jlc3NbZGF0YS1zaXplPSdsJ10ge1xuICBjb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMDEpO1xufVxuLnByb2dyZXNzW2RhdGEtc2l6ZT0nbSddIHtcbiAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTAzKTtcbn1cbi5wcm9ncmVzc1tkYXRhLXNpemU9J3MnXSB7XG4gIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0wOSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressCircleExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-circle-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-circle/progress-circle.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/progress-circle/progress-circle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleProgressCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleProgressCircleComponent", function() { return ExampleProgressCircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/progress-circle/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/progress-circle/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/progress-circle/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/progress-circle/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../kit/components/progress/progress-circle/progress-circle.component */ "../kit/components/progress/progress-circle/progress-circle.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9220911365799277601$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}<tui-progress-circle />{$closeTagCode}{$closeTagDt}{$startTagDd} is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains. {$closeTagDd}", { "startTagDt": "\uFFFD#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeTagDt": "\uFFFD/#2\uFFFD", "startTagDd": "\uFFFD#4\uFFFD", "closeTagDd": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_9220911365799277601$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟77b397b33e9cd1d22dcfb87a2facf3e2a9ab2b97␟9220911365799277601:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:<tui-progress-circle />${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__6 = goog.getMsg("Sizes");
    I18N_5 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8720306042838547123$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__9 = goog.getMsg("With label");
    I18N_8 = MSG_EXTERNAL_8720306042838547123$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__12 = goog.getMsg("Colors");
    I18N_11 = MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
}
const _c13 = ["heading", I18N_11];
function ExampleProgressCircleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-progress-circle-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-progress-circle-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-progress-circle-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-progress-circle-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.basicExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.sizesExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.labelExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.colorsExample);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7359913426686326253$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___15 = goog.getMsg(" This property specifies how much of the task that has been completed. It must be a valid floating point number between 0 and {$startTagCode}max{$closeTagCode} , or between 0 and 1 if {$startTagCode}max{$closeTagCode} is omitted. ", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]" });
    I18N_14 = MSG_EXTERNAL_7359913426686326253$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟ff15d3bc09a3b1dcddd1094a4120e7f6a39dba0f␟7359913426686326253: This property specifies how much of the task that has been completed. It must be a valid floating point number between 0 and ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:max${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: , or between 0 and 1 if ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:max${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: is omitted. `;
}
I18N_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_14);
function ExampleProgressCircleComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3982028735468302053$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___17 = goog.getMsg("{$startParagraph}This property describes how much work the task indicated by the progress element requires.{$closeParagraph}{$startParagraph} The default value is {$startTagCode}1{$closeTagCode} . {$closeParagraph}", { "startParagraph": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]", "closeParagraph": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD" });
    I18N_16 = MSG_EXTERNAL_3982028735468302053$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟dd8ee06f37b58d3130157a67e55b27b6a81efbb1␟3982028735468302053:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH:This property describes how much work the task indicated by the progress element requires.${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH: The default value is ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: . ${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:`;
}
I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16);
function ExampleProgressCircleComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2635824333932204053$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___19 = goog.getMsg(" Size of the circle. ");
    I18N_18 = MSG_EXTERNAL_2635824333932204053$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟d2c6b778ff1deaef80c19bdbca3f34ea9c829704␟2635824333932204053: Size of the circle. `;
}
function ExampleProgressCircleComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8131965803907340765$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___21 = goog.getMsg(" Color of the progress indicator. {$startParagraph} We recommend set solid color via CSS-property {$startTagCode}color{$closeTagCode} . {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_20 = MSG_EXTERNAL_8131965803907340765$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟b64cbf14678cc3f5a296127f19e7fe1eac20ddbf␟8131965803907340765: Color of the progress indicator. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: We recommend set solid color via CSS-property ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:color${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleProgressCircleComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleProgressCircleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-progress-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleProgressCircleComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleProgressCircleComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleProgressCircleComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleProgressCircleComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("max", ctx_r1.max)("size", ctx_r1.size)("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1544037559221110858$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiProgressModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_22 = MSG_EXTERNAL_1544037559221110858$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟b2342227392ebea4df6aa6cba85e57fb10b5feb9␟1544037559221110858: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiProgressModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
    I18N_24 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleProgressCircleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_24);
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
class ExampleProgressCircleComponent {
    constructor() {
        this.value = 6;
        this.max = 10;
        this.sizeVariants = [`s`, `m`, `l`, `xl`];
        this.size = this.sizeVariants[1];
        this.colorVariants = [
            `var(--tui-primary)`,
            `lightskyblue`,
            `#3682db`,
            `rgba(74, 201, 155, 1)`,
            `url(#gradient)`,
        ];
        this.color = this.colorVariants[0];
        this.basicExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/1/index.ts")),
        };
        this.sizesExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.ts")),
        };
        this.labelExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/3/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/3/index.ts")),
        };
        this.colorsExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.ts")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/import/insert-template.md"));
    }
}
ExampleProgressCircleComponent.ɵfac = function ExampleProgressCircleComponent_Factory(t) { return new (t || ExampleProgressCircleComponent)(); };
ExampleProgressCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleProgressCircleComponent, selectors: [["example-tui-progress-circle"]], decls: 10, vars: 0, consts: [["header", "ProgressCircle", "package", "KIT", "path", "kit/components/progress/progress-circle"], ["pageTab", ""], ["width", "0", "height", "0"], ["id", "gradient", "gradientTransform", "rotate(95)"], ["offset", "0%", "stop-color", "var(--tui-support-02)"], ["offset", "45%", "stop-color", "var(--tui-support-14) "], ["offset", "100%", "stop-color", "var(--tui-support-12)"], ["id", "basic", 3, "content", 6, "heading"], ["id", "size", 3, "content", 6, "heading"], ["id", "label", 3, "content", 6, "heading"], ["id", "colors", 3, "content", 6, "heading"], [3, "value", "max", "size", "color"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "color", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleProgressCircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleProgressCircleComponent_ng_template_1_Template, 17, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleProgressCircleComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleProgressCircleComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "linearGradient", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiProgressCircleExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiProgressCircleExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiProgressCircleExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiProgressCircleExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDemoComponent"], _kit_components_progress_progress_circle_progress_circle_component__WEBPACK_IMPORTED_MODULE_10__["TuiProgressCircleComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], styles: ["dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGVBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImR0LFxuZGQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDA7XG59XG4iLCJkdCxcbmRkIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleProgressCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-progress-circle`,
                templateUrl: `./progress-circle.template.html`,
                styleUrls: [`./progress-circle.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-circle/progress-circle.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/components/progress-circle/progress-circle.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiProgressCircleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiProgressCircleModule", function() { return ExampleTuiProgressCircleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/progress-circle/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/progress-circle/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/progress-circle/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/progress-circle/examples/4/index.ts");
/* harmony import */ var _progress_circle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-circle.component */ "./src/modules/components/progress-circle/progress-circle.component.ts");












class ExampleTuiProgressCircleModule {
}
ExampleTuiProgressCircleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiProgressCircleModule });
ExampleTuiProgressCircleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiProgressCircleModule_Factory(t) { return new (t || ExampleTuiProgressCircleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiProgressModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_progress_circle_component__WEBPACK_IMPORTED_MODULE_9__["ExampleProgressCircleComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiProgressCircleModule, { declarations: [_progress_circle_component__WEBPACK_IMPORTED_MODULE_9__["ExampleProgressCircleComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiProgressCircleExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiProgressCircleExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_7__["TuiProgressCircleExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_8__["TuiProgressCircleExample4"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiProgressModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiProgressCircleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiProgressModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_progress_circle_component__WEBPACK_IMPORTED_MODULE_9__["ExampleProgressCircleComponent"])),
                ],
                declarations: [
                    _progress_circle_component__WEBPACK_IMPORTED_MODULE_9__["ExampleProgressCircleComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiProgressCircleExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiProgressCircleExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_7__["TuiProgressCircleExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_8__["TuiProgressCircleExample4"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-progress-circle-progress-circle-module.js.map