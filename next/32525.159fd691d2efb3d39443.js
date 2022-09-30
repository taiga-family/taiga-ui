"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[32525],{

/***/ 32525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IconSetModule": () => (/* binding */ IconSetModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.component.ts
var input_date_range_component = __webpack_require__(92483);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.directive.ts
var input_date_range_directive = __webpack_require__(48706);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/icon-set/examples/1/index.ts








const MAPPER = {
  tuiIconCalendarLarge: `date_range-24px`,
  tuiIconTooltipLarge: `help-24px`,
  tuiIconInfo: `info-16px`,
  tuiIconCloseLarge: `clear-24px`,
  tuiIconChevronLeftLarge: `keyboard_arrow_left-24px`,
  tuiIconChevronRightLarge: `keyboard_arrow_right-24px` // and so on

}; // This assumes that icons were properly processed

function iconsPath(name) {
  return `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`;
}
let TuiIconSetExample1 = /*#__PURE__*/(() => {
  class TuiIconSetExample1 {
    constructor() {
      this.date = null;
    }

  }

  TuiIconSetExample1.ɵfac = function TuiIconSetExample1_Factory(t) {
    return new (t || TuiIconSetExample1)();
  };

  TuiIconSetExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiIconSetExample1,
    selectors: [["tui-icon-set-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_ICONS_PATH,
      useValue: iconsPath
    }])],
    decls: 8,
    vars: 2,
    consts: [[1, "b-form"], ["tuiHintContent", "You can use any icons you want", 1, "tui-space_top-4", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"]],
    template: function TuiIconSetExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification");
        fesm2015_core/* ɵɵtext */._uU(2, " As usual with the DI this is hierarchical. Meaning you can provide different ");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
        fesm2015_core/* ɵɵtext */._uU(4, "TUI_ICONS_PATH");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(5, " and use different icons across your app. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-date-range", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiIconSetExample1_Template_tui_input_date_range_ngModelChange_6_listener($event) {
          return ctx.date = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Pick your favorite date range ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("ngModel", ctx.date);
      }
    },
    directives: [notification_component/* TuiNotificationComponent */.L, input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2
  });
  return TuiIconSetExample1;
})();
// EXTERNAL MODULE: ./projects/icons/public-api.ts + 2 modules
var icons_public_api = __webpack_require__(67350);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/expand/expand.component.ts
var expand_component = __webpack_require__(88618);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/icon-set/icon-set.component.ts















function IconSetComponent_tui_doc_copy_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-copy", 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const name_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", name_r1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(name_r1);
  }
}

