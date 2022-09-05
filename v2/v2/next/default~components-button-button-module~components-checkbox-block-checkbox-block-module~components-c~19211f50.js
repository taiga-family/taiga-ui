(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~19211f50"],{

/***/ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: HintControllerDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintControllerDocumentationComponent", function() { return HintControllerDocumentationComponent; });
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
    const MSG_EXTERNAL_7383129453022960447$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiHintController {$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7383129453022960447$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟66324e662ff50f3b96aa9ac960d8d30c26ed1e10␟7383129453022960447: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiHintController ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3678891282453416700$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Content of hint (does not show tooltip if content is null) ");
    I18N_2 = MSG_EXTERNAL_3678891282453416700$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟1ef55eb5a50895e1ffa6f4fb81472d9d1613fc27␟3678891282453416700: Content of hint (does not show tooltip if content is null) `;
}
function HintControllerDocumentationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_2);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3935903673702800277$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Hint direction ");
    I18N_4 = MSG_EXTERNAL_3935903673702800277$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟e18800c0fc9d48ba52db6f2e70f4e1af09510798␟3935903673702800277: Hint direction `;
}
function HintControllerDocumentationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_4);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5804056483239337159$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Hint mode ");
    I18N_6 = MSG_EXTERNAL_5804056483239337159$$SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟bc52b3a9e02da71ae232468999e85f548d2afc40␟5804056483239337159: Hint mode `;
}
function HintControllerDocumentationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_6);
} }
class HintControllerDocumentationComponent {
    constructor(documentedComponent) {
        this.documentedComponent = documentedComponent;
    }
}
HintControllerDocumentationComponent.ɵfac = function HintControllerDocumentationComponent_Factory(t) { return new (t || HintControllerDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"])); };
HintControllerDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HintControllerDocumentationComponent, selectors: [["hint-controller-documentation"]], decls: 11, vars: 6, consts: [[1, "tui-text_h6"], ["tuiLink", "", "target", "_blank", "routerLink", "/directives/hint-controller"], ["documentationPropertyName", "tuiHintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintModeT | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"]], template: function HintControllerDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TuiHintControllerModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HintControllerDocumentationComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) { return ctx.documentedComponent.hintContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HintControllerDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) { return ctx.documentedComponent.hintDirection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HintControllerDocumentationComponent_ng_template_10_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) { return ctx.documentedComponent.hintMode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.hintContentVariants)("documentationPropertyValue", ctx.documentedComponent.hintContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.hintDirectionVariants)("documentationPropertyValue", ctx.documentedComponent.hintDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.hintModeVariants)("documentationPropertyValue", ctx.documentedComponent.hintMode);
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocDocumentationPropertyConnectorDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HintControllerDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `hint-controller-documentation`,
                templateUrl: `./hint-controller-documentation.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HintControllerDocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintControllerDocumentationModule", function() { return HintControllerDocumentationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hint-controller-documentation.component */ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts");







class HintControllerDocumentationModule {
}
HintControllerDocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HintControllerDocumentationModule });
HintControllerDocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HintControllerDocumentationModule_Factory(t) { return new (t || HintControllerDocumentationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HintControllerDocumentationModule, { declarations: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["HintControllerDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]], exports: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["HintControllerDocumentationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HintControllerDocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]],
                declarations: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["HintControllerDocumentationComponent"]],
                exports: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["HintControllerDocumentationComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/abstract/hint.ts":
/*!*************************************************!*\
  !*** ./src/modules/components/abstract/hint.ts ***!
  \*************************************************/
/*! exports provided: AbstractExampleTuiHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractExampleTuiHint", function() { return AbstractExampleTuiHint; });
class AbstractExampleTuiHint {
    constructor() {
        this.modeVariants = [`error`, `onDark`];
        this.mode = null;
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
        this.direction = this.directionVariants[5];
    }
}


/***/ }),

/***/ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InheritedDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InheritedDocumentationComponent", function() { return InheritedDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _hint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hint */ "./src/modules/components/abstract/hint.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interactive */ "./src/modules/components/abstract/interactive.ts");
/* harmony import */ var _abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dropdown_controller_documentation_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dropdown-controller-documentation/dropdown-controller-documentation.component */ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component.ts");
/* harmony import */ var _hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hint-controller-documentation/hint-controller-documentation.component */ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts");
/* harmony import */ var _textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../textfield-controller-documentation/textfield-controller-documentation.component */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");













