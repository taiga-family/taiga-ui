(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~charts-arc-chart-arc-chart-module~charts-axes-axes-module~charts-bar-chart-bar-chart-module~~2b94a250"],{

/***/ "../addon-commerce/components/card/card.component.ts":
/*!***********************************************************!*\
  !*** ../addon-commerce/components/card/card.component.ts ***!
  \***********************************************************/
/*! exports provided: cardNumberAssertion, cardNumberAssertionMessage, TuiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertion", function() { return cardNumberAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertionMessage", function() { return cardNumberAssertionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCardComponent", function() { return TuiCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");






function TuiCardComponent_tui_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-svg", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.brandLogo);
} }
function TuiCardComponent_tui_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-svg", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.paymentSystemLogo);
} }
// eslint-disable-next-line @typescript-eslint/naming-convention
function cardNumberAssertion({ length }) {
    return !length || length === 4;
}
const cardNumberAssertionMessage = `cardNumber should contain 4 symbols`;
const icons = {
    ["mir" /* Mir */]: `tuiIconMirMono`,
    ["visa" /* Visa */]: `tuiIconVisaMono`,
    ["electron" /* Electron */]: `tuiIconElectronMono`,
    ["mastercard" /* Mastercard */]: `tuiIconMastercard`,
    ["maestro" /* Maestro */]: `tuiIconMaestro`,
};
class TuiCardComponent {
    constructor() {
        this.active = false;
        this.brandLogo = ``;
        this.cardNumber = ``;
        this.paymentSystem = null;
        this.size = `m`;
    }
    get hasBrandLogo() {
        return !!this.brandLogo && this.size === `m`;
    }
    get paymentSystemLogo() {
        return this.paymentSystem ? icons[this.paymentSystem] : ``;
    }
}
TuiCardComponent.ɵfac = function TuiCardComponent_Factory(t) { return new (t || TuiCardComponent)(); };
TuiCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiCardComponent, selectors: [["tui-card"]], hostVars: 3, hostBindings: function TuiCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_active", ctx.active);
    } }, inputs: { active: "active", brandLogo: "brandLogo", cardNumber: "cardNumber", paymentSystem: "paymentSystem", size: "size" }, decls: 6, vars: 3, consts: [[1, "t-front"], ["class", "t-brand-logo", 3, "src", 4, "ngIf"], [1, "t-number"], ["class", "t-payment-system-logo", 3, "src", 4, "ngIf"], [1, "t-back"], [1, "t-brand-logo", 3, "src"], [1, "t-payment-system-logo", 3, "src"]], template: function TuiCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCardComponent_tui_svg_1_Template, 1, 1, "tui-svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiCardComponent_tui_svg_4_Template, 1, 1, "tui-svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasBrandLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.paymentSystem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  color: var(--tui-base-01);\n  transform-style: preserve-3d;\n  cursor: default;\n  border-radius: var(--tui-radius-xs);\n  background-size: 100%;\n}\n[data-size='s'][_nghost-%COMP%] {\n  width: 2rem;\n  height: 1.5rem;\n}\n[data-size='m'][_nghost-%COMP%] {\n  width: 3rem;\n  height: 2rem;\n}\n._active[_nghost-%COMP%] {\n  box-shadow: 0 0 0 1px var(--tui-base-01);\n}\n.t-front[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.t-brand-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.1875rem;\n  left: 0.125rem;\n  height: 0.875rem;\n  width: 0.875rem;\n}\n.t-number[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[data-size='s'][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%] {\n  top: 0.125rem;\n  height: 0.625rem;\n  width: 1.1875rem;\n  font-size: 0.5rem;\n}\n[data-size='m'][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%] {\n  top: 0.1875rem;\n  height: 0.875rem;\n  width: 1.5rem;\n  font-size: 0.625rem;\n}\n.t-payment-system-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.25rem;\n  bottom: -0.5rem;\n  width: 2rem;\n  height: 2rem;\n  transform: scale(0.5);\n  transform-origin: right;\n}\n.t-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: rotateY(180deg) translate3d(0, 0, 1px);\n  background-color: var(--tui-base-05);\n  border-radius: var(--tui-radius-xs);\n}\n.t-back[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: 20%;\n  left: 0;\n  right: 0;\n  height: 20%;\n  background-color: var(--tui-base-06);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvY2FyZC9jYXJkLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9hZGRvbi1jb21tZXJjZS9jb21wb25lbnRzL2NhcmQvY2FyZC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QURLSjtBQ0hJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QURLUjtBQ0ZJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURJUjtBQ0RJO0VBQ0ksd0NBQUE7QURHUjtBQ0NBO0VDS0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VEVEosbUNBQUE7VUFBQSwyQkFBQTtBREtKO0FDRkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FER0o7QUNESTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURHUjtBQ0FJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FERVI7QUNFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QURBSjtBQ0dBO0VDeENJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFRG9DSixtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FER0o7QUNESTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBREdSIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvY2FyZC9jYXJkLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy14cyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0ncyddIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuOmhvc3RbZGF0YS1zaXplPSdtJ10ge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuOmhvc3QuX2FjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS10dWktYmFzZS0wMSk7XG59XG4udC1mcm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udC1icmFuZC1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMTg3NXJlbTtcbiAgbGVmdDogMC4xMjVyZW07XG4gIGhlaWdodDogMC44NzVyZW07XG4gIHdpZHRoOiAwLjg3NXJlbTtcbn1cbi50LW51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3RbZGF0YS1zaXplPSdzJ10gLnQtbnVtYmVyIHtcbiAgdG9wOiAwLjEyNXJlbTtcbiAgaGVpZ2h0OiAwLjYyNXJlbTtcbiAgd2lkdGg6IDEuMTg3NXJlbTtcbiAgZm9udC1zaXplOiAwLjVyZW07XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSAudC1udW1iZXIge1xuICB0b3A6IDAuMTg3NXJlbTtcbiAgaGVpZ2h0OiAwLjg3NXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbn1cbi50LXBheW1lbnQtc3lzdGVtLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjI1cmVtO1xuICBib3R0b206IC0wLjVyZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG59XG4udC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLXhzKTtcbn1cbi50LWJhY2s6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNik7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLXhzKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cbiAgICAmW2RhdGEtc2l6ZT0ncyddIHtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgIH1cblxuICAgICZbZGF0YS1zaXplPSdtJ10ge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgIH1cblxuICAgICYuX2FjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS10dWktYmFzZS0wMSk7XG4gICAgfVxufVxuXG4udC1mcm9udCB7XG4gICAgLmZ1bGxzaXplKCk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udC1icmFuZC1sb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjE4NzVyZW07XG4gICAgbGVmdDogMC4xMjVyZW07XG4gICAgaGVpZ2h0OiAwLjg3NXJlbTtcbiAgICB3aWR0aDogMC44NzVyZW07XG59XG5cbi50LW51bWJlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIDpob3N0W2RhdGEtc2l6ZT0ncyddICYge1xuICAgICAgICB0b3A6IDAuMTI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICB3aWR0aDogMS4xODc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J20nXSAmIHtcbiAgICAgICAgdG9wOiAwLjE4NzVyZW07XG4gICAgICAgIGhlaWdodDogMC44NzVyZW07XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gICAgfVxufVxuXG4udC1wYXltZW50LXN5c3RlbS1sb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuMjVyZW07XG4gICAgYm90dG9tOiAtMC41cmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG59XG5cbi50LWJhY2sge1xuICAgIC5mdWxsc2l6ZSgpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAxcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA1KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLXhzKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wNik7XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiCardComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiCardComponent.prototype, "brandLogo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])(cardNumberAssertion, cardNumberAssertionMessage)
], TuiCardComponent.prototype, "cardNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiCardComponent.prototype, "paymentSystem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiCardComponent.prototype, "size", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-card`,
                templateUrl: `card.template.html`,
                styleUrls: [`./card.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._active`]
        }], brandLogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cardNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paymentSystem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }] }); })();


/***/ }),

/***/ "../addon-commerce/components/card/card.module.ts":
/*!********************************************************!*\
  !*** ../addon-commerce/components/card/card.module.ts ***!
  \********************************************************/
/*! exports provided: TuiCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCardModule", function() { return TuiCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "../addon-commerce/components/card/card.component.ts");





class TuiCardModule {
}
TuiCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiCardModule });
TuiCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiCardModule_Factory(t) { return new (t || TuiCardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiCardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]],
                declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]],
                exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/card/index.ts":
/*!**************************************************!*\
  !*** ../addon-commerce/components/card/index.ts ***!
  \**************************************************/
/*! exports provided: cardNumberAssertion, cardNumberAssertionMessage, TuiCardComponent, TuiCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component */ "../addon-commerce/components/card/card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertion", function() { return _card_component__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertionMessage", function() { return _card_component__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertionMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardComponent", function() { return _card_component__WEBPACK_IMPORTED_MODULE_0__["TuiCardComponent"]; });

/* harmony import */ var _card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.module */ "../addon-commerce/components/card/card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardModule", function() { return _card_module__WEBPACK_IMPORTED_MODULE_1__["TuiCardModule"]; });





/***/ }),

/***/ "../addon-commerce/components/index.ts":
/*!*********************************************!*\
  !*** ../addon-commerce/components/index.ts ***!
  \*********************************************/
/*! exports provided: cardNumberAssertion, cardNumberAssertionMessage, TuiCardComponent, TuiCardModule, cardTextfieldControllerFactory, TuiInputCardComponent, TuiInputCardModule, TuiInputCardGroupedComponent, TuiInputCardGroupedModule, TUI_INPUT_CARD_GROUPED_TEXTS, inputGroupedTextsFactory, TuiInputCVCComponent, TuiInputCVCModule, TuiInputExpireComponent, TuiInputExpireModule, TuiMoneyComponent, TuiMoneyModule, TUI_MONEY_DEFAULT_DEFAULT_OPTIONS, TUI_MONEY_OPTIONS, tuiMoneyOptionsProvider, TuiFractionPartPipe, TuiIntegerPartPipe, TuiSignSymbolPipe, tuiFormatFractionPart, tuiFormatSignSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_commerce_components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/card */ "../addon-commerce/components/card/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertion", function() { return _taiga_ui_addon_commerce_components_card__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertionMessage", function() { return _taiga_ui_addon_commerce_components_card__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertionMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardComponent", function() { return _taiga_ui_addon_commerce_components_card__WEBPACK_IMPORTED_MODULE_0__["TuiCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardModule", function() { return _taiga_ui_addon_commerce_components_card__WEBPACK_IMPORTED_MODULE_0__["TuiCardModule"]; });

/* harmony import */ var _taiga_ui_addon_commerce_components_input_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/input-card */ "../addon-commerce/components/input-card/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardTextfieldControllerFactory", function() { return _taiga_ui_addon_commerce_components_input_card__WEBPACK_IMPORTED_MODULE_1__["cardTextfieldControllerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardComponent", function() { return _taiga_ui_addon_commerce_components_input_card__WEBPACK_IMPORTED_MODULE_1__["TuiInputCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardModule", function() { return _taiga_ui_addon_commerce_components_input_card__WEBPACK_IMPORTED_MODULE_1__["TuiInputCardModule"]; });

/* harmony import */ var _taiga_ui_addon_commerce_components_input_card_grouped__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/input-card-grouped */ "../addon-commerce/components/input-card-grouped/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedComponent", function() { return _taiga_ui_addon_commerce_components_input_card_grouped__WEBPACK_IMPORTED_MODULE_2__["TuiInputCardGroupedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedModule", function() { return _taiga_ui_addon_commerce_components_input_card_grouped__WEBPACK_IMPORTED_MODULE_2__["TuiInputCardGroupedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_INPUT_CARD_GROUPED_TEXTS", function() { return _taiga_ui_addon_commerce_components_input_card_grouped__WEBPACK_IMPORTED_MODULE_2__["TUI_INPUT_CARD_GROUPED_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputGroupedTextsFactory", function() { return _taiga_ui_addon_commerce_components_input_card_grouped__WEBPACK_IMPORTED_MODULE_2__["inputGroupedTextsFactory"]; });

/* harmony import */ var _taiga_ui_addon_commerce_components_input_cvc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/input-cvc */ "../addon-commerce/components/input-cvc/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCComponent", function() { return _taiga_ui_addon_commerce_components_input_cvc__WEBPACK_IMPORTED_MODULE_3__["TuiInputCVCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCModule", function() { return _taiga_ui_addon_commerce_components_input_cvc__WEBPACK_IMPORTED_MODULE_3__["TuiInputCVCModule"]; });

/* harmony import */ var _taiga_ui_addon_commerce_components_input_expire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/input-expire */ "../addon-commerce/components/input-expire/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireComponent", function() { return _taiga_ui_addon_commerce_components_input_expire__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireModule", function() { return _taiga_ui_addon_commerce_components_input_expire__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireModule"]; });

/* harmony import */ var _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components/money */ "../addon-commerce/components/money/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyComponent", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyModule", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TuiMoneyModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_DEFAULT_DEFAULT_OPTIONS", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TUI_MONEY_DEFAULT_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_OPTIONS", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TUI_MONEY_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiMoneyOptionsProvider", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["tuiMoneyOptionsProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFractionPartPipe", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TuiFractionPartPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiIntegerPartPipe", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TuiIntegerPartPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSignSymbolPipe", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["TuiSignSymbolPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatFractionPart", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["tuiFormatFractionPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatSignSymbol", function() { return _taiga_ui_addon_commerce_components_money__WEBPACK_IMPORTED_MODULE_5__["tuiFormatSignSymbol"]; });









/***/ }),

/***/ "../addon-commerce/components/input-card-grouped/index.ts":
/*!****************************************************************!*\
  !*** ../addon-commerce/components/input-card-grouped/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputCardGroupedComponent, TuiInputCardGroupedModule, TUI_INPUT_CARD_GROUPED_TEXTS, inputGroupedTextsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_card_grouped_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedComponent", function() { return _input_card_grouped_component__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardGroupedComponent"]; });

/* harmony import */ var _input_card_grouped_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-card-grouped.module */ "../addon-commerce/components/input-card-grouped/input-card-grouped.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedModule", function() { return _input_card_grouped_module__WEBPACK_IMPORTED_MODULE_1__["TuiInputCardGroupedModule"]; });

/* harmony import */ var _input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-card-grouped.providers */ "../addon-commerce/components/input-card-grouped/input-card-grouped.providers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_INPUT_CARD_GROUPED_TEXTS", function() { return _input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_2__["TUI_INPUT_CARD_GROUPED_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputGroupedTextsFactory", function() { return _input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_2__["inputGroupedTextsFactory"]; });






/***/ }),

/***/ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts":
/*!***************************************************************************************!*\
  !*** ../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TuiInputCardGroupedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedComponent", function() { return TuiInputCardGroupedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/constants */ "../addon-commerce/constants/index.ts");
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-card-grouped.providers */ "../addon-commerce/components/input-card-grouped/input-card-grouped.providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_directives_wrapper_wrapper_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/directives/wrapper/wrapper.directive */ "../core/directives/wrapper/wrapper.directive.ts");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../cdk/directives/hovered/hovered.directive */ "../cdk/directives/hovered/hovered.directive.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../cdk/directives/prevent-default/prevent-default.directive */ "../cdk/directives/prevent-default/prevent-default.directive.ts");
/* harmony import */ var _cdk_directives_input_mode_input_mode_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../cdk/directives/input-mode/input-mode.directive */ "../cdk/directives/input-mode/input-mode.directive.ts");
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../cdk/directives/focusable/focusable.directive */ "../cdk/directives/focusable/focusable.directive.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _pipes_format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pipes/format-card/format-card.pipe */ "../addon-commerce/pipes/format-card/format-card.pipe.ts");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");

























const _c0 = ["inputCard"];
const _c1 = ["inputExpire"];
const _c2 = ["inputCVC"];
function TuiInputCardGroupedComponent_tui_wrapper_0_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiInputCardGroupedComponent_tui_wrapper_0_label_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onCardChange($event); })("focus", function TuiInputCardGroupedComponent_tui_wrapper_0_label_2_Template_input_focus_1_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formattedCard_r8 = ctx.tuiLet;
    const texts_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-input_inert", ctx_r2.cardPrefilled)("t-input_hidden", !ctx_r2.card.length && ctx_r2.focused);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r2.cardPrefilled ? "" : ctx_r2.exampleText)("autocomplete", ctx_r2.autocompleteCard)("disabled", ctx_r2.computedDisabled)("readOnly", ctx_r2.readOnly)("textMask", ctx_r2.maskCard)("tuiFocusable", ctx_r2.cardFocusable)("ngModel", formattedCard_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r2.idCard)("aria-invalid", !ctx_r2.cardPrefilled && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 22, ctx_r2.card, ctx_r2.cardValidator));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-collapsed_enable-mask", ctx_r2.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-before", ctx_r2.masked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-value_collapsed", ctx_r2.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", formattedCard_r8, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-placeholder_raised", ctx_r2.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.cardNumberText, " ");
} }
function TuiInputCardGroupedComponent_tui_wrapper_0_div_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-svg", 22);
} if (rf & 2) {
    const icon_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", icon_r15);
} }
function TuiInputCardGroupedComponent_tui_wrapper_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiInputCardGroupedComponent_tui_wrapper_0_div_17_ng_template_1_Template, 1, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r5.icon);
} }
function TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_18_Template_tui_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_19_Template_tui_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-icon_rotated", ctx_r7.open);
} }
function TuiInputCardGroupedComponent_tui_wrapper_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-wrapper", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tuiHoveredChange", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_tui_wrapper_tuiHoveredChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onHovered($event); })("tuiActiveZoneChange", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_tui_wrapper_tuiActiveZoneChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onActiveZoneChange($event); })("scroll", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_tui_wrapper_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onScroll($event); })("mousedown", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_tui_wrapper_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onMouseDown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiInputCardGroupedComponent_tui_wrapper_0_label_2_Template, 10, 25, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "tuiFormatCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onExpireChange($event); })("focus", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_input_focus_6_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onCVCChange($event); })("focus", function TuiInputCardGroupedComponent_tui_wrapper_0_Template_input_focus_12_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TuiInputCardGroupedComponent_tui_wrapper_0_div_17_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_18_Template, 1, 0, "tui-svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TuiInputCardGroupedComponent_tui_wrapper_0_tui_svg_19_Template, 1, 2, "tui-svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r0.appearance)("readOnly", ctx_r0.readOnly)("disabled", ctx_r0.computedDisabled)("focused", ctx_r0.computedFocused)("hovered", ctx_r0.computedHovered)("invalid", ctx_r0.computedInvalid)("tuiDropdown", ctx_r0.open)("tuiDropdownContent", ctx_r0.dropdown || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 42, ctx_r0.value == null ? null : ctx_r0.value.card, ctx_r0.cardPrefilled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-wrapper_active", ctx_r0.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-input_inert", !ctx_r0.expireFocusable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autocomplete", ctx_r0.autocompleteExpire)("disabled", ctx_r0.computedDisabled)("readOnly", ctx_r0.readOnly)("tuiFocusable", ctx_r0.expireFocusable)("textMask", ctx_r0.maskExpire)("ngModel", ctx_r0.expire);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0.idExpire)("name", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-placeholder_raised", ctx_r0.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.expiryText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-wrapper_active", ctx_r0.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-input_prefilled", ctx_r0.cvcPrefilled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r0.cvcPrefilled ? "\u2022\u2022\u2022" : ctx_r0.exampleTextCVC)("disabled", ctx_r0.computedDisabled)("readOnly", ctx_r0.readOnly || ctx_r0.cvcPrefilled)("autocomplete", ctx_r0.autocompleteCVC)("textMask", ctx_r0.maskCVC)("tuiFocusable", ctx_r0.cvcFocusable)("ngModel", ctx_r0.cvc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0.idCVC);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-placeholder_raised", ctx_r0.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", texts_r1.cvcText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasCleaner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasDropdown);
} }
const STUB = {
    card: ``,
    expire: ``,
    cvc: ``,
};
const ICONS = {
    ["mir" /* Mir */]: `tuiIconMir`,
    ["visa" /* Visa */]: `tuiIconVisa`,
    ["electron" /* Electron */]: `tuiIconElectron`,
    ["mastercard" /* Mastercard */]: `tuiIconMastercard`,
    ["maestro" /* Maestro */]: `tuiIconMaestro`,
};
// @dynamic
class TuiInputCardGroupedComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["AbstractTuiNullableControl"] {
    constructor(control, changeDetectorRef, elementRef, mode$, cardGroupedTexts$, appearance) {
        super(control, changeDetectorRef);
        this.elementRef = elementRef;
        this.mode$ = mode$;
        this.cardGroupedTexts$ = cardGroupedTexts$;
        this.appearance = appearance;
        this.expireInert = false;
        this.autocompleteEnabled = false;
        this.cardSrc = null; // TODO: 3.0 will be deleted `null` in v3.0
        this.exampleText = `0000 0000 0000 0000`;
        this.cardValidator = _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultCardValidator"];
        this.autofilledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.binChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropdown = ``;
        this.exampleTextCVC = `000`;
        this.maskCVC = {
            mask: new Array(3).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"]),
            guide: false,
        };
        this.maskCard = {
            mask: _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_3__["TUI_CARD_MASK"],
            guide: false,
            pipe: conformedValue => conformedValue.trim(),
        };
        this.maskExpire = {
            mask: [
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"],
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"],
                `/`,
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"],
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"],
            ],
            pipe: Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_4__["tuiCreateAutoCorrectedExpirePipe"])(),
            guide: false,
        };
        this.open = false;
    }
    set codeLength(length) {
        this.exampleTextCVC = `0`.repeat(length);
        this.maskCVC = {
            mask: new Array(length).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DIGIT_REGEXP"]),
            guide: false,
        };
    }
    get nativeFocusableElement() {
        return this.inputCard ? this.inputCard.nativeElement : null;
    }
    get focused() {
        return this.open || Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isNativeFocusedIn"])(this.elementRef.nativeElement);
    }
    get card() {
        var _a, _b;
        return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.card) !== null && _b !== void 0 ? _b : ``;
    }
    get expire() {
        var _a, _b;
        return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.expire) !== null && _b !== void 0 ? _b : ``;
    }
    get cvc() {
        var _a, _b;
        return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.cvc) !== null && _b !== void 0 ? _b : ``;
    }
    get hasCleaner() {
        var _a, _b;
        return !!((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.trim()) && !this.readOnly && !this.computedDisabled;
    }
    get hasDropdown() {
        return !!this.dropdown;
    }
    get defaultIcon() {
        const { paymentSystem } = this;
        return paymentSystem && ICONS[paymentSystem];
    }
    get icon() {
        var _a;
        return (_a = this.cardSrc) !== null && _a !== void 0 ? _a : this.defaultIcon;
    }
    get bin() {
        return !this.value || this.value.card.length < 6
            ? null
            : this.value.card.slice(0, 6);
    }
    get placeholderRaised() {
        return (this.computedFocused && !this.readOnly) || this.hasCardNumber;
    }
    get hasCardNumber() {
        var _a, _b;
        return !!((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.trim());
    }
    get idCard() {
        return `${this.id}_card`;
    }
    get idExpire() {
        return `${this.id}_expire`;
    }
    get idCVC() {
        return `${this.id}_cvc`;
    }
    get isCardCollapsed() {
        return this.isFocusable(this.card) && !this.cardFocused;
    }
    get autocompleteCard() {
        return this.autocompleteEnabled
            ? "cc-number" /* CcNumber */
            : "off" /* Off */;
    }
    get autocompleteExpire() {
        return this.autocompleteEnabled
            ? "cc-exp" /* CcExp */
            : "off" /* Off */;
    }
    get autocompleteCVC() {
        return this.autocompleteEnabled
            ? "cc-csc" /* CcCsc */
            : "off" /* Off */;
    }
    // Safari expiration date autofill workaround
    get name() {
        return this.autocompleteEnabled ? `ccexpiryyear` : null;
    }
    get cardPrefilled() {
        return !!this.card.match(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_NON_DIGIT_REGEXP"]);
    }
    get cvcPrefilled() {
        return !!this.cvc.match(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_NON_DIGIT_REGEXP"]);
    }
    get cardFocusable() {
        return this.focusable && !this.cardPrefilled;
    }
    get expireFocusable() {
        return this.isFocusable(this.card) && !this.expireInert;
    }
    get cvcFocusable() {
        return this.isFocusable(this.card);
    }
    get masked() {
        return this.cardPrefilled ? `*${this.card.slice(-4)}` : `*`;
    }
    onEsc() {
        this.open = false;
    }
    onArrow(element, step) {
        var _a;
        this.open = this.hasDropdown;
        this.changeDetectorRef.detectChanges();
        (_a = this.datalist) === null || _a === void 0 ? void 0 : _a.onKeyDownArrow(element, step);
    }
    handleOption(option) {
        var _a, _b;
        const { card = ``, expire = ``, cvc = `` } = option;
        const { bin } = this;
        const element = (!expire && ((_a = this.inputExpire) === null || _a === void 0 ? void 0 : _a.nativeElement)) || ((_b = this.inputCVC) === null || _b === void 0 ? void 0 : _b.nativeElement);
        this.updateValue({ card, expire, cvc });
        this.updateBin(bin);
        this.open = false;
        this.expireInert = !!expire;
        element === null || element === void 0 ? void 0 : element.focus();
    }
    onCardChange(card) {
        const { value, bin } = this;
        const parsed = card.split(` `).join(``);
        if (value && value.card === parsed) {
            return;
        }
        this.updateProperty(parsed, `card`);
        this.updateBin(bin);
        if (this.cardValidator(this.card) && !this.expire && this.inputExpire) {
            this.focusExpire();
        }
    }
    onExpireChange(expire) {
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        // @bad TODO: Think about a solution without mask at all
        if (!this.inputExpire) {
            return;
        }
        if (parseInt(expire.slice(0, 2), 10) > 12) {
            expire = `12${expire.slice(2)}`;
        }
        if (expire.slice(0, 2) === `00`) {
            expire = `01${expire.slice(2)}`;
        }
        this.inputExpire.nativeElement.value = expire;
        this.updateProperty(expire, `expire`);
        if (expire.length === 5) {
            this.focusCVC();
        }
    }
    onCVCChange(cvc) {
        this.updateProperty(cvc, `cvc`);
    }
    onActiveZoneChange(active) {
        this.updateFocused(active);
        this.open = active && this.open;
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onMouseDown(event) {
        Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiAssertIsHTMLElement"])(event.target);
        if (event.target.matches(`input`)) {
            return;
        }
        event.preventDefault();
        this.focusInput();
    }
    onScroll({ currentTarget }) {
        Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiAssertIsHTMLElement"])(currentTarget);
        currentTarget.scrollLeft = 0;
    }
    clear() {
        this.updateValue(null);
        this.focusCard();
    }
    toggle() {
        this.open = !this.open;
    }
    writeValue(value) {
        const { bin } = this;
        super.writeValue(value);
        this.updateBin(bin);
        this.expireInert = !!this.expire && this.cardPrefilled;
    }
    /** Public API for manual focus management */
    focusCard() {
        var _a;
        (_a = this.inputCard) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    focusExpire() {
        var _a;
        (_a = this.inputExpire) === null || _a === void 0 ? void 0 : _a.nativeElement.focus({ preventScroll: true });
    }
    focusCVC() {
        var _a;
        (_a = this.inputCVC) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    get cardFocused() {
        return !!this.inputCard && Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isNativeFocused"])(this.inputCard.nativeElement);
    }
    get paymentSystem() {
        return this.value && Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_4__["getPaymentSystem"])(this.value.card);
    }
    isFocusable(card) {
        return this.focusable && (this.cardValidator(card) || this.cardPrefilled);
    }
    updateBin(oldBin) {
        const { bin } = this;
        if (bin !== oldBin && !this.cardPrefilled) {
            this.binChange.emit(bin);
        }
    }
    updateProperty(propValue, propName) {
        const { card, expire, cvc } = this.value || STUB;
        const newValue = {
            card,
            expire,
            cvc,
        };
        newValue[propName] = propValue;
        if (!newValue.expire && !newValue.cvc && !newValue.card) {
            this.updateValue(null);
        }
        else {
            this.updateValue(newValue);
        }
    }
    focusInput() {
        var _a, _b, _c;
        const element = (this.cardFocusable && ((_a = this.inputCard) === null || _a === void 0 ? void 0 : _a.nativeElement)) ||
            (this.expireFocusable && ((_b = this.inputExpire) === null || _b === void 0 ? void 0 : _b.nativeElement)) || ((_c = this.inputCVC) === null || _c === void 0 ? void 0 : _c.nativeElement);
        element === null || element === void 0 ? void 0 : element.focus();
    }
}
TuiInputCardGroupedComponent.ɵfac = function TuiInputCardGroupedComponent_Factory(t) { return new (t || TuiInputCardGroupedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_MODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_7__["TUI_INPUT_CARD_GROUPED_TEXTS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_TEXTFIELD_APPEARANCE"])); };
TuiInputCardGroupedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputCardGroupedComponent, selectors: [["tui-input-card-grouped"]], contentQueries: function TuiInputCardGroupedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datalist = _t.first);
    } }, viewQuery: function TuiInputCardGroupedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputCard = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputExpire = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputCVC = _t.first);
    } }, hostAttrs: ["data-size", "l"], hostBindings: function TuiInputCardGroupedComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("$.data-mode.attr", function TuiInputCardGroupedComponent___data_mode_attr_HostBindingHandler() { return ctx.mode$; })("keydown.esc", function TuiInputCardGroupedComponent_keydown_esc_HostBindingHandler() { return ctx.onEsc(); })("keydown.arrowDown.prevent", function TuiInputCardGroupedComponent_keydown_arrowDown_prevent_HostBindingHandler($event) { return ctx.onArrow($event.target, 1); })("keydown.arrowUp.prevent", function TuiInputCardGroupedComponent_keydown_arrowUp_prevent_HostBindingHandler($event) { return ctx.onArrow($event.target, 0 - 1); });
    } }, inputs: { autocompleteEnabled: "autocompleteEnabled", cardSrc: "cardSrc", exampleText: "exampleText", cardValidator: "cardValidator", codeLength: "codeLength" }, outputs: { autofilledChange: "autofilledChange", binChange: "binChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["MODE_PROVIDER"],
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardGroupedComponent),
            },
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DATA_LIST_HOST"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardGroupedComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 3, consts: [["class", "t-common-wrapper", 3, "appearance", "readOnly", "disabled", "focused", "hovered", "invalid", "tuiDropdown", "tuiDropdownContent", "tuiHoveredChange", "tuiActiveZoneChange", "scroll", "mousedown", 4, "ngIf"], [1, "t-common-wrapper", 3, "appearance", "readOnly", "disabled", "focused", "hovered", "invalid", "tuiDropdown", "tuiDropdownContent", "tuiHoveredChange", "tuiActiveZoneChange", "scroll", "mousedown"], [1, "t-wrapper"], ["tuiPreventDefault", "click", 4, "tuiLet"], [1, "t-wrapper", "t-wrapper_expire"], ["tuiPreventDefault", "click"], ["type", "text", "translate", "no", "placeholder", "00/00", "automation-id", "tui-input-card-grouped__expire", "tuiInputMode", "numeric", 1, "t-input", 3, "autocomplete", "disabled", "readOnly", "tuiFocusable", "textMask", "ngModel", "ngModelChange", "focus"], ["inputExpire", ""], [1, "t-placeholder"], [1, "t-wrapper", "t-wrapper_cvc"], ["type", "text", "translate", "no", "automation-id", "tui-input-card-grouped__cvc", "tuiInputMode", "numeric", 1, "t-input", 3, "placeholder", "disabled", "readOnly", "autocomplete", "textMask", "tuiFocusable", "ngModel", "ngModelChange", "focus"], ["inputCVC", ""], [1, "t-icons"], ["polymorpheus-outlet", "", "class", "t-icon-outlet", 3, "content", 4, "ngIf"], ["src", "tuiIconCloseLarge", "class", "t-icon", 3, "click", 4, "ngIf"], ["src", "tuiIconChevronDownLarge", "class", "t-icon", 3, "t-icon_rotated", "click", 4, "ngIf"], ["type", "text", "translate", "no", "automation-id", "tui-input-card-grouped__card", "tuiInputMode", "numeric", 1, "t-input", "t-input_card", 3, "placeholder", "autocomplete", "disabled", "readOnly", "textMask", "tuiFocusable", "ngModel", "ngModelChange", "focus"], ["inputCard", ""], ["aria-hidden", "true", "translate", "no", 1, "t-collapsed"], [1, "t-collapsed-wrapper"], [1, "t-value"], ["polymorpheus-outlet", "", 1, "t-icon-outlet", 3, "content"], ["automation-id", "tui-input-card-grouped__icon", 1, "t-card", 3, "src"], ["src", "tuiIconCloseLarge", 1, "t-icon", 3, "click"], ["src", "tuiIconChevronDownLarge", 1, "t-icon", 3, "click"]], template: function TuiInputCardGroupedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiInputCardGroupedComponent_tui_wrapper_0_Template, 20, 45, "tui-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.cardGroupedTexts$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _core_directives_wrapper_wrapper_directive__WEBPACK_IMPORTED_MODULE_10__["TuiWrapperDirective"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDropdownDirective"], _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_12__["TuiHoveredDirective"], _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_13__["TuiActiveZoneDirective"], _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_14__["TuiLetDirective"], _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_15__["TuiPreventDefaultDirective"], _cdk_directives_input_mode_input_mode_directive__WEBPACK_IMPORTED_MODULE_16__["TuiInputModeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_17__["TuiFocusableDirective"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["MaskedInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__["PolymorpheusOutletComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_20__["TuiSvgComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _pipes_format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_21__["TuiFormatCardPipe"], _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_22__["TuiMapperPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: var(--tui-height-l);\n  width: 29.5rem;\n  border-radius: var(--tui-radius-m);\n}\n[data-mode='onDark'][_nghost-%COMP%] {\n  --tui-autofill: var(--tui-autofill-night);\n}\n[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%] {\n  width: 18rem;\n}\n.t-outline[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.t-common-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.t-wrapper_cvc[_ngcontent-%COMP%] {\n  margin-left: 7.1875rem;\n  transform: translate3d(100%, 0, 0);\n}\ntui-root._mobile[_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%] {\n  margin-left: 4.0625rem;\n}\n.t-wrapper_expire[_ngcontent-%COMP%] {\n  transform: translate3d(100%, 0, 0);\n}\n.t-wrapper_active[_ngcontent-%COMP%] {\n  transform: translate3d(6.5625rem, 0, 0);\n}\ntui-root._mobile[_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%] {\n  transform: translate3d(4.125rem, 0, 0);\n}\n.t-card[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  margin-right: 0.625rem;\n}\n.t-collapsed[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-01);\n  padding: 0;\n  margin: 0;\n  border-radius: inherit;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: inherit;\n  color: inherit;\n  caret-color: currentColor;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  word-break: keep-all;\n  -webkit-text-fill-color: currentColor;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 var(--tui-padding-m);\n  border: solid transparent;\n  border-width: 0 var(--border-end, 0) 0 var(--border-start, 0);\n  border-inline-start-width: var(--border-start, 0);\n  border-inline-end-width: var(--border-end, 0);\n  text-indent: var(--text-indent);\n  text-align: inherit;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: inherit;\n  resize: none;\n  border: 0;\n  padding-left: 1rem;\n  line-height: 2.25rem;\n  pointer-events: none;\n}\n.t-collapsed[_ngcontent-%COMP%]:-webkit-autofill, .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  caret-color: var(--tui-base-09);\n  border-radius: inherit;\n  color: inherit !important;\n  background-color: transparent !important;\n  -webkit-text-fill-color: var(--tui-text-01) !important;\n  border-color: var(--tui-autofill);\n  -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill) inset !important;\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill, .t-collapsed   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill, .t-collapsed   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill, [data-mode='onDark'][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-collapsed   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:hover, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:hover, .t-collapsed   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:hover, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:hover, [data-mode='onDark'][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-collapsed   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:focus, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:focus, .t-collapsed   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:focus, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:focus {\n  caret-color: var(--tui-base-09);\n  border-radius: inherit;\n  color: inherit !important;\n  background-color: transparent !important;\n  -webkit-text-fill-color: var(--tui-text-01-night) !important;\n  border-color: var(--tui-autofill-night);\n  -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill-night) inset !important;\n}\n[data-size='s'][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='s'][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size='s']   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-collapsed   tui-text-area[data-size='s'][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size='s']   [_nghost-%COMP%]:not(tui-text-area) {\n  padding: 0 var(--tui-padding-s);\n}\n[data-size='l'][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size='l']   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-collapsed   tui-text-area[data-size='l'][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size='l']   [_nghost-%COMP%]:not(tui-text-area) {\n  padding: 0 var(--tui-padding-l);\n}\n._disabled[_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-collapsed   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%] {\n  pointer-events: none;\n}\n[data-size='l'][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield), tui-primitive-textfield[data-size='l']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield) {\n  padding-top: 1.25rem;\n}\n[data-size='l'][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size='l']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.8156rem;\n  transform: translateY(-0.625rem);\n}\n[data-size='m'][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='m'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield), tui-primitive-textfield[data-size='m']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield) {\n  padding-top: 1.125rem;\n}\n[data-size='m'][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size='m'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size='m']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  transform: translateY(-0.5rem);\n}\n._hidden[_nghost-%COMP%]   input.t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%] {\n  opacity: 0;\n  text-indent: -10em;\n  -webkit-user-select: none;\n}\n.t-collapsed_enable-mask[_ngcontent-%COMP%]:before {\n  content: attr(data-before);\n}\n.t-collapsed_enable-mask[_ngcontent-%COMP%]   .t-collapsed-wrapper[_ngcontent-%COMP%] {\n  left: 1.375rem;\n}\n.t-collapsed-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.t-value[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: absolute;\n  bottom: 0;\n  right: 100%;\n  display: block;\n  transform: translate3d(100%, 0, 0);\n}\n.t-value_collapsed[_ngcontent-%COMP%] {\n  transform: translate3d(4ch, 0, 0);\n}\n.t-input[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-01);\n  padding: 0;\n  margin: 0;\n  border-radius: inherit;\n  background: none;\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: inherit;\n  color: inherit;\n  caret-color: currentColor;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  word-break: keep-all;\n  -webkit-text-fill-color: currentColor;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 var(--tui-padding-m);\n  border: solid transparent;\n  border-width: 0 var(--border-end, 0) 0 var(--border-start, 0);\n  border-inline-start-width: var(--border-start, 0);\n  border-inline-end-width: var(--border-end, 0);\n  text-indent: var(--text-indent);\n  text-align: inherit;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: inherit;\n  resize: none;\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  border: 0;\n  padding: 0 1rem;\n}\n.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  caret-color: var(--tui-base-09);\n  border-radius: inherit;\n  color: inherit !important;\n  background-color: transparent !important;\n  -webkit-text-fill-color: var(--tui-text-01) !important;\n  border-color: var(--tui-autofill);\n  -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill) inset !important;\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill, .t-input   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill, [data-mode='onDark'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:hover, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:hover, .t-input   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:hover, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:hover, [data-mode='onDark'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   tui-primitive-textfield[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:focus, tui-primitive-textfield[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:focus, .t-input   tui-text-area[data-mode='onDark'][_nghost-%COMP%]:-webkit-autofill:focus, tui-text-area[data-mode='onDark']   [_nghost-%COMP%]:-webkit-autofill:focus {\n  caret-color: var(--tui-base-09);\n  border-radius: inherit;\n  color: inherit !important;\n  background-color: transparent !important;\n  -webkit-text-fill-color: var(--tui-text-01-night) !important;\n  border-color: var(--tui-autofill-night);\n  -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill-night) inset !important;\n}\n[data-size='s'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='s'][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size='s']   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-text-area[data-size='s'][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size='s']   [_nghost-%COMP%]:not(tui-text-area) {\n  padding: 0 var(--tui-padding-s);\n}\n[data-size='l'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size='l']   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-text-area[data-size='l'][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size='l']   [_nghost-%COMP%]:not(tui-text-area) {\n  padding: 0 var(--tui-padding-l);\n}\n._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%] {\n  pointer-events: none;\n}\n[data-size='l'][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield), tui-primitive-textfield[data-size='l']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield) {\n  padding-top: 1.25rem;\n}\n[data-size='l'][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='l'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size='l']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.8156rem;\n  transform: translateY(-0.625rem);\n}\n[data-size='m'][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='m'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield), tui-primitive-textfield[data-size='m']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield) {\n  padding-top: 1.125rem;\n}\n[data-size='m'][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size='m'][_nghost-%COMP%]:not(._label-outside):not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size='m']:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill    + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  transform: translateY(-0.5rem);\n}\n._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%] {\n  opacity: 0;\n  text-indent: -10em;\n  -webkit-user-select: none;\n}\n.t-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--tui-text-03);\n}\n.t-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--tui-text-03);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--tui-text-03-night);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--tui-text-03-night);\n}\n.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), [data-mode='onDark'][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, [data-mode='onDark'][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill, [data-mode='onDark'][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill {\n  color: transparent !important;\n  -webkit-text-fill-color: transparent !important;\n}\n.t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, [data-mode='onDark'][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button {\n  pointer-events: none;\n  background-color: transparent !important;\n  -webkit-mask-image: none !important;\n}\n.t-input_inert[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.t-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.t-icon-outlet[_ngcontent-%COMP%] {\n  display: inherit;\n}\n.t-icon[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-property: all;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  display: flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  align-items: center;\n  justify-content: center;\n  color: var(--tui-text-03);\n  position: relative;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition-property: color, transform;\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%] {\n  color: var(--tui-text-03-night);\n}\n.t-icon[_ngcontent-%COMP%]:hover {\n  color: var(--tui-text-02);\n}\n._readonly[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%] {\n  color: var(--tui-text-03-night);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]:hover {\n  color: var(--tui-text-01-night);\n}\n.t-icon_rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.t-placeholder[_ngcontent-%COMP%] {\n  transition-property: transform, font-size, color, letter-spacing;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-01);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: var(--tui-text-02);\n  pointer-events: none;\n  will-change: transform;\n  transform: translateY(0);\n  \n  \n  margin: 1.125rem 1rem;\n  line-height: 1.25rem;\n}\n.t-placeholder_raised[_ngcontent-%COMP%] {\n  transform: translateY(-0.625rem);\n}\n[data-size='m'][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xs);\n  transform: translateY(-0.5rem);\n  letter-spacing: 0.025rem;\n}\n._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%] {\n  color: var(--tui-error-fill);\n}\n[data-mode='onDark']._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], [data-mode='onDark']._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%] {\n  color: var(--tui-error-fill-night);\n}\n._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size='m']._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size='l']._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  color: var(--tui-text-03);\n}\n[data-size='l'][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n}\n[data-size='l'][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%] {\n  font-size: 0.8156rem;\n}\n[data-size='m']._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size='l']._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%] {\n  color: var(--tui-text-01);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  color: var(--tui-text-02-night);\n}\n[data-size='m'][data-mode='onDark']._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size='l'][data-mode='onDark']._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%] {\n  color: var(--tui-text-01-night);\n}\n[data-mode='onDark']._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size='m'][data-mode='onDark']._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size='l'][data-mode='onDark']._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%] {\n  color: var(--tui-text-02-night);\n}\n@supports (-webkit-hyphens: none) {\n  .t-placeholder[_ngcontent-%COMP%] {\n    will-change: unset;\n    transition-property: transform, color, letter-spacing;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvaW5wdXQtY2FyZC1ncm91cGVkL2lucHV0LWNhcmQtZ3JvdXBlZC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvYWRkb24tY29tbWVyY2UvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvaW5wdXQtY2FyZC1ncm91cGVkLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvdGV4dC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3RleHRmaWVsZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSUQ7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURGSjtBQ0lJO0VBQ0kseUNBQUE7QURGUjtBQ0xBO0VBV1EsWUFBQTtBREhSO0FDT0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRExKO0FDUUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUROSjtBQ1NBO0VDaU1JLDhCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRGpNQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FETEo7QUNPSTtFQUNJLHNCQUFBO0VBQ0Esa0NBQUE7QURMUjtBQ09RO0VBQ0ksc0JBQUE7QURMWjtBQ1NJO0VBQ0ksa0NBQUE7QURQUjtBQ1VJO0VBQ0ksdUNBQUE7QURSUjtBQ1VRO0VBQ0ksc0NBQUE7QURSWjtBQ2FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRFhKO0FDY0E7RUVyRUksNEJBQUE7RUFDQSx5QkFBQTtFRDhFQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQTlEQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUV3QkosK0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0VBQ0EsaURBQUE7RUFDQSw2Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUhBQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FEbUJKO0FFdENJOzs7RUFHSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUdJLHNEQUFBO0VBQ0EsaUNBQUE7RUFDQSxxRUFBQTtBRnNDWjtBRWpESTs7Ozs7Ozs7O0VBR0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFTSSw0REFBQTtFQUNBLHVDQUFBO0VBQ0EsMkVBQUE7QUZpRFo7QUkxQ0k7OztFQUdJLCtCQUFBO0FKNENSO0FJekNJOzs7RUFHSSwrQkFBQTtBSjJDUjtBSXhDSTs7O0VBSUksb0JBQUE7QUp5Q1I7QUl0Q0k7O0VBRUksb0JBQUE7QUp3Q1I7QUlyQ1E7O0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtBSndDWjtBSXBDSTs7RUFFSSxxQkFBQTtBSnNDUjtBSW5DUTs7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0FKc0NaO0FJbENJOztFQUVJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FKb0NSO0FDcEZJO0VBQ0ksMEJBQUE7QURzRlI7QUNuRkk7RUFDSSxjQUFBO0FEcUZSO0FDakZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURtRko7QUNoRkE7RUNzSUksOEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEdElBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURvRko7QUNsRkk7RUFDSSxpQ0FBQTtBRG9GUjtBQ2hGQTtFRTNHSSw0QkFBQTtFQUNBLHlCQUFBO0VEOEVBLFVBQUE7RUFDQSxTQUFBO0VBRUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBOURBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFRXdCSiwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFRjZKQSwrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUR4SEEsU0FBQTtFQUNBLGVBQUE7QURtSEo7QUUzS0k7OztFQUdJLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBR0ksc0RBQUE7RUFDQSxpQ0FBQTtFQUNBLHFFQUFBO0FGMktaO0FFdExJOzs7Ozs7Ozs7RUFHSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQVNJLDREQUFBO0VBQ0EsdUNBQUE7RUFDQSwyRUFBQTtBRnNMWjtBSS9LSTs7O0VBR0ksK0JBQUE7QUppTFI7QUk5S0k7OztFQUdJLCtCQUFBO0FKZ0xSO0FJN0tJOzs7RUFJSSxvQkFBQTtBSjhLUjtBSTNLSTs7RUFFSSxvQkFBQTtBSjZLUjtBSTFLUTs7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0FKNktaO0FJektJOztFQUVJLHFCQUFBO0FKMktSO0FJeEtROztFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7QUoyS1o7QUl2S0k7O0VBRUksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUp5S1I7QUNwTEk7RUFDSSx5QkFBQTtBRHNMUjtBQ3ZMSTtFQUNJLHlCQUFBO0FEc0xSO0FDbkxJO0VBQ0ksK0JBQUE7QURxTFI7QUN0TEk7RUFDSSwrQkFBQTtBRHFMUjtBQ2hMUTs7Ozs7O0VBR0ksNkJBQUE7RUFDQSwrQ0FBQTtBRHFMWjtBQ2pMUTs7RUFDSSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7QURvTFo7QUNoTEk7RUFDSSxvQkFBQTtBRGtMUjtBQzlLQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURnTEo7QUM3S0E7RUFDSSxnQkFBQTtBRCtLSjtBQzVLQTtFQ3lFSSw4QkFBQTtFQUFBLHdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRWhCQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFVQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FKK0dKO0FJMUhJO0VBQ0ksK0JBQUE7QUo0SFI7QUloSEk7RUFDSSx5QkFBQTtBSmtIUjtBSS9HSTs7RUFFSSxvQkFBQTtBSmlIUjtBSTlHSTtFQUNJLCtCQUFBO0FKZ0hSO0FJOUdRO0VBQ0ksK0JBQUE7QUpnSFo7QUN4TUk7RUFDSSx5QkFBQTtBRDBNUjtBQ3RNQTtFQ2dFSSxnRUFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUN0T0EsNEJBQUE7RUFDQSx5QkFBQTtFRCtRQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUV0SUEsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VKeU9GLCtDQUErQztFQUMvQyw4Q0FBOEM7RUN0TjVDLHFCQUFBO0VBQ0Esb0JBQUE7QUR3Tko7QUkzT0k7RUFDSSxnQ0FBQTtBSjZPUjtBSTNPUTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBSjZPWjtBSTFPUTs7RUFFSSw0QkFBQTtBSjRPWjtBSXpPUTs7RUFFSSxrQ0FBQTtBSjJPWjtBSXZPSTs7O0VBR0kseUJBQUE7QUp5T1I7QUl0T0k7RUFDSSxvQkFBQTtBSndPUjtBSXRPUTtFQUNJLG9CQUFBO0FKd09aO0FJcE9JOztFQUVJLHlCQUFBO0FKc09SO0FJak9JO0VBQ0ksK0JBQUE7QUptT1I7QUloT0k7O0VBRUksK0JBQUE7QUprT1I7QUkvTkk7OztFQUdJLCtCQUFBO0FKaU9SO0FJN05JO0VBQUE7SUFFUSxrQkFBQTtJQUNBLHFEQUFBO0VKK05WO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvYWRkb24tY29tbWVyY2UvY29tcG9uZW50cy9pbnB1dC1jYXJkLWdyb3VwZWQvaW5wdXQtY2FyZC1ncm91cGVkLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbCk7XG4gIHdpZHRoOiAyOS41cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSB7XG4gIC0tdHVpLWF1dG9maWxsOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xufVxuOmhvc3QgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSB7XG4gIHdpZHRoOiAxOHJlbTtcbn1cbi50LW91dGxpbmUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnQtY29tbW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udC13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udC13cmFwcGVyX2N2YyB7XG4gIG1hcmdpbi1sZWZ0OiA3LjE4NzVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG59XG46aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIC50LXdyYXBwZXJfY3ZjIHtcbiAgbWFyZ2luLWxlZnQ6IDQuMDYyNXJlbTtcbn1cbi50LXdyYXBwZXJfZXhwaXJlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbn1cbi50LXdyYXBwZXJfYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2LjU2MjVyZW0sIDAsIDApO1xufVxuOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAudC13cmFwcGVyX2FjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNC4xMjVyZW0sIDAsIDApO1xufVxuLnQtY2FyZCB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG59XG4udC1jb2xsYXBzZWQge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIHZhcigtLXR1aS1wYWRkaW5nLW0pO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDAgdmFyKC0tYm9yZGVyLWVuZCwgMCkgMCB2YXIoLS1ib3JkZXItc3RhcnQsIDApO1xuICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB2YXIoLS1ib3JkZXItc3RhcnQsIDApO1xuICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdmFyKC0tYm9yZGVyLWVuZCwgMCk7XG4gIHRleHQtaW5kZW50OiB2YXIoLS10ZXh0LWluZGVudCk7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udC1jb2xsYXBzZWQ6LXdlYmtpdC1hdXRvZmlsbCxcbi50LWNvbGxhcHNlZDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuLnQtY29sbGFwc2VkOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1jb2xsYXBzZWQ6LXdlYmtpdC1hdXRvZmlsbCxcbi50LWNvbGxhcHNlZCA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtbW9kZT0nb25EYXJrJ10pOi13ZWJraXQtYXV0b2ZpbGwsXG4udC1jb2xsYXBzZWQgOmhvc3QtY29udGV4dCh0dWktdGV4dC1hcmVhW2RhdGEtbW9kZT0nb25EYXJrJ10pOi13ZWJraXQtYXV0b2ZpbGwsXG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWNvbGxhcHNlZDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1tb2RlPSdvbkRhcmsnXSk6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbi50LWNvbGxhcHNlZCA6aG9zdC1jb250ZXh0KHR1aS10ZXh0LWFyZWFbZGF0YS1tb2RlPSdvbkRhcmsnXSk6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbjpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gLnQtY29sbGFwc2VkOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4udC1jb2xsYXBzZWQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLW1vZGU9J29uRGFyayddKTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLW1vZGU9J29uRGFyayddKTotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbn1cbjpob3N0W2RhdGEtc2l6ZT0ncyddIC50LWNvbGxhcHNlZCxcbi50LWNvbGxhcHNlZCA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtc2l6ZT0ncyddKTpub3QodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQpLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLXNpemU9J3MnXSk6bm90KHR1aS10ZXh0LWFyZWEpIHtcbiAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1zKTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIC50LWNvbGxhcHNlZCxcbi50LWNvbGxhcHNlZCA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtc2l6ZT0nbCddKTpub3QodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQpLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLXNpemU9J2wnXSk6bm90KHR1aS10ZXh0LWFyZWEpIHtcbiAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1sKTtcbn1cbjpob3N0Ll9kaXNhYmxlZCAudC1jb2xsYXBzZWQsXG4udC1jb2xsYXBzZWQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZC5fZGlzYWJsZWQpLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYS5fZGlzYWJsZWQpIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdFtkYXRhLXNpemU9J2wnXTpub3QoLl9sYWJlbC1vdXRzaWRlKSAudC1jb2xsYXBzZWQsXG4udC1jb2xsYXBzZWQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J2wnXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuOmhvc3RbZGF0YS1zaXplPSdsJ106bm90KC5fbGFiZWwtb3V0c2lkZSkgLnQtY29sbGFwc2VkOi13ZWJraXQtYXV0b2ZpbGwgKyAudC1jb250ZW50IC50LXBsYWNlaG9sZGVyLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1zaXplPSdsJ106bm90KC5fbGFiZWwtb3V0c2lkZSkpOm5vdCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZCk6LXdlYmtpdC1hdXRvZmlsbCArIC50LWNvbnRlbnQgLnQtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuODE1NnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNXJlbSk7XG59XG46aG9zdFtkYXRhLXNpemU9J20nXTpub3QoLl9sYWJlbC1vdXRzaWRlKSAudC1jb2xsYXBzZWQsXG4udC1jb2xsYXBzZWQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J20nXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSB7XG4gIHBhZGRpbmctdG9wOiAxLjEyNXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddOm5vdCguX2xhYmVsLW91dHNpZGUpIC50LWNvbGxhcHNlZDotd2Via2l0LWF1dG9maWxsICsgLnQtY29udGVudCAudC1wbGFjZWhvbGRlcixcbi50LWNvbGxhcHNlZCA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtc2l6ZT0nbSddOm5vdCguX2xhYmVsLW91dHNpZGUpKTpub3QodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQpOi13ZWJraXQtYXV0b2ZpbGwgKyAudC1jb250ZW50IC50LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjY5cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG59XG46aG9zdC5faGlkZGVuIGlucHV0LnQtY29sbGFwc2VkLFxuLnQtY29sbGFwc2VkIDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQuX2hpZGRlbikge1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWluZGVudDogLTEwZW07XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udC1jb2xsYXBzZWRfZW5hYmxlLW1hc2s6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLWJlZm9yZSk7XG59XG4udC1jb2xsYXBzZWRfZW5hYmxlLW1hc2sgLnQtY29sbGFwc2VkLXdyYXBwZXIge1xuICBsZWZ0OiAxLjM3NXJlbTtcbn1cbi50LWNvbGxhcHNlZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnQtdmFsdWUge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG59XG4udC12YWx1ZV9jb2xsYXBzZWQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRjaCwgMCwgMCk7XG59XG4udC1pbnB1dCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICBvdXRsaW5lOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgdmFyKC0tdHVpLXBhZGRpbmctbSk7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMCB2YXIoLS1ib3JkZXItZW5kLCAwKSAwIHZhcigtLWJvcmRlci1zdGFydCwgMCk7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHZhcigtLWJvcmRlci1zdGFydCwgMCk7XG4gIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB2YXIoLS1ib3JkZXItZW5kLCAwKTtcbiAgdGV4dC1pbmRlbnQ6IHZhcigtLXRleHQtaW5kZW50KTtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHJlc2l6ZTogbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4udC1pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuLnQtaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbi50LWlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLW1vZGU9J29uRGFyayddKTotd2Via2l0LWF1dG9maWxsLFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktdGV4dC1hcmVhW2RhdGEtbW9kZT0nb25EYXJrJ10pOi13ZWJraXQtYXV0b2ZpbGwsXG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4udC1pbnB1dCA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtbW9kZT0nb25EYXJrJ10pOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4udC1pbnB1dCA6aG9zdC1jb250ZXh0KHR1aS10ZXh0LWFyZWFbZGF0YS1tb2RlPSdvbkRhcmsnXSk6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbjpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gLnQtaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1tb2RlPSdvbkRhcmsnXSk6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLW1vZGU9J29uRGFyayddKTotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbn1cbjpob3N0W2RhdGEtc2l6ZT0ncyddIC50LWlucHV0LFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J3MnXSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLXNpemU9J3MnXSk6bm90KHR1aS10ZXh0LWFyZWEpIHtcbiAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1zKTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIC50LWlucHV0LFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J2wnXSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLXNpemU9J2wnXSk6bm90KHR1aS10ZXh0LWFyZWEpIHtcbiAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1sKTtcbn1cbjpob3N0Ll9kaXNhYmxlZCAudC1pbnB1dCxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQuX2Rpc2FibGVkKSxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYS5fZGlzYWJsZWQpIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdFtkYXRhLXNpemU9J2wnXTpub3QoLl9sYWJlbC1vdXRzaWRlKSAudC1pbnB1dCxcbi50LWlucHV0IDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1zaXplPSdsJ106bm90KC5fbGFiZWwtb3V0c2lkZSkpOm5vdCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZCkge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddOm5vdCguX2xhYmVsLW91dHNpZGUpIC50LWlucHV0Oi13ZWJraXQtYXV0b2ZpbGwgKyAudC1jb250ZW50IC50LXBsYWNlaG9sZGVyLFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J2wnXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKTotd2Via2l0LWF1dG9maWxsICsgLnQtY29udGVudCAudC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44MTU2cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1cmVtKTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddOm5vdCguX2xhYmVsLW91dHNpZGUpIC50LWlucHV0LFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J20nXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSB7XG4gIHBhZGRpbmctdG9wOiAxLjEyNXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddOm5vdCguX2xhYmVsLW91dHNpZGUpIC50LWlucHV0Oi13ZWJraXQtYXV0b2ZpbGwgKyAudC1jb250ZW50IC50LXBsYWNlaG9sZGVyLFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J20nXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKTotd2Via2l0LWF1dG9maWxsICsgLnQtY29udGVudCAudC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC42OXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuOmhvc3QuX2hpZGRlbiBpbnB1dC50LWlucHV0LFxuLnQtaW5wdXQgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZC5faGlkZGVuKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtaW5kZW50OiAtMTBlbTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cbi50LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMy1uaWdodCk7XG59XG4udC1pbnB1dF9jYXJkOm5vdCgudC1pbnB1dF9oaWRkZW4pLFxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1pbnB1dF9jYXJkOm5vdCgudC1pbnB1dF9oaWRkZW4pLFxuLnQtaW5wdXRfY2FyZDpub3QoLnQtaW5wdXRfaGlkZGVuKTo6cGxhY2Vob2xkZXIsXG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWlucHV0X2NhcmQ6bm90KC50LWlucHV0X2hpZGRlbik6OnBsYWNlaG9sZGVyLFxuLnQtaW5wdXRfY2FyZDpub3QoLnQtaW5wdXRfaGlkZGVuKTotd2Via2l0LWF1dG9maWxsLFxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1pbnB1dF9jYXJkOm5vdCgudC1pbnB1dF9oaWRkZW4pOi13ZWJraXQtYXV0b2ZpbGwge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4udC1pbnB1dF9jYXJkOjotd2Via2l0LWNyZWRpdC1jYXJkLWF1dG8tZmlsbC1idXR0b24sXG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWlucHV0X2NhcmQ6Oi13ZWJraXQtY3JlZGl0LWNhcmQtYXV0by1maWxsLWJ1dHRvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cbi50LWlucHV0X2luZXJ0IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udC1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50LWljb24tb3V0bGV0IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbi50LWljb24ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIHRyYW5zZm9ybTtcbn1cbjpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gLnQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMy1uaWdodCk7XG59XG4udC1pY29uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbn1cbjpob3N0Ll9yZWFkb25seSAudC1pY29uLFxuOmhvc3QuX2Rpc2FibGVkIC50LWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gLnQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMy1uaWdodCk7XG59XG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWljb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xufVxuLnQtaWNvbl9yb3RhdGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi50LXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBmb250LXNpemUsIGNvbG9yLCBsZXR0ZXItc3BhY2luZztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuICAvKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuICBtYXJnaW46IDEuMTI1cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnQtcGxhY2Vob2xkZXJfcmFpc2VkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNXJlbSk7XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSAudC1wbGFjZWhvbGRlcl9yYWlzZWQge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG59XG46aG9zdC5faW52YWxpZDpub3QoLl9mb2N1c2VkKSAudC1wbGFjZWhvbGRlcl9yYWlzZWQsXG46aG9zdC5faW52YWxpZDpub3QoLl9mb2N1c2VkKTpob3ZlciAudC1wbGFjZWhvbGRlcl9yYWlzZWQge1xuICBjb2xvcjogdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXS5faW52YWxpZDpub3QoLl9mb2N1c2VkKSAudC1wbGFjZWhvbGRlcl9yYWlzZWQsXG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddLl9pbnZhbGlkOm5vdCguX2ZvY3VzZWQpOmhvdmVyIC50LXBsYWNlaG9sZGVyX3JhaXNlZCB7XG4gIGNvbG9yOiB2YXIoLS10dWktZXJyb3ItZmlsbC1uaWdodCk7XG59XG46aG9zdC5fZm9jdXNlZCAudC1wbGFjZWhvbGRlcixcbjpob3N0W2RhdGEtc2l6ZT0nbSddLl9mb2N1c2VkLl9sYWJlbC1vdXRzaWRlIC50LXBsYWNlaG9sZGVyLFxuOmhvc3RbZGF0YS1zaXplPSdsJ10uX2ZvY3VzZWQuX2xhYmVsLW91dHNpZGUgLnQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xufVxuOmhvc3RbZGF0YS1zaXplPSdsJ10gLnQtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIC50LXBsYWNlaG9sZGVyX3JhaXNlZCB7XG4gIGZvbnQtc2l6ZTogMC44MTU2cmVtO1xufVxuOmhvc3RbZGF0YS1zaXplPSdtJ10uX2ZvY3VzZWQ6bm90KC5fbGFiZWwtb3V0c2lkZSkgLnQtcGxhY2Vob2xkZXIsXG46aG9zdFtkYXRhLXNpemU9J2wnXS5fZm9jdXNlZDpub3QoLl9sYWJlbC1vdXRzaWRlKSAudC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG59XG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyLW5pZ2h0KTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddW2RhdGEtbW9kZT0nb25EYXJrJ10uX2ZvY3VzZWQ6bm90KC5fbGFiZWwtb3V0c2lkZSkgLnQtcGxhY2Vob2xkZXIsXG46aG9zdFtkYXRhLXNpemU9J2wnXVtkYXRhLW1vZGU9J29uRGFyayddLl9mb2N1c2VkOm5vdCguX2xhYmVsLW91dHNpZGUpIC50LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbn1cbjpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10uX2ZvY3VzZWQgLnQtcGxhY2Vob2xkZXIsXG46aG9zdFtkYXRhLXNpemU9J20nXVtkYXRhLW1vZGU9J29uRGFyayddLl9mb2N1c2VkLl9sYWJlbC1vdXRzaWRlIC50LXBsYWNlaG9sZGVyLFxuOmhvc3RbZGF0YS1zaXplPSdsJ11bZGF0YS1tb2RlPSdvbkRhcmsnXS5fZm9jdXNlZC5fbGFiZWwtb3V0c2lkZSAudC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMi1uaWdodCk7XG59XG5Ac3VwcG9ydHMgKC13ZWJraXQtaHlwaGVuczogbm9uZSkge1xuICAudC1wbGFjZWhvbGRlciB7XG4gICAgd2lsbC1jaGFuZ2U6IHVuc2V0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgY29sb3IsIGxldHRlci1zcGFjaW5nO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbkB3aWR0aC1mdWxsOiAoNDcyIC8gMTZyZW0pO1xuQHdpZHRoLW1vYmlsZTogMThyZW07XG5Ab2Zmc2V0LWZ1bGw6IDcuMTg3NXJlbTtcbkBvZmZzZXQtc21hbGw6IDQuMDYyNXJlbTtcbkB3cmFwcGVyLW9mZnNldC1mdWxsOiA2LjU2MjVyZW07XG5Ad3JhcHBlci1vZmZzZXQtc21hbGw6IDQuMTI1cmVtO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LWwpO1xuICAgIHdpZHRoOiBAd2lkdGgtZnVsbDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xuXG4gICAgJltkYXRhLW1vZGU9J29uRGFyayddIHtcbiAgICAgICAgLS10dWktYXV0b2ZpbGw6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgfVxuXG4gICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtbW9iaWxlO1xuICAgIH1cbn1cblxuLnQtb3V0bGluZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udC1jb21tb24td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udC13cmFwcGVyIHtcbiAgICAudHJhbnNpdGlvbih0cmFuc2Zvcm0pO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX2N2YyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAb2Zmc2V0LWZ1bGw7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAmIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBAb2Zmc2V0LXNtYWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9leHBpcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIH1cblxuICAgICZfYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAd3JhcHBlci1vZmZzZXQtZnVsbCwgMCwgMCk7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCh0dWktcm9vdC5fbW9iaWxlKSAmIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQHdyYXBwZXItb2Zmc2V0LXNtYWxsLCAwLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnQtY2FyZCB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG59XG5cbi50LWNvbGxhcHNlZCB7XG4gICAgLnRleHRmaWVsZC1pbnB1dCgpO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmX2VuYWJsZS1tYXNrOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1iZWZvcmUpO1xuICAgIH1cblxuICAgICZfZW5hYmxlLW1hc2sgLnQtY29sbGFwc2VkLXdyYXBwZXIge1xuICAgICAgICBsZWZ0OiAxLjM3NXJlbTtcbiAgICB9XG59XG5cbi50LWNvbGxhcHNlZC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udC12YWx1ZSB7XG4gICAgLnRyYW5zaXRpb24odHJhbnNmb3JtKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG5cbiAgICAmX2NvbGxhcHNlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNGNoLCAwLCAwKTtcbiAgICB9XG59XG5cbi50LWlucHV0IHtcbiAgICAudGV4dGZpZWxkLWlucHV0KCk7XG4gICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLW1vZGU9J29uRGFyayddICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzLW5pZ2h0KTtcbiAgICB9XG5cbiAgICAmX2NhcmQsXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmX2NhcmQge1xuICAgICAgICAmOm5vdCgudC1pbnB1dF9oaWRkZW4pLFxuICAgICAgICAmOm5vdCgudC1pbnB1dF9oaWRkZW4pOjpwbGFjZWhvbGRlcixcbiAgICAgICAgJjpub3QoLnQtaW5wdXRfaGlkZGVuKTotd2Via2l0LWF1dG9maWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vaW5zcGVjdGlvbiBDc3NJbnZhbGlkUHNldWRvU2VsZWN0b3JcbiAgICAgICAgJjo6LXdlYmtpdC1jcmVkaXQtY2FyZC1hdXRvLWZpbGwtYnV0dG9uIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9pbmVydCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuLnQtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMC43NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udC1pY29uLW91dGxldCB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLnQtaWNvbiB7XG4gICAgLnRyYW5zaXRpb24odHJhbnNmb3JtKTtcbiAgICAuaWNvbi1idXR0b24oKTtcblxuICAgICZfcm90YXRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxufVxuXG4udC1wbGFjZWhvbGRlciB7XG4gICAgLnRleHRmaWVsZC1wbGFjZWhvbGRlcigpO1xuICAgIG1hcmdpbjogMS4xMjVyZW0gMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIiwiLnRleHQtYmFzaWMoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuXG4vLyBoZWFkaW5nc1xuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMSgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTEpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMigpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTIpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMygpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTMpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTQpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNSgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNigpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xufVxuXG4vLyB0eXBlZCB0ZXh0XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHkteGwtYm9sZCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS14bCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1sLWJvbGQoQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LWwpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJiB3aGVuIChAdHlwZSA9IDMpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LWwoQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LWwpO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJiB3aGVuIChAdHlwZSA9IDMpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LW0tYm9sZChAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktbShAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktcy1ib2xkKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1zKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS14cygpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbn1cblxuLy90YWJzLCB0YWdzLCBjYXRlZ29yeVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1jYXB0aW9uLWwtYm9sZCgpIHtcbiAgICAuZm9udCgwLjgxMjVyZW0sIDEuMjVyZW0sIGJvbGQpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtY2FwdGlvbi1sKCkge1xuICAgIC5mb250KDAuODEyNXJlbSwgMS4yNXJlbSwgbm9ybWFsKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNjI1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWNhcHRpb24tYm9sZCgpIHtcbiAgICAuZm9udCgwLjY4NzVyZW0sIDFyZW0sIGJvbGQpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtY2FwdGlvbigpIHtcbiAgICAuZm9udCgwLjY4NzVyZW0sIDFyZW0sIG5vcm1hbCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vLyBtaXhpbnMgZm9yIGZvbnQgcHJvcGVydGllc1xuXG4vLyBkZXByZWNhdGVkXG4uZm9udF9oZWFkaW5nKEBzaXplLCBAbGluZS1oZWlnaHQ6IG5vcm1hbCkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQ7XG4gICAgZm9udC1zaXplOiBAc2l6ZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdHVpLWZvbnQtaGVhZGluZyk7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi5mb250KEBzaXplLCBAbGluZS1oZWlnaHQ6ICdub25lJywgQHdlaWdodDogbm9ybWFsLCBAY29sb3I6ICdub25lJykge1xuICAgIGZvbnQtd2VpZ2h0OiBAd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogQHNpemU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXR1aS1mb250LXRleHQpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4uZm9udChAc2l6ZSwgQGxpbmUtaGVpZ2h0OiAnbm9uZScsIEB3ZWlnaHQ6IG5vcm1hbCwgQGNvbG9yOiAnbm9uZScpIHdoZW4gbm90IChAbGluZS1oZWlnaHQgPSAnbm9uZScpIHtcbiAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0O1xufVxuXG4vLyBkZXByZWNhdGVkXG4uZm9udChAc2l6ZSwgQGxpbmUtaGVpZ2h0OiAnbm9uZScsIEB3ZWlnaHQ6IG5vcm1hbCwgQGNvbG9yOiAnbm9uZScpIHdoZW4gbm90IChAY29sb3IgPSAnbm9uZScpIHtcbiAgICBjb2xvcjogQGNvbG9yO1xufVxuIiwiQGxpbmUtaGVpZ2h0LWw6IDEuMjVyZW07XG5cbi50ZXh0ZmllbGQtaG9zdCgpIHtcbiAgICAudGV4dC1iYXNpYygpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAmW2RhdGEtc2l6ZT0ncyddIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LXMpO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LXMpO1xuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS10dWktaGVpZ2h0LXMpO1xuICAgIH1cblxuICAgICZbZGF0YS1zaXplPSdtJ10ge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbSk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbSk7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLXR1aS1oZWlnaHQtbSk7XG4gICAgfVxuXG4gICAgJltkYXRhLXNpemU9J2wnXSB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1sKTtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1sKTtcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tdHVpLWhlaWdodC1sKTtcbiAgICAgICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1sO1xuICAgIH1cbn1cblxuLnRleHRmaWVsZC1jb250ZW50KCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tdHVpLXBhZGRpbmctbSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J3MnXSAmIHtcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1zKTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J2wnXSAmIHtcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1sKTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW07XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1zaXplPSdtJ10gJjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4udGV4dGZpZWxkLWlucHV0KCkge1xuICAgIC50ZXh0LWJhc2ljKCk7XG4gICAgLmNsZWFyaW5wdXQoKTtcbiAgICAuZnVsbHNpemUoKTtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXR1aS1wYWRkaW5nLW0pO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIHZhcigtLWJvcmRlci1lbmQsIDApIDAgdmFyKC0tYm9yZGVyLXN0YXJ0LCAwKTtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB2YXIoLS1ib3JkZXItc3RhcnQsIDApO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB2YXIoLS1ib3JkZXItZW5kLCAwKTtcbiAgICB0ZXh0LWluZGVudDogdmFyKC0tdGV4dC1pbmRlbnQpO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgcmVzaXplOiBub25lO1xuXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmLFxuICAgIDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1tb2RlPSdvbkRhcmsnXSksXG4gICAgOmhvc3QtY29udGV4dCh0dWktdGV4dC1hcmVhW2RhdGEtbW9kZT0nb25EYXJrJ10pIHtcbiAgICAgICAgLmF1dG9maWxsKGRhcmspO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtc2l6ZT0ncyddICYsXG4gICAgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J3MnXSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSxcbiAgICA6aG9zdC1jb250ZXh0KHR1aS10ZXh0LWFyZWFbZGF0YS1zaXplPSdzJ10pOm5vdCh0dWktdGV4dC1hcmVhKSB7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tdHVpLXBhZGRpbmctcyk7XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1zaXplPSdsJ10gJixcbiAgICA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkW2RhdGEtc2l6ZT0nbCddKTpub3QodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGQpLFxuICAgIDpob3N0LWNvbnRleHQodHVpLXRleHQtYXJlYVtkYXRhLXNpemU9J2wnXSk6bm90KHR1aS10ZXh0LWFyZWEpIHtcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS10dWktcGFkZGluZy1sKTtcbiAgICB9XG5cbiAgICA6aG9zdC5fZGlzYWJsZWQgJixcbiAgICA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkLl9kaXNhYmxlZCksXG4gICAgOmhvc3QtY29udGV4dCh0dWktdGV4dC1hcmVhLl9kaXNhYmxlZCkge1xuICAgICAgICAvLyBAYmFkIFRPRE86IHJlc2VhcmNoIHdoeSB5b3UgY2FuIHJlYWNoIGRpc2FibGVkIHRleHRmaWVsZCB3aXRoIG1hc2sgaW5zaWRlIGEgbGFiZWwgd2l0aG91dCB0aGF0XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbCddOm5vdCguX2xhYmVsLW91dHNpZGUpICYsXG4gICAgOmhvc3QtY29udGV4dCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZFtkYXRhLXNpemU9J2wnXTpub3QoLl9sYWJlbC1vdXRzaWRlKSk6bm90KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBAbGluZS1oZWlnaHQtbDtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciByYWlzaW5nIHBsYWNlaG9sZGVyIGluIHRlbXBvcmFyeSBhdXRvZmlsbFxuICAgICAgICAmOi13ZWJraXQtYXV0b2ZpbGwgKyAudC1jb250ZW50IC50LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTU2cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J20nXTpub3QoLl9sYWJlbC1vdXRzaWRlKSAmLFxuICAgIDpob3N0LWNvbnRleHQodHVpLXByaW1pdGl2ZS10ZXh0ZmllbGRbZGF0YS1zaXplPSdtJ106bm90KC5fbGFiZWwtb3V0c2lkZSkpOm5vdCh0dWktcHJpbWl0aXZlLXRleHRmaWVsZCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMS4xMjVyZW07XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgcmFpc2luZyBwbGFjZWhvbGRlciBpbiB0ZW1wb3JhcnkgYXV0b2ZpbGxcbiAgICAgICAgJjotd2Via2l0LWF1dG9maWxsICsgLnQtY29udGVudCAudC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjlyZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdC5faGlkZGVuIGlucHV0JixcbiAgICA6aG9zdC1jb250ZXh0KHR1aS1wcmltaXRpdmUtdGV4dGZpZWxkLl9oaWRkZW4pIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0xMGVtOyAvLyBIaWRlIGJsaW5raW5nIGNhcmV0IGV2ZW4gaW4gSUVcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLy8gSGlkZSBibGlua2luZyBjYXJldCBpbiBtb2JpbGUgc2FmYXJpXG4gICAgfVxufVxuXG4udGV4dGZpZWxkLXdyYXBwZXIoKSB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuMjVyZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbi50ZXh0ZmllbGQtcGxhY2Vob2xkZXIoKSB7XG4gICAgLnRyYW5zaXRpb24ofid0cmFuc2Zvcm0sIGZvbnQtc2l6ZSwgY29sb3IsIGxldHRlci1zcGFjaW5nJyk7XG4gICAgLnRleHQtYmFzaWMoKTtcbiAgICAudGV4dC1vdmVyZmxvdygpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cbiAgICAmX3JhaXNlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVyZW0pO1xuXG4gICAgICAgIDpob3N0W2RhdGEtc2l6ZT0nbSddICYge1xuICAgICAgICAgICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdC5faW52YWxpZDpub3QoLl9mb2N1c2VkKSAmLFxuICAgICAgICA6aG9zdC5faW52YWxpZDpub3QoLl9mb2N1c2VkKTpob3ZlciAmIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10dWktZXJyb3ItZmlsbCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdFtkYXRhLW1vZGU9J29uRGFyayddLl9pbnZhbGlkOm5vdCguX2ZvY3VzZWQpICYsXG4gICAgICAgIDpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10uX2ludmFsaWQ6bm90KC5fZm9jdXNlZCk6aG92ZXIgJiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdHVpLWVycm9yLWZpbGwtbmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOmhvc3QuX2ZvY3VzZWQgJixcbiAgICA6aG9zdFtkYXRhLXNpemU9J20nXS5fZm9jdXNlZC5fbGFiZWwtb3V0c2lkZSAmLFxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbCddLl9mb2N1c2VkLl9sYWJlbC1vdXRzaWRlICYge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbCddICYge1xuICAgICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcblxuICAgICAgICAmX3JhaXNlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODE1NnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbSddLl9mb2N1c2VkOm5vdCguX2xhYmVsLW91dHNpZGUpICYsXG4gICAgOmhvc3RbZGF0YS1zaXplPSdsJ10uX2ZvY3VzZWQ6bm90KC5fbGFiZWwtb3V0c2lkZSkgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG4gICAgfVxuXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4gICAgLy8gdGV4dGZpZWxkLWxpZ2h0XG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyLW5pZ2h0KTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J20nXVtkYXRhLW1vZGU9J29uRGFyayddLl9mb2N1c2VkOm5vdCguX2xhYmVsLW91dHNpZGUpICYsXG4gICAgOmhvc3RbZGF0YS1zaXplPSdsJ11bZGF0YS1tb2RlPSdvbkRhcmsnXS5fZm9jdXNlZDpub3QoLl9sYWJlbC1vdXRzaWRlKSAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLW1vZGU9J29uRGFyayddLl9mb2N1c2VkICYsXG4gICAgOmhvc3RbZGF0YS1zaXplPSdtJ11bZGF0YS1tb2RlPSdvbkRhcmsnXS5fZm9jdXNlZC5fbGFiZWwtb3V0c2lkZSAmLFxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbCddW2RhdGEtbW9kZT0nb25EYXJrJ10uX2ZvY3VzZWQuX2xhYmVsLW91dHNpZGUgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMi1uaWdodCk7XG4gICAgfVxuICAgIC8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbiAgICBAc3VwcG9ydHMgKC13ZWJraXQtaHlwaGVuczogbm9uZSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB1bnNldDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgY29sb3IsIGxldHRlci1zcGFjaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5wdXQtaWNvbigpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzLW5pZ2h0KTtcbiAgICB9XG59XG5cbi5pY29uLWJ1dHRvbigpIHtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIC5pbnB1dC1pY29uKCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCB0cmFuc2Zvcm07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbiAgICB9XG5cbiAgICA6aG9zdC5fcmVhZG9ubHkgJixcbiAgICA6aG9zdC5fZGlzYWJsZWQgJiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMy1uaWdodCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGV4dGZpZWxkKCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgLnRleHRmaWVsZC1ob3N0KCk7XG4gICAgfVxuXG4gICAgLnQtaW5wdXQge1xuICAgICAgICAudGV4dGZpZWxkLWlucHV0KCk7XG4gICAgfVxuXG4gICAgLnQtY29udGVudCB7XG4gICAgICAgIC50ZXh0ZmllbGQtY29udGVudCgpO1xuICAgIH1cblxuICAgIC50LXdyYXBwZXIge1xuICAgICAgICAudGV4dGZpZWxkLXdyYXBwZXIoKTtcbiAgICB9XG5cbiAgICAudC1wbGFjZWhvbGRlciB7XG4gICAgICAgIC50ZXh0ZmllbGQtcGxhY2Vob2xkZXIoKTtcbiAgICB9XG5cbiAgICAudC1jbGVhbmVyIHtcbiAgICAgICAgLmljb24tYnV0dG9uKCk7XG4gICAgfVxuXG4gICAgLy8gQGJhZCBUT0RPOiBSZWZhY3RvciB0aGlzIGFuZCBpbnRlcmFjdGl2ZSBpY29ucyB0b2dldGhlclxuICAgIC50LWljb24ge1xuICAgICAgICAuaW5wdXQtaWNvbigpO1xuXG4gICAgICAgICZfbGVmdCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMiAqIEBzcGFjZSAwIC1Ac3BhY2U7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAtQHNwYWNlO1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDIgKiBAc3BhY2U7XG5cbiAgICAgICAgICAgIDpob3N0W2RhdGEtc2l6ZT0ncyddICYge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBAc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardGroupedComponent.prototype, "autocompleteEnabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardGroupedComponent.prototype, "cardSrc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardGroupedComponent.prototype, "exampleText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardGroupedComponent.prototype, "cardValidator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiRequiredSetter"])()
], TuiInputCardGroupedComponent.prototype, "codeLength", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiInputCardGroupedComponent.prototype, "isFocusable", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputCardGroupedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-card-grouped`,
                templateUrl: `./input-card-grouped.template.html`,
                styleUrls: [`./input-card-grouped.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["MODE_PROVIDER"],
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardGroupedComponent),
                    },
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_DATA_LIST_HOST"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardGroupedComponent),
                    },
                ],
                host: {
                    '($.data-mode.attr)': `mode$`,
                    'data-size': `l`,
                },
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_MODE"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_7__["TUI_INPUT_CARD_GROUPED_TEXTS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_TEXTFIELD_APPEARANCE"]]
            }] }]; }, { inputCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`inputCard`]
        }], inputExpire: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`inputExpire`]
        }], inputCVC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`inputCVC`]
        }], autocompleteEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cardSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], exampleText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cardValidator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], codeLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autofilledChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], binChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], datalist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListComponent"]]
        }], onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: [`keydown.esc`]
        }], onArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: [`keydown.arrowDown.prevent`, [`$event.target`, `1`]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: [`keydown.arrowUp.prevent`, [`$event.target`, `-1`]]
        }], isFocusable: [] }); })();


/***/ }),

/***/ "../addon-commerce/components/input-card-grouped/input-card-grouped.module.ts":
/*!************************************************************************************!*\
  !*** ../addon-commerce/components/input-card-grouped/input-card-grouped.module.ts ***!
  \************************************************************************************/
/*! exports provided: TuiInputCardGroupedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedModule", function() { return TuiInputCardGroupedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/pipes */ "../addon-commerce/pipes/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _input_card_grouped_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-card-grouped.component */ "../addon-commerce/components/input-card-grouped/input-card-grouped.component.ts");










class TuiInputCardGroupedModule {
}
TuiInputCardGroupedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiInputCardGroupedModule });
TuiInputCardGroupedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiInputCardGroupedModule_Factory(t) { return new (t || TuiInputCardGroupedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiFocusableModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiWrapperModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiInputModeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiPreventDefaultModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
            _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiInputCardGroupedModule, { declarations: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputCardGroupedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiFocusableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiWrapperModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiInputModeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiPreventDefaultModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
        _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardModule"]], exports: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputCardGroupedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputCardGroupedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiFocusableModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiWrapperModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiHoveredModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiInputModeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMapperPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiPreventDefaultModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiLetModule"],
                    _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardModule"],
                ],
                declarations: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputCardGroupedComponent"]],
                exports: [_input_card_grouped_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputCardGroupedComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/input-card-grouped/input-card-grouped.providers.ts":
/*!***************************************************************************************!*\
  !*** ../addon-commerce/components/input-card-grouped/input-card-grouped.providers.ts ***!
  \***************************************************************************************/
/*! exports provided: TUI_INPUT_CARD_GROUPED_TEXTS, inputGroupedTextsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_INPUT_CARD_GROUPED_TEXTS", function() { return TUI_INPUT_CARD_GROUPED_TEXTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputGroupedTextsFactory", function() { return inputGroupedTextsFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-commerce/tokens */ "../addon-commerce/tokens/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/tokens */ "../core/tokens/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







const TUI_INPUT_CARD_GROUPED_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`InputCardGrouped texts`, {
    factory: () => inputGroupedTextsFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["WINDOW"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_CARD_NUMBER_TEXTS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_CARD_EXPIRY_TEXTS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_CARD_CVC_TEXTS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__["TUI_MEDIA"])),
});
// eslint-disable-next-line @typescript-eslint/naming-convention
function inputGroupedTextsFactory(windowRef, cardNumberTexts, expiryTexts, cvcTexts, { desktopSmall }) {
    const media = windowRef.matchMedia(`screen and (min-width: ${(desktopSmall - 1) / 16}em)`);
    return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["typedFromEvent"])(media, `change`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Number(media.matches)),
        cardNumberTexts,
        expiryTexts,
        cvcTexts,
    ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([index, cardNumber, expiry, cvcTexts]) => ({
        cardNumberText: cardNumber[index],
        expiryText: expiry[index],
        cvcText: cvcTexts[index],
    })));
}


/***/ }),

/***/ "../addon-commerce/components/input-card/index.ts":
/*!********************************************************!*\
  !*** ../addon-commerce/components/input-card/index.ts ***!
  \********************************************************/
/*! exports provided: cardTextfieldControllerFactory, TuiInputCardComponent, TuiInputCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-card.component */ "../addon-commerce/components/input-card/input-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardTextfieldControllerFactory", function() { return _input_card_component__WEBPACK_IMPORTED_MODULE_0__["cardTextfieldControllerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardComponent", function() { return _input_card_component__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardComponent"]; });

/* harmony import */ var _input_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-card.module */ "../addon-commerce/components/input-card/input-card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardModule", function() { return _input_card_module__WEBPACK_IMPORTED_MODULE_1__["TuiInputCardModule"]; });





/***/ }),

/***/ "../addon-commerce/components/input-card/input-card.component.ts":
/*!***********************************************************************!*\
  !*** ../addon-commerce/components/input-card/input-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: cardTextfieldControllerFactory, TuiInputCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTextfieldControllerFactory", function() { return cardTextfieldControllerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardComponent", function() { return TuiInputCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/constants */ "../addon-commerce/constants/index.ts");
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../kit/directives/value-accessor/value-accessor.directive */ "../kit/directives/value-accessor/value-accessor.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
















const _c0 = ["*"];
const icons = {
    ["mir" /* Mir */]: `tuiIconMir`,
    ["visa" /* Visa */]: `tuiIconVisa`,
    ["electron" /* Electron */]: `tuiIconElectron`,
    ["mastercard" /* Mastercard */]: `tuiIconMastercard`,
    ["maestro" /* Maestro */]: `tuiIconMaestro`,
};
// eslint-disable-next-line @typescript-eslint/naming-convention
function cardTextfieldControllerFactory(directive) {
    directive = directive || new _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldExampleTextDirective"]();
    directive.exampleText = `0000 0000 0000 0000`;
    return directive;
}
// @dynamic
class TuiInputCardComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["AbstractTuiControl"] {
    constructor(control, changeDetectorRef) {
        super(control, changeDetectorRef);
        this.cardSrc = null;
        this.autocompleteEnabled = false;
        this.binChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textMaskOptions = {
            mask: _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_3__["TUI_CARD_MASK"],
            guide: false,
            pipe: conformedValue => conformedValue.trim(),
        };
    }
    get nativeFocusableElement() {
        return this.input ? this.input.nativeFocusableElement : null;
    }
    get focused() {
        return !!this.input && this.input.focused;
    }
    get icon() {
        if (this.cardSrc !== null) {
            return this.cardSrc;
        }
        const { paymentSystem } = this;
        return paymentSystem ? icons[paymentSystem] : null;
    }
    get autocomplete() {
        return this.autocompleteEnabled
            ? "cc-number" /* CcNumber */
            : "off" /* Off */;
    }
    get paymentSystem() {
        return Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_4__["getPaymentSystem"])(this.value);
    }
    get bin() {
        return this.value.length < 6 ? null : this.value.slice(0, 6);
    }
    get formattedCard() {
        return this.value
            .split(``)
            .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
            .join(``);
    }
    onValueChange(value) {
        const parsed = value.split(` `).join(``);
        const currentBin = this.bin;
        this.updateValue(parsed);
        const newBin = this.bin;
        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    writeValue(value) {
        const currentBin = this.bin;
        super.writeValue(value);
        const newBin = this.bin;
        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }
    getFallbackValue() {
        return ``;
    }
}
TuiInputCardComponent.ɵfac = function TuiInputCardComponent_Factory(t) { return new (t || TuiInputCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TuiInputCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputCardComponent, selectors: [["tui-input-card"]], viewQuery: function TuiInputCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiPrimitiveTextfieldComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { cardSrc: "cardSrc", autocompleteEnabled: "autocompleteEnabled" }, outputs: { binChange: "binChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardComponent),
            },
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_TEXTFIELD_EXAMPLE_TEXT"],
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldExampleTextDirective"]]],
                useFactory: cardTextfieldControllerFactory,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 12, consts: [["tuiValueAccessor", "", "tuiTextfieldInputMode", "numeric", 1, "t-input", 3, "tuiTextfieldAutocomplete", "tuiTextfieldCustomContent", "readOnly", "disabled", "focusable", "nativeId", "invalid", "pseudoHovered", "pseudoPressed", "pseudoFocused", "textMask", "value", "valueChange", "focusedChange", "hoveredChange"]], template: function TuiInputCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-primitive-textfield", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TuiInputCardComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiInputCardComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) { return ctx.onFocused($event); })("hoveredChange", function TuiInputCardComponent_Template_tui_primitive_textfield_hoveredChange_0_listener($event) { return ctx.onHovered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiTextfieldAutocomplete", ctx.autocomplete)("tuiTextfieldCustomContent", ctx.icon)("readOnly", ctx.readOnly)("disabled", ctx.disabled)("focusable", ctx.focusable)("nativeId", ctx.nativeId)("invalid", ctx.computedInvalid)("pseudoHovered", ctx.pseudoHovered)("pseudoPressed", ctx.pseudoPressed)("pseudoFocused", ctx.pseudoFocused)("textMask", ctx.textMaskOptions)("value", ctx.formattedCard);
    } }, directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_7__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_8__["TuiPrimitiveTextfieldDirective"], _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_9__["TuiValueAccessorDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldCustomContentDirective"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["MaskedInputDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-radius: var(--tui-radius-m);\n  text-align: left;\n}\n.t-input[_ngcontent-%COMP%] {\n  border-radius: inherit;\n  text-align: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvaW5wdXQtY2FyZC9pbnB1dC1jYXJkLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9hZGRvbi1jb21tZXJjZS9jb21wb25lbnRzL2lucHV0LWNhcmQvaW5wdXQtY2FyZC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBREtKO0FDRkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FESUoiLCJmaWxlIjoicHJvamVjdHMvYWRkb24tY29tbWVyY2UvY29tcG9uZW50cy9pbnB1dC1jYXJkL2lucHV0LWNhcmQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50LWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardComponent.prototype, "cardSrc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiInputCardComponent.prototype, "autocompleteEnabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-card`,
                templateUrl: `./input-card.template.html`,
                styleUrls: [`./input-card.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCardComponent),
                    },
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_TEXTFIELD_EXAMPLE_TEXT"],
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldExampleTextDirective"]]],
                        useFactory: cardTextfieldControllerFactory,
                    },
                ],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiPrimitiveTextfieldComponent"]]
        }], cardSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autocompleteEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], binChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-commerce/components/input-card/input-card.module.ts":
/*!********************************************************************!*\
  !*** ../addon-commerce/components/input-card/input-card.module.ts ***!
  \********************************************************************/
/*! exports provided: TuiInputCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardModule", function() { return TuiInputCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-card.component */ "../addon-commerce/components/input-card/input-card.component.ts");






class TuiInputCardModule {
}
TuiInputCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiInputCardModule });
TuiInputCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiInputCardModule_Factory(t) { return new (t || TuiInputCardModule)(); }, imports: [[
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiInputCardModule, { declarations: [_input_card_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardComponent"]], imports: [angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"]], exports: [_input_card_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
                ],
                declarations: [_input_card_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardComponent"]],
                exports: [_input_card_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/input-cvc/index.ts":
/*!*******************************************************!*\
  !*** ../addon-commerce/components/input-cvc/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiInputCVCComponent, TuiInputCVCModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_cvc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-cvc.component */ "../addon-commerce/components/input-cvc/input-cvc.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCComponent", function() { return _input_cvc_component__WEBPACK_IMPORTED_MODULE_0__["TuiInputCVCComponent"]; });

/* harmony import */ var _input_cvc_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-cvc.module */ "../addon-commerce/components/input-cvc/input-cvc.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCModule", function() { return _input_cvc_module__WEBPACK_IMPORTED_MODULE_1__["TuiInputCVCModule"]; });





/***/ }),

/***/ "../addon-commerce/components/input-cvc/input-cvc.component.ts":
/*!*********************************************************************!*\
  !*** ../addon-commerce/components/input-cvc/input-cvc.component.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputCVCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCComponent", function() { return TuiInputCVCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../kit/directives/value-accessor/value-accessor.directive */ "../kit/directives/value-accessor/value-accessor.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);














const _c0 = ["*"];
class TuiInputCVCComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["AbstractTuiControl"] {
    constructor(control, changeDetectorRef, textfieldLabelOutside) {
        super(control, changeDetectorRef);
        this.textfieldLabelOutside = textfieldLabelOutside;
        this.autocompleteEnabled = false;
        this.exampleText = `000`;
        this.textMaskOptions = {
            mask: new Array(3).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_DIGIT_REGEXP"]),
            guide: false,
        };
    }
    set length(length) {
        this.exampleText = `0`.repeat(length);
        this.textMaskOptions = {
            mask: new Array(length).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_DIGIT_REGEXP"]),
            guide: false,
        };
    }
    get nativeFocusableElement() {
        return this.input ? this.input.nativeFocusableElement : null;
    }
    get focused() {
        return !!this.input && this.input.focused;
    }
    get autocomplete() {
        return this.autocompleteEnabled
            ? "cc-csc" /* CcCsc */
            : "off" /* Off */;
    }
    get computedExampleText() {
        return this.textfieldLabelOutside.labelOutside ? `` : this.exampleText;
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onCopy() { }
    onValueChange(value) {
        this.updateValue(value);
    }
    getFallbackValue() {
        return ``;
    }
}
TuiInputCVCComponent.ɵfac = function TuiInputCVCComponent_Factory(t) { return new (t || TuiInputCVCComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_TEXTFIELD_LABEL_OUTSIDE"])); };
TuiInputCVCComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputCVCComponent, selectors: [["tui-input-cvc"]], viewQuery: function TuiInputCVCComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiPrimitiveTextfieldComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { autocompleteEnabled: "autocompleteEnabled", length: "length" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCVCComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 11, consts: [["tuiValueAccessor", "", "tuiTextfieldInputMode", "numeric", 1, "t-input", 3, "tuiTextfieldExampleText", "disabled", "readOnly", "nativeId", "textMask", "invalid", "focusable", "pseudoHovered", "pseudoPressed", "pseudoFocused", "value", "valueChange", "focusedChange", "hoveredChange", "copy.prevent"]], template: function TuiInputCVCComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-primitive-textfield", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TuiInputCVCComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiInputCVCComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) { return ctx.onFocused($event); })("hoveredChange", function TuiInputCVCComponent_Template_tui_primitive_textfield_hoveredChange_0_listener($event) { return ctx.onHovered($event); })("copy.prevent", function TuiInputCVCComponent_Template_tui_primitive_textfield_copy_prevent_0_listener() { return ctx.onCopy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiTextfieldExampleText", ctx.computedExampleText)("disabled", ctx.disabled)("readOnly", ctx.readOnly)("nativeId", ctx.nativeId)("textMask", ctx.textMaskOptions)("invalid", ctx.computedInvalid)("focusable", ctx.focusable)("pseudoHovered", ctx.pseudoHovered)("pseudoPressed", ctx.pseudoPressed)("pseudoFocused", ctx.pseudoFocused)("value", ctx.value);
    } }, directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_6__["TuiPrimitiveTextfieldDirective"], _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_7__["TuiValueAccessorDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldExampleTextDirective"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["MaskedInputDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 11rem;\n  border-radius: var(--tui-radius-m);\n  text-align: left;\n}\n.t-input[_ngcontent-%COMP%] {\n  border-radius: inherit;\n  text-align: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvaW5wdXQtY3ZjL2lucHV0LWN2Yy5zdHlsZS5sZXNzIiwicHJvamVjdHMvYWRkb24tY29tbWVyY2UvY29tcG9uZW50cy9pbnB1dC1jdmMvaW5wdXQtY3ZjLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jb21tZXJjZS9jb21wb25lbnRzL2lucHV0LWN2Yy9pbnB1dC1jdmMuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDExcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQtaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiInputCVCComponent.prototype, "autocompleteEnabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiRequiredSetter"])()
], TuiInputCVCComponent.prototype, "length", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputCVCComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-cvc`,
                templateUrl: `./input-cvc.template.html`,
                styleUrls: [`./input-cvc.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputCVCComponent),
                    },
                ],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_TEXTFIELD_LABEL_OUTSIDE"]]
            }] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiPrimitiveTextfieldComponent"]]
        }], autocompleteEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-commerce/components/input-cvc/input-cvc.module.ts":
/*!******************************************************************!*\
  !*** ../addon-commerce/components/input-cvc/input-cvc.module.ts ***!
  \******************************************************************/
/*! exports provided: TuiInputCVCModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCModule", function() { return TuiInputCVCModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_cvc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-cvc.component */ "../addon-commerce/components/input-cvc/input-cvc.component.ts");






class TuiInputCVCModule {
}
TuiInputCVCModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiInputCVCModule });
TuiInputCVCModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiInputCVCModule_Factory(t) { return new (t || TuiInputCVCModule)(); }, imports: [[
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiHintControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiInputCVCModule, { declarations: [_input_cvc_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCComponent"]], imports: [angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiHintControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"]], exports: [_input_cvc_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCVCModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiHintControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
                ],
                declarations: [_input_cvc_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCComponent"]],
                exports: [_input_cvc_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/input-expire/index.ts":
/*!**********************************************************!*\
  !*** ../addon-commerce/components/input-expire/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExpireComponent, TuiInputExpireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_expire_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-expire.component */ "../addon-commerce/components/input-expire/input-expire.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireComponent", function() { return _input_expire_component__WEBPACK_IMPORTED_MODULE_0__["TuiInputExpireComponent"]; });

/* harmony import */ var _input_expire_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-expire.module */ "../addon-commerce/components/input-expire/input-expire.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireModule", function() { return _input_expire_module__WEBPACK_IMPORTED_MODULE_1__["TuiInputExpireModule"]; });





/***/ }),

/***/ "../addon-commerce/components/input-expire/input-expire.component.ts":
/*!***************************************************************************!*\
  !*** ../addon-commerce/components/input-expire/input-expire.component.ts ***!
  \***************************************************************************/
/*! exports provided: TuiInputExpireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireComponent", function() { return TuiInputExpireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../kit/directives/value-accessor/value-accessor.directive */ "../kit/directives/value-accessor/value-accessor.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);















const _c0 = ["*"];
class TuiInputExpireComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["AbstractTuiControl"] {
    constructor(control, changeDetectorRef) {
        super(control, changeDetectorRef);
        this.autocompleteEnabled = false;
        this.textMaskOptions = {
            mask: [
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_DIGIT_REGEXP"],
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_DIGIT_REGEXP"],
                `/`,
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_DIGIT_REGEXP"],
                _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_DIGIT_REGEXP"],
            ],
            pipe: Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_3__["tuiCreateAutoCorrectedExpirePipe"])(),
            guide: false,
        };
    }
    get nativeFocusableElement() {
        return this.input ? this.input.nativeFocusableElement : null;
    }
    get focused() {
        return !!this.input && this.input.focused;
    }
    get autocomplete() {
        return this.autocompleteEnabled
            ? "cc-exp" /* CcExp */
            : "off" /* Off */;
    }
    onValueChange(value) {
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        // @bad TODO: Think about a solution without mask at all
        if (!this.input || !this.input.nativeFocusableElement) {
            return;
        }
        if (parseInt(value.slice(0, 2), 10) > 12) {
            value = `12${value.slice(2)}`;
        }
        if (value.slice(0, 2) === `00`) {
            value = `01${value.slice(2)}`;
        }
        this.input.nativeFocusableElement.value = value;
        if (this.value !== value) {
            this.updateValue(value);
        }
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    getFallbackValue() {
        return ``;
    }
}
TuiInputExpireComponent.ɵfac = function TuiInputExpireComponent_Factory(t) { return new (t || TuiInputExpireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TuiInputExpireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiInputExpireComponent, selectors: [["tui-input-expire"]], viewQuery: function TuiInputExpireComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { autocompleteEnabled: "autocompleteEnabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputExpireComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 10, consts: [["tuiValueAccessor", "", "tuiTextfieldInputMode", "numeric", "tuiTextfieldExampleText", "00/00", 1, "t-input", 3, "tuiTextfieldAutocomplete", "nativeId", "disabled", "readOnly", "invalid", "pseudoHovered", "pseudoPressed", "pseudoFocused", "textMask", "value", "valueChange", "focusedChange", "hoveredChange"]], template: function TuiInputExpireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-primitive-textfield", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TuiInputExpireComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiInputExpireComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) { return ctx.onFocused($event); })("hoveredChange", function TuiInputExpireComponent_Template_tui_primitive_textfield_hoveredChange_0_listener($event) { return ctx.onHovered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiTextfieldAutocomplete", ctx.autocomplete)("nativeId", ctx.nativeId)("disabled", ctx.disabled)("readOnly", ctx.readOnly)("invalid", ctx.computedInvalid)("pseudoHovered", ctx.pseudoHovered)("pseudoPressed", ctx.pseudoPressed)("pseudoFocused", ctx.pseudoFocused)("textMask", ctx.textMaskOptions)("value", ctx.value);
    } }, directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_6__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_7__["TuiPrimitiveTextfieldDirective"], _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_8__["TuiValueAccessorDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldAutocompleteDirective"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["MaskedInputDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 11rem;\n  border-radius: var(--tui-radius-m);\n  text-align: left;\n}\n.t-input[_ngcontent-%COMP%] {\n  border-radius: inherit;\n  text-align: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvaW5wdXQtZXhwaXJlL2lucHV0LWV4cGlyZS5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvYWRkb24tY29tbWVyY2UvY29tcG9uZW50cy9pbnB1dC1leHBpcmUvaW5wdXQtZXhwaXJlLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QURLSjtBQ0ZBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBRElKIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvaW5wdXQtZXhwaXJlL2lucHV0LWV4cGlyZS5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50LWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udC1pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiInputExpireComponent.prototype, "autocompleteEnabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiInputExpireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-input-expire`,
                templateUrl: `./input-expire.template.html`,
                styleUrls: [`./input-expire.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_FOCUSABLE_ITEM_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiInputExpireComponent),
                    },
                ],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"]]
        }], autocompleteEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-commerce/components/input-expire/input-expire.module.ts":
/*!************************************************************************!*\
  !*** ../addon-commerce/components/input-expire/input-expire.module.ts ***!
  \************************************************************************/
/*! exports provided: TuiInputExpireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireModule", function() { return TuiInputExpireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_expire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-expire.component */ "../addon-commerce/components/input-expire/input-expire.component.ts");






class TuiInputExpireModule {
}
TuiInputExpireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiInputExpireModule });
TuiInputExpireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiInputExpireModule_Factory(t) { return new (t || TuiInputExpireModule)(); }, imports: [[
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiInputExpireModule, { declarations: [_input_expire_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireComponent"]], imports: [angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"]], exports: [_input_expire_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExpireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TuiTextfieldControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TuiValueAccessorModule"],
                ],
                declarations: [_input_expire_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireComponent"]],
                exports: [_input_expire_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/money/index.ts":
/*!***************************************************!*\
  !*** ../addon-commerce/components/money/index.ts ***!
  \***************************************************/
/*! exports provided: TuiMoneyComponent, TuiMoneyModule, TUI_MONEY_DEFAULT_DEFAULT_OPTIONS, TUI_MONEY_OPTIONS, tuiMoneyOptionsProvider, TuiFractionPartPipe, TuiIntegerPartPipe, TuiSignSymbolPipe, tuiFormatFractionPart, tuiFormatSignSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _money_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyComponent", function() { return _money_component__WEBPACK_IMPORTED_MODULE_0__["TuiMoneyComponent"]; });

/* harmony import */ var _money_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money.module */ "../addon-commerce/components/money/money.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyModule", function() { return _money_module__WEBPACK_IMPORTED_MODULE_1__["TuiMoneyModule"]; });

/* harmony import */ var _money_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./money-options */ "../addon-commerce/components/money/money-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_DEFAULT_DEFAULT_OPTIONS", function() { return _money_options__WEBPACK_IMPORTED_MODULE_2__["TUI_MONEY_DEFAULT_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_OPTIONS", function() { return _money_options__WEBPACK_IMPORTED_MODULE_2__["TUI_MONEY_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiMoneyOptionsProvider", function() { return _money_options__WEBPACK_IMPORTED_MODULE_2__["tuiMoneyOptionsProvider"]; });

/* harmony import */ var _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/fraction-part.pipe */ "../addon-commerce/components/money/pipes/fraction-part.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFractionPartPipe", function() { return _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_3__["TuiFractionPartPipe"]; });

/* harmony import */ var _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/integer-part.pipe */ "../addon-commerce/components/money/pipes/integer-part.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiIntegerPartPipe", function() { return _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiIntegerPartPipe"]; });

/* harmony import */ var _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/sign-symbol.pipe */ "../addon-commerce/components/money/pipes/sign-symbol.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSignSymbolPipe", function() { return _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiSignSymbolPipe"]; });

/* harmony import */ var _utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/format-fraction-part */ "../addon-commerce/components/money/utils/format-fraction-part.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatFractionPart", function() { return _utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_6__["tuiFormatFractionPart"]; });

/* harmony import */ var _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/format-sign-symbol */ "../addon-commerce/components/money/utils/format-sign-symbol.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatSignSymbol", function() { return _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_7__["tuiFormatSignSymbol"]; });











/***/ }),

/***/ "../addon-commerce/components/money/money-options.ts":
/*!***********************************************************!*\
  !*** ../addon-commerce/components/money/money-options.ts ***!
  \***********************************************************/
/*! exports provided: TUI_MONEY_DEFAULT_DEFAULT_OPTIONS, TUI_MONEY_OPTIONS, tuiMoneyOptionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_DEFAULT_DEFAULT_OPTIONS", function() { return TUI_MONEY_DEFAULT_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_OPTIONS", function() { return TUI_MONEY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiMoneyOptionsProvider", function() { return tuiMoneyOptionsProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS = {
    decimal: `not-zero`,
    currency: "RUB" /* Ruble */,
    sign: `negative-only`,
    colored: false,
    precision: 2,
    singleColor: false,
};
const TUI_MONEY_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Default parameters for money component`, {
    factory: () => TUI_MONEY_DEFAULT_DEFAULT_OPTIONS,
});
const tuiMoneyOptionsProvider = (options) => ({
    provide: TUI_MONEY_OPTIONS,
    useValue: Object.assign(Object.assign({}, TUI_MONEY_DEFAULT_DEFAULT_OPTIONS), options),
});


/***/ }),

/***/ "../addon-commerce/components/money/money.component.ts":
/*!*************************************************************!*\
  !*** ../addon-commerce/components/money/money.component.ts ***!
  \*************************************************************/
/*! exports provided: TuiMoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyComponent", function() { return TuiMoneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _money_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./money-options */ "../addon-commerce/components/money/money-options.ts");
/* harmony import */ var _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/format-sign-symbol */ "../addon-commerce/components/money/utils/format-sign-symbol.ts");
/* harmony import */ var _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/sign-symbol.pipe */ "../addon-commerce/components/money/pipes/sign-symbol.pipe.ts");
/* harmony import */ var _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/integer-part.pipe */ "../addon-commerce/components/money/pipes/integer-part.pipe.ts");
/* harmony import */ var _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/fraction-part.pipe */ "../addon-commerce/components/money/pipes/fraction-part.pipe.ts");
/* harmony import */ var _pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");










