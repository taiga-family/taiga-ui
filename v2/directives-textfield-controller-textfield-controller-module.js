(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-textfield-controller-textfield-controller-module"],{

/***/ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts ***!
  \********************************************************************************************/
/*! exports provided: ABSTRACT_PROPS_ACCESSOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABSTRACT_PROPS_ACCESSOR", function() { return ABSTRACT_PROPS_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Component extends AbstractExample class`);


/***/ }),

/***/ "./src/modules/directives/textfield-controller/examples/1/index.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/directives/textfield-controller/examples/1/index.ts ***!
  \*************************************************************************/
/*! exports provided: TuiTextfieldControllerExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTextfieldControllerExample1", function() { return TuiTextfieldControllerExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");








class TuiTextfieldControllerExample1 {
}
TuiTextfieldControllerExample1.ɵfac = function TuiTextfieldControllerExample1_Factory(t) { return new (t || TuiTextfieldControllerExample1)(); };
TuiTextfieldControllerExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTextfieldControllerExample1, selectors: [["tui-textfield-controller-example-1"]], decls: 3, vars: 1, consts: [[1, "wrapper", "tui-space_top-3", 3, "tuiTextfieldCleaner"], ["tuiTextfieldExampleText", "Hello"]], template: function TuiTextfieldControllerExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-primitive-textfield", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
    } }, directives: [_core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_3__["TuiTextfieldCleanerDirective"], _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldExampleTextDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTextfieldControllerExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-textfield-controller-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/textfield-controller/textfield-controller.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/directives/textfield-controller/textfield-controller.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExampleTuiTextfieldControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTextfieldControllerComponent", function() { return ExampleTuiTextfieldControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/textfield-controller/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1821270709965761900$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_1 = goog.getMsg("TextfieldController");
    I18N_0 = MSG_EXTERNAL_1821270709965761900$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟57aa77a2ee8d15c32d319f3e8a96eaf3d7ed07aa␟1821270709965761900:TextfieldController`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1831276530415888301$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__7 = goog.getMsg(" Directive allows to customize {$startLink}{$startTagCode}TuiPrimitiveTextfield{$closeTagCode}{$closeLink} with parameters that it adds into DI tree. ", { "startLink": "\uFFFD#2\uFFFD", "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_1831276530415888301$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟b5600c022ba89e7794a22ea305e420f3d56fc048␟1831276530415888301: Directive allows to customize ${"\uFFFD#2\uFFFD"}:START_LINK:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfield${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: with parameters that it adds into DI tree. `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2949888832970872846$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__9 = goog.getMsg(" That means that you can use the directive on any root element and it will customize all textfields in this scope. Most Taiga UI form controls are based on {$startLink}{$startTagCode}TuiPrimitiveTextfield{$closeTagCode}{$closeLink} and thus accept these options. ", { "startLink": "\uFFFD#6\uFFFD", "startTagCode": "\uFFFD#7\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD", "closeLink": "\uFFFD/#6\uFFFD" });
    I18N_8 = MSG_EXTERNAL_2949888832970872846$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟b07d3d7b9a075ad77ffddf82ca4a0615a8014238␟2949888832970872846: That means that you can use the directive on any root element and it will customize all textfields in this scope. Most Taiga UI form controls are based on ${"\uFFFD#6\uFFFD"}:START_LINK:${"\uFFFD#7\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfield${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_LINK: and thus accept these options. `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5957868965468271015$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__11 = goog.getMsg(" If there are several controllers above textfield, their values will be merged. The nearest directives are in priority. ");
    I18N_10 = MSG_EXTERNAL_5957868965468271015$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟f2e642fc566c604a127949e3f7f00ca82c8f6317␟5957868965468271015: If there are several controllers above textfield, their values will be merged. The nearest directives are in priority. `;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__13 = goog.getMsg("Basic");
    I18N_12 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c14 = ["heading", I18N_12];
function ExampleTuiTextfieldControllerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-textfield-controller-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("tuiTextfieldAutocomplete", ctx_r3.autocomplete)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldInputMode", ctx_r3.inputMode)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldExampleText", ctx_r3.exampleText);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1795659672509784840$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___16 = goog.getMsg("{$startTagCode}autocomplete{$closeTagCode} attribute for a native input ( {$startLink} see names {$closeLink} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_15 = MSG_EXTERNAL_1795659672509784840$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟40472d8c5f0014b33a7500abbe2267889bf31734␟1795659672509784840:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:autocomplete${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input ( ${"\uFFFD#2\uFFFD"}:START_LINK: see names ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: ) `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_323745116286081457$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___18 = goog.getMsg(" Shows a cross to reset a value ");
    I18N_17 = MSG_EXTERNAL_323745116286081457$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟e1ffada160eee7546458fc5bf91bf658a8dacb6d␟323745116286081457: Shows a cross to reset a value `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2893407447624443117$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___20 = goog.getMsg(" Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as {$startTagCode}src{$closeTagCode} or as icon name into {$startLink} tui-svg {$closeLink}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_19 = MSG_EXTERNAL_2893407447624443117$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟30ed5b69385662fac8a4e68e0282033cf0ae5f6c␟2893407447624443117: Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:src${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: or as icon name into ${"\uFFFD#2\uFFFD"}:START_LINK: tui-svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___22 = goog.getMsg(" Example text shown on empty focused input ");
    I18N_21 = MSG_EXTERNAL_8752995704195016078$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1327822803649537857$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___24 = goog.getMsg("{$startTagCode}inputmode{$closeTagCode} attribute for a native input. You can use it to set screen keyboard view on mobile devices ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_23 = MSG_EXTERNAL_1327822803649537857$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟37f9e5471372ab6504cb32568a582743d5b6d146␟1327822803649537857:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:inputmode${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input. You can use it to set screen keyboard view on mobile devices `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2914660250050831108$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___26 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_25 = MSG_EXTERNAL_2914660250050831108$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟8755715075b5b08f672f5adda7f1629e1845d0ec␟2914660250050831108: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Label${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4332760284562645753$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___28 = goog.getMsg(" Maximum number of symbols to type. Does not with with mask together ");
    I18N_27 = MSG_EXTERNAL_4332760284562645753$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟069c54e9b169414f0e835b1e778c1f8af714c00e␟4332760284562645753: Maximum number of symbols to type. Does not with with mask together `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___30 = goog.getMsg(" Size ");
    I18N_29 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4982854484092175469$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___32 = goog.getMsg("{$startTagCode}type{$closeTagCode} attribute for a native input ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_31 = MSG_EXTERNAL_4982854484092175469$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟4892dc806088e11d2601bce6ce449686ad0e2f44␟4982854484092175469:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:type${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input `;
}
function ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiTextfieldControllerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_1_Template, 2, 7, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_3_Template, 3, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.autocomplete = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cleaner = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_5_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.customContentSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.exampleText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_7_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.inputMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_8_Template, 3, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.labelOutside = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_9_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_10_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiTextfieldControllerComponent_ng_template_3_ng_template_11_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.autocompleteVariants)("documentationPropertyValue", ctx_r1.autocomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.cleaner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.customContentVariants)("documentationPropertyValue", ctx_r1.customContentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.exampleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.inputModeVariants)("documentationPropertyValue", ctx_r1.inputMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.labelOutside);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.typeVariants)("documentationPropertyValue", ctx_r1.type);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_977978780451121916$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__34 = goog.getMsg(" Import {$startTagCode}TuiTextfieldControllerModule{$closeTagCode} in the same module where you want to use the directive: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_33 = MSG_EXTERNAL_977978780451121916$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__34;
}
else {
    I18N_33 = $localize `:␟79e6fc450056954fb7638c0a321f56adb5c14d6f␟977978780451121916: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTextfieldControllerModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use the directive: `;
}
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_251110088134451836$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__36 = goog.getMsg("Use it on Taiga UI controls or parent elements");
    I18N_35 = MSG_EXTERNAL_251110088134451836$$SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__36;
}
else {
    I18N_35 = $localize `:␟99dabfdd9ba1d22e4a3a0d93ba615fe563d8c209␟251110088134451836:Use it on Taiga UI controls or parent elements`;
}
function ExampleTuiTextfieldControllerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiTextfieldControllerComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/1/index.html")),
        };
        this.sizeVariants = [`s`, `m`, `l`];
        this.inputModeVariants = [`text`, `numeric`];
        this.maxLengthVariants = [10];
        this.typeVariants = [
            `text`,
            `email`,
            `password`,
            `tel`,
            `url`,
        ];
        this.type = this.typeVariants[0];
        this.customContentVariants = [`Bell`];
        this.customContentSelected = null;
        this.autocompleteVariants = [
            ``,
            `off`,
            `cc-name`,
            `cc-number`,
            `cc-exp-month`,
            `cc-exp-year`,
            `cc-type`,
            `given-name`,
            `additional-name`,
            `family-name`,
            `username`,
            `email`,
            `street-address`,
            `postal-code`,
            `country-name`,
        ];
        this.autocomplete = this.autocompleteVariants[0];
        this.cleaner = false;
        this.exampleText = ``;
        this.labelOutside = false;
        this.size = this.sizeVariants[2];
        this.inputMode = this.inputModeVariants[0];
        this.maxLength = null;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`111`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
}
ExampleTuiTextfieldControllerComponent.ɵfac = function ExampleTuiTextfieldControllerComponent_Factory(t) { return new (t || ExampleTuiTextfieldControllerComponent)(); };
ExampleTuiTextfieldControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTextfieldControllerComponent, selectors: [["example-tui-textfield-controller"]], decls: 6, vars: 0, consts: [["package", "CORE", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["tuiLink", "", "target", "_blank", "routerLink", "/components/primitive-textfield"], ["id", "base", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "tuiTextfieldAutocomplete", "documentationPropertyMode", "input", "documentationPropertyType", "TuiAutofillFieldName | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCleaner", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCustomContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldExampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldInputMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiInputModeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldMaxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldType", "documentationPropertyMode", "input", "documentationPropertyType", "TuiInputTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "tuiTextfieldAutocomplete", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldInputMode", "tuiTextfieldSize", "tuiTextfieldExampleText"], ["tuiLink", "", "target", "_blanl", "href", "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"], ["routerLink", "/components/svg", "tuiLink", ""], ["tuiLink", "", "routerLink", "/components/label"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiTextfieldControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTextfieldControllerComponent_ng_template_2_Template, 13, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTextfieldControllerComponent_ng_template_3_Template, 12, 16, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiTextfieldControllerComponent_ng_template_4_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerExample1"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_13__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_14__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_15__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_16__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_17__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_18__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_19__["TuiTextfieldExampleTextDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_20__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTextfieldControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-textfield-controller`,
                templateUrl: `./textfield-controller.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/textfield-controller/textfield-controller.module.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/directives/textfield-controller/textfield-controller.module.ts ***!
  \************************************************************************************/
/*! exports provided: ExampleTuiTextfieldControllerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTextfieldControllerModule", function() { return ExampleTuiTextfieldControllerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _components_abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/abstract/textfield-controller-documentation/textfield-controller-documentation.module */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/textfield-controller/examples/1/index.ts");
/* harmony import */ var _textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textfield-controller.component */ "./src/modules/directives/textfield-controller/textfield-controller.component.ts");












class ExampleTuiTextfieldControllerModule {
}
ExampleTuiTextfieldControllerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiTextfieldControllerModule });
ExampleTuiTextfieldControllerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiTextfieldControllerModule_Factory(t) { return new (t || ExampleTuiTextfieldControllerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _components_abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_7__["TextfieldControllerDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiTextfieldControllerModule, { declarations: [_textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _components_abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_7__["TextfieldControllerDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiTextfieldControllerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _components_abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_7__["TextfieldControllerDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"])),
                ],
                declarations: [
                    _textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerExample1"],
                ],
                exports: [_textfield_controller_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiTextfieldControllerComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-textfield-controller-textfield-controller-module.js.map