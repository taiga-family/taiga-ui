(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-pointer-hint-pointer-hint-module"],{

/***/ "./src/modules/directives/pointer-hint/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/directives/pointer-hint/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiPointerHintExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPointerHintExample1", function() { return TuiPointerHintExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/directives/pointer-hint/pointer-hint.directive */ "../core/directives/pointer-hint/pointer-hint.directive.ts");





class TuiPointerHintExample1 {
}
TuiPointerHintExample1.ɵfac = function TuiPointerHintExample1_Factory(t) { return new (t || TuiPointerHintExample1)(); };
TuiPointerHintExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPointerHintExample1, selectors: [["tui-pointer-hint-example-1"]], decls: 3, vars: 0, consts: [["tuiPointerHint", "Wow! How exciting!", "tuiHintDirection", "top-left", 1, "block"]], template: function TuiPointerHintExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In this block hint follows cursor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_2__["TuiIslandComponent"], _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_3__["TuiPointerHintDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.block[_ngcontent-%COMP%] {\n  padding: 5rem 3.125rem;\n  width: 18.75rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9wb2ludGVyLWhpbnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL3BvaW50ZXItaGludC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL3BvaW50ZXItaGludC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibG9jayB7XG4gICAgcGFkZGluZzogNXJlbSAzLjEyNXJlbTtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ibG9jayB7XG4gIHBhZGRpbmc6IDVyZW0gMy4xMjVyZW07XG4gIHdpZHRoOiAxOC43NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPointerHintExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pointer-hint-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/pointer-hint/pointer-hint.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/directives/pointer-hint/pointer-hint.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiPointerHintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPointerHintComponent", function() { return ExampleTuiPointerHintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _components_abstract_hint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/abstract/hint */ "./src/modules/components/abstract/hint.ts");
/* harmony import */ var _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/pointer-hint/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/directives/pointer-hint/pointer-hint.directive */ "../core/directives/pointer-hint/pointer-hint.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _components_abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1004112365414200842$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS_1 = goog.getMsg("PointerHint");
    I18N_0 = MSG_EXTERNAL_1004112365414200842$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟e9ef00d7cb2b7c8267069e0430dd1691c786e2ef␟1004112365414200842:PointerHint`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8305095700948392793$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__4 = goog.getMsg("A directive to show a hint above the cursor");
    I18N_3 = MSG_EXTERNAL_8305095700948392793$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟3f4fe6e05ccd827249ba31087da5d4eab43b5c99␟8305095700948392793:A directive to show a hint above the cursor`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiPointerHintComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-pointer-hint-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2403513147838391388$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__9 = goog.getMsg(" It is followed inside the block ");
    I18N_8 = MSG_EXTERNAL_2403513147838391388$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟0c695a241ebb416b6ba5be843f9813f11b414205␟2403513147838391388: It is followed inside the block `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4655669311476465940$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS___11 = goog.getMsg(" Hint content ");
    I18N_10 = MSG_EXTERNAL_4655669311476465940$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟a843c3996eb5a609c82eec6d523710882c14217a␟4655669311476465940: Hint content `;
}
function ExampleTuiPointerHintComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
function ExampleTuiPointerHintComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Show Delay ");
} }
function ExampleTuiPointerHintComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Hide Delay ");
} }
function ExampleTuiPointerHintComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiPointerHintComponent_ng_template_3_ng_template_4_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiPointerHintComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPointerHintComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showDelay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiPointerHintComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPointerHintComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideDelay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHintMode", ctx_r1.mode)("tuiHintDirection", ctx_r1.direction)("tuiHintShowDelay", ctx_r1.showDelay)("tuiHintHideDelay", ctx_r1.hideDelay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showDelay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hideDelay);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6720924929483848141$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiPointerHintModule{$closeTagCode} into a module where you want to use our directive ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_12 = MSG_EXTERNAL_6720924929483848141$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟383b5cbf557f660e7e8c8216545a2178b25807ec␟6720924929483848141: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPointerHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
    I18N_14 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_POINTER_HINT_POINTER_HINT_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiPointerHintComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiPointerHintComponent extends _components_abstract_hint__WEBPACK_IMPORTED_MODULE_2__["AbstractExampleTuiHint"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/1/index.html")),
        };
        this.showDelay = 0;
        this.hideDelay = 0;
    }
}
ExampleTuiPointerHintComponent.ɵfac = function ExampleTuiPointerHintComponent_Factory(t) { return ɵExampleTuiPointerHintComponent_BaseFactory(t || ExampleTuiPointerHintComponent); };
ExampleTuiPointerHintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPointerHintComponent, selectors: [["example-pointer-hint"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiPointerHintComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 0, consts: [["package", "CORE", "type", "directives", 6, "header"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["tuiPointerHint", "Some information", 3, "tuiHintMode", "tuiHintDirection", "tuiHintShowDelay", "tuiHintHideDelay"], ["documentationPropertyName", "tuiPointerHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintShowDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintHideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPointerHintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPointerHintComponent_ng_template_2_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPointerHintComponent_ng_template_3_Template, 8, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiPointerHintComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiPointerHintExample1"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_9__["TuiPointerHintDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _components_abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_12__["InheritedDocumentationComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiPointerHintComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiPointerHintComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPointerHintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-pointer-hint`,
                templateUrl: `./pointer-hint.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                providers: [
                    {
                        provide: _components_abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiPointerHintComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/pointer-hint/pointer-hint.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/directives/pointer-hint/pointer-hint.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiPointerHintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPointerHintModule", function() { return ExampleTuiPointerHintModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/pointer-hint/examples/1/index.ts");
/* harmony import */ var _pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pointer-hint.component */ "./src/modules/directives/pointer-hint/pointer-hint.component.ts");












class ExampleTuiPointerHintModule {
}
ExampleTuiPointerHintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPointerHintModule });
ExampleTuiPointerHintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPointerHintModule_Factory(t) { return new (t || ExampleTuiPointerHintModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiPointerHintModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiIslandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPointerHintModule, { declarations: [_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiPointerHintExample1"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiPointerHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPointerHintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiPointerHintModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiIslandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _components_abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"])),
                ],
                declarations: [_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiPointerHintExample1"]],
                exports: [_pointer_hint_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPointerHintComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-pointer-hint-pointer-hint-module.js.map