class TuiMoneyComponent {
    constructor(options) {
        this.options = options;
        this.value = NaN;
        this.decimal = this.options.decimal;
        this.currency = this.options.currency;
        this.sign = this.options.sign;
        this.colored = this.options.colored;
        this.precision = this.options.precision;
        this.singleColor = this.options.singleColor;
    }
    get signSymbol() {
        return Object(_utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_4__["tuiFormatSignSymbol"])(this.value, this.sign);
    }
    get red() {
        return (this.colored &&
            (this.signSymbol === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["CHAR_MINUS"] ||
                (this.value < 0 && this.sign !== `force-positive`)));
    }
    get green() {
        return (this.colored &&
            (this.signSymbol === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["CHAR_PLUS"] ||
                (this.value > 0 && this.sign !== `force-negative`)));
    }
    get inheritColor() {
        return this.singleColor || (this.value === 0 && this.colored);
    }
}
TuiMoneyComponent.ɵfac = function TuiMoneyComponent_Factory(t) { return new (t || TuiMoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_money_options__WEBPACK_IMPORTED_MODULE_3__["TUI_MONEY_OPTIONS"])); };
TuiMoneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiMoneyComponent, selectors: [["tui-money"]], hostVars: 6, hostBindings: function TuiMoneyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_red", ctx.red)("_green", ctx.green)("_inherit-color", ctx.inheritColor);
    } }, inputs: { value: "value", decimal: "decimal", currency: "currency", sign: "sign", colored: "colored", precision: "precision", singleColor: "singleColor" }, decls: 9, vars: 16, consts: [["automation-id", "tui-money__sign", 3, "textContent"], ["automation-id", "tui-money__integer-part", 3, "textContent"], [1, "t-lighter"], ["automation-id", "tui-money__fraction-part", 3, "textContent"], ["automation-id", "tui-money__currency", 1, "t-currency", 3, "textContent"]], template: function TuiMoneyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "tuiSignSymbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "tuiIntegerPart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "tuiFractionPart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "tuiCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 4, ctx.value, ctx.sign));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, ctx.value, ctx.precision));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 10, ctx.value, ctx.decimal, ctx.precision));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 14, ctx.currency));
    } }, pipes: [_pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiSignSymbolPipe"], _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_6__["TuiIntegerPartPipe"], _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_7__["TuiFractionPartPipe"], _pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["TuiCurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  white-space: nowrap;\n}\n._red[_nghost-%COMP%] {\n  color: var(--tui-negative);\n}\n._green[_nghost-%COMP%] {\n  color: var(--tui-positive);\n}\n[_nghost-%COMP%]:not(._inherit-color)   .t-lighter[_ngcontent-%COMP%] {\n  opacity: var(--tui-disabled-opacity);\n}\n.t-currency[_ngcontent-%COMP%]:not(:empty) {\n  padding-left: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvbW9uZXkvbW9uZXkuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNvbW1lcmNlL2NvbXBvbmVudHMvbW9uZXkvbW9uZXkuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksbUJBQUE7QURLSjtBQ0hJO0VBQ0ksMEJBQUE7QURLUjtBQ0ZJO0VBQ0ksMEJBQUE7QURJUjtBQ0NJO0VBQ0ksb0NBQUE7QURDUjtBQ0dBO0VBQ0ksb0JBQUE7QURESiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jb21tZXJjZS9jb21wb25lbnRzL21vbmV5L21vbmV5LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdC5fcmVkIHtcbiAgY29sb3I6IHZhcigtLXR1aS1uZWdhdGl2ZSk7XG59XG46aG9zdC5fZ3JlZW4ge1xuICBjb2xvcjogdmFyKC0tdHVpLXBvc2l0aXZlKTtcbn1cbjpob3N0Om5vdCguX2luaGVyaXQtY29sb3IpIC50LWxpZ2h0ZXIge1xuICBvcGFjaXR5OiB2YXIoLS10dWktZGlzYWJsZWQtb3BhY2l0eSk7XG59XG4udC1jdXJyZW5jeTpub3QoOmVtcHR5KSB7XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICYuX3JlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktbmVnYXRpdmUpO1xuICAgIH1cblxuICAgICYuX2dyZWVuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1wb3NpdGl2ZSk7XG4gICAgfVxufVxuXG4udC1saWdodGVyIHtcbiAgICA6aG9zdDpub3QoLl9pbmhlcml0LWNvbG9yKSAmIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tdHVpLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbn1cblxuLnQtY3VycmVuY3k6bm90KDplbXB0eSkge1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "decimal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "currency", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "sign", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "colored", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "precision", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiMoneyComponent.prototype, "singleColor", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiMoneyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-money`,
                templateUrl: `./money.template.html`,
                styleUrls: [`./money.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_money_options__WEBPACK_IMPORTED_MODULE_3__["TUI_MONEY_OPTIONS"]]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], decimal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colored: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], precision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], singleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], red: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._red`]
        }], green: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._green`]
        }], inheritColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._inherit-color`]
        }] }); })();


