(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-related-related-module"],{

/***/ "./src/modules/info/related/related.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/info/related/related.component.ts ***!
  \*******************************************************/
/*! exports provided: RelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedComponent", function() { return RelatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _testing_screenshot_github_bot_screenshot_github_bot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../testing/screenshot-github-bot/screenshot-github-bot.component */ "./src/modules/info/testing/screenshot-github-bot/screenshot-github-bot.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2694744064078247794$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_1 = goog.getMsg("Friendly libraries");
    I18N_0 = MSG_EXTERNAL_2694744064078247794$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟b7aa34edeedd4b891f2723a49fe11d334581628f␟2694744064078247794:Friendly libraries`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7124534226406353621$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_4 = goog.getMsg("We maintain these projects ourselves and highly recommend them for modern Angular apps");
    I18N_3 = MSG_EXTERNAL_7124534226406353621$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟39915f48a53f3d478753be54a0a81e6c59ebd1ba␟7124534226406353621:We maintain these projects ourselves and highly recommend them for modern Angular apps`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9213245562477818304$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_6 = goog.getMsg(" Library ");
    I18N_5 = MSG_EXTERNAL_9213245562477818304$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:␟c377a35bc83b4bc354a1471629f8a075826cd743␟9213245562477818304: Library `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6462707728033475874$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_8 = goog.getMsg(" About ");
    I18N_7 = MSG_EXTERNAL_6462707728033475874$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:␟37a936eb96ec41ba79f8974ca59e1683f07c5dcf␟6462707728033475874: About `;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1823167528924363967$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_10 = goog.getMsg(" A tiny library that abstracts over different ways of view customization in Angular with one simple attribute component. {$startTagStrong} Included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong}", { "startTagStrong": "\uFFFD#17\uFFFD", "startTagCode": "\uFFFD#18\uFFFD", "closeTagCode": "\uFFFD/#18\uFFFD", "closeTagStrong": "\uFFFD/#17\uFFFD" });
    I18N_9 = MSG_EXTERNAL_1823167528924363967$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:␟7383b3e91e11f678d1545a8fc77118c5cb18840e␟1823167528924363967: A tiny library that abstracts over different ways of view customization in Angular with one simple attribute component. ${"\uFFFD#17\uFFFD"}:START_TAG_STRONG: Included with ${"\uFFFD#18\uFFFD"}:START_TAG_CODE:@taiga-ui/cdk${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#17\uFFFD"}:CLOSE_TAG_STRONG:`;
}
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6725029898757707897$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_12 = goog.getMsg(" Angular event plugins library for optimizing change detection cycles for performance sensitive events (such as {$startTagCode}touchmove{$closeTagCode} , {$startTagCode}scroll{$closeTagCode} , {$startTagCode}drag{$closeTagCode} etc.) and declarative {$startTagCode}preventDefault(){$closeTagCode} and {$startTagCode}stopPropagation(){$closeTagCode} as well as capture phase listeners. {$startTagStrong} Included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong} and enabled by {$startTagCode}TuiRootModule{$closeTagCode}", { "startTagCode": "[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]", "closeTagCode": "[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]", "startTagStrong": "\uFFFD#30\uFFFD", "closeTagStrong": "\uFFFD/#30\uFFFD" });
    I18N_11 = MSG_EXTERNAL_6725029898757707897$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_12;
}
else {
    I18N_11 = $localize `:␟7f020953ebccbdbd62e74fa0d58d24810369f62e␟6725029898757707897: Angular event plugins library for optimizing change detection cycles for performance sensitive events (such as ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:touchmove${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:scroll${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:drag${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: etc.) and declarative ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:preventDefault()${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:stopPropagation()${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: as well as capture phase listeners. ${"\uFFFD#30\uFFFD"}:START_TAG_STRONG: Included with ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:@taiga-ui/cdk${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#30\uFFFD"}:CLOSE_TAG_STRONG: and enabled by ${"[\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:TuiRootModule${"[\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_11);
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1355591436471482455$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_14 = goog.getMsg(" This library implements DOMPurify as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. See {$startLink} DOMPurify {$closeLink}", { "startLink": "\uFFFD#39\uFFFD", "closeLink": "\uFFFD/#39\uFFFD" });
    I18N_13 = MSG_EXTERNAL_1355591436471482455$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:␟36e5c30c31da3212c9ff1ee8fa9749fb33194303␟1355591436471482455: This library implements DOMPurify as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. See ${"\uFFFD#39\uFFFD"}:START_LINK: DOMPurify ${"\uFFFD/#39\uFFFD"}:CLOSE_LINK:`;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1565617546898598039$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_16 = goog.getMsg(" This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including Internet Explorer 11 ");
    I18N_15 = MSG_EXTERNAL_1565617546898598039$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_16;
}
else {
    I18N_15 = $localize `:␟a0596479620439011f5299eb96f4a5ebd4365167␟1565617546898598039: This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including Internet Explorer 11 `;
}
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6158778685070940252$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_18 = goog.getMsg(" High quality lightweight wrappers for native Web APIs for idiomatic use with Angular. {$startTagStrong}{$startTagCode}@ng-web-apis/common{$closeTagCode} , {$startTagCode}@ng-web-apis/mutation-observer{$closeTagCode} and {$startTagCode}@ng-web-apis/resize-observer{$closeTagCode} are included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong}", { "startTagStrong": "\uFFFD#52\uFFFD", "startTagCode": "[\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD|\uFFFD#56\uFFFD]", "closeTagCode": "[\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#56\uFFFD]", "closeTagStrong": "\uFFFD/#52\uFFFD" });
    I18N_17 = MSG_EXTERNAL_6158778685070940252$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_18;
}
else {
    I18N_17 = $localize `:␟02e6a25c4e1c8bd44dc6936cc5ed39c76b7ac0db␟6158778685070940252: High quality lightweight wrappers for native Web APIs for idiomatic use with Angular. ${"\uFFFD#52\uFFFD"}:START_TAG_STRONG:${"[\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD|\uFFFD#56\uFFFD]"}:START_TAG_CODE:@ng-web-apis/common${"[\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#56\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD|\uFFFD#56\uFFFD]"}:START_TAG_CODE:@ng-web-apis/mutation-observer${"[\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#56\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD|\uFFFD#56\uFFFD]"}:START_TAG_CODE:@ng-web-apis/resize-observer${"[\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#56\uFFFD]"}:CLOSE_TAG_CODE: are included with ${"[\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD|\uFFFD#56\uFFFD]"}:START_TAG_CODE:@taiga-ui/cdk${"[\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD|\uFFFD/#56\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#52\uFFFD"}:CLOSE_TAG_STRONG:`;
}
I18N_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_17);
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3944394986035882179$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_20 = goog.getMsg(" GitHub App to watch for repository's workflows with tests and pin screenshots differences images to bot's comment of pull request ");
    I18N_19 = MSG_EXTERNAL_3944394986035882179$$SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_20;
}
else {
    I18N_19 = $localize `:␟59ad59ea169713491705e2d6dc4b09b62fc96d23␟3944394986035882179: GitHub App to watch for repository's workflows with tests and pin screenshots differences images to bot's comment of pull request `;
}
class RelatedComponent {
    constructor() {
        this.screenshotBotName = _testing_screenshot_github_bot_screenshot_github_bot_component__WEBPACK_IMPORTED_MODULE_2__["SCREENSHOT_BOT_NAME"];
        this.screenshotBotLink = _testing_screenshot_github_bot_screenshot_github_bot_component__WEBPACK_IMPORTED_MODULE_2__["SCREENSHOT_BOT_LINK"];
    }
}
RelatedComponent.ɵfac = function RelatedComponent_Factory(t) { return new (t || RelatedComponent)(); };
RelatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatedComponent, selectors: [["related"]], decls: 63, vars: 2, consts: [[6, "header"], [1, "tui-table"], [1, "tui-table__tr"], [1, "tui-table__th"], [1, "tui-table__td", "cell"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-polymorpheus"], [1, "tui-table__td"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-event-plugins"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-dompurify"], ["tuiLink", "", "href", "https://github.com/cure53/DOMPurify"], ["tuiLink", "", "href", "https://github.com/tinkoff/angular-contenteditable-accessor"], ["tuiLink", "", "href", "http://ng-web-apis.github.io"], ["tuiLink", "", "target", "_blank", 3, "href"]], template: function RelatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " @tinkoff/ng-polymorpheus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](16, I18N_9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " @tinkoff/ng-event-plugins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](24, I18N_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " @tinkoff/ng-dompurify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](38, I18N_13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " @tinkoff/angular-contenteditable-accessor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](45, I18N_15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Web APIs for Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](51, I18N_17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](62, I18N_19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.screenshotBotLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Github App ", ctx.screenshotBotName, " ");
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.cell[_ngcontent-%COMP%] {\n  width: 21.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9yZWxhdGVkL3JlbGF0ZWQuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9yZWxhdGVkL3JlbGF0ZWQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvaW5mby9yZWxhdGVkL3JlbGF0ZWQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNlbGwge1xuICAgIHdpZHRoOiAyMS4yNXJlbTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2VsbCB7XG4gIHdpZHRoOiAyMS4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `related`,
                templateUrl: `related.template.html`,
                styleUrls: [`./related.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/info/related/related.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/info/related/related.module.ts ***!
  \****************************************************/
/*! exports provided: RelatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedModule", function() { return RelatedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _related_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related.component */ "./src/modules/info/related/related.component.ts");







class RelatedModule {
}
RelatedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RelatedModule });
RelatedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RelatedModule_Factory(t) { return new (t || RelatedModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatedModule, { declarations: [_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"])),
                ],
                declarations: [_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"]],
                exports: [_related_component__WEBPACK_IMPORTED_MODULE_4__["RelatedComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=info-related-related-module.js.map