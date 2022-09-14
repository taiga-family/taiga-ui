(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-browser-browser-module"],{

/***/ "./src/modules/utils/browser/browser.component.ts":
/*!********************************************************!*\
  !*** ./src/modules/utils/browser/browser.component.ts ***!
  \********************************************************/
/*! exports provided: ExampleBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleBrowserComponent", function() { return ExampleBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/utils/browser/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1141403969432151030$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_1 = goog.getMsg("Browser utils");
    I18N_0 = MSG_EXTERNAL_1141403969432151030$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟f9c6a0ed822ca3080f9a3110255f7e8337323d18␟1141403969432151030:Browser utils`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5545918984621976325$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__7 = goog.getMsg("A set of tools for work with browser");
    I18N_6 = MSG_EXTERNAL_5545918984621976325$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟40ec2c87f7f7e9226eff45bce9c943aa0c744f71␟5545918984621976325:A set of tools for work with browser`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6921954424489541591$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__9 = goog.getMsg("Browser detection");
    I18N_8 = MSG_EXTERNAL_6921954424489541591$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟1e0d211c5dc58e7091fbbdd270900b2936cfd886␟6921954424489541591:Browser detection`;
}
const _c10 = ["heading", I18N_8];
function ExampleBrowserComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-browser-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__12 = goog.getMsg("Import into component and use:");
    I18N_11 = MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
}
function ExampleBrowserComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.importComponentExample);
} }
class ExampleBrowserComponent {
    constructor() {
        this.importComponentExample = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-component-md */ "!!raw-loader!-examples-import-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/browser/examples/import/import-component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/browser/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/browser/examples/1/index.html")),
        };
    }
}
ExampleBrowserComponent.ɵfac = function ExampleBrowserComponent_Factory(t) { return new (t || ExampleBrowserComponent)(); };
ExampleBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleBrowserComponent, selectors: [["example-browser"]], decls: 5, vars: 0, consts: [["package", "CDK", "path", "cdk/utils/browser", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "browser", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleBrowserComponent_ng_template_2_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleBrowserComponent_ng_template_3_Template, 5, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiBrowserExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-browser`,
                templateUrl: `./browser.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/browser/browser.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/utils/browser/browser.module.ts ***!
  \*****************************************************/
/*! exports provided: ExampleBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleBrowserModule", function() { return ExampleBrowserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _browser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser.component */ "./src/modules/utils/browser/browser.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/utils/browser/examples/1/index.ts");








class ExampleBrowserModule {
}
ExampleBrowserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleBrowserModule });
ExampleBrowserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleBrowserModule_Factory(t) { return new (t || ExampleBrowserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleBrowserModule, { declarations: [_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiBrowserExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleBrowserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"])),
                ],
                declarations: [_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiBrowserExample1"]],
                exports: [_browser_component__WEBPACK_IMPORTED_MODULE_4__["ExampleBrowserComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/browser/examples/1/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/utils/browser/examples/1/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiBrowserExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBrowserExample1", function() { return TuiBrowserExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");






class TuiBrowserExample1 {
    constructor(userAgent) {
        this.userAgent = userAgent;
    }
    get aboutMyBrowser() {
        if (Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isEdge"])(this.userAgent)) {
            if (Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isEdgeOlderThan"])(13, this.userAgent)) {
                return `Edge older than 13`;
            }
            return `Edge until 13`;
        }
        if (Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isIE"])(this.userAgent)) {
            return `Unfortunately, you have IE11`;
        }
        if (Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isFirefox"])(this.userAgent)) {
            return `Okay, you have Firefox!`;
        }
        return `You have Chromium based browser, cool!`;
    }
}
TuiBrowserExample1.ɵfac = function TuiBrowserExample1_Factory(t) { return new (t || TuiBrowserExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__["USER_AGENT"])); };
TuiBrowserExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBrowserExample1, selectors: [["tui-browser-example-1"]], decls: 4, vars: 1, template: function TuiBrowserExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your browser is:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutMyBrowser);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBrowserExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-browser-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__["USER_AGENT"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=utils-browser-browser-module.js.map