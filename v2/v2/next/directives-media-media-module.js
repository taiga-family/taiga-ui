(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-media-media-module"],{

/***/ "./src/modules/directives/media/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/directives/media/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiMediaExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMediaExample1", function() { return TuiMediaExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/directives/media/media.directive */ "../cdk/directives/media/media.directive.ts");
/* harmony import */ var _cdk_directives_high_dpi_high_dpi_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/directives/high-dpi/high-dpi.directive */ "../cdk/directives/high-dpi/high-dpi.directive.ts");






function TuiMediaExample1_source_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 3);
} }
class TuiMediaExample1 {
    constructor() {
        this.currentTime = 0;
        this.volume = 1;
        this.paused = true;
    }
}
TuiMediaExample1.ɵfac = function TuiMediaExample1_Factory(t) { return new (t || TuiMediaExample1)(); };
TuiMediaExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMediaExample1, selectors: [["tui-media-example-1"]], decls: 9, vars: 6, consts: [["tuiMedia", "", "controls", "", "width", "320", 1, "video", 3, "currentTime", "paused", "volume", "currentTimeChange", "pausedChange", "volumeChange"], ["src", "/assets/media/bbb_dpi.ogv", "type", "video/ogg", 4, "tuiHighDpi"], ["src", "/assets/media/bbb.mp4", "type", "video/mp4"], ["src", "/assets/media/bbb_dpi.ogv", "type", "video/ogg"]], template: function TuiMediaExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentTimeChange", function TuiMediaExample1_Template_video_currentTimeChange_0_listener($event) { return ctx.currentTime = $event; })("pausedChange", function TuiMediaExample1_Template_video_pausedChange_0_listener($event) { return ctx.paused = $event; })("volumeChange", function TuiMediaExample1_Template_video_volumeChange_0_listener($event) { return ctx.volume = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiMediaExample1_source_1_Template, 1, 0, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTime", ctx.currentTime)("paused", ctx.paused)("volume", ctx.volume);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("currentTime: ", ctx.currentTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("volume: ", ctx.volume, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("paused: ", ctx.paused, "");
    } }, directives: [_cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_3__["TuiMediaDirective"], _cdk_directives_high_dpi_high_dpi_directive__WEBPACK_IMPORTED_MODULE_4__["TuiHighDpiDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.video[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tZWRpYS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvbWVkaWEvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvbWVkaWEvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmlkZW8ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52aWRlbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMediaExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-media-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/media/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/directives/media/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiMediaExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMediaExample2", function() { return TuiMediaExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/directives/media/media.directive */ "../cdk/directives/media/media.directive.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");










class TuiMediaExample2 {
    constructor() {
        this.currentTime = 0;
        this.paused = true;
    }
    get icon() {
        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;
    }
    getTime(time) {
        const integer = Math.round(time || 0);
        const seconds = integer % _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["SECONDS_IN_MINUTE"];
        const minutes = (integer - seconds) / _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["SECONDS_IN_MINUTE"];
        const secondsString = String(seconds);
        const minutesString = String(minutes);
        const paddedSeconds = secondsString.length === 1 ? `0${secondsString}` : secondsString;
        const paddedMinutes = minutesString.length === 1 ? `0${minutesString}` : minutesString;
        return `${paddedMinutes}:${paddedSeconds}`;
    }
    toggleState() {
        this.paused = !this.paused;
    }
}
TuiMediaExample2.ɵfac = function TuiMediaExample2_Factory(t) { return new (t || TuiMediaExample2)(); };
TuiMediaExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMediaExample2, selectors: [["tui-media-example-2"]], decls: 13, vars: 9, consts: [[1, "player"], ["tuiMedia", "", "width", "320", 1, "video", 3, "currentTime", "paused", "currentTimeChange", "pausedChange", "click"], ["video", ""], ["src", "/assets/media/bbb.mp4", "type", "video/mp4"], ["tuiMode", "onDark", 1, "controls"], ["tuiIconButton", "", "type", "button", "title", "Play/Pause", "size", "s", "shape", "rounded", "appearance", "flat", 3, "icon", "click"], ["tuiSlider", "", "type", "range", "step", "any", 1, "slider", 3, "max", "ngModel", "ngModelChange"], [1, "time"]], template: function TuiMediaExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentTimeChange", function TuiMediaExample2_Template_video_currentTimeChange_1_listener($event) { return ctx.currentTime = $event; })("pausedChange", function TuiMediaExample2_Template_video_pausedChange_1_listener($event) { return ctx.paused = $event; })("click", function TuiMediaExample2_Template_video_click_1_listener() { return ctx.toggleState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMediaExample2_Template_button_click_5_listener() { return ctx.toggleState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiMediaExample2_Template_input_ngModelChange_6_listener($event) { return ctx.currentTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTime", ctx.currentTime)("paused", ctx.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", _r0.duration)("ngModel", ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("datetime", ctx.getTime(ctx.currentTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getTime(ctx.currentTime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("datetime", ctx.getTime(_r0.duration));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getTime(_r0.duration), " ");
    } }, directives: [_cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_4__["TuiMediaDirective"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_5__["TuiModeDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.video[_ngcontent-%COMP%] {\n  display: block;\n}\n.player[_ngcontent-%COMP%] {\n  position: relative;\n  width: 20rem;\n}\n.controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0.75rem 0.75rem 0.5rem;\n  box-sizing: border-box;\n  color: var(--tui-base-01);\n  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.56));\n}\n.slider[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 0.75rem;\n}\n.time[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 0.75rem;\n  font-size: 0.8125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tZWRpYS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvbWVkaWEvZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0VBQUE7QUNGSjtBREtBO0VBQ0ksT0FBQTtFQUNBLG9CQUFBO0FDSEo7QURNQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDSkoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL21lZGlhL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZpZGVvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBsYXllciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMHJlbTtcbn1cblxuLmNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjU2KSk7XG59XG5cbi5zbGlkZXIge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG59XG5cbi50aW1lIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wbGF5ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHJlbTtcbn1cbi5jb250cm9scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC41NikpO1xufVxuLnNsaWRlciB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuLnRpbWUge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMediaExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-media-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/media/examples/3/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/directives/media/examples/3/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiMediaExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMediaExample3", function() { return TuiMediaExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../cdk/directives/media/media.directive */ "../cdk/directives/media/media.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");








class TuiMediaExample3 {
    constructor() {
        this.currentTime = 0;
        this.paused = true;
    }
    get icon() {
        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;
    }
    toggleState() {
        this.paused = !this.paused;
    }
}
TuiMediaExample3.ɵfac = function TuiMediaExample3_Factory(t) { return new (t || TuiMediaExample3)(); };
TuiMediaExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMediaExample3, selectors: [["tui-media-example-3"]], decls: 9, vars: 5, consts: [[1, "tui-player"], ["tuiMedia", "", "src", "assets/media/strays.mp3", 3, "currentTime", "paused", "currentTimeChange", "pausedChange"], ["audio", ""], ["tuiIconButton", "", "type", "button", "shape", "rounded", "appearance", "secondary", "title", "Play/Pause", 3, "icon", "click"], ["tuiLink", "", "href", "https://waterplea.bandcamp.com/"], ["tuiSlider", "", "type", "range", "step", "any", 1, "slider", 3, "max", "ngModel", "ngModelChange"]], template: function TuiMediaExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentTimeChange", function TuiMediaExample3_Template_audio_currentTimeChange_1_listener($event) { return ctx.currentTime = $event; })("pausedChange", function TuiMediaExample3_Template_audio_pausedChange_1_listener($event) { return ctx.paused = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMediaExample3_Template_button_click_3_listener() { return ctx.toggleState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Waterplea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2014 Strays ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiMediaExample3_Template_input_ngModelChange_8_listener($event) { return ctx.currentTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTime", ctx.currentTime)("paused", ctx.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", _r0.duration)("ngModel", ctx.currentTime);
    } }, directives: [_cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_2__["TuiMediaDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".tui-player {\n  display: flex;\n  width: 20rem;\n  border-radius: 6.25rem;\n  background: var(--tui-secondary);\n  --tui-primary: var(--tui-link);\n  --tui-primary-hover: var(--tui-link-hover);\n  --tui-primary-active: var(--tui-link-hover);\n}\n.tui-player > div {\n  flex: 1;\n  margin: 0.375rem 1.75rem 0 0.375rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tZWRpYS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvbWVkaWEvZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBRUEsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FDQUo7QURFSTtFQUNJLE9BQUE7RUFDQSxtQ0FBQTtBQ0FSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tZWRpYS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHVpLXBsYXllciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMjByZW07XG4gICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcblxuICAgIC0tdHVpLXByaW1hcnk6IHZhcigtLXR1aS1saW5rKTtcbiAgICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktbGluay1ob3Zlcik7XG4gICAgLS10dWktcHJpbWFyeS1hY3RpdmU6IHZhcigtLXR1aS1saW5rLWhvdmVyKTtcblxuICAgICYgPiBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDAuMzc1cmVtIDEuNzVyZW0gMCAwLjM3NXJlbTtcbiAgICB9XG59XG4iLCIudHVpLXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG4gIC0tdHVpLXByaW1hcnk6IHZhcigtLXR1aS1saW5rKTtcbiAgLS10dWktcHJpbWFyeS1ob3ZlcjogdmFyKC0tdHVpLWxpbmstaG92ZXIpO1xuICAtLXR1aS1wcmltYXJ5LWFjdGl2ZTogdmFyKC0tdHVpLWxpbmstaG92ZXIpO1xufVxuLnR1aS1wbGF5ZXIgPiBkaXYge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAuMzc1cmVtIDEuNzVyZW0gMCAwLjM3NXJlbTtcbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMediaExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-media-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/media/media.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/directives/media/media.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMediaComponent", function() { return ExampleTuiMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/media/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/directives/media/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/directives/media/examples/3/index.ts");
/* harmony import */ var _cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../cdk/directives/media/media.directive */ "../cdk/directives/media/media.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3250391385569692601$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS_1 = goog.getMsg("Media");
    I18N_0 = MSG_EXTERNAL_3250391385569692601$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟8a27a855a00b08d2ca981207638ea9097032412b␟3250391385569692601:Media`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_72364305241305412$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__4 = goog.getMsg("Directive for declarative work with HTML5 video and audio");
    I18N_3 = MSG_EXTERNAL_72364305241305412$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟5c7e436081ab7b7e75134ad0f3f5732344199ff2␟72364305241305412:Directive for declarative work with HTML5 video and audio`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8073419804355870473$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__6 = goog.getMsg("Native controls");
    I18N_5 = MSG_EXTERNAL_8073419804355870473$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟d0326b072d54c553e428c3b40cecb689f4e7adce␟8073419804355870473:Native controls`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6549265851868599441$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__9 = goog.getMsg("Video");
    I18N_8 = MSG_EXTERNAL_6549265851868599441$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟2d1ea268a6a9f483dbc2cbfe19bf4256a57a6af4␟6549265851868599441:Video`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_347407180135731058$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__12 = goog.getMsg("Audio");
    I18N_11 = MSG_EXTERNAL_347407180135731058$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟f0baeb8b69d120073b6d60d34785889b0c3232c8␟347407180135731058:Audio`;
}
const _c13 = ["heading", I18N_11];
function ExampleTuiMediaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-media-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-media-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-media-example-3");
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
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3780515939858026328$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___15 = goog.getMsg(" Current time ");
    I18N_14 = MSG_EXTERNAL_3780515939858026328$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟69f9d26d1f4b33afc3d5b0833e9d3c849c2c1707␟3780515939858026328: Current time `;
}
function ExampleTuiMediaComponent_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_256940080640657353$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___17 = goog.getMsg(" Paused state ");
    I18N_16 = MSG_EXTERNAL_256940080640657353$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟9dcd2128593c62256dd3464320ec1885f5b4e168␟256940080640657353: Paused state `;
}
function ExampleTuiMediaComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2465791192649345432$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___19 = goog.getMsg(" Playback speed ");
    I18N_18 = MSG_EXTERNAL_2465791192649345432$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟2537ae0f1e8aab6c5fecda1acda4958a53a7ca40␟2465791192649345432: Playback speed `;
}
function ExampleTuiMediaComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4429171508194850919$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___21 = goog.getMsg(" Volume ");
    I18N_20 = MSG_EXTERNAL_4429171508194850919$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟140fa9b9d19e3ff4049b0fe947f1f599a498d2ca␟4429171508194850919: Volume `;
}
function ExampleTuiMediaComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
function ExampleTuiMediaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pausedChange", function ExampleTuiMediaComponent_ng_template_3_Template_audio_pausedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.paused = $event; })("currentTimeChange", function ExampleTuiMediaComponent_ng_template_3_Template_audio_currentTimeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.currentTime = $event; })("volumeChange", function ExampleTuiMediaComponent_ng_template_3_Template_audio_volumeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.volume = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMediaComponent_ng_template_3_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.currentTime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiMediaComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.paused = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiMediaComponent_ng_template_3_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.playbackRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiMediaComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.volume = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playbackRate", ctx_r1.playbackRate)("paused", ctx_r1.paused)("currentTime", ctx_r1.currentTime)("volume", ctx_r1.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.currentTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.paused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.playbackRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.volumeVariants)("documentationPropertyValue", ctx_r1.volume);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4130706201499310656$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiMediaModule{$closeTagCode} into your component module: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_22 = MSG_EXTERNAL_4130706201499310656$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟d7cf4a0ab0cf4835b61647afeed7ad7d789a0e94␟4130706201499310656: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMediaModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component module: `;
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
    I18N_24 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiMediaComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiMediaComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/3/index.less")),
        };
        this.volumeVariants = [1, 0.5, 0.25, 0];
        this.playbackRate = 1;
        this.currentTime = 0;
        this.volume = this.volumeVariants[0];
        this.paused = true;
    }
}
ExampleTuiMediaComponent.ɵfac = function ExampleTuiMediaComponent_Factory(t) { return new (t || ExampleTuiMediaComponent)(); };
ExampleTuiMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiMediaComponent, selectors: [["example-tui-media"]], decls: 5, vars: 0, consts: [["package", "CDK", "type", "directives", 6, "header"], ["pageTab", ""], ["id", "native", 3, "content", 6, "heading"], ["id", "video", 3, "content", 6, "heading"], ["id", "audio", 3, "content", 6, "heading"], ["tuiMedia", "", "controls", "", "src", "assets/media/strays.mp3", 3, "playbackRate", "paused", "currentTime", "volume", "pausedChange", "currentTimeChange", "volumeChange"], ["documentationPropertyName", "currentTime", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "paused", "documentationPropertyType", "boolean", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "playbackRate", "documentationPropertyType", "number", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "volume", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMediaComponent_ng_template_2_Template, 11, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiMediaComponent_ng_template_3_Template, 6, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiMediaComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiMediaExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiMediaExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiMediaExample3"], _cdk_directives_media_media_directive__WEBPACK_IMPORTED_MODULE_8__["TuiMediaDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-media`,
                templateUrl: `./media.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/media/media.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/directives/media/media.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMediaModule", function() { return ExampleTuiMediaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/media/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/directives/media/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/directives/media/examples/3/index.ts");
/* harmony import */ var _media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media.component */ "./src/modules/directives/media/media.component.ts");














class ExampleTuiMediaModule {
}
ExampleTuiMediaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiMediaModule });
ExampleTuiMediaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiMediaModule_Factory(t) { return new (t || ExampleTuiMediaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiMediaModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiHighDpiModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiMediaModule, { declarations: [_media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiMediaExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiMediaExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiMediaExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiMediaModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiHighDpiModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiMediaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiMediaModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiHighDpiModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"])),
                ],
                declarations: [
                    _media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiMediaExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiMediaExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiMediaExample3"],
                ],
                exports: [_media_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiMediaComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-media-media-module.js.map