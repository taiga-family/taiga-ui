(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-primitive-textfield-primitive-textfield-module"],{

/***/ "./src/modules/app/customization/customization.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/app/customization/customization.component.ts ***!
  \******************************************************************/
/*! exports provided: TuiCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCustomizationComponent", function() { return TuiCustomizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _customization_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customization.providers */ "./src/modules/app/customization/customization.providers.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");




















const _c0 = ["demo"];
function TuiCustomizationComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Not available in Internet Explorer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_1_ng_template_0_Template(rf, ctx) { }
function TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_1_ng_template_0_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const variable_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.onModelChange(variable_r8, $event); });
} if (rf & 2) {
    const variable_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyName", variable_r8)("documentationPropertyType", ctx_r7.getType(variable_r8))("documentationPropertyValue", ctx_r7.getVariable(variable_r8));
} }
function TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_1_Template, 1, 3, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiMode", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.keys);
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const variable_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.onModelChange(variable_r16, $event); });
} if (rf & 2) {
    const variable_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyName", variable_r16)("documentationPropertyType", ctx_r17.getType(variable_r16))("documentationPropertyValue", ctx_r17.getVariable(variable_r16));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template, 1, 3, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const variable_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.isDark(variable_r16) && !ctx_r15.isLight(variable_r16));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.keys);
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const variable_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r28.onModelChange(variable_r25, $event); });
} if (rf & 2) {
    const variable_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyName", variable_r25)("documentationPropertyType", ctx_r26.getType(variable_r25))("documentationPropertyValue", ctx_r26.getVariable(variable_r25));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template, 1, 3, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const variable_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.isLight(variable_r25));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.keys);
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Light ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_Template, 2, 1, "tui-doc-documentation", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const variable_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r37.onModelChange(variable_r34, $event); });
} if (rf & 2) {
    const variable_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyName", variable_r34)("documentationPropertyType", ctx_r35.getType(variable_r34))("documentationPropertyValue", ctx_r35.getVariable(variable_r34));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template, 1, 3, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const variable_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.isDark(variable_r34));
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.keys);
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_Template, 2, 1, "tui-doc-documentation", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TuiCustomizationComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-accordion", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_doc_documentation_3_Template, 2, 1, "tui-doc-documentation", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_4_Template, 3, 0, "tui-accordion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TuiCustomizationComponent_ng_template_1_ng_template_4_tui_accordion_item_5_Template, 3, 0, "tui-accordion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiMode", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.hasLight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.hasLight);
} }
function TuiCustomizationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-demo", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiCustomizationComponent_ng_template_1_tui_doc_documentation_3_Template, 2, 2, "tui-doc-documentation", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiCustomizationComponent_ng_template_1_ng_template_4_Template, 6, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("style", ctx_r2.style, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.basic)("ngIfElse", _r5);
} }
const _c1 = ["*"];
// @dynamic
class TuiCustomizationComponent {
    constructor(destroy$, sanitizer, variables, userAgent) {
        this.destroy$ = destroy$;
        this.sanitizer = sanitizer;
        this.variables = variables;
        this.userAgent = userAgent;
        this.isIE = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["isIE"])(this.userAgent);
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    get style() {
        return this.getStyle(this.sanitizer, this.stringify(this.variables));
    }
    get keys() {
        return this.getKeys(this.variables);
    }
    get basic() {
        return !this.hasDark && !this.hasLight;
    }
    get hasLight() {
        return this.keys.some(this.isLight);
    }
    get hasDark() {
        return this.keys.some(this.isDark);
    }
    get mode() {
        var _a;
        return ((_a = this.demo) === null || _a === void 0 ? void 0 : _a.mode) || null;
    }
    ngAfterViewInit() {
        if (!this.demo) {
            return;
        }
        this.demo.change$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.change$.next();
        });
    }
    isLight(key) {
        return key.includes(`onDark`);
    }
    isDark(key) {
        return key.includes(`onLight`);
    }
    onModelChange(variable, value) {
        this.variables = Object.assign(Object.assign({}, this.variables), { [variable]: typeof value === `string` ? value : Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["px"])(value) });
    }
    getType(key) {
        const variable = this.variables[key];
        if (key.includes(`boxshadow`)) {
            return `string`;
        }
        return variable.startsWith(`#`) || variable.startsWith(`rgb`)
            ? `color`
            : `number`;
    }
    getVariable(key) {
        const variable = this.variables[key];
        return variable.includes(`px`) ? Number.parseInt(variable, 10) : variable;
    }
    getKeys(variables) {
        return Object.keys(variables);
    }
    getStyle(sanitizer, variables) {
        return sanitizer.bypassSecurityTrustStyle(variables);
    }
    stringify(variables) {
        return Object.keys(variables).reduce((result, key) => `${key}: ${variables[key]}; ${result}`, ``);
    }
}
TuiCustomizationComponent.ɵfac = function TuiCustomizationComponent_Factory(t) { return new (t || TuiCustomizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customization_providers__WEBPACK_IMPORTED_MODULE_8__["TUI_DOC_CUSTOMIZATION_VARS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_4__["USER_AGENT"])); };
TuiCustomizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiCustomizationComponent, selectors: [["tui-customization"]], viewQuery: function TuiCustomizationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demo = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"](_customization_providers__WEBPACK_IMPORTED_MODULE_8__["TUI_DOC_CUSTOMIZATION_PROVIDERS"])], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["customization", ""], ["demo", ""], ["class", "tui-space_top-6", 3, "tuiMode", 4, "ngIf", "ngIfElse"], ["withMode", ""], [1, "tui-space_top-6", 3, "tuiMode"], [4, "ngFor", "ngForOf"], [3, "documentationPropertyName", "documentationPropertyType", "documentationPropertyValue", "documentationPropertyValueChange"], [4, "tuiAccordionItemContent"], [4, "ngIf"]], template: function TuiCustomizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiCustomizationComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiCustomizationComponent_ng_template_1_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIE)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_12__["TuiModeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_14__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_15__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_16__["TuiAccordionItemContentDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYXBwL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9hcHAvY3VzdG9taXphdGlvbi9jdXN0b21pemF0aW9uLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9hcHAvY3VzdG9taXphdGlvbi9jdXN0b21pemF0aW9uLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiCustomizationComponent.prototype, "getKeys", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiCustomizationComponent.prototype, "getStyle", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiCustomizationComponent.prototype, "stringify", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCustomizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-customization`,
                templateUrl: `./customization.template.html`,
                styleUrls: [`./customization.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                providers: _customization_providers__WEBPACK_IMPORTED_MODULE_8__["TUI_DOC_CUSTOMIZATION_PROVIDERS"],
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDestroyService"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_customization_providers__WEBPACK_IMPORTED_MODULE_8__["TUI_DOC_CUSTOMIZATION_VARS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_4__["USER_AGENT"]]
            }] }]; }, { demo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`demo`]
        }], getKeys: [], getStyle: [], stringify: [] }); })();


/***/ }),

/***/ "./src/modules/app/customization/customization.module.ts":
/*!***************************************************************!*\
  !*** ./src/modules/app/customization/customization.module.ts ***!
  \***************************************************************/
/*! exports provided: TuiCustomizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCustomizationModule", function() { return TuiCustomizationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _customization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customization.component */ "./src/modules/app/customization/customization.component.ts");








class TuiCustomizationModule {
}
TuiCustomizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiCustomizationModule });
TuiCustomizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiCustomizationModule_Factory(t) { return new (t || TuiCustomizationModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDemoModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiCustomizationModule, { declarations: [_customization_component__WEBPACK_IMPORTED_MODULE_6__["TuiCustomizationComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDemoModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionModule"]], exports: [_customization_component__WEBPACK_IMPORTED_MODULE_6__["TuiCustomizationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCustomizationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiDocDemoModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionModule"],
                ],
                declarations: [_customization_component__WEBPACK_IMPORTED_MODULE_6__["TuiCustomizationComponent"]],
                exports: [_customization_component__WEBPACK_IMPORTED_MODULE_6__["TuiCustomizationComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/app/customization/customization.providers.ts":
/*!******************************************************************!*\
  !*** ./src/modules/app/customization/customization.providers.ts ***!
  \******************************************************************/
/*! exports provided: TUI_DOC_CUSTOMIZATION_VARS, TUI_DOC_CUSTOMIZATION_PROVIDERS, varsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_DOC_CUSTOMIZATION_VARS", function() { return TUI_DOC_CUSTOMIZATION_VARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_DOC_CUSTOMIZATION_PROVIDERS", function() { return TUI_DOC_CUSTOMIZATION_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varsFactory", function() { return varsFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tokens_css_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens/css-vars */ "./src/modules/tokens/css-vars.ts");
/* harmony import */ var _customization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customization.component */ "./src/modules/app/customization/customization.component.ts");






const TUI_DOC_CUSTOMIZATION_VARS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`CSS variables map`);
const TUI_DOC_CUSTOMIZATION_PROVIDERS = [
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDestroyService"],
    {
        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiModeDirective"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => _customization_component__WEBPACK_IMPORTED_MODULE_5__["TuiCustomizationComponent"]),
    },
    {
        provide: TUI_DOC_CUSTOMIZATION_VARS,
        deps: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["WINDOW"], _tokens_css_vars__WEBPACK_IMPORTED_MODULE_4__["CSS_VARS"]],
        useFactory: varsFactory,
    },
];
function varsFactory(windowRef, variables) {
    const styles = windowRef.getComputedStyle(windowRef.document.documentElement);
    return variables.reduce((dictionary, variable) => (Object.assign(Object.assign({}, dictionary), { [variable]: styles.getPropertyValue(variable).trim() })), {});
}


/***/ }),

/***/ "./src/modules/components/primitive-textfield/examples/1/index.ts":
/*!************************************************************************!*\
  !*** ./src/modules/components/primitive-textfield/examples/1/index.ts ***!
  \************************************************************************/
/*! exports provided: TuiPrimitiveTextfieldExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPrimitiveTextfieldExample1", function() { return TuiPrimitiveTextfieldExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/hint/hint.directive */ "../core/directives/hint/hint.directive.ts");













function TuiPrimitiveTextfieldExample1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveTextfieldExample1_ng_template_3_Template_tui_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.togglePasswordVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiHint", _r2)("src", ctx_r1.icon);
} }
function TuiPrimitiveTextfieldExample1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.hint);
} }
const _c0 = ["*"];
class TuiPrimitiveTextfieldExample1 extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["AbstractTuiControl"] {
    constructor(control, changeDetectorRef) {
        super(control, changeDetectorRef);
        this.isPasswordHidden = true;
    }
    get nativeFocusableElement() {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }
    get focused() {
        return !!this.textfield && this.textfield.focused;
    }
    get icon() {
        return this.isPasswordHidden ? `tuiIconHideLarge` : `tuiIconShowLarge`;
    }
    get hint() {
        return this.isPasswordHidden ? `Show password` : `Hide password`;
    }
    get inputType() {
        return this.isPasswordHidden ? `password` : `text`;
    }
    onValueChange(textValue) {
        this.updateValue(textValue);
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    togglePasswordVisibility() {
        this.isPasswordHidden = !this.isPasswordHidden;
    }
    getFallbackValue() {
        return ``;
    }
}
TuiPrimitiveTextfieldExample1.ɵfac = function TuiPrimitiveTextfieldExample1_Factory(t) { return new (t || TuiPrimitiveTextfieldExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TuiPrimitiveTextfieldExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPrimitiveTextfieldExample1, selectors: [["tui-primitive-textfield-example-1"]], viewQuery: function TuiPrimitiveTextfieldExample1_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textfield = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 7, vars: 7, consts: [[3, "invalid", "focusable", "disabled", "readOnly", "iconContent", "value", "valueChange", "focusedChange"], ["tuiTextfield", "", 3, "type"], ["iconContent", ""], ["hintContent", ""], ["tuiHintId", "not_required", 1, "icon", 3, "tuiHint", "src", "click"]], template: function TuiPrimitiveTextfieldExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-primitive-textfield", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TuiPrimitiveTextfieldExample1_Template_tui_primitive_textfield_valueChange_0_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiPrimitiveTextfieldExample1_Template_tui_primitive_textfield_focusedChange_0_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiPrimitiveTextfieldExample1_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiPrimitiveTextfieldExample1_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.computedInvalid)("focusable", ctx.focusable)("disabled", ctx.disabled)("readOnly", ctx.readOnly)("iconContent", _r0)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.inputType);
    } }, directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_6__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_7__["TuiPrimitiveTextfieldDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__["TuiSvgComponent"], _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_10__["TuiHintDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmltaXRpdmUtdGV4dGZpZWxkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmltaXRpdmUtdGV4dGZpZWxkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ByaW1pdGl2ZS10ZXh0ZmllbGQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPrimitiveTextfieldExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-primitive-textfield-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }]; }, { textfield: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/primitive-textfield/examples/2/index.ts":
/*!************************************************************************!*\
  !*** ./src/modules/components/primitive-textfield/examples/2/index.ts ***!
  \************************************************************************/
/*! exports provided: TuiPrimitiveTextfieldExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPrimitiveTextfieldExample2", function() { return TuiPrimitiveTextfieldExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_270336154752876683$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Modified cleaner icon");
    I18N_0 = MSG_EXTERNAL_270336154752876683$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟f37c19d3d4ffc35f74d9ae6f62d686cb69b3890c␟270336154752876683:Modified cleaner icon`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7576419264776917124$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_4 = goog.getMsg("Override modified cleaner icon");
    I18N_3 = MSG_EXTERNAL_7576419264776917124$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟cf50d9a6ca344e37ff60255e1c9bd1332e292b01␟7576419264776917124:Override modified cleaner icon`;
}
const _c5 = ["label", I18N_3];
function TuiPrimitiveTextfieldExample2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 7);
} }
class TuiPrimitiveTextfieldExample2 extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["AbstractTuiControl"] {
    constructor(control, changeDetectorRef) {
        super(control, changeDetectorRef);
    }
    get nativeFocusableElement() {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }
    get focused() {
        return !!this.textfield && this.textfield.focused;
    }
    onValueChange(textValue) {
        this.updateValue(textValue);
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    getFallbackValue() {
        return ``;
    }
}
TuiPrimitiveTextfieldExample2.ɵfac = function TuiPrimitiveTextfieldExample2_Factory(t) { return new (t || TuiPrimitiveTextfieldExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TuiPrimitiveTextfieldExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPrimitiveTextfieldExample2, selectors: [["tui-primitive-textfield-example-2"]], viewQuery: function TuiPrimitiveTextfieldExample2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textfield = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiPrimitiveTextfieldOptionsProvider"])({
                iconCleaner: `tuiIconChevronUp`,
            }),
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [["tuiTextfieldSize", "m", 1, "b-form", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["tuiLabel", "", 6, "label"], [3, "value", "valueChange", "focusedChange"], ["tuiTextfield", "", "type", "email"], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], [3, "value", "iconCleaner", "valueChange", "focusedChange"], ["iconCleaner", ""], ["src", "tuiIconDraft"]], template: function TuiPrimitiveTextfieldExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-primitive-textfield", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_valueChange_3_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_focusedChange_3_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-primitive-textfield", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_valueChange_8_listener($event) { return ctx.onValueChange($event); })("focusedChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_focusedChange_8_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiPrimitiveTextfieldExample2_ng_template_11_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("iconCleaner", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldCleanerDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_9__["TuiLabelComponent"], _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_10__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_11__["TuiPrimitiveTextfieldDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__["TuiSvgComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPrimitiveTextfieldExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-primitive-textfield-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiPrimitiveTextfieldOptionsProvider"])({
                        iconCleaner: `tuiIconChevronUp`,
                    }),
                ],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }]; }, { textfield: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/primitive-textfield/primitive-textfield.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/components/primitive-textfield/primitive-textfield.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExampleTuiPrimitiveTextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPrimitiveTextfieldComponent", function() { return ExampleTuiPrimitiveTextfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _abstract_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/interactive */ "./src/modules/components/abstract/interactive.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/primitive-textfield/examples/1/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/primitive-textfield/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/components/primitive-textfield/primitive-textfield.component */ "../core/components/primitive-textfield/primitive-textfield.component.ts");
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/components/primitive-textfield/primitive-textfield.directive */ "../core/components/primitive-textfield/primitive-textfield.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-max-length.directive */ "../core/directives/textfield-controller/textfield-max-length.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_type_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-type.directive */ "../core/directives/textfield-controller/textfield-type.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../abstract/hint-controller-documentation/hint-controller-documentation.component */ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts");
/* harmony import */ var _abstract_textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../abstract/textfield-controller-documentation/textfield-controller-documentation.component */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");



































const _c0 = ["interactiveContent"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5194718672583852151$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__2 = goog.getMsg(" PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. {$startTagStrong}Does not work with Angular forms{$closeTagStrong}", { "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_1 = MSG_EXTERNAL_5194718672583852151$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟0a19998f90076b7d85207fea44209d8d3b9fcb5d␟5194718672583852151: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Does not work with Angular forms${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__4 = goog.getMsg("sizes");
    I18N_3 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c5 = ["heading", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__7 = goog.getMsg("Options");
    I18N_6 = MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
}
const _c8 = ["heading", I18N_6];
function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Simplified version of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "InputPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-primitive-textfield-example-1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template_tui_primitive_textfield_example_1_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Type a password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tui-primitive-textfield-example-2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template_tui_primitive_textfield_example_2_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.example2Value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.example2Value);
} }
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20, " ");
} }
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template_tui_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___10 = goog.getMsg(" Disabled state ");
    I18N_9 = MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___10;
}
else {
    I18N_9 = $localize `:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_9);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8717823635323002701$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___12 = goog.getMsg(" Native input allows inputting ");
    I18N_11 = MSG_EXTERNAL_8717823635323002701$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟77c762ac18c6306d12dce74874a5fd96978eee9c␟8717823635323002701: Native input allows inputting `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4151292360106248726$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___14 = goog.getMsg(" Gray background text as a hint (e.g. HH:MM:SS for time) ");
    I18N_13 = MSG_EXTERNAL_4151292360106248726$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟f29074f0478b44322b1dc718b7bb03de7fe2b4d8␟4151292360106248726: Gray background text as a hint (e.g. HH:MM:SS for time) `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7918098038633269309$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___16 = goog.getMsg(" Icon content. If content is a string, it is used as stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_15 = MSG_EXTERNAL_7918098038633269309$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟86a120364edaa105c400be3e6a0b84d9e6789a6a␟7918098038633269309: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___18 = goog.getMsg(" Icon align ");
    I18N_17 = MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4259878861045276785$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___20 = goog.getMsg(" Uneditable text before value. For example, currency symbol in {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} . ", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_19 = MSG_EXTERNAL_4259878861045276785$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟33c14f705b72544c3881517af4881b87d397d8f6␟4259878861045276785: Uneditable text before value. For example, currency symbol in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: . `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1195719053204982784$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___22 = goog.getMsg(" Uneditable text after value. For example, currency symbol in {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} . ", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_21 = MSG_EXTERNAL_1195719053204982784$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟d24fc719133afa770a5d50c273a967e6b447bda8␟1195719053204982784: Uneditable text after value. For example, currency symbol in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: . `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2592823355336045770$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___24 = goog.getMsg(" Component is read only ");
    I18N_23 = MSG_EXTERNAL_2592823355336045770$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6963908824346094281$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___26 = goog.getMsg(" Invalid state ");
    I18N_25 = MSG_EXTERNAL_6963908824346094281$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_206010917694362071$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___28 = goog.getMsg(" Value ");
    I18N_27 = MSG_EXTERNAL_206010917694362071$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-primitive-textfield", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_tui_primitive_textfield_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Component label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_3_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.editable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.filler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_11_Template, 3, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.selectedIcon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.iconAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_13_Template, 3, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.prefix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.postfix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.readOnly = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.invalid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hint-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textfield-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r1.focusable)("tuiTextfieldAutocomplete", ctx_r1.autocomplete)("tuiTextfieldCleaner", ctx_r1.cleaner)("tuiTextfieldCustomContent", ctx_r1.customContent)("tuiTextfieldInputMode", ctx_r1.inputMode)("tuiTextfieldMaxLength", ctx_r1.maxLength)("tuiTextfieldExampleText", ctx_r1.exampleText)("tuiTextfieldLabelOutside", ctx_r1.labelOutside)("tuiTextfieldSize", ctx_r1.size)("tuiTextfieldType", ctx_r1.type)("pseudoPressed", ctx_r1.pseudoPressed)("pseudoFocused", ctx_r1.pseudoFocused)("pseudoHovered", ctx_r1.pseudoHovered)("disabled", ctx_r1.disabled)("editable", ctx_r1.editable)("filler", ctx_r1.filler)("iconAlign", ctx_r1.iconAlign)("iconContent", ctx_r1.iconContent)("readOnly", ctx_r1.readOnly)("prefix", ctx_r1.prefix)("postfix", ctx_r1.postfix)("invalid", ctx_r1.invalid)("tuiHintContent", ctx_r1.hintContent)("tuiHintDirection", ctx_r1.hintDirection)("tuiHintMode", ctx_r1.hintMode)("value", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.filler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.selectedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconAlignVariants)("documentationPropertyValue", ctx_r1.iconAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.postfix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.value);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6346211509068135211$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__30 = goog.getMsg(" Import {$startTagCode}TuiPrimitiveTextfieldModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_29 = MSG_EXTERNAL_6346211509068135211$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__30;
}
else {
    I18N_29 = $localize `:␟d9976023c60bcfadd11e6b545cc66aeee8d631af␟6346211509068135211: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfieldModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__32 = goog.getMsg("Add to the template:");
    I18N_31 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__32;
}
else {
    I18N_31 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiPrimitiveTextfieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class ExampleTuiPrimitiveTextfieldComponent extends _abstract_interactive__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiInteractive"] {
    constructor() {
        super(...arguments);
        this.interactiveIcon = ``;
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/2/index.html")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/import/insert-template.md"));
        this.themes = [`Taiga UI`, `Bootstrap`, `Material`];
        this.theme = this.themes[0];
        this.iconVariants = [``, `tuiIconSearch`, `Interactive content`];
        this.selectedIcon = this.iconVariants[0];
        this.iconAlignVariants = [`left`, `right`];
        this.iconAlign = this.iconAlignVariants[1];
        this.typeVariants = [
            `text`,
            `email`,
            `password`,
            `tel`,
            `url`,
        ];
        this.type = `text`;
        this.cleaner = false;
        this.editable = true;
        this.filler = ``;
        this.prefix = ``;
        this.postfix = ``;
        this.maxLengthVariants = [10];
        this.maxLength = null;
        this.autocompleteVariants = [
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
        this.autocomplete = ``;
        this.inputModeVariants = [`text`, `numeric`];
        this.inputMode = this.inputModeVariants[0];
        this.customContentVariants = [CUSTOM_SVG_NAME, `<span>LongTextContent</span>`];
        this.customContentSelected = null;
        this.password = ``;
        this.example2Value = `mail@example.com`;
        this.value = ``;
        this.exampleText = ``;
        this.disabled = false;
        this.readOnly = false;
        this.labelOutside = false;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[2];
        this.hintContentVariants = [`Ivan Ivanov`];
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
        this.invalid = false;
        this.hintContent = null;
        this.hintDirection = this.hintDirectionVariants[2];
        this.hintMode = null;
    }
    get customContent() {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }
    get iconContent() {
        if (this.selectedIcon === ``) {
            return ``;
        }
        return this.interactiveIcon && this.selectedIcon !== `tuiIconSearch`
            ? this.interactiveIcon
            : `tuiIconSearch`;
    }
    get isBootstrap() {
        return this.theme === this.themes[1];
    }
    get isMaterial() {
        return this.theme === this.themes[2];
    }
    get placeholder() {
        return this.isBootstrap ? `Type a value` : `Theming sample`;
    }
    get customizationSize() {
        return this.isBootstrap ? `s` : `l`;
    }
    onClick() {
        console.info(`Interactive icon clicked`);
    }
}
ExampleTuiPrimitiveTextfieldComponent.ɵfac = function ExampleTuiPrimitiveTextfieldComponent_Factory(t) { return ɵExampleTuiPrimitiveTextfieldComponent_BaseFactory(t || ExampleTuiPrimitiveTextfieldComponent); };
ExampleTuiPrimitiveTextfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPrimitiveTextfieldComponent, selectors: [["example-tui-primitive-textfield"]], viewQuery: function ExampleTuiPrimitiveTextfieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.interactiveIcon = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiPrimitiveTextfieldComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "PrimitiveTextfield", "package", "CORE", "type", "components"], ["pageTab", ""], ["id", "example-size", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["tuiLink", "", "routerLink", "/components/input-password"], [1, "b-form", 3, "ngModel", "ngModelChange"], ["id", "options", 3, "content", 6, "heading"], [3, "ngModel", "ngModelChange"], [3, "focusable", "tuiTextfieldAutocomplete", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldInputMode", "tuiTextfieldMaxLength", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiTextfieldType", "pseudoPressed", "pseudoFocused", "pseudoHovered", "disabled", "editable", "filler", "iconAlign", "iconContent", "readOnly", "prefix", "postfix", "invalid", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "value", "valueChange"], ["template", ""], ["interactiveContent", ""], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "filler", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "invalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input-output", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["size", "xs", 1, "avatar", 3, "text"], ["src", "tuiIconCalendarLarge", 1, "icon-button", 3, "click"], ["tuiLink", "", "routerLink", "/services/svg-service"], ["tuiLink", "", "routerLink", "/components/input-number"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPrimitiveTextfieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template, 23, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template, 21, 38, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPrimitiveTextfieldComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_8__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiPrimitiveTextfieldExample1"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiPrimitiveTextfieldExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDemoComponent"], _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_14__["TuiPrimitiveTextfieldComponent"], _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_15__["TuiPrimitiveTextfieldDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_16__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_17__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_18__["TuiTextfieldCustomContentDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_19__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_20__["TuiTextfieldMaxLengthDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_21__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_22__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_23__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_type_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldTypeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_25__["TuiHintControllerDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_26__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_27__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_28__["HintControllerDocumentationComponent"], _abstract_textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_29__["TextfieldControllerDocumentationComponent"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_30__["InheritedDocumentationComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_31__["TuiAvatarComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_32__["TuiSvgComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_33__["TuiDocCodeComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.icon-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.avatar[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.label[_ngcontent-%COMP%] {\n  width: 22.5rem;\n}\n.input[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmltaXRpdmUtdGV4dGZpZWxkL3ByaW1pdGl2ZS10ZXh0ZmllbGQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmltaXRpdmUtdGV4dGZpZWxkL3ByaW1pdGl2ZS10ZXh0ZmllbGQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksY0FBQTtBREtKO0FDRkE7RUFDSSxrQkFBQTtBRElKO0FDREE7RUFDSSxvQkFBQTtBREdKO0FDQUE7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLG1CQUFBO0FEQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ByaW1pdGl2ZS10ZXh0ZmllbGQvcHJpbWl0aXZlLXRleHRmaWVsZC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5sYWJlbCB7XG4gIHdpZHRoOiAyMi41cmVtO1xufVxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmF2YXRhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5sYWJlbCB7XG4gICAgd2lkdGg6IDIyLjVyZW07XG59XG5cbi5pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
const ɵExampleTuiPrimitiveTextfieldComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiPrimitiveTextfieldComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPrimitiveTextfieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-primitive-textfield`,
                templateUrl: `./primitive-textfield.template.html`,
                styleUrls: [`./primitive-textfield.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_2__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiPrimitiveTextfieldComponent),
                    },
                ],
            }]
    }], null, { interactiveIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`interactiveContent`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/primitive-textfield/primitive-textfield.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/components/primitive-textfield/primitive-textfield.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ExampleTuiPrimitiveTextfieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPrimitiveTextfieldModule", function() { return ExampleTuiPrimitiveTextfieldModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _app_customization_customization_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/customization/customization.module */ "./src/modules/app/customization/customization.module.ts");
/* harmony import */ var _themes_themes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../themes/themes.module */ "./src/modules/themes/themes.module.ts");
/* harmony import */ var _abstract_hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../abstract/hint-controller-documentation/hint-controller-documentation.module */ "./src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.module.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../abstract/textfield-controller-documentation/textfield-controller-documentation.module */ "./src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/primitive-textfield/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/primitive-textfield/examples/2/index.ts");
/* harmony import */ var _primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./primitive-textfield.component */ "./src/modules/components/primitive-textfield/primitive-textfield.component.ts");


















class ExampleTuiPrimitiveTextfieldModule {
}
ExampleTuiPrimitiveTextfieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPrimitiveTextfieldModule });
ExampleTuiPrimitiveTextfieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPrimitiveTextfieldModule_Factory(t) { return new (t || ExampleTuiPrimitiveTextfieldModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_11__["InheritedDocumentationModule"],
            _abstract_hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_10__["HintControllerDocumentationModule"],
            _abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_12__["TextfieldControllerDocumentationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _app_customization_customization_module__WEBPACK_IMPORTED_MODULE_8__["TuiCustomizationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
            _themes_themes_module__WEBPACK_IMPORTED_MODULE_9__["ThemesModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPrimitiveTextfieldModule, { declarations: [_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_13__["TuiPrimitiveTextfieldExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_14__["TuiPrimitiveTextfieldExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_11__["InheritedDocumentationModule"],
        _abstract_hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_10__["HintControllerDocumentationModule"],
        _abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_12__["TextfieldControllerDocumentationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _app_customization_customization_module__WEBPACK_IMPORTED_MODULE_8__["TuiCustomizationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
        _themes_themes_module__WEBPACK_IMPORTED_MODULE_9__["ThemesModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPrimitiveTextfieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_11__["InheritedDocumentationModule"],
                    _abstract_hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_10__["HintControllerDocumentationModule"],
                    _abstract_textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_12__["TextfieldControllerDocumentationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _app_customization_customization_module__WEBPACK_IMPORTED_MODULE_8__["TuiCustomizationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
                    _themes_themes_module__WEBPACK_IMPORTED_MODULE_9__["ThemesModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"])),
                ],
                declarations: [
                    _primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_13__["TuiPrimitiveTextfieldExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_14__["TuiPrimitiveTextfieldExample2"],
                ],
                exports: [_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiPrimitiveTextfieldComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/themes/bootstrap/bootstrap.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/themes/bootstrap/bootstrap.component.ts ***!
  \*************************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");




// @dynamic
class BootstrapComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["AbstractTuiThemeSwitcher"] {
}
BootstrapComponent.ɵfac = function BootstrapComponent_Factory(t) { return ɵBootstrapComponent_BaseFactory(t || BootstrapComponent); };
BootstrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootstrapComponent, selectors: [["bootstrap"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function BootstrapComponent_Template(rf, ctx) { }, styles: ["/* stylelint-disable selector-max-specificity */\n/* stylelint-enable selector-max-specificity */\n/*\nEvery max-width of breakpoint is equal:\nnext min-width - 60% from 1px (1/16 * 0.6 = 0.0375)\n*/\n.theme-wrapper {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  --tui-primary-text: #fff;\n  --tui-primary: #007bff;\n  --tui-primary-hover: #0069d9;\n  --tui-primary-active: #0062cc;\n  --tui-radius-m: 0.25rem;\n  --tui-text-03: #6c757d;\n  --tui-text-02: #6c757d;\n}\n.theme-wrapper .demo-placeholder {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'] {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  background: transparent;\n  box-shadow: none;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']:after {\n  transition-property: all;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  color: #ced4da;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']._focused:after {\n  color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onDark']:after {\n  color: #959aa0;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onDark'][data-state='hovered'] {\n  background: transparent;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onDark']._focused:after {\n  color: #db6574;\n  box-shadow: none;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onLight']:after {\n  color: #959aa0;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onLight'][data-state='hovered'] {\n  background: transparent;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-mode='onLight']._focused:after {\n  color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.theme-wrapper tui-button {\n  transition-property: box-shadow;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n}\n.theme-wrapper tui-button._focused {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.theme-wrapper tui-tabs {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  box-shadow: none;\n  color: #007bff;\n}\n.theme-wrapper tui-tabs [tuiTab] {\n  margin: 0;\n  padding: 0 0.75rem;\n  height: 2.5rem;\n  border-bottom: 1px solid #dee2e6;\n}\n.theme-wrapper tui-tabs [tuiTab]:hover {\n  color: #0069d9;\n}\n.theme-wrapper tui-tabs [tuiTab]._active {\n  border: 1px solid #dee2e6;\n  border-bottom: 0;\n  border-radius: 0.25rem 0.25rem 0 0;\n  color: #495057;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGhlbWVzL2Jvb3RzdHJhcC9ib290c3RyYXAuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGhlbWVzL2Jvb3RzdHJhcC9ib290c3RyYXAuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksdUdBQUE7RUFFQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBRElKO0FDYkE7RUFZUSx1R0FBQTtBRElSO0FDaEJBO0VBZ0JRLHVHQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREdSO0FDRFE7RUMrTUosd0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEL01RLGNBQUE7QURLWjtBQ0ZRO0VBQ0ksY0FBQTtFQUNBLGdEQUFBO0FESVo7QUNDUTtFQUNJLGNBQUE7QURDWjtBQ0VRO0VBQ0ksdUJBQUE7QURBWjtBQ0dRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FERFo7QUNNUTtFQUNJLGNBQUE7QURKWjtBQ09RO0VBQ0ksdUJBQUE7QURMWjtBQ1FRO0VBQ0ksY0FBQTtFQUNBLGdEQUFBO0FETlo7QUNuREE7RUNtT0ksK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEcktJLGVBQUE7RUFDQSx1R0FBQTtBRFBSO0FDU1E7RUFDSSxnREFBQTtBRFBaO0FDN0RBO0VBeUVRLHVHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEVFI7QUNsRUE7RUE4RVksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FEVFo7QUNXWTtFQUNJLGNBQUE7QURUaEI7QUNZWTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QURWaEIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90aGVtZXMvYm9vdHN0cmFwL2Jvb3RzdHJhcC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnRoZW1lLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XG4gIC0tdHVpLXByaW1hcnk6ICMwMDdiZmY7XG4gIC0tdHVpLXByaW1hcnktaG92ZXI6ICMwMDY5ZDk7XG4gIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMDA2MmNjO1xuICAtLXR1aS1yYWRpdXMtbTogMC4yNXJlbTtcbiAgLS10dWktdGV4dC0wMzogIzZjNzU3ZDtcbiAgLS10dWktdGV4dC0wMjogIzZjNzU3ZDtcbn1cbi50aGVtZS13cmFwcGVyIC5kZW1vLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ10ge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ106YWZ0ZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjY2VkNGRhO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXS5fZm9jdXNlZDphZnRlciB7XG4gIGNvbG9yOiAjODBiZGZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG4udGhlbWUtd3JhcHBlciB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddW2RhdGEtbW9kZT0nb25EYXJrJ106YWZ0ZXIge1xuICBjb2xvcjogIzk1OWFhMDtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ11bZGF0YS1tb2RlPSdvbkRhcmsnXVtkYXRhLXN0YXRlPSdob3ZlcmVkJ10ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ11bZGF0YS1tb2RlPSdvbkRhcmsnXS5fZm9jdXNlZDphZnRlciB7XG4gIGNvbG9yOiAjZGI2NTc0O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXVtkYXRhLW1vZGU9J29uTGlnaHQnXTphZnRlciB7XG4gIGNvbG9yOiAjOTU5YWEwO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXVtkYXRhLW1vZGU9J29uTGlnaHQnXVtkYXRhLXN0YXRlPSdob3ZlcmVkJ10ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ11bZGF0YS1tb2RlPSdvbkxpZ2h0J10uX2ZvY3VzZWQ6YWZ0ZXIge1xuICBjb2xvcjogIzgwYmRmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS1idXR0b24uX2ZvY3VzZWQge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG4udGhlbWUtd3JhcHBlciB0dWktdGFicyB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXRhYnMgW3R1aVRhYl0ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXRhYnMgW3R1aVRhYl06aG92ZXIge1xuICBjb2xvcjogIzAwNjlkOTtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS10YWJzIFt0dWlUYWJdLl9hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLnRoZW1lLXdyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiAgICAtLXR1aS1wcmltYXJ5LXRleHQ6ICNmZmY7XG4gICAgLS10dWktcHJpbWFyeTogIzAwN2JmZjtcbiAgICAtLXR1aS1wcmltYXJ5LWhvdmVyOiAjMDA2OWQ5O1xuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjMDA2MmNjO1xuICAgIC0tdHVpLXJhZGl1cy1tOiAwLjI1cmVtO1xuICAgIC0tdHVpLXRleHQtMDM6ICM2Yzc1N2Q7XG4gICAgLS10dWktdGV4dC0wMjogIzZjNzU3ZDtcblxuICAgIC5kZW1vLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgICAgICAgICAgY29sb3I6ICNjZWQ0ZGE7XG4gICAgICAgIH1cblxuICAgICAgICAmLl9mb2N1c2VkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODBiZGZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXVtkYXRhLW1vZGU9J29uRGFyayddIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzk1OWFhMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGF0YS1zdGF0ZT0naG92ZXJlZCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5fZm9jdXNlZDphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2RiNjU3NDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddW2RhdGEtbW9kZT0nb25MaWdodCddIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzk1OWFhMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGF0YS1zdGF0ZT0naG92ZXJlZCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5fZm9jdXNlZDphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzgwYmRmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IENvdmVyIHRoaXMgYnkgQ1NTIHZhcnNcbiAgICB0dWktYnV0dG9uIHtcbiAgICAgICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICAgICAgICAmLl9mb2N1c2VkIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1aS10YWJzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG5cbiAgICAgICAgW3R1aVRhYl0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDY5ZDk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuX2FjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });
const ɵBootstrapComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BootstrapComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `bootstrap`,
                styleUrls: [`./bootstrap.style.less`],
                template: ``,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/themes/material/material.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/themes/material/material.component.ts ***!
  \***********************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");




// @dynamic
class MaterialComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["AbstractTuiThemeSwitcher"] {
}
MaterialComponent.ɵfac = function MaterialComponent_Factory(t) { return ɵMaterialComponent_BaseFactory(t || MaterialComponent); };
MaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialComponent, selectors: [["material"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MaterialComponent_Template(rf, ctx) { }, styles: ["/* stylelint-disable selector-max-specificity */\n/* stylelint-enable selector-max-specificity */\n/*\nEvery max-width of breakpoint is equal:\nnext min-width - 60% from 1px (1/16 * 0.6 = 0.0375)\n*/\n.theme-wrapper {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  --tui-primary-text: #fff;\n  --tui-primary: #6200ee;\n  --tui-primary-hover: var(--tui-primary);\n  --tui-primary-active: #a56bf5;\n  --tui-radius-m: 0.25rem;\n  --tui-text-03: #6c757d;\n  --tui-text-02: rgba(0, 0, 0, 0.6);\n}\n.theme-wrapper .demo-placeholder {\n  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'] {\n  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;\n  background: #f5f5f5;\n  border-width: 0;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.25rem 0.25rem 0 0;\n  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.42);\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']:after {\n  transition-property: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  top: 100%;\n  height: 0.125rem;\n  margin-top: -0.125rem;\n  border-radius: 0;\n  border-width: 0;\n  background-color: var(--tui-primary);\n  transform-origin: bottom;\n  transform: scale(0);\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield'][data-state='hovered'] {\n  background: #ececec;\n  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.87);\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']._focused {\n  background: #dcdcdc;\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']._focused:after {\n  transform: none;\n  color: var(--tui-primary);\n}\n.theme-wrapper tui-wrapper[data-appearance='textfield']._focused label {\n  color: var(--tui-primary) !important;\n}\n.theme-wrapper tui-button {\n  transition-property: box-shadow;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  text-transform: uppercase;\n  font-weight: bold;\n  box-shadow: 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.125rem 0.125rem rgba(0, 0, 0, 0.14), 0 0.0625rem 0.3125rem rgba(0, 0, 0, 0.12);\n}\n.theme-wrapper tui-button._pressed {\n  box-shadow: 0 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2), 0 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);\n}\n.theme-wrapper tui-tabs {\n  color: rgba(0, 0, 0, 0.6);\n  box-shadow: none;\n}\n.theme-wrapper [tuiTab] {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  font-weight: 500 !important;\n  text-transform: uppercase;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  margin-right: 0;\n}\n.theme-wrapper [tuiTab]:hover {\n  background: rgba(98, 0, 238, 0.04);\n  color: rgba(0, 0, 0, 0.6);\n  box-shadow: none;\n}\n.theme-wrapper [tuiTab]:active {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  background: rgba(98, 0, 238, 0.12);\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme-wrapper [tuiTab]._active {\n  color: var(--tui-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvdGhlbWVzL21hdGVyaWFsL21hdGVyaWFsLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL3RoZW1lcy9tYXRlcmlhbC9tYXRlcmlhbC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSx1R0FBQTtFQUVBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FESUo7QUNiQTtFQVlRLDBEQUFBO0FESVI7QUNoQkE7RUFnQlEsMERBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7QURHUjtBQ0RRO0VDNE1KLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFRDVNUSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBREtaO0FDRlE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0FESVo7QUNEUTtFQUNJLG1CQUFBO0FER1o7QUNEWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBREdoQjtBQ1JRO0VBU1Esb0NBQUE7QURFaEI7QUNuREE7RUNtT0ksK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VENUtJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrSkFBQTtBREFSO0FDR1E7RUFDSSxtS0FBQTtBRERaO0FDOURBO0VBcUVRLHlCQUFBO0VBQ0EsZ0JBQUE7QURKUjtBQ2xFQTtFQTBFUSx1R0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRExSO0FDT1E7RUFDSSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURMWjtBQ1FRO0VDNElKLCtCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRDVJUSxrQ0FBQTtFQUNBLHlCQUFBO0FESlo7QUNPUTtFQUNJLHlCQUFBO0FETFoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy90aGVtZXMvbWF0ZXJpYWwvbWF0ZXJpYWwuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi50aGVtZS13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLS10dWktcHJpbWFyeS10ZXh0OiAjZmZmO1xuICAtLXR1aS1wcmltYXJ5OiAjNjIwMGVlO1xuICAtLXR1aS1wcmltYXJ5LWhvdmVyOiB2YXIoLS10dWktcHJpbWFyeSk7XG4gIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjYTU2YmY1O1xuICAtLXR1aS1yYWRpdXMtbTogMC4yNXJlbTtcbiAgLS10dWktdGV4dC0wMzogIzZjNzU3ZDtcbiAgLS10dWktdGV4dC0wMjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLnRoZW1lLXdyYXBwZXIgLmRlbW8tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXdyYXBwZXJbZGF0YS1hcHBlYXJhbmNlPSd0ZXh0ZmllbGQnXTphZnRlciB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0b3A6IDEwMCU7XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ11bZGF0YS1zdGF0ZT0naG92ZXJlZCddIHtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4udGhlbWUtd3JhcHBlciB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddLl9mb2N1c2VkIHtcbiAgYmFja2dyb3VuZDogI2RjZGNkYztcbn1cbi50aGVtZS13cmFwcGVyIHR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0ndGV4dGZpZWxkJ10uX2ZvY3VzZWQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG4udGhlbWUtd3JhcHBlciB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddLl9mb2N1c2VkIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXR1aS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjA2MjVyZW0gLTAuMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjEyNXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDAuMDYyNXJlbSAwLjMxMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi50aGVtZS13cmFwcGVyIHR1aS1idXR0b24uX3ByZXNzZWQge1xuICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSAwLjMxMjVyZW0gLTAuMTg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMC41cmVtIDAuNjI1cmVtIDAuMDYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDAuMTg3NXJlbSAwLjg3NXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnRoZW1lLXdyYXBwZXIgdHVpLXRhYnMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRoZW1lLXdyYXBwZXIgW3R1aVRhYl0ge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnRoZW1lLXdyYXBwZXIgW3R1aVRhYl06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk4LCAwLCAyMzgsIDAuMDQpO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRoZW1lLXdyYXBwZXIgW3R1aVRhYl06YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogcmdiYSg5OCwgMCwgMjM4LCAwLjEyKTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi50aGVtZS13cmFwcGVyIFt0dWlUYWJdLl9hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4udGhlbWUtd3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICAgIC0tdHVpLXByaW1hcnktdGV4dDogI2ZmZjtcbiAgICAtLXR1aS1wcmltYXJ5OiAjNjIwMGVlO1xuICAgIC0tdHVpLXByaW1hcnktaG92ZXI6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICAtLXR1aS1wcmltYXJ5LWFjdGl2ZTogI2E1NmJmNTtcbiAgICAtLXR1aS1yYWRpdXMtbTogMC4yNXJlbTtcbiAgICAtLXR1aS10ZXh0LTAzOiAjNmM3NTdkO1xuICAgIC0tdHVpLXRleHQtMDI6IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICAgIC5kZW1vLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICB0dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J3RleHRmaWVsZCddIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMCwgMCwgMCwgMC40Mik7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAudHJhbnNpdGlvbih0cmFuc2Zvcm0sIDAuMnMpO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJltkYXRhLXN0YXRlPSdob3ZlcmVkJ10ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5fZm9jdXNlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IENvdmVyIHRoaXMgYnkgQ1NTIHZhcnNcbiAgICB0dWktYnV0dG9uIHtcbiAgICAgICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjA2MjVyZW0gLTAuMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjEyNXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgMCAwLjA2MjVyZW0gMC4zMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICAgICAgJi5fcHJlc3NlZCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSAwLjMxMjVyZW0gLTAuMTg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCAwLjVyZW0gMC42MjVyZW0gMC4wNjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMC4xODc1cmVtIDAuODc1cmVtIDAuMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dWktdGFicyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgW3R1aVRhYl0ge1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg5OCwgMCwgMjM4LCAwLjA0KTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk4LCAwLCAyMzgsIDAuMTIpO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuX2FjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
const ɵMaterialComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MaterialComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `material`,
                styleUrls: [`./material.style.less`],
                template: ``,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/themes/themes.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/themes/themes.module.ts ***!
  \*********************************************/
/*! exports provided: ThemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return ThemesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ "./src/modules/themes/bootstrap/bootstrap.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.component */ "./src/modules/themes/material/material.component.ts");




class ThemesModule {
}
ThemesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemesModule });
ThemesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemesModule_Factory(t) { return new (t || ThemesModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemesModule, { declarations: [_material_material_component__WEBPACK_IMPORTED_MODULE_2__["MaterialComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapComponent"]], exports: [_material_material_component__WEBPACK_IMPORTED_MODULE_2__["MaterialComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_material_material_component__WEBPACK_IMPORTED_MODULE_2__["MaterialComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapComponent"]],
                exports: [_material_material_component__WEBPACK_IMPORTED_MODULE_2__["MaterialComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/tokens/css-vars.ts":
/*!****************************************!*\
  !*** ./src/modules/tokens/css-vars.ts ***!
  \****************************************/
/*! exports provided: CSS_VARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS_VARS", function() { return CSS_VARS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const CSS_VARS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`CSS vars list for customization`, {
    factory: () => [],
});


/***/ })

}]);
//# sourceMappingURL=components-primitive-textfield-primitive-textfield-module.js.map