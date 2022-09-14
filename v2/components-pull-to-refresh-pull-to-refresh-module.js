(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pull-to-refresh-pull-to-refresh-module"],{

/***/ "./src/modules/components/pull-to-refresh/examples/1/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/pull-to-refresh/examples/1/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiPullToRefreshExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPullToRefreshExample1", function() { return TuiPullToRefreshExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _addon_mobile_components_pull_to_refresh_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-mobile/components/pull-to-refresh/pull-to-refresh.component */ "../addon-mobile/components/pull-to-refresh/pull-to-refresh.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");











const loaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
class TuiPullToRefreshExample1 {
    constructor(alertService) {
        this.alertService = alertService;
    }
    onPull() {
        this.alertService.open(`Loading...`).subscribe();
    }
    finishLoading() {
        loaded$.next();
    }
}
TuiPullToRefreshExample1.ɵfac = function TuiPullToRefreshExample1_Factory(t) { return new (t || TuiPullToRefreshExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"])); };
TuiPullToRefreshExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPullToRefreshExample1, selectors: [["tui-pull-to-refresh-example-1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_IOS"],
                useValue: false,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_ANDROID"],
                useValue: true,
            },
            {
                provide: _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TUI_LOADED"],
                useValue: loaded$.asObservable(),
            },
        ])], decls: 4, vars: 0, consts: [[3, "pulled"], ["tuiButton", "", "type", "button", 1, "tui-space_top-8", "tui-space_bottom-8", 3, "click"]], template: function TuiPullToRefreshExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-pull-to-refresh", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pulled", function TuiPullToRefreshExample1_Template_tui_pull_to_refresh_pulled_0_listener() { return ctx.onPull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPullToRefreshExample1_Template_button_click_2_listener() { return ctx.finishLoading(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Finish loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_mobile_components_pull_to_refresh_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPullToRefreshExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pull-to-refresh-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_IOS"],
                        useValue: false,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_ANDROID"],
                        useValue: true,
                    },
                    {
                        provide: _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TUI_LOADED"],
                        useValue: loaded$.asObservable(),
                    },
                ],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pull-to-refresh/examples/2/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/pull-to-refresh/examples/2/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiPullToRefreshExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPullToRefreshExample2", function() { return TuiPullToRefreshExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _addon_mobile_components_pull_to_refresh_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-mobile/components/pull-to-refresh/pull-to-refresh.component */ "../addon-mobile/components/pull-to-refresh/pull-to-refresh.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");











const loaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
class TuiPullToRefreshExample2 {
    constructor(alertService) {
        this.alertService = alertService;
    }
    onPull() {
        this.alertService.open(`Loading...`).subscribe();
    }
    finishLoading() {
        loaded$.next();
    }
}
TuiPullToRefreshExample2.ɵfac = function TuiPullToRefreshExample2_Factory(t) { return new (t || TuiPullToRefreshExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"])); };
TuiPullToRefreshExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPullToRefreshExample2, selectors: [["tui-pull-to-refresh-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_IOS"],
                useValue: true,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_ANDROID"],
                useValue: false,
            },
            {
                provide: _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TUI_LOADED"],
                useValue: loaded$.asObservable(),
            },
        ])], decls: 4, vars: 0, consts: [[3, "pulled"], ["tuiButton", "", "type", "button", 1, "tui-space_top-8", "tui-space_bottom-8", 3, "click"]], template: function TuiPullToRefreshExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-pull-to-refresh", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pulled", function TuiPullToRefreshExample2_Template_tui_pull_to_refresh_pulled_0_listener() { return ctx.onPull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPullToRefreshExample2_Template_button_click_2_listener() { return ctx.finishLoading(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Finish loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_mobile_components_pull_to_refresh_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPullToRefreshExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pull-to-refresh-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_IOS"],
                        useValue: true,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_ANDROID"],
                        useValue: false,
                    },
                    {
                        provide: _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TUI_LOADED"],
                        useValue: loaded$.asObservable(),
                    },
                ],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pull-to-refresh/pull-to-refresh.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/pull-to-refresh/pull-to-refresh.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleTuiPullToRefreshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPullToRefreshComponent", function() { return ExampleTuiPullToRefreshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/pull-to-refresh/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/pull-to-refresh/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");










var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS_1 = goog.getMsg("Setup");
    I18N_0 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c2 = ["pageTab", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4432508614424882371$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__4 = goog.getMsg(" Component to refresh content after pull top. It emulates appearance of native iOS and Android components ");
    I18N_3 = MSG_EXTERNAL_4432508614424882371$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟8aef567038ca46da2e608edf00b4c1318aa2565d␟4432508614424882371: Component to refresh content after pull top. It emulates appearance of native iOS and Android components `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4348148278078655557$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__6 = goog.getMsg("{$startTagDiv} It emits {$startTagCode}(pulled){$closeTagCode} event when user wants to start loading. {$closeTagDiv}{$startTagDiv_1} You can finish loading with {$startTagCode}TUI_LOADED{$closeTagCode} stream token that can be provided in DI {$closeTagDiv}", { "startTagDiv": "\uFFFD#4\uFFFD", "startTagCode": "[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]", "closeTagCode": "[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]", "closeTagDiv": "[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]", "startTagDiv_1": "\uFFFD#6\uFFFD" });
    I18N_5 = MSG_EXTERNAL_4348148278078655557$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟c3974c8157d46bb344ac821f0e0916067b4fb2e7␟4348148278078655557:${"\uFFFD#4\uFFFD"}:START_TAG_DIV: It emits ${"[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:(pulled)${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: event when user wants to start loading. ${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#6\uFFFD"}:START_TAG_DIV_1: You can finish loading with ${"[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:TUI_LOADED${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: stream token that can be provided in DI ${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_DIV:`;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
function ExampleTuiPullToRefreshComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-pull-to-refresh-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-pull-to-refresh-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6177879691998756452$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__8 = goog.getMsg(" Import {$startTagCode}TuiPullToRefreshModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_7 = MSG_EXTERNAL_6177879691998756452$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟5fbbdc188855f8b538e3cbc4ed0a0f6157c29e25␟6177879691998756452: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPullToRefreshModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__10 = goog.getMsg("Add to the template:");
    I18N_9 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiPullToRefreshComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiPullToRefreshComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/2/index.html")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/import/insert-template.md"));
    }
}
ExampleTuiPullToRefreshComponent.ɵfac = function ExampleTuiPullToRefreshComponent_Factory(t) { return new (t || ExampleTuiPullToRefreshComponent)(); };
ExampleTuiPullToRefreshComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPullToRefreshComponent, selectors: [["example-mobile-pull-to-refresh-page"]], decls: 4, vars: 0, consts: [["header", "PullToRefresh", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], [6, "pageTab"], [1, "tui-space_top-4"], [1, "tui-space_top-2"], ["id", "android", "heading", "Android", 3, "content"], ["id", "ios", "heading", "iOS", 3, "content"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPullToRefreshComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPullToRefreshComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPullToRefreshComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiPullToRefreshExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshExample2"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPullToRefreshComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-mobile-pull-to-refresh-page`,
                templateUrl: `./pull-to-refresh.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pull-to-refresh/pull-to-refresh.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/components/pull-to-refresh/pull-to-refresh.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiPullToRefreshModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPullToRefreshModule", function() { return ExampleTuiPullToRefreshModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/pull-to-refresh/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/pull-to-refresh/examples/2/index.ts");
/* harmony import */ var _pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pull-to-refresh.component */ "./src/modules/components/pull-to-refresh/pull-to-refresh.component.ts");











class ExampleTuiPullToRefreshModule {
}
ExampleTuiPullToRefreshModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPullToRefreshModule });
ExampleTuiPullToRefreshModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPullToRefreshModule_Factory(t) { return new (t || ExampleTuiPullToRefreshModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiPullToRefreshModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPullToRefreshModule, { declarations: [_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPullToRefreshExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiPullToRefreshModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPullToRefreshModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiPullToRefreshModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"])),
                ],
                declarations: [
                    _pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPullToRefreshExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiPullToRefreshExample2"],
                ],
                exports: [_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPullToRefreshComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pull-to-refresh-pull-to-refresh-module.js.map