(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-colors-colors-module"],{

/***/ "./src/modules/markup/colors/colors.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/colors/colors.component.ts ***!
  \*******************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _colors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors.constants */ "./src/modules/markup/colors/colors.constants.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/modules/markup/colors/table/table.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_1 = goog.getMsg("Colors");
    I18N_0 = MSG_EXTERNAL_5267754967054916445$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6162693758764653365$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_4 = goog.getMsg("Text");
    I18N_3 = MSG_EXTERNAL_6162693758764653365$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟8ba143716c2da6e4120c0c1a804f0bdd9a7e5f5b␟6162693758764653365:Text`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5611592591303869712$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_7 = goog.getMsg("Status");
    I18N_6 = MSG_EXTERNAL_5611592591303869712$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:␟81b97b8ea996ad1e4f9fca8415021850214884b1␟5611592591303869712:Status`;
}
const _c8 = ["pageTab", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7221654737154168574$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_10 = goog.getMsg("Base palette");
    I18N_9 = MSG_EXTERNAL_7221654737154168574$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:␟212013cbf1a38eca62c9071ec5a636dc3d2bbce4␟7221654737154168574:Base palette`;
}
const _c11 = ["pageTab", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7692385942576242381$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_13 = goog.getMsg("Support palette");
    I18N_12 = MSG_EXTERNAL_7692385942576242381$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize `:␟8a02de1af713fa314d224f316860637fa4027002␟7692385942576242381:Support palette`;
}
const _c14 = ["pageTab", I18N_12];
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_16 = goog.getMsg("Setup");
    I18N_15 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_16;
}
else {
    I18N_15 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c17 = ["pageTab", I18N_15];
function ColorsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r0.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r0.textNight)("dark", true);
} }
function ColorsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r1.statusNight)("dark", true);
} }
function ColorsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r2.base);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r2.baseNight)("dark", true);
} }
function ColorsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 2);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx_r3.support);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8591080595953797831$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS__19 = goog.getMsg(" Taiga UI uses {$startTagStrong}CSS custom properties{$closeTagStrong} . You do not need to import anything. Just use variables {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagStrong": "\uFFFD#1\uFFFD", "closeTagStrong": "\uFFFD/#1\uFFFD", "startTagTuiDocCode": "\uFFFD#2\uFFFD", "closeTagTuiDocCode": "\uFFFD/#2\uFFFD" });
    I18N_18 = MSG_EXTERNAL_8591080595953797831$$SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟674873ab90c165747280adf4c1606384e830618b␟8591080595953797831: Taiga UI uses ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:CSS custom properties${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . You do not need to import anything. Just use variables ${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
function ColorsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r4.basicImportsLess);
} }
// @dynamic
class ColorsComponent {
    constructor() {
        this.basicImportsLess = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-basic-imports-less-md */ "!!raw-loader!-examples-import-basic-imports-less-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/basic-imports-less.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/colors/examples/import/basic-imports-less.md"));
        this.base = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"];
        this.baseNight = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_NIGHT"];
        this.support = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["SUPPORT"].map(name => ({ name }));
        this.text = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT"];
        this.textNight = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_NIGHT"];
        this.status = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS"];
        this.statusNight = _colors_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS_NIGHT"];
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(); };
ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["colors"]], decls: 12, vars: 0, consts: [[6, "header"], [6, "pageTab"], [3, "colors"], [3, "colors", "dark"], [1, "base-colors", 3, "colors"], ["filename", "styles.less", 3, "code"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorsComponent_ng_template_2_Template, 2, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorsComponent_ng_template_4_Template, 2, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorsComponent_ng_template_6_Template, 2, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorsComponent_ng_template_8_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorsComponent_ng_template_10_Template, 3, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], styles: [".base-colors tr:first-child .demo {\n  box-shadow: inset 0 0 0 1px var(--tui-base-03);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2NvbG9ycy9jb2xvcnMuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2NvbG9ycy9jb2xvcnMuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLDhDQUFBO0FDQVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvY29sb3JzL2NvbG9ycy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2UtY29sb3JzIHtcbiAgICB0cjpmaXJzdC1jaGlsZCAuZGVtbyB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG4gICAgfVxufVxuIiwiLmJhc2UtY29sb3JzIHRyOmZpcnN0LWNoaWxkIC5kZW1vIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `colors`,
                templateUrl: `colors.template.html`,
                styleUrls: [`colors.style.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/colors/colors.constants.ts":
/*!*******************************************************!*\
  !*** ./src/modules/markup/colors/colors.constants.ts ***!
  \*******************************************************/
/*! exports provided: BASE, BASE_NIGHT, STATUS, STATUS_NIGHT, SUPPORT, TEXT, TEXT_NIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_NIGHT", function() { return BASE_NIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_NIGHT", function() { return STATUS_NIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT", function() { return SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_NIGHT", function() { return TEXT_NIGHT; });
const BASE = [
    {
        name: `--tui-base-01`,
        desc: $localize `Page primary background and icon fill for color inverted background`,
    },
    {
        name: `--tui-base-02`,
        desc: $localize `Page secondary background, tile on primary background and background of static marker icons`,
    },
    {
        name: `--tui-base-03`,
        desc: $localize `Table borders, islands and blocks`,
    },
    {
        name: `--tui-base-04`,
        desc: $localize `Hovered island border or other interactive blocks`,
    },
    { name: `--tui-base-05`, desc: $localize `Interface icons color` },
    {
        name: `--tui-base-06`,
        desc: $localize `Hovered color for interactive interface icons with --tui-base-05`,
    },
    {
        name: `--tui-base-07`,
        desc: $localize `For blocks with inverted background color`,
    },
    { name: `--tui-base-08`, desc: $localize `Alternative interface icons color` },
    {
        name: `--tui-base-09`,
        desc: $localize `Icons color over inverted background`,
    },
    {
        name: `--tui-primary`,
        desc: $localize `Background of buttons, marker icons`,
    },
    {
        name: `--tui-primary-hover`,
        desc: $localize `Hovered state background of buttons, marker icons`,
    },
    {
        name: `--tui-primary-active`,
        desc: $localize `Active state background of buttons`,
    },
    {
        name: `--tui-secondary`,
        desc: $localize `Background of input field and secondary buttons`,
    },
    {
        name: `--tui-secondary-hover`,
        desc: $localize `Hovered state background of input field and secondary buttons`,
    },
    {
        name: `--tui-secondary-active`,
        desc: $localize `Active state background of input field and secondary buttons`,
    },
    {
        name: `--tui-accent`,
        desc: $localize `Background of accent icons or buttons`,
    },
    {
        name: `--tui-accent-hover`,
        desc: $localize `Hovered state background of accent icons or buttons`,
    },
    {
        name: `--tui-accent-active`,
        desc: $localize `Active state background of accent icons or buttons`,
    },
    {
        name: `--tui-selection`,
        desc: $localize `Selected text highlight color`,
    },
    {
        name: `--tui-focus`,
        desc: $localize `Focused element border color`,
    },
    {
        name: `--tui-clear`,
        desc: $localize `Filling color of interface elements on colored background: tages, badges, buttons`,
    },
    {
        name: `--tui-clear-hover`,
        desc: $localize `Hovered state of filling color of interface elements on colored background`,
    },
    {
        name: `--tui-clear-active`,
        desc: $localize `Active state of filling color of interface elements on colored background`,
    },
    {
        name: `--tui-elevation-01`,
        desc: $localize `Background color of elevated elements: dialogs, dropdowns`,
    },
    {
        name: `--tui-elevation-02`,
        desc: $localize `Background color of elevated elements: islands inside dialogs`,
    },
];
const BASE_NIGHT = [
    {
        name: `--tui-clear-inverse`,
        desc: $localize `Filling color of interface elements on dark background: tages, badges, buttons`,
    },
    {
        name: `--tui-clear-inverse-hover`,
        desc: $localize `Hovered state of filling color of interface elements on dark background`,
    },
    {
        name: `--tui-clear-inverse-active`,
        desc: $localize `Active state of filling color of interface elements on dark background`,
    },
];
const STATUS = [
    {
        name: `--tui-error-fill`,
        desc: $localize `Icons or other elements with error status`,
    },
    {
        name: `--tui-error-bg`,
        desc: $localize `Background for elements with error status`,
    },
    {
        name: `--tui-error-bg-hover`,
        desc: $localize `Hovered state of background for elements with error status`,
    },
    {
        name: `--tui-success-fill`,
        desc: $localize `Icons or other elements with success status`,
    },
    {
        name: `--tui-success-bg`,
        desc: $localize `Background for elements with success status`,
    },
    {
        name: `--tui-success-bg-hover`,
        desc: $localize `Hovered state of background for elements with success status`,
    },
    {
        name: `--tui-warning-fill`,
        desc: $localize `Icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg`,
        desc: $localize `Background icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-hover`,
        desc: $localize `Hovered status of background icons or other elements with warning status`,
    },
    {
        name: `--tui-info-fill`,
        desc: $localize `Icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg`,
        desc: $localize `Background icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-hover`,
        desc: $localize `Hovered status of background icons or other elements with info status`,
    },
    {
        name: `--tui-neutral-fill`,
        desc: $localize `Icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg`,
        desc: $localize `Background icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-hover`,
        desc: $localize `Hovered status of background icons or other elements with neutral status`,
    },
];
const STATUS_NIGHT = [
    {
        name: `--tui-error-fill-night`,
        desc: $localize `Icons or other elements with error status`,
    },
    {
        name: `--tui-error-bg-night`,
        desc: $localize `Background for elements with error status`,
    },
    {
        name: `--tui-error-bg-night-hover`,
        desc: $localize `Hovered state of background for elements with error status`,
    },
    {
        name: `--tui-success-fill-night`,
        desc: $localize `Icons or other elements with success status`,
    },
    {
        name: `--tui-success-bg-night`,
        desc: $localize `Background for elements with success status`,
    },
    {
        name: `--tui-success-bg-night-hover`,
        desc: $localize `Hovered state of background for elements with success status`,
    },
    {
        name: `--tui-warning-fill-night`,
        desc: $localize `Icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-night`,
        desc: $localize `Background icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-night-hover`,
        desc: $localize `Hovered status of background icons or other elements with warning status`,
    },
    {
        name: `--tui-info-fill-night`,
        desc: $localize `Icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-night`,
        desc: $localize `Background icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-night-hover`,
        desc: $localize `Hovered status of background icons or other elements with info status`,
    },
    {
        name: `--tui-neutral-fill-night`,
        desc: $localize `Icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-night`,
        desc: $localize `Background icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-night-hover`,
        desc: $localize `Hovered status of background icons or other elements with neutral status`,
    },
];
const SUPPORT = [
    `--tui-support-01`,
    `--tui-support-02`,
    `--tui-support-03`,
    `--tui-support-04`,
    `--tui-support-05`,
    `--tui-support-06`,
    `--tui-support-07`,
    `--tui-support-08`,
    `--tui-support-09`,
    `--tui-support-10`,
    `--tui-support-11`,
    `--tui-support-12`,
    `--tui-support-13`,
    `--tui-support-14`,
    `--tui-support-15`,
    `--tui-support-16`,
    `--tui-support-17`,
    `--tui-support-18`,
    `--tui-support-19`,
    `--tui-support-20`,
    `--tui-support-21`,
];
const TEXT = [
    {
        name: `--tui-text-01`,
        desc: $localize `Primary text and headings`,
    },
    {
        name: `--tui-text-02`,
        desc: $localize `Secondary text and descriptions`,
    },
    {
        name: `--tui-text-03`,
        desc: $localize `Inactive and additional points, minor information and helpers`,
    },
    {
        name: `--tui-link`,
        desc: $localize `Link and secondary buttons text`,
    },
    {
        name: `--tui-link-hover`,
        desc: $localize `Hovered state of link and secondary buttons text`,
    },
    {
        name: `--tui-positive`,
        desc: $localize `Positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-positive-hover`,
        desc: $localize `Hovered state of positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-negative`,
        desc: $localize `Negative values: expense, stock price fall, etc.`,
    },
    {
        name: `--tui-negative-hover`,
        desc: $localize `Hovered state of negative values: expense, stock price fall, etc.`,
    },
];
const TEXT_NIGHT = [
    {
        name: `--tui-text-01-night`,
        desc: $localize `Primary text and headings`,
    },
    {
        name: `--tui-text-02-night`,
        desc: $localize `Secondary text and descriptions`,
    },
    {
        name: `--tui-text-03-night`,
        desc: $localize `Inactive and additional points, minor information and helpers`,
    },
    {
        name: `--tui-link-night`,
        desc: $localize `Link and secondary buttons text`,
    },
    {
        name: `--tui-link-night-hover`,
        desc: $localize `Hovered state of link and secondary buttons text`,
    },
    {
        name: `--tui-positive-night`,
        desc: $localize `Positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-positive-night-hover`,
        desc: $localize `Hovered state of positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-negative-night`,
        desc: $localize `Negative values: expense, stock price fall, etc.`,
    },
    {
        name: `--tui-negative-night-hover`,
        desc: $localize `Hovered state of negative values: expense, stock price fall, etc.`,
    },
];


/***/ }),

