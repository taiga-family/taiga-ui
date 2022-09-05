(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-preview-preview-module"],{

/***/ "./src/modules/components/preview/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/preview/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiPreviewExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPreviewExample1", function() { return TuiPreviewExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview.component */ "../addon-preview/components/preview/preview.component.ts");
/* harmony import */ var _cdk_directives_swipe_swipe_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/swipe/swipe.directive */ "../cdk/directives/swipe/swipe.directive.ts");
/* harmony import */ var _addon_preview_components_preview_title_preview_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/title/preview-title.component */ "../addon-preview/components/preview/title/preview-title.component.ts");
/* harmony import */ var _addon_preview_components_preview_pagination_preview_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/pagination/preview-pagination.component */ "../addon-preview/components/preview/pagination/preview-pagination.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview-action/preview-action.directive */ "../addon-preview/components/preview/preview-action/preview-action.directive.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
















const _c0 = ["preview"];
const _c1 = ["contentSample"];
function TuiPreviewExample1_ng_template_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const src_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TuiPreviewExample1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-preview", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiSwipe", function TuiPreviewExample1_ng_template_4_Template_tui_preview_tuiSwipe_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSwipe($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-preview-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-preview-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiPreviewExample1_ng_template_4_Template_tui_preview_pagination_indexChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample1_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample1_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample1_ng_template_4_Template_button_click_6_listener() { const preview_r4 = ctx.$implicit; return preview_r4.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiPreviewExample1_ng_template_4_ng_template_8_Template, 1, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rotatable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.length)("index", ctx_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.previewContent);
} }
function TuiPreviewExample1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Important document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello everyone! This is some important document in A4 format, although it is made using html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiPreviewExample1 {
    constructor(previewService, alertService) {
        this.previewService = previewService;
        this.alertService = alertService;
        this.index = 0;
        this.length = 2;
    }
    get title() {
        return this.index === 0 ? `Transaction cert.jpg` : `My face.jpg`;
    }
    get previewContent() {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : `http://marsibarsi.me/images/1x1small.jpg`;
    }
    show() {
        this.previewService.open(this.preview || ``).subscribe({
            complete: () => console.info(`complete`),
        });
    }
    download() {
        this.alertService.open(`Downloading...`).subscribe();
    }
    delete() {
        this.alertService.open(`Deleting...`).subscribe();
    }
    onSwipe(swipe) {
        if (swipe.direction === `left`) {
            this.index = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["clamp"])(this.index + 1, 0, this.length - 1);
        }
        if (swipe.direction === `right`) {
            this.index = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["clamp"])(this.index - 1, 0, this.length - 1);
        }
    }
}
TuiPreviewExample1.ɵfac = function TuiPreviewExample1_Factory(t) { return new (t || TuiPreviewExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"])); };
TuiPreviewExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPreviewExample1, selectors: [["tui-preview-example-1"]], viewQuery: function TuiPreviewExample1_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentSample = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "tui-space_bottom-2"], ["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], ["contentSample", ""], [3, "rotatable", "tuiSwipe"], [3, "length", "index", "indexChange"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconTrash", "title", "Delete", 3, "click"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconDownload", "title", "Download", 3, "click"], ["tuiPreviewAction", "", "tuiIconButton", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], ["polymorpheus-outlet", "", 3, "content"], ["alt", "", 3, "src"], [1, "content"], ["src", "https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg", 1, "polymorpheus"]], template: function TuiPreviewExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With all features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample1_Template_button_click_2_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show preview\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiPreviewExample1_ng_template_4_Template, 9, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiPreviewExample1_ng_template_6_Template, 8, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["TuiPreviewComponent"], _cdk_directives_swipe_swipe_directive__WEBPACK_IMPORTED_MODULE_8__["TuiSwipeDirective"], _addon_preview_components_preview_title_preview_title_component__WEBPACK_IMPORTED_MODULE_9__["TuiPreviewTitleComponent"], _addon_preview_components_preview_pagination_preview_pagination_component__WEBPACK_IMPORTED_MODULE_10__["TuiPreviewPaginationComponent"], _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_11__["TuiPreviewActionDirective"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__["PolymorpheusOutletComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xl);\n  background-color: var(--tui-base-01);\n  width: 50rem;\n  height: 68.75rem;\n  padding: 3.75rem;\n  box-sizing: border-box;\n  border-radius: 0.75rem;\n}\n.polymorpheus[_ngcontent-%COMP%] {\n  padding: 2.5rem 10.375rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy90ZXh0Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQzZDSSw2QkFBQTtFRDNDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBREtKO0FDRkE7RUFDSSx5QkFBQTtBRElKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5jb250ZW50IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14bCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgd2lkdGg6IDUwcmVtO1xuICBoZWlnaHQ6IDY4Ljc1cmVtO1xuICBwYWRkaW5nOiAzLjc1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xufVxuLnBvbHltb3JwaGV1cyB7XG4gIHBhZGRpbmc6IDIuNXJlbSAxMC4zNzVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5jb250ZW50IHtcbiAgICAudGV4dC1ib2R5LXhsKCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIHdpZHRoOiA1MHJlbTtcbiAgICBoZWlnaHQ6IDY4Ljc1cmVtO1xuICAgIHBhZGRpbmc6IDMuNzVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xufVxuXG4ucG9seW1vcnBoZXVzIHtcbiAgICBwYWRkaW5nOiAyLjVyZW0gMTAuMzc1cmVtO1xufVxuIiwiLnRleHQtYmFzaWMoKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuXG4vLyBoZWFkaW5nc1xuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMSgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTEpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMigpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTIpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oMygpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTMpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTQpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNSgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1oNigpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xufVxuXG4vLyB0eXBlZCB0ZXh0XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHkteGwtYm9sZCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS14bCgpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1sLWJvbGQoQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LWwpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJiB3aGVuIChAdHlwZSA9IDMpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LWwoQHR5cGU6IDEpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LWwpO1xuXG4gICAgJiB3aGVuIChAdHlwZSA9IDIpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJiB3aGVuIChAdHlwZSA9IDMpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxufVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1ib2R5LW0tYm9sZChAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktbShAdHlwZTogMSkge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG5cbiAgICAmIHdoZW4gKEB0eXBlID0gMikge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB9XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWJvZHktcy1ib2xkKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS1zKEB0eXBlOiAxKSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcblxuICAgICYgd2hlbiAoQHR5cGUgPSAyKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtYm9keS14cygpIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbn1cblxuLy90YWJzLCB0YWdzLCBjYXRlZ29yeVxuXG4vLyBkZXByZWNhdGVkXG4udGV4dC1jYXB0aW9uLWwtYm9sZCgpIHtcbiAgICAuZm9udCgwLjgxMjVyZW0sIDEuMjVyZW0sIGJvbGQpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtY2FwdGlvbi1sKCkge1xuICAgIC5mb250KDAuODEyNXJlbSwgMS4yNXJlbSwgbm9ybWFsKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNjI1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi50ZXh0LWNhcHRpb24tYm9sZCgpIHtcbiAgICAuZm9udCgwLjY4NzVyZW0sIDFyZW0sIGJvbGQpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuLnRleHQtY2FwdGlvbigpIHtcbiAgICAuZm9udCgwLjY4NzVyZW0sIDFyZW0sIG5vcm1hbCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vLyBtaXhpbnMgZm9yIGZvbnQgcHJvcGVydGllc1xuXG4vLyBkZXByZWNhdGVkXG4uZm9udF9oZWFkaW5nKEBzaXplLCBAbGluZS1oZWlnaHQ6IG5vcm1hbCkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQ7XG4gICAgZm9udC1zaXplOiBAc2l6ZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdHVpLWZvbnQtaGVhZGluZyk7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbi5mb250KEBzaXplLCBAbGluZS1oZWlnaHQ6ICdub25lJywgQHdlaWdodDogbm9ybWFsLCBAY29sb3I6ICdub25lJykge1xuICAgIGZvbnQtd2VpZ2h0OiBAd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogQHNpemU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXR1aS1mb250LXRleHQpO1xufVxuXG4vLyBkZXByZWNhdGVkXG4uZm9udChAc2l6ZSwgQGxpbmUtaGVpZ2h0OiAnbm9uZScsIEB3ZWlnaHQ6IG5vcm1hbCwgQGNvbG9yOiAnbm9uZScpIHdoZW4gbm90IChAbGluZS1oZWlnaHQgPSAnbm9uZScpIHtcbiAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0O1xufVxuXG4vLyBkZXByZWNhdGVkXG4uZm9udChAc2l6ZSwgQGxpbmUtaGVpZ2h0OiAnbm9uZScsIEB3ZWlnaHQ6IG5vcm1hbCwgQGNvbG9yOiAnbm9uZScpIHdoZW4gbm90IChAY29sb3IgPSAnbm9uZScpIHtcbiAgICBjb2xvcjogQGNvbG9yO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPreviewExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-preview-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"]]
            }] }]; }, { preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`preview`]
        }], contentSample: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`contentSample`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/preview/examples/2/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/preview/examples/2/index.ts ***!
  \************************************************************/
/*! exports provided: TuiPreviewExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPreviewExample2", function() { return TuiPreviewExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview.component */ "../addon-preview/components/preview/preview.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview-action/preview-action.directive */ "../addon-preview/components/preview/preview-action/preview-action.directive.ts");









const _c0 = ["preview"];
function TuiPreviewExample2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample2_ng_template_2_Template_button_click_2_listener() { const preview_r2 = ctx.$implicit; return preview_r2.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rotatable", false)("zoomable", false);
} }
class TuiPreviewExample2 {
    constructor(previewDialogService) {
        this.previewDialogService = previewDialogService;
    }
    show() {
        this.previewDialogService.open(this.preview || ``).subscribe();
    }
}
TuiPreviewExample2.ɵfac = function TuiPreviewExample2_Factory(t) { return new (t || TuiPreviewExample2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"])); };
TuiPreviewExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPreviewExample2, selectors: [["tui-preview-example-2"]], viewQuery: function TuiPreviewExample2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    } }, decls: 4, vars: 0, consts: [["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], [3, "rotatable", "zoomable"], ["src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "content"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"]], template: function TuiPreviewExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample2_Template_button_click_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show simple preview\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiPreviewExample2_ng_template_2_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_5__["TuiPreviewComponent"], _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_6__["TuiPreviewActionDirective"]], styles: [".content[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ByZXZpZXcvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4iLCIuY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPreviewExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-preview-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"]]
            }] }]; }, { preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`preview`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/preview/examples/3/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/preview/examples/3/index.ts ***!
  \************************************************************/
/*! exports provided: TuiPreviewExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPreviewExample3", function() { return TuiPreviewExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview.component */ "../addon-preview/components/preview/preview.component.ts");
/* harmony import */ var _addon_preview_components_preview_title_preview_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/title/preview-title.component */ "../addon-preview/components/preview/title/preview-title.component.ts");
/* harmony import */ var _addon_preview_components_preview_pagination_preview_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/pagination/preview-pagination.component */ "../addon-preview/components/preview/pagination/preview-pagination.component.ts");
/* harmony import */ var _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-preview/components/preview/preview-action/preview-action.directive */ "../addon-preview/components/preview/preview-action/preview-action.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/loader/loader.component */ "../core/components/loader/loader.component.ts");

















const _c0 = ["preview"];
function TuiPreviewExample3_ng_template_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preview unavailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TuiPreviewExample3_ng_template_2_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const src_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TuiPreviewExample3_ng_template_2_tui_loader_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 12);
} }
function TuiPreviewExample3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-preview-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-preview-pagination", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function TuiPreviewExample3_ng_template_2_Template_tui_preview_pagination_indexChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.index$$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample3_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample3_ng_template_2_Template_button_click_9_listener() { const preview_r2 = ctx.$implicit; return preview_r2.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TuiPreviewExample3_ng_template_2_ng_container_10_Template, 5, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiPreviewExample3_ng_template_2_img_12_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TuiPreviewExample3_ng_template_2_tui_loader_14_Template, 1, 0, "tui-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rotatable", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r1.contentUnavailable$))("zoomable", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, ctx_r1.contentUnavailable$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r1.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, ctx_r1.title$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.items.length)("index", ctx_r1.index$$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 16, ctx_r1.contentUnavailable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 18, ctx_r1.imageSrc$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, ctx_r1.loading$));
} }
class TuiPreviewExample3 {
    constructor(previewDialogService) {
        this.previewDialogService = previewDialogService;
        this.items = [
            {
                title: `some table.xlsx`,
                hasPreview: false,
            },
            {
                title: `Content #2`,
                hasPreview: true,
            },
        ];
        this.index$$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.item$ = this.index$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(index => this.items[index]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["isPresent"]));
        this.title$ = this.item$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(item => item.title));
        this.contentUnavailable$ = this.item$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(item => !item.hasPreview));
        this.imageSrc$ = this.item$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(item => item.hasPreview ? this.emulateBackendRequest().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(``)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)));
        this.loading$ = this.imageSrc$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(src => src === ``));
    }
    show() {
        this.previewDialogService.open(this.preview || ``).subscribe();
    }
    download() {
        console.info(`downloading...`);
    }
    emulateBackendRequest() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(1500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`));
    }
}
TuiPreviewExample3.ɵfac = function TuiPreviewExample3_Factory(t) { return new (t || TuiPreviewExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"])); };
TuiPreviewExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiPreviewExample3, selectors: [["tui-preview-example-3"]], viewQuery: function TuiPreviewExample3_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    } }, decls: 4, vars: 0, consts: [["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], [3, "rotatable", "zoomable"], [3, "length", "index", "indexChange"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconDownload", "title", "Download", 3, "click"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], [4, "ngIf"], ["width", "512", "height", "512", 3, "src", 4, "ngIf"], ["size", "xl", "class", "t-loader", 4, "ngIf"], [1, "t-container"], ["src", "tuiIconFileLarge", 1, "t-icon"], ["width", "512", "height", "512", 3, "src"], ["size", "xl", 1, "t-loader"]], template: function TuiPreviewExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPreviewExample3_Template_button_click_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show preview\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiPreviewExample3_ng_template_2_Template, 16, 22, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["TuiButtonComponent"], _addon_preview_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["TuiPreviewComponent"], _addon_preview_components_preview_title_preview_title_component__WEBPACK_IMPORTED_MODULE_9__["TuiPreviewTitleComponent"], _addon_preview_components_preview_pagination_preview_pagination_component__WEBPACK_IMPORTED_MODULE_10__["TuiPreviewPaginationComponent"], _addon_preview_components_preview_preview_action_preview_action_directive__WEBPACK_IMPORTED_MODULE_11__["TuiPreviewActionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_13__["TuiSvgComponent"], _core_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["TuiLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".content[_ngcontent-%COMP%] {\n  background-color: #f5f1f1;\n  width: 25rem;\n  height: 37.5rem;\n  padding: 2.5rem;\n  border-radius: 0.75rem;\n}\n.t-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--tui-text-02-night);\n}\n.t-icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  transform: scale(4);\n  height: 5rem;\n}\n.t-loader[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9wcmV2aWV3L2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0FDRkoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ByZXZpZXcvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MSwgMjQxKTtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgaGVpZ2h0OiAzNy41cmVtO1xuICAgIHBhZGRpbmc6IDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xufVxuXG4udC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMi1uaWdodCk7XG59XG5cbi50LWljb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcbiAgICBoZWlnaHQ6IDVyZW07XG59XG5cbi50LWxvYWRlciB7XG4gICAgd2lkdGg6IDRyZW07XG59XG4iLCIuY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWYxZjE7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiAzNy41cmVtO1xuICBwYWRkaW5nOiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG59XG4udC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDItbmlnaHQpO1xufVxuLnQtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoNCk7XG4gIGhlaWdodDogNXJlbTtcbn1cbi50LWxvYWRlciB7XG4gIHdpZHRoOiA0cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiPreviewExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-preview-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_3__["PreviewDialogService"]]
            }] }]; }, { preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`preview`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/preview/preview.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/preview/preview.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPreviewComponent", function() { return ExampleTuiPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/preview/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/preview/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/preview/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_182658249076803093$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__1 = goog.getMsg(" Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) ");
    I18N_0 = MSG_EXTERNAL_182658249076803093$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟241d5e97fd9620093591d9a0221c0450353983f1␟182658249076803093: Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_921011384987579529$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__3 = goog.getMsg("Full preview");
    I18N_2 = MSG_EXTERNAL_921011384987579529$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟02f0674c5a9d1755c787e6879af0feb3146e4851␟921011384987579529:Full preview`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6145238317927282087$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__6 = goog.getMsg("Simple mode");
    I18N_5 = MSG_EXTERNAL_6145238317927282087$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟af8d845c1070b259e6a6c86f73b63f8ed2a66aeb␟6145238317927282087:Simple mode`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2673400971030039835$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__9 = goog.getMsg("With loading and unavailable image");
    I18N_8 = MSG_EXTERNAL_2673400971030039835$$SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟9a68584192ab89eb9c03195bc31cf2bf541d66b9␟2673400971030039835:With loading and unavailable image`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiPreviewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "As a document you can provide any content like images,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The component automatically adjusts to the mobile device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-preview-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-preview-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-preview-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
function ExampleTuiPreviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TuiPreviewModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to main module: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create a template with tui-preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Open the component from the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PreviewDialogService");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " as in the example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleComponent);
} }
class ExampleTuiPreviewComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/import/import-module.md"));
        this.exampleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-component-md */ "!!raw-loader!-examples-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/import/component.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-template-md */ "!!raw-loader!-examples-import-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/import/template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/1/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/1/index.less")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.less")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/3/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/3/index.less")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/3/index.html")),
        };
    }
}
ExampleTuiPreviewComponent.ɵfac = function ExampleTuiPreviewComponent_Factory(t) { return new (t || ExampleTuiPreviewComponent)(); };
ExampleTuiPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPreviewComponent, selectors: [["example-preview"]], decls: 3, vars: 0, consts: [["header", "Preview", "package", "ADDON-PREVIEW"], ["pageTab", ""], ["pageTab", "Setup"], [1, "tui-space_bottom-4"], ["id", "default", 3, "content", 6, "heading"], ["id", "simple", 3, "content", 6, "heading"], ["id", "loading", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "some.component.html", 3, "code"], ["filename", "some.component.ts", 3, "code"]], template: function ExampleTuiPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPreviewComponent_ng_template_1_Template, 15, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPreviewComponent_ng_template_2_Template, 16, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiPreviewExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiPreviewExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_8__["TuiPreviewExample3"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-preview`,
                templateUrl: `./preview.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/preview/preview.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/preview/preview.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPreviewModule", function() { return ExampleTuiPreviewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-preview */ "../addon-preview/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/preview/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/preview/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/preview/examples/3/index.ts");
/* harmony import */ var _preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preview.component */ "./src/modules/components/preview/preview.component.ts");














class ExampleTuiPreviewModule {
}
ExampleTuiPreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiPreviewModule });
ExampleTuiPreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiPreviewModule_Factory(t) { return new (t || ExampleTuiPreviewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_4__["TuiPreviewModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiSwipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiPreviewModule, { declarations: [_preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiPreviewExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiPreviewExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiPreviewExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_4__["TuiPreviewModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiSwipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiPreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_addon_preview__WEBPACK_IMPORTED_MODULE_4__["TuiPreviewModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLoaderModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiSwipeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"])),
                ],
                declarations: [
                    _preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiPreviewExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiPreviewExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiPreviewExample3"],
                ],
                exports: [_preview_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiPreviewComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-preview-preview-module.js.map