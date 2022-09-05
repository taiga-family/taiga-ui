(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-manual-hint-manual-hint-module"],{

/***/ "./src/modules/directives/manual-hint/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/directives/manual-hint/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiManualHintExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiManualHintExample1", function() { return TuiManualHintExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/directives/manual-hint/manual-hint.directive */ "../core/directives/manual-hint/manual-hint.directive.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");








function TuiManualHintExample1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hint ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiManualHintExample1 {
    constructor() {
        this.hintShown = false;
    }
    toggleHint() {
        this.hintShown = !this.hintShown;
    }
}
TuiManualHintExample1.ɵfac = function TuiManualHintExample1_Factory(t) { return new (t || TuiManualHintExample1)(); };
TuiManualHintExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiManualHintExample1, selectors: [["tui-manual-hint-example-1"]], decls: 4, vars: 2, consts: [["tuiButton", "", "type", "button", 3, "tuiManualHint", "tuiManualHintShow", "click"], ["template", ""], ["tuiMode", "onDark"], ["tuiLink", "", "routerLink", "hint", 1, "link"]], template: function TuiManualHintExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiManualHintExample1_Template_button_click_0_listener() { return ctx.toggleHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hint\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiManualHintExample1_ng_template_2_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiManualHint", _r0)("tuiManualHintShow", ctx.hintShown);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["TuiButtonComponent"], _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_3__["TuiManualHintDirective"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__["TuiModeDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tYW51YWwtaGludC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvbWFudWFsLWhpbnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9tYW51YWwtaGludC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiManualHintExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-manual-hint-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/manual-hint/manual-hint.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/directives/manual-hint/manual-hint.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiManualHintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiManualHintComponent", function() { return ExampleTuiManualHintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _components_abstract_hint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/abstract/hint */ "./src/modules/components/abstract/hint.ts");
/* harmony import */ var _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/manual-hint/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/directives/manual-hint/manual-hint.directive */ "../core/directives/manual-hint/manual-hint.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _components_abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3855161587228143615$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__1 = goog.getMsg("Directive to show a hint manually");
    I18N_0 = MSG_EXTERNAL_3855161587228143615$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟c8c45ebec06566ef7a3a59ef2384321feec36e37␟3855161587228143615:Directive to show a hint manually`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
function ExampleTuiManualHintComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-manual-hint-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS___6 = goog.getMsg(" Content ");
    I18N_5 = MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
}
function ExampleTuiManualHintComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_5);
} }
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2409354495697805229$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS___8 = goog.getMsg(" Show/hide hint ");
    I18N_7 = MSG_EXTERNAL_2409354495697805229$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS___8;
}
else {
    I18N_7 = $localize `:␟402b0978874aa99343a9ae1d9c7fc1a460f92eff␟2409354495697805229: Show/hide hint `;
}
function ExampleTuiManualHintComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_7);
} }
function ExampleTuiManualHintComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiManualHintComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sayHi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A strange button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiManualHintComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiManualHintComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiManualHintComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.show = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiManualHintShow", ctx_r1.show)("tuiHintMode", ctx_r1.mode)("tuiHintDirection", ctx_r1.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.show);
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6859512142526334484$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__10 = goog.getMsg(" Import {$startTagCode}TuiManualHintModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_9 = MSG_EXTERNAL_6859512142526334484$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟bbedda9946ab6647dc22ada873a20f8c4e248f29␟6859512142526334484: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiManualHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__12 = goog.getMsg("Add to the template:");
    I18N_11 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_MANUAL_HINT_MANUAL_HINT_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiManualHintComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiManualHintComponent extends _components_abstract_hint__WEBPACK_IMPORTED_MODULE_2__["AbstractExampleTuiHint"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/1/index.html")),
        };
        this.show = false;
    }
    sayHi() {
        console.info(`Hi all!`);
    }
}
ExampleTuiManualHintComponent.ɵfac = function ExampleTuiManualHintComponent_Factory(t) { return ɵExampleTuiManualHintComponent_BaseFactory(t || ExampleTuiManualHintComponent); };
ExampleTuiManualHintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiManualHintComponent, selectors: [["example-manual-hint"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiManualHintComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "ManualHint", "package", "CORE", "type", "directives"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["tuiButton", "", "type", "button", "tuiManualHint", "It says 'Hi all!' into console", 3, "tuiManualHintShow", "tuiHintMode", "tuiHintDirection", "click"], ["documentationPropertyName", "tuiManualHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiManualHintShow", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiManualHintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiManualHintComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiManualHintComponent_ng_template_2_Template, 7, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiManualHintComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiManualHintExample1"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["TuiButtonComponent"], _core_directives_manual_hint_manual_hint_directive__WEBPACK_IMPORTED_MODULE_10__["TuiManualHintDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationPropertyConnectorDirective"], _components_abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_13__["InheritedDocumentationComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiManualHintComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiManualHintComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiManualHintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-manual-hint`,
                templateUrl: `./manual-hint.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                providers: [
                    {
                        provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiManualHintComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/manual-hint/manual-hint.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/directives/manual-hint/manual-hint.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiManualHintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiManualHintModule", function() { return ExampleTuiManualHintModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/manual-hint/examples/1/index.ts");
/* harmony import */ var _manual_hint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manual-hint.component */ "./src/modules/directives/manual-hint/manual-hint.component.ts");











class ExampleTuiManualHintModule {
}
ExampleTuiManualHintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiManualHintModule });
ExampleTuiManualHintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiManualHintModule_Factory(t) { return new (t || ExampleTuiManualHintModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiManualHintModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiManualHintModule, { declarations: [_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiManualHintExample1"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiManualHintModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiManualHintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiManualHintModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"])),
                ],
                declarations: [_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiManualHintExample1"]],
                exports: [_manual_hint_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiManualHintComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-manual-hint-manual-hint-module.js.map