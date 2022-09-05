(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-skeleton-skeleton-module"],{

/***/ "./src/modules/markup/skeleton/examples/1/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/markup/skeleton/examples/1/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiSkeletonExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSkeletonExample1", function() { return TuiSkeletonExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/toggle/toggle.component */ "../kit/components/toggle/toggle.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");











class TuiSkeletonExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
        this.skeletonVisible = false;
        this.lightMode = false;
        this.placeholder = `Some paragraph with information`;
    }
    showSkeleton() {
        this.skeletonVisible = !this.skeletonVisible;
    }
    toggleLight() {
        this.lightMode = !this.lightMode;
    }
}
TuiSkeletonExample1.ɵfac = function TuiSkeletonExample1_Factory(t) { return new (t || TuiSkeletonExample1)(); };
TuiSkeletonExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSkeletonExample1, selectors: [["tui-skeleton-example-1"]], decls: 43, vars: 80, consts: [["tuiButton", "", "type", "button", "size", "xs", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "xs", 3, "click"], [1, "container", 3, "tuiMode"], [1, "tui-row"], [1, "tui-col_md-4", "tui-col_stretch"], ["size", "l", 1, "island", 3, "transparent"], [1, "tui-island__content"], [1, "tui-island__figure"], [3, "formGroup"], ["size", "l", "formControlName", "testValue"], [1, "island-content"], [1, "tui-island__category"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_link"], ["href", "https://github.com/tinkoff/taiga-ui", "target", "_blank", "tuiLink", ""], ["size", "l", "href", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", "tuiIsland", "", "target", "_blank", 1, "island", 3, "hoverable", "transparent"], [1, "some-figure"], ["size", "l", "textAlign", "center", 1, "island", 3, "transparent"]], template: function TuiSkeletonExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSkeletonExample1_Template_button_click_1_listener() { return ctx.showSkeleton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Show/hide skeleton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSkeletonExample1_Template_button_click_3_listener() { return ctx.toggleLight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Light mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-island", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tui-island", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("container_dark", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiMode", ctx.lightMode ? "onDark" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transparent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : "Title", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : ctx.placeholder, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true)("transparent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_rounded", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : "Another title", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : "And some new text again", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transparent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_rounded", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_center", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : "One more title", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skeletonVisible ? "" : "All right, I get it", " ");
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_5__["TuiModeDirective"], _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_6__["TuiIslandComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__["TuiToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__["TuiLinkComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 62.5rem;\n  padding: 1.5rem;\n}\n.container_dark[_ngcontent-%COMP%] {\n  background-image: linear-gradient(225deg, #3023ae, #c86dd7);\n}\n.container_dark[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: var(--tui-text-01-night);\n}\n.island[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.some-figure[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 3rem;\n  height: 3rem;\n  background-color: var(--tui-secondary-active);\n}\n.island-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NrZWxldG9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NrZWxldG9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSwyREFBQTtBQ0NSO0FEQ1E7RUFDSSwrQkFBQTtBQ0NaO0FESUE7RUFDSSxXQUFBO0FDRko7QURLQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0FDSkoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvc2tlbGV0b24vZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2Mi41cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuICAgICZfZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMzMDIzYWUsICNjODZkZDcpO1xuXG4gICAgICAgICYgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaXNsYW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNvbWUtZmlndXJlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc2Vjb25kYXJ5LWFjdGl2ZSk7XG59XG5cbi5pc2xhbmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2Mi41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4uY29udGFpbmVyX2Rhcmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjMzAyM2FlLCAjYzg2ZGQ3KTtcbn1cbi5jb250YWluZXJfZGFyayAqIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbn1cbi5pc2xhbmQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zb21lLWZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zZWNvbmRhcnktYWN0aXZlKTtcbn1cbi5pc2xhbmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSkeletonExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-skeleton-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/skeleton/examples/2/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/markup/skeleton/examples/2/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiSkeletonExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSkeletonExample2", function() { return TuiSkeletonExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _kit_components_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input-password/input-password.component */ "../kit/components/input-password/input-password.component.ts");
/* harmony import */ var _kit_components_input_password_input_password_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input-password/input-password.directive */ "../kit/components/input-password/input-password.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _kit_components_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-time/input-time.component */ "../kit/components/input-time/input-time.component.ts");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");

















class TuiSkeletonExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            passwordValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            moneyValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`100`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            timeValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiTime"](12, 30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            osnoValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            usnValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            eshnValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            envdValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
        this.skeletonVisible = false;
        this.lightMode = false;
    }
    showSkelet() {
        this.skeletonVisible = !this.skeletonVisible;
    }
    toggleLight() {
        this.lightMode = !this.lightMode;
    }
}
TuiSkeletonExample2.ɵfac = function TuiSkeletonExample2_Factory(t) { return new (t || TuiSkeletonExample2)(); };
TuiSkeletonExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSkeletonExample2, selectors: [["tui-skeleton-example-2"]], decls: 39, vars: 54, consts: [["tuiButton", "", "type", "button", "size", "xs", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "xs", 3, "click"], [1, "tui-container"], [3, "formGroup"], [1, "tui-row", "tui-row_sme"], [1, "tui-col_8"], [1, "container", 3, "tuiMode"], [1, "tui-form__header", "tui-form__header_margin-top_none"], [1, "tui-form__row"], ["tuiTextfieldExampleText", "Name Surname", "formControlName", "nameValue", "tuiHintContent", "With a hint"], [1, "tui-form__row", "tui-form__row_multi-fields"], [1, "tui-form__multi-field"], ["formControlName", "passwordValue"], ["formControlName", "moneyValue"], [1, "tui-form__row", "tui-form__row_half-width"], ["formControlName", "timeValue"], [1, "tui-form__row", "tui-form__row_checkboxes"], ["formControlName", "osnoValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "eshnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "envdValue", "size", "l", 1, "tui-form__checkbox"], [1, "tui-form__buttons"], ["tuiButton", "", "size", "l", "type", "submit", 1, "tui-form__button"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l", 1, "tui-form__button"]], template: function TuiSkeletonExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSkeletonExample2_Template_button_click_1_listener() { return ctx.showSkelet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Show/hide skeleton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSkeletonExample2_Template_button_click_3_listener() { return ctx.toggleLight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Light mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A header ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Some input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-input-password", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Some password input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-input-number", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Some number input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-input-time", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Some textfield ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tui-checkbox-labeled", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " First option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tui-checkbox-labeled", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cool option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tui-checkbox-labeled", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Boring option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-checkbox-labeled", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Interesting option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("container_dark", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiMode", ctx.lightMode ? "onDark" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__["TuiModeDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _kit_components_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputPasswordComponent"], _kit_components_input_password_input_password_directive__WEBPACK_IMPORTED_MODULE_10__["TuiInputPasswordDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_12__["TuiInputNumberDirective"], _kit_components_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputTimeComponent"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_14__["TuiCheckboxLabeledComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.container_dark[_ngcontent-%COMP%] {\n  background-image: linear-gradient(225deg, #3023ae, #c86dd7);\n  color: var(--tui-text-01-night);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NrZWxldG9uL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NrZWxldG9uL2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtBQ0FKO0FERUk7RUFDSSwyREFBQTtFQUNBLCtCQUFBO0FDQVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvc2tlbGV0b24vZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgICAmX2Rhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjMzAyM2FlLCAjYzg2ZGQ3KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5jb250YWluZXJfZGFyayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMzMDIzYWUsICNjODZkZDcpO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSkeletonExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-skeleton-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/skeleton/skeleton.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/markup/skeleton/skeleton.component.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/markup/skeleton/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/markup/skeleton/examples/2/index.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4656232853685757300$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS_1 = goog.getMsg("Skeleton");
    I18N_0 = MSG_EXTERNAL_4656232853685757300$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟3d714c5dfb4cdcdf38f7b054714c763b71ed066f␟4656232853685757300:Skeleton`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3092178411056451298$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__4 = goog.getMsg("{$startParagraph} Use {$startTagStrong}.tui-skeleton{$closeTagStrong} class on an element to add skeleton of the same size above it. {$closeParagraph}{$startParagraph}You can also use the following modifiers:{$closeParagraph}", { "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]", "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD", "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]" });
    I18N_3 = MSG_EXTERNAL_3092178411056451298$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟8fc38383a8162dc72e287093df05aaee22dc92a1␟3092178411056451298:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: Use ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:.tui-skeleton${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: class on an element to add skeleton of the same size above it. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:You can also use the following modifiers:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:`;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4554716163680077475$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__6 = goog.getMsg("{$startListItem}{$startTagCode}.tui-skeleton_light{$closeTagCode} : style for dark background {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_rounded{$closeTagCode} : rounded as an element {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_short{$closeTagCode} : short mode {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_center{$closeTagCode} : short centered mode {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_text{$closeTagCode} : for containers with texts {$closeListItem}", { "startListItem": "[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]", "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]", "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]", "closeListItem": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]" });
    I18N_5 = MSG_EXTERNAL_4554716163680077475$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟8703418486123b35f151e21eb69555aae5f8620b␟4554716163680077475:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_light${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : style for dark background ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_rounded${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : rounded as an element ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_short${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : short mode ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_center${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : short centered mode ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_text${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : for containers with texts ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8622969203323972045$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__8 = goog.getMsg("{$startTagStrong}Classes{$closeTagStrong} are included into global import {$startTagCode}@taiga-ui/core/styles/taiga-ui-global{$closeTagCode} . You do not need to import anything, just use them ", { "startTagStrong": "\uFFFD#24\uFFFD", "closeTagStrong": "\uFFFD/#24\uFFFD", "startTagCode": "\uFFFD#25\uFFFD", "closeTagCode": "\uFFFD/#25\uFFFD" });
    I18N_7 = MSG_EXTERNAL_8622969203323972045$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟11d3ad393079b6c9497d44e1ae084546e5a30ce4␟8622969203323972045:${"\uFFFD#24\uFFFD"}:START_TAG_STRONG:Classes${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_STRONG: are included into global import ${"\uFFFD#25\uFFFD"}:START_TAG_CODE:@taiga-ui/core/styles/taiga-ui-global${"\uFFFD/#25\uFFFD"}:CLOSE_TAG_CODE: . You do not need to import anything, just use them `;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1956073378030411818$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__10 = goog.getMsg("Classes");
    I18N_9 = MSG_EXTERNAL_1956073378030411818$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟1172ffb28e42ff5ae0d36af63448744a3af23d41␟1956073378030411818:Classes`;
}
const _c11 = ["heading", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5391778508352850475$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__13 = goog.getMsg("Mixins");
    I18N_12 = MSG_EXTERNAL_5391778508352850475$$SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟7503a8046c7cb804d840f16206896e9075dcc0e0␟5391778508352850475:Mixins`;
}
const _c14 = ["heading", I18N_12];
function SkeletonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".tui-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](23, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tui-skeleton-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](30, _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-skeleton-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
class SkeletonComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.less")),
        };
    }
}
SkeletonComponent.ɵfac = function SkeletonComponent_Factory(t) { return new (t || SkeletonComponent)(); };
SkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkeletonComponent, selectors: [["skeleton"]], decls: 3, vars: 0, consts: [[6, "header"], ["pageTab", ""], [1, "tui-space_bottom-3"], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], [1, "tui-space_top-3", "tui-space_bottom-3"], ["id", "classes", 3, "content", 6, "heading"], ["id", "mixins", 3, "content", 6, "heading"]], template: function SkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_template_2_Template, 32, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiSkeletonExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiSkeletonExample2"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `skeleton`,
                templateUrl: `skeleton.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/skeleton/skeleton.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/markup/skeleton/skeleton.module.ts ***!
  \********************************************************/
/*! exports provided: SkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonModule", function() { return SkeletonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/markup/skeleton/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/markup/skeleton/examples/2/index.ts");
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skeleton.component */ "./src/modules/markup/skeleton/skeleton.component.ts");












class SkeletonModule {
}
SkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SkeletonModule });
SkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTimeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPasswordModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiToggleModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SkeletonModule, { declarations: [_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSkeletonExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSkeletonExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPasswordModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiToggleModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SkeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiModeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputTimeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPasswordModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiToggleModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"])),
                ],
                declarations: [_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSkeletonExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSkeletonExample2"]],
                exports: [_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-skeleton-skeleton-module.js.map