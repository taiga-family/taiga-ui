(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-active-zone-active-zone-module"],{

/***/ "./src/modules/directives/active-zone/active-zone.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/directives/active-zone/active-zone.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiActiveZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiActiveZoneComponent", function() { return ExampleTuiActiveZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/active-zone/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4573156301401658203$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS_1 = goog.getMsg("ActiveZone");
    I18N_0 = MSG_EXTERNAL_4573156301401658203$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟12cbb0bfca7aa943e6579cb408b6e5cad88c810b␟4573156301401658203:ActiveZone`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5491960160291226248$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__4 = goog.getMsg("{$startTagCode}tuiActiveZone{$closeTagCode} allows to track a scope that user interacts with. For example, for closing dropdown on blur ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_5491960160291226248$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟c21d9e6d201daf36fd245fa08f46330abfdd8b11␟5491960160291226248:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiActiveZone${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to track a scope that user interacts with. For example, for closing dropdown on blur `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8188585896827437796$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__6 = goog.getMsg("Composite zone");
    I18N_5 = MSG_EXTERNAL_8188585896827437796$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟dbc6ad292bce741b6302c6fc70a32a796734e2fa␟8188585896827437796:Composite zone`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiActiveZoneComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-active-zone-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4423300948625175026$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiActiveZoneModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_8 = MSG_EXTERNAL_4423300948625175026$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟565d5c4a6d667762251f4fdeb1e747718456c702␟4423300948625175026: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiActiveZoneModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3799636229807761262$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__11 = goog.getMsg("Add to the template and subscribe to a change:");
    I18N_10 = MSG_EXTERNAL_3799636229807761262$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;
}
function ExampleTuiActiveZoneComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleComponent);
} }
class ExampleTuiActiveZoneComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/import/insert-template.md"));
        this.exampleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-component-md */ "!!raw-loader!-examples-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/import/component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/1/index.html")),
        };
    }
}
ExampleTuiActiveZoneComponent.ɵfac = function ExampleTuiActiveZoneComponent_Factory(t) { return new (t || ExampleTuiActiveZoneComponent)(); };
ExampleTuiActiveZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiActiveZoneComponent, selectors: [["example-tui-active-zone"]], decls: 4, vars: 0, consts: [["package", "CDK", "type", "directives", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], ["id", "multiple", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiActiveZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiActiveZoneComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiActiveZoneComponent_ng_template_3_Template, 11, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  padding: 0.5rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9hY3RpdmUtem9uZS9hY3RpdmUtem9uZS5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2FjdGl2ZS16b25lL2FjdGl2ZS16b25lLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2FjdGl2ZS16b25lL2FjdGl2ZS16b25lLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICAgIG1heC13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG59XG4iLCIuZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiActiveZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-active-zone`,
                templateUrl: `./active-zone.template.html`,
                styleUrls: [`./active-zone.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/active-zone/active-zone.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/directives/active-zone/active-zone.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiActiveZoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiActiveZoneModule", function() { return ExampleTuiActiveZoneModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _active_zone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./active-zone.component */ "./src/modules/directives/active-zone/active-zone.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/active-zone/examples/1/index.ts");











class ExampleTuiActiveZoneModule {
}
ExampleTuiActiveZoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiActiveZoneModule });
ExampleTuiActiveZoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiActiveZoneModule_Factory(t) { return new (t || ExampleTuiActiveZoneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiActiveZoneModule, { declarations: [_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiActiveZoneExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiActiveZoneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"])),
                ],
                declarations: [_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiActiveZoneExample1"]],
                exports: [_active_zone_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiActiveZoneComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/active-zone/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/directives/active-zone/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiActiveZoneExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiActiveZoneExample1", function() { return TuiActiveZoneExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6238607653600005463$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" You can bind different elements with {$startTagCode}[tuiActiveZoneParent]{$closeTagCode} directive ", { "startTagCode": "\uFFFD#23\uFFFD", "closeTagCode": "\uFFFD/#23\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6238607653600005463$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟a5c932c71cc41af03986749d41d4e3c1ec8b9644␟6238607653600005463: You can bind different elements with ${"\uFFFD#23\uFFFD"}:START_TAG_CODE:[tuiActiveZoneParent]${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE: directive `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1484761029469449608$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_3 = goog.getMsg("Zone keeps active after browser tab change");
    I18N_2 = MSG_EXTERNAL_1484761029469449608$$SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟a18de0931ff43128131c2fcc6058c5f7542df1e0␟1484761029469449608:Zone keeps active after browser tab change`;
}
class TuiActiveZoneExample1 {
    constructor() {
        this.childActive = false;
        this.parentActive = false;
        this.items = [1, 2, 3];
    }
    onParentActiveZone(active) {
        this.parentActive = active;
    }
    onChildActiveZone(active) {
        this.childActive = active;
    }
    onClick({ nativeFocusableElement }) {
        if (nativeFocusableElement) {
            Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["setNativeFocused"])(nativeFocusableElement);
        }
    }
}
TuiActiveZoneExample1.ɵfac = function TuiActiveZoneExample1_Factory(t) { return new (t || TuiActiveZoneExample1)(); };
TuiActiveZoneExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiActiveZoneExample1, selectors: [["tui-active-zone-example-1"]], decls: 30, vars: 7, consts: [["placeholder", "input outside a zone"], [1, "active-zone", 3, "tuiActiveZoneChange"], ["parent", "tuiActiveZone"], ["tuiButton", "", "type", "button"], [1, "active-zone", 3, "tuiActiveZoneParent", "tuiActiveZoneChange"], ["input", ""], ["placeholder", "input outside zone"], [3, "click"]], template: function TuiActiveZoneExample1_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function TuiActiveZoneExample1_Template_div_tuiActiveZoneChange_6_listener($event) { return ctx.onParentActiveZone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Parent zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A button inside zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A button outside of zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function TuiActiveZoneExample1_Template_div_tuiActiveZoneChange_15_listener($event) { return ctx.onChildActiveZone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Child zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-input", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Input inside zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](22, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiActiveZoneExample1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.onClick(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Focus input in zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](29, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Parent zone: ", ctx.parentActive, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Child zone: ", ctx.childActive, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-zone_active", ctx.parentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-zone_active", ctx.childActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiActiveZoneParent", _r0);
    } }, directives: [_cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"]], styles: [".active-zone[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border: 2px solid;\n}\n.active-zone_active[_ngcontent-%COMP%] {\n  border-color: var(--tui-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9hY3RpdmUtem9uZS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvYWN0aXZlLXpvbmUvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQ0FBQTtBQ0NSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9hY3RpdmUtem9uZS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLXpvbmUge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG5cbiAgICAmX2FjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIH1cbn1cbiIsIi5hY3RpdmUtem9uZSB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xufVxuLmFjdGl2ZS16b25lX2FjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiActiveZoneExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-active-zone-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-active-zone-active-zone-module.js.map