(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~c720674f"],{

/***/ "./src/modules/components/abstract/control.ts":
/*!****************************************************!*\
  !*** ./src/modules/components/abstract/control.ts ***!
  \****************************************************/
/*! exports provided: AbstractExampleTuiControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiControl", function() { return AbstractExampleTuiControl; });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./src/modules/components/abstract/interactive.ts");


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__["AbstractExampleTuiInteractive"] {
    constructor() {
        super(...arguments);
        this.sizeVariants = [`s`, `m`, `l`];
        this.hintContentVariants = [`Some content`];
        this.hintDirectionVariants = [
            `left`,
            `right`,
            `bottom-left`,
            `bottom-right`,
            `bottom-middle`,
            `top-left`,
            `top-right`,
            `top-middle`,
        ];
        this.hintModeVariants = [`error`, `onDark`];
        this.typeVariants = [
            `text`,
            `email`,
            `password`,
            `tel`,
            `url`,
        ];
        this.maxLengthVariants = [10];
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
        this.inputModeVariants = [`text`, `numeric`];
        this.customContentVariants = [
            CUSTOM_SVG_NAME,
            `tuiIconSearchLarge`,
            `tuiIconCalendarLarge`,
            `tuiIconVisaMono`,
            `tuiIconMastercardMono`,
        ];
        this.customContentSelected = null;
        this.inputMode = this.inputModeVariants[0];
        this.autocomplete = ``;
        this.maxLength = null;
        this.type = this.typeVariants[0];
        this.cleaner = false;
        this.pseudoInvalid = null;
        this.success = false;
        this.readOnly = false;
        this.labelOutside = false;
        this.size = this.sizeVariants[2];
        this.exampleText = ``;
        this.maxHeight = null;
        this.hintContent = null;
        this.hintDirection = this.hintDirectionVariants[2];
        this.hintMode = null;
        this.dropdownAlignVariants = [`left`, `right`];
        this.dropdownAlign = this.dropdownAlignVariants[0];
        this.dropdownLimitWidthVariants = [`fixed`, `min`];
        this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
        this.dropdownDirectionVariants = [
            `top`,
            `bottom`,
        ];
        this.dropdownDirection = null;
        this.dropdownSided = false;
        this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MIN_HEIGHT"];
        this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MAX_HEIGHT"];
    }
    get customContent() {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
}


/***/ }),

/***/ "./src/modules/components/abstract/interactive.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/abstract/interactive.ts ***!
  \********************************************************/
/*! exports provided: AbstractExampleTuiInteractive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiInteractive", function() { return AbstractExampleTuiInteractive; });
class AbstractExampleTuiInteractive {
    constructor() {
        this.pseudoVariants = [false, true];
        this.focusable = true;
        this.pseudoFocused = null;
        this.pseudoHovered = null;
        this.pseudoPressed = null;
    }
}


/***/ }),

