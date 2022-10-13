"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[90776],{

/***/ 90776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTokensModule": () => (/* binding */ ExampleTokensModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/1/index.ts


let TuiTokensExample1 = /*#__PURE__*/(() => {
  class TuiTokensExample1 {
    constructor(renderer) {
      this.renderer = renderer;
      this.style = this.renderer.createElement(`style`);
    }

  }

  TuiTokensExample1.ɵfac = function TuiTokensExample1_Factory(t) {
    return new (t || TuiTokensExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_DEFAULT_RENDERER));
  };

  TuiTokensExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample1,
    selectors: [["tui-token-example-1"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_705840752082841277$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Inject this token if you need access to Renderer inside a singleton service.");
        i18n_0 = MSG_EXTERNAL_705840752082841277$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟a45b7001e37ea8248fd55ba5ae99d24dd723d6a1␟705840752082841277:Inject this token if you need access to Renderer inside a singleton service.`;
      }

      return [i18n_0];
    },
    template: function TuiTokensExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/2/index.ts




let TuiTokensExample2 = /*#__PURE__*/(() => {
  class TuiTokensExample2 {
    constructor(dialogs) {
      this.dialogs = dialogs;
    }

  }

  TuiTokensExample2.ɵfac = function TuiTokensExample2_Factory(t) {
    return new (t || TuiTokensExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_DIALOGS, 8));
  };

  TuiTokensExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample2,
    selectors: [["tui-token-example-2"]],
    decls: 6,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3318931371219148105$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" A multi token of Observables of modal dialogs displayed by {$startLink} TuiDialogHostComponent {$closeLink} .\n", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_3318931371219148105$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟c3d79f09b1c77f498f804685e4ac8abfc97d1263␟3318931371219148105: A multi token of Observables of modal dialogs displayed by ${"\uFFFD#2\uFFFD"}:START_LINK: TuiDialogHostComponent ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: .
`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8403177569073028050$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" You can create your own service extending {$startLink} AbstractTuiDialogService {$closeLink} to easily add modal dialogs to your application.\n", {
          "startLink": "\uFFFD#5\uFFFD",
          "closeLink": "\uFFFD/#5\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_8403177569073028050$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟01fcb6df1b0ea45a686bb2d7f78e6f316704ee3f␟8403177569073028050: You can create your own service extending ${"\uFFFD#5\uFFFD"}:START_LINK: AbstractTuiDialogService ${"\uFFFD/#5\uFFFD"}:CLOSE_LINK: to easily add modal dialogs to your application.
`;
      }

      return [i18n_0, ["tuiLink", "", "routerLink", "/dialog"], i18n_2, ["tuiLink", "", "routerLink", "/components/dialog"]];
    },
    template: function TuiTokensExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "a", 1);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(4, 2);
        fesm2015_core/* ɵɵelement */._UZ(5, "a", 3);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/3/index.ts


let TuiTokensExample3 = /*#__PURE__*/(() => {
  class TuiTokensExample3 {
    constructor(tuiFocusableComponent) {
      this.tuiFocusableComponent = tuiFocusableComponent;
    }

  }

  TuiTokensExample3.ɵfac = function TuiTokensExample3_Factory(t) {
    return new (t || TuiTokensExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_FOCUSABLE_ITEM_ACCESSOR, 8));
  };

  TuiTokensExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample3,
    selectors: [["tui-token-example-3"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3280607424648339721$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.\n");
        i18n_0 = MSG_EXTERNAL_3280607424648339721$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟dabfe4dcd5358df2710c18d91692fca955cfe97e␟3280607424648339721: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.
`;
      }

      return [i18n_0];
    },
    template: function TuiTokensExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/4/index.ts




let TuiTokensExample4 = /*#__PURE__*/(() => {
  class TuiTokensExample4 {
    constructor(isAndroid) {
      this.isAndroid = isAndroid;
    }

  }

  TuiTokensExample4.ɵfac = function TuiTokensExample4_Factory(t) {
    return new (t || TuiTokensExample4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_ANDROID));
  };

  TuiTokensExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample4,
    selectors: [["tui-token-example-4"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7919254654716806629$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes {$startLink} TUI_IS_MOBILE {$closeLink} and {$startLink_1} TUI_IS_IOS {$closeLink} , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)\n", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink_1": "\uFFFD#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7919254654716806629$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_4_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟f45f6ff9b077d96c96c0492ce03b8d2bb218bd4c␟7919254654716806629: A token with a factory. It takes ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_IS_MOBILE ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#3\uFFFD"}:START_LINK_1: TUI_IS_IOS ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)
`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [i18n_0, ["tuiLink", "", "routerLink", ".", "fragment", "is-mobile"], ["tuiLink", "", "routerLink", ".", "fragment", "is-ios"]];
    },
    template: function TuiTokensExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "a", 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "a", 2);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/5/index.ts




let TuiTokensExample5 = /*#__PURE__*/(() => {
  class TuiTokensExample5 {
    constructor(isIos) {
      this.isIos = isIos;
    }

  }

  TuiTokensExample5.ɵfac = function TuiTokensExample5_Factory(t) {
    return new (t || TuiTokensExample5)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_IOS));
  };

  TuiTokensExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample5,
    selectors: [["tui-token-example-5"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7260144031031628013$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_5_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes {$startLink} TUI_IS_MOBILE {$closeLink} and if it is true detects iOS devices with a regex\n", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7260144031031628013$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_5_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟91528f04c4deee77ae0cf540a8023262f2ab6665␟7260144031031628013: A token with a factory. It takes ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_IS_MOBILE ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: and if it is true detects iOS devices with a regex
`;
      }

      return [i18n_0, ["tuiLink", "", "routerLink", ".", "fragment", "is-mobile"]];
    },
    template: function TuiTokensExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "a", 1);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/6/index.ts


