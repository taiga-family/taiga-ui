(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-table-bar-table-bar-module"],{

/***/ "./src/modules/services/table-bar/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/services/table-bar/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiTableBarExampleComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiTableBarExampleComponent1", function() { return TuiTableBarExampleComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-tablebars */ "../addon-tablebars/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");









const _c0 = ["tableBarTemplate"];
function TuiTableBarExampleComponent1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiTableBarExampleComponent1_ng_template_2_Template_button_click_3_listener() { const close_r2 = ctx.$implicit; return close_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiTableBarExampleComponent1 {
    constructor(tableBarsService) {
        this.tableBarsService = tableBarsService;
        this.tableBarTemplate = ``;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    showTableBar() {
        this.subscription.unsubscribe();
        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || ``, {
            hasCloseButton: true,
            adaptive: true,
        })
            .subscribe();
    }
}
TuiTableBarExampleComponent1.ɵfac = function TuiTableBarExampleComponent1_Factory(t) { return new (t || TuiTableBarExampleComponent1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_3__["TuiTableBarsService"])); };
TuiTableBarExampleComponent1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiTableBarExampleComponent1, selectors: [["tui-table-bar-example-1"]], viewQuery: function TuiTableBarExampleComponent1_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableBarTemplate = _t.first);
    } }, decls: 4, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tableBarTemplate", ""], ["tuiMode", "onDark", 1, "content"], ["tuiButton", "", "type", "button", "size", "m"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "m", 1, "tui-space_left-3", 3, "click"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "m", "icon", "tuiIconTrashLarge", 1, "delete-button"]], template: function TuiTableBarExampleComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiTableBarExampleComponent1_Template_button_click_0_listener() { return ctx.showTableBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show TableBar\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiTableBarExampleComponent1_ng_template_2_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__["TuiModeDirective"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.875rem 0;\n}\n.delete-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvdGFibGUtYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvdGFibGUtYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy90YWJsZS1iYXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAwO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iLCIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDA7XG59XG4uZGVsZXRlLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiTableBarExampleComponent1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-table-bar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_3__["TuiTableBarsService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_3__["TuiTableBarsService"]]
            }] }]; }, { tableBarTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`tableBarTemplate`]
        }] }); })();


/***/ }),