/***/ }),

/***/ "../addon-commerce/components/money/money.module.ts":
/*!**********************************************************!*\
  !*** ../addon-commerce/components/money/money.module.ts ***!
  \**********************************************************/
/*! exports provided: TuiMoneyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyModule", function() { return TuiMoneyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-commerce/pipes */ "../addon-commerce/pipes/index.ts");
/* harmony import */ var _money_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/fraction-part.pipe */ "../addon-commerce/components/money/pipes/fraction-part.pipe.ts");
/* harmony import */ var _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/integer-part.pipe */ "../addon-commerce/components/money/pipes/integer-part.pipe.ts");
/* harmony import */ var _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/sign-symbol.pipe */ "../addon-commerce/components/money/pipes/sign-symbol.pipe.ts");








class TuiMoneyModule {
}
TuiMoneyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiMoneyModule });
TuiMoneyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiMoneyModule_Factory(t) { return new (t || TuiMoneyModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_2__["TuiCurrencyPipeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiMoneyModule, { declarations: [_money_component__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyComponent"],
        _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiFractionPartPipe"],
        _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiIntegerPartPipe"],
        _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_6__["TuiSignSymbolPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_2__["TuiCurrencyPipeModule"]], exports: [_money_component__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiMoneyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_2__["TuiCurrencyPipeModule"]],
                declarations: [
                    _money_component__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyComponent"],
                    _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_4__["TuiFractionPartPipe"],
                    _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_5__["TuiIntegerPartPipe"],
                    _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_6__["TuiSignSymbolPipe"],
                ],
                exports: [_money_component__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/money/pipes/fraction-part.pipe.ts":
/*!**********************************************************************!*\
  !*** ../addon-commerce/components/money/pipes/fraction-part.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: TuiFractionPartPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFractionPartPipe", function() { return TuiFractionPartPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format-fraction-part */ "../addon-commerce/components/money/utils/format-fraction-part.ts");




class TuiFractionPartPipe {
    constructor(numberFormat) {
        this.numberFormat = numberFormat;
    }
    transform(value, decimal, precision) {
        return Object(_utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_2__["tuiFormatFractionPart"])({
            value,
            decimal,
            precision,
            numberFormat: this.numberFormat,
        });
    }
}
TuiFractionPartPipe.ɵfac = function TuiFractionPartPipe_Factory(t) { return new (t || TuiFractionPartPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_NUMBER_FORMAT"])); };
TuiFractionPartPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiFractionPart", type: TuiFractionPartPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFractionPartPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: `tuiFractionPart` }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_NUMBER_FORMAT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../addon-commerce/components/money/pipes/integer-part.pipe.ts":
/*!*********************************************************************!*\
  !*** ../addon-commerce/components/money/pipes/integer-part.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: TuiIntegerPartPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiIntegerPartPipe", function() { return TuiIntegerPartPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");



class TuiIntegerPartPipe {
    constructor(numberFormat) {
        this.numberFormat = numberFormat;
    }
    transform(value, precision) {
        return Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(Math.floor(Math.abs(Number(value.toFixed(precision)))), null, this.numberFormat.decimalSeparator, this.numberFormat.thousandSeparator);
    }
}
TuiIntegerPartPipe.ɵfac = function TuiIntegerPartPipe_Factory(t) { return new (t || TuiIntegerPartPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_NUMBER_FORMAT"])); };
TuiIntegerPartPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiIntegerPart", type: TuiIntegerPartPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiIntegerPartPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: `tuiIntegerPart` }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_NUMBER_FORMAT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../addon-commerce/components/money/pipes/sign-symbol.pipe.ts":
/*!********************************************************************!*\
  !*** ../addon-commerce/components/money/pipes/sign-symbol.pipe.ts ***!
  \********************************************************************/
/*! exports provided: TuiSignSymbolPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSignSymbolPipe", function() { return TuiSignSymbolPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format-sign-symbol */ "../addon-commerce/components/money/utils/format-sign-symbol.ts");



class TuiSignSymbolPipe {
    transform(value, sign) {
        return Object(_utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_1__["tuiFormatSignSymbol"])(value, sign);
    }
}
TuiSignSymbolPipe.ɵfac = function TuiSignSymbolPipe_Factory(t) { return new (t || TuiSignSymbolPipe)(); };
TuiSignSymbolPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiSignSymbol", type: TuiSignSymbolPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSignSymbolPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: `tuiSignSymbol` }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/components/money/utils/format-fraction-part.ts":
/*!************************************************************************!*\
  !*** ../addon-commerce/components/money/utils/format-fraction-part.ts ***!
  \************************************************************************/
/*! exports provided: tuiFormatFractionPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiFormatFractionPart", function() { return tuiFormatFractionPart; });
function tuiFormatFractionPart(options) {
    const { value, decimal, numberFormat, precision } = options;
    const fraction = value.toFixed(precision).split(`.`)[1];
    const shouldShow = decimal !== `never` && (decimal === `always` || !!parseInt(fraction, 10));
    return shouldShow ? `${numberFormat.decimalSeparator}${fraction}` : ``;
}


/***/ }),

/***/ "../addon-commerce/components/money/utils/format-sign-symbol.ts":
/*!**********************************************************************!*\
  !*** ../addon-commerce/components/money/utils/format-sign-symbol.ts ***!
  \**********************************************************************/
/*! exports provided: tuiFormatSignSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiFormatSignSymbol", function() { return tuiFormatSignSymbol; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");

function tuiFormatSignSymbol(value, sign) {
    if (sign === `never` || !value || (sign === `negative-only` && value > 0)) {
        return ``;
    }
    if (sign === `force-negative` || (value < 0 && sign !== `force-positive`)) {
        return _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["CHAR_MINUS"];
    }
    return _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["CHAR_PLUS"];
}


/***/ }),

/***/ "../addon-commerce/constants/card-holder-mask.ts":
/*!*******************************************************!*\
  !*** ../addon-commerce/constants/card-holder-mask.ts ***!
  \*******************************************************/
/*! exports provided: cardHolderMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHolderMask", function() { return cardHolderMask; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");

const ALLOWED_REGEXP = /[A-Z]| /;
const MAP = {
    А: `F`,
    В: `D`,
    Г: `U`,
    Д: `L`,
    Е: `T`,
    З: `P`,
    И: `B`,
    Й: `Q`,
    К: `R`,
    Л: `K`,
    М: `V`,
    Н: `Y`,
    О: `J`,
    П: `G`,
    Р: `H`,
    С: `C`,
    Т: `N`,
    У: `E`,
    Ф: `A`,
    Ц: `W`,
    Ч: `X`,
    Ш: `I`,
    Щ: `O`,
    Ы: `S`,
    Ь: `M`,
    Я: `Z`,
};
function toEnglishUppercase(char) {
    const uppercase = char.toUpperCase();
    const result = ALLOWED_REGEXP.test(uppercase) ? uppercase : MAP[uppercase];
    return result || null;
}
const cardHolderMask = Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["tuiCreateCorrectionMask"])(ALLOWED_REGEXP, toEnglishUppercase);


/***/ }),

/***/ "../addon-commerce/constants/card-mask.ts":
/*!************************************************!*\
  !*** ../addon-commerce/constants/card-mask.ts ***!
  \************************************************/
/*! exports provided: TUI_CARD_MASK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_MASK", function() { return TUI_CARD_MASK; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");

/**
 * @internal
 */
const TUI_CARD_MASK = [
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    ` `,
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    ` `,
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    ` `,
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    ` `,
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_DIGIT_REGEXP"],
];


/***/ }),

/***/ "../addon-commerce/constants/default-card-validator.ts":
/*!*************************************************************!*\
  !*** ../addon-commerce/constants/default-card-validator.ts ***!
  \*************************************************************/
/*! exports provided: tuiDefaultCardValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultCardValidator", function() { return tuiDefaultCardValidator; });
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");

const tuiDefaultCardValidator = card => card.length > 11 && Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__["isCardLengthValid"])(card) && Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__["isCardNumberValid"])(card);


/***/ }),

/***/ "../addon-commerce/constants/index.ts":
/*!********************************************!*\
  !*** ../addon-commerce/constants/index.ts ***!
  \********************************************/
/*! exports provided: cardHolderMask, TUI_CARD_MASK, tuiDefaultCardValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_holder_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-holder-mask */ "../addon-commerce/constants/card-holder-mask.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardHolderMask", function() { return _card_holder_mask__WEBPACK_IMPORTED_MODULE_0__["cardHolderMask"]; });

/* harmony import */ var _card_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-mask */ "../addon-commerce/constants/card-mask.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_MASK", function() { return _card_mask__WEBPACK_IMPORTED_MODULE_1__["TUI_CARD_MASK"]; });

/* harmony import */ var _default_card_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-card-validator */ "../addon-commerce/constants/default-card-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultCardValidator", function() { return _default_card_validator__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultCardValidator"]; });






/***/ }),

/***/ "../addon-commerce/enums/currency-code.ts":
/*!************************************************!*\
  !*** ../addon-commerce/enums/currency-code.ts ***!
  \************************************************/
/*! exports provided: TuiCurrencyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyCode", function() { return TuiCurrencyCode; });
/**
 * **Active ISO 4217 numeric currency codes**
 *
 * @description The ISO 4217 classification is used to describe alphabetic and numeric currency codes.
 * @description Numeric code is also called "number-3".
 *
 * @link https://en.wikipedia.org/wiki/ISO_4217
 */
var TuiCurrencyCode;
(function (TuiCurrencyCode) {
    /**
     * Russian ruble
     *
     * @description Numeric code: 643
     * @description Alphabetic code: RUB
     * @description Countries and territories: Russia
     * @description Currency symbol: ₽
     */
    TuiCurrencyCode["Ruble"] = "643";
    /**
     * Euro
     *
     * @description Numeric code: 978
     * @description Alphabetic code: EUR
     * @description Countries and territories: Åland Islands (AX), European Union (EU), Andorra (AD), Austria (AT), Belgium (BE), Cyprus (CY), Estonia (EE), Finland (FI), France (FR), French Southern and Antarctic Lands (TF), Germany (DE), Greece (GR), Guadeloupe (GP), Ireland (IE), Italy (IT), Latvia (LV), Lithuania (LT), Luxembourg (LU), Malta (MT), French Guiana (GF), Martinique (MQ), Mayotte (YT), Monaco (MC), Montenegro (ME), Netherlands (NL), Portugal (PT), Réunion (RE), Saint Barthélemy (BL), Saint Martin (MF), Saint Pierre and Miquelon (PM), San Marino (SM), Slovakia (SK), Slovenia (SI), Spain (ES), Vatican City (VA)
     * @description Currency symbol: €
     */
    TuiCurrencyCode["Euro"] = "978";
    /**
     * United States dollar
     *
     * @description Numeric code: 840
     * @description Alphabetic code: USD
     * @description Countries and territories: United States, American Samoa (AS), British Indian Ocean Territory (IO) (also uses GBP), British Virgin Islands (VG), Caribbean Netherlands (BQ – Bonaire, Sint Eustatius and Saba), Ecuador (EC), El Salvador (SV), Guam (GU), Marshall Islands (MH), Federated States of Micronesia (FM), Northern Mariana Islands (MP), Palau (PW), Panama (PA) (as well as Panamanian Balboa), Puerto Rico (PR), Timor-Leste (TL), Turks and Caicos Islands (TC), U.S. Virgin Islands (VI), United States Minor Outlying Islands (UM)
     * @description Currency symbol: $
     */
    TuiCurrencyCode["Dollar"] = "840";
    /**
     * Pound sterling
     *
     * @description Numeric code: 826
     * @description Alphabetic code: GBP
     * @description Countries and territories: United Kingdom, Isle of Man (IM, see Manx pound), Jersey (JE, see Jersey pound), Guernsey (GG, see Guernsey pound), Tristan da Cunha (SH-TA)
     * @description Currency symbol: £
     */
    TuiCurrencyCode["Pound"] = "826";
    /**
     * Thai baht
     *
     * @description Numeric code: 764
     * @description Alphabetic code: THB
     * @description Countries and territories: Thailand
     * @description Currency symbol: ฿
     */
    TuiCurrencyCode["Baht"] = "764";
    /**
     * Turkish lira
     *
     * @description Numeric code: 949
     * @description Alphabetic code: TRY
     * @description Countries and territories: Turkey
     * @description Currency symbol: ₺
     */
    TuiCurrencyCode["TurkishLira"] = "949";
    /**
     * Chinese yuan
     *
     * @description Numeric code: 156
     * @description Alphabetic code: CNY
     * @description Countries and territories: China
     * @description Currency symbol: CN¥
     */
    TuiCurrencyCode["YuanRenminbi"] = "156";
    /**
     * Kazakhstani tenge
     *
     * @description Numeric code: 398
     * @description Alphabetic code: KZT
     * @description Countries and territories: Kazakhstan
     * @description Currency symbol: ₸
     */
    TuiCurrencyCode["Tenge"] = "398";
    /**
     * Israeli new shekel
     *
     * @description Numeric code: 376
     * @description Alphabetic code: ILS
     * @description Countries and territories: Israel
     * @description Currency symbol: ₪
     */
    TuiCurrencyCode["IsraeliShekel"] = "376";
    /**
     * Indian rupee
     *
     * @description Numeric code: 356
     * @description Alphabetic code: INR
     * @description Countries and territories: India, Bhutan
     * @description Currency symbol: ₹
     */
    TuiCurrencyCode["IndianRupee"] = "356";
    /**
     * Japanese yen
     *
     * @description Numeric code: 392
     * @description Alphabetic code: JPY
     * @description Countries and territories: Japan
     * @description Currency symbol: ¥
     */
    TuiCurrencyCode["Yen"] = "392";
    /**
     * South Korean won
     *
     * @description Numeric code: 410
     * @description Alphabetic code: KRW
     * @description Countries and territories: South Korea
     * @description Currency symbol: ₩
     */
    TuiCurrencyCode["Won"] = "410";
    /**
     * Swiss franc
     *
     * @description Numeric code: 756
     * @description Alphabetic code: CHF
     * @description Countries and territories: Switzerland, Liechtenstein (LI)
     * @description Currency symbol: ₣
     */
    TuiCurrencyCode["SwissFranc"] = "756";
    /**
     * Singapore dollar
     *
     * @description Numeric code: 702
     * @description Alphabetic code: SGD
     * @description Countries and territories: Singapore
     * @description Currency symbol: S$
     */
    TuiCurrencyCode["SingaporeDollar"] = "702";
    /**
     * Australian dollar
     *
     * @description Numeric code: 036
     * @description Alphabetic code: AUD
     * @description Countries and territories: Australia, Christmas Island (CX), Cocos (Keeling) Islands (CC), Heard Island and McDonald Islands (HM), Kiribati (KI), Nauru (NR), Norfolk Island (NF), Tuvalu (TV)
     * @description Currency symbol: A$
     */
    TuiCurrencyCode["AustralianDollar"] = "036";
    /**
     * Hong Kong dollar
     *
     * @description Numeric code: 344
     * @description Alphabetic code: HKD
     * @description Countries and territories: Hong Kong
     * @description Currency symbol: HK$
     */
    TuiCurrencyCode["HongKongDollar"] = "344";
    /**
     * @deprecated
     * TODO: 3.0 replace with {@link HongKongDollar}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    TuiCurrencyCode["HongKong_dollar"] = "344";
    /**
     * Canadian dollar
     *
     * @description Numeric code: 124
     * @description Alphabetic code: CAD
     * @description Countries and territories: Canada
     * @description Currency symbol: C$
     */
    TuiCurrencyCode["CanadianDollar"] = "124";
    /**
     * Armenian dram
     *
     * @description Numeric code: 051
     * @description Alphabetic code: AMD
     * @description Countries and territories: Armenia
     * @description Currency symbol: ֏
     */
    TuiCurrencyCode["ArmenianDram"] = "051";
    /**
     * Ukrainian hryvnia
     *
     * @description Numeric code: 980
     * @description Alphabetic code: UAH
     * @description Countries and territories: Ukraine
     * @description Currency symbol: ₴
     */
    TuiCurrencyCode["Hryvnia"] = "980";
    /**
     * Mexican peso
     *
     * @description Numeric code: 484
     * @description Alphabetic code: MXN
     * @description Countries and territories: Mexico
     * @description Currency symbol: $
     */
    TuiCurrencyCode["MexicanPeso"] = "484";
    /**
     * Uzbek sum
     *
     * @description Numeric code: 860
     * @description Alphabetic code: UZS
     * @description Countries and territories: Uzbekistan
     * @description Currency symbol: So'm
     */
    TuiCurrencyCode["UzbekSum"] = "860";
    /**
     * Kyrgyzstani som
     *
     * @description Numeric code: 417
     * @description Alphabetic code: KGS
     * @description Countries and territories: Kyrgyzstan
     * @description Currency symbol: c
     */
    TuiCurrencyCode["KyrgyzstanSom"] = "417";
    /**
     * United Arab Emirates dirham
     *
     * @description Numeric code: 784
     * @description Alphabetic code: AED
     * @description Countries and territories: United Arab Emirates
     * @description Currency symbol: Dh
     */
    TuiCurrencyCode["Dirham"] = "784";
})(TuiCurrencyCode || (TuiCurrencyCode = {}));


/***/ }),

/***/ "../addon-commerce/enums/currency.ts":
/*!*******************************************!*\
  !*** ../addon-commerce/enums/currency.ts ***!
  \*******************************************/
/*! exports provided: TuiCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrency", function() { return TuiCurrency; });
/**
 * **Active ISO 4217 alphabetic currency codes**
 *
 * @description The ISO 4217 classification is used to describe alphabetic and numeric currency codes.
 * @description Alphabetic code is also called "alfa-3".
 *
 * @link https://en.wikipedia.org/wiki/ISO_4217
 */
var TuiCurrency;
(function (TuiCurrency) {
    /**
     * Russian ruble
     *
     * @description Numeric code: 643
     * @description Alphabetic code: RUB
     * @description Countries and territories: Russia
     * @description Currency symbol: ₽
     */
    TuiCurrency["Ruble"] = "RUB";
    /**
     * Euro
     *
     * @description Numeric code: 978
     * @description Alphabetic code: EUR
     * @description Countries and territories: Åland Islands (AX), European Union (EU), Andorra (AD), Austria (AT), Belgium (BE), Cyprus (CY), Estonia (EE), Finland (FI), France (FR), French Southern and Antarctic Lands (TF), Germany (DE), Greece (GR), Guadeloupe (GP), Ireland (IE), Italy (IT), Latvia (LV), Lithuania (LT), Luxembourg (LU), Malta (MT), French Guiana (GF), Martinique (MQ), Mayotte (YT), Monaco (MC), Montenegro (ME), Netherlands (NL), Portugal (PT), Réunion (RE), Saint Barthélemy (BL), Saint Martin (MF), Saint Pierre and Miquelon (PM), San Marino (SM), Slovakia (SK), Slovenia (SI), Spain (ES), Vatican City (VA)
     * @description Currency symbol: €
     */
    TuiCurrency["Euro"] = "EUR";
    /**
     * United States dollar
     *
     * @description Numeric code: 840
     * @description Alphabetic code: USD
     * @description Countries and territories: United States, American Samoa (AS), British Indian Ocean Territory (IO) (also uses GBP), British Virgin Islands (VG), Caribbean Netherlands (BQ – Bonaire, Sint Eustatius and Saba), Ecuador (EC), El Salvador (SV), Guam (GU), Marshall Islands (MH), Federated States of Micronesia (FM), Northern Mariana Islands (MP), Palau (PW), Panama (PA) (as well as Panamanian Balboa), Puerto Rico (PR), Timor-Leste (TL), Turks and Caicos Islands (TC), U.S. Virgin Islands (VI), United States Minor Outlying Islands (UM)
     * @description Currency symbol: $
     */
    TuiCurrency["Dollar"] = "USD";
    /**
     * Pound sterling
     *
     * @description Numeric code: 826
     * @description Alphabetic code: GBP
     * @description Countries and territories: United Kingdom, Isle of Man (IM, see Manx pound), Jersey (JE, see Jersey pound), Guernsey (GG, see Guernsey pound), Tristan da Cunha (SH-TA)
     * @description Currency symbol: £
     */
    TuiCurrency["Pound"] = "GBP";
    /**
     * Thai baht
     *
     * @description Numeric code: 764
     * @description Alphabetic code: THB
     * @description Countries and territories: Thailand
     * @description Currency symbol: ฿
     */
    TuiCurrency["Baht"] = "THB";
    /**
     * Turkish lira
     *
     * @description Numeric code: 949
     * @description Alphabetic code: TRY
     * @description Countries and territories: Turkey
     * @description Currency symbol: ₺
     */
    TuiCurrency["TurkishLira"] = "TRY";
    /**
     * Chinese yuan
     *
     * @description Numeric code: 156
     * @description Alphabetic code: CNY
     * @description Countries and territories: China
     * @description Currency symbol: CN¥
     */
    TuiCurrency["YuanRenminbi"] = "CNY";
    /**
     * Kazakhstani tenge
     *
     * @description Numeric code: 398
     * @description Alphabetic code: KZT
     * @description Countries and territories: Kazakhstan
     * @description Currency symbol: ₸
     */
    TuiCurrency["Tenge"] = "KZT";
    /**
     * Israeli new shekel
     *
     * @description Numeric code: 376
     * @description Alphabetic code: ILS
     * @description Countries and territories: Israel
     * @description Currency symbol: ₪
     */
    TuiCurrency["IsraeliShekel"] = "ILS";
    /**
     * Indian rupee
     *
     * @description Numeric code: 356
     * @description Alphabetic code: INR
     * @description Countries and territories: India, Bhutan
     * @description Currency symbol: ₹
     */
    TuiCurrency["IndianRupee"] = "INR";
    /**
     * Japanese yen
     *
     * @description Numeric code: 392
     * @description Alphabetic code: JPY
     * @description Countries and territories: Japan
     * @description Currency symbol: ¥
     */
    TuiCurrency["Yen"] = "JPY";
    /**
     * South Korean won
     *
     * @description Numeric code: 410
     * @description Alphabetic code: KRW
     * @description Countries and territories: South Korea
     * @description Currency symbol: ₩
     */
    TuiCurrency["Won"] = "KRW";
    /**
     * Swiss franc
     *
     * @description Numeric code: 756
     * @description Alphabetic code: CHF
     * @description Countries and territories: Switzerland, Liechtenstein (LI)
     * @description Currency symbol: ₣
     */
    TuiCurrency["SwissFranc"] = "CHF";
    /**
     * Singapore dollar
     *
     * @description Numeric code: 702
     * @description Alphabetic code: SGD
     * @description Countries and territories: Singapore
     * @description Currency symbol: S$
     */
    TuiCurrency["SingaporeDollar"] = "SGD";
    /**
     * Australian dollar
     *
     * @description Numeric code: 036
     * @description Alphabetic code: AUD
     * @description Countries and territories: Australia, Christmas Island (CX), Cocos (Keeling) Islands (CC), Heard Island and McDonald Islands (HM), Kiribati (KI), Nauru (NR), Norfolk Island (NF), Tuvalu (TV)
     * @description Currency symbol: A$
     */
    TuiCurrency["AustralianDollar"] = "AUD";
    /**
     * Hong Kong dollar
     *
     * @description Numeric code: 344
     * @description Alphabetic code: HKD
     * @description Countries and territories: Hong Kong
     * @description Currency symbol: HK$
     */
    TuiCurrency["HongKongDollar"] = "HKD";
    /**
     * @deprecated:
     * TODO: 3.0 replace with {@link HongKongDollar}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    TuiCurrency["HongKong_dollar"] = "HKD";
    /**
     * Canadian dollar
     *
     * @description Numeric code: 124
     * @description Alphabetic code: CAD
     * @description Countries and territories: Canada
     * @description Currency symbol: C$
     */
    TuiCurrency["CanadianDollar"] = "CAD";
    /**
     * Armenian dram
     *
     * @description Numeric code: 051
     * @description Alphabetic code: AMD
     * @description Countries and territories: Armenia
     * @description Currency symbol: ֏
     */
    TuiCurrency["ArmenianDram"] = "AMD";
    /**
     * Ukrainian hryvnia
     *
     * @description Numeric code: 980
     * @description Alphabetic code: UAH
     * @description Countries and territories: Ukraine
     * @description Currency symbol: ₴
     */
    TuiCurrency["Hryvnia"] = "UAH";
    /**
     * Mexican peso
     *
     * @description Numeric code: 484
     * @description Alphabetic code: MXN
     * @description Countries and territories: Mexico
     * @description Currency symbol: $
     */
    TuiCurrency["MexicanPeso"] = "MXN";
    /**
     * Uzbek sum
     *
     * @description Numeric code: 860
     * @description Alphabetic code: UZS
     * @description Countries and territories: Uzbekistan
     * @description Currency symbol: So'm
     */
    TuiCurrency["UzbekSum"] = "UZS";
    /**
     * Kyrgyzstani som
     *
     * @description Numeric code: 417
     * @description Alphabetic code: KGS
     * @description Countries and territories: Kyrgyzstan
     * @description Currency symbol: c
     */
    TuiCurrency["KyrgyzstanSom"] = "KGS";
    /**
     * United Arab Emirates dirham
     *
     * @description Numeric code: 784
     * @description Alphabetic code: AED
     * @description Countries and territories: United Arab Emirates
     * @description Currency symbol: Dh
     */
    TuiCurrency["Dirham"] = "AED";
})(TuiCurrency || (TuiCurrency = {}));


/***/ }),

/***/ "../addon-commerce/enums/index.ts":
/*!****************************************!*\
  !*** ../addon-commerce/enums/index.ts ***!
  \****************************************/
/*! exports provided: TuiCurrency, TuiCurrencyCode, TuiMoneySign, TuiPaymentSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency */ "../addon-commerce/enums/currency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrency", function() { return _currency__WEBPACK_IMPORTED_MODULE_0__["TuiCurrency"]; });

/* harmony import */ var _currency_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-code */ "../addon-commerce/enums/currency-code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyCode", function() { return _currency_code__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyCode"]; });

/* harmony import */ var _money_sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./money-sign */ "../addon-commerce/enums/money-sign.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneySign", function() { return _money_sign__WEBPACK_IMPORTED_MODULE_2__["TuiMoneySign"]; });

/* harmony import */ var _payment_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-system */ "../addon-commerce/enums/payment-system.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPaymentSystem", function() { return _payment_system__WEBPACK_IMPORTED_MODULE_3__["TuiPaymentSystem"]; });







/***/ }),

/***/ "../addon-commerce/enums/money-sign.ts":
/*!*********************************************!*\
  !*** ../addon-commerce/enums/money-sign.ts ***!
  \*********************************************/
/*! exports provided: TuiMoneySign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMoneySign", function() { return TuiMoneySign; });
/**
 * negative-only — show sign only for negative numbers
 * always — always show sign, except for zero
 * never — never show sign
 * force-negative — show minus no matter the number, except for zero
 * force-positive — show plus no matter the number, except for zero
 * @deprecated use join type {@link TuiMoneySignT}
 * TODO: delete in v3.0
 */
var TuiMoneySign;
(function (TuiMoneySign) {
    TuiMoneySign["NegativeOnly"] = "negative-only";
    TuiMoneySign["Always"] = "always";
    TuiMoneySign["Never"] = "never";
    TuiMoneySign["ForceNegative"] = "force-negative";
    TuiMoneySign["ForcePositive"] = "force-positive";
})(TuiMoneySign || (TuiMoneySign = {}));


/***/ }),

/***/ "../addon-commerce/enums/payment-system.ts":
/*!*************************************************!*\
  !*** ../addon-commerce/enums/payment-system.ts ***!
  \*************************************************/
/*! exports provided: TuiPaymentSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPaymentSystem", function() { return TuiPaymentSystem; });
var TuiPaymentSystem;
(function (TuiPaymentSystem) {
    TuiPaymentSystem["Visa"] = "visa";
    TuiPaymentSystem["Electron"] = "electron";
    TuiPaymentSystem["Mastercard"] = "mastercard";
    TuiPaymentSystem["Maestro"] = "maestro";
    TuiPaymentSystem["Mir"] = "mir";
})(TuiPaymentSystem || (TuiPaymentSystem = {}));


/***/ }),

/***/ "../addon-commerce/index.ts":
/*!**********************************!*\
  !*** ../addon-commerce/index.ts ***!
  \**********************************/
/*! exports provided: cardNumberAssertion, cardNumberAssertionMessage, TuiCardComponent, TuiCardModule, cardTextfieldControllerFactory, TuiInputCardComponent, TuiInputCardModule, TuiInputCardGroupedComponent, TuiInputCardGroupedModule, TUI_INPUT_CARD_GROUPED_TEXTS, inputGroupedTextsFactory, TuiInputCVCComponent, TuiInputCVCModule, TuiInputExpireComponent, TuiInputExpireModule, TuiMoneyComponent, TuiMoneyModule, TUI_MONEY_DEFAULT_DEFAULT_OPTIONS, TUI_MONEY_OPTIONS, tuiMoneyOptionsProvider, TuiFractionPartPipe, TuiIntegerPartPipe, TuiSignSymbolPipe, tuiFormatFractionPart, tuiFormatSignSymbol, cardHolderMask, TUI_CARD_MASK, tuiDefaultCardValidator, TuiCurrency, TuiCurrencyCode, TuiMoneySign, TuiPaymentSystem, TuiCurrencyPipeModule, TuiCurrencyPipe, TuiFormatCardModule, TuiFormatCardPipe, TUI_CARD_NUMBER_TEXTS, TUI_CARD_EXPIRY_TEXTS, TUI_CARD_CVC_TEXTS, tuiCreateAutoCorrectedExpirePipe, formatCurrency, tuiFormatCurrency, getCurrencySymbol, tuiGetCurrencySymbol, getPaymentSystem, tuiGetPaymentSystem, isMaestro, tuiIsMaestro, isMastercard, tuiIsMastercard, isMir, tuiIsMir, isElectron, tuiIsElectron, isVisa, tuiIsVisa, isCardLengthValid, tuiIsCardLengthValid, isCardNumberValid, tuiIsCardNumberValid, isExpireValid, tuiIsExpireValid, tuiCardExpireValidator, tuiCardNumberValidator, tuiCreateLuhnValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/components */ "../addon-commerce/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertion", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardNumberAssertionMessage", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["cardNumberAssertionMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCardModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiCardModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardTextfieldControllerFactory", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["cardTextfieldControllerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardGroupedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardGroupedModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCardGroupedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_INPUT_CARD_GROUPED_TEXTS", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TUI_INPUT_CARD_GROUPED_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputGroupedTextsFactory", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["inputGroupedTextsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCVCComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputCVCModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputCVCModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputExpireComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiInputExpireModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiInputExpireModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyComponent", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiMoneyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneyModule", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiMoneyModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_DEFAULT_DEFAULT_OPTIONS", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TUI_MONEY_DEFAULT_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_MONEY_OPTIONS", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TUI_MONEY_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiMoneyOptionsProvider", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["tuiMoneyOptionsProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFractionPartPipe", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiFractionPartPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiIntegerPartPipe", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiIntegerPartPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSignSymbolPipe", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["TuiSignSymbolPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatFractionPart", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["tuiFormatFractionPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatSignSymbol", function() { return _taiga_ui_addon_commerce_components__WEBPACK_IMPORTED_MODULE_0__["tuiFormatSignSymbol"]; });

/* harmony import */ var _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-commerce/constants */ "../addon-commerce/constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardHolderMask", function() { return _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_1__["cardHolderMask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_MASK", function() { return _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_CARD_MASK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDefaultCardValidator", function() { return _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_1__["tuiDefaultCardValidator"]; });

/* harmony import */ var _taiga_ui_addon_commerce_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-commerce/enums */ "../addon-commerce/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrency", function() { return _taiga_ui_addon_commerce_enums__WEBPACK_IMPORTED_MODULE_2__["TuiCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyCode", function() { return _taiga_ui_addon_commerce_enums__WEBPACK_IMPORTED_MODULE_2__["TuiCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiMoneySign", function() { return _taiga_ui_addon_commerce_enums__WEBPACK_IMPORTED_MODULE_2__["TuiMoneySign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPaymentSystem", function() { return _taiga_ui_addon_commerce_enums__WEBPACK_IMPORTED_MODULE_2__["TuiPaymentSystem"]; });

/* harmony import */ var _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce/pipes */ "../addon-commerce/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipeModule", function() { return _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiCurrencyPipeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipe", function() { return _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiCurrencyPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardModule", function() { return _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardPipe", function() { return _taiga_ui_addon_commerce_pipes__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardPipe"]; });

/* harmony import */ var _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce/tokens */ "../addon-commerce/tokens/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_NUMBER_TEXTS", function() { return _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_4__["TUI_CARD_NUMBER_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_EXPIRY_TEXTS", function() { return _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_4__["TUI_CARD_EXPIRY_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_CVC_TEXTS", function() { return _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_4__["TUI_CARD_CVC_TEXTS"]; });

/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCreateAutoCorrectedExpirePipe", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiCreateAutoCorrectedExpirePipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatCurrency", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiFormatCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["getCurrencySymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiGetCurrencySymbol", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiGetCurrencySymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaymentSystem", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["getPaymentSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiGetPaymentSystem", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiGetPaymentSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMaestro", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isMaestro"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMaestro", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsMaestro"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMastercard", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isMastercard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMastercard", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsMastercard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMir", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isMir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMir", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsMir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isElectron"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsElectron", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsElectron"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisa", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isVisa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsVisa", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsVisa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCardLengthValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isCardLengthValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardLengthValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsCardLengthValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCardNumberValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isCardNumberValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardNumberValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsCardNumberValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpireValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["isExpireValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsExpireValid", function() { return _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_5__["tuiIsExpireValid"]; });

/* harmony import */ var _taiga_ui_addon_commerce_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-commerce/validators */ "../addon-commerce/validators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCardExpireValidator", function() { return _taiga_ui_addon_commerce_validators__WEBPACK_IMPORTED_MODULE_6__["tuiCardExpireValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCardNumberValidator", function() { return _taiga_ui_addon_commerce_validators__WEBPACK_IMPORTED_MODULE_6__["tuiCardNumberValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCreateLuhnValidator", function() { return _taiga_ui_addon_commerce_validators__WEBPACK_IMPORTED_MODULE_6__["tuiCreateLuhnValidator"]; });










/***/ }),

/***/ "../addon-commerce/pipes/currency/currency.module.ts":
/*!***********************************************************!*\
  !*** ../addon-commerce/pipes/currency/currency.module.ts ***!
  \***********************************************************/
/*! exports provided: TuiCurrencyPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipeModule", function() { return TuiCurrencyPipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");



class TuiCurrencyPipeModule {
}
TuiCurrencyPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiCurrencyPipeModule });
TuiCurrencyPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiCurrencyPipeModule_Factory(t) { return new (t || TuiCurrencyPipeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiCurrencyPipeModule, { declarations: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyPipe"]], exports: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCurrencyPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyPipe"]],
                exports: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/pipes/currency/currency.pipe.ts":
/*!*********************************************************!*\
  !*** ../addon-commerce/pipes/currency/currency.pipe.ts ***!
  \*********************************************************/
/*! exports provided: TuiCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipe", function() { return TuiCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");



class TuiCurrencyPipe {
    transform(currency) {
        return Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(currency);
    }
}
TuiCurrencyPipe.ɵfac = function TuiCurrencyPipe_Factory(t) { return new (t || TuiCurrencyPipe)(); };
TuiCurrencyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiCurrency", type: TuiCurrencyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCurrencyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: `tuiCurrency`,
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/pipes/format-card/format-card.module.ts":
/*!*****************************************************************!*\
  !*** ../addon-commerce/pipes/format-card/format-card.module.ts ***!
  \*****************************************************************/
/*! exports provided: TuiFormatCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardModule", function() { return TuiFormatCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _format_card_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-card.pipe */ "../addon-commerce/pipes/format-card/format-card.pipe.ts");



class TuiFormatCardModule {
}
TuiFormatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiFormatCardModule });
TuiFormatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiFormatCardModule_Factory(t) { return new (t || TuiFormatCardModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiFormatCardModule, { declarations: [_format_card_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiFormatCardPipe"]], exports: [_format_card_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiFormatCardPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_format_card_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiFormatCardPipe"]],
                exports: [_format_card_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiFormatCardPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/pipes/format-card/format-card.pipe.ts":
/*!***************************************************************!*\
  !*** ../addon-commerce/pipes/format-card/format-card.pipe.ts ***!
  \***************************************************************/
/*! exports provided: TuiFormatCardPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardPipe", function() { return TuiFormatCardPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class TuiFormatCardPipe {
    transform(value = ``, cardPrefilled = false) {
        return value && !cardPrefilled
            ? value
                .split(``)
                .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
                .join(``)
            : ``;
    }
}
TuiFormatCardPipe.ɵfac = function TuiFormatCardPipe_Factory(t) { return new (t || TuiFormatCardPipe)(); };
TuiFormatCardPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tuiFormatCard", type: TuiFormatCardPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFormatCardPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: `tuiFormatCard` }]
    }], null, null); })();


/***/ }),

/***/ "../addon-commerce/pipes/index.ts":
/*!****************************************!*\
  !*** ../addon-commerce/pipes/index.ts ***!
  \****************************************/
/*! exports provided: TuiCurrencyPipeModule, TuiCurrencyPipe, TuiFormatCardModule, TuiFormatCardPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currency_currency_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency/currency.module */ "../addon-commerce/pipes/currency/currency.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipeModule", function() { return _currency_currency_module__WEBPACK_IMPORTED_MODULE_0__["TuiCurrencyPipeModule"]; });

/* harmony import */ var _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCurrencyPipe", function() { return _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["TuiCurrencyPipe"]; });

/* harmony import */ var _format_card_format_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-card/format-card.module */ "../addon-commerce/pipes/format-card/format-card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardModule", function() { return _format_card_format_card_module__WEBPACK_IMPORTED_MODULE_2__["TuiFormatCardModule"]; });

/* harmony import */ var _format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format-card/format-card.pipe */ "../addon-commerce/pipes/format-card/format-card.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiFormatCardPipe", function() { return _format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_3__["TuiFormatCardPipe"]; });







/***/ }),

/***/ "../addon-commerce/tokens/i18n.ts":
/*!****************************************!*\
  !*** ../addon-commerce/tokens/i18n.ts ***!
  \****************************************/
/*! exports provided: TUI_CARD_NUMBER_TEXTS, TUI_CARD_EXPIRY_TEXTS, TUI_CARD_CVC_TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_NUMBER_TEXTS", function() { return TUI_CARD_NUMBER_TEXTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_EXPIRY_TEXTS", function() { return TUI_CARD_EXPIRY_TEXTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_CVC_TEXTS", function() { return TUI_CARD_CVC_TEXTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/i18n */ "../i18n/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



const TUI_CARD_NUMBER_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Number and card number i18n`, {
    factory: Object(_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__["extractI18n"])(`cardNumber`),
});
const TUI_CARD_EXPIRY_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Expiry and card expiry i18n`, {
    factory: Object(_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_1__["extractI18n"])(`cardExpiry`),
});
const TUI_CARD_CVC_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Card CVC number text`, {
    factory: () => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([`CVC`, `CVC/CVV`]),
});


/***/ }),

/***/ "../addon-commerce/tokens/index.ts":
/*!*****************************************!*\
  !*** ../addon-commerce/tokens/index.ts ***!
  \*****************************************/
/*! exports provided: TUI_CARD_NUMBER_TEXTS, TUI_CARD_EXPIRY_TEXTS, TUI_CARD_CVC_TEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "../addon-commerce/tokens/i18n.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_NUMBER_TEXTS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["TUI_CARD_NUMBER_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_EXPIRY_TEXTS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["TUI_CARD_EXPIRY_TEXTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_CARD_CVC_TEXTS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["TUI_CARD_CVC_TEXTS"]; });




/***/ }),

/***/ "../addon-commerce/utils/create-auto-corrected-expire-pipe.ts":
/*!********************************************************************!*\
  !*** ../addon-commerce/utils/create-auto-corrected-expire-pipe.ts ***!
  \********************************************************************/
/*! exports provided: tuiCreateAutoCorrectedExpirePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiCreateAutoCorrectedExpirePipe", function() { return tuiCreateAutoCorrectedExpirePipe; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");

const TUI_EXP_YEAR_MONTH = /^\d{2}[/|.]\d{4}$/;
const TUI_EXP_SAFARI = /^\d{1,4}.\d{1,2}.\d{1,4}$/;
/**
 * Correct expiration date text allowing only valid months
 * @internal
 *
 * @returns MM/YY
 */
function tuiCreateAutoCorrectedExpirePipe() {
    return (conformedValue, { rawValue }) => {
        // Autofilled with MM/YYYY format
        if (TUI_EXP_YEAR_MONTH.test(rawValue)) {
            conformedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(5)}`;
        }
        // Autofilled with Safari crazy format
        if (rawValue.length > 7 &&
            rawValue.length < 11 &&
            TUI_EXP_SAFARI.test(rawValue)) {
            const array = rawValue.split(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_NON_DIGIT_REGEXP"]);
            const month = array[1];
            const year = array.find(({ length }) => length === 4);
            conformedValue = `${`0`.repeat(2 - month.length)}${month}/${year ? year.slice(2) : ``}`;
        }
        const indexesOfPipedChars = [];
        const conformedValueArr = conformedValue.split(``);
        if (parseInt(conformedValueArr[0], 10) > 1) {
            conformedValueArr[2] = `/`;
            conformedValueArr[1] = conformedValueArr[0];
            conformedValueArr[0] = `0`;
            indexesOfPipedChars.push(0);
        }
        return {
            value: conformedValueArr.join(``),
            indexesOfPipedChars,
        };
    };
}


/***/ }),

/***/ "../addon-commerce/utils/format-currency.ts":
/*!**************************************************!*\
  !*** ../addon-commerce/utils/format-currency.ts ***!
  \**************************************************/
/*! exports provided: formatCurrency, tuiFormatCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiFormatCurrency", function() { return tuiFormatCurrency; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _get_currency_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-currency-symbol */ "../addon-commerce/utils/get-currency-symbol.ts");


/**
 * @deprecated: use {@link tuiFormatCurrency} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function formatCurrency(currency) {
    const stringifiedCurrency = stringifyCurrency(currency);
    return Object(_get_currency_symbol__WEBPACK_IMPORTED_MODULE_1__["getCurrencySymbol"])(stringifiedCurrency) || stringifiedCurrency;
}
const tuiFormatCurrency = formatCurrency;
function stringifyCurrency(currency) {
    return currency === null || typeof currency === `string`
        ? currency || ``
        : Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["padStart"])(String(currency), 3, `0`);
}


/***/ }),

/***/ "../addon-commerce/utils/get-currency-symbol.ts":
/*!******************************************************!*\
  !*** ../addon-commerce/utils/get-currency-symbol.ts ***!
  \******************************************************/
/*! exports provided: getCurrencySymbol, tuiGetCurrencySymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return getCurrencySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiGetCurrencySymbol", function() { return tuiGetCurrencySymbol; });
/**
 * @deprecated: use {@link tuiGetCurrencySymbol} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getCurrencySymbol(currency) {
    switch (currency) {
        case "RUB" /* Ruble */:
        case "643" /* Ruble */:
            return `₽`;
        case "USD" /* Dollar */:
        case "840" /* Dollar */:
        case "MXN" /* MexicanPeso */:
        case "484" /* MexicanPeso */:
            return `$`;
        case "SGD" /* SingaporeDollar */:
        case "702" /* SingaporeDollar */:
            return `S$`;
        case "AUD" /* AustralianDollar */:
        case "036" /* AustralianDollar */:
            return `A$`;
        case "HKD" /* HongKongDollar */:
        case "344" /* HongKongDollar */:
            return `HK$`;
        case "CAD" /* CanadianDollar */:
        case "124" /* CanadianDollar */:
            return `C$`;
        case "EUR" /* Euro */:
        case "978" /* Euro */:
            return `€`;
        case "GBP" /* Pound */:
        case "826" /* Pound */:
            return `£`;
        case "THB" /* Baht */:
        case "764" /* Baht */:
            return `฿`;
        case "TRY" /* TurkishLira */:
        case "949" /* TurkishLira */:
            return `₺`;
        case "CNY" /* YuanRenminbi */:
        case "156" /* YuanRenminbi */:
            return `CN¥`;
        case "JPY" /* Yen */:
        case "392" /* Yen */:
            return `¥`;
        case "ILS" /* IsraeliShekel */:
        case "376" /* IsraeliShekel */:
            return `₪`;
        case "INR" /* IndianRupee */:
        case "356" /* IndianRupee */:
            return `₹`;
        case "CHF" /* SwissFranc */:
        case "756" /* SwissFranc */:
            return `₣`;
        case "AMD" /* ArmenianDram */:
        case "051" /* ArmenianDram */:
            return `֏`;
        case "KRW" /* Won */:
        case "410" /* Won */:
            return `₩`;
        case "KZT" /* Tenge */:
        case "398" /* Tenge */:
            return `₸`;
        case "UAH" /* Hryvnia */:
        case "980" /* Hryvnia */:
            return `₴`;
        case "UZS" /* UzbekSum */:
        case "860" /* UzbekSum */:
            return `So'm`;
        case "KGS" /* KyrgyzstanSom */:
        case "417" /* KyrgyzstanSom */:
            return `c`;
        case "AED" /* Dirham */:
        case "784" /* Dirham */:
            return `Dh`;
        default:
            return null;
    }
}
const tuiGetCurrencySymbol = getCurrencySymbol;


/***/ }),

/***/ "../addon-commerce/utils/get-payment-system.ts":
/*!*****************************************************!*\
  !*** ../addon-commerce/utils/get-payment-system.ts ***!
  \*****************************************************/
/*! exports provided: getPaymentSystem, tuiGetPaymentSystem, isMaestro, tuiIsMaestro, isMastercard, tuiIsMastercard, isMir, tuiIsMir, isElectron, tuiIsElectron, isVisa, tuiIsVisa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentSystem", function() { return getPaymentSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiGetPaymentSystem", function() { return tuiGetPaymentSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaestro", function() { return isMaestro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsMaestro", function() { return tuiIsMaestro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMastercard", function() { return isMastercard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsMastercard", function() { return tuiIsMastercard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMir", function() { return isMir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsMir", function() { return tuiIsMir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsElectron", function() { return tuiIsElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisa", function() { return isVisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsVisa", function() { return tuiIsVisa; });
/**
 * @deprecated: use {@link tuiGetPaymentSystem} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getPaymentSystem(cardNumber) {
    if (cardNumber === ``) {
        return null;
    }
    const one = Number.parseInt(cardNumber[0], 10);
    const two = Number.parseInt(cardNumber.slice(0, 2), 10);
    const three = Number.parseInt(cardNumber.slice(0, 3), 10);
    const four = Number.parseInt(cardNumber.slice(0, 4), 10);
    if (isMaestro(three, two, one)) {
        return "maestro" /* Maestro */;
    }
    if (isMastercard(four, two, one)) {
        return "mastercard" /* Mastercard */;
    }
    if (isMir(four)) {
        return "mir" /* Mir */;
    }
    if (isElectron(four)) {
        return "electron" /* Electron */;
    }
    if (isVisa(one)) {
        return "visa" /* Visa */;
    }
    return null;
}
const tuiGetPaymentSystem = getPaymentSystem;
/**
 * @deprecated: use {@link tuiIsMaestro} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isMaestro(three, two, one) {
    if (one === 6) {
        return true;
    }
    if (two === 50 || (two > 55 && two < 59)) {
        return true;
    }
    if (three < 500) {
        return false;
    }
    return three < 510;
}
const tuiIsMaestro = isMaestro;
/**
 * @deprecated: use {@link tuiIsMastercard} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isMastercard(four, two, one) {
    if (one === 5) {
        return true;
    }
    if (two < 10) {
        return false;
    }
    if (two > 50 && two < 56) {
        return true;
    }
    if (four < 1000) {
        return false;
    }
    return four > 2220 && four < 2721;
}
const tuiIsMastercard = isMastercard;
/**
 * @deprecated: use {@link tuiIsMir} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isMir(four) {
    return four > 2199 && four < 2205;
}
const tuiIsMir = isMir;
/**
 * @deprecated: use {@link tuiIsElectron} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isElectron(four) {
    switch (four) {
        case 4026:
        case 4175:
        case 4405:
        case 4508:
        case 4844:
        case 4913:
        case 4917:
            return true;
        default:
            return false;
    }
}
const tuiIsElectron = isElectron;
/**
 * @deprecated: use {@link tuiIsVisa} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isVisa(one) {
    return one === 4;
}
const tuiIsVisa = isVisa;


/***/ }),

/***/ "../addon-commerce/utils/index.ts":
/*!****************************************!*\
  !*** ../addon-commerce/utils/index.ts ***!
  \****************************************/
/*! exports provided: tuiCreateAutoCorrectedExpirePipe, formatCurrency, tuiFormatCurrency, getCurrencySymbol, tuiGetCurrencySymbol, getPaymentSystem, tuiGetPaymentSystem, isMaestro, tuiIsMaestro, isMastercard, tuiIsMastercard, isMir, tuiIsMir, isElectron, tuiIsElectron, isVisa, tuiIsVisa, isCardLengthValid, tuiIsCardLengthValid, isCardNumberValid, tuiIsCardNumberValid, isExpireValid, tuiIsExpireValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_auto_corrected_expire_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-auto-corrected-expire-pipe */ "../addon-commerce/utils/create-auto-corrected-expire-pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCreateAutoCorrectedExpirePipe", function() { return _create_auto_corrected_expire_pipe__WEBPACK_IMPORTED_MODULE_0__["tuiCreateAutoCorrectedExpirePipe"]; });

/* harmony import */ var _format_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-currency */ "../addon-commerce/utils/format-currency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return _format_currency__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiFormatCurrency", function() { return _format_currency__WEBPACK_IMPORTED_MODULE_1__["tuiFormatCurrency"]; });

/* harmony import */ var _get_currency_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-currency-symbol */ "../addon-commerce/utils/get-currency-symbol.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return _get_currency_symbol__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiGetCurrencySymbol", function() { return _get_currency_symbol__WEBPACK_IMPORTED_MODULE_2__["tuiGetCurrencySymbol"]; });

/* harmony import */ var _get_payment_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-payment-system */ "../addon-commerce/utils/get-payment-system.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaymentSystem", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["getPaymentSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiGetPaymentSystem", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiGetPaymentSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMaestro", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["isMaestro"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMaestro", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiIsMaestro"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMastercard", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["isMastercard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMastercard", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiIsMastercard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMir", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["isMir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsMir", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiIsMir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["isElectron"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsElectron", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiIsElectron"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisa", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["isVisa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsVisa", function() { return _get_payment_system__WEBPACK_IMPORTED_MODULE_3__["tuiIsVisa"]; });

/* harmony import */ var _is_card_length_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-card-length-valid */ "../addon-commerce/utils/is-card-length-valid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCardLengthValid", function() { return _is_card_length_valid__WEBPACK_IMPORTED_MODULE_4__["isCardLengthValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardLengthValid", function() { return _is_card_length_valid__WEBPACK_IMPORTED_MODULE_4__["tuiIsCardLengthValid"]; });

/* harmony import */ var _is_card_number_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-card-number-valid */ "../addon-commerce/utils/is-card-number-valid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCardNumberValid", function() { return _is_card_number_valid__WEBPACK_IMPORTED_MODULE_5__["isCardNumberValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardNumberValid", function() { return _is_card_number_valid__WEBPACK_IMPORTED_MODULE_5__["tuiIsCardNumberValid"]; });

/* harmony import */ var _is_expire_valid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-expire-valid */ "../addon-commerce/utils/is-expire-valid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpireValid", function() { return _is_expire_valid__WEBPACK_IMPORTED_MODULE_6__["isExpireValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiIsExpireValid", function() { return _is_expire_valid__WEBPACK_IMPORTED_MODULE_6__["tuiIsExpireValid"]; });










/***/ }),

/***/ "../addon-commerce/utils/is-card-length-valid.ts":
/*!*******************************************************!*\
  !*** ../addon-commerce/utils/is-card-length-valid.ts ***!
  \*******************************************************/
/*! exports provided: isCardLengthValid, tuiIsCardLengthValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCardLengthValid", function() { return isCardLengthValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardLengthValid", function() { return tuiIsCardLengthValid; });
/* harmony import */ var _get_payment_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-payment-system */ "../addon-commerce/utils/get-payment-system.ts");

/**
 * @deprecated: use {@link tuiIsCardLengthValid} instead
 * Validates card number length using payment system dictionary
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isCardLengthValid(cardNumber) {
    const { length } = cardNumber;
    const paymentSystem = Object(_get_payment_system__WEBPACK_IMPORTED_MODULE_0__["getPaymentSystem"])(cardNumber);
    switch (paymentSystem) {
        case "electron" /* Electron */:
            return length === 16;
        case "maestro" /* Maestro */:
            return length > 11 && length < 20;
        case "mastercard" /* Mastercard */:
        case "mir" /* Mir */:
            return length > 15 && length < 20;
        case "visa" /* Visa */:
            return length > 12 && length < 20;
        default:
            return length > 8 && length < 20;
    }
}
const tuiIsCardLengthValid = isCardLengthValid;


/***/ }),

/***/ "../addon-commerce/utils/is-card-number-valid.ts":
/*!*******************************************************!*\
  !*** ../addon-commerce/utils/is-card-number-valid.ts ***!
  \*******************************************************/
/*! exports provided: isCardNumberValid, tuiIsCardNumberValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCardNumberValid", function() { return isCardNumberValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsCardNumberValid", function() { return tuiIsCardNumberValid; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");

/**
 * @deprecated: use {@link tuiIsCardNumberValid} instead
 * Validates card number using Luhn algorithm
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isCardNumberValid(value) {
    const cardNumber = String(value).replace(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["TUI_NON_DIGITS_REGEXP"], ``);
    const { length } = cardNumber;
    const arr = cardNumber.split(``).map((char, index) => {
        const digit = parseInt(char, 10);
        if ((index + length) % 2 === 0) {
            const digitX2 = digit * 2;
            return digitX2 > 9 ? digitX2 - 9 : digitX2;
        }
        return digit;
    });
    return !(arr.reduce((a, b) => a + b, 0) % 10);
}
const tuiIsCardNumberValid = isCardNumberValid;


/***/ }),

/***/ "../addon-commerce/utils/is-expire-valid.ts":
/*!**************************************************!*\
  !*** ../addon-commerce/utils/is-expire-valid.ts ***!
  \**************************************************/
/*! exports provided: isExpireValid, tuiIsExpireValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpireValid", function() { return isExpireValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiIsExpireValid", function() { return tuiIsExpireValid; });
/**
 * @deprecated: use {@link tuiIsExpireValid} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isExpireValid(expire) {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear() - 2000;
    const month = parseInt(expire.slice(0, 2), 0);
    const year = parseInt(expire.slice(-2), 0);
    return year > currentYear || (year === currentYear && month >= currentMonth);
}
const tuiIsExpireValid = isExpireValid;


/***/ }),

/***/ "../addon-commerce/validators/card-expire.validator.ts":
/*!*************************************************************!*\
  !*** ../addon-commerce/validators/card-expire.validator.ts ***!
  \*************************************************************/
/*! exports provided: tuiCardExpireValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiCardExpireValidator", function() { return tuiCardExpireValidator; });
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");


function tuiCardExpireValidator({ value, }) {
    var _a;
    return ((_a = value === null || value === void 0 ? void 0 : value.expire) === null || _a === void 0 ? void 0 : _a.length) === 5 && !Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__["isExpireValid"])(value === null || value === void 0 ? void 0 : value.expire)
        ? { expire: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiValidationError"](`Expire date`) }
        : null;
}


/***/ }),

/***/ "../addon-commerce/validators/card-number.validator.ts":
/*!*************************************************************!*\
  !*** ../addon-commerce/validators/card-number.validator.ts ***!
  \*************************************************************/
/*! exports provided: tuiCardNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiCardNumberValidator", function() { return tuiCardNumberValidator; });
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");


function tuiCardNumberValidator({ value, }) {
    return (value === null || value === void 0 ? void 0 : value.card) && !Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__["isCardNumberValid"])(value.card)
        ? { card: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiValidationError"](`Invalid card number`) }
        : null;
}


/***/ }),

/***/ "../addon-commerce/validators/index.ts":
/*!*********************************************!*\
  !*** ../addon-commerce/validators/index.ts ***!
  \*********************************************/
/*! exports provided: tuiCardExpireValidator, tuiCardNumberValidator, tuiCreateLuhnValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_expire_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-expire.validator */ "../addon-commerce/validators/card-expire.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCardExpireValidator", function() { return _card_expire_validator__WEBPACK_IMPORTED_MODULE_0__["tuiCardExpireValidator"]; });

/* harmony import */ var _card_number_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-number.validator */ "../addon-commerce/validators/card-number.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCardNumberValidator", function() { return _card_number_validator__WEBPACK_IMPORTED_MODULE_1__["tuiCardNumberValidator"]; });

/* harmony import */ var _luhn_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./luhn.validator */ "../addon-commerce/validators/luhn.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiCreateLuhnValidator", function() { return _luhn_validator__WEBPACK_IMPORTED_MODULE_2__["tuiCreateLuhnValidator"]; });






/***/ }),

/***/ "../addon-commerce/validators/luhn.validator.ts":
/*!******************************************************!*\
  !*** ../addon-commerce/validators/luhn.validator.ts ***!
  \******************************************************/
/*! exports provided: tuiCreateLuhnValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiCreateLuhnValidator", function() { return tuiCreateLuhnValidator; });
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-commerce/utils */ "../addon-commerce/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");


function tuiCreateLuhnValidator(message) {
    return ({ value }) => {
        return Object(_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__["isCardNumberValid"])(value) ? null : { luhn: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiValidationError"](message) };
    };
}


/***/ })

}]);
//# sourceMappingURL=default~charts-arc-chart-arc-chart-module~charts-axes-axes-module~charts-bar-chart-bar-chart-module~~2b94a250.js.map