let TuiTokensExample6 = /*#__PURE__*/(() => {
  class TuiTokensExample6 {
    constructor(isMobile) {
      this.isMobile = isMobile;
    }

  }

  TuiTokensExample6.ɵfac = function TuiTokensExample6_Factory(t) {
    return new (t || TuiTokensExample6)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_MOBILE));
  };

  TuiTokensExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample6,
    selectors: [["tui-token-example-6"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5737617888014424543$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_6_INDEX_TS_1 = goog.getMsg(" A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices\n");
        i18n_0 = MSG_EXTERNAL_5737617888014424543$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_6_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟abf3ac0a1bcf55a9764c7d357f716e8c46ec4c7a␟5737617888014424543: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices
`;
      }

      return [i18n_0];
    },
    template: function TuiTokensExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample6;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/7/index.ts



let TuiTokensExample7 = /*#__PURE__*/(() => {
  class TuiTokensExample7 {
    constructor(isMobileRes$) {
      this.isMobileRes$ = isMobileRes$;
    }

  }

  TuiTokensExample7.ɵfac = function TuiTokensExample7_Factory(t) {
    return new (t || TuiTokensExample7)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_IS_MOBILE_RES));
  };

  TuiTokensExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample7,
    selectors: [["tui-token-example-7"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8203841722519092830$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_7_INDEX_TS_1 = goog.getMsg(" A token with a factory. It compares the viewport width and the value from the TUI_MEDIA token to detect users with mobile resolution\n");
        i18n_0 = MSG_EXTERNAL_8203841722519092830$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_7_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟74bcd2774358768b8d8a14cfb7867e050a20d795␟8203841722519092830: A token with a factory. It compares the viewport width and the value from the TUI_MEDIA token to detect users with mobile resolution
`;
      }

      return [i18n_0];
    },
    template: function TuiTokensExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample7;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/8/index.ts




