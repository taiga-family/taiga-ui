(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-hint-controller-hint-controller-module"],{

/***/ "./src/modules/directives/hint-controller/examples/1/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/directives/hint-controller/examples/1/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiHintControllerExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiHintControllerExample1", function() { return TuiHintControllerExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");







class TuiHintControllerExample1 {
    constructor() {
        this.text = `Do What the #@*% You Want to`;
    }
}
TuiHintControllerExample1.ɵfac = function TuiHintControllerExample1_Factory(t) { return new (t || TuiHintControllerExample1)(); };
TuiHintControllerExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiHintControllerExample1, selectors: [["tui-hint-controller-example-1"]], decls: 3, vars: 2, consts: [[1, "wrapper", 3, "tuiHintContent"], [3, "value", "valueChange"]], template: function TuiHintControllerExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-primitive-textfield", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TuiHintControllerExample1_Template_tui_primitive_textfield_valueChange_1_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHintContent", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.text);
    } }, directives: [_core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_3__["TuiHintControllerDirective"], _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldDirective"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 21.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9oaW50LWNvbnRyb2xsZXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2hpbnQtY29udHJvbGxlci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9oaW50LWNvbnRyb2xsZXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHdpZHRoOiAyMS44NzVyZW07XG59XG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAyMS44NzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiHintControllerExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-hint-controller-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/hint-controller/hint-controller.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/directives/hint-controller/hint-controller.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleTuiHintControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiHintControllerComponent", function() { return ExampleTuiHintControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/hint-controller/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7802991737679226774$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS_1 = goog.getMsg("HintController");
    I18N_0 = MSG_EXTERNAL_7802991737679226774$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟8b9f3e0545f0dc3c0225fb267d4e185061fa6321␟7802991737679226774:HintController`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5645803649183552163$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__7 = goog.getMsg(" Directive allows to control hint setting on hint or its parent components. For example, if you want to add tooltip to {$startLink}{$startTagCode}TuiPrimitiveTextfield{$closeTagCode}{$closeLink} , use this directive on it. ", { "startLink": "\uFFFD#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_5645803649183552163$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟39c2e91ced227cf8f968d8e5a381e5db7d0c2075␟5645803649183552163: Directive allows to control hint setting on hint or its parent components. For example, if you want to add tooltip to ${"\uFFFD#2\uFFFD"}:START_LINK:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfield${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: , use this directive on it. `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiHintControllerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-hint-controller-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4666774196997813566$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___12 = goog.getMsg(" Hint controller content ");
    I18N_11 = MSG_EXTERNAL_4666774196997813566$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟5fdb81390ced5af3a6de6361f079f1eb98fc2782␟4666774196997813566: Hint controller content `;
}
function ExampleTuiHintControllerComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7920676050750551676$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___14 = goog.getMsg(" Hint controller mode ");
    I18N_13 = MSG_EXTERNAL_7920676050750551676$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟977e637f707e79fae84dff1104307a013d0ab896␟7920676050750551676: Hint controller mode `;
}
function ExampleTuiHintControllerComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7777050122220102994$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___16 = goog.getMsg(" Hint controller direction ");
    I18N_15 = MSG_EXTERNAL_7777050122220102994$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟02dc9fd26cdf310d13d53ebcb9a3e4a6bbda9a9d␟7777050122220102994: Hint controller direction `;
}
function ExampleTuiHintControllerComponent_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
function ExampleTuiHintControllerComponent_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Hint controller show delay ");
} }
function ExampleTuiHintControllerComponent_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Hint controller hide delay ");
} }
function ExampleTuiHintControllerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-primitive-textfield", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ExampleTuiHintControllerComponent_ng_template_3_Template_tui_primitive_textfield_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.tuiHintContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiHintControllerComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiHintControllerComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiHintControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.tuiHintMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiHintControllerComponent_ng_template_3_ng_template_7_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiHintControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.tuiHintDirection = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiHintControllerComponent_ng_template_3_ng_template_8_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiHintControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.tuiHintShowDelay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiHintControllerComponent_ng_template_3_ng_template_9_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiHintControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.tuiHintHideDelay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHintContent", ctx_r1.tuiHintContent)("tuiHintDirection", ctx_r1.tuiHintDirection)("tuiHintMode", ctx_r1.tuiHintMode)("tuiHintShowDelay", ctx_r1.tuiHintShowDelay)("tuiHintHideDelay", ctx_r1.tuiHintHideDelay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.tuiHintContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.tuiHintMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.directionVariants)("documentationPropertyValue", ctx_r1.tuiHintDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiHintShowDelay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiHintHideDelay);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5482566457329968094$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__18 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiHintControllerModule{$closeTagCode} in the same module where you want to use our directive: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_17 = MSG_EXTERNAL_5482566457329968094$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟4231d31a6ccffade0b2f64f0ddfe0fa9ede7ad17␟5482566457329968094: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHintControllerModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `;
}
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5637182585162098913$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__20 = goog.getMsg("Use into template on hint or its parent elements:");
    I18N_19 = MSG_EXTERNAL_5637182585162098913$$SRC_MODULES_DIRECTIVES_HINT_CONTROLLER_HINT_CONTROLLER_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟ea437d519b07a2f085504951c5e4663050f1fc76␟5637182585162098913:Use into template on hint or its parent elements:`;
}
function ExampleTuiHintControllerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiHintControllerComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/1/index.html")),
        };
        this.modeVariants = [`error`];
        this.tuiHintContent = `Example hint content`;
        this.tuiHintMode = null;
        this.directionVariants = [
            `left`,
            `right`,
            `bottom-left`,
            `bottom-right`,
            `bottom-middle`,
            `top-left`,
            `top-right`,
            `top-middle`,
        ];
        this.tuiHintDirection = this.directionVariants[2];
        this.tuiHintShowDelay = 500;
        this.tuiHintHideDelay = 200;
    }
}
ExampleTuiHintControllerComponent.ɵfac = function ExampleTuiHintControllerComponent_Factory(t) { return new (t || ExampleTuiHintControllerComponent)(); };
ExampleTuiHintControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiHintControllerComponent, selectors: [["example-tui-hint-controller"]], decls: 6, vars: 0, consts: [["package", "CORE", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["tuiLink", "", "target", "_blank", "routerLink", "/components/primitive-textfield"], ["id", "base", 3, "content", 6, "heading"], [1, "wrapper", 3, "tuiHintContent", "tuiHintDirection", "tuiHintMode", "tuiHintShowDelay", "tuiHintHideDelay"], [3, "value", "valueChange"], ["documentationPropertyName", "tuiHintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiTooltipMode | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintShowDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintHideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiHintControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiHintControllerComponent_ng_template_2_Template, 7, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiHintControllerComponent_ng_template_3_Template, 10, 12, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiHintControllerComponent_ng_template_4_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerExample1"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHintControllerDirective"], _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_10__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_11__["TuiPrimitiveTextfieldDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiHintControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-hint-controller`,
                templateUrl: `./hint-controller.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/hint-controller/hint-controller.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/directives/hint-controller/hint-controller.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiHintControllerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiHintControllerModule", function() { return ExampleTuiHintControllerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/hint-controller/examples/1/index.ts");
/* harmony import */ var _hint_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hint-controller.component */ "./src/modules/directives/hint-controller/hint-controller.component.ts");










class ExampleTuiHintControllerModule {
}
ExampleTuiHintControllerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiHintControllerModule });
ExampleTuiHintControllerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiHintControllerModule_Factory(t) { return new (t || ExampleTuiHintControllerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiHintControllerModule, { declarations: [_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiHintControllerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"])),
                ],
                declarations: [_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerExample1"]],
                exports: [_hint_controller_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiHintControllerComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-hint-controller-hint-controller-module.js.map