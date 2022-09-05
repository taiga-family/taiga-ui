(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-card-input-card-module"],{

/***/ "./src/modules/components/input-card/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-card/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputCardExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCardExample1", function() { return TuiInputCardExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card/input-card.component */ "../addon-commerce/components/input-card/input-card.component.ts");
/* harmony import */ var _addon_commerce_components_input_expire_input_expire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-expire/input-expire.component */ "../addon-commerce/components/input-expire/input-expire.component.ts");
/* harmony import */ var _addon_commerce_components_input_cvc_input_cvc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-cvc/input-cvc.component */ "../addon-commerce/components/input-cvc/input-cvc.component.ts");










var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8368729506777256792$$SRC_MODULES_COMPONENTS_INPUT_CARD_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("{$startTagCode}form{$closeTagCode} tag is used for better autocomplete\n", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_8368729506777256792$$SRC_MODULES_COMPONENTS_INPUT_CARD_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟55e971bc370c0719311d739ac5400bc8dcc4915a␟8368729506777256792:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:form${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: tag is used for better autocomplete
`;
}
class TuiInputCardExample1 {
    constructor() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            card: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
            expire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
            cvc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
    }
    get card() {
        const value = this.form.get(`card`).value;
        if (value.length < 7) {
            return null;
        }
        switch (value.charAt(0)) {
            case `0`:
            case `1`:
            case `2`:
                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;
            case `3`:
            case `4`:
            case `5`:
                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;
            case `6`:
            case `7`:
                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;
            case `8`:
            case `9`:
            default:
                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
        }
    }
}
TuiInputCardExample1.ɵfac = function TuiInputCardExample1_Factory(t) { return new (t || TuiInputCardExample1)(); };
TuiInputCardExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCardExample1, selectors: [["tui-input-card-example-1"]], decls: 10, vars: 5, consts: [["tuiGroup", "", 3, "formGroup"], ["formControlName", "card", 3, "autocompleteEnabled", "cardSrc"], ["formControlName", "expire", 3, "autocompleteEnabled"], ["formControlName", "cvc", 3, "autocompleteEnabled"]], template: function TuiInputCardExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input-expire", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Expire date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-input-cvc", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CVC/CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", true)("cardSrc", ctx.card);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _addon_commerce_components_input_expire_input_expire_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputExpireComponent"], _addon_commerce_components_input_cvc_input_cvc_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputCVCComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCardExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-card-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-card/input-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/input-card/input-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiInputCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCardComponent", function() { return ExampleTuiInputCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-card/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-commerce/components/input-card/input-card.component */ "../addon-commerce/components/input-card/input-card.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_commerce_components_input_expire_input_expire_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-commerce/components/input-expire/input-expire.component */ "../addon-commerce/components/input-expire/input-expire.component.ts");
/* harmony import */ var _addon_commerce_components_input_cvc_input_cvc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../addon-commerce/components/input-cvc/input-cvc.component */ "../addon-commerce/components/input-cvc/input-cvc.component.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");
































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6470927994758536071$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputCard{$closeTagCode} can be used with {$startTagCode}InputExpire{$closeTagCode} and {$startTagCode}InputCVC{$closeTagCode} to input a card ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]" });
    I18N_0 = MSG_EXTERNAL_6470927994758536071$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟2f640a16c0e05689a9493fa51d084298a92231d2␟6470927994758536071:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputCard${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: can be used with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputExpire${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputCVC${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: to input a card `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiInputCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-input-card-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1504302675191121980$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__3 = goog.getMsg(" Add {$startTagCode}tuiCreateLuhnValidator(customMessage?){$closeTagCode} to control validators to validate it with Luhn algorithm ", { "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD" });
    I18N_2 = MSG_EXTERNAL_1504302675191121980$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `;
}
const _c4 = function () { return []; };
function ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("binChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template_tui_input_card_binChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onBinChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Card number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-expire", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Expire date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input-cvc", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " CVC/CVV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "tuiFieldError");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", ctx_r3.autocompleteEnabledCard)("cardSrc", ctx_r3.cardSrc)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("pseudoFocused", ctx_r3.pseudoFocused)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", ctx_r3.autocompleteEnabledExpire)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("pseudoFocused", ctx_r3.pseudoFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteEnabled", ctx_r3.autocompleteEnabledCVC)("focusable", ctx_r3.focusable)("length", ctx_r3.length)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("pseudoFocused", ctx_r3.pseudoFocused)("tuiHintContent", ctx_r3.hintContentCVC)("tuiHintDirection", ctx_r3.hintDirectionCVC)("tuiHintMode", ctx_r3.hintModeCVC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c4))));
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____6 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_5 = MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____6;
}
else {
    I18N_5 = $localize `:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____8 = goog.getMsg(" Browser autocomplete of card ");
    I18N_7 = MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____8;
}
else {
    I18N_7 = $localize `:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_7);
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_485699365067563704$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____10 = goog.getMsg(" SVG card icon ");
    I18N_9 = MSG_EXTERNAL_485699365067563704$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____10;
}
else {
    I18N_9 = $localize `:␟dcc7e3b746f7cded22fc2e353f17e985980623f7␟485699365067563704: SVG card icon `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_9);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3654424801956026296$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____12 = goog.getMsg(" BIN value (card first 6 symbols) ");
    I18N_11 = MSG_EXTERNAL_3654424801956026296$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____12;
}
else {
    I18N_11 = $localize `:␟fb5491175d895b16c29c18e6ee0deaac92726d60␟3654424801956026296: BIN value (card first 6 symbols) `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_1_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.disabledCard = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_2_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.autocompleteEnabledCard = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_3_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.cardSrcSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_4_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "inherited-documentation");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r4.disabledCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r4.autocompleteEnabledCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r4.cardSrcVariants)("documentationPropertyValue", ctx_r4.cardSrcSelected);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____14 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_13 = MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____14;
}
else {
    I18N_13 = $localize `:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____16 = goog.getMsg(" Browser autocomplete of card ");
    I18N_15 = MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____16;
}
else {
    I18N_15 = $localize `:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_1_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template_ng_template_documentationPropertyValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.disabledExpire = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_2_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.autocompleteEnabledExpire = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "inherited-documentation");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r5.disabledExpire);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r5.autocompleteEnabledExpire);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____18 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_17 = MSG_EXTERNAL_8188315960463628611$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____18;
}
else {
    I18N_17 = $localize `:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____20 = goog.getMsg(" Browser autocomplete of card ");
    I18N_19 = MSG_EXTERNAL_3717227958474842046$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____20;
}
else {
    I18N_19 = $localize `:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8094181198746722162$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____22 = goog.getMsg(" Code length ");
    I18N_21 = MSG_EXTERNAL_8094181198746722162$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____22;
}
else {
    I18N_21 = $localize `:␟f9633c5a291f65405f5a5ebdb40846783f6d65a1␟8094181198746722162: Code length `;
}
function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_1_Template, 2, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.disabledCVC = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_2_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.autocompleteEnabledCVC = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_3_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "inherited-documentation");
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.disabledCVC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.autocompleteEnabledCVC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r6.lengthVariants)("documentationPropertyValue", ctx_r6.length);
} }
function ExampleTuiInputCardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template, 10, 43, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-accordion", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-accordion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " TuiInputCardComponent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template, 6, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-accordion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " TuiInputExpireComponent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template, 4, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-accordion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TuiInputCVCComponent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template, 5, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3557620798016058872$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__24 = goog.getMsg(" Import {$startTagCode}TuiInputCardModule{$closeTagCode} , {$startTagCode}TuiInputCVCModule{$closeTagCode} , {$startTagCode}TuiInputExpireModule{$closeTagCode} modules into the module where you want to use them: {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]", "startTagTuiDocCode": "\uFFFD#6\uFFFD", "closeTagTuiDocCode": "\uFFFD/#6\uFFFD" });
    I18N_23 = MSG_EXTERNAL_3557620798016058872$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟ae4597c634cd72fb51db1738adfcb64703005369␟3557620798016058872: Import ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputCardModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputCVCModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputExpireModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: modules into the module where you want to use them: ${"\uFFFD#6\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
I18N_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_23);
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__26 = goog.getMsg("Add to the template:");
    I18N_25 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputCardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputCardComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiControl"] {
    constructor(alertService) {
        super();
        this.alertService = alertService;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/1/index.html")),
        };
        this.card = ``;
        this.lengthVariants = [3, 4];
        this.length = this.lengthVariants[0];
        this.cleaner = false;
        this.exampleText = `0000 0000 0000 0000`;
        this.hintContentCVC = null;
        this.hintDirectionCVC = `bottom-left`;
        this.hintModeCVC = null;
        this.cards = {
            common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
            universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
            intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
            mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
        };
        this.cardSrcVariants = Object.keys(this.cards);
        this.cardSrcSelected = null;
        this.autocompleteEnabledCard = false;
        this.autocompleteEnabledCVC = false;
        this.autocompleteEnabledExpire = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            card: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["tuiCreateLuhnValidator"])(`Invalid card number`),
            ]),
            expire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cvc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    get cardSrc() {
        return this.cardSrcSelected === null ? null : this.cards[this.cardSrcSelected];
    }
    get disabledCard() {
        return this.isDisabled(`card`);
    }
    set disabledCard(value) {
        this.toggleDisabled(value, `card`);
    }
    get disabledExpire() {
        return this.isDisabled(`expire`);
    }
    set disabledExpire(value) {
        this.toggleDisabled(value, `expire`);
    }
    get disabledCVC() {
        return this.isDisabled(`cvc`);
    }
    set disabledCVC(value) {
        this.toggleDisabled(value, `cvc`);
    }
    isDisabled(control) {
        return this.control.get(control).disabled;
    }
    toggleDisabled(value, control) {
        if (value) {
            this.control.get(control).disable();
            return;
        }
        this.control.get(control).enable();
    }
    onBinChange(bin) {
        this.alertService.open(`bin: ${bin}`).subscribe();
    }
}
ExampleTuiInputCardComponent.ɵfac = function ExampleTuiInputCardComponent_Factory(t) { return new (t || ExampleTuiInputCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"])); };
ExampleTuiInputCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputCardComponent, selectors: [["example-input-card"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCardComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputCard", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], ["id", "group", "heading", "tui-group", 3, "content"], [3, "control"], [1, "b-full-width", "tui-space_bottom-6"], [1, "b-full-width", 3, "closeOthers"], [3, "open"], ["tuiAccordionItemContent", ""], [1, "form", 3, "formGroup"], ["formControlName", "card", 1, "control", 3, "autocompleteEnabled", "cardSrc", "focusable", "readOnly", "tuiTextfieldSize", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHovered", "pseudoPressed", "pseudoFocused", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "binChange"], ["formControlName", "expire", 1, "control", 3, "autocompleteEnabled", "focusable", "readOnly", "tuiTextfieldSize", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHovered", "pseudoPressed", "pseudoFocused"], ["formControlName", "cvc", 1, "control", 3, "autocompleteEnabled", "focusable", "length", "readOnly", "tuiTextfieldSize", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHovered", "pseudoPressed", "pseudoFocused", "tuiHintContent", "tuiHintDirection", "tuiHintMode"], ["formControlName", "card", 1, "error", 3, "error"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autocompleteEnabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardSrc", "documentationPropertyMode", "input", "documentationPropertyType", "string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "binChange", "documentationPropertyMode", "output", "documentationPropertyType", "string | null"], ["documentationPropertyName", "length", "documentationPropertyMode", "input", "documentationPropertyType", "3 | 4", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCardComponent_ng_template_1_Template, 7, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCardComponent_ng_template_2_Template, 16, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCardComponent_ng_template_3_Template, 11, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiInputCardExample1"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_13__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_14__["TuiAccordionItemContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_15__["TuiInputCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_16__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_17__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_18__["TuiTextfieldLabelOutsideDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_19__["TuiHintControllerDirective"], _addon_commerce_components_input_expire_input_expire_component__WEBPACK_IMPORTED_MODULE_20__["TuiInputExpireComponent"], _addon_commerce_components_input_cvc_input_cvc_component__WEBPACK_IMPORTED_MODULE_21__["TuiInputCVCComponent"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_22__["TuiErrorComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_23__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_24__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_25__["InheritedDocumentationComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_26__["TuiDocCodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_28__["TuiFieldErrorPipe"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.control[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0.25rem;\n}\n.control[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 1.25rem;\n}\n.error[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkL2lucHV0LWNhcmQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC1jYXJkL2lucHV0LWNhcmQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QURLSjtBQ0ZBO0VBQ0ksT0FBQTtFQUNBLHNCQUFBO0FESUo7QUNGSTtFQUNJLHFCQUFBO0FESVI7QUNBQTtFQUNJLGVBQUE7QURFSjtBQ0NBO0VBQ0ksK0JBQUE7QURDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQtY2FyZC9pbnB1dC1jYXJkLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250cm9sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG59XG4uZXJyb3Ige1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4udGl0bGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250cm9sIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgfVxufVxuXG4uZXJyb3Ige1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-input-card`,
                templateUrl: `./input-card.template.html`,
                styleUrls: [`./input-card.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCardComponent),
                    },
                ],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/input-card/input-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-card/input-card.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiInputCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCardModule", function() { return ExampleTuiInputCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-card/examples/1/index.ts");
/* harmony import */ var _input_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input-card.component */ "./src/modules/components/input-card/input-card.component.ts");













class ExampleTuiInputCardModule {
}
ExampleTuiInputCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputCardModule });
ExampleTuiInputCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputCardModule_Factory(t) { return new (t || ExampleTuiInputCardModule)(); }, imports: [[
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputCardModule, { declarations: [_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputCardExample1"]], imports: [_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCVCModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputExpireModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"])),
                ],
                declarations: [_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputCardExample1"]],
                exports: [_input_card_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiInputCardComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-card-input-card-module.js.map