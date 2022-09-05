(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-changelog-changelog-module"],{

/***/ "./src/modules/info/changelog/changelog.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/info/changelog/changelog.component.ts ***!
  \***********************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7136888919962092730$$SRC_MODULES_INFO_CHANGELOG_CHANGELOG_COMPONENT_TS_1 = goog.getMsg("Changelog");
    I18N_0 = MSG_EXTERNAL_7136888919962092730$$SRC_MODULES_INFO_CHANGELOG_CHANGELOG_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟994e6a27b92ba37201e3bb9f8ae312f2a46b5b39␟7136888919962092730:Changelog`;
}
const _c2 = ["header", I18N_0];
class ChangelogComponent {
    constructor() {
        this.changelog = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(__webpack_require__.e(/*! import() | !raw-loader!-CHANGELOG-md */ "!!raw-loader!-CHANGELOG-md").then(__webpack_require__.bind(null, /*! !raw-loader!../../../../../../CHANGELOG.md */ "../../node_modules/raw-loader/dist/cjs.js!../../CHANGELOG.md"))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["rawLoad"]));
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
ChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["changelog"]], decls: 4, vars: 3, consts: [[6, "header"], [3, "data"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "markdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.changelog) || "");
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["/* stylelint-disable selector-type-no-unknown */\nmarkdown > :nth-child(1),\nmarkdown > :nth-child(2) {\n  display: none;\n}\nmarkdown > * {\n  margin-left: 1.25rem;\n}\nmarkdown a {\n  text-decoration: none;\n  color: var(--tui-link);\n}\nmarkdown a:hover,\nmarkdown a:active {\n  color: var(--tui-link-hover);\n}\nmarkdown h2 {\n  font-size: 2em;\n  padding-bottom: 0.5em;\n  margin-left: 0;\n  border-bottom: 1px solid var(--tui-base-03);\n}\nmarkdown h3 {\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 1.5rem;\n  margin: 1rem 0;\n}\nmarkdown h3:not([id^='feat']):not([id^='bug']):not([id^='deprecations']) {\n  font-size: 1.75rem;\n  padding-bottom: 0.5em;\n  margin: 2rem 0 0 0;\n  border-bottom: 1px solid var(--tui-base-03);\n}\nmarkdown h3[id^='breaking'] {\n  margin-left: 1.25rem;\n  color: var(--tui-error-fill);\n}\nmarkdown code {\n  color: #d45d8c;\n}\nmarkdown h3[id^='feat']:before {\n  content: '\uD83D\uDE80';\n}\nmarkdown h3[id^='bug']:before {\n  content: '\uD83D\uDC1E';\n}\nmarkdown h3[id^='deprecations']:before {\n  content: '\u26A0\uFE0F';\n}\nmarkdown h3[id^='feat']:before,\nmarkdown h3[id^='bug']:before,\nmarkdown h3[id^='deprecations']:before {\n  margin-right: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9jaGFuZ2Vsb2cvY2hhbmdlbG9nLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2luZm8vY2hhbmdlbG9nL2NoYW5nZWxvZy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQ0UzQzs7RUFFSSxhQUFBO0FEQVI7QUNIQTtFQU9RLG9CQUFBO0FERFI7QUNJSTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QURGUjtBQ0lROztFQUVJLDRCQUFBO0FERlo7QUNNSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBREpSO0FDT0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FETFI7QUNRSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FETlI7QUNTSTtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7QURQUjtBQ1VJO0VBQ0ksY0FBQTtBRFJSO0FDV0k7RUFDSSxhQUFBO0FEVFI7QUNZSTtFQUNJLGFBQUE7QURWUjtBQ2FJO0VBQ0ksYUFBQTtBRFhSO0FDY0k7OztFQUdJLG9CQUFBO0FEWlIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9pbmZvL2NoYW5nZWxvZy9jaGFuZ2Vsb2cuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqL1xubWFya2Rvd24gPiA6bnRoLWNoaWxkKDEpLFxubWFya2Rvd24gPiA6bnRoLWNoaWxkKDIpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1hcmtkb3duID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xufVxubWFya2Rvd24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXR1aS1saW5rKTtcbn1cbm1hcmtkb3duIGE6aG92ZXIsXG5tYXJrZG93biBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10dWktbGluay1ob3Zlcik7XG59XG5tYXJrZG93biBoMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxubWFya2Rvd24gaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5tYXJrZG93biBoMzpub3QoW2lkXj0nZmVhdCddKTpub3QoW2lkXj0nYnVnJ10pOm5vdChbaWRePSdkZXByZWNhdGlvbnMnXSkge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luOiAycmVtIDAgMCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxubWFya2Rvd24gaDNbaWRePSdicmVha2luZyddIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktZXJyb3ItZmlsbCk7XG59XG5tYXJrZG93biBjb2RlIHtcbiAgY29sb3I6ICNkNDVkOGM7XG59XG5tYXJrZG93biBoM1tpZF49J2ZlYXQnXTpiZWZvcmUge1xuICBjb250ZW50OiAn8J+agCc7XG59XG5tYXJrZG93biBoM1tpZF49J2J1ZyddOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfwn5CeJztcbn1cbm1hcmtkb3duIGgzW2lkXj0nZGVwcmVjYXRpb25zJ106YmVmb3JlIHtcbiAgY29udGVudDogJ+KaoO+4jyc7XG59XG5tYXJrZG93biBoM1tpZF49J2ZlYXQnXTpiZWZvcmUsXG5tYXJrZG93biBoM1tpZF49J2J1ZyddOmJlZm9yZSxcbm1hcmtkb3duIGgzW2lkXj0nZGVwcmVjYXRpb25zJ106YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4iLCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi9cbm1hcmtkb3duIHtcbiAgICAmID4gOm50aC1jaGlsZCgxKSxcbiAgICAmID4gOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgPiAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJiBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLWxpbmspO1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10dWktbGluay1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wMyk7XG4gICAgfVxuXG4gICAgJiBoMyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG5cbiAgICAmIGgzOm5vdChbaWRePSdmZWF0J10pOm5vdChbaWRePSdidWcnXSk6bm90KFtpZF49J2RlcHJlY2F0aW9ucyddKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICBtYXJnaW46IDJyZW0gMCAwIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wMyk7XG4gICAgfVxuXG4gICAgJiBoM1tpZF49J2JyZWFraW5nJ10ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1lcnJvci1maWxsKTtcbiAgICB9XG5cbiAgICAmIGNvZGUge1xuICAgICAgICBjb2xvcjogI2Q0NWQ4YztcbiAgICB9XG5cbiAgICAmIGgzW2lkXj0nZmVhdCddOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfwn5qAJztcbiAgICB9XG5cbiAgICAmIGgzW2lkXj0nYnVnJ106YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ/CfkJ4nO1xuICAgIH1cblxuICAgICYgaDNbaWRePSdkZXByZWNhdGlvbnMnXTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn4pqg77iPJztcbiAgICB9XG5cbiAgICAmIGgzW2lkXj0nZmVhdCddOmJlZm9yZSxcbiAgICAmIGgzW2lkXj0nYnVnJ106YmVmb3JlLFxuICAgICYgaDNbaWRePSdkZXByZWNhdGlvbnMnXTpiZWZvcmUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `changelog`,
                templateUrl: `changelog.template.html`,
                styleUrls: [`./changelog.style.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/changelog/changelog.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/info/changelog/changelog.module.ts ***!
  \********************************************************/
/*! exports provided: ChangelogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogModule", function() { return ChangelogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changelog.component */ "./src/modules/info/changelog/changelog.component.ts");








class ChangelogModule {
}
ChangelogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChangelogModule });
ChangelogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChangelogModule_Factory(t) { return new (t || ChangelogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangelogModule, { declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangelogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"])),
                ],
                declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"]],
                exports: [_changelog_component__WEBPACK_IMPORTED_MODULE_5__["ChangelogComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-changelog-changelog-module.js.map