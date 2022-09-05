(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animations-animations-module"],{

/***/ "./src/modules/animations/animations.component.ts":
/*!********************************************************!*\
  !*** ./src/modules/animations/animations.component.ts ***!
  \********************************************************/
/*! exports provided: ExampleAnimationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleAnimationsComponent", function() { return ExampleAnimationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../kit/components/slider/slider.component */ "../kit/components/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_height_collapse_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/height-collapse/index */ "./src/modules/animations/examples/height-collapse/index.ts");
/* harmony import */ var _examples_width_collapse_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/width-collapse/index */ "./src/modules/animations/examples/width-collapse/index.ts");
/* harmony import */ var _examples_fade_in_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/fade-in/index */ "./src/modules/animations/examples/fade-in/index.ts");
/* harmony import */ var _examples_scale_in_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/scale-in/index */ "./src/modules/animations/examples/scale-in/index.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2709889076680757048$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS_1 = goog.getMsg("Animations");
    I18N_0 = MSG_EXTERNAL_2709889076680757048$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟d856176ecb16df2b1e026cdd78ff47f5617c1d8f␟2709889076680757048:Animations`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6578685648644320764$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__4 = goog.getMsg("tuiHeightCollapse");
    I18N_3 = MSG_EXTERNAL_6578685648644320764$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟6ce57a7a4a8c0efdb9cd9763d89fe5640d02869f␟6578685648644320764:tuiHeightCollapse`;
}
const _c5 = ["heading", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4773585259038695433$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__7 = goog.getMsg("tuiWidthCollapse");
    I18N_6 = MSG_EXTERNAL_4773585259038695433$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟ea61c9fff1171068ac9498268f922916ccac68ef␟4773585259038695433:tuiWidthCollapse`;
}
const _c8 = ["heading", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3526834327837928544$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__10 = goog.getMsg("tuiFadeIn");
    I18N_9 = MSG_EXTERNAL_3526834327837928544$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟d8f0786595d548f8b778dfd18cf819e585efe62e␟3526834327837928544:tuiFadeIn`;
}
const _c11 = ["heading", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5629053012471828640$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__13 = goog.getMsg("tuiScaleIn");
    I18N_12 = MSG_EXTERNAL_5629053012471828640$$SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟6c0dd4468bea2f1564e06b0781ee7dc2b055e0ea␟5629053012471828640:tuiScaleIn`;
}
const _c14 = ["heading", I18N_12];
function ExampleAnimationsComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r2, "ms ");
} }
function ExampleAnimationsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleAnimationsComponent_ng_template_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.speed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleAnimationsComponent_ng_template_2_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-height-collapse-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-width-collapse-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-fade-in-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-scale-in-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("segments", 5)("min", 0)("max", 3000)("step", 100)("ngModel", ctx_r0.speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.speedTicksLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.heightCollapseExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speed", ctx_r0.speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.widthCollapseExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speed", ctx_r0.speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.fadeInExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speed", ctx_r0.speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.scaleInExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speed", ctx_r0.speed);
} }
class ExampleAnimationsComponent {
    constructor() {
        this.speed = 1000;
        this.speedTicksLabels = [0, 600, 1200, 1800, 2400, 3000];
        this.heightCollapseExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-height-collapse-index-html */ "!!raw-loader!-examples-height-collapse-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/height-collapse/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/height-collapse/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-height-collapse-index-ts */ "!!raw-loader!-examples-height-collapse-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/height-collapse/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/height-collapse/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-height-collapse-index-less */ "!!raw-loader!-examples-height-collapse-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/height-collapse/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/height-collapse/index.less")),
        };
        this.widthCollapseExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-width-collapse-index-html */ "!!raw-loader!-examples-width-collapse-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/width-collapse/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/width-collapse/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-width-collapse-index-ts */ "!!raw-loader!-examples-width-collapse-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/width-collapse/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/width-collapse/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-width-collapse-index-less */ "!!raw-loader!-examples-width-collapse-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/width-collapse/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/width-collapse/index.less")),
        };
        this.fadeInExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-fade-in-index-html */ "!!raw-loader!-examples-fade-in-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/fade-in/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/fade-in/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-fade-in-index-ts */ "!!raw-loader!-examples-fade-in-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/fade-in/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/fade-in/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-fade-in-index-less */ "!!raw-loader!-examples-fade-in-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/fade-in/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/fade-in/index.less")),
        };
        this.scaleInExample = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-scale-in-index-html */ "!!raw-loader!-examples-scale-in-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/scale-in/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-scale-in-index-ts */ "!!raw-loader!-examples-scale-in-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/scale-in/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-scale-in-index-less */ "!!raw-loader!-examples-scale-in-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/scale-in/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.less")),
        };
    }
}
ExampleAnimationsComponent.ɵfac = function ExampleAnimationsComponent_Factory(t) { return new (t || ExampleAnimationsComponent)(); };
ExampleAnimationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleAnimationsComponent, selectors: [["example-animations"]], decls: 3, vars: 0, consts: [["package", "CORE", "path", "core/animations", 6, "header"], ["pageTab", ""], ["tuiLabel", "", "label", "Speed of animations:"], ["tuiSlider", "", "type", "range", 3, "segments", "min", "max", "step", "ngModel", "ngModelChange"], [1, "labels"], ["class", "label", 4, "ngFor", "ngForOf"], ["id", "tuiHeightCollapse", 3, "content", 6, "heading"], [3, "speed"], ["id", "tuiWidthCollapse", 3, "content", 6, "heading"], ["id", "tuiFadeIn", 3, "content", 6, "heading"], ["id", "tuiScaleIn", 3, "content", 6, "heading"], [1, "label"]], template: function ExampleAnimationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleAnimationsComponent_ng_template_2_Template, 16, 14, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["TuiLabelComponent"], _kit_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["TuiSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_height_collapse_index__WEBPACK_IMPORTED_MODULE_9__["TuiHeightCollapseExample"], _examples_width_collapse_index__WEBPACK_IMPORTED_MODULE_10__["TuiWidthCollapseExample"], _examples_fade_in_index__WEBPACK_IMPORTED_MODULE_11__["TuiFadeInExample"], _examples_scale_in_index__WEBPACK_IMPORTED_MODULE_12__["TuiScaleInExample"]], styles: [".labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n}\n.labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9hbmltYXRpb25zLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3NsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUNLSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBRkNKO0FFQ0k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBRkNSO0FFQ1E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FGQ1o7QUVFUTtFQUNJLGNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUZBWjtBRUlJO0VBQ0ksbURBQUE7QUZGUjtBRUtJOztFQUdJLGlCQUFBO0VBQ0Esa0JBQUE7QUZKUjtBRU9ZOztFQUNJLFdBQUE7QUZKaEI7QUVPWTs7RUFDSSxZQUFBO0FGSmhCIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9hbmltYXRpb25zLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ubGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbn1cbi5sYWJlbHMgPiAqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubGFiZWxzID4gKjpsYXN0LWNoaWxkIHtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudHVpLWlucHV0LXNsaWRlciArIC5sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIDAuNXJlbSk7XG59XG50dWktaW5wdXQtcmFuZ2UgKyAubGFiZWxzLFxudHVpLXJhbmdlICsgLmxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAubGFiZWxzID4gKjpmaXJzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC5sYWJlbHMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogLTFyZW07XG59XG50dWktaW5wdXQtcmFuZ2UgKyAubGFiZWxzID4gKjpsYXN0LWNoaWxkLFxudHVpLXJhbmdlICsgLmxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmxhYmVscyB7XG4gICAgLnR1aS1zbGlkZXItdGlja3MtbGFiZWxzKG0pO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleAnimationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-animations`,
                templateUrl: `./animations.template.html`,
                styleUrls: [`./animations.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/animations/animations.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/animations/animations.module.ts ***!
  \*****************************************************/
/*! exports provided: ExampleAnimationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleAnimationsModule", function() { return ExampleAnimationsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _animations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations.component */ "./src/modules/animations/animations.component.ts");
/* harmony import */ var _examples_fade_in__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/fade-in */ "./src/modules/animations/examples/fade-in/index.ts");
/* harmony import */ var _examples_height_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/height-collapse */ "./src/modules/animations/examples/height-collapse/index.ts");
/* harmony import */ var _examples_scale_in__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/scale-in */ "./src/modules/animations/examples/scale-in/index.ts");
/* harmony import */ var _examples_width_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/width-collapse */ "./src/modules/animations/examples/width-collapse/index.ts");















class ExampleAnimationsModule {
}
ExampleAnimationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleAnimationsModule });
ExampleAnimationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleAnimationsModule_Factory(t) { return new (t || ExampleAnimationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiLetModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_animations_component__WEBPACK_IMPORTED_MODULE_8__["ExampleAnimationsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleAnimationsModule, { declarations: [_animations_component__WEBPACK_IMPORTED_MODULE_8__["ExampleAnimationsComponent"],
        _examples_height_collapse__WEBPACK_IMPORTED_MODULE_10__["TuiHeightCollapseExample"],
        _examples_width_collapse__WEBPACK_IMPORTED_MODULE_12__["TuiWidthCollapseExample"],
        _examples_fade_in__WEBPACK_IMPORTED_MODULE_9__["TuiFadeInExample"],
        _examples_scale_in__WEBPACK_IMPORTED_MODULE_11__["TuiScaleInExample"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiLetModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleAnimationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSliderModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiLetModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_animations_component__WEBPACK_IMPORTED_MODULE_8__["ExampleAnimationsComponent"])),
                ],
                declarations: [
                    _animations_component__WEBPACK_IMPORTED_MODULE_8__["ExampleAnimationsComponent"],
                    _examples_height_collapse__WEBPACK_IMPORTED_MODULE_10__["TuiHeightCollapseExample"],
                    _examples_width_collapse__WEBPACK_IMPORTED_MODULE_12__["TuiWidthCollapseExample"],
                    _examples_fade_in__WEBPACK_IMPORTED_MODULE_9__["TuiFadeInExample"],
                    _examples_scale_in__WEBPACK_IMPORTED_MODULE_11__["TuiScaleInExample"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/animations/examples/fade-in/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/animations/examples/fade-in/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiFadeInExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFadeInExample", function() { return TuiFadeInExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");










function TuiFadeInExample_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " STOP KILLING VOLCANOES TO MAKE LAVA LAMPS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tuiFadeIn", ctx_r0.getAnimation(ctx_r0.speed));
} }
class TuiFadeInExample {
    constructor() {
        this.speed = 0;
        this.isShown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])([false, true]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(val => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(val).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1.5 * this.speed))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(true));
    }
    getAnimation(duration) {
        return { value: ``, params: { duration } };
    }
}
TuiFadeInExample.ɵfac = function TuiFadeInExample_Factory(t) { return new (t || TuiFadeInExample)(); };
TuiFadeInExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiFadeInExample, selectors: [["tui-fade-in-example"]], inputs: { speed: "speed" }, decls: 3, vars: 3, consts: [[1, "poster"], [4, "ngIf"]], template: function TuiFadeInExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiFadeInExample_h3_1_Template, 2, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.isShown$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".poster[_ngcontent-%COMP%] {\n  height: 3rem;\n  border: 5px solid var(--tui-base-03);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy9mYWRlLWluL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2FuaW1hdGlvbnMvZXhhbXBsZXMvZmFkZS1pbi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2FuaW1hdGlvbnMvZXhhbXBsZXMvZmFkZS1pbi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RlciB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXR1aS1iYXNlLTAzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIucG9zdGVyIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS10dWktYmFzZS0wMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"], data: { animation: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiFadeIn"]] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiFadeInExample.prototype, "getAnimation", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiFadeInExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-fade-in-example`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                animations: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiFadeIn"]],
            }]
    }], null, { speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getAnimation: [] }); })();


