(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-carousel-carousel-module"],{

/***/ "./src/modules/components/carousel/carousel.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/carousel/carousel.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCarouselComponent", function() { return ExampleTuiCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/carousel/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/carousel/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/carousel/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/carousel/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/carousel/carousel.component */ "../kit/components/carousel/carousel.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../kit/components/carousel/carousel.directive */ "../kit/components/carousel/carousel.directive.ts");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");





















function ExampleTuiCarouselComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Requires ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " IntersectionObserver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " support or a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " polyfill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-carousel-example-1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_1_touchstart_passive_stop_9_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-carousel-example-2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_2_touchstart_passive_stop_11_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-carousel-example-3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_3_touchstart_passive_stop_13_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-carousel-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " I'm focusable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11, " ");
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCarouselComponent_ng_template_2_ng_container_2_div_1_Template, 4, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Whether or not slider can be dragged by clicking and holding ");
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation) ");
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Number of slides shown at the same time ");
} }
function ExampleTuiCarouselComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Current index ");
} }
function ExampleTuiCarouselComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-carousel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function ExampleTuiCarouselComponent_ng_template_2_Template_tui_carousel_indexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.index = $event; })("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_2_Template_tui_carousel_touchstart_passive_stop_1_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCarouselComponent_ng_template_2_ng_container_2_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCarouselComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.draggable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiCarouselComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiCarouselComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.itemsCount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiCarouselComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", ctx_r1.draggable)("duration", ctx_r1.duration)("itemsCount", ctx_r1.itemsCount)("index", ctx_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.durationVariants)("documentationPropertyValue", ctx_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.index);
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2626084410037085748$$SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__1 = goog.getMsg(" Import {$startTagCode}TuiCarouselModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2626084410037085748$$SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟83003332a17dbd00d33d00f27a668a2597948456␟2626084410037085748: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCarouselModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__3 = goog.getMsg("Add to the template:");
    I18N_2 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCarouselComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiCarouselComponent {
    constructor() {
        this.durationVariants = [0, 3000, 10000];
        this.draggable = false;
        this.duration = this.durationVariants[0];
        this.index = 0;
        this.itemsCount = 1;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.less")),
        };
    }
}
ExampleTuiCarouselComponent.ɵfac = function ExampleTuiCarouselComponent_Factory(t) { return new (t || ExampleTuiCarouselComponent)(); };
ExampleTuiCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCarouselComponent, selectors: [["example-carousel"]], decls: 4, vars: 0, consts: [["header", "Carousel", "package", "KIT", "type", "components"], ["pageTab", ""], ["status", "warning", 1, "tui-space_bottom-4"], ["tuiLink", "", "href", "https://caniuse.com/intersectionobserver"], ["tuiLink", "", "href", "https://github.com/w3c/IntersectionObserver/tree/main/polyfill"], ["id", "single", "heading", "Single", 3, "content"], [3, "touchstart.passive.stop"], ["id", "multi", "heading", "Multiple", 3, "content"], ["id", "custom", "heading", "Custom", 3, "content"], ["id", "dialog", "heading", "Carousel inside dialog", 3, "content"], [1, "carousel", 3, "draggable", "duration", "itemsCount", "index", "indexChange", "touchstart.passive.stop"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["documentationPropertyName", "draggable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "duration", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "itemsCount", "documentationPropertyType", "number", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "index", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["class", "plate", 4, "tuiItem"], [1, "plate"], ["tuiButton", "", "type", "button", "size", "s", 1, "button"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCarouselComponent_ng_template_1_Template, 16, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCarouselComponent_ng_template_2_Template, 8, 10, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCarouselComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiCarouselExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_8__["TuiCarouselExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_9__["TuiCarouselExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_10__["TuiCarouselExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["TuiCarouselComponent"], _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_13__["TuiCarouselDirective"], _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_14__["TuiRepeatTimesDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationPropertyConnectorDirective"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_17__["TuiItemDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_18__["TuiButtonComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocCodeComponent"]], styles: [".carousel[_ngcontent-%COMP%] {\n  margin: 0 2.5rem;\n}\n.plate[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-3);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  height: 7.5rem;\n  padding: 1.75rem;\n  box-sizing: border-box;\n  background: var(--tui-secondary);\n}\n.button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvdGV4dC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxnQkFBQTtBREtKO0FDRkE7RUNhSSwrQkFBQTtFRFhBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QURJSjtBQ0RBO0VBQ0ksa0JBQUE7QURHSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5jYXJvdXNlbCB7XG4gIG1hcmdpbjogMCAyLjVyZW07XG59XG4ucGxhdGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNy41cmVtO1xuICBwYWRkaW5nOiAxLjc1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcbn1cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5jYXJvdXNlbCB7XG4gICAgbWFyZ2luOiAwIDIuNXJlbTtcbn1cblxuLnBsYXRlIHtcbiAgICAudGV4dC1oMygpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcuNXJlbTtcbiAgICBwYWRkaW5nOiAxLjc1cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG59XG5cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbiIsIi50ZXh0LWJhc2ljKCkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcbn1cblxuLy8gaGVhZGluZ3NcblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDEoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy0xKTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDIoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy0yKTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDMoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy0zKTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDQoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy00KTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDUoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy01KTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtaDYoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cblxuLy8gdHlwZWQgdGV4dFxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LXhsLWJvbGQoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14bCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHkteGwoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14bCk7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktbC1ib2xkKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1sKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIH1cblxuICAgICYgd2hlbiAoQHR5cGUgPSAzKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1sKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1sKTtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIH1cblxuICAgICYgd2hlbiAoQHR5cGUgPSAzKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1tLWJvbGQoQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LW0oQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LXMtYm9sZChAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktcyhAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHkteHMoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG59XG5cbi8vdGFicywgdGFncywgY2F0ZWdvcnlcblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtY2FwdGlvbi1sLWJvbGQoKSB7XG4gICAgLmZvbnQoMC44MTI1cmVtLCAxLjI1cmVtLCBib2xkKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNjI1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWNhcHRpb24tbCgpIHtcbiAgICAuZm9udCgwLjgxMjVyZW0sIDEuMjVyZW0sIG5vcm1hbCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1jYXB0aW9uLWJvbGQoKSB7XG4gICAgLmZvbnQoMC42ODc1cmVtLCAxcmVtLCBib2xkKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNjI1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWNhcHRpb24oKSB7XG4gICAgLmZvbnQoMC42ODc1cmVtLCAxcmVtLCBub3JtYWwpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gbWl4aW5zIGZvciBmb250IHByb3BlcnRpZXNcblxuLy8gZGVwcmVjYXRlZFxuLmZvbnRfaGVhZGluZyhAc2l6ZSwgQGxpbmUtaGVpZ2h0OiBub3JtYWwpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtc2l6ZTogQHNpemU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXR1aS1mb250LWhlYWRpbmcpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4uZm9udChAc2l6ZSwgQGxpbmUtaGVpZ2h0OiAnbm9uZScsIEB3ZWlnaHQ6IG5vcm1hbCwgQGNvbG9yOiAnbm9uZScpIHtcbiAgICBmb250LXdlaWdodDogQHdlaWdodDtcbiAgICBmb250LXNpemU6IEBzaXplO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10dWktZm9udC10ZXh0KTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLmZvbnQoQHNpemUsIEBsaW5lLWhlaWdodDogJ25vbmUnLCBAd2VpZ2h0OiBub3JtYWwsIEBjb2xvcjogJ25vbmUnKSB3aGVuIG5vdCAoQGxpbmUtaGVpZ2h0ID0gJ25vbmUnKSB7XG4gICAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodDtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLmZvbnQoQHNpemUsIEBsaW5lLWhlaWdodDogJ25vbmUnLCBAd2VpZ2h0OiBub3JtYWwsIEBjb2xvcjogJ25vbmUnKSB3aGVuIG5vdCAoQGNvbG9yID0gJ25vbmUnKSB7XG4gICAgY29sb3I6IEBjb2xvcjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-carousel`,
                templateUrl: `./carousel.template.html`,
                styleUrls: [`./carousel.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/carousel/carousel.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/carousel/carousel.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCarouselModule", function() { return ExampleTuiCarouselModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel.component */ "./src/modules/components/carousel/carousel.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/carousel/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/carousel/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/carousel/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/carousel/examples/4/index.ts");















class ExampleTuiCarouselModule {
}
ExampleTuiCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCarouselModule });
ExampleTuiCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCarouselModule_Factory(t) { return new (t || ExampleTuiCarouselModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCarouselModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMarkerIconModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiCarouselExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiCarouselExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiCarouselExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiCarouselExample4"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCarouselModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMarkerIconModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCarouselModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiPaginationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiMarkerIconModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"])),
                ],
                declarations: [
                    _carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiCarouselExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiCarouselExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiCarouselExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiCarouselExample4"],
                ],
                exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiCarouselComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/carousel/examples/1/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/carousel/examples/1/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCarouselExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCarouselExample1", function() { return TuiCarouselExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.component */ "../kit/components/carousel/carousel.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.directive */ "../kit/components/carousel/carousel.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");











