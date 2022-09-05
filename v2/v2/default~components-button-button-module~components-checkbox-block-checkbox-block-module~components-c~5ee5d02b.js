(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~5ee5d02b"],{

/***/ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DropdownControllerDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownControllerDocumentationComponent", function() { return DropdownControllerDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8873256266701530790$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiDropdownController {$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_8873256266701530790$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟f10667f722f7715235528f21ab06bf1972765a90␟8873256266701530790: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiDropdownController ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6653398799439643090$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Align of dropdown (does not work together with {$startTagCode}limitWidth === 'fixed'{$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_2 = MSG_EXTERNAL_6653398799439643090$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:limitWidth === 'fixed'${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function DropdownControllerDocumentationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8159982415408745443$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Set a vertical direction of dropdown ");
    I18N_4 = MSG_EXTERNAL_8159982415408745443$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `;
}
function DropdownControllerDocumentationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_4);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2332262850583786014$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Put dropdown to the side, instead of top or bottom. Use in combination with {$startTagCode}tuiDropdownAlign{$closeTagCode}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_6 = MSG_EXTERNAL_2332262850583786014$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟c854cb99ce8a36b1e288c9072b5b71d5204f9c7f␟2332262850583786014: Put dropdown to the side, instead of top or bottom. Use in combination with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownAlign${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
}
function DropdownControllerDocumentationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6158927642754956379$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9 = goog.getMsg(" Limit width of dropdown ");
    I18N_8 = MSG_EXTERNAL_6158927642754956379$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `;
}
function DropdownControllerDocumentationComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4679692758727259251$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11 = goog.getMsg(" Minimum height to calculate that dropdown fits to setted {$startTagCode}tuiDropdownDirection{$closeTagCode}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_10 = MSG_EXTERNAL_4679692758727259251$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownDirection${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
}
function DropdownControllerDocumentationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5657510849972139844$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__13 = goog.getMsg(" Maximum height of dropdown ");
    I18N_12 = MSG_EXTERNAL_5657510849972139844$$SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_CONTROLLER_DOCUMENTATION_DROPDOWN_CONTROLLER_DOCUMENTATION_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `;
}
function DropdownControllerDocumentationComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
class DropdownControllerDocumentationComponent {
    constructor(documentedComponent) {
        this.documentedComponent = documentedComponent;
    }
}
DropdownControllerDocumentationComponent.ɵfac = function DropdownControllerDocumentationComponent_Factory(t) { return new (t || DropdownControllerDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"])); };
DropdownControllerDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownControllerDocumentationComponent, selectors: [["dropdown-controller-documentation"]], decls: 14, vars: 9, consts: [[1, "tui-text_h6"], ["tuiLink", "", "target", "_blank", "routerLink", "/directives/dropdown-controller"], ["documentationPropertyName", "tuiDropdownAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiVerticalDirection | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownSided", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownLimitWidth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDropdownWidthT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMinHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMaxHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"]], template: function DropdownControllerDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TuiDropdownControllerModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DropdownControllerDocumentationComponent_ng_template_8_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) { return ctx.documentedComponent.dropdownAlign = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DropdownControllerDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) { return ctx.documentedComponent.dropdownDirection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DropdownControllerDocumentationComponent_ng_template_10_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) { return ctx.documentedComponent.dropdownDirection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DropdownControllerDocumentationComponent_ng_template_11_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_11_listener($event) { return ctx.documentedComponent.dropdownLimitWidth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DropdownControllerDocumentationComponent_ng_template_12_Template, 2, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_12_listener($event) { return ctx.documentedComponent.dropdownMinHeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DropdownControllerDocumentationComponent_ng_template_13_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function DropdownControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_13_listener($event) { return ctx.documentedComponent.dropdownMaxHeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.dropdownAlignVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownAlign);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.dropdownDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownLimitWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.dropdownMinHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx.documentedComponent.dropdownMaxHeight);
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocDocumentationPropertyConnectorDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownControllerDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `dropdown-controller-documentation`,
                templateUrl: `./dropdown-controller-documentation.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DropdownControllerDocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownControllerDocumentationModule", function() { return DropdownControllerDocumentationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-controller-documentation.component */ "./src/modules/components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component.ts");







class DropdownControllerDocumentationModule {
}
DropdownControllerDocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DropdownControllerDocumentationModule });
DropdownControllerDocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DropdownControllerDocumentationModule_Factory(t) { return new (t || DropdownControllerDocumentationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropdownControllerDocumentationModule, { declarations: [_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DropdownControllerDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]], exports: [_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DropdownControllerDocumentationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownControllerDocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"]],
                declarations: [_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DropdownControllerDocumentationComponent"]],
                exports: [_dropdown_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DropdownControllerDocumentationComponent"]],
            }]
    }], null, null); })();


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=default~components-button-button-module~components-checkbox-block-checkbox-block-module~components-c~5ee5d02b.js.map