let IconSetComponent = /*#__PURE__*/(() => {
  class IconSetComponent {
    constructor() {
      this.exampleSanitizer = __webpack_require__.e(/* import() */ 79654).then(__webpack_require__.t.bind(__webpack_require__, 79654, 17));
      this.example1 = {
        'process-icons.js': __webpack_require__.e(/* import() */ 31832).then(__webpack_require__.t.bind(__webpack_require__, 31832, 17)),
        'process-icons.ts': __webpack_require__.e(/* import() */ 37650).then(__webpack_require__.t.bind(__webpack_require__, 37650, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 35222).then(__webpack_require__.t.bind(__webpack_require__, 35222, 17)),
        HTML: __webpack_require__.e(/* import() */ 27390).then(__webpack_require__.t.bind(__webpack_require__, 27390, 17))
      };
      this.names = Object.keys(icons_public_api.tuiKitIcons);
      this.expanded = false;
    }

    toggle() {
      this.expanded = !this.expanded;
    }

  }

  IconSetComponent.ɵfac = function IconSetComponent_Factory(t) {
    return new (t || IconSetComponent)();
  };

  IconSetComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: IconSetComponent,
    selectors: [["icon-set"]],
    decls: 45,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8811200965267882277$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_1 = goog.getMsg("Icons set");
        i18n_0 = MSG_EXTERNAL_8811200965267882277$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2065126203376070983$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_3 = goog.getMsg(" Taiga UI uses {$startLink}{$startTagCode}tui-svg{$closeTagCode}{$closeLink} component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. ", {
          "startLink": "\uFFFD#3\uFFFD",
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_2065126203376070983$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\uFFFD#3\uFFFD"}:START_LINK:${"\uFFFD#4\uFFFD"}:START_TAG_CODE:tui-svg${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3842005636025308996$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_5 = goog.getMsg(" These are keys of following dictionaries: {$startTagCode}tuiCoreIcons{$closeTagCode} and {$startTagCode}tuiKitIcons{$closeTagCode} . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. ", {
          "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_3842005636025308996$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:tuiCoreIcons${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:tuiKitIcons${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1836251479999697458$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_7 = goog.getMsg(" There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular {$startTagCode}img src=\"xxx\"{$closeTagCode} with all the benefits of caching. In both cases you can control color with CSS {$startTagCode}color{$closeTagCode} style. ", {
          "startTagCode": "[\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]",
          "closeTagCode": "[\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"
        });
        i18n_6 = MSG_EXTERNAL_1836251479999697458$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:img src="xxx"${"[\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: style. `;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_971802390501079989$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_9 = goog.getMsg(" If you want to bundle your icons, you need to provide {$startTagCode}TUI_ICONS{$closeTagCode} token with a dictionary of name to source code. Also you need to process your icons by {$startTagCode}processIcons{$closeTagCode} from {$startTagCode}@taiga-ui/icons/scripts{$closeTagCode} package. Then move icons to the assets folder and provide {$startTagCode}TUI_ICONS_PATH{$closeTagCode} as seen in example below: ", {
          "startTagCode": "[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]",
          "closeTagCode": "[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_971802390501079989$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:TUI_ICONS${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:processIcons${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD]"}:CLOSE_TAG_CODE: as seen in example below: `;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4928000514802786074$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_11 = goog.getMsg("Material icons");
        i18n_10 = MSG_EXTERNAL_4928000514802786074$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6714212981041286774$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_13 = goog.getMsg(" If you use unsafe icons or {$startLink} Editor component {$closeLink} you need to provide {$startTagCode}TUI_SANITIZER{$closeTagCode} token, which is responsible for removing malicious code from the svg. We recommend to use {$startLink_1} NgDompurify {$closeLink} as a sanitizer. This library implements {$startLink_2} DOMPurify {$closeLink} as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. ", {
          "startLink": "\uFFFD#40\uFFFD",
          "closeLink": "[\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#43\uFFFD]",
          "startTagCode": "\uFFFD#41\uFFFD",
          "closeTagCode": "\uFFFD/#41\uFFFD",
          "startLink_1": "\uFFFD#42\uFFFD",
          "startLink_2": "\uFFFD#43\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_6714212981041286774$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_13;
      } else {
        i18n_12 = $localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\uFFFD#40\uFFFD"}:START_LINK: Editor component ${"[\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_LINK: you need to provide ${"\uFFFD#41\uFFFD"}:START_TAG_CODE:TUI_SANITIZER${"\uFFFD/#41\uFFFD"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\uFFFD#42\uFFFD"}:START_LINK_1: NgDompurify ${"[\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\uFFFD#43\uFFFD"}:START_LINK_2: DOMPurify ${"[\uFFFD/#40\uFFFD|\uFFFD/#42\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `;
      }

      i18n_12 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      return [["header", i18n_0], i18n_2, ["tuiLink", "", "routerLink", "/components/svg"], ["tuiButton", "", 3, "click"], [3, "expanded"], [1, "wrapper"], [3, "cdkCopyToClipboard", 4, "ngFor", "ngForOf"], i18n_4, i18n_6, ["status", "warning"], i18n_8, ["id", "material", "heading", i18n_10, 3, "content"], ["id", "sanitizer", 1, "sanitizer-example"], i18n_12, ["tuiLink", "", "routerLink", "/components/editor"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-dompurify", "target", "_blank"], ["tuiLink", "", "href", "https://github.com/cure53/DOMPurify", "target", "_blank"], ["filename", "app.module.ts", 3, "code"], [3, "cdkCopyToClipboard"]];
    },
    template: function IconSetComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function IconSetComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Show names ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-expand", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 5);
        fesm2015_core/* ɵɵtemplate */.YNc(10, IconSetComponent_tui_doc_copy_10_Template, 3, 2, "tui-doc-copy", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(12, 7);
        fesm2015_core/* ɵɵelement */._UZ(13, "code");
        fesm2015_core/* ɵɵelement */._UZ(14, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(16, 8);
        fesm2015_core/* ɵɵelement */._UZ(17, "code");
        fesm2015_core/* ɵɵelement */._UZ(18, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-notification", 9);
        fesm2015_core/* ɵɵtext */._uU(20, " Make sure you mark regions in your icons that need to be colored with ");
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "code");
        fesm2015_core/* ɵɵtext */._uU(22, "fill=\"currentColor\"");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(23, " or ");
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "code");
        fesm2015_core/* ɵɵtext */._uU(25, "stroke=\"currentColor\"");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(26, " . ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(27, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(28, 10);
        fesm2015_core/* ɵɵelement */._UZ(29, "code");
        fesm2015_core/* ɵɵelement */._UZ(30, "code");
        fesm2015_core/* ɵɵelement */._UZ(31, "code");
        fesm2015_core/* ɵɵelement */._UZ(32, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "tui-doc-example", 11);
        fesm2015_core/* ɵɵelement */._UZ(34, "tui-icon-set-example-1");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "section", 12);
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "h2");
        fesm2015_core/* ɵɵtext */._uU(37, "Sanitizer");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(39, 13);
        fesm2015_core/* ɵɵelement */._UZ(40, "a", 14);
        fesm2015_core/* ɵɵelement */._UZ(41, "code");
        fesm2015_core/* ɵɵelement */._UZ(42, "a", 15);
        fesm2015_core/* ɵɵelement */._UZ(43, "a", 16);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(44, "tui-doc-code", 17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("expanded", ctx.expanded);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.names);
        fesm2015_core/* ɵɵadvance */.xp6(23);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.example1);
        fesm2015_core/* ɵɵadvance */.xp6(11);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.exampleSanitizer);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, button_component/* TuiButtonComponent */.v, expand_component/* TuiExpandComponent */.S, common/* NgForOf */.sg, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiIconSetExample1, code_component/* TuiDocCodeComponent */.c, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],
    changeDetection: 0
  });
  return IconSetComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/icon-set/icon-set.module.ts











let IconSetModule = /*#__PURE__*/(() => {
  class IconSetModule {}

  IconSetModule.ɵfac = function IconSetModule_Factory(t) {
    return new (t || IconSetModule)();
  };

  IconSetModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: IconSetModule
  });
  IconSetModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, core.TuiLinkModule, core.TuiExpandModule, core.TuiButtonModule, kit.TuiInputDateRangeModule, core.TuiNotificationModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(IconSetComponent))]]
  });
  return IconSetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(IconSetModule, {
    declarations: [IconSetComponent, TuiIconSetExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, core.TuiLinkModule, core.TuiExpandModule, core.TuiButtonModule, kit.TuiInputDateRangeModule, core.TuiNotificationModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [IconSetComponent]
  });
})();

/***/ })

}]);