/***/ "./src/modules/services/table-bar/table-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/services/table-bar/table-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiTableBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableBarComponent", function() { return ExampleTuiTableBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-tablebars */ "../addon-tablebars/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/services/table-bar/examples/1/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















const _c0 = ["tableBarTemplate"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7392151570764225525$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__2 = goog.getMsg(" It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. ");
    I18N_1 = MSG_EXTERNAL_7392151570764225525$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟d4eaacf31ad166bfe74dbf267afaff7d767d4dad␟7392151570764225525: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__4 = goog.getMsg("Basic");
    I18N_3 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c5 = ["heading", I18N_3];
function ExampleTuiTableBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-table-bar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
function ExampleTuiTableBarComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Some template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5646260285050734970$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___7 = goog.getMsg(" Adaprive content ");
    I18N_6 = MSG_EXTERNAL_5646260285050734970$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `;
}
function ExampleTuiTableBarComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_6);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4329350149148955327$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___9 = goog.getMsg(" Enable close button ");
    I18N_8 = MSG_EXTERNAL_4329350149148955327$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `;
}
function ExampleTuiTableBarComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1527305502164610498$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___11 = goog.getMsg(" Light / dark mode ");
    I18N_10 = MSG_EXTERNAL_1527305502164610498$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `;
}
function ExampleTuiTableBarComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
function ExampleTuiTableBarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiTableBarComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showTableBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Show tableBar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiTableBarComponent_ng_template_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.destroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hide tableBar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiTableBarComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiTableBarComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.adaptive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiTableBarComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hasCloseButton = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiTableBarComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.adaptive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hasCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5586136887716454770$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__13 = goog.getMsg(" Add {$startTagCode}TuiTableBarsHostModule{$closeTagCode} into your app.module ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_12 = MSG_EXTERNAL_5586136887716454770$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableBarsHostModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5654054825567970286$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__15 = goog.getMsg(" Add {$startTagCode}tui-table-bars-host{$closeTagCode} into your app.template ", { "startTagCode": "\uFFFD#9\uFFFD", "closeTagCode": "\uFFFD/#9\uFFFD" });
    I18N_14 = MSG_EXTERNAL_5654054825567970286$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:tui-table-bars-host${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: into your app.template `;
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2388724752770660394$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__17 = goog.getMsg(" Use {$startTagCode}open{$closeTagCode} method and subscribe to returened {$startTagCode}Observable{$closeTagCode}", { "startTagCode": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]", "closeTagCode": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]" });
    I18N_16 = MSG_EXTERNAL_2388724752770660394$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16);
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_282224705145462981$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__19 = goog.getMsg(" If you use component in lazy loading modules, do not forget to pass into {$startTagCode}new PolymorpheusComponent Injector{$closeTagCode} of component where you open table bar ", { "startTagCode": "\uFFFD#21\uFFFD", "closeTagCode": "\uFFFD/#21\uFFFD" });
    I18N_18 = MSG_EXTERNAL_282224705145462981$$SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟ba1892794b314f679ac905e2ef9357d65d51e41e␟282224705145462981: If you use component in lazy loading modules, do not forget to pass into ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE: of component where you open table bar `;
}
function ExampleTuiTableBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-doc-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-doc-code", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](20, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleServiceUsageHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleServiceUsage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleLazyModule);
} }
class ExampleTuiTableBarComponent {
    constructor(tableBarsService) {
        this.tableBarsService = tableBarsService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tableBarTemplate = ``;
        this.exampleServiceUsage = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-usage-md */ "!!raw-loader!-examples-import-service-usage-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service-usage.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/service-usage.md"));
        this.exampleServiceUsageHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-usage-html-md */ "!!raw-loader!-examples-import-service-usage-html-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service-usage-html.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/service-usage-html.md"));
        this.exampleLazyModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-lazy-module-md */ "!!raw-loader!-examples-import-lazy-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/lazy-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/lazy-module.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-module-md */ "!!raw-loader!-examples-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-template-md */ "!!raw-loader!-examples-import-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/1/index.less")),
        };
        this.modeVariants = [`onLight`, `onDark`];
        this.mode = this.modeVariants[0];
        this.adaptive = false;
        this.hasCloseButton = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    showTableBar() {
        this.subscription.unsubscribe();
        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || ``, {
            adaptive: this.adaptive,
            mode: this.mode,
            hasCloseButton: this.hasCloseButton,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe();
    }
    destroy() {
        this.destroy$.next();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ExampleTuiTableBarComponent.ɵfac = function ExampleTuiTableBarComponent_Factory(t) { return new (t || ExampleTuiTableBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_2__["TuiTableBarsService"])); };
ExampleTuiTableBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiTableBarComponent, selectors: [["example-tui-table-bar"]], viewQuery: function ExampleTuiTableBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableBarTemplate = _t.first);
    } }, decls: 4, vars: 0, consts: [["header", "TableBarsService", "package", "ADDON-TABLEBARS", "path", "addon-tablebars/services/table-bars.service.ts"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tableBarTemplate", ""], ["documentationPropertyName", "adaptive", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasCloseButton", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "mode", "documentationPropertyType", "TuiBrightness", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "customNotification.component.ts", 3, "code"]], template: function ExampleTuiTableBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiTableBarComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiTableBarComponent_ng_template_2_Template, 12, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiTableBarComponent_ng_template_3_Template, 23, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiTableBarExampleComponent1"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  width: 6.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvdGFibGUtYmFyL3RhYmxlLWJhci5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy90YWJsZS1iYXIvdGFibGUtYmFyLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy90YWJsZS1iYXIvdGFibGUtYmFyLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICAgIHdpZHRoOiA2LjI1cmVtO1xufVxuIiwiLmxhYmVsIHtcbiAgd2lkdGg6IDYuMjVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiTableBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-table-bar`,
                templateUrl: `./table-bar.template.html`,
                styleUrls: [`./table-bar.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_2__["TuiTableBarsService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_tablebars__WEBPACK_IMPORTED_MODULE_2__["TuiTableBarsService"]]
            }] }]; }, { tableBarTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`tableBarTemplate`]
        }] }); })();


/***/ }),

/***/ "./src/modules/services/table-bar/table-bar.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/services/table-bar/table-bar.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiTableBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiTableBarModule", function() { return ExampleTuiTableBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/services/table-bar/examples/1/index.ts");
/* harmony import */ var _table_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-bar.component */ "./src/modules/services/table-bar/table-bar.component.ts");













class ExampleTuiTableBarModule {
}
ExampleTuiTableBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiTableBarModule });
ExampleTuiTableBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiTableBarModule_Factory(t) { return new (t || ExampleTuiTableBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiTableBarModule, { declarations: [_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiTableBarExampleComponent1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiTableBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"])),
                ],
                declarations: [_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiTableBarExampleComponent1"]],
                exports: [_table_bar_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiTableBarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=services-table-bar-table-bar-module.js.map