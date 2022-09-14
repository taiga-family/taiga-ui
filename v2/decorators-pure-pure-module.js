(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decorators-pure-pure-module"],{

/***/ "./src/modules/decorators/pure/pure-function.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/decorators/pure/pure-function.component.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiPureFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPureFunctionComponent", function() { return ExampleTuiPureFunctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");










function ExampleTuiPureFunctionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Result: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.calculate(ctx_r0.counter, ctx_r0.text)), " ");
} }
class ExampleTuiPureFunctionComponent {
    constructor() {
        this.text = ``;
        this.show = false;
        this.counter = {
            count: 0,
        };
    }
    calculate(counter, text) {
        counter.count++;
        return {
            text,
        };
    }
}
ExampleTuiPureFunctionComponent.ɵfac = function ExampleTuiPureFunctionComponent_Factory(t) { return new (t || ExampleTuiPureFunctionComponent)(); };
ExampleTuiPureFunctionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiPureFunctionComponent, selectors: [["example-tui-pure-function"]], decls: 7, vars: 3, consts: [[3, "ngModel", "ngModelChange"], [1, "tui-space_top-2"], ["class", "tui-space_top-2", 4, "ngIf"], ["tuiButton", "", "type", "button", 1, "tui-space_top-2", 3, "click"]], template: function ExampleTuiPureFunctionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExampleTuiPureFunctionComponent_Template_tui_input_ngModelChange_0_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type a text to start computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExampleTuiPureFunctionComponent_div_4_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleTuiPureFunctionComponent_Template_button_click_5_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Show/hide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Called times: ", ctx.counter.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], ExampleTuiPureFunctionComponent.prototype, "calculate", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPureFunctionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-pure-function`,
                template: `
        <tui-input [(ngModel)]="text">Type a text to start computing</tui-input>
        <div class="tui-space_top-2">Called times: {{ counter.count }}</div>
        <div
            *ngIf="show"
            class="tui-space_top-2"
        >
            Result: {{ calculate(counter, text) | json }}
        </div>
        <button
            tuiButton
            type="button"
            class="tui-space_top-2"
            (click)="show = !show"
        >
            Show/hide
        </button>
    `,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, { calculate: [] }); })();


/***/ }),

/***/ "./src/modules/decorators/pure/pure-getter.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/decorators/pure/pure-getter.component.ts ***!
  \**************************************************************/
/*! exports provided: ExampleTuiPureGetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPureGetterComponent", function() { return ExampleTuiPureGetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");







function ExampleTuiPureGetterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" fibonacci(42) = ", ctx_r0.fibonacci42, " ");
} }
class ExampleTuiPureGetterComponent {
    constructor() {
        this.show = false;
    }
    get fibonacci42() {
        return this.fibonacci(42);
    }
    fibonacci(num) {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
ExampleTuiPureGetterComponent.ɵfac = function ExampleTuiPureGetterComponent_Factory(t) { return new (t || ExampleTuiPureGetterComponent)(); };
ExampleTuiPureGetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiPureGetterComponent, selectors: [["example-tui-pure-getter"]], decls: 3, vars: 1, consts: [["class", "tui-space_bottom-2", 4, "ngIf"], ["tuiButton", "", "type", "button", 3, "click"], [1, "tui-space_bottom-2"]], template: function ExampleTuiPureGetterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExampleTuiPureGetterComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleTuiPureGetterComponent_Template_button_click_1_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Show/hide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], ExampleTuiPureGetterComponent.prototype, "fibonacci42", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPureGetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-pure-getter`,
                template: `
        <div
            *ngIf="show"
            class="tui-space_bottom-2"
        >
            fibonacci(42) = {{ fibonacci42 }}
        </div>
        <button
            tuiButton
            type="button"
            (click)="show = !show"
        >
            Show/hide
        </button>
    `,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, { fibonacci42: [] }); })();


/***/ }),

/***/ "./src/modules/decorators/pure/pure.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/decorators/pure/pure.component.ts ***!
  \*******************************************************/
/*! exports provided: ExampleTuiPureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPureComponent", function() { return ExampleTuiPureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _pure_getter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pure-getter.component */ "./src/modules/decorators/pure/pure-getter.component.ts");
/* harmony import */ var _pure_function_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pure-function.component */ "./src/modules/decorators/pure/pure-function.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8407130897675501150$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS_1 = goog.getMsg("Pure");
    I18N_0 = MSG_EXTERNAL_8407130897675501150$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟6249527401fcb0d799fa087f686f23631ee46d68␟8407130897675501150:Pure`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1148608671765112042$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__4 = goog.getMsg(" Decorator for memoization of pure methods and getters ");
    I18N_3 = MSG_EXTERNAL_1148608671765112042$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟142c568583ee039615277b4178286ae0e46d0a56␟1148608671765112042: Decorator for memoization of pure methods and getters `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3548121292842881971$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__6 = goog.getMsg(" Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. ");
    I18N_5 = MSG_EXTERNAL_3548121292842881971$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟9d29b6ee04acfecfe75f18bae0fa042d03b79059␟3548121292842881971: Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3953858282355707646$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__8 = goog.getMsg(" If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) ");
    I18N_7 = MSG_EXTERNAL_3953858282355707646$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟91891ea88cb5adde84d0b27755b41736c3a16a21␟3953858282355707646: If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) `;
}
function ExampleTuiPureComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "example-tui-pure-getter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "example-tui-pure-function");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4481678507740450627$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__10 = goog.getMsg(" Add {$startTagCode}@tuiPure{$closeTagCode} decorator for your method or getter: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_9 = MSG_EXTERNAL_4481678507740450627$$SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟e7d602a6de31264108144aacb875f1e2b860de05␟4481678507740450627: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiPure${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: decorator for your method or getter: `;
}
function ExampleTuiPureComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleDecorator);
} }
class ExampleTuiPureComponent {
    constructor() {
        this.exampleDecorator = __webpack_require__.e(/*! import() | !raw-loader!-import-example-decorator-md */ "!!raw-loader!-import-example-decorator-md").then(__webpack_require__.bind(null, /*! !raw-loader!./import/example-decorator.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/import/example-decorator.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-pure-getter-component-ts */ "!!raw-loader!-pure-getter-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./pure-getter.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/pure-getter.component.ts")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-pure-function-component-ts */ "!!raw-loader!-pure-function-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./pure-function.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/pure-function.component.ts")),
        };
    }
}
ExampleTuiPureComponent.ɵfac = function ExampleTuiPureComponent_Factory(t) { return new (t || ExampleTuiPureComponent)(); };
ExampleTuiPureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPureComponent, selectors: [["example-tui-pure"]], decls: 4, vars: 0, consts: [["package", "CDK", "path", "cdk/decorators/pure.ts", 6, "header"], ["pageTab", ""], ["pageTab", "Setup"], [1, "tui-space_bottom-3"], ["id", "getter", "heading", "Getter", 3, "content"], ["id", "function", "heading", "Function", 3, "content"], [1, "b-demo-steps"], ["filename", "myClass.component.ts", 3, "code"]], template: function ExampleTuiPureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPureComponent_ng_template_2_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPureComponent_ng_template_3_Template, 6, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _pure_getter_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPureGetterComponent"], _pure_function_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiPureFunctionComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-pure`,
                templateUrl: `./pure.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/decorators/pure/pure.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/decorators/pure/pure.module.ts ***!
  \****************************************************/
/*! exports provided: ExampleTuiPureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPureModule", function() { return ExampleTuiPureModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _pure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pure.component */ "./src/modules/decorators/pure/pure.component.ts");
/* harmony import */ var _pure_function_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pure-function.component */ "./src/modules/decorators/pure/pure-function.component.ts");
/* harmony import */ var _pure_getter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pure-getter.component */ "./src/modules/decorators/pure/pure-getter.component.ts");












class ExampleTuiPureModule {
}
ExampleTuiPureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPureModule });
ExampleTuiPureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPureModule_Factory(t) { return new (t || ExampleTuiPureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPureModule, { declarations: [_pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"],
        _pure_function_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPureFunctionComponent"],
        _pure_getter_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPureGetterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"])),
                ],
                declarations: [
                    _pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"],
                    _pure_function_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiPureFunctionComponent"],
                    _pure_getter_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiPureGetterComponent"],
                ],
                exports: [_pure_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiPureComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=decorators-pure-pure-module.js.map