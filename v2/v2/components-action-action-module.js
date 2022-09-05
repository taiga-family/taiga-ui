(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-action-action-module"],{

/***/ "./src/modules/components/action/action.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/action/action.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiActionComponent", function() { return ExampleTuiActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/action/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/action/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../kit/components/action/action.component */ "../kit/components/action/action.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");













var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7565716024468232322$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__5 = goog.getMsg("Links");
    I18N_4 = MSG_EXTERNAL_7565716024468232322$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`;
}
const _c6 = ["heading", I18N_4];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7182166676993136792$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__7 = goog.getMsg(" Component that shows some action. Better to use it in a group. {$startTagTuiDocExample}{$startTagTuiActionExample_1}{$closeTagTuiActionExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiActionExample_2}{$closeTagTuiActionExample_2}{$closeTagTuiDocExample}", { "startTagTuiDocExample": "\uFFFD#1\uFFFD", "startTagTuiActionExample_1": "\uFFFD#3\uFFFD", "closeTagTuiActionExample_1": "\uFFFD/#3\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#4\uFFFD", "startTagTuiActionExample_2": "\uFFFD#6\uFFFD", "closeTagTuiActionExample_2": "\uFFFD/#6\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7182166676993136792$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__7;
}
else {
    I18N_0 = $localize `:␟28cf6d75c9991c2b1545e5487793a5fa6cf2196a␟7182166676993136792: Component that shows some action. Better to use it in a group. ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_1:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_2:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_2:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiActionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-action-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-action-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
function ExampleTuiActionComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Icon ");
} }
function ExampleTuiActionComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Color of the icon ");
} }
function ExampleTuiActionComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Background of the icon ");
} }
function ExampleTuiActionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-action", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " It's not pining, it's passed on! This parrot is no more! It has ceased to be! It's expired and gone to meet its maker! This is a late parrot! It's a stiff! Bereft of life, it rests in peace! If you hadn't nailed it to the perch, it would be pushing up the daisies! It's rung down the curtain and joined the choir invisible. This is an ex-parrot! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiActionComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.icon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-documentation", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiActionComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiActionComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.background = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--tui-action-color", ctx_r1.color)("--tui-action-background", ctx_r1.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.background);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4753441770732122760$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiActionModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_8 = MSG_EXTERNAL_4753441770732122760$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟800f354acb66a0b893f6e4fefe8e0c3b5e0c0654␟4753441770732122760: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiActionModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
    I18N_10 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiActionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiActionComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/2/index.html")),
        };
        this.iconVariants = [
            `tuiIconPrintLarge`,
            `tuiIconLoginLarge`,
            `tuiIconCalendarLarge`,
        ];
        this.icon = this.iconVariants[0];
        this.color = `var(--tui-link)`;
        this.background = `var(--tui-base-02)`;
    }
}
ExampleTuiActionComponent.ɵfac = function ExampleTuiActionComponent_Factory(t) { return new (t || ExampleTuiActionComponent)(); };
ExampleTuiActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiActionComponent, selectors: [["example-action"]], decls: 4, vars: 0, consts: [["header", "Action", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "basic", 3, "content", 6, "heading"], ["id", "links", 3, "content", 6, "heading"], [3, "icon"], ["documentationPropertyName", "icon", "documentationPropertyType", "string", "documentationPropertyMode", "input", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["heading", "CSS variables"], ["documentationPropertyName", "--tui-action-color", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "--tui-action-background", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiActionComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiActionComponent_ng_template_2_Template, 8, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiActionComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiActionExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiActionExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocDemoComponent"], _kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_8__["TuiActionComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-action`,
                templateUrl: `./action.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/action/action.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/action/action.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiActionModule", function() { return ExampleTuiActionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.component */ "./src/modules/components/action/action.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/action/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/action/examples/2/index.ts");










class ExampleTuiActionModule {
}
ExampleTuiActionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiActionModule });
ExampleTuiActionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiActionModule_Factory(t) { return new (t || ExampleTuiActionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiActionModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiActionModule, { declarations: [_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiActionExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiActionExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiActionModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiActionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiActionModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"])),
                ],
                declarations: [_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiActionExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiActionExample2"]],
                exports: [_action_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiActionComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/action/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/action/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiActionExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiActionExample1", function() { return TuiActionExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/action/action.component */ "../kit/components/action/action.component.ts");







class TuiActionExample1 {
    constructor(alertService) {
        this.alertService = alertService;
    }
    onClick(result) {
        this.alertService.open(result).subscribe();
    }
}
TuiActionExample1.ɵfac = function TuiActionExample1_Factory(t) { return new (t || TuiActionExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
TuiActionExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiActionExample1, selectors: [["tui-action-example-1"]], decls: 7, vars: 0, consts: [[1, "wrapper"], ["icon", "tuiIconStarLarge", 1, "action", 3, "click"], ["icon", "tuiIconBellLarge", 1, "action", 3, "click"], ["icon", "tuiIconFlagLarge", 1, "action", 3, "click"]], template: function TuiActionExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-action", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiActionExample1_Template_tui_action_click_1_listener() { return ctx.onClick("Different"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " And now for something completely different ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-action", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiActionExample1_Template_tui_action_click_3_listener() { return ctx.onClick("Inquisition"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nobody expects the Spanish Inquisition! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-action", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiActionExample1_Template_tui_action_click_5_listener() { return ctx.onClick("Lumberjack"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm a lumberjack and I'm OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_4__["TuiActionComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.action[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: center;\n  margin-right: 3rem;\n}\n.action[_ngcontent-%COMP%]:first-child {\n  --tui-action-color: var(--tui-positive);\n  --tui-action-background: var(--tui-success-bg);\n}\n.action[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  --tui-action-color: var(--tui-negative);\n  --tui-action-background: var(--tui-error-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY3Rpb24vZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjdGlvbi9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURFQTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNJLHVDQUFBO0VBQ0EsOENBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtFQUVBLHVDQUFBO0VBQ0EsNENBQUE7QUNGUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYWN0aW9uL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWN0aW9uIHtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIC0tdHVpLWFjdGlvbi1jb2xvcjogdmFyKC0tdHVpLXBvc2l0aXZlKTtcbiAgICAgICAgLS10dWktYWN0aW9uLWJhY2tncm91bmQ6IHZhcigtLXR1aS1zdWNjZXNzLWJnKTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgICAgLS10dWktYWN0aW9uLWNvbG9yOiB2YXIoLS10dWktbmVnYXRpdmUpO1xuICAgICAgICAtLXR1aS1hY3Rpb24tYmFja2dyb3VuZDogdmFyKC0tdHVpLWVycm9yLWJnKTtcbiAgICB9XG59XG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWN0aW9uIHtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuLmFjdGlvbjpmaXJzdC1jaGlsZCB7XG4gIC0tdHVpLWFjdGlvbi1jb2xvcjogdmFyKC0tdHVpLXBvc2l0aXZlKTtcbiAgLS10dWktYWN0aW9uLWJhY2tncm91bmQ6IHZhcigtLXR1aS1zdWNjZXNzLWJnKTtcbn1cbi5hY3Rpb246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgLS10dWktYWN0aW9uLWNvbG9yOiB2YXIoLS10dWktbmVnYXRpdmUpO1xuICAtLXR1aS1hY3Rpb24tYmFja2dyb3VuZDogdmFyKC0tdHVpLWVycm9yLWJnKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiActionExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-action-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/action/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/action/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiActionExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiActionExample2", function() { return TuiActionExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/action/action.component */ "../kit/components/action/action.component.ts");





class TuiActionExample2 {
}
TuiActionExample2.ɵfac = function TuiActionExample2_Factory(t) { return new (t || TuiActionExample2)(); };
TuiActionExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiActionExample2, selectors: [["tui-action-example-2"]], decls: 2, vars: 0, consts: [["tuiAction", "", "icon", "tuiIconImgLarge", "target", "_blank", "href", "http://www.montypython.com/"]], template: function TuiActionExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It's\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_action_action_component__WEBPACK_IMPORTED_MODULE_3__["TuiActionComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiActionExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-action-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-action-action-module.js.map