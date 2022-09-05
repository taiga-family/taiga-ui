(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mobile-themes-mobile-themes-module"],{

/***/ "./src/modules/components/mobile-themes/examples/1/index.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/mobile-themes/examples/1/index.ts ***!
  \******************************************************************/
/*! exports provided: TuiMobileThemesExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMobileThemesExample1", function() { return TuiMobileThemesExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_mobile_components_theme_android_theme_android_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-mobile/components/theme-android/theme-android.component */ "../addon-mobile/components/theme-android/theme-android.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_mobile_directives_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-mobile/directives/ripple/ripple.directive */ "../addon-mobile/directives/ripple/ripple.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");










class TuiMobileThemesExample1 {
}
TuiMobileThemesExample1.ɵfac = function TuiMobileThemesExample1_Factory(t) { return new (t || TuiMobileThemesExample1)(); };
TuiMobileThemesExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMobileThemesExample1, selectors: [["tui-mobile-themes-example-1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"],
                useValue: true,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"],
                useValue: true,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"],
                useValue: false,
            },
        ])], decls: 13, vars: 0, consts: [["tuiButton", "", "tuiRipple", "", "size", "m"], ["tuiLink", "", "href", "http://ng-web-apis.github.io/", "target", "_blank"], ["tuiRipple", ""]], template: function TuiMobileThemesExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-theme-android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hello\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Link:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Let's check it\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Island:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-island", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_mobile_components_theme_android_theme_android_component__WEBPACK_IMPORTED_MODULE_4__["TuiThemeAndroidComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _addon_mobile_directives_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["TuiRippleDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__["TuiIslandComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMobileThemesExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mobile-themes-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"],
                        useValue: true,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"],
                        useValue: true,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"],
                        useValue: false,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-themes/examples/2/index.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/mobile-themes/examples/2/index.ts ***!
  \******************************************************************/
/*! exports provided: TuiMobileThemesExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMobileThemesExample2", function() { return TuiMobileThemesExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_mobile_components_theme_ios_theme_ios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-mobile/components/theme-ios/theme-ios.component */ "../addon-mobile/components/theme-ios/theme-ios.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_mobile_directives_touchable_touchable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-mobile/directives/touchable/touchable.directive */ "../addon-mobile/directives/touchable/touchable.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");