/***/ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TextfieldControllerDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldControllerDocumentationComponent", function() { return TextfieldControllerDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1572963165264754773$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiTextfieldController {$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_1572963165264754773$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟0f16016fd47f3e9ccfc14daf7f94aff13d49e3be␟1572963165264754773: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiTextfieldController ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_133455603661719881$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}autocomplete{$closeTagCode} attribute for a native input ( {$startLink} see names {$closeLink} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_2 = MSG_EXTERNAL_133455603661719881$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟0f1f2e18fa41508609d14d1656df5c91e70264ee␟133455603661719881:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:autocomplete${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input ( ${"\uFFFD#2\uFFFD"}:START_LINK: see names ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: ) `;
}
function TextfieldControllerDocumentationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6662346409225163623$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Shows a cross to reset a value ");
    I18N_4 = MSG_EXTERNAL_6662346409225163623$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟86c783c312258a4cc253591b5a817b17c223dc95␟6662346409225163623: Shows a cross to reset a value `;
}
function TextfieldControllerDocumentationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_4);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5707424768258205077$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as {$startTagCode}src{$closeTagCode} or as icon name into {$startLink} tui-svg {$closeLink}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_5707424768258205077$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟977f2847987a4300141e647213ea25dd30c1fddc␟5707424768258205077: Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:src${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: or as icon name into ${"\uFFFD#2\uFFFD"}:START_LINK: tui-svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
}
function TextfieldControllerDocumentationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7210811225864785696$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9 = goog.getMsg(" Example text shown on empty focused input ");
    I18N_8 = MSG_EXTERNAL_7210811225864785696$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟7378c103249ac5aa457b642a97735c88927bb063␟7210811225864785696: Example text shown on empty focused input `;
}
function TextfieldControllerDocumentationComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7539332054500159530$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11 = goog.getMsg("{$startTagCode}inputmode{$closeTagCode} attribute for a native input. You can use it to set screen keyboard view on mobile devices ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_10 = MSG_EXTERNAL_7539332054500159530$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟5f6703f7337b24928e8012352ceacff5313b1685␟7539332054500159530:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:inputmode${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input. You can use it to set screen keyboard view on mobile devices `;
}
function TextfieldControllerDocumentationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8186517819514631991$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__13 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}{$startParagraph} ( {$startTagCode}labelOutside = false{$closeTagCode} does not work together with {$startTagCode}size === 's'{$closeTagCode} : for s-size inputs use only outside labels) {$closeParagraph}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]", "closeLink": "\uFFFD/#1\uFFFD", "startParagraph": "\uFFFD#3\uFFFD", "closeParagraph": "\uFFFD/#3\uFFFD" });
    I18N_12 = MSG_EXTERNAL_8186517819514631991$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟0c2110b3b3ff8d6f28e7505a79d295d58b028a3d␟8186517819514631991: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Label${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:${"\uFFFD#3\uFFFD"}:START_PARAGRAPH: ( ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:labelOutside = false${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: does not work together with ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:size === 's'${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: : for s-size inputs use only outside labels) ${"\uFFFD/#3\uFFFD"}:CLOSE_PARAGRAPH:`;
}
I18N_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_12);
function TextfieldControllerDocumentationComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6695119649647376476$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__15 = goog.getMsg(" Maximum number of symbols to type. Does not with with mask together ");
    I18N_14 = MSG_EXTERNAL_6695119649647376476$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟97f80ccaa9f470dd13c16975caed35c8684eaf28␟6695119649647376476: Maximum number of symbols to type. Does not with with mask together `;
}
function TextfieldControllerDocumentationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1502661819829929661$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__17 = goog.getMsg(" Size ");
    I18N_16 = MSG_EXTERNAL_1502661819829929661$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟13eed072cbe605d542b91197fe1edd6674cca0e4␟1502661819829929661: Size `;
}
function TextfieldControllerDocumentationComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7603748422792758462$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__19 = goog.getMsg("{$startTagCode}type{$closeTagCode} attribute for a native input ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_18 = MSG_EXTERNAL_7603748422792758462$$SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟97c38d2750457340fb26c61a4426999ceab3d3d3␟7603748422792758462:${"\uFFFD#1\uFFFD"}:START_TAG_CODE:type${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: attribute for a native input `;
}
function TextfieldControllerDocumentationComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
class TextfieldControllerDocumentationComponent {
    constructor(documentedComponent) {
        this.documentedComponent = documentedComponent;
    }
}
TextfieldControllerDocumentationComponent.ɵfac = function TextfieldControllerDocumentationComponent_Factory(t) { return new (t || TextfieldControllerDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"])); };
TextfieldControllerDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextfieldControllerDocumentationComponent, selectors: [["textfield-controller-documentation"]], decls: 17, vars: 15, consts: [[1, "tui-text_h6"], ["tuiLink", "", "target", "_blank", "routerLink", "/directives/textfield-controller"], ["documentationPropertyName", "tuiTextfieldAutocomplete", "documentationPropertyMode", "input", "documentationPropertyType", "TuiAutofillFieldName | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCleaner", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCustomContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldExampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldInputMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiInputModeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldMaxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldType", "documentationPropertyMode", "input", "documentationPropertyType", "TuiInputTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", "target", "_blanl", "href", "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"], ["routerLink", "/components/svg", "tuiLink", ""], ["tuiLink", "", "routerLink", "/components/label"]], template: function TextfieldControllerDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TuiTextfieldControllerModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TextfieldControllerDocumentationComponent_ng_template_8_Template, 3, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) { return ctx.documentedComponent.autocomplete = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TextfieldControllerDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) { return ctx.documentedComponent.cleaner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TextfieldControllerDocumentationComponent_ng_template_10_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) { return ctx.documentedComponent.customContentSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TextfieldControllerDocumentationComponent_ng_template_11_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_11_listener($event) { return ctx.documentedComponent.exampleText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TextfieldControllerDocumentationComponent_ng_template_12_Template, 2, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_12_listener($event) { return ctx.documentedComponent.inputMode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TextfieldControllerDocumentationComponent_ng_template_13_Template, 6, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_13_listener($event) { return ctx.documentedComponent.labelOutside = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TextfieldControllerDocumentationComponent_ng_template_14_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_14_listener($event) { return ctx.documentedComponent.maxLength = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TextfieldControllerDocumentationComponent_ng_template_15_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_15_listener($event) { return ctx.documentedComponent.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TextfieldControllerDocumentationComponent_ng_template_16_Template, 2, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_16_listener($event) { return ctx.documentedComponent.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.autocompleteVariants)("documentationPropertyValue", ctx.documentedComponent.autocomplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.cleaner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.customContentVariants)("documentationPropertyValue", ctx.documentedComponent.customContentSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.exampleText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.inputModeVariants)("documentationPropertyValue", ctx.documentedComponent.inputMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.labelOutside);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.maxLengthVariants)("documentationPropertyValue", ctx.documentedComponent.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.sizeVariants)("documentationPropertyValue", ctx.documentedComponent.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.typeVariants)("documentationPropertyValue", ctx.documentedComponent.type);
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocDocumentationPropertyConnectorDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextfieldControllerDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `textfield-controller-documentation`,
                templateUrl: `./textfield-controller-documentation.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TextfieldControllerDocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldControllerDocumentationModule", function() { return TextfieldControllerDocumentationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textfield-controller-documentation.component */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts");







class TextfieldControllerDocumentationModule {
}
TextfieldControllerDocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextfieldControllerDocumentationModule });
TextfieldControllerDocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TextfieldControllerDocumentationModule_Factory(t) { return new (t || TextfieldControllerDocumentationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextfieldControllerDocumentationModule, { declarations: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]], exports: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextfieldControllerDocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]],
                declarations: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationComponent"]],
                exports: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~c720674f.js.map