/***/ }),

/***/ "./src/modules/animations/examples/height-collapse/index.ts":
/*!******************************************************************!*\
  !*** ./src/modules/animations/examples/height-collapse/index.ts ***!
  \******************************************************************/
/*! exports provided: TuiHeightCollapseExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiHeightCollapseExample", function() { return TuiHeightCollapseExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiHeightCollapseExample_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A long time ago in a galaxy far, far away....\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tuiHeightCollapse", ctx_r0.getAnimation(ctx_r0.speed));
} }
class TuiHeightCollapseExample {
    constructor() {
        this.speed = 0;
        this.isOpen = false;
    }
    getAnimation(duration) {
        return { value: ``, params: { duration } };
    }
}
TuiHeightCollapseExample.ɵfac = function TuiHeightCollapseExample_Factory(t) { return new (t || TuiHeightCollapseExample)(); };
TuiHeightCollapseExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiHeightCollapseExample, selectors: [["tui-height-collapse-example"]], inputs: { speed: "speed" }, decls: 3, vars: 2, consts: [["tuiButton", "", "appearance", "outline", 1, "button", 3, "click"], ["class", "container", 4, "ngIf"], [1, "container"]], template: function TuiHeightCollapseExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiHeightCollapseExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiHeightCollapseExample_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isOpen ? "Hide me" : "Show opening crawl", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".button[_ngcontent-%COMP%] {\n  width: 15rem;\n  border-radius: 1rem 1rem 0 0;\n}\n.container[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: 15rem;\n  background: var(--tui-secondary);\n  overflow: hidden;\n  background: #222;\n  color: var(--tui-warning-fill-night);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy9oZWlnaHQtY29sbGFwc2UvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy9oZWlnaHQtY29sbGFwc2UvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDRkoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9hbmltYXRpb25zL2V4YW1wbGVzL2hlaWdodC1jb2xsYXBzZS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHdpZHRoOiAxNXJlbTtcblxuLmJ1dHRvbiB7XG4gICAgd2lkdGg6IEB3aWR0aDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgd2lkdGg6IEB3aWR0aDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgY29sb3I6IHZhcigtLXR1aS13YXJuaW5nLWZpbGwtbmlnaHQpO1xufVxuIiwiLmJ1dHRvbiB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcbn1cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDZyZW07XG4gIHdpZHRoOiAxNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiB2YXIoLS10dWktd2FybmluZy1maWxsLW5pZ2h0KTtcbn1cbiJdfQ== */"], data: { animation: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiHeightCollapse"]] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiHeightCollapseExample.prototype, "getAnimation", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiHeightCollapseExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-height-collapse-example`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                animations: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiHeightCollapse"]],
            }]
    }], null, { speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getAnimation: [] }); })();


/***/ }),

/***/ "./src/modules/animations/examples/scale-in/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/animations/examples/scale-in/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiScaleInExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiScaleInExample", function() { return TuiScaleInExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");









function TuiScaleInExample_li_5_tui_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-svg", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tuiScaleIn", ctx_r2.getAnimation(ctx_r2.speed));
} }
function TuiScaleInExample_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiScaleInExample_li_5_Template_li_click_0_listener() { const task_r1 = ctx.$implicit; return task_r1.completed = !task_r1.completed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiScaleInExample_li_5_tui_svg_2_Template, 1, 1, "tui-svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", task_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r1.completed);
} }
class TuiScaleInExample {
    constructor() {
        this.speed = 0;
        this.todoTasks = [
            { title: `Install Angular`, completed: true },
            { title: `Install Taiga UI`, completed: false },
            { title: `Look into "Getting Started"`, completed: false },
        ];
    }
    getAnimation(duration) {
        return { value: ``, params: { duration } };
    }
}
TuiScaleInExample.ɵfac = function TuiScaleInExample_Factory(t) { return new (t || TuiScaleInExample)(); };
TuiScaleInExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiScaleInExample, selectors: [["tui-scale-in-example"]], inputs: { speed: "speed" }, decls: 6, vars: 1, consts: [[1, "tui-list"], ["class", "tui-list__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "tui-list__item", 3, "click"], ["src", "tuiIconCheckLarge", 4, "ngIf"], ["src", "tuiIconCheckLarge"]], template: function TuiScaleInExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "TODO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(click on item if it is finished)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TuiScaleInExample_li_5_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todoTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"]], styles: ["li[_ngcontent-%COMP%] {\n  height: 2rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy9zY2FsZS1pbi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9hbmltYXRpb25zL2V4YW1wbGVzL3NjYWxlLWluL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy9zY2FsZS1pbi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCJsaSB7XG4gIGhlaWdodDogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"], data: { animation: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiScaleIn"]] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiScaleInExample.prototype, "getAnimation", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiScaleInExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-scale-in-example`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                animations: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiScaleIn"]],
            }]
    }], null, { speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getAnimation: [] }); })();


/***/ }),

/***/ "./src/modules/animations/examples/width-collapse/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/animations/examples/width-collapse/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiWidthCollapseExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiWidthCollapseExample", function() { return TuiWidthCollapseExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiWidthCollapseExample_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@tuiWidthCollapse", ctx_r0.getAnimation(ctx_r0.speed));
} }
class TuiWidthCollapseExample {
    constructor() {
        this.speed = 0;
        this.isOpen = true;
    }
    getAnimation(duration) {
        return { value: ``, params: { duration } };
    }
}
TuiWidthCollapseExample.ɵfac = function TuiWidthCollapseExample_Factory(t) { return new (t || TuiWidthCollapseExample)(); };
TuiWidthCollapseExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiWidthCollapseExample, selectors: [["tui-width-collapse-example"]], inputs: { speed: "speed" }, decls: 3, vars: 2, consts: [["tuiButton", "", "appearance", "outline", "size", "xs", 1, "switch", 3, "click"], ["class", "plasma", 4, "ngIf"], [1, "plasma"]], template: function TuiWidthCollapseExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiWidthCollapseExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiWidthCollapseExample_div_2_Template, 1, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isOpen ? "ON" : "OFF", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 20%;\n  border-radius: 1rem 0 0 1rem;\n}\n.plasma[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 0.5rem;\n  border-radius: 0 0.75rem 0.75rem 0;\n  background: linear-gradient(to bottom, var(--tui-support-03) 0%, white 50%, white 70%, var(--tui-support-03) 100%);\n  filter: blur(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy93aWR0aC1jb2xsYXBzZS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9hbmltYXRpb25zL2V4YW1wbGVzL3dpZHRoLWNvbGxhcHNlL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0hBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvYW5pbWF0aW9ucy9leGFtcGxlcy93aWR0aC1jb2xsYXBzZS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3aXRjaCB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDAgMXJlbTtcbn1cblxuLnBsYXNtYSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuNzVyZW0gMC43NXJlbSAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXR1aS1zdXBwb3J0LTAzKSAwJSwgd2hpdGUgNTAlLCB3aGl0ZSA3MCUsIHZhcigtLXR1aS1zdXBwb3J0LTAzKSAxMDAlKTtcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zd2l0Y2gge1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMCAwIDFyZW07XG59XG4ucGxhc21hIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMC43NXJlbSAwLjc1cmVtIDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXR1aS1zdXBwb3J0LTAzKSAwJSwgd2hpdGUgNTAlLCB3aGl0ZSA3MCUsIHZhcigtLXR1aS1zdXBwb3J0LTAzKSAxMDAlKTtcbiAgZmlsdGVyOiBibHVyKDFweCk7XG59XG4iXX0= */"], data: { animation: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiWidthCollapse"]] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiWidthCollapseExample.prototype, "getAnimation", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiWidthCollapseExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-width-collapse-example`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                animations: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["tuiWidthCollapse"]],
            }]
    }], null, { speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getAnimation: [] }); })();


/***/ })

}]);
//# sourceMappingURL=animations-animations-module.js.map