class TuiMobileThemesExample2 {
}
TuiMobileThemesExample2.ɵfac = function TuiMobileThemesExample2_Factory(t) { return new (t || TuiMobileThemesExample2)(); };
TuiMobileThemesExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMobileThemesExample2, selectors: [["tui-mobile-themes-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"],
                useValue: true,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"],
                useValue: false,
            },
            {
                provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"],
                useValue: true,
            },
        ])], decls: 13, vars: 0, consts: [["tuiButton", "", "tuiTouchable", "", "size", "m"], ["tuiLink", "", "href", "http://ng-web-apis.github.io/", "tuiTouchable", "", "target", "_blank"], ["tuiTouchable", ""]], template: function TuiMobileThemesExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-theme-ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Button:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hello\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Link:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Let's check it\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Island:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-island", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_mobile_components_theme_ios_theme_ios_component__WEBPACK_IMPORTED_MODULE_4__["TuiThemeIosComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _addon_mobile_directives_touchable_touchable_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTouchableDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__["TuiIslandComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMobileThemesExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mobile-themes-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_MOBILE"],
                        useValue: true,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_ANDROID"],
                        useValue: false,
                    },
                    {
                        provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_IS_IOS"],
                        useValue: true,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-themes/mobile-themes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/components/mobile-themes/mobile-themes.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExampleTuiMobileThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMobileThemesComponent", function() { return ExampleTuiMobileThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/mobile-themes/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/mobile-themes/examples/2/index.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2330057393679301185$$SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__1 = goog.getMsg(" Import {$startTagCode}TuiThemeAndroidModule{$closeTagCode} into your app.module and add {$startTagCode}tui-theme-android{$closeTagCode} component to enable Android theme. {$startTagCode}TUI_IS_ANDROID{$closeTagCode} can help to recognize Android user {$startTagTuiDocExample}{$startTagTuiMobileThemesExample_1}{$closeTagTuiMobileThemesExample_1}{$closeTagTuiDocExample}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startTagTuiDocExample": "\uFFFD#4\uFFFD", "startTagTuiMobileThemesExample_1": "\uFFFD#5\uFFFD", "closeTagTuiMobileThemesExample_1": "\uFFFD/#5\uFFFD", "closeTagTuiDocExample": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2330057393679301185$$SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟f335ff8e36625de8856949704ea7aa92c4ffa60e␟2330057393679301185: Import ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiThemeAndroidModule${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: into your app.module and add ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tui-theme-android${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: component to enable Android theme. ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TUI_IS_ANDROID${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: can help to recognize Android user ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_MOBILE_THEMES_EXAMPLE_1:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_MOBILE_THEMES_EXAMPLE_1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiMobileThemesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-mobile-themes-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3212179631166384013$$SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__3 = goog.getMsg(" Import {$startTagCode}TuiThemeIosModule{$closeTagCode} into your app.module and add {$startTagCode}tui-theme-ios{$closeTagCode} . {$startTagCode}TUI_IS_IOS{$closeTagCode} can help to recognize iOS user {$startTagTuiDocExample}{$startTagTuiMobileThemesExample_2}{$closeTagTuiMobileThemesExample_2}{$closeTagTuiDocExample}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startTagTuiDocExample": "\uFFFD#4\uFFFD", "startTagTuiMobileThemesExample_2": "\uFFFD#5\uFFFD", "closeTagTuiMobileThemesExample_2": "\uFFFD/#5\uFFFD", "closeTagTuiDocExample": "\uFFFD/#4\uFFFD" });
    I18N_2 = MSG_EXTERNAL_3212179631166384013$$SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟0307acf4cd2436711e977da31caf365fd5624557␟3212179631166384013: Import ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiThemeIosModule${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: into your app.module and add ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tui-theme-ios${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TUI_IS_IOS${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: can help to recognize iOS user ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_MOBILE_THEMES_EXAMPLE_2:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_MOBILE_THEMES_EXAMPLE_2:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_2);
function ExampleTuiMobileThemesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-mobile-themes-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.example2);
} }
class ExampleTuiMobileThemesComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/2/index.html")),
        };
    }
}
ExampleTuiMobileThemesComponent.ɵfac = function ExampleTuiMobileThemesComponent_Factory(t) { return new (t || ExampleTuiMobileThemesComponent)(); };
ExampleTuiMobileThemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiMobileThemesComponent, selectors: [["example-tui-mobile-themes"]], decls: 3, vars: 0, consts: [["header", "Mobile themes", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", "Android"], ["pageTab", "IOS"], ["id", "Android", "heading", "Android", 3, "content"], ["id", "IOS", "heading", "IOS", 3, "content"]], template: function ExampleTuiMobileThemesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiMobileThemesComponent_ng_template_1_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMobileThemesComponent_ng_template_2_Template, 6, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiMobileThemesExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiMobileThemesExample2"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiMobileThemesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-mobile-themes`,
                templateUrl: `./mobile-themes.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-themes/mobile-themes.module.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/components/mobile-themes/mobile-themes.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExampleTuiMobileThemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMobileThemesModule", function() { return ExampleTuiMobileThemesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/mobile-themes/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/mobile-themes/examples/2/index.ts");
/* harmony import */ var _mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-themes.component */ "./src/modules/components/mobile-themes/mobile-themes.component.ts");












class ExampleTuiMobileThemesModule {
}
ExampleTuiMobileThemesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiMobileThemesModule });
ExampleTuiMobileThemesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiMobileThemesModule_Factory(t) { return new (t || ExampleTuiMobileThemesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeIosModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeAndroidModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiRippleModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiTouchableModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiMobileThemesModule, { declarations: [_mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMobileThemesExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMobileThemesExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeIosModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeAndroidModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiRippleModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiTouchableModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiMobileThemesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeIosModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiThemeAndroidModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiRippleModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiTouchableModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"])),
                ],
                declarations: [
                    _mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMobileThemesExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMobileThemesExample2"],
                ],
                exports: [_mobile_themes_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileThemesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-mobile-themes-mobile-themes-module.js.map