function TuiCarouselExample1_ng_container_1_tui_island_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Wiki ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://en.wikipedia.org/wiki/", item_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TuiCarouselExample1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCarouselExample1_ng_container_1_tui_island_1_Template, 5, 2, "tui-island", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TuiCarouselExample1 {
    constructor() {
        this.index = 2;
        this.items = [
            `John Cleese`,
            `Eric Idle`,
            `Michael Palin`,
            `Graham Chapman`,
            `Terry Gilliam`,
            `Terry Jones`,
        ];
    }
}
TuiCarouselExample1.ɵfac = function TuiCarouselExample1_Factory(t) { return new (t || TuiCarouselExample1)(); };
TuiCarouselExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCarouselExample1, selectors: [["tui-carousel-example-1"]], decls: 3, vars: 5, consts: [[3, "duration", "index", "indexChange"], [4, "ngFor", "ngForOf"], ["size", "s", 1, "pagination", 3, "length", "index", "indexChange"], [4, "tuiItem"], [1, "tui-island__title"], ["tuiButton", "", 3, "href"]], template: function TuiCarouselExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiCarouselExample1_Template_tui_carousel_indexChange_0_listener($event) { return ctx.index = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCarouselExample1_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiCarouselExample1_Template_tui_pagination_indexChange_2_listener($event) { return ctx.index = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("duration", 4000)("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.items.length)("index", ctx.index);
    } }, directives: [_kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["TuiCarouselComponent"], _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_4__["TuiCarouselDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["TuiPaginationComponent"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__["TuiItemDirective"], _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__["TuiIslandComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["TuiButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2Fyb3VzZWwvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCarouselExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-carousel-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/carousel/examples/2/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/carousel/examples/2/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCarouselExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCarouselExample2", function() { return TuiCarouselExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.component */ "../kit/components/carousel/carousel.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.directive */ "../kit/components/carousel/carousel.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");








function TuiCarouselExample2_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r4.index;
    const item_r1 = ctx_r4.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item_active", i_r2 === ctx_r3.index + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", item_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TuiCarouselExample2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCarouselExample2_ng_container_1_img_1_Template, 1, 3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TuiCarouselExample2 {
    constructor() {
        this.index = 0;
        this.items = [
            `angular.svg`,
            `avatar.jpg`,
            `angular.svg`,
            `avatar.jpg`,
            `angular.svg`,
            `avatar.jpg`,
        ];
    }
}
TuiCarouselExample2.ɵfac = function TuiCarouselExample2_Factory(t) { return new (t || TuiCarouselExample2)(); };
TuiCarouselExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCarouselExample2, selectors: [["tui-carousel-example-2"]], decls: 2, vars: 4, consts: [[3, "draggable", "itemsCount", "index", "indexChange"], [4, "ngFor", "ngForOf"], ["alt", "", "draggable", "false", "class", "item", 3, "src", "item_active", 4, "tuiItem"], ["alt", "", "draggable", "false", 1, "item", 3, "src"]], template: function TuiCarouselExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiCarouselExample2_Template_tui_carousel_indexChange_0_listener($event) { return ctx.index = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCarouselExample2_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", true)("itemsCount", 3)("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["TuiCarouselComponent"], _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_4__["TuiCarouselDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_6__["TuiItemDirective"]], styles: [".item[_ngcontent-%COMP%] {\n  transition-property: box-shadow, transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  display: block;\n  max-height: 100px;\n  margin: 2rem auto;\n  border-radius: 100%;\n}\n.item_active[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.16);\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2Fyb3VzZWwvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUNtT0ksMENBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEbk9BLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURPSjtBQ0xJO0VDMklJLDZDQUFBO0VEeklBLHFCQUFBO0FET1IiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Nhcm91c2VsL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5pdGVtIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLml0ZW1fYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5pdGVtIHtcbiAgICAudHJhbnNpdGlvbih+J2JveC1zaGFkb3csIHRyYW5zZm9ybScpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgICAmX2FjdGl2ZSB7XG4gICAgICAgIC5zaGFkb3coMik7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCarouselExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-carousel-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/carousel/examples/3/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/carousel/examples/3/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCarouselExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCarouselExample3", function() { return TuiCarouselExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_carousel_carousel_buttons_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel-buttons.directive */ "../kit/components/carousel/carousel-buttons.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.component */ "../kit/components/carousel/carousel.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.directive */ "../kit/components/carousel/carousel.directive.ts");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/loader/loader.component */ "../core/components/loader/loader.component.ts");
/* harmony import */ var _kit_components_marker_icon_marker_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/marker-icon/marker-icon.component */ "../kit/components/marker-icon/marker-icon.component.ts");













function TuiCarouselExample3_tui_island_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Monty Python and the Holy Grail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Buy $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-money", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Rent $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-money", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 12.99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4.99);
} }
function TuiCarouselExample3_tui_island_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiCarouselExample3_tui_island_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Failed to load");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-marker-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiCarouselExample3 {
}
TuiCarouselExample3.ɵfac = function TuiCarouselExample3_Factory(t) { return new (t || TuiCarouselExample3)(); };
TuiCarouselExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCarouselExample3, selectors: [["tui-carousel-example-3"]], decls: 8, vars: 0, consts: [["tuiCarouselButtons", "", 1, "wrapper"], ["tuiIconButton", "", "icon", "tuiIconChevronLeftLarge", "title", "Previous", 3, "click"], [1, "carousel"], ["carousel", ""], [4, "tuiItem"], ["class", "tui-island_text-align_center", 4, "tuiItem"], ["tuiIconButton", "", "icon", "tuiIconChevronRightLarge", "title", "Next", 3, "click"], [1, "tui-island__title"], ["tuiButton", "", "appearance", "primary"], [3, "value"], ["tuiButton", "", 1, "tui-space_left-2"], [1, "tui-island_text-align_center"], ["mode", "error", "src", "tuiIconRemoveLarge"]], template: function TuiCarouselExample3_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-carousel", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiCarouselExample3_tui_island_4_Template, 12, 2, "tui-island", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiCarouselExample3_tui_island_5_Template, 2, 0, "tui-island", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiCarouselExample3_tui_island_6_Template, 5, 0, "tui-island", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_carousel_carousel_buttons_directive__WEBPACK_IMPORTED_MODULE_3__["TuiCarouselButtonsDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["TuiCarouselComponent"], _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_6__["TuiCarouselDirective"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_7__["TuiItemDirective"], _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_8__["TuiIslandComponent"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_9__["TuiMoneyComponent"], _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["TuiLoaderComponent"], _kit_components_marker_icon_marker_icon_component__WEBPACK_IMPORTED_MODULE_11__["TuiMarkerIconComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.carousel[_ngcontent-%COMP%] {\n  width: 25rem;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2Fyb3VzZWwvZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Nhcm91c2VsL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcm91c2VsIHtcbiAgd2lkdGg6IDI1cmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCarouselExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-carousel-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/carousel/examples/4/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/carousel/examples/4/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCarouselExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCarouselExample4", function() { return TuiCarouselExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_dialog_dialog_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/dialog/dialog.directive */ "../core/components/dialog/dialog.directive.ts");
/* harmony import */ var _kit_components_carousel_carousel_buttons_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel-buttons.directive */ "../kit/components/carousel/carousel-buttons.directive.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.component */ "../kit/components/carousel/carousel.component.ts");
/* harmony import */ var _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/carousel/carousel.directive */ "../kit/components/carousel/carousel.directive.ts");
/* harmony import */ var _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../cdk/directives/item/item.directive */ "../cdk/directives/item/item.directive.ts");
/* harmony import */ var _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/pagination/pagination.component */ "../kit/components/pagination/pagination.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");














function TuiCarouselExample4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r1.background, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
} }
function TuiCarouselExample4_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Carousel is awesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "It can show arbitrary content and it's very easy to control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiCarouselExample4_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You can use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " component with size 's' together with it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiCarouselExample4_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "tuiCarouselButtons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " directive to setup navigation buttons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiCarouselExample4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart.passive.stop", function TuiCarouselExample4_ng_template_4_Template_div_touchstart_passive_stop_0_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample4_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.navigate(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiCarouselExample4_ng_template_4_Template_tui_carousel_indexChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiCarouselExample4_ng_template_4_div_3_Template, 5, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiCarouselExample4_ng_template_4_div_4_Template, 8, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiCarouselExample4_ng_template_4_div_5_Template, 8, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample4_ng_template_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navigate(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiCarouselExample4_ng_template_4_Template_tui_pagination_indexChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample4_ng_template_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.open = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Got it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx_r2.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 3)("index", ctx_r2.index);
} }
const _c0 = function (a1) { return { size: "s", header: a1 }; };
class TuiCarouselExample4 {
    constructor() {
        this.open = false;
        this.index = 0;
    }
    get background() {
        switch (this.index) {
            case 0:
                return `url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)`;
            case 1:
                return `url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)`;
            default:
                return `url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)`;
        }
    }
    onClick() {
        this.index = 0;
        this.open = true;
    }
    navigate(delta) {
        this.index = (this.index + delta) % 3;
    }
}
TuiCarouselExample4.ɵfac = function TuiCarouselExample4_Factory(t) { return new (t || TuiCarouselExample4)(); };
TuiCarouselExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCarouselExample4, selectors: [["tui-carousel-example-4"]], decls: 5, vars: 4, consts: [["tuiButton", "", "size", "m", 3, "click"], ["header", ""], [3, "tuiDialogOptions", "tuiDialog", "tuiDialogChange"], [1, "header"], ["tuiCarouselButtons", "", 1, "wrapper", 3, "touchstart.passive.stop"], ["tuiIconButton", "", "tuiMode", "onDark", "icon", "tuiIconChevronLeftLarge", 1, "tui-space_right-4", 3, "click"], [3, "index", "indexChange"], [4, "tuiItem"], ["tuiIconButton", "", "tuiMode", "onDark", "icon", "tuiIconChevronRightLarge", 1, "tui-space_left-4", 3, "click"], ["size", "s", 1, "tui-space_top-4", 3, "length", "index", "indexChange"], [1, "tui-space_top-4"], ["tuiButton", "", "appearance", "primary", 3, "click"], ["tuiLink", "", "routerLink", "/components/pagination"]], template: function TuiCarouselExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiCarouselExample4_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show dialog with carousel\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiCarouselExample4_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiCarouselExample4_ng_template_4_Template, 11, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiDialogChange", function TuiCarouselExample4_Template_ng_template_tuiDialogChange_4_listener($event) { return ctx.open = $event; });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDialogOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r0))("tuiDialog", ctx.open);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"], _core_components_dialog_dialog_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDialogDirective"], _kit_components_carousel_carousel_buttons_directive__WEBPACK_IMPORTED_MODULE_5__["TuiCarouselButtonsDirective"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__["TuiModeDirective"], _kit_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["TuiCarouselComponent"], _kit_components_carousel_carousel_directive__WEBPACK_IMPORTED_MODULE_8__["TuiCarouselDirective"], _cdk_directives_item_item_directive__WEBPACK_IMPORTED_MODULE_9__["TuiItemDirective"], _kit_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["TuiPaginationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_11__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 -5rem;\n}\ntui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: 0;\n}\ntui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  height: 10rem;\n  flex: 1;\n  background: var(--tui-base-01) center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2Fyb3VzZWwvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FES0o7QUNISTtFQUNJLFNBQUE7QURLUjtBQ05JO0VBSVEsYUFBQTtBREtaO0FDQUE7RUNxTkksK0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VEck5BLGFBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBRElKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJvdXNlbC9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAtNXJlbTtcbn1cbjpob3N0LWNvbnRleHQodHVpLXJvb3QuX21vYmlsZSkgLndyYXBwZXIge1xuICBtYXJnaW46IDA7XG59XG46aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpIC53cmFwcGVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDEpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgLTVyZW07XG5cbiAgICA6aG9zdC1jb250ZXh0KHR1aS1yb290Ll9tb2JpbGUpICYge1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIC50cmFuc2l0aW9uKGJhY2tncm91bmQpO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMSkgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCarouselExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-carousel-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-carousel-carousel-module.js.map