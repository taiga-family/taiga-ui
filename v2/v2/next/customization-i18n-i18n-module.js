(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customization-i18n-i18n-module"],{

/***/ "./src/modules/customization/i18n/i18n.component.ts":
/*!**********************************************************!*\
  !*** ./src/modules/customization/i18n/i18n.component.ts ***!
  \**********************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _addon_doc_src_components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/language-switcher/language-switcher.component */ "../addon-doc/src/components/language-switcher/language-switcher.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7373613501758200135$$SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS_1 = goog.getMsg("Internationalization");
    I18N_0 = MSG_EXTERNAL_7373613501758200135$$SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟2f9b7e159e9dee28aff96a5c813d2d622a831919␟7373613501758200135:Internationalization`;
}
const _c2 = ["header", I18N_0];
function I18nComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.readme) || "");
} }
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1185984358559506322$$SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS__4 = goog.getMsg("{$startTagNgTemplate}{$startTagMarkdown}{$closeTagMarkdown}{$closeTagNgTemplate}{$startTagNgTemplate_1}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$startTagTuiDocExample}{$startTagTuiLanguageSwitcher}Language{$closeTagTuiLanguageSwitcher}{$closeTagTuiDocExample}{$closeTagNgTemplate}", { "startTagNgTemplate": "\uFFFD*3:1\uFFFD", "closeTagNgTemplate": "[\uFFFD/*3:1\uFFFD|\uFFFD/*4:2\uFFFD]", "startTagNgTemplate_1": "\uFFFD*4:2\uFFFD", "startTagMarkdown": "\uFFFD#1:1\uFFFD", "closeTagMarkdown": "\uFFFD/#1:1\uFFFD", "startTagTuiDocCode": "\uFFFD#1:2\uFFFD", "closeTagTuiDocCode": "\uFFFD/#1:2\uFFFD", "startTagTuiDocExample": "\uFFFD#2:2\uFFFD", "startTagTuiLanguageSwitcher": "\uFFFD#3:2\uFFFD", "closeTagTuiLanguageSwitcher": "\uFFFD/#3:2\uFFFD", "closeTagTuiDocExample": "\uFFFD/#2:2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_1185984358559506322$$SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟f9323b902eba2b1fb6a74c6c019410b656c6c1f3␟1185984358559506322:${"\uFFFD*3:1\uFFFD"}:START_TAG_NG_TEMPLATE:${"\uFFFD#1:1\uFFFD"}:START_TAG_MARKDOWN:${"\uFFFD/#1:1\uFFFD"}:CLOSE_TAG_MARKDOWN:${"[\uFFFD/*3:1\uFFFD|\uFFFD/*4:2\uFFFD]"}:CLOSE_TAG_NG_TEMPLATE:${"\uFFFD*4:2\uFFFD"}:START_TAG_NG_TEMPLATE_1:${"\uFFFD#1:2\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#1:2\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD#2:2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3:2\uFFFD"}:START_TAG_TUI_LANGUAGE_SWITCHER:Language${"\uFFFD/#3:2\uFFFD"}:CLOSE_TAG_TUI_LANGUAGE_SWITCHER:${"\uFFFD/#2:2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"[\uFFFD/*3:1\uFFFD|\uFFFD/*4:2\uFFFD]"}:CLOSE_TAG_NG_TEMPLATE:`;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
function I18nComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-doc-code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-language-switcher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.example1);
} }
class I18nComponent {
    constructor() {
        this.readme = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(__webpack_require__.e(/*! import() | !raw-loader!-i18n-README-md */ "!!raw-loader!-i18n-README-md").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../i18n/README.md */ "../../node_modules/raw-loader/dist/cjs.js!../i18n/README.md"))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(readme => readme.default.split(`Supported languages:`)[1]));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-app-module-md */ "!!raw-loader!-app-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./app.module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/i18n/app.module.md"));
        this.example1 = {
            'language-switcher.component.html': __webpack_require__.e(/*! import() | !raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-html */ "!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-html").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.html")),
            'language-switcher.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-ts */ "!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.ts")),
            'language-switcher.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-addon-doc-src-components-language-switcher-language-switcher-module-ts */ "!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.module.ts")),
            'language-switcher.module.less': __webpack_require__.e(/*! import() | !raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-less */ "!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-less").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../addon-doc/src/components/language-switcher/language-switcher.component.less */ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.less")),
        };
    }
}
I18nComponent.ɵfac = function I18nComponent_Factory(t) { return new (t || I18nComponent)(); };
I18nComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: I18nComponent, selectors: [["i18n"]], decls: 5, vars: 0, consts: [[6, "header"], ["pageTab", "Supported languages"], ["pageTab", "Dynamic loader"], [3, "data"], ["filename", "app.module.ts", 3, "code"], ["id", "theme-switcher", 3, "content"]], template: function I18nComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, I18nComponent_ng_template_3_Template, 3, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, I18nComponent_ng_template_4_Template, 4, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCodeComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _addon_doc_src_components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_9__["TuiLanguageSwitcherComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["/* stylelint-disable selector-type-no-unknown */\nmarkdown blockquote {\n  box-shadow: inset 4px 0 #f5f5f5;\n  margin-left: 0;\n  padding-left: 1.875rem;\n  font-style: italic;\n}\nmarkdown td {\n  padding: 0.375rem 1.5rem 0.375rem 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9pMThuL2kxOG4uc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9pMThuL2kxOG4uc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUNFM0M7RUFDSSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEQVI7QUNHSTtFQUNJLG1DQUFBO0FERFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jdXN0b21pemF0aW9uL2kxOG4vaTE4bi5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG5tYXJrZG93biBibG9ja3F1b3RlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDAgI2Y1ZjVmNTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbm1hcmtkb3duIHRkIHtcbiAgcGFkZGluZzogMC4zNzVyZW0gMS41cmVtIDAuMzc1cmVtIDA7XG59XG4iLCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi9cbm1hcmtkb3duIHtcbiAgICAmIGJsb2NrcXVvdGUge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCA0cHggMCAjZjVmNWY1O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjg3NXJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cblxuICAgICYgdGQge1xuICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAxLjVyZW0gMC4zNzVyZW0gMDtcbiAgICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `i18n`,
                templateUrl: `./i18n.template.html`,
                styleUrls: [`./i18n.style.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/i18n/i18n.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/customization/i18n/i18n.module.ts ***!
  \*******************************************************/
/*! exports provided: I18nModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return I18nModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _i18n_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n.component */ "./src/modules/customization/i18n/i18n.component.ts");









class I18nModule {
}
I18nModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: I18nModule });
I18nModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function I18nModule_Factory(t) { return new (t || I18nModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiLanguageSwitcherModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["tuiGenerateRoutes"])(_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](I18nModule, { declarations: [_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiLanguageSwitcherModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](I18nModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiLanguageSwitcherModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["tuiGenerateRoutes"])(_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"])),
                ],
                declarations: [_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"]],
                exports: [_i18n_component__WEBPACK_IMPORTED_MODULE_6__["I18nComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customization-i18n-i18n-module.js.map