let TuiTokensExample8 = /*#__PURE__*/(() => {
  class TuiTokensExample8 {
    constructor(TuiNumberFormatSettings) {
      this.TuiNumberFormatSettings = TuiNumberFormatSettings;
    }

  }

  TuiTokensExample8.ɵfac = function TuiTokensExample8_Factory(t) {
    return new (t || TuiTokensExample8)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_NUMBER_FORMAT));
  };

  TuiTokensExample8.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample8,
    selectors: [["tui-token-example-8"]],
    decls: 28,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6639559641070555035$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_8_INDEX_TS_1 = goog.getMsg("{$startTagDiv} Using {$startTagStrong}TUI_NUMBER_FORMAT{$closeTagStrong} injection token you can customize numbers formatting. {$closeTagDiv}{$startTagDiv}For example: 10 500,33{$closeTagDiv}{$startTagDiv}Can be customized as: 10/500.33{$closeTagDiv}{$startTagSection}{$startHeadingLevel3}Defaults:{$closeHeadingLevel3}{$startUnorderedList}{$startListItem} decimalSeparator = {$startTagCode},{$closeTagCode}{$closeListItem}{$startListItem} thousandSeparator = {$startTagCode}CHAR_NO_BREAK_SPACE{$closeTagCode}{$closeListItem}{$startListItem} zeroPadding = {$startTagCode}true{$closeTagCode}{$closeListItem}{$closeUnorderedList}{$closeTagSection}{$startTagSection}{$startHeadingLevel3}Components that are customizable:{$closeHeadingLevel3}{$startUnorderedList}{$startListItem}{$startLink} TuiMoneyComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_1} TuiFormatNumberPipe {$closeLink}{$closeListItem}{$startListItem}{$startLink_2} TuiInputNumberComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_3} TuiInputSliderComponent {$closeLink}{$closeListItem}{$startListItem}{$startLink_4} TuiInputRangeComponent {$closeLink}{$closeListItem}{$closeUnorderedList}{$closeTagSection}", {
          "startTagDiv": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD",
          "closeTagDiv": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagSection": "[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]",
          "startHeadingLevel3": "[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]",
          "closeHeadingLevel3": "[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]",
          "startUnorderedList": "[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]",
          "startListItem": "[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]",
          "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]",
          "closeListItem": "[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]",
          "closeUnorderedList": "[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]",
          "closeTagSection": "[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]",
          "startLink": "\uFFFD#19\uFFFD",
          "closeLink": "[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]",
          "startLink_1": "\uFFFD#21\uFFFD",
          "startLink_2": "\uFFFD#23\uFFFD",
          "startLink_3": "\uFFFD#25\uFFFD",
          "startLink_4": "\uFFFD#27\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6639559641070555035$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_EXAMPLES_8_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟0c2f92ed6e4c694e9e5777611745fef956fc57b2␟6639559641070555035:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV: Using ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:TUI_NUMBER_FORMAT${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: injection token you can customize numbers formatting. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV:For example: 10 500,33${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_DIV:Can be customized as: 10/500.33${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_DIV:${"[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_SECTION:${"[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]"}:START_HEADING_LEVEL3:Defaults:${"[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_HEADING_LEVEL3:${"[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: decimalSeparator = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:,${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: thousandSeparator = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:CHAR_NO_BREAK_SPACE${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM: zeroPadding = ${"[\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:true${"[\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_SECTION:${"[\uFFFD#6\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_SECTION:${"[\uFFFD#7\uFFFD|\uFFFD#16\uFFFD]"}:START_HEADING_LEVEL3:Components that are customizable:${"[\uFFFD/#7\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_HEADING_LEVEL3:${"[\uFFFD#8\uFFFD|\uFFFD#17\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#19\uFFFD"}:START_LINK: TuiMoneyComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#21\uFFFD"}:START_LINK_1: TuiFormatNumberPipe ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#23\uFFFD"}:START_LINK_2: TuiInputNumberComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#25\uFFFD"}:START_LINK_3: TuiInputSliderComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#27\uFFFD"}:START_LINK_4: TuiInputRangeComponent ${"[\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#8\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#6\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_SECTION:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [i18n_0, [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["tuiLink", "", "routerLink", "/components/money"], ["tuiLink", "", "routerLink", "/pipes/format-number"], ["tuiLink", "", "routerLink", "/components/input-number"], ["tuiLink", "", "routerLink", "/components/input-slider"], ["tuiLink", "", "routerLink", "/components/input-range"]];
    },
    template: function TuiTokensExample8_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
        fesm2015_core/* ɵɵelement */._UZ(3, "strong");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "div");
        fesm2015_core/* ɵɵelement */._UZ(5, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "section");
        fesm2015_core/* ɵɵelement */._UZ(7, "h3");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "ul", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(10, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(12, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(14, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "section");
        fesm2015_core/* ɵɵelement */._UZ(16, "h3");
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "ul", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(19, "a", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(21, "a", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(23, "a", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(25, "a", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "li", 2);
        fesm2015_core/* ɵɵelement */._UZ(27, "a", 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample8;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/examples/9/index.ts







function TuiTokensExample9_li_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "li", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 5);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const component_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", component_r1.link)("fragment", component_r1.fragment);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", component_r1.name, " ");
  }
}

let TuiTokensExample9 = /*#__PURE__*/(() => {
  class TuiTokensExample9 {
    constructor() {
      this.provideFirstDayOfWeekToken = __webpack_require__.e(/* import() */ 22106).then(__webpack_require__.t.bind(__webpack_require__, 22106, 17));
      this.customizableComponentsViaThisToken = [{
        name: `Calendar`,
        link: `/components/calendar`,
        fragment: `localization`
      }, {
        name: `CalendarRange`,
        link: `/components/calendar-range`,
        fragment: `localization`
      }, {
        name: `MobileCalendar`,
        link: `/components/mobile-calendar`,
        fragment: `localization`
      }];
    }

  }

  TuiTokensExample9.ɵfac = function TuiTokensExample9_Factory(t) {
    return new (t || TuiTokensExample9)();
  };

  TuiTokensExample9.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTokensExample9,
    selectors: [["tui-token-example-9"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_FIRST_DAY_OF_WEEK,
      useValue: 0
      /* Sunday */

    }])],
    decls: 11,
    vars: 2,
    consts: [[1, "tui-space_top-0"], [3, "code"], [1, "tui-list", "tui-list_small"], ["class", "tui-list__item", 4, "ngFor", "ngForOf"], [1, "tui-list__item"], ["tuiLink", "", 3, "routerLink", "fragment"]],
    template: function TuiTokensExample9_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
        fesm2015_core/* ɵɵtext */._uU(3, "TUI_FIRST_DAY_OF_WEEK");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4, " injection token to change start day of the week (Monday by default).\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "h3");
        fesm2015_core/* ɵɵtext */._uU(8, "This token can customize the following components:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "ul", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiTokensExample9_li_10_Template, 3, 3, "li", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.provideFirstDayOfWeekToken);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.customizableComponentsViaThisToken);
      }
    },
    directives: [code_component/* TuiDocCodeComponent */.c, common/* NgForOf */.sg, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTokensExample9;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/tokens.component.ts















function ExampleTokensComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-token-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-token-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-token-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-token-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-token-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-token-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-token-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-token-example-8");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-token-example-9");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example8);
  }
}

let ExampleTokensComponent = /*#__PURE__*/(() => {
  class ExampleTokensComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 36917).then(__webpack_require__.t.bind(__webpack_require__, 36917, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 29483).then(__webpack_require__.t.bind(__webpack_require__, 29483, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 72468).then(__webpack_require__.t.bind(__webpack_require__, 72468, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 72394).then(__webpack_require__.t.bind(__webpack_require__, 72394, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 63344).then(__webpack_require__.t.bind(__webpack_require__, 63344, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 39798).then(__webpack_require__.t.bind(__webpack_require__, 39798, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 5135).then(__webpack_require__.t.bind(__webpack_require__, 5135, 17))
      };
      this.example8 = {
        TypeScript: __webpack_require__.e(/* import() */ 68958).then(__webpack_require__.t.bind(__webpack_require__, 68958, 17))
      };
    }

  }

  ExampleTokensComponent.ɵfac = function ExampleTokensComponent_Factory(t) {
    return new (t || ExampleTokensComponent)();
  };

  ExampleTokensComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTokensComponent,
    selectors: [["example-tokens"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: public_api/* TUI_DOC_CODE_EDITOR */.lW,
      useValue: null
    }])],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4548722462586549001$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_TOKENS_COMPONENT_TS_1 = goog.getMsg("Tokens");
        i18n_0 = MSG_EXTERNAL_4548722462586549001$$PROJECTS_DEMO_SRC_MODULES_UTILS_TOKENS_TOKENS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟831c70609f5320ba73bb112526ec9cb86c71367c␟4548722462586549001:Tokens`;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/tokens"], ["pageTab", ""], ["id", "default-renderer", "heading", "TUI_DEFAULT_RENDERER", 3, "content"], ["id", "dialog", "heading", "TUI_DIALOGS", 3, "content"], ["id", "focusable-item-accessor", "heading", "TUI_FOCUSABLE_ITEM_ACCESSOR", 3, "content"], ["id", "is-android", "heading", "TUI_IS_ANDROID", 3, "content"], ["id", "is-ios", "heading", "TUI_IS_IOS", 3, "content"], ["id", "is-mobile", "heading", "TUI_IS_MOBILE", 3, "content"], ["id", "is-mobile-res", "heading", "TUI_IS_MOBILE_RES", 3, "content"], ["id", "number-format", "heading", "TUI_NUMBER_FORMAT", 3, "content"], ["id", "first-day-of-week", "heading", "TUI_FIRST_DAY_OF_WEEK"]];
    },
    template: function ExampleTokensComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTokensComponent_ng_template_1_Template, 18, 8, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTokensExample1, TuiTokensExample2, TuiTokensExample3, TuiTokensExample4, TuiTokensExample5, TuiTokensExample6, TuiTokensExample7, TuiTokensExample8, TuiTokensExample9],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTokensComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/tokens/tokens.module.ts
















let ExampleTokensModule = /*#__PURE__*/(() => {
  class ExampleTokensModule {}

  ExampleTokensModule.ɵfac = function ExampleTokensModule_Factory(t) {
    return new (t || ExampleTokensModule)();
  };

  ExampleTokensModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTokensModule
  });
  ExampleTokensModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTokensComponent))]]
  });
  return ExampleTokensModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTokensModule, {
    declarations: [ExampleTokensComponent, TuiTokensExample1, TuiTokensExample2, TuiTokensExample3, TuiTokensExample4, TuiTokensExample5, TuiTokensExample6, TuiTokensExample7, TuiTokensExample8, TuiTokensExample9],
    imports: [common/* CommonModule */.ez, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTokensComponent]
  });
})();

/***/ })

}]);