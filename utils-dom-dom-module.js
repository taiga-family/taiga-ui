(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-dom-dom-module"],{

/***/ "./src/modules/utils/dom/dom.component.ts":
/*!************************************************!*\
  !*** ./src/modules/utils/dom/dom.component.ts ***!
  \************************************************/
/*! exports provided: ExampleDomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDomComponent", function() { return ExampleDomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4308777752876515035$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS_1 = goog.getMsg("DOM utils");
    I18N_0 = MSG_EXTERNAL_4308777752876515035$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟bb5615509d3fd1afb301415503bb6ba96c7b49e5␟4308777752876515035:DOM utils`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4157454857949229078$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__4 = goog.getMsg("A set of tools for easy DOM manipulations");
    I18N_3 = MSG_EXTERNAL_4157454857949229078$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟d2d3830d11dbde5e5834d483140a76ef5b9f0bb4␟4157454857949229078:A set of tools for easy DOM manipulations`;
}
function ExampleDomComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CDK wiki ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to see docs ");
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__6 = goog.getMsg("Import into component and use:");
    I18N_5 = MSG_EXTERNAL_5059560669993049040$$SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
}
function ExampleDomComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.importComponentExample);
} }
class ExampleDomComponent {
    constructor() {
        this.importComponentExample = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-component-md */ "!!raw-loader!-examples-import-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/dom/examples/import/import-component.md"));
    }
}
ExampleDomComponent.ɵfac = function ExampleDomComponent_Factory(t) { return new (t || ExampleDomComponent)(); };
ExampleDomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleDomComponent, selectors: [["example-dom"]], decls: 4, vars: 0, consts: [["package", "CDK", "path", "cdk/utils/dom", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/tinkoff/taiga-ui/wiki/DOM"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleDomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleDomComponent_ng_template_2_Template, 6, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleDomComponent_ng_template_3_Template, 5, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocCodeComponent"]], styles: [".description-header[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-l);\n  font-weight: bold;\n  line-height: 2.875rem;\n  height: 2.1875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdXRpbHMvZG9tL2RvbS5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy91dGlscy9kb20vZG9tLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy91dGlscy9kb20vZG9tLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uZGVzY3JpcHRpb24taGVhZGVyIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1sKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyLjg3NXJlbTtcbiAgaGVpZ2h0OiAyLjE4NzVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5kZXNjcmlwdGlvbi1oZWFkZXIge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIuODc1cmVtO1xuICAgIGhlaWdodDogMi4xODc1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleDomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-dom`,
                templateUrl: `./dom.template.html`,
                styleUrls: [`./dom.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/utils/dom/dom.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/utils/dom/dom.module.ts ***!
  \*********************************************/
/*! exports provided: ExampleDomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDomModule", function() { return ExampleDomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _dom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom.component */ "./src/modules/utils/dom/dom.component.ts");








class ExampleDomModule {
}
ExampleDomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleDomModule });
ExampleDomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleDomModule_Factory(t) { return new (t || ExampleDomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleDomModule, { declarations: [_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleDomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"])),
                ],
                declarations: [_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"]],
                exports: [_dom_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDomComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=utils-dom-dom-module.js.map