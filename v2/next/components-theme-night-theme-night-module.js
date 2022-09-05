(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-theme-night-theme-night-module"],{

/***/ "./src/modules/components/theme-night/theme-night.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/theme-night/theme-night.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiThemeNightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiThemeNightComponent", function() { return ExampleTuiThemeNightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8704820817429528545$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}ThemeNight{$closeTagCode} is a {$startLink}{$startTagCode}ThemeSwitcher{$closeTagCode}{$closeLink} that you can use together with {$startLink_1}{$startTagCode}Mode{$closeTagCode}{$closeLink} directive to create a night mode in you application. ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]", "startLink": "\uFFFD#3\uFFFD", "closeLink": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]", "startLink_1": "\uFFFD#5\uFFFD" });
    I18N_0 = MSG_EXTERNAL_8704820817429528545$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟eb2b4df06d3561582bf8dc988cc9720ad2925229␟8704820817429528545:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:ThemeNight${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: is a ${"\uFFFD#3\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:ThemeSwitcher${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: that you can use together with ${"\uFFFD#5\uFFFD"}:START_LINK_1:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:Mode${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: directive to create a night mode in you application. `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3595317672039902770$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__3 = goog.getMsg(" Import {$startTagCode}TuiThemeNightModule{$closeTagCode} and {$startTagCode}TuiModeModule{$closeTagCode} into your main module: ", { "startTagCode": "[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]", "closeTagCode": "[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]" });
    I18N_2 = MSG_EXTERNAL_3595317672039902770$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟4e2f6dd076e26e395338e69bc95c92b8aa8dfddd␟3595317672039902770: Import ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiThemeNightModule${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiModeModule${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: into your main module: `;
}
I18N_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_2);
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__5 = goog.getMsg("Add to the template:");
    I18N_4 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_THEME_NIGHT_THEME_NIGHT_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiThemeNightComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.exampleHtml);
} }
class ExampleTuiThemeNightComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/theme-night/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/theme-night/examples/import/insert-template.md"));
    }
}
ExampleTuiThemeNightComponent.ɵfac = function ExampleTuiThemeNightComponent_Factory(t) { return new (t || ExampleTuiThemeNightComponent)(); };
ExampleTuiThemeNightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiThemeNightComponent, selectors: [["example-tui-theme-night"]], decls: 2, vars: 0, consts: [["header", "ThemeNight", "package", "CORE", "type", "components"], ["pageTab", ""], ["tuiLink", "", "routerLink", "/components/theme-switcher"], ["tuiLink", "", "routerLink", "/directives/mode"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiThemeNightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiThemeNightComponent_ng_template_1_Template, 18, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiThemeNightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-theme-night`,
                templateUrl: `./theme-night.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/theme-night/theme-night.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/theme-night/theme-night.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiThemeNightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiThemeNightModule", function() { return ExampleTuiThemeNightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _theme_night_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-night.component */ "./src/modules/components/theme-night/theme-night.component.ts");







class ExampleTuiThemeNightModule {
}
ExampleTuiThemeNightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExampleTuiThemeNightModule });
ExampleTuiThemeNightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExampleTuiThemeNightModule_Factory(t) { return new (t || ExampleTuiThemeNightModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleTuiThemeNightModule, { declarations: [_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiThemeNightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"])),
                ],
                declarations: [_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"]],
                exports: [_theme_night_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiThemeNightComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-theme-night-theme-night-module.js.map