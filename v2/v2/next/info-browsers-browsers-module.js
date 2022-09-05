(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-browsers-browsers-module"],{

/***/ "./src/modules/info/browsers/browsers.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/info/browsers/browsers.component.ts ***!
  \*********************************************************/
/*! exports provided: BrowsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsersComponent", function() { return BrowsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");




var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3338558811204685160$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_1 = goog.getMsg("Browser support");
    I18N_0 = MSG_EXTERNAL_3338558811204685160$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟c35184cc597987be93f6657134f83fd08ae31274␟3338558811204685160:Browser support`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5064942338735502667$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_4 = goog.getMsg(" Desktop ");
    I18N_3 = MSG_EXTERNAL_5064942338735502667$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟d784d00eeedb06dad7f6d4bb903640cecc7a9be0␟5064942338735502667: Desktop `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8094593321207135476$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_6 = goog.getMsg(" Browser ");
    I18N_5 = MSG_EXTERNAL_8094593321207135476$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:␟01bdf8a378d3d1d6f65a33f2b7af8c5e36509fe7␟8094593321207135476: Browser `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7166106447224345547$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_8 = goog.getMsg(" Version ");
    I18N_7 = MSG_EXTERNAL_7166106447224345547$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:␟dfe80f1266f7693728f7986a705ed56d5dd292bb␟7166106447224345547: Version `;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3399932745716012972$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_10 = goog.getMsg(" Mobile ");
    I18N_9 = MSG_EXTERNAL_3399932745716012972$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:␟92ab0748d27aeb8b7529e1abcb68679c44da7f56␟3399932745716012972: Mobile `;
}
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8094593321207135476$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_12 = goog.getMsg(" Browser ");
    I18N_11 = MSG_EXTERNAL_8094593321207135476$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_12;
}
else {
    I18N_11 = $localize `:␟01bdf8a378d3d1d6f65a33f2b7af8c5e36509fe7␟8094593321207135476: Browser `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7166106447224345547$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_14 = goog.getMsg(" Version ");
    I18N_13 = MSG_EXTERNAL_7166106447224345547$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:␟dfe80f1266f7693728f7986a705ed56d5dd292bb␟7166106447224345547: Version `;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_16 = goog.getMsg(" Last three major versions ");
    I18N_15 = MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_16;
}
else {
    I18N_15 = $localize `:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
}
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_18 = goog.getMsg(" Last three major versions ");
    I18N_17 = MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_18;
}
else {
    I18N_17 = $localize `:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
}
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_20 = goog.getMsg(" Last three major versions ");
    I18N_19 = MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_20;
}
else {
    I18N_19 = $localize `:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
}
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_22 = goog.getMsg(" Last three major versions ");
    I18N_21 = MSG_EXTERNAL_544861641165090794$$SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_22;
}
else {
    I18N_21 = $localize `:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
}
class BrowsersComponent {
}
BrowsersComponent.ɵfac = function BrowsersComponent_Factory(t) { return new (t || BrowsersComponent)(); };
BrowsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowsersComponent, selectors: [["browsers"]], decls: 86, vars: 0, consts: [[6, "header"], [1, "tui-text_h4", "tui-space_top-0", "tui-space_bottom-3"], [1, "tui-table"], [1, "tui-table__tr"], [1, "tui-table__th"], [1, "tui-table__td", "cell"], [1, "tui-table__td"], [1, "tui-text_h4", "tui-space_top-6", "tui-space_bottom-3"]], template: function BrowsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Google Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "49+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Yandex.Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "14+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mozilla Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "52+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Opera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "36+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Microsoft Internet Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Not supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Edge (EdgeHTML)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "16+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](48, I18N_9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](53, I18N_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](55, I18N_13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Google Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](60, I18N_15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Yandex.Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](70, I18N_17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Mozilla Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](75, I18N_19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Opera Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](80, I18N_21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "UC Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "12+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.cell[_ngcontent-%COMP%] {\n  width: 18.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9icm93c2Vycy9icm93c2Vycy5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9pbmZvL2Jyb3dzZXJzL2Jyb3dzZXJzLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2luZm8vYnJvd3NlcnMvYnJvd3NlcnMuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNlbGwge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2VsbCB7XG4gIHdpZHRoOiAxOC43NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `browsers`,
                templateUrl: `browsers.template.html`,
                styleUrls: [`./browsers.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/browsers/browsers.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/info/browsers/browsers.module.ts ***!
  \******************************************************/
/*! exports provided: BrowsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsersModule", function() { return BrowsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _browsers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browsers.component */ "./src/modules/info/browsers/browsers.component.ts");







class BrowsersModule {
}
BrowsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BrowsersModule });
BrowsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BrowsersModule_Factory(t) { return new (t || BrowsersModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrowsersModule, { declarations: [_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"])),
                ],
                declarations: [_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"]],
                exports: [_browsers_component__WEBPACK_IMPORTED_MODULE_4__["BrowsersComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-browsers-browsers-module.js.map