function InheritedDocumentationComponent_dropdown_controller_documentation_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dropdown-controller-documentation");
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_721276220650916123$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__1 = goog.getMsg(" Inherited from {$startTagCode}TuiReactiveControl{$closeTagCode}", { "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD" });
    I18N_0 = MSG_EXTERNAL_721276220650916123$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟39a776c9650df9dd4c25fe602323fe1433491943␟721276220650916123: Inherited from ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:TuiReactiveControl${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1258207454480608117$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___3 = goog.getMsg(" Component is read only ");
    I18N_2 = MSG_EXTERNAL_1258207454480608117$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:␟7ea3fa99762b474f8370d948e5f3be06543b8341␟1258207454480608117: Component is read only `;
}
function InheritedDocumentationComponent_ng_container_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_2);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2775038340083920167$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___5 = goog.getMsg(" Set invalid state regardless of control ");
    I18N_4 = MSG_EXTERNAL_2775038340083920167$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:␟d7ec9bdfdb46e69878e54260fe303245b70e9b75␟2775038340083920167: Set invalid state regardless of control `;
}
function InheritedDocumentationComponent_ng_container_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_4);
} }
function InheritedDocumentationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hint-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textfield-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InheritedDocumentationComponent_ng_container_1_ng_template_7_Template, 1, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_1_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.documentedComponent.readOnly = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InheritedDocumentationComponent_ng_container_1_ng_template_8_Template, 1, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_1_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.documentedComponent.pseudoInvalid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.documentedComponent.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.booleanVariants)("documentationPropertyValue", ctx_r1.documentedComponent.pseudoInvalid);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1337301013174865835$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Inherited from {$startTagCode}TuiInteractive{$closeTagCode}", { "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD" });
    I18N_6 = MSG_EXTERNAL_1337301013174865835$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟bb142ed71f7c1acc4a9a33b0286f1c99ff5aa873␟1337301013174865835: Inherited from ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiInteractive${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5558345549391106839$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___9 = goog.getMsg(" Element can be focused ");
    I18N_8 = MSG_EXTERNAL_5558345549391106839$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟2c8de4e0b3d5250d418a789a5ad2dd652cff0a43␟5558345549391106839: Element can be focused `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8633113156251760283$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___11 = goog.getMsg(" Native ID attribute for element. It helps users with Screen Readers to use a page ");
    I18N_10 = MSG_EXTERNAL_8633113156251760283$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟2650b3b61836ba5aa3f00821a8e942ecfab8a7b0␟8633113156251760283: Native ID attribute for element. It helps users with Screen Readers to use a page `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1957913849253912534$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___13 = goog.getMsg(" Visual hovered state ");
    I18N_12 = MSG_EXTERNAL_1957913849253912534$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟7f3b87d2db71ad7f32d92a6532a474e3c84a7ccc␟1957913849253912534: Visual hovered state `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5377656771004740058$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___15 = goog.getMsg(" Visual focused state ");
    I18N_14 = MSG_EXTERNAL_5377656771004740058$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟4a0d9f7f4da08da0f70e0d4df8b8ca42af9b4a31␟5377656771004740058: Visual focused state `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5687635438532492053$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___17 = goog.getMsg(" Visual pressed state ");
    I18N_16 = MSG_EXTERNAL_5687635438532492053$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟20357105a7da32d6aaee2c23e59b116319736295␟5687635438532492053: Visual pressed state `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3889016178641587251$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___19 = goog.getMsg(" Emits on focus and blur ");
    I18N_18 = MSG_EXTERNAL_3889016178641587251$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟f9e99dc6cc483a556226b171a54d8b9ae132c379␟3889016178641587251: Emits on focus and blur `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2576134130150040377$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___21 = goog.getMsg(" Emits on hover and unhover ");
    I18N_20 = MSG_EXTERNAL_2576134130150040377$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟bb9fc77151c99bfdc5675ba9110914936bb5ab59␟2576134130150040377: Emits on hover and unhover `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2329009025401191718$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___23 = goog.getMsg(" Emits on press down and up ");
    I18N_22 = MSG_EXTERNAL_2329009025401191718$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟f89c4cd7a56942ddf2fcacd5afb9bf6aa76c25a1␟2329009025401191718: Emits on press down and up `;
}
function InheritedDocumentationComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
function InheritedDocumentationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InheritedDocumentationComponent_ng_container_2_ng_template_5_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.documentedComponent.focusable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InheritedDocumentationComponent_ng_container_2_ng_template_6_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InheritedDocumentationComponent_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.documentedComponent.pseudoHovered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InheritedDocumentationComponent_ng_container_2_ng_template_8_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.documentedComponent.pseudoFocused = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InheritedDocumentationComponent_ng_container_2_ng_template_9_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.documentedComponent.pseudoPressed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InheritedDocumentationComponent_ng_container_2_ng_template_10_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InheritedDocumentationComponent_ng_container_2_ng_template_11_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InheritedDocumentationComponent_ng_container_2_ng_template_12_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r2.documentedComponent.focusable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoHovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoPressed);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2028104669756386987$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___25 = goog.getMsg(" Hint direction ");
    I18N_24 = MSG_EXTERNAL_2028104669756386987$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟9c771d8d5100ffbd3db5b02a73e96118e5d352ae␟2028104669756386987: Hint direction `;
}
function InheritedDocumentationComponent_ng_container_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_147566188037501743$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___27 = goog.getMsg(" Hint mode ");
    I18N_26 = MSG_EXTERNAL_147566188037501743$$SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟5887c863a0e33f6e1261da22e64622c9bb1cc419␟147566188037501743: Hint mode `;
}
function InheritedDocumentationComponent_ng_container_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
function InheritedDocumentationComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Inherited from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AbstractHint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InheritedDocumentationComponent_ng_container_3_ng_template_6_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.documentedComponent.direction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InheritedDocumentationComponent_ng_container_3_ng_template_7_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_3_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.documentedComponent.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r3.directionVariants)("documentationPropertyValue", ctx_r3.documentedComponent.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r3.modeVariants)("documentationPropertyValue", ctx_r3.documentedComponent.mode);
} }
class InheritedDocumentationComponent {
    constructor(documentedComponent) {
        this.documentedComponent = documentedComponent;
        this.dropdown = false;
        this.booleanVariants = [false, true];
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
        this.modeVariants = [`error`, `onDark`];
    }
    isTuiReactiveControl(documentedComponent) {
        return documentedComponent instanceof _control__WEBPACK_IMPORTED_MODULE_2__["AbstractExampleTuiControl"];
    }
    isTuiInteractive(documentedComponent) {
        return documentedComponent instanceof _interactive__WEBPACK_IMPORTED_MODULE_4__["AbstractExampleTuiInteractive"];
    }
    isTuiHint(documentedComponent) {
        return documentedComponent instanceof _hint__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiHint"];
    }
}
InheritedDocumentationComponent.ɵfac = function InheritedDocumentationComponent_Factory(t) { return new (t || InheritedDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"])); };
InheritedDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InheritedDocumentationComponent, selectors: [["inherited-documentation"]], inputs: { dropdown: "dropdown" }, decls: 4, vars: 4, consts: [[4, "ngIf"], [1, "tui-text_h6"], ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoInvalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "focusable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "nativeId", "documentationPropertyMode", "input", "documentationPropertyType", "string"], ["documentationPropertyName", "pseudoHovered", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoFocused", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoPressed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "focusedChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], ["documentationPropertyName", "hoveredChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], ["documentationPropertyName", "pressedChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], ["documentationPropertyName", "tuiHintDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintModeT | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"]], template: function InheritedDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InheritedDocumentationComponent_dropdown_controller_documentation_0_Template, 1, 0, "dropdown-controller-documentation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InheritedDocumentationComponent_ng_container_1_Template, 9, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InheritedDocumentationComponent_ng_container_2_Template, 13, 7, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InheritedDocumentationComponent_ng_container_3_Template, 8, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTuiReactiveControl(ctx.documentedComponent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTuiInteractive(ctx.documentedComponent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTuiHint(ctx.documentedComponent));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _dropdown_controller_documentation_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_7__["DropdownControllerDocumentationComponent"], _hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_8__["HintControllerDocumentationComponent"], _textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_9__["TextfieldControllerDocumentationComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InheritedDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `inherited-documentation`,
                templateUrl: `./inherited-documentation.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_5__["ABSTRACT_PROPS_ACCESSOR"]]
            }] }]; }, { dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: InheritedDocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InheritedDocumentationModule", function() { return InheritedDocumentationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown-controller-documentation/dropdown-controller-documentation.module */ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module.ts");
/* harmony import */ var _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hint-controller-documentation/hint-controller-documentation.module */ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.module.ts");
/* harmony import */ var _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../textfield-controller-documentation/textfield-controller-documentation.module */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts");
/* harmony import */ var _inherited_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");








class InheritedDocumentationModule {
}
InheritedDocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InheritedDocumentationModule });
InheritedDocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function InheritedDocumentationModule_Factory(t) { return new (t || InheritedDocumentationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocDocumentationModule"],
            _dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__["DropdownControllerDocumentationModule"],
            _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_4__["HintControllerDocumentationModule"],
            _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InheritedDocumentationModule, { declarations: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocDocumentationModule"],
        _dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__["DropdownControllerDocumentationModule"],
        _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_4__["HintControllerDocumentationModule"],
        _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationModule"]], exports: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InheritedDocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocDocumentationModule"],
                    _dropdown_controller_documentation_dropdown_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__["DropdownControllerDocumentationModule"],
                    _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_4__["HintControllerDocumentationModule"],
                    _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_5__["TextfieldControllerDocumentationModule"],
                ],
                declarations: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationComponent"]],
                exports: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_6__["InheritedDocumentationComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~19211f50.js.map