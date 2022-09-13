(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-doc-doc-module"],{

/***/ "./src/modules/info/doc/doc.component.ts":
/*!***********************************************!*\
  !*** ./src/modules/info/doc/doc.component.ts ***!
  \***********************************************/
/*! exports provided: DocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocComponent", function() { return DocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3703356990057810908$$SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_1 = goog.getMsg("Documentation engine");
    I18N_0 = MSG_EXTERNAL_3703356990057810908$$SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟b384349e552237d4e1d8fd606ae55e20a1829aef␟3703356990057810908:Documentation engine`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1834291192066424064$$SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_4 = goog.getMsg("{$startParagraph}{$startTagStrong}Addon Doc{$closeTagStrong} allows you to create documentation like this page {$closeParagraph}{$startParagraph}You can install it for your demo project:{$closeParagraph}{$startTagPre}{$startTagCode}npm install @taiga-ui/addon-doc{$closeTagCode}{$closeTagPre}{$startParagraph_1} And use with project {$startLink} README.md {$closeLink} instructions. {$closeParagraph}{$startParagraph_1} You can also see {$startLink_1} a community made guide {$closeLink} in Russian. {$closeParagraph}", { "startParagraph": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]", "startTagStrong": "\uFFFD#4\uFFFD", "closeTagStrong": "\uFFFD/#4\uFFFD", "closeParagraph": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]", "startTagPre": "\uFFFD#6\uFFFD", "startTagCode": "\uFFFD#7\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD", "closeTagPre": "\uFFFD/#6\uFFFD", "startParagraph_1": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]", "startLink": "\uFFFD#9\uFFFD", "closeLink": "[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]", "startLink_1": "\uFFFD#11\uFFFD" });
    I18N_3 = MSG_EXTERNAL_1834291192066424064$$SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟a00085d81c7d4560cd63a58005c3b1828a022bae␟1834291192066424064:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_PARAGRAPH:${"\uFFFD#4\uFFFD"}:START_TAG_STRONG:Addon Doc${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_STRONG: allows you to create documentation like this page ${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_PARAGRAPH:You can install it for your demo project:${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#6\uFFFD"}:START_TAG_PRE:${"\uFFFD#7\uFFFD"}:START_TAG_CODE:npm install @taiga-ui/addon-doc${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_PRE:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH_1: And use with project ${"\uFFFD#9\uFFFD"}:START_LINK: README.md ${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_LINK: instructions. ${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH_1: You can also see ${"\uFFFD#11\uFFFD"}:START_LINK_1: a community made guide ${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_LINK: in Russian. ${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:`;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
class DocComponent {
}
DocComponent.ɵfac = function DocComponent_Factory(t) { return new (t || DocComponent)(); };
DocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocComponent, selectors: [["doc"]], decls: 12, vars: 0, consts: [[6, "header"], [1, "language-html"], [1, "tui-space_bottom-8"], ["tuiLink", "", "href", "https://github.com/tinkoff/taiga-ui/tree/main/projects/addon-doc", "target", "_blank"], ["tuiLink", "", "href", "https://habr.com/ru/company/europlan/blog/559804/", "target", "_blank"]], template: function DocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__["TuiLinkComponent"]], styles: ["/* stylelint-disable selector-type-no-unknown */\nmarkdown blockquote {\n  box-shadow: inset 4px 0 #f5f5f5;\n  margin-left: 0;\n  padding-left: 1.875rem;\n  font-style: italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9kb2MvZG9jLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2luZm8vZG9jL2RvYy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQ0UzQztFQUNJLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURBUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2luZm8vZG9jL2RvYy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG5tYXJrZG93biBibG9ja3F1b3RlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDAgI2Y1ZjVmNTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiIsIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqL1xubWFya2Rvd24ge1xuICAgICYgYmxvY2txdW90ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDRweCAwICNmNWY1ZjU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `doc`,
                templateUrl: `doc.template.html`,
                styleUrls: [`./doc.style.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/doc/doc.module.ts":
/*!********************************************!*\
  !*** ./src/modules/info/doc/doc.module.ts ***!
  \********************************************/
/*! exports provided: DocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocModule", function() { return DocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doc.component */ "./src/modules/info/doc/doc.component.ts");







class DocModule {
}
DocModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DocModule });
DocModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DocModule_Factory(t) { return new (t || DocModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocModule, { declarations: [_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"])),
                ],
                declarations: [_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"]],
                exports: [_doc_component__WEBPACK_IMPORTED_MODULE_4__["DocComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-doc-doc-module.js.map