/***/ "./src/modules/markup/colors/colors.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/markup/colors/colors.module.ts ***!
  \****************************************************/
/*! exports provided: ColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsModule", function() { return ColorsModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors.component */ "./src/modules/markup/colors/colors.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/modules/markup/colors/table/table.component.ts");









class ColorsModule {
}
ColorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ColorsModule });
ColorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ColorsModule_Factory(t) { return new (t || ColorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorsModule, { declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiDocCopyModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"])),
                ],
                declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
                exports: [_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/colors/table/table.component.ts":
/*!************************************************************!*\
  !*** ./src/modules/markup/colors/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/theme.service */ "./src/modules/app/theme.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");











const _c0 = ["colors", ""];
function TableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6143336319923759907$$SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__2 = goog.getMsg(" Copy ");
    I18N_1 = MSG_EXTERNAL_6143336319923759907$$SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟3bbb35beaeb4d274af7f8d8c5ac596ca13655170␟6143336319923759907: Copy `;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6143336319923759907$$SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__4 = goog.getMsg(" Copy ");
    I18N_3 = MSG_EXTERNAL_6143336319923759907$$SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟3bbb35beaeb4d274af7f8d8c5ac596ca13655170␟6143336319923759907: Copy `;
}
function TableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tui-doc-copy", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tui-doc-copy", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", "var(" + color_r2.name + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", color_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](color_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r1.getValue(color_r2.name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r1.getValue(color_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getValue(color_r2.name), " ");
} }
class TableComponent {
    constructor(themeService, documentRef, windowRef) {
        this.themeService = themeService;
        this.documentRef = documentRef;
        this.windowRef = windowRef;
        this.styles = this.windowRef.getComputedStyle(this.documentRef.documentElement);
        this.colors = [];
        this.dark = false;
        this.theme$ = this.themeService.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1));
    }
    getValue(variable) {
        return this.styles.getPropertyValue(variable);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_theme_service__WEBPACK_IMPORTED_MODULE_5__["TuiThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__["WINDOW"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["table", "colors", ""]], hostVars: 2, hostBindings: function TableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_dark", ctx.dark);
    } }, inputs: { colors: "colors", dark: "dark" }, attrs: _c0, decls: 3, vars: 4, consts: [[4, "ngIf"], ["class", "color", 4, "ngFor", "ngForOf"], [1, "color"], [1, "name"], [1, "copy", 3, "cdkCopyToClipboard"], [1, "demo"], [1, "value"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TableComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_tr_2_Template, 15, 7, "tr", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.theme$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["CdkCopyToClipboard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n._dark[_nghost-%COMP%] {\n  background: #333;\n  color: var(--tui-text-01-night);\n}\n._dark[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--tui-base-06);\n}\n._dark[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  color: var(--tui-text-02-night);\n  padding-right: 0;\n}\n[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--tui-base-03);\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  color: var(--tui-text-02);\n  padding-right: 0;\n}\n.demo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.name[_ngcontent-%COMP%] {\n  transition-property: color;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: relative;\n  display: inline-block;\n  height: 2rem;\n  background: var(--tui-base-02);\n  border-radius: var(--tui-radius-m);\n  padding: 0.25rem 0.75rem;\n  box-sizing: border-box;\n}\n.name[_ngcontent-%COMP%]:hover {\n  color: transparent;\n}\n.name[_ngcontent-%COMP%]:hover   .copy[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n._dark[_nghost-%COMP%]   .name[_ngcontent-%COMP%] {\n  background: var(--tui-clear-inverse);\n}\n.name[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.value[_ngcontent-%COMP%] {\n  position: relative;\n  width: 11.25rem;\n}\n.value[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%] {\n  top: -0.25rem;\n}\n.copy[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--tui-base-02);\n  opacity: 0;\n}\n.copy[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2NvbG9ycy90YWJsZS90YWJsZS5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvY29sb3JzL3RhYmxlL3RhYmxlLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLFdBQUE7QURLSjtBQ0hJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBREtSO0FDUEk7RUFLUSx3Q0FBQTtBREtaO0FDVkk7RUFTUSwrQkFBQTtFQUNBLGdCQUFBO0FESVo7QUNqQkE7RUFrQlEsd0NBQUE7QURFUjtBQ3BCQTtFQXNCUSxlQUFBO0FEQ1I7QUNDUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QURDWjtBQ0lBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURGSjtBQ0tBO0VDNExJLDBCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFRDVMQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FEREo7QUNHSTtFQUNJLGtCQUFBO0FERFI7QUNBSTtFQUlRLFVBQUE7QUREWjtBQ0tJO0VBQ0ksb0NBQUE7QURIUjtBQ2hCQTtFQXVCUSxlQUFBO0FESlI7QUNRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRE5KO0FDSUE7RUFLUSxhQUFBO0FETlI7QUNVQTtFQ3dKSSw0QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUR4SkEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBRE5KO0FDUUk7RUFDSSxVQUFBO0FETlIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvY29sb3JzL3RhYmxlL3RhYmxlLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QuX2Rhcmsge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpO1xufVxuOmhvc3QuX2RhcmsgdHI6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDYpO1xufVxuOmhvc3QuX2RhcmsgdGQ6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMi1uaWdodCk7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG46aG9zdCB0cjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG46aG9zdCB0ZCB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbjpob3N0IHRkOmxhc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmRlbW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubmFtZSB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5uYW1lOmhvdmVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hbWU6aG92ZXIgLmNvcHkge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QuX2RhcmsgLm5hbWUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktY2xlYXItaW52ZXJzZSk7XG59XG4ubmFtZSAuY29weSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi52YWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExLjI1cmVtO1xufVxuLnZhbHVlIC5jb3B5IHtcbiAgdG9wOiAtMC4yNXJlbTtcbn1cbi5jb3B5IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAyKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5jb3B5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi5fZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCk7XG5cbiAgICAgICAgdHI6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTA2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyLW5pZ2h0KTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wMyk7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVtbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYW1lIHtcbiAgICAudHJhbnNpdGlvbihjb2xvcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXR1aS1yYWRpdXMtbSk7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC5jb3B5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdC5fZGFyayAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWNsZWFyLWludmVyc2UpO1xuICAgIH1cblxuICAgIC5jb3B5IHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnZhbHVlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDExLjI1cmVtO1xuXG4gICAgLmNvcHkge1xuICAgICAgICB0b3A6IC0wLjI1cmVtO1xuICAgIH1cbn1cblxuLmNvcHkge1xuICAgIC50cmFuc2l0aW9uKG9wYWNpdHkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMik7XG4gICAgb3BhY2l0eTogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `table[colors]`,
                templateUrl: `./table.template.html`,
                styleUrls: [`./table.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_app_theme_service__WEBPACK_IMPORTED_MODULE_5__["TuiThemeService"]]
            }] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._dark`]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=markup-colors-colors-module.js.map