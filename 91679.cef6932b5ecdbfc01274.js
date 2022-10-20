"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91679],{

/***/ 91679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RelatedModule": () => (/* binding */ RelatedModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/demo/src/modules/info/testing/screenshot-github-bot/screenshot-github-bot.component.ts
var screenshot_github_bot_component = __webpack_require__(83594);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/related/related.component.ts




let RelatedComponent = /*#__PURE__*/(() => {
  class RelatedComponent {
    constructor() {
      this.screenshotBotName = screenshot_github_bot_component/* SCREENSHOT_BOT_NAME */.wR;
      this.screenshotBotLink = screenshot_github_bot_component/* SCREENSHOT_BOT_LINK */.$1;
    }

  }

  RelatedComponent.ɵfac = function RelatedComponent_Factory(t) {
    return new (t || RelatedComponent)();
  };

  RelatedComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: RelatedComponent,
    selectors: [["related"]],
    decls: 62,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2694744064078247794$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_1 = goog.getMsg("Friendly libraries");
        i18n_0 = MSG_EXTERNAL_2694744064078247794$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟b7aa34edeedd4b891f2723a49fe11d334581628f␟2694744064078247794:Friendly libraries`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7124534226406353621$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_3 = goog.getMsg("We maintain these projects ourselves and highly recommend them for modern Angular apps");
        i18n_2 = MSG_EXTERNAL_7124534226406353621$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟39915f48a53f3d478753be54a0a81e6c59ebd1ba␟7124534226406353621:We maintain these projects ourselves and highly recommend them for modern Angular apps`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9213245562477818304$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_5 = goog.getMsg(" Library ");
        i18n_4 = MSG_EXTERNAL_9213245562477818304$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟c377a35bc83b4bc354a1471629f8a075826cd743␟9213245562477818304: Library `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6462707728033475874$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_7 = goog.getMsg(" About ");
        i18n_6 = MSG_EXTERNAL_6462707728033475874$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟37a936eb96ec41ba79f8974ca59e1683f07c5dcf␟6462707728033475874: About `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1823167528924363967$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_9 = goog.getMsg(" A tiny library that abstracts over different ways of view customization in Angular with one simple attribute component. {$startTagStrong} Included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#16\uFFFD",
          "startTagCode": "\uFFFD#17\uFFFD",
          "closeTagCode": "\uFFFD/#17\uFFFD",
          "closeTagStrong": "\uFFFD/#16\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1823167528924363967$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`:␟7383b3e91e11f678d1545a8fc77118c5cb18840e␟1823167528924363967: A tiny library that abstracts over different ways of view customization in Angular with one simple attribute component. ${"\uFFFD#16\uFFFD"}:START_TAG_STRONG: Included with ${"\uFFFD#17\uFFFD"}:START_TAG_CODE:@taiga-ui/cdk${"\uFFFD/#17\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6725029898757707897$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_11 = goog.getMsg(" Angular event plugins library for optimizing change detection cycles for performance sensitive events (such as {$startTagCode}touchmove{$closeTagCode} , {$startTagCode}scroll{$closeTagCode} , {$startTagCode}drag{$closeTagCode} etc.) and declarative {$startTagCode}preventDefault(){$closeTagCode} and {$startTagCode}stopPropagation(){$closeTagCode} as well as capture phase listeners. {$startTagStrong} Included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong} and enabled by {$startTagCode}TuiRootModule{$closeTagCode}", {
          "startTagCode": "[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]",
          "closeTagCode": "[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]",
          "startTagStrong": "\uFFFD#29\uFFFD",
          "closeTagStrong": "\uFFFD/#29\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_6725029898757707897$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`:␟7f020953ebccbdbd62e74fa0d58d24810369f62e␟6725029898757707897: Angular event plugins library for optimizing change detection cycles for performance sensitive events (such as ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:touchmove${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:scroll${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:drag${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE: etc.) and declarative ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:preventDefault()${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:stopPropagation()${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE: as well as capture phase listeners. ${"\uFFFD#29\uFFFD"}:START_TAG_STRONG: Included with ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:@taiga-ui/cdk${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#29\uFFFD"}:CLOSE_TAG_STRONG: and enabled by ${"[\uFFFD#24\uFFFD|\uFFFD#25\uFFFD|\uFFFD#26\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD]"}:START_TAG_CODE:TuiRootModule${"[\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_10 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_10);
      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1355591436471482455$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_13 = goog.getMsg(" This library implements DOMPurify as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. See {$startLink} DOMPurify {$closeLink}", {
          "startLink": "\uFFFD#38\uFFFD",
          "closeLink": "\uFFFD/#38\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_1355591436471482455$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_13;
      } else {
        i18n_12 = $localize`:␟36e5c30c31da3212c9ff1ee8fa9749fb33194303␟1355591436471482455: This library implements DOMPurify as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. See ${"\uFFFD#38\uFFFD"}:START_LINK: DOMPurify ${"\uFFFD/#38\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1565617546898598039$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_15 = goog.getMsg(" This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including Internet Explorer 11 ");
        i18n_14 = MSG_EXTERNAL_1565617546898598039$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_15;
      } else {
        i18n_14 = $localize`:␟a0596479620439011f5299eb96f4a5ebd4365167␟1565617546898598039: This accessor allows you to use Angular forms with contenteditable elements with ease. It has zero dependencies, other than Angular itself as peer and works with Angular 4+ in all modern browsers, including Internet Explorer 11 `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6158778685070940252$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_17 = goog.getMsg(" High quality lightweight wrappers for native Web APIs for idiomatic use with Angular. {$startTagStrong}{$startTagCode}@ng-web-apis/common{$closeTagCode} , {$startTagCode}@ng-web-apis/mutation-observer{$closeTagCode} and {$startTagCode}@ng-web-apis/resize-observer{$closeTagCode} are included with {$startTagCode}@taiga-ui/cdk{$closeTagCode}{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#51\uFFFD",
          "startTagCode": "[\uFFFD#52\uFFFD|\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD]",
          "closeTagCode": "[\uFFFD/#52\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD]",
          "closeTagStrong": "\uFFFD/#51\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_6158778685070940252$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_17;
      } else {
        i18n_16 = $localize`:␟02e6a25c4e1c8bd44dc6936cc5ed39c76b7ac0db␟6158778685070940252: High quality lightweight wrappers for native Web APIs for idiomatic use with Angular. ${"\uFFFD#51\uFFFD"}:START_TAG_STRONG:${"[\uFFFD#52\uFFFD|\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD]"}:START_TAG_CODE:@ng-web-apis/common${"[\uFFFD/#52\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#52\uFFFD|\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD]"}:START_TAG_CODE:@ng-web-apis/mutation-observer${"[\uFFFD/#52\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#52\uFFFD|\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD]"}:START_TAG_CODE:@ng-web-apis/resize-observer${"[\uFFFD/#52\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD]"}:CLOSE_TAG_CODE: are included with ${"[\uFFFD#52\uFFFD|\uFFFD#53\uFFFD|\uFFFD#54\uFFFD|\uFFFD#55\uFFFD]"}:START_TAG_CODE:@taiga-ui/cdk${"[\uFFFD/#52\uFFFD|\uFFFD/#53\uFFFD|\uFFFD/#54\uFFFD|\uFFFD/#55\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#51\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3944394986035882179$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_19 = goog.getMsg(" GitHub App to watch for repository's workflows with tests and pin screenshots differences images to bot's comment of pull request ");
        i18n_18 = MSG_EXTERNAL_3944394986035882179$$PROJECTS_DEMO_SRC_MODULES_INFO_RELATED_RELATED_COMPONENT_TS_19;
      } else {
        i18n_18 = $localize`:␟59ad59ea169713491705e2d6dc4b09b62fc96d23␟3944394986035882179: GitHub App to watch for repository's workflows with tests and pin screenshots differences images to bot's comment of pull request `;
      }

      return [["header", i18n_0], i18n_2, [1, "tui-table"], [1, "tui-table__tr"], [1, "tui-table__th"], i18n_4, i18n_6, [1, "tui-table__td", "cell"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-polymorpheus"], [1, "tui-table__td"], i18n_8, ["tuiLink", "", "href", "https://github.com/tinkoff/ng-event-plugins"], i18n_10, ["tuiLink", "", "href", "https://github.com/tinkoff/ng-dompurify"], i18n_12, ["tuiLink", "", "href", "https://github.com/cure53/DOMPurify"], ["tuiLink", "", "href", "https://github.com/tinkoff/angular-contenteditable-accessor"], i18n_14, ["tuiLink", "", "href", "http://ng-web-apis.github.io"], i18n_16, ["tuiLink", "", "target", "_blank", 3, "href"], i18n_18];
    },
    template: function RelatedComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18n */.SDv(2, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "table", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "th", 4);
        fesm2015_core/* ɵɵi18n */.SDv(7, 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "th", 4);
        fesm2015_core/* ɵɵi18n */.SDv(9, 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "a", 8);
        fesm2015_core/* ɵɵtext */._uU(13, " @tinkoff/ng-polymorpheus ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "td", 9);
        fesm2015_core/* ɵɵi18nStart */.tHW(15, 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "strong");
        fesm2015_core/* ɵɵelement */._UZ(17, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "a", 11);
        fesm2015_core/* ɵɵtext */._uU(21, " @tinkoff/ng-event-plugins ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "td", 9);
        fesm2015_core/* ɵɵi18nStart */.tHW(23, 12);
        fesm2015_core/* ɵɵelement */._UZ(24, "code");
        fesm2015_core/* ɵɵelement */._UZ(25, "code");
        fesm2015_core/* ɵɵelement */._UZ(26, "code");
        fesm2015_core/* ɵɵelement */._UZ(27, "code");
        fesm2015_core/* ɵɵelement */._UZ(28, "code");
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "strong");
        fesm2015_core/* ɵɵelement */._UZ(30, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(31, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(32, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(34, "a", 13);
        fesm2015_core/* ɵɵtext */._uU(35, " @tinkoff/ng-dompurify ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "td", 9);
        fesm2015_core/* ɵɵi18nStart */.tHW(37, 14);
        fesm2015_core/* ɵɵelement */._UZ(38, "a", 15);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(39, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(40, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(41, "a", 16);
        fesm2015_core/* ɵɵtext */._uU(42, " @tinkoff/angular-contenteditable-accessor ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(43, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(44, 17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(45, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(46, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(47, "a", 18);
        fesm2015_core/* ɵɵtext */._uU(48, " Web APIs for Angular ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(49, "td", 9);
        fesm2015_core/* ɵɵi18nStart */.tHW(50, 19);
        fesm2015_core/* ɵɵelementStart */.TgZ(51, "strong");
        fesm2015_core/* ɵɵelement */._UZ(52, "code");
        fesm2015_core/* ɵɵelement */._UZ(53, "code");
        fesm2015_core/* ɵɵelement */._UZ(54, "code");
        fesm2015_core/* ɵɵelement */._UZ(55, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(56, "tr", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(57, "td", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(58, "a", 20);
        fesm2015_core/* ɵɵtext */._uU(59);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(60, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(61, 21);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(58);
        fesm2015_core/* ɵɵproperty */.Q6J("href", ctx.screenshotBotLink, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" Github App ", ctx.screenshotBotName, " ");
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V],
    styles: ["[_nghost-%COMP%]{display:block}.cell[_ngcontent-%COMP%]{width:21.25rem}"],
    changeDetection: 0
  });
  return RelatedComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/related/related.module.ts






let RelatedModule = /*#__PURE__*/(() => {
  class RelatedModule {}

  RelatedModule.ɵfac = function RelatedModule_Factory(t) {
    return new (t || RelatedModule)();
  };

  RelatedModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: RelatedModule
  });
  RelatedModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(RelatedComponent))]]
  });
  return RelatedModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(RelatedModule, {
    declarations: [RelatedComponent],
    imports: [core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [RelatedComponent]
  });
})();

/***/ })

}]);