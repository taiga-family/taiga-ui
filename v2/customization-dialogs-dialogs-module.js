(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customization-dialogs-dialogs-module"],{

/***/ "./src/modules/customization/dialogs/dialogs.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/customization/dialogs/dialogs.component.ts ***!
  \****************************************************************/
/*! exports provided: DialogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsComponent", function() { return DialogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/customization/dialogs/examples/1/index.ts");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8564515230059500750$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_1 = goog.getMsg("Dialogs");
    I18N_0 = MSG_EXTERNAL_8564515230059500750$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4814027570249937937$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_4 = goog.getMsg(" You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. ");
    I18N_3 = MSG_EXTERNAL_4814027570249937937$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟b3386f18bd4651b9452168426edf7f122d7f1fc1␟4814027570249937937: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2620483019814878192$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_6 = goog.getMsg("Custom dialog");
    I18N_5 = MSG_EXTERNAL_2620483019814878192$$SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`;
}
const _c7 = ["heading", I18N_5];
class DialogsComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/index.less")),
            'prompt/prompt.service.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-service-ts */ "!!raw-loader!-examples-1-prompt-prompt-service-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt.service.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts")),
            'prompt/prompt-options.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-options-ts */ "!!raw-loader!-examples-1-prompt-prompt-options-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt-options.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt-options.ts")),
            'prompt/prompt.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-component-ts */ "!!raw-loader!-examples-1-prompt-prompt-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.component.ts")),
            'prompt/prompt.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-template-html */ "!!raw-loader!-examples-1-prompt-prompt-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.template.html")),
            'prompt/prompt.style.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-style-less */ "!!raw-loader!-examples-1-prompt-prompt-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.style.less")),
            'prompt/prompt.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-prompt-prompt-module */ "!!raw-loader!-examples-1-prompt-prompt-module").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/prompt/prompt.module */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts")),
        };
    }
}
DialogsComponent.ɵfac = function DialogsComponent_Factory(t) { return new (t || DialogsComponent)(); };
DialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogsComponent, selectors: [["dialogs"]], decls: 7, vars: 1, consts: [[6, "header"], ["id", "custom-dialog", 3, "content", 6, "heading"]], template: function DialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-dialogs-example-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.example1);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_4__["TuiDialogsExample1"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `dialogs`,
                templateUrl: `./dialogs.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/dialogs/dialogs.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/customization/dialogs/dialogs.module.ts ***!
  \*************************************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _dialogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs.component */ "./src/modules/customization/dialogs/dialogs.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/customization/dialogs/examples/1/index.ts");
/* harmony import */ var _examples_1_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/prompt/prompt.module */ "./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts");











class DialogsModule {
}
DialogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DialogsModule });
DialogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DialogsModule_Factory(t) { return new (t || DialogsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _examples_1_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_8__["PromptModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAvatarModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DialogsModule, { declarations: [_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiDialogsExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _examples_1_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_8__["PromptModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAvatarModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _examples_1_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_8__["PromptModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiAvatarModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"])),
                ],
                declarations: [_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiDialogsExample1"]],
                exports: [_dialogs_component__WEBPACK_IMPORTED_MODULE_6__["DialogsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/dialogs/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/customization/dialogs/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiDialogsExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDialogsExample1", function() { return TuiDialogsExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _prompt_prompt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompt/prompt.service */ "./src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");










function TuiDialogsExample1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00ABChoose wisely\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
} }
function TuiDialogsExample1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00ABYou chose poorly\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
} }
function TuiDialogsExample1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00ABYou have chosen wisely\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
} }
class TuiDialogsExample1 {
    constructor(alertService, promptService) {
        this.alertService = alertService;
        this.promptService = promptService;
    }
    onClick(choose, poorly, wisely) {
        this.promptService
            .open(choose, {
            heading: `Taiga UI is the best`,
            buttons: [`Absolutely!`, `No way!`],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(response => response
            ? this.alertService.open(wisely, {
                status: "success" /* Success */,
            })
            : this.alertService.open(poorly, {
                status: "error" /* Error */,
            })))
            .subscribe();
    }
}
TuiDialogsExample1.ɵfac = function TuiDialogsExample1_Factory(t) { return new (t || TuiDialogsExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_prompt_prompt_service__WEBPACK_IMPORTED_MODULE_4__["PromptService"])); };
TuiDialogsExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDialogsExample1, selectors: [["tui-dialogs-example-1"]], decls: 8, vars: 0, consts: [["tuiButton", "", 3, "click"], ["choose", ""], ["poorly", ""], ["wisely", ""], [1, "wrapper"], ["avatarUrl", "assets/images/choose.png", "size", "l", 1, "tui-space_right-2", 3, "rounded"], ["avatarUrl", "assets/images/poorly.png", 1, "tui-space_right-2", 3, "rounded"], ["avatarUrl", "assets/images/wisely.png", 1, "tui-space_left-1", 3, "rounded"]], template: function TuiDialogsExample1_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogsExample1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onClick(_r0, _r2, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show prompt\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiDialogsExample1_ng_template_2_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDialogsExample1_ng_template_4_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiDialogsExample1_ng_template_6_Template, 3, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9kaWFsb2dzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9kaWFsb2dzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9kaWFsb2dzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDialogsExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dialogs-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]]
            }] }, { type: _prompt_prompt_service__WEBPACK_IMPORTED_MODULE_4__["PromptService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_prompt_prompt_service__WEBPACK_IMPORTED_MODULE_4__["PromptService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts ***!
  \******************************************************************************/
/*! exports provided: PromptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptModule", function() { return PromptModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _prompt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompt.component */ "./src/modules/customization/dialogs/examples/1/prompt/prompt.component.ts");
/* harmony import */ var _prompt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt.service */ "./src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts");







class PromptModule {
}
PromptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PromptModule });
PromptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PromptModule_Factory(t) { return new (t || PromptModule)(); }, providers: [_prompt_service__WEBPACK_IMPORTED_MODULE_5__["PROMPT_PROVIDER"]], imports: [[_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PromptModule, { declarations: [_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PromptModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                // Add this provider to app module (it is here for stackblitz demonstration purpose only)
                providers: [_prompt_service__WEBPACK_IMPORTED_MODULE_5__["PROMPT_PROVIDER"]],
                declarations: [_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"]],
                exports: [_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"]],
                entryComponents: [_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customization-dialogs-dialogs-module.js.map