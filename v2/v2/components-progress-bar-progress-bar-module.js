(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progress-bar-progress-bar-module"],{

/***/ "./src/modules/components/progress-bar/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/progress-bar/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiProgressBarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressBarExample1", function() { return TuiProgressBarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









class TuiProgressBarExample1 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.value$ = this.isCypress
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(40)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(300, 300).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(i => i + 30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(30));
    }
}
TuiProgressBarExample1.ɵfac = function TuiProgressBarExample1_Factory(t) { return new (t || TuiProgressBarExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiProgressBarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressBarExample1, selectors: [["tui-progress-bar-example-1"]], decls: 2, vars: 3, consts: [["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value"]], template: function TuiProgressBarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.value$));
    } }, directives: [_kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["TuiProgressBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".progress[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5wcm9ncmVzcyB7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLnByb2dyZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4ucHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressBarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-bar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/examples/2/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/progress-bar/examples/2/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiProgressBarExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressBarExample2", function() { return TuiProgressBarExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");
/* harmony import */ var _kit_components_progress_progress_bar_progress_color_segments_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-color-segments.directive */ "../kit/components/progress/progress-bar/progress-color-segments.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1101375577014023805$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Single color\n");
    I18N_0 = MSG_EXTERNAL_1101375577014023805$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟ab3eb576a4d2b77500066bb0f71f51331629c494␟1101375577014023805: Single color
`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5511912390234747958$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" With fancy color gradient\n");
    I18N_2 = MSG_EXTERNAL_5511912390234747958$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟7342d3c89bf9afecda17d4cd92d27708faeaa2b8␟5511912390234747958: With fancy color gradient
`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7426878659956347852$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Multicolor segments\n");
    I18N_4 = MSG_EXTERNAL_7426878659956347852$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟c68f6db0a6492b25e0e1e6e45301901e6106a18b␟7426878659956347852: Multicolor segments
`;
}
class TuiProgressBarExample2 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.fastValue$ = this.isCypress ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(80) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(500, 100);
        this.slowValue$ = this.isCypress ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(4) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(500, 2000);
        this.colors = [
            `var(--tui-support-01)`,
            `var(--tui-support-21)`,
            `lightskyblue`,
            `#3682db`,
            `var(--tui-primary)`,
        ];
    }
}
TuiProgressBarExample2.ɵfac = function TuiProgressBarExample2_Factory(t) { return new (t || TuiProgressBarExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiProgressBarExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressBarExample2, selectors: [["tui-progress-bar-example-2"]], decls: 32, vars: 15, consts: [[1, "description"], ["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value"], ["tuiProgressBar", "", "max", "100", "color", "linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))", 1, "progress", 3, "value"], ["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value", "tuiProgressColorSegments"], ["tuiProgressBar", "", 1, "progress", 3, "value", "max", "tuiProgressColorSegments"]], template: function TuiProgressBarExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<progress />");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 's CSS-property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to set solid color of progress indicator.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Set component's input property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " to get more complex color combinations.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "tuiProgressColorSegments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " directive to to get multicolor segments.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "progress", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "progress", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.fastValue$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, ctx.fastValue$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 11, ctx.fastValue$))("tuiProgressColorSegments", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, ctx.slowValue$))("max", ctx.colors.length)("tuiProgressColorSegments", ctx.colors);
    } }, directives: [_kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["TuiProgressBarComponent"], _kit_components_progress_progress_bar_progress_color_segments_directive__WEBPACK_IMPORTED_MODULE_6__["TuiProgressColorSegmentsDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".progress[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-bottom: 1rem;\n  color: var(--tui-support-09);\n}\n@media screen and (max-width: 37.4625em) {\n  .progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.description[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n  margin-bottom: 1rem;\n}\n.description[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FES0o7QUNISTtFQUFBO0lBQ0ksV0FBQTtFRE1OO0FBQ0Y7QUNIQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QURLSjtBQ0hJO0VBQ0ksYUFBQTtBREtSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnByb2dyZXNzIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTA5KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAucHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRlc2NyaXB0aW9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLnByb2dyZXNzIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTA5KTtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressBarExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-bar-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/examples/3/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/progress-bar/examples/3/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiProgressBarExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressBarExample3", function() { return TuiProgressBarExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");





class TuiProgressBarExample3 {
}
TuiProgressBarExample3.ɵfac = function TuiProgressBarExample3_Factory(t) { return new (t || TuiProgressBarExample3)(); };
TuiProgressBarExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressBarExample3, selectors: [["tui-progress-bar-example-3"]], decls: 2, vars: 2, consts: [["tuiProgressBar", "", "max", "100", "size", "s", 1, "progress", 3, "value"], ["tuiProgressBar", "", "max", "100", "size", "m", 1, "progress", 3, "value"]], template: function TuiProgressBarExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 70);
    } }, directives: [_kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["TuiProgressBarComponent"]], styles: [".progress[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 37.4625em) {\n  .progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEk7RUFBQTtJQUNJLFdBQUE7RURNTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnByb2dyZXNzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAucHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5wcm9ncmVzcyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressBarExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-bar-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/examples/4/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/progress-bar/examples/4/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiProgressBarExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressBarExample4", function() { return TuiProgressBarExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-label/progress-label.component */ "../kit/components/progress/progress-label/progress-label.component.ts");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");










function TuiProgressBarExample4_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "progress", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r1, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r0.max)("value", value_r1);
} }
class TuiProgressBarExample4 {
    constructor(isCypress) {
        this.isCypress = isCypress;
        this.max = 100;
        this.value$ = this.isCypress
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(30)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(300, 300).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(i => i + 30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(value => value <= this.max));
    }
}
TuiProgressBarExample4.ɵfac = function TuiProgressBarExample4_Factory(t) { return new (t || TuiProgressBarExample4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"])); };
TuiProgressBarExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressBarExample4, selectors: [["tui-progress-bar-example-4"]], decls: 2, vars: 3, consts: [["tuiProgressLabel", "", "class", "label-wrapper", 4, "ngIf"], ["tuiProgressLabel", "", 1, "label-wrapper"], ["tuiProgressBar", "", 3, "max", "value"]], template: function TuiProgressBarExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiProgressBarExample4_label_0_Template, 3, 3, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.value$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_7__["TuiProgressLabelComponent"], _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["TuiProgressBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".label-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .label-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5sYWJlbC13cmFwcGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAubGFiZWwtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmxhYmVsLXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressBarExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-bar-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/examples/5/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/progress-bar/examples/5/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiProgressBarExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiProgressBarExample5", function() { return TuiProgressBarExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-label/progress-label.component */ "../kit/components/progress/progress-label/progress-label.component.ts");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");






class TuiProgressBarExample5 {
}
TuiProgressBarExample5.ɵfac = function TuiProgressBarExample5_Factory(t) { return new (t || TuiProgressBarExample5)(); };
TuiProgressBarExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiProgressBarExample5, selectors: [["tui-progress-bar-example-5"]], decls: 3, vars: 2, consts: [["tuiProgressLabel", "", 1, "label-wrapper"], ["tuiProgressBar", "", "max", "4", "size", "s", 1, "progress", 3, "value"]], template: function TuiProgressBarExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
    } }, directives: [_kit_components_progress_progress_label_progress_label_component__WEBPACK_IMPORTED_MODULE_3__["TuiProgressLabelComponent"], _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["TuiProgressBarComponent"]], styles: [".label-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .label-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.progress[_ngcontent-%COMP%]:nth-child(1) {\n  color: #a3ecb3;\n}\n.progress[_ngcontent-%COMP%]:nth-child(2) {\n  color: #39b54a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0ZJO0VBQ0ksY0FBQTtBRElSO0FDRkk7RUFDSSxjQUFBO0FESVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ubGFiZWwtd3JhcHBlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLmxhYmVsLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvZ3Jlc3M6bnRoLWNoaWxkKDEpIHtcbiAgY29sb3I6ICNhM2VjYjM7XG59XG4ucHJvZ3Jlc3M6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICMzOWI1NGE7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5sYWJlbC13cmFwcGVyIHtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5wcm9ncmVzcyB7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICBjb2xvcjogI2EzZWNiMztcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogIzM5YjU0YTtcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiProgressBarExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-progress-bar-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/progress-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/progress-bar/progress-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleProgressBarComponent", function() { return ExampleProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/progress-bar/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/progress-bar/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/progress-bar/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/progress-bar/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/progress-bar/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../kit/components/progress/progress-bar/progress-bar.component */ "../kit/components/progress/progress-bar/progress-bar.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8624557147577439768$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}tuiProgressBar{$closeTagCode}{$closeTagDt}{$startTagDd} \u2013 attribute component for native html tag {$startTagCode}<progress />{$closeTagCode} . {$closeTagDd}", { "startTagDt": "\uFFFD#2\uFFFD", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]", "closeTagDt": "\uFFFD/#2\uFFFD", "startTagDd": "\uFFFD#4\uFFFD", "closeTagDd": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_8624557147577439768$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟4ed7053c5c74592c268021eeec7e822e85123eef␟8624557147577439768:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tuiProgressBar${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: – attribute component for native html tag ${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:<progress />${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: . ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1959442075124179089$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Usage:{$closeTagStrong}{$startTagCode}<progress tuiProgressBar value=\"40\" max=\"100\"></progress>{$closeTagCode} . ", { "startTagStrong": "\uFFFD#8\uFFFD", "closeTagStrong": "\uFFFD/#8\uFFFD", "startTagCode": "\uFFFD#9\uFFFD", "closeTagCode": "\uFFFD/#9\uFFFD" });
    I18N_2 = MSG_EXTERNAL_1959442075124179089$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟1ee2ab2cf8b61ffa7e26891d9ff65b84f589b500␟1959442075124179089:${"\uFFFD#8\uFFFD"}:START_TAG_STRONG:Usage:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD#9\uFFFD"}:START_TAG_CODE:<progress tuiProgressBar value="40" max="100"></progress>${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__5 = goog.getMsg("Basic");
    I18N_4 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1598512795966065598$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__8 = goog.getMsg("Multicolor");
    I18N_7 = MSG_EXTERNAL_1598512795966065598$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟d7a340fb882e7e5f76d0949bbfa10811361d7e93␟1598512795966065598:Multicolor`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__11 = goog.getMsg("Sizes");
    I18N_10 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8720306042838547123$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__14 = goog.getMsg("With label");
    I18N_13 = MSG_EXTERNAL_8720306042838547123$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1765388942323233214$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__17 = goog.getMsg("Stacked progress bars");
    I18N_16 = MSG_EXTERNAL_1765388942323233214$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟dd4002bde6f74a0a30ec223b660ed5d4458c127d␟1765388942323233214:Stacked progress bars`;
}
const _c18 = ["heading", I18N_16];
function ExampleProgressBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-progress-bar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-progress-bar-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](17, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-progress-bar-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tui-progress-bar-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](23, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "tui-progress-bar-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.basicExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.multiColorExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.sizesExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.labelExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.stackedExample);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4894529704152782945$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___20 = goog.getMsg(" Native attribute {$startLink} value {$closeLink} of {$startTagCode}<progress />{$closeTagCode}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_19 = MSG_EXTERNAL_4894529704152782945$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟ba74cd5237673a75a1bbbbfe36cf54bc1fcaff01␟4894529704152782945: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: value ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<progress />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleProgressBarComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5682634365450052698$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___22 = goog.getMsg(" Native attribute {$startLink} max {$closeLink} of {$startTagCode}<progress />{$closeTagCode}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_21 = MSG_EXTERNAL_5682634365450052698$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟1826095affba926e4075210d4d2fe1f0b5281214␟5682634365450052698: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: max ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<progress />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleProgressBarComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5415347527315359817$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___24 = goog.getMsg(" Size of the progress element ");
    I18N_23 = MSG_EXTERNAL_5415347527315359817$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟d9f4db967c9e78b6e28feafdf3c916002fb067c7␟5415347527315359817: Size of the progress element `;
}
function ExampleProgressBarComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2864892605454291497$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___26 = goog.getMsg(" Color of the progress indicator {$startParagraph} We recommend set solid color via {$startTagCode}<progress />{$closeTagCode} 's CSS-property {$startTagCode}color{$closeTagCode} (especially, if you support old not-chromium based Edge) {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_25 = MSG_EXTERNAL_2864892605454291497$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟7ae65b188c23ffa2ea105cdc7c4e30f3ae314321␟2864892605454291497: Color of the progress indicator ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: We recommend set solid color via ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:<progress />${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: 's CSS-property ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: (especially, if you support old not-chromium based Edge) ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
I18N_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_25);
function ExampleProgressBarComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleProgressBarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleProgressBarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleProgressBarComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleProgressBarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleProgressBarComponent_ng_template_2_ng_template_6_Template, 4, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.color = $event; });
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
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8674861496686918589$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__28 = goog.getMsg(" Import {$startTagCode}TuiProgressModule{$closeTagCode} into a module where you want to use our attribute component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_27 = MSG_EXTERNAL_8674861496686918589$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__28;
}
else {
    I18N_27 = $localize `:␟7bc158fa5ee50dd5e598c2cd6720474e7c814cab␟8674861496686918589: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiProgressModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our attribute component `;
}
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__30 = goog.getMsg("Add to the template:");
    I18N_29 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__30;
}
else {
    I18N_29 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleProgressBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleProgressBarComponent {
    constructor() {
        this.value = 6;
        this.max = 10;
        this.sizeVariants = [`m`, `s`];
        this.size = this.sizeVariants[0];
        this.colorVariants = [
            `var(--tui-primary)`,
            `lightskyblue`,
            `#3682db`,
            `rgba(74, 201, 155, 1)`,
            `linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))`,
        ];
        this.color = this.colorVariants[0];
        this.basicExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/1/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/1/index.less")),
        };
        this.multiColorExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.less")),
        };
        this.sizesExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/3/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/3/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/3/index.less")),
        };
        this.labelExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.less")),
        };
        this.stackedExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.less")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/import/insert-template.md"));
    }
}
ExampleProgressBarComponent.ɵfac = function ExampleProgressBarComponent_Factory(t) { return new (t || ExampleProgressBarComponent)(); };
ExampleProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleProgressBarComponent, selectors: [["example-tui-progress-bar"]], decls: 4, vars: 0, consts: [["header", "ProgressBar", "package", "KIT", "path", "kit/components/progress/progress-bar"], ["pageTab", ""], ["id", "basic", 3, "content", 6, "heading"], ["id", "multicolor", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "label", 3, "content", 6, "heading"], ["id", "stacked", 3, "content", 6, "heading"], ["tuiProgressBar", "", 1, "api-progress", 3, "value", "max", "size", "color"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "color", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes", "target", "_blank"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleProgressBarComponent_ng_template_1_Template, 25, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleProgressBarComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleProgressBarComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiProgressBarExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiProgressBarExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiProgressBarExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiProgressBarExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiProgressBarExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDemoComponent"], _kit_components_progress_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["TuiProgressBarComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_14__["TuiLinkComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], styles: [".api-progress[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 37.4625em) {\n  .api-progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\ndt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0hBOztFQUVJLGVBQUE7RUFDQSxTQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uYXBpLXByb2dyZXNzIHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAuYXBpLXByb2dyZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuZHQsXG5kZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uYXBpLXByb2dyZXNzIHtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbmR0LFxuZGQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-progress-bar`,
                templateUrl: `./progress-bar.component.html`,
                styleUrls: [`./progress-bar.component.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/progress-bar/progress-bar.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/progress-bar/progress-bar.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiProgressBarModule", function() { return ExampleTuiProgressBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/progress-bar/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/progress-bar/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/progress-bar/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/progress-bar/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/progress-bar/examples/5/index.ts");
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-bar.component */ "./src/modules/components/progress-bar/progress-bar.component.ts");














class ExampleTuiProgressBarModule {
}
ExampleTuiProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiProgressBarModule });
ExampleTuiProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiProgressBarModule_Factory(t) { return new (t || ExampleTuiProgressBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiProgressModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiProgressBarModule, { declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiProgressBarExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiProgressBarExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiProgressBarExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiProgressBarExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiProgressBarExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiProgressModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiProgressModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"])),
                ],
                declarations: [
                    _progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiProgressBarExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiProgressBarExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiProgressBarExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiProgressBarExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiProgressBarExample5"],
                ],
                exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ExampleProgressBarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-progress-bar-progress-bar-module.js.map