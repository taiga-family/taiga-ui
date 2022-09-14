(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customization-variables-variables-module"],{

/***/ "./src/modules/customization/variables/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/customization/variables/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiVariablesExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiVariablesExample1", function() { return TuiVariablesExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");









class TuiVariablesExample1 {
    constructor() {
        this.value = ``;
        this.checkbox = true;
    }
}
TuiVariablesExample1.ɵfac = function TuiVariablesExample1_Factory(t) { return new (t || TuiVariablesExample1)(); };
TuiVariablesExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiVariablesExample1, selectors: [["tui-variables-example-1"]], decls: 6, vars: 3, consts: [[3, "hoverable"], [3, "ngModel", "ngModelChange"], [1, "tui-space_top-4"], ["size", "l", 3, "ngModel", "ngModelChange"]], template: function TuiVariablesExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiVariablesExample1_Template_tui_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-checkbox-labeled", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiVariablesExample1_Template_tui_checkbox_labeled_ngModelChange_4_listener($event) { return ctx.checkbox = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Checkbox example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkbox);
    } }, directives: [_kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_3__["TuiIslandComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledComponent"]], styles: ["[_nghost-%COMP%] {\n  --tui-font-text: 'Comic Sans MS', cursive;\n  --tui-font-text-m: bold 1rem/1.5rem var(--tui-font-text);\n  --tui-font-text-s: normal 0.5rem/1.25rem var(--tui-font-text);\n  --tui-primary: #c86dd7;\n  --tui-primary-hover: #a456b1;\n  --tui-primary-active: #7f3b8a;\n  --tui-primary-text: #fff;\n  --tui-radius-s: 0;\n  --tui-radius-m: 0.25rem;\n  --tui-height-l: 4.375rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi92YXJpYWJsZXMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jdXN0b21pemF0aW9uL3ZhcmlhYmxlcy9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLHdEQUFBO0VBQ0EsNkRBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi92YXJpYWJsZXMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tdHVpLWZvbnQtdGV4dDogJ0NvbWljIFNhbnMgTVMnLCBjdXJzaXZlO1xuICAgIC0tdHVpLWZvbnQtdGV4dC1tOiBib2xkIDFyZW0vMS41cmVtIHZhcigtLXR1aS1mb250LXRleHQpO1xuICAgIC0tdHVpLWZvbnQtdGV4dC1zOiBub3JtYWwgMC41cmVtLzEuMjVyZW0gdmFyKC0tdHVpLWZvbnQtdGV4dCk7XG4gICAgLS10dWktcHJpbWFyeTogI2M4NmRkNztcbiAgICAtLXR1aS1wcmltYXJ5LWhvdmVyOiAjYTQ1NmIxO1xuICAgIC0tdHVpLXByaW1hcnktYWN0aXZlOiAjN2YzYjhhO1xuICAgIC0tdHVpLXByaW1hcnktdGV4dDogI2ZmZjtcbiAgICAtLXR1aS1yYWRpdXMtczogMDtcbiAgICAtLXR1aS1yYWRpdXMtbTogMC4yNXJlbTtcbiAgICAtLXR1aS1oZWlnaHQtbDogNC4zNzVyZW07XG59XG4iLCI6aG9zdCB7XG4gIC0tdHVpLWZvbnQtdGV4dDogJ0NvbWljIFNhbnMgTVMnLCBjdXJzaXZlO1xuICAtLXR1aS1mb250LXRleHQtbTogYm9sZCAxcmVtLzEuNXJlbSB2YXIoLS10dWktZm9udC10ZXh0KTtcbiAgLS10dWktZm9udC10ZXh0LXM6IG5vcm1hbCAwLjVyZW0vMS4yNXJlbSB2YXIoLS10dWktZm9udC10ZXh0KTtcbiAgLS10dWktcHJpbWFyeTogI2M4NmRkNztcbiAgLS10dWktcHJpbWFyeS1ob3ZlcjogI2E0NTZiMTtcbiAgLS10dWktcHJpbWFyeS1hY3RpdmU6ICM3ZjNiOGE7XG4gIC0tdHVpLXByaW1hcnktdGV4dDogI2ZmZjtcbiAgLS10dWktcmFkaXVzLXM6IDA7XG4gIC0tdHVpLXJhZGl1cy1tOiAwLjI1cmVtO1xuICAtLXR1aS1oZWlnaHQtbDogNC4zNzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiVariablesExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-variables-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/variables/variables.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/customization/variables/variables.component.ts ***!
  \********************************************************************/
/*! exports provided: VariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesComponent", function() { return VariablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/customization/variables/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4467462789627316821$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_1 = goog.getMsg("Variables");
    I18N_0 = MSG_EXTERNAL_4467462789627316821$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟f014ca169762f17944612b404ca3277a0ff46b04␟4467462789627316821:Variables`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1632021933702754681$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_4 = goog.getMsg(" Taiga UI uses CSS custom properties for many of its visual aspects. You can see {$startLink} colors {$closeLink} for the full list of color variables. ", { "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_3 = MSG_EXTERNAL_1632021933702754681$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟5bfe32b26e1e4d60bcb63a2ab52042abc3588a5d␟1632021933702754681: Taiga UI uses CSS custom properties for many of its visual aspects. You can see ${"\uFFFD#4\uFFFD"}:START_LINK: colors ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: for the full list of color variables. `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_163740347890303905$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_6 = goog.getMsg("Besides colors there are also following variables that can be adjusted at any level of DOM structure:");
    I18N_5 = MSG_EXTERNAL_163740347890303905$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:␟a4f75da9c1ff87f6cd13c629b6f4bea46a0de501␟163740347890303905:Besides colors there are also following variables that can be adjusted at any level of DOM structure:`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2655444008267344766$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_8 = goog.getMsg(" An easy way to dynamically override variables is to use a {$startLink}{$startTagCode}ThemeSwitcher{$closeTagCode}{$closeLink} . This is how {$startLink_1}{$startTagCode}ThemeNight{$closeTagCode}{$closeLink} does it. ", { "startLink": "\uFFFD#12\uFFFD", "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD]", "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD]", "closeLink": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]", "startLink_1": "\uFFFD#14\uFFFD" });
    I18N_7 = MSG_EXTERNAL_2655444008267344766$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:␟bf9c19cc699aeb68adfd762067f0bc91ef2d1c14␟2655444008267344766: An easy way to dynamically override variables is to use a ${"\uFFFD#12\uFFFD"}:START_LINK:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:ThemeSwitcher${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_LINK: . This is how ${"\uFFFD#14\uFFFD"}:START_LINK_1:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:ThemeNight${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_LINK: does it. `;
}
I18N_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_7);
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1809364622633527376$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_10 = goog.getMsg("Override example");
    I18N_9 = MSG_EXTERNAL_1809364622633527376$$SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:␟d557ac3c1cb761db5ba264036accec4aca3c6d98␟1809364622633527376:Override example`;
}
const _c11 = ["heading", I18N_9];
function VariablesComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-doc-copy", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", item_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2014 ", item_r1.value, " ");
} }
class VariablesComponent {
    constructor() {
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/variables/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/variables/examples/1/index.less")),
        };
        this.vars = {
            '--tui-font-heading': `font for headings`,
            '--tui-font-text': `font for text`,
            '--tui-radius-xs': `border radius for smallest items (i.e. small checkbox)`,
            '--tui-radius-s': `border radius for small elements (i.e. tags)`,
            '--tui-radius-m': `default border radius`,
            '--tui-radius-l': `border radius for containers (i.e. hint, accordion)`,
            '--tui-height-xs': `smallest elements height (i.e. small button, badges)`,
            '--tui-height-s': `small elements height (i.e. small inputs)`,
            '--tui-height-m': `default elements height (i.e. inputs, buttons)`,
            '--tui-height-l': `large elements height (i.e. inputs, buttons)`,
            '--tui-padding-s': `padding for inputs with size "s"`,
            '--tui-padding-m': `padding for inputs with size "m"`,
            '--tui-padding-l': `padding for inputs with size "l"`,
            '--tui-disabled-opacity': `amount of transparency for disabled elements`,
            '--tui-autofill': `color for native browser autofill`,
        };
    }
}
VariablesComponent.ɵfac = function VariablesComponent_Factory(t) { return new (t || VariablesComponent)(); };
VariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariablesComponent, selectors: [["variables"]], decls: 19, vars: 4, consts: [[6, "header"], ["tuiLink", "", "routerLink", "/colors"], [4, "ngFor", "ngForOf"], ["tuiLink", "", "routerLink", "/components/theme-switcher"], ["tuiLink", "", "routerLink", "/components/theme-night"], ["id", "override", 3, "content", 6, "heading"], [1, "var", 3, "cdkCopyToClipboard"]], template: function VariablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VariablesComponent_li_8_Template, 5, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-doc-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](17, _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-variables-example-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.vars));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.example1);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiVariablesExample1"], _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["CdkCopyToClipboard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `variables`,
                templateUrl: `./variables.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/variables/variables.module.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/customization/variables/variables.module.ts ***!
  \*****************************************************************/
/*! exports provided: VariablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesModule", function() { return VariablesModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/customization/variables/examples/1/index.ts");
/* harmony import */ var _variables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variables.component */ "./src/modules/customization/variables/variables.component.ts");












class VariablesModule {
}
VariablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VariablesModule });
VariablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function VariablesModule_Factory(t) { return new (t || VariablesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"])),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VariablesModule, { declarations: [_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiVariablesExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VariablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiIslandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"])),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ],
                declarations: [_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiVariablesExample1"]],
                exports: [_variables_component__WEBPACK_IMPORTED_MODULE_9__["VariablesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customization-variables-variables-module.js.map