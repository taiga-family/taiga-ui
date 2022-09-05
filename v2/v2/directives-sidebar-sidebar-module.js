(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-sidebar-sidebar-module"],{

/***/ "./src/modules/directives/sidebar/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/directives/sidebar/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiSidebarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSidebarExample1", function() { return TuiSidebarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _addon_mobile_directives_sidebar_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-mobile/directives/sidebar/sidebar.directive */ "../addon-mobile/directives/sidebar/sidebar.directive.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");












function TuiSidebarExample1_div_2_ng_template_4_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/ng-web-apis/", link_r4, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r4, " ");
} }
function TuiSidebarExample1_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiSidebarExample1_div_2_ng_template_4_a_0_Template, 2, 2, "a", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.webApis);
} }
function TuiSidebarExample1_div_2_ng_template_7_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/tinkoff/", link_r6, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r6, " ");
} }
function TuiSidebarExample1_div_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiSidebarExample1_div_2_ng_template_7_a_0_Template, 2, 2, "a", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tinkoff);
} }
function TuiSidebarExample1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-accordion", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-accordion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Web APIs for Angular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiSidebarExample1_div_2_ng_template_4_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-accordion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Other libraries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiSidebarExample1_div_2_ng_template_7_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", false);
} }
class TuiSidebarExample1 {
    constructor() {
        this.open = false;
        this.webApis = [`Common`, `Audio`, `Canvas`, `Geolocation`, `MIDI`, `Workers`];
        this.tinkoff = [
            `Taiga-UI`,
            `ng-event-plugins`,
            `ng-polymorpheus`,
            `ng-dompurify`,
        ];
    }
    toggle(open) {
        this.open = open;
    }
}
TuiSidebarExample1.ɵfac = function TuiSidebarExample1_Factory(t) { return new (t || TuiSidebarExample1)(); };
TuiSidebarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiSidebarExample1, selectors: [["tui-sidebar-example-1"]], decls: 3, vars: 2, consts: [["tuiButton", "", "type", "button", 3, "click", "tuiActiveZoneChange"], [4, "tuiSidebar", "tuiSidebarDirection"], [3, "rounded"], ["borders", "top-bottom"], ["tuiAccordionItemContent", ""], ["tuiLink", "", "target", "_blank", "class", "link", 3, "href", 4, "ngFor", "ngForOf"], ["tuiLink", "", "target", "_blank", 1, "link", 3, "href"]], template: function TuiSidebarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiSidebarExample1_Template_button_click_0_listener() { return ctx.toggle(true); })("tuiActiveZoneChange", function TuiSidebarExample1_Template_button_tuiActiveZoneChange_0_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show sidebar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiSidebarExample1_div_2_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiSidebar", ctx.open)("tuiSidebarDirection", "right");
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"], _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_4__["TuiActiveZoneDirective"], _addon_mobile_directives_sidebar_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__["TuiSidebarDirective"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_8__["TuiAccordionItemContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_10__["TuiLinkComponent"]], styles: [".link[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.75rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9zaWRlYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9zaWRlYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9zaWRlYmFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAuNzVyZW0gMDtcbn1cbiIsIi5saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC43NXJlbSAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiSidebarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-sidebar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/directives/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSidebarComponent", function() { return ExampleTuiSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/sidebar/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3982403428275430291$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_1 = goog.getMsg("Sidebar");
    I18N_0 = MSG_EXTERNAL_3982403428275430291$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟f5f597a31442988c2eba17966ff4425373b90cbb␟3982403428275430291:Sidebar`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7295430172284511862$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__7 = goog.getMsg(" Directive allows to show arbitrary content in a sidebar above all content. A darkening overlay is shown under the sidebar. ");
    I18N_6 = MSG_EXTERNAL_7295430172284511862$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟5b11e74121ff1f99b6d036d02b31658264bb12dd␟7295430172284511862: Directive allows to show arbitrary content in a sidebar above all content. A darkening overlay is shown under the sidebar. `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiSidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-sidebar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3837737414378433535$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__12 = goog.getMsg(" Import {$startTagCode}TuiSidebarModule{$closeTagCode} into your component module. Also add {$startTagCode}TuiActiveZoneModule{$closeTagCode} if you want to close sidebar when user clicked outside: ", { "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_11 = MSG_EXTERNAL_3837737414378433535$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟dd201446daf2f636c98d2b5c4a0b8ace49e39c58␟3837737414378433535: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiSidebarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: into your component module. Also add ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiActiveZoneModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: if you want to close sidebar when user clicked outside: `;
}
I18N_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_11);
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__14 = goog.getMsg("Add to the template:");
    I18N_13 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7028255409890250581$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__16 = goog.getMsg("Control sidebar in component");
    I18N_15 = MSG_EXTERNAL_7028255409890250581$$SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟2722db4e79af0c1c250940f4aa148489ee11108e␟7028255409890250581:Control sidebar in component`;
}
function ExampleTuiSidebarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleComponent);
} }
class ExampleTuiSidebarComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/import/insert-template.md"));
        this.exampleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-component-md */ "!!raw-loader!-examples-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/import/component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/1/index.less")),
        };
    }
}
ExampleTuiSidebarComponent.ɵfac = function ExampleTuiSidebarComponent_Factory(t) { return new (t || ExampleTuiSidebarComponent)(); };
ExampleTuiSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiSidebarComponent, selectors: [["example-tui-sidebar"]], decls: 5, vars: 0, consts: [["package", "ADDON-MOBILE", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "basic", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiSidebarComponent_ng_template_2_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiSidebarComponent_ng_template_3_Template, 15, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiSidebarExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-sidebar`,
                templateUrl: `./sidebar.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/sidebar/sidebar.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/directives/sidebar/sidebar.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiSidebarModule", function() { return ExampleTuiSidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/sidebar/examples/1/index.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar.component */ "./src/modules/directives/sidebar/sidebar.component.ts");












class ExampleTuiSidebarModule {
}
ExampleTuiSidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiSidebarModule });
ExampleTuiSidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiSidebarModule_Factory(t) { return new (t || ExampleTuiSidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiSidebarModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiSidebarModule, { declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiSidebarExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiSidebarModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiSidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiSidebarModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"])),
                ],
                declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiSidebarExample1"]],
                exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiSidebarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-sidebar-sidebar-module.js.map