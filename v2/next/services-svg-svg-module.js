(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-svg-svg-module"],{

/***/ "./src/modules/services/svg/svg.component.ts":
/*!***************************************************!*\
  !*** ./src/modules/services/svg/svg.component.ts ***!
  \***************************************************/
/*! exports provided: ExampleTuiSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSvgComponent", function() { return ExampleTuiSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/icons */ "../icons/public-api.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3658315716341587729$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__1 = goog.getMsg("Service to define SVG to reuse it later");
    I18N_0 = MSG_EXTERNAL_3658315716341587729$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟62442c600050ca0d3f65a2e8d29ff33d06792537␟3658315716341587729:Service to define SVG to reuse it later`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5592341393345481883$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Singleton{$closeTagStrong} you do not need to provide it, just inject into your component and use it ", { "startTagStrong": "\uFFFD#4\uFFFD", "closeTagStrong": "\uFFFD/#4\uFFFD" });
    I18N_2 = MSG_EXTERNAL_5592341393345481883$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟224d7e62407a858f23f736c7dda28921be64275d␟5592341393345481883:${"\uFFFD#4\uFFFD"}:START_TAG_STRONG:Singleton${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_STRONG: you do not need to provide it, just inject into your component and use it `;
}
function ExampleTuiSvgComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_147498612382264826$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS___5 = goog.getMsg(" Method to define an icon. {$startParagraph}{$startTagStrong} Warning, name of the icon must not start with \" {$startTagCode}<{$closeTagCode} \" {$closeTagStrong}{$closeParagraph} Name should be unique. ", { "startParagraph": "\uFFFD#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_4 = MSG_EXTERNAL_147498612382264826$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:␟08d10920780a916de27666a0fbc35d87636f82b8␟147498612382264826: Method to define an icon. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG: Warning, name of the icon must not start with " ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:<${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: " ${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH: Name should be unique. `;
}
function ExampleTuiSvgComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiSvgComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-documentation", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSvgComponent_ng_template_2_ng_template_1_Template, 4, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAPI", true);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4582239652724734441$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__7 = goog.getMsg(" Inject {$startTagCode}TuiSvgService{$closeTagCode} into your component and define an icon: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_6 = MSG_EXTERNAL_4582239652724734441$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟f699abc744f26b11909ae293bc79eb53e880ccda␟4582239652724734441: Inject ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSvgService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component and define an icon: `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8067431247195064069$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__9 = goog.getMsg(" Show in tempaltes with {$startTagCode}tui-svg{$closeTagCode} : ", { "startTagCode": "\uFFFD#8\uFFFD", "closeTagCode": "\uFFFD/#8\uFFFD" });
    I18N_8 = MSG_EXTERNAL_8067431247195064069$$SRC_MODULES_SERVICES_SVG_SVG_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟825e0155e46373afbcce08f192409261bb21285f␟8067431247195064069: Show in tempaltes with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-svg${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: : `;
}
function ExampleTuiSvgComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.injectService);
} }
class ExampleTuiSvgComponent {
    constructor(tuiSvgService) {
        this.injectService = __webpack_require__.e(/*! import() | !raw-loader!-examples-inject-service-md */ "!!raw-loader!-examples-inject-service-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/inject-service.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/svg/examples/inject-service.md"));
        tuiSvgService.define({ tuiIconTrashLarge: _taiga_ui_icons__WEBPACK_IMPORTED_MODULE_3__["tuiIconTrashLarge"] });
    }
}
ExampleTuiSvgComponent.ɵfac = function ExampleTuiSvgComponent_Factory(t) { return new (t || ExampleTuiSvgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgService"])); };
ExampleTuiSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiSvgComponent, selectors: [["example-tui-svg"]], decls: 4, vars: 0, consts: [["header", "SvgService", "package", "CORE", "path", "core/services/svg.service.ts"], ["pageTab", ""], [3, "isAPI"], ["documentationPropertyName", "define", "documentationPropertyType", "Record<string, string>"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"], ["src", "tuiIconTrashLarge"]], template: function ExampleTuiSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSvgComponent_ng_template_1_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiSvgComponent_ng_template_2_Template, 2, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSvgComponent_ng_template_3_Template, 11, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocCodeComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__["TuiSvgComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-svg`,
                templateUrl: `./svg.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/svg/svg.module.ts":
/*!************************************************!*\
  !*** ./src/modules/services/svg/svg.module.ts ***!
  \************************************************/
/*! exports provided: ExampleTuiSvgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSvgModule", function() { return ExampleTuiSvgModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg.component */ "./src/modules/services/svg/svg.component.ts");








class ExampleTuiSvgModule {
}
ExampleTuiSvgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiSvgModule });
ExampleTuiSvgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiSvgModule_Factory(t) { return new (t || ExampleTuiSvgModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiSvgModule, { declarations: [_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiSvgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"])),
                ],
                declarations: [_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"]],
                exports: [_svg_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiSvgComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=services-svg-svg-module.js.map