(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mobile-calendar-mobile-calendar-module"],{

/***/ "./src/modules/components/mobile-calendar/examples/1/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/mobile-calendar/examples/1/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiMobileCalendarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMobileCalendarExample1", function() { return TuiMobileCalendarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");















// @dynamic
class TuiMobileCalendarExample1 {
    constructor(dialogService, injector, months) {
        this.months = months;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDay"](2020, 9, 3));
        this.date$ = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this.control.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["withLatestFrom"])(this.months), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([value, months]) => this.getParsed(value, months)));
        const dataStream = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiReplayedValueChangesFrom"])(this.control);
        const computedInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [
                {
                    provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TUI_CALENDAR_DATA_STREAM"],
                    useValue: dataStream,
                },
            ],
            parent: injector,
        });
        const content = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusComponent"](_taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_4__["TuiMobileCalendarDialogComponent"], computedInjector);
        this.dialog$ = dialogService.open(content, {
            size: `fullscreen`,
            closeable: false,
            data: {
                min: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiDay"].currentLocal(),
            },
        });
    }
    get empty() {
        return !this.control.value;
    }
    getParsed(value, months) {
        if (!value) {
            return `Choose a date`;
        }
        const { month, day, year } = value;
        return `${months[month]} ${day}, ${year}`;
    }
    onClick() {
        this.dialog$.subscribe(value => {
            this.control.setValue(value);
        });
    }
}
TuiMobileCalendarExample1.ɵfac = function TuiMobileCalendarExample1_Factory(t) { return new (t || TuiMobileCalendarExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_MONTHS"])); };
TuiMobileCalendarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMobileCalendarExample1, selectors: [["tui-mobile-calendar-example-1"]], decls: 5, vars: 5, consts: [[1, "wrapper"], ["tuiIconButton", "", "type", "button", "title", "Choose a date", "appearance", "secondary", "shape", "rounded", "icon", "tuiIconCalendarLarge", 3, "click"], [1, "date"]], template: function TuiMobileCalendarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMobileCalendarExample1_Template_button_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("date_empty", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.date$), " ");
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__["TuiButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.date[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.date_empty[_ngcontent-%COMP%] {\n  color: var(--tui-text-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tb2JpbGUtY2FsZW5kYXIvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21vYmlsZS1jYWxlbmRhci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7QUNBSjtBREVJO0VBQ0kseUJBQUE7QUNBUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbW9iaWxlLWNhbGVuZGFyL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcblxuICAgICZfZW1wdHkge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uZGF0ZV9lbXB0eSB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMobileCalendarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mobile-calendar-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDialogService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TUI_MONTHS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-calendar/examples/2/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/mobile-calendar/examples/2/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiMobileCalendarExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMobileCalendarExample2", function() { return TuiMobileCalendarExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_mobile_components_mobile_calendar_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-mobile/components/mobile-calendar/mobile-calendar.component */ "../addon-mobile/components/mobile-calendar/mobile-calendar.component.ts");






class TuiMobileCalendarExample2 {
    constructor() {
        this.min = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](new Date().getFullYear(), new Date().getMonth(), 1);
        this.max = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](new Date().getFullYear(), new Date().getMonth(), 10);
    }
}
TuiMobileCalendarExample2.ɵfac = function TuiMobileCalendarExample2_Factory(t) { return new (t || TuiMobileCalendarExample2)(); };
TuiMobileCalendarExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMobileCalendarExample2, selectors: [["tui-mobile-calendar-example-2"]], decls: 2, vars: 3, consts: [[1, "example"], [3, "min", "max", "single"]], template: function TuiMobileCalendarExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-mobile-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("single", false);
    } }, directives: [_addon_mobile_components_mobile_calendar_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_4__["TuiMobileCalendarComponent"]], styles: [".example[_ngcontent-%COMP%] {\n  height: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tb2JpbGUtY2FsZW5kYXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21vYmlsZS1jYWxlbmRhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21vYmlsZS1jYWxlbmRhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZSB7XG4gICAgaGVpZ2h0OiAzNXJlbTtcbn1cbiIsIi5leGFtcGxlIHtcbiAgaGVpZ2h0OiAzNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMobileCalendarExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-mobile-calendar-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-calendar/mobile-calendar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/mobile-calendar/mobile-calendar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: dataStreamFactory, ExampleTuiMobileCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataStreamFactory", function() { return dataStreamFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMobileCalendarComponent", function() { return ExampleTuiMobileCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/mobile-calendar/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/mobile-calendar/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_mobile_components_mobile_calendar_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-mobile/components/mobile-calendar/mobile-calendar.component */ "../addon-mobile/components/mobile-calendar/mobile-calendar.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1931204519440953968$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__1 = goog.getMsg(" A calendar for mobile devices. It is used in {$startLink} InputDate {$closeLink} and {$startLink_1} InputDateRange {$closeLink} if {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} are both imported once in the main module ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]", "startLink_1": "\uFFFD#3\uFFFD", "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_0 = MSG_EXTERNAL_1931204519440953968$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟e253a142950382b57f7a632d8882cc344d30496b␟1931204519440953968: A calendar for mobile devices. It is used in ${"\uFFFD#2\uFFFD"}:START_LINK: InputDate ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: InputDateRange ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: if ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: are both imported once in the main module `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1928429328557389254$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__3 = goog.getMsg(" You can use {$startTagCode}TUI_CALENDAR_DATA_STREAM{$closeTagCode} token to set value from outside (see samples) ", { "startTagCode": "\uFFFD#8\uFFFD", "closeTagCode": "\uFFFD/#8\uFFFD" });
    I18N_2 = MSG_EXTERNAL_1928429328557389254$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟f105f2ad607575b562a8478c277b0f5c371ba723␟1928429328557389254: You can use ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:TUI_CALENDAR_DATA_STREAM${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: token to set value from outside (see samples) `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2432796667542330911$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__5 = goog.getMsg("Component should be used on mobile devices as fullscreen dialog");
    I18N_4 = MSG_EXTERNAL_2432796667542330911$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟be132442c61ba6f1af8c7f6a614b07ce4aea8918␟2432796667542330911:Component should be used on mobile devices as fullscreen dialog`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3980173860964639072$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__7 = goog.getMsg("Custom dropdown");
    I18N_6 = MSG_EXTERNAL_3980173860964639072$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟0361f42c5934060e30ced524323effc0a4fe560f␟3980173860964639072:Custom dropdown`;
}
const _c8 = ["heading", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2348971518300945764$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__10 = goog.getMsg("Range");
    I18N_9 = MSG_EXTERNAL_2348971518300945764$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`;
}
const _c11 = ["heading", I18N_9];
const _c12 = function () { return ["/components/input-date"]; };
const _c13 = function () { return ["/components/input-date-range"]; };
function ExampleTuiMobileCalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-mobile-calendar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-mobile-calendar-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___15 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_14 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___17 = goog.getMsg(" Max date ");
    I18N_16 = MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___19 = goog.getMsg(" Min date ");
    I18N_18 = MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4032379093756044480$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___21 = goog.getMsg(" Single date or a range ");
    I18N_20 = MSG_EXTERNAL_4032379093756044480$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟2a1554aaea9c8357628e5c7de4f8fb7615e37d70␟4032379093756044480: Single date or a range `;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8437696185745475137$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___23 = goog.getMsg(" \"Cancel\" clicked ");
    I18N_22 = MSG_EXTERNAL_8437696185745475137$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟166ac781bfe693de7c6c507c3747d4fad5808bfe␟8437696185745475137: "Cancel" clicked `;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3862541995331771793$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___25 = goog.getMsg(" \"Confirm\" button clicked ");
    I18N_24 = MSG_EXTERNAL_3862541995331771793$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟0b81f93ee05a0d9a3237fb88342921b96a0aec2a␟3862541995331771793: "Confirm" button clicked `;
}
function ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiMobileCalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-mobile-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMobileCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.single = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiMobileCalendarComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabledItemHandler", ctx_r1.disabledItemHandler)("max", ctx_r1.max)("min", ctx_r1.min)("single", ctx_r1.single);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.single);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_194075401487100702$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiDialogModule{$closeTagCode} and {$startTagCode}TuiMobileCalendarModule{$closeTagCode} once into the main module ", { "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_26 = MSG_EXTERNAL_194075401487100702$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟ca588819ac4ec61a814c286dfbc0f57f3aa24973␟194075401487100702: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: once into the main module `;
}
I18N_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_26);
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5351309614134079765$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__29 = goog.getMsg(" Import {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} for automatic use with {$startTagCode}TuiInputDate{$closeTagCode} or {$startTagCode}TuiInputDateRange{$closeTagCode} : ", { "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]" });
    I18N_28 = MSG_EXTERNAL_5351309614134079765$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟a448f82c6f5ac9a0ac04ed774204f6b5fe5713c3␟5351309614134079765: Import ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: for automatic use with ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiInputDate${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TuiInputDateRange${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: : `;
}
I18N_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_28);
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
    I18N_30 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_MOBILE_CALENDAR_MOBILE_CALENDAR_COMPONENT_TS__31;
}
else {
    I18N_30 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiMobileCalendarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleImportDialogModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
function dataStreamFactory(component) {
    return component.stream;
}
class ExampleTuiMobileCalendarComponent {
    constructor() {
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/import/insert-template.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/import/import-module.md"));
        this.exampleImportDialogModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-dialog-module-md */ "!!raw-loader!-examples-import-import-dialog-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-dialog-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/import/import-dialog-module.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/2/index.html")),
        };
        this.minVariants = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FIRST_DAY"], new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 2, 5), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](1900, 0, 1)];
        this.min = this.minVariants[0];
        this.maxVariants = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"], new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2020, 2, 5), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2300, 0, 1)];
        this.max = this.maxVariants[0];
        this.single = true;
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.stream = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiReplayedValueChangesFrom"])(this.control);
    }
}
ExampleTuiMobileCalendarComponent.ɵfac = function ExampleTuiMobileCalendarComponent_Factory(t) { return new (t || ExampleTuiMobileCalendarComponent)(); };
ExampleTuiMobileCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiMobileCalendarComponent, selectors: [["example-tui-mobile-calendar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_CALENDAR_DATA_STREAM"],
                deps: [ExampleTuiMobileCalendarComponent],
                useFactory: dataStreamFactory,
            },
        ])], decls: 4, vars: 0, consts: [["header", "MobileCalendar", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], ["tuiLink", "", 3, "routerLink"], ["id", "dropdown", 3, "content", 6, "heading"], ["id", "range", 3, "content", 6, "heading"], [1, "calendar", 3, "disabledItemHandler", "max", "min", "single"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "single", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cancel", "documentationPropertyMode", "output", "documentationPropertyType", "void"], ["documentationPropertyName", "confirm", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDayRange | TuiDay"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiMobileCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiMobileCalendarComponent_ng_template_1_Template, 17, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMobileCalendarComponent_ng_template_2_Template, 9, 11, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiMobileCalendarComponent_ng_template_3_Template, 18, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiMobileCalendarExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_11__["TuiMobileCalendarExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDemoComponent"], _addon_mobile_components_mobile_calendar_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_13__["TuiMobileCalendarComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], styles: [".calendar[_ngcontent-%COMP%] {\n  height: 28.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tb2JpbGUtY2FsZW5kYXIvbW9iaWxlLWNhbGVuZGFyLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbW9iaWxlLWNhbGVuZGFyL21vYmlsZS1jYWxlbmRhci5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbW9iaWxlLWNhbGVuZGFyL21vYmlsZS1jYWxlbmRhci5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyIHtcbiAgICBoZWlnaHQ6IDI4Ljc1cmVtO1xufVxuIiwiLmNhbGVuZGFyIHtcbiAgaGVpZ2h0OiAyOC43NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiMobileCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-mobile-calendar`,
                templateUrl: `./mobile-calendar.template.html`,
                styleUrls: [`./mobile-calendar.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_CALENDAR_DATA_STREAM"],
                        deps: [ExampleTuiMobileCalendarComponent],
                        useFactory: dataStreamFactory,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/mobile-calendar/mobile-calendar.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/components/mobile-calendar/mobile-calendar.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiMobileCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMobileCalendarModule", function() { return ExampleTuiMobileCalendarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/mobile-calendar/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/mobile-calendar/examples/2/index.ts");
/* harmony import */ var _mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-calendar.component */ "./src/modules/components/mobile-calendar/mobile-calendar.component.ts");












class ExampleTuiMobileCalendarModule {
}
ExampleTuiMobileCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiMobileCalendarModule });
ExampleTuiMobileCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiMobileCalendarModule_Factory(t) { return new (t || ExampleTuiMobileCalendarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiMobileCalendarModule, { declarations: [_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMobileCalendarExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMobileCalendarExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiMobileCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"])),
                ],
                declarations: [
                    _mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiMobileCalendarExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiMobileCalendarExample2"],
                ],
                exports: [_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiMobileCalendarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-mobile-calendar-mobile-calendar-module.js.map