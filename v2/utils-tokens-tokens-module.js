(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-tokens-tokens-module"],{

/***/ "./src/modules/utils/tokens/examples/1/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/1/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample1", function() { return TuiTokensExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/tokens */ "../cdk/tokens/index.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_705840752082841277$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Inject this token if you need access to Renderer inside a singleton service.");
    I18N_0 = MSG_EXTERNAL_705840752082841277$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟a45b7001e37ea8248fd55ba5ae99d24dd723d6a1␟705840752082841277:Inject this token if you need access to Renderer inside a singleton service.`;
}
class TuiTokensExample1 {
    constructor(renderer) {
        this.renderer = renderer;
        this.style = this.renderer.createElement(`style`);
    }
}
TuiTokensExample1.ɵfac = function TuiTokensExample1_Factory(t) { return new (t || TuiTokensExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_RENDERER"])); };
TuiTokensExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample1, selectors: [["tui-token-example-1"]], decls: 2, vars: 0, template: function TuiTokensExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_RENDERER"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/2/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/2/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample2", function() { return TuiTokensExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3318931371219148105$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" A multi token of Observables of modal dialogs displayed by {$startLink} TuiDialogHostComponent {$closeLink} .\n", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_3318931371219148105$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟c3d79f09b1c77f498f804685e4ac8abfc97d1263␟3318931371219148105: A multi token of Observables of modal dialogs displayed by ${"\uFFFD#2\uFFFD"}:START_LINK: TuiDialogHostComponent ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: .
`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8403177569073028050$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" You can create your own service extending {$startLink} AbstractTuiDialogService {$closeLink} to easily add modal dialogs to your application.\n", { "startLink": "\uFFFD#5\uFFFD", "closeLink": "\uFFFD/#5\uFFFD" });
    I18N_2 = MSG_EXTERNAL_8403177569073028050$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟01fcb6df1b0ea45a686bb2d7f78e6f316704ee3f␟8403177569073028050: You can create your own service extending ${"\uFFFD#5\uFFFD"}:START_LINK: AbstractTuiDialogService ${"\uFFFD/#5\uFFFD"}:CLOSE_LINK: to easily add modal dialogs to your application.
`;
}
class TuiTokensExample2 {
    constructor(dialogs) {
        this.dialogs = dialogs;
    }
}
TuiTokensExample2.ɵfac = function TuiTokensExample2_Factory(t) { return new (t || TuiTokensExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_DIALOGS"], 8)); };
TuiTokensExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample2, selectors: [["tui-token-example-2"]], decls: 6, vars: 0, consts: [["tuiLink", "", "routerLink", "/dialog"], ["tuiLink", "", "routerLink", "/components/dialog"]], template: function TuiTokensExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_DIALOGS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/3/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/3/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample3", function() { return TuiTokensExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3280607424648339721$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.\n");
    I18N_0 = MSG_EXTERNAL_3280607424648339721$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟dabfe4dcd5358df2710c18d91692fca955cfe97e␟3280607424648339721: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.
`;
}
class TuiTokensExample3 {
    constructor(tuiFocusableComponent) {
        this.tuiFocusableComponent = tuiFocusableComponent;
    }
}
TuiTokensExample3.ɵfac = function TuiTokensExample3_Factory(t) { return new (t || TuiTokensExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FOCUSABLE_ITEM_ACCESSOR"], 8)); };
TuiTokensExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample3, selectors: [["tui-token-example-3"]], decls: 2, vars: 0, template: function TuiTokensExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FOCUSABLE_ITEM_ACCESSOR"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/4/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/4/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample4", function() { return TuiTokensExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7919254654716806629$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes {$startLink} TUI_IS_MOBILE {$closeLink} and {$startLink_1} TUI_IS_IOS {$closeLink} , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)\n", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startLink_1": "\uFFFD#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7919254654716806629$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_4_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟f45f6ff9b077d96c96c0492ce03b8d2bb218bd4c␟7919254654716806629: A token with a factory. It takes ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_IS_MOBILE ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: TUI_IS_IOS ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)
`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
class TuiTokensExample4 {
    constructor(isAndroid) {
        this.isAndroid = isAndroid;
    }
}
TuiTokensExample4.ɵfac = function TuiTokensExample4_Factory(t) { return new (t || TuiTokensExample4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"])); };
TuiTokensExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample4, selectors: [["tui-token-example-4"]], decls: 4, vars: 0, consts: [["tuiLink", "", "routerLink", ".", "fragment", "is-mobile"], ["tuiLink", "", "routerLink", ".", "fragment", "is-ios"]], template: function TuiTokensExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/5/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/5/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample5", function() { return TuiTokensExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/tokens */ "../cdk/tokens/index.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7260144031031628013$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_5_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes {$startLink} TUI_IS_MOBILE {$closeLink} and if it is true detects iOS devices with a regex\n", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7260144031031628013$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_5_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟91528f04c4deee77ae0cf540a8023262f2ab6665␟7260144031031628013: A token with a factory. It takes ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_IS_MOBILE ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: and if it is true detects iOS devices with a regex
`;
}
class TuiTokensExample5 {
    constructor(isIos) {
        this.isIos = isIos;
    }
}
TuiTokensExample5.ɵfac = function TuiTokensExample5_Factory(t) { return new (t || TuiTokensExample5)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"])); };
TuiTokensExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample5, selectors: [["tui-token-example-5"]], decls: 3, vars: 0, consts: [["tuiLink", "", "routerLink", ".", "fragment", "is-mobile"]], template: function TuiTokensExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/6/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/6/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample6", function() { return TuiTokensExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5737617888014424543$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_6_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices\n");
    I18N_0 = MSG_EXTERNAL_5737617888014424543$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_6_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟abf3ac0a1bcf55a9764c7d357f716e8c46ec4c7a␟5737617888014424543: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices
`;
}
class TuiTokensExample6 {
    constructor(isMobile) {
        this.isMobile = isMobile;
    }
}
TuiTokensExample6.ɵfac = function TuiTokensExample6_Factory(t) { return new (t || TuiTokensExample6)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"])); };
TuiTokensExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample6, selectors: [["tui-token-example-6"]], decls: 2, vars: 0, template: function TuiTokensExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-6`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/7/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/7/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample7", function() { return TuiTokensExample7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1374151690390950622$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_7_INDEX_TS_1 = goog.getMsg("Provide an array of 12 strings for localized names for months to be used in TuiMonthPipe");
    I18N_0 = MSG_EXTERNAL_1374151690390950622$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_7_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟d2b249f846248649908ad2bab2f731f627a16dfe␟1374151690390950622:Provide an array of 12 strings for localized names for months to be used in TuiMonthPipe`;
}
class TuiTokensExample7 {
    constructor(months$) {
        this.months$ = months$;
    }
}
TuiTokensExample7.ɵfac = function TuiTokensExample7_Factory(t) { return new (t || TuiTokensExample7)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_MONTHS"])); };
TuiTokensExample7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample7, selectors: [["tui-token-example-7"]], decls: 2, vars: 0, template: function TuiTokensExample7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-7`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_MONTHS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/examples/8/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/examples/8/index.ts ***!
  \******************************************************/
/*! exports provided: TuiTokensExample8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTokensExample8", function() { return TuiTokensExample8; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6639559641070555035$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_8_INDEX_TS_1 = goog.getMsg("{$startTagDiv} Using {$startTagStrong}TUI_NUMBER_FORMAT{$closeTagStrong} injection token you can customize numbers formatting. {$closeTagDiv}{$startTagDiv}For example: 10 500,33{$closeTagDiv}{$startTagDiv}Can be customized as: 10/500.33{$closeTagDiv}{$startTagSection}{$startHeadingLevel3}Defaults:{$closeHeadingLevel3}{$startUnorderedList}{$startListItem} decimalSeparator = {$startTagCode},{$closeTagCode}{$closeListItem}{$startListItem} thousandSeparator = {$startTagCode}CHAR_NO_BREAK_SPACE{$closeTagCode}{$closeListItem}{$startListItem} zeroPadding = {$startTagCode}true{$closeTagCode}{$closeListItem}{$closeUnorderedList}{$closeTagSection}{$startTagSection}{$startHeadingLevel3}Components that are customizable:{$closeHeadingLevel3}{$startUnorderedList}{$startListItem}{$startLink} TuiMoneyComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_1} TuiFormatNumberPipe {$closeLink}{$closeListItem}{$startListItem}{$startLink_2} TuiInputNumberComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_3} TuiInputSliderComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_4} TuiInputRangeComponent {$closeLink}{$closeListItem}{$closeUnorderedList}{$closeTagSection}", { "startTagDiv": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD", "closeTagDiv": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]", "startTagSection": "[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]", "startHeadingLevel3": "[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]", "closeHeadingLevel3": "[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]", "startUnorderedList": "[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]", "startListItem": "[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]", "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]", "closeListItem": "[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]", "closeUnorderedList": "[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]", "closeTagSection": "[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]", "startLink": "\uFFFD#19\uFFFD", "closeLink": "[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]", "startLink_1": "\uFFFD#21\uFFFD", "startLink_2": "\uFFFD#23\uFFFD", "startLink_3": "\uFFFD#25\uFFFD", "startLink_4": "\uFFFD#27\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6639559641070555035$$SRC_MODULES_UTILS_TOKENS_EXAMPLES_8_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟0c2f92ed6e4c694e9e5777611745fef956fc57b2␟6639559641070555035:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV: Using ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:TUI_NUMBER_FORMAT${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: injection token you can customize numbers formatting. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV:For example: 10 500,33${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV:Can be customized as: 10/500.33${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_SECTION:${"[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]"}:START_HEADING_LEVEL3:Defaults:${"[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_HEADING_LEVEL3:${"[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: decimalSeparator = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:,${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: thousandSeparator = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:CHAR_NO_BREAK_SPACE${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: zeroPadding = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:true${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_SECTION:${"[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_SECTION:${"[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]"}:START_HEADING_LEVEL3:Components that are customizable:${"[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_HEADING_LEVEL3:${"[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#19\uFFFD"}:START_LINK: TuiMoneyComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#21\uFFFD"}:START_LINK_1: TuiFormatNumberPipe ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#23\uFFFD"}:START_LINK_2: TuiInputNumberComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#25\uFFFD"}:START_LINK_3: TuiInputSliderComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#27\uFFFD"}:START_LINK_4: TuiInputRangeComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_SECTION:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
class TuiTokensExample8 {
    constructor(TuiNumberFormatSettings) {
        this.TuiNumberFormatSettings = TuiNumberFormatSettings;
    }
}
TuiTokensExample8.ɵfac = function TuiTokensExample8_Factory(t) { return new (t || TuiTokensExample8)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_NUMBER_FORMAT"])); };
TuiTokensExample8.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTokensExample8, selectors: [["tui-token-example-8"]], decls: 28, vars: 0, consts: [[1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["tuiLink", "", "routerLink", "/components/money"], ["tuiLink", "", "routerLink", "/pipes/format-number"], ["tuiLink", "", "routerLink", "/components/input-number"], ["tuiLink", "", "routerLink", "/components/input-slider"], ["tuiLink", "", "routerLink", "/components/input-range"]], template: function TuiTokensExample8_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTokensExample8, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-token-example-8`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_NUMBER_FORMAT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/tokens.component.ts":
/*!******************************************************!*\
  !*** ./src/modules/utils/tokens/tokens.component.ts ***!
  \******************************************************/
/*! exports provided: ExampleTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTokensComponent", function() { return ExampleTokensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/utils/tokens/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/utils/tokens/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/utils/tokens/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/utils/tokens/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/utils/tokens/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/utils/tokens/examples/6/index.ts");
/* harmony import */ var _examples_8_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/8/index */ "./src/modules/utils/tokens/examples/8/index.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4548722462586549001$$SRC_MODULES_UTILS_TOKENS_TOKENS_COMPONENT_TS_1 = goog.getMsg("Tokens");
    I18N_0 = MSG_EXTERNAL_4548722462586549001$$SRC_MODULES_UTILS_TOKENS_TOKENS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟831c70609f5320ba73bb112526ec9cb86c71367c␟4548722462586549001:Tokens`;
}
const _c2 = ["header", I18N_0];
function ExampleTokensComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-token-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-token-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-token-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-token-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-token-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-token-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-token-example-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example8);
} }
class ExampleTokensComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/1/index.ts")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/2/index.ts")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/3/index.ts")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/4/index.ts")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/5/index.ts")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/6/index.ts")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/7/index.ts")),
        };
        this.example8 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-ts */ "!!raw-loader!-examples-8-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/8/index.ts")),
        };
    }
}
ExampleTokensComponent.ɵfac = function ExampleTokensComponent_Factory(t) { return new (t || ExampleTokensComponent)(); };
ExampleTokensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTokensComponent, selectors: [["example-tokens"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TUI_DOC_CODE_EDITOR"], useValue: null }])], decls: 3, vars: 0, consts: [["package", "CDK", "path", "cdk/tokens", 6, "header"], ["pageTab", ""], ["id", "default-renderer", "heading", "TUI_DEFAULT_RENDERER", 3, "content"], ["id", "dialog", "heading", "TUI_DIALOGS", 3, "content"], ["id", "focusable-item-accessor", "heading", "TUI_FOCUSABLE_ITEM_ACCESSOR", 3, "content"], ["id", "is-android", "heading", "TUI_IS_ANDROID", 3, "content"], ["id", "is-ios", "heading", "TUI_IS_IOS", 3, "content"], ["id", "is-mobile", "heading", "TUI_IS_MOBILE", 3, "content"], ["id", "number-format", "heading", "TUI_NUMBER_FORMAT", 3, "content"]], template: function ExampleTokensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTokensComponent_ng_template_2_Template, 14, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiTokensExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiTokensExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_8__["TuiTokensExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_9__["TuiTokensExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_10__["TuiTokensExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_11__["TuiTokensExample6"], _examples_8_index__WEBPACK_IMPORTED_MODULE_12__["TuiTokensExample8"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTokensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tokens`,
                templateUrl: `./tokens.template.html`,
                providers: [{ provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TUI_DOC_CODE_EDITOR"], useValue: null }],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/tokens/tokens.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/utils/tokens/tokens.module.ts ***!
  \***************************************************/
/*! exports provided: ExampleTokensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTokensModule", function() { return ExampleTokensModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/utils/tokens/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/utils/tokens/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/utils/tokens/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/utils/tokens/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/utils/tokens/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/utils/tokens/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/utils/tokens/examples/7/index.ts");
/* harmony import */ var _examples_8__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/8 */ "./src/modules/utils/tokens/examples/8/index.ts");
/* harmony import */ var _tokens_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tokens.component */ "./src/modules/utils/tokens/tokens.component.ts");
















class ExampleTokensModule {
}
ExampleTokensModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTokensModule });
ExampleTokensModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTokensModule_Factory(t) { return new (t || ExampleTokensModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTokensModule, { declarations: [_tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiTokensExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiTokensExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_7__["TuiTokensExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_8__["TuiTokensExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_9__["TuiTokensExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_10__["TuiTokensExample6"],
        _examples_7__WEBPACK_IMPORTED_MODULE_11__["TuiTokensExample7"],
        _examples_8__WEBPACK_IMPORTED_MODULE_12__["TuiTokensExample8"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTokensModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"])),
                ],
                declarations: [
                    _tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiTokensExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_6__["TuiTokensExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_7__["TuiTokensExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_8__["TuiTokensExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_9__["TuiTokensExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_10__["TuiTokensExample6"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_11__["TuiTokensExample7"],
                    _examples_8__WEBPACK_IMPORTED_MODULE_12__["TuiTokensExample8"],
                ],
                exports: [_tokens_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTokensComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=utils-tokens-tokens-module.js.map