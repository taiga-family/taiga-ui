(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slider-old-slider-old-module"],{

/***/ "./src/modules/components/slider-old/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/slider-old/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiSliderExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample1", function() { return TuiSliderExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider-old.component */ "../kit/components/slider/slider-old.component.ts");







class TuiSliderExample1 {
    constructor() {
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
}
TuiSliderExample1.ɵfac = function TuiSliderExample1_Factory(t) { return new (t || TuiSliderExample1)(); };
TuiSliderExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample1, selectors: [["tui-slider-example-1"]], decls: 1, vars: 2, consts: [[3, "formControl", "max"]], template: function TuiSliderExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-slider", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.testValue)("max", 10);
    } }, directives: [_kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_4__["TuiSliderOldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider-old/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/slider-old/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiSliderExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSliderExample2", function() { return TuiSliderExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/slider/slider-old.component */ "../kit/components/slider/slider-old.component.ts");







class TuiSliderExample2 {
    constructor() {
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.keySteps = [
            [(100 / 3) * 1, 100000],
            [(100 / 3) * (1 + 1), 300000],
        ];
    }
}
TuiSliderExample2.ɵfac = function TuiSliderExample2_Factory(t) { return new (t || TuiSliderExample2)(); };
TuiSliderExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSliderExample2, selectors: [["tui-slider-example-2"]], decls: 1, vars: 6, consts: [[3, "formControl", "keySteps", "min", "max", "segments", "steps"]], template: function TuiSliderExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-slider", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.testValue)("keySteps", ctx.keySteps)("min", 5000)("max", 1000000)("segments", 3)("steps", 3);
    } }, directives: [_kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_4__["TuiSliderOldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSliderExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-slider-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider-old/slider-old.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/slider-old/slider-old.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSliderComponent", function() { return ExampleTuiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/slider-old/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/slider-old/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/slider/slider-old.component */ "../kit/components/slider/slider-old.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8740914861461971755$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__1 = goog.getMsg("Component allows to choose a value from a limited range");
    I18N_0 = MSG_EXTERNAL_8740914861461971755$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟ee5c7bf0cdcd5326f75a112c1610dc7f54419e53␟8740914861461971755:Component allows to choose a value from a limited range`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1124866631741983664$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__6 = goog.getMsg("With separators");
    I18N_5 = MSG_EXTERNAL_1124866631741983664$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟9fe22938b33e61823958a9ea05965fd05614d79d␟1124866631741983664:With separators`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiSliderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deprecated component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " . Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " <input tuiSlider type=\"range\" /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " from the same module. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-slider-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-slider-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
function ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-slider", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("min", ctx_r3.min)("max", ctx_r3.max)("steps", ctx_r3.steps)("segments", ctx_r3.segments)("pluralize", ctx_r3.pluralize)("keySteps", ctx_r3.keySteps)("quantum", ctx_r3.quantum)("size", ctx_r3.size);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_8 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___11 = goog.getMsg(" Min value ");
    I18N_10 = MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___13 = goog.getMsg(" Max value ");
    I18N_12 = MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7711600116926498845$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___15 = goog.getMsg(" Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the {$startLink} ICU format {$closeLink} for i18nPlural ", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_14 = MSG_EXTERNAL_7711600116926498845$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟98841b9dd9d4ee376a91d8baa29619937edadf0b␟7711600116926498845: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\uFFFD#1\uFFFD"}:START_LINK: ICU format ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: for i18nPlural `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___17 = goog.getMsg(" A number of visual segments ");
    I18N_16 = MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___19 = goog.getMsg(" Number of actual discrete slider steps ");
    I18N_18 = MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___21 = goog.getMsg(" Anchor points of non-uniform format between value and position ");
    I18N_20 = MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___23 = goog.getMsg(" Size ");
    I18N_22 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6434524407760308527$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___25 = goog.getMsg(" Quantum ");
    I18N_24 = MSG_EXTERNAL_6434524407760308527$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟23f30119daeff6564906dba6e420104007f78835␟6434524407760308527: Quantum `;
}
function ExampleTuiSliderComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiSliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template, 1, 9, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.pluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.segments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.steps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiSliderComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.keySteps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiSliderComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiSliderComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.quantum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.pluralize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.segmentsVariants)("documentationPropertyValue", ctx_r1.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stepsVariants)("documentationPropertyValue", ctx_r1.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.keyStepsVariants)("documentationPropertyValue", ctx_r1.keySteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.quantumVariants)("documentationPropertyValue", ctx_r1.quantum);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__27 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
    I18N_26 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_26);
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
    I18N_28 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_SLIDER_OLD_SLIDER_OLD_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiSliderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Import an Angular module for forms and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TuiSliderModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " in the same module where you want to use our component: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiSliderComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/import/declare-form.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/2/index.html")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](8);
        this.sizeVariants = [`s`, `m`];
        this.size = this.sizeVariants[1];
        this.minVariants = [0, 1, 5, 7.77, 5000];
        this.min = this.minVariants[0];
        this.maxVariants = [10, 100, 10000, 1000000];
        this.max = this.maxVariants[0];
        this.segmentsVariants = [0, 1, 3, 5, 13];
        this.segments = this.segmentsVariants[0];
        this.stepsVariants = [0, 3, 4, 10];
        this.steps = this.stepsVariants[0];
        this.pluralizeVariants = [
            [`year`, `years`, `years`],
            [`₽`, `₽`, `₽`],
            { one: `thing`, few: `things`, many: `things`, other: `things` },
            {
                one: `year`,
                other: `years`,
            },
        ];
        this.pluralize = null;
        this.keyStepsVariants = [
            [[50, 1000]],
            [
                [100 / 3, 100000],
                [(100 / 3) * 2, 300000],
            ],
        ];
        this.keySteps = null;
        this.quantumVariants = [0.01, 0.001, 0.1, 1, 10];
        this.quantum = this.quantumVariants[0];
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
            return;
        }
        this.control.enable();
    }
}
ExampleTuiSliderComponent.ɵfac = function ExampleTuiSliderComponent_Factory(t) { return new (t || ExampleTuiSliderComponent)(); };
ExampleTuiSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiSliderComponent, selectors: [["example-slider"]], decls: 4, vars: 0, consts: [["header", "Slider", "package", "KIT", "type", "components", "deprecated", ""], ["pageTab", ""], ["status", "error"], ["tuiLink", "", "routerLink", "/components/slider"], ["id", "base", 3, "content", 6, "heading"], ["id", "segments", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize | Record<string, string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "steps", "segments", "pluralize", "keySteps", "quantum", "size"], ["tuiLink", "", "href", "https://unicode-org.github.io/icu/userguide/format_parse/messages/"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiSliderComponent_ng_template_1_Template, 15, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiSliderComponent_ng_template_2_Template, 12, 18, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSliderComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiSliderExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiSliderExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_slider_slider_old_component__WEBPACK_IMPORTED_MODULE_14__["TuiSliderOldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-slider`,
                templateUrl: `./slider-old.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/slider-old/slider-old.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/slider-old/slider-old.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiSliderOldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSliderOldModule", function() { return ExampleTuiSliderOldModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/slider-old/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/slider-old/examples/2/index.ts");
/* harmony import */ var _slider_old_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider-old.component */ "./src/modules/components/slider-old/slider-old.component.ts");












class ExampleTuiSliderOldModule {
}
ExampleTuiSliderOldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiSliderOldModule });
ExampleTuiSliderOldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiSliderOldModule_Factory(t) { return new (t || ExampleTuiSliderOldModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiSliderOldModule, { declarations: [_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSliderExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSliderExample2"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiSliderOldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiSliderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"])),
                ],
                declarations: [_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiSliderExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiSliderExample2"]],
                exports: [_slider_old_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSliderComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-slider-old-slider-old-module.js.map