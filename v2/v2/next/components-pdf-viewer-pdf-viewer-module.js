(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pdf-viewer-pdf-viewer-module"],{

/***/ "./src/modules/components/pdf-viewer/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPdfViewerExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPdfViewerExample1", function() { return TuiPdfViewerExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");










function TuiPdfViewerExample1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.content;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", content_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TuiPdfViewerExample1 {
    constructor(sanitizer, pdfService) {
        this.sanitizer = sanitizer;
        this.pdfService = pdfService;
    }
    show(actions) {
        this.pdfService
            .open(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`), {
            label: `Taiga UI`,
            actions,
        })
            .subscribe();
    }
}
TuiPdfViewerExample1.ɵfac = function TuiPdfViewerExample1_Factory(t) { return new (t || TuiPdfViewerExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"])); };
TuiPdfViewerExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPdfViewerExample1, selectors: [["tui-pdf-viewer-example-1"]], decls: 6, vars: 0, consts: [[1, "tui-space_bottom-3"], ["tuiButton", "", 3, "click"], ["actions", ""], ["tuiButton", "", "shape", "rounded", "size", "s", "download", "", 3, "href"]], template: function TuiPdfViewerExample1_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-notification", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPdfViewerExample1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.show(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Taiga\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiPdfViewerExample1_ng_template_4_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPdfViewerExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pdf-viewer-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]]
            }] }, { type: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ActionsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContent", function() { return ActionsContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");





function ActionsContent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionsContent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const button_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return button_r1.onClick(ctx_r2.context); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r1.text, " ");
} }
class ActionsContent {
    constructor(context) {
        this.context = context;
    }
}
ActionsContent.ɵfac = function ActionsContent_Factory(t) { return new (t || ActionsContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__["POLYMORPHEUS_CONTEXT"])); };
ActionsContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionsContent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["tuiButton", "", "size", "s", "shape", "rounded", "class", "tui-space_left-3", 3, "click", 4, "ngFor", "ngForOf"], ["tuiButton", "", "size", "s", "shape", "rounded", 1, "tui-space_left-3", 3, "click"]], template: function ActionsContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ActionsContent_button_0_Template, 2, 1, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.context.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionsContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <button
            *ngFor="let button of context.data"
            tuiButton
            size="s"
            shape="rounded"
            class="tui-space_left-3"
            (click)="button.onClick(context)"
        >
            {{ button.text }}
        </button>
    `,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPdfViewerExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPdfViewerExample2", function() { return TuiPdfViewerExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions-content.component */ "./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts");
/* harmony import */ var _pdf_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pdf-content.component */ "./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");













class TuiPdfViewerExample2 {
    constructor(alertService, pdfService) {
        this.alertService = alertService;
        this.pdfService = pdfService;
    }
    show() {
        const options = {
            label: `Taiga UI`,
            actions: new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_actions_content_component__WEBPACK_IMPORTED_MODULE_7__["ActionsContent"]),
            data: [
                {
                    text: `Sign`,
                    onClick: context => context.completeWith(`Document signed`),
                },
                {
                    text: `Deny`,
                    onClick: context => context.completeWith(`Document denied`),
                },
            ],
        };
        this.pdfService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_pdf_content_component__WEBPACK_IMPORTED_MODULE_8__["PdfContent"]), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(response => this.alertService.open(response)))
            .subscribe();
    }
}
TuiPdfViewerExample2.ɵfac = function TuiPdfViewerExample2_Factory(t) { return new (t || TuiPdfViewerExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"])); };
TuiPdfViewerExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPdfViewerExample2, selectors: [["tui-pdf-viewer-example-2"]], decls: 2, vars: 0, consts: [["tuiButton", "", 3, "click"]], template: function TuiPdfViewerExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPdfViewerExample2_Template_button_click_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Taiga\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPdfViewerExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pdf-viewer-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }, { type: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PdfContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfContent", function() { return PdfContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/loader/loader.component */ "../core/components/loader/loader.component.ts");








function PdfContent_iframe_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 2);
} if (rf & 2) {
    const src_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function PdfContent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 3);
} }
class PdfContent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.src$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`)));
    }
}
PdfContent.ɵfac = function PdfContent_Factory(t) { return new (t || PdfContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
PdfContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfContent, selectors: [["ng-component"]], decls: 4, vars: 4, consts: [[3, "src", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "src"], ["size", "xl"]], template: function PdfContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PdfContent_iframe_0_Template, 1, 1, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PdfContent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.src$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["TuiLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n            }\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n                flex: 1;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <iframe
            *ngIf="src$ | async as src; else loading"
            [src]="src"
        ></iframe>
        <ng-template #loading><tui-loader size="xl"></tui-loader></ng-template>
    `,
                styles: [
                    `
            :host {
                display: flex;
                height: 100%;
            }
            :host > * {
                flex: 1;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/examples/3/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/examples/3/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiPdfViewerExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPdfViewerExample3", function() { return TuiPdfViewerExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_pdf_viewer_pdf_viewer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/pdf-viewer/pdf-viewer.directive */ "../kit/components/pdf-viewer/pdf-viewer.directive.ts");






function TuiPdfViewerExample3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 2);
} }
class TuiPdfViewerExample3 {
    constructor() {
        this.open = false;
    }
}
TuiPdfViewerExample3.ɵfac = function TuiPdfViewerExample3_Factory(t) { return new (t || TuiPdfViewerExample3)(); };
TuiPdfViewerExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPdfViewerExample3, selectors: [["tui-pdf-viewer-example-3"]], decls: 3, vars: 1, consts: [["tuiButton", "", 3, "click"], [3, "tuiPdfViewer", "tuiPdfViewerChange"], ["src", "assets/media/taiga.pdf", 1, "iframe"]], template: function TuiPdfViewerExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPdfViewerExample3_Template_button_click_0_listener() { return ctx.open = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Taiga\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiPdfViewerExample3_ng_template_2_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiPdfViewerChange", function TuiPdfViewerExample3_Template_ng_template_tuiPdfViewerChange_2_listener($event) { return ctx.open = $event; });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiPdfViewer", ctx.open);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"], _kit_components_pdf_viewer_pdf_viewer_directive__WEBPACK_IMPORTED_MODULE_4__["TuiPdfViewerDirective"]], styles: [".iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wZGYtdmlld2VyL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wZGYtdmlld2VyL2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3BkZi12aWV3ZXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPdfViewerExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-pdf-viewer-example-3`,
                templateUrl: `index.html`,
                styleUrls: [`index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/pdf-viewer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/pdf-viewer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiPdfViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPdfViewerComponent", function() { return ExampleTuiPdfViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/pdf-viewer/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/pdf-viewer/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/pdf-viewer/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");











function ExampleTuiPdfViewerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Custom dialog to preview PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TUI_IS_MOBILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " token to provide suitable alternative behavior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-pdf-viewer-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-pdf-viewer-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-pdf-viewer-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
function ExampleTuiPdfViewerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TuiPdfViewerModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to your main app module: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Show preview with a service: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleService);
} }
class ExampleTuiPdfViewerComponent {
    constructor() {
        this.exampleService = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-md */ "!!raw-loader!-examples-import-service-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/import/service.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/import/import-module.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/index.html")),
            'actions-content.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-actions-content-component-ts */ "!!raw-loader!-examples-2-actions-content-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/actions-content.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts")),
            'pdf-content.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-pdf-content-component-ts */ "!!raw-loader!-examples-2-pdf-content-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/pdf-content.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/3/index.less")),
        };
    }
}
ExampleTuiPdfViewerComponent.ɵfac = function ExampleTuiPdfViewerComponent_Factory(t) { return new (t || ExampleTuiPdfViewerComponent)(); };
ExampleTuiPdfViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPdfViewerComponent, selectors: [["example-tui-pdf-viewer"]], decls: 3, vars: 0, consts: [["header", "PdfViewer", "package", "KIT"], ["pageTab", ""], ["pageTab", "Setup"], ["status", "warning"], ["id", "base", "heading", "Basic", 3, "content"], ["id", "component", "heading", "Component", 3, "content"], ["id", "directive", "heading", "Directive", 3, "content"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiPdfViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPdfViewerComponent_ng_template_1_Template, 13, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPdfViewerComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiPdfViewerExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiPdfViewerExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_8__["TuiPdfViewerExample3"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPdfViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-pdf-viewer`,
                templateUrl: `./pdf-viewer.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/pdf-viewer/pdf-viewer.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/pdf-viewer/pdf-viewer.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiPdfViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPdfViewerModule", function() { return ExampleTuiPdfViewerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/pdf-viewer/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/pdf-viewer/examples/2/index.ts");
/* harmony import */ var _examples_2_actions_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2/actions-content.component */ "./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts");
/* harmony import */ var _examples_2_pdf_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/pdf-content.component */ "./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/pdf-viewer/examples/3/index.ts");
/* harmony import */ var _pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pdf-viewer.component */ "./src/modules/components/pdf-viewer/pdf-viewer.component.ts");














class ExampleTuiPdfViewerModule {
}
ExampleTuiPdfViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPdfViewerModule });
ExampleTuiPdfViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPdfViewerModule_Factory(t) { return new (t || ExampleTuiPdfViewerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPdfViewerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLoaderModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPdfViewerModule, { declarations: [_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"],
        _examples_2_pdf_content_component__WEBPACK_IMPORTED_MODULE_9__["PdfContent"],
        _examples_2_actions_content_component__WEBPACK_IMPORTED_MODULE_8__["ActionsContent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPdfViewerExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiPdfViewerExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiPdfViewerExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPdfViewerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLoaderModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPdfViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiPdfViewerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLoaderModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"])),
                ],
                declarations: [
                    _pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"],
                    _examples_2_pdf_content_component__WEBPACK_IMPORTED_MODULE_9__["PdfContent"],
                    _examples_2_actions_content_component__WEBPACK_IMPORTED_MODULE_8__["ActionsContent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiPdfViewerExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiPdfViewerExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiPdfViewerExample3"],
                ],
                exports: [_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPdfViewerComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pdf-viewer-pdf-viewer-module.js.map