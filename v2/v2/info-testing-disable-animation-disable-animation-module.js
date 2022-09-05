(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-testing-disable-animation-disable-animation-module"],{

/***/ "./src/modules/info/testing/disable-animation/disable-animation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/info/testing/disable-animation/disable-animation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DisableAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableAnimationComponent", function() { return DisableAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3431486840313958011$$SRC_MODULES_INFO_TESTING_DISABLE_ANIMATION_DISABLE_ANIMATION_COMPONENT_TS_1 = goog.getMsg("Disable animation");
    I18N_0 = MSG_EXTERNAL_3431486840313958011$$SRC_MODULES_INFO_TESTING_DISABLE_ANIMATION_DISABLE_ANIMATION_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟df2b9a3517093d8eefd3d80f4dcf9bab451cc925␟3431486840313958011:Disable animation`;
}
const _c2 = ["header", I18N_0];
class DisableAnimationComponent {
    constructor() {
        this.disableAnimationExample = __webpack_require__.e(/*! import() | !raw-loader!-examples-disable-all-animation-md */ "!!raw-loader!-examples-disable-all-animation-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/disable-all-animation.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/info/testing/disable-animation/examples/disable-all-animation.md"));
    }
}
DisableAnimationComponent.ɵfac = function DisableAnimationComponent_Factory(t) { return new (t || DisableAnimationComponent)(); };
DisableAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisableAnimationComponent, selectors: [["disable-animation"]], decls: 27, vars: 1, consts: [[6, "header"], ["tuiLink", "", "target", "_blank", "href", "https://www.cypress.io/"], [1, "tui-list"], [1, "tui-list__item"], ["filename", "app.module.ts", 3, "code"]], template: function DisableAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " During integration testing you can face with problem of flaky tests caused by animation. It is especially crucial if you are writing screenshot tests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " For example, you want to make screenshot of dialog content: you click button which opens dialog and make screenshot. Sometimes screenshots can be made too early (before dialog fully opens) and test fails. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " To avoid this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "we recommend to toggle all animation off while integration test works.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " For example, we use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Cypress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " for screenshot testing of our ui-kit components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " To detect if app is running under Cypress we use token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TUI_IS_CYPRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " To disable animation in ALL Taiga UI components we use token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TUI_ANIMATIONS_DURATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tui-doc-code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.disableAnimationExample);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_2__["TuiLinkComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocCodeComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisableAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `disable-animation`,
                templateUrl: `./disable-animation.template.html`,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/testing/disable-animation/disable-animation.module.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/info/testing/disable-animation/disable-animation.module.ts ***!
  \********************************************************************************/
/*! exports provided: DisableAnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableAnimationModule", function() { return DisableAnimationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _disable_animation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disable-animation.component */ "./src/modules/info/testing/disable-animation/disable-animation.component.ts");








class DisableAnimationModule {
}
DisableAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DisableAnimationModule });
DisableAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DisableAnimationModule_Factory(t) { return new (t || DisableAnimationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_disable_animation_component__WEBPACK_IMPORTED_MODULE_5__["DisableAnimationComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisableAnimationModule, { declarations: [_disable_animation_component__WEBPACK_IMPORTED_MODULE_5__["DisableAnimationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DisableAnimationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_disable_animation_component__WEBPACK_IMPORTED_MODULE_5__["DisableAnimationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_disable_animation_component__WEBPACK_IMPORTED_MODULE_5__["DisableAnimationComponent"])),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-testing-disable-animation-disable-animation-module.js.map