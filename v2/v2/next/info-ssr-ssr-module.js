(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-ssr-ssr-module"],{

/***/ "./src/modules/info/ssr/ssr.component.ts":
/*!***********************************************!*\
  !*** ./src/modules/info/ssr/ssr.component.ts ***!
  \***********************************************/
/*! exports provided: SsrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsrComponent", function() { return SsrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8859455073616570225$$SRC_MODULES_INFO_SSR_SSR_COMPONENT_TS_1 = goog.getMsg("Server Side Rendering (SSR)");
    I18N_0 = MSG_EXTERNAL_8859455073616570225$$SRC_MODULES_INFO_SSR_SSR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟7dc4e663b884d6aae49dc6225bb11259847d4247␟8859455073616570225:Server Side Rendering (SSR)`;
}
const _c2 = ["header", I18N_0];
class SsrComponent {
}
SsrComponent.ɵfac = function SsrComponent_Factory(t) { return new (t || SsrComponent)(); };
SsrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SsrComponent, selectors: [["ssr"]], decls: 37, vars: 0, consts: [[6, "header"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/common", "target", "_blank", "rel", "noreferrer noopener"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/universal", "target", "_blank", "rel", "noreferrer noopener"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/universal#mocks", "target", "_blank", "rel", "noreferrer noopener"]], template: function SsrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Taiga UI does not access global variables like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "navigator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " directly. Instead, we rely on DI tokens for simplicity of testing and cross-environment support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " A separate library called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "@ng-web-apis/common");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " is dedicated solely to this purpose. It is a direct dependency and is installed with Taiga UI, you can find docs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fallback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " For Server Side Rendering (SSR), a sister library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "@ng-web-apis/universal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " can be used. It has advanced mocks and tools to extract user agent and location info from server side requests. If you want to use SSR with Taiga UI you need to install this package and follow instructions from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " README ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " . Note that this is also applicable to Jest which is a server side testing suite. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Taiga UI uses modern JavaScript with classes that might be not available in server side environment. To add mocks for those classes you can also use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@ng-web-apis/universal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " package (see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " this section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " of README). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__["TuiLinkComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `ssr`,
                templateUrl: `ssr.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/ssr/ssr.module.ts":
/*!********************************************!*\
  !*** ./src/modules/info/ssr/ssr.module.ts ***!
  \********************************************/
/*! exports provided: SsrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsrModule", function() { return SsrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _ssr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssr.component */ "./src/modules/info/ssr/ssr.component.ts");







class SsrModule {
}
SsrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SsrModule });
SsrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SsrModule_Factory(t) { return new (t || SsrModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SsrModule, { declarations: [_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsrModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"])),
                ],
                declarations: [_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"]],
                exports: [_ssr_component__WEBPACK_IMPORTED_MODULE_4__["SsrComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-ssr-ssr-module.js.map