"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[43740],{

/***/ 43740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiScrollModule": () => (/* binding */ ExampleTuiScrollModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollbar.component.ts
var scrollbar_component = __webpack_require__(3881);
// EXTERNAL MODULE: ./projects/cdk/directives/element/element.directive.ts
var element_directive = __webpack_require__(34600);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/scroll/examples/1/index.ts









let TuiScrollExample1 = /*#__PURE__*/(() => {
  class TuiScrollExample1 {
    constructor(scrollService) {
      this.scrollService = scrollService;
      this.scrollTop = 0;
      this.scrollLeft = 0;
      this.duration = 300;
    }

    onClick({
      nativeElement
    }) {
      this.scrollService.scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration).subscribe();
    }

  }

  TuiScrollExample1.ɵfac = function TuiScrollExample1_Factory(t) {
    return new (t || TuiScrollExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiScrollService));
  };

  TuiScrollExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiScrollExample1,
    selectors: [["tui-scroll-example-1"]],
    decls: 18,
    vars: 3,
    consts: [[1, "flex"], [1, "element", 3, "ngModel", "ngModelChange"], ["tuiButton", "", "type", "button", 1, "element", 3, "click"], ["tuiElement", "", 1, "scrollbar"], ["scrollRef", "elementRef"], [1, "wrapper"]],
    template: function TuiScrollExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-count", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiScrollExample1_Template_tui_input_count_ngModelChange_1_listener($event) {
          return ctx.scrollTop = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, " scrollTop ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-count", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiScrollExample1_Template_tui_input_count_ngModelChange_3_listener($event) {
          return ctx.scrollLeft = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(4, " scrollLeft ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-count", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiScrollExample1_Template_tui_input_count_ngModelChange_5_listener($event) {
          return ctx.duration = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(6, " duration ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiScrollExample1_Template_button_click_7_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r1);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(10);

          return ctx.onClick(_r0);
        });
        fesm2015_core/* ɵɵtext */._uU(8, " Go! ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-scrollbar", 3, 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
        fesm2015_core/* ɵɵtext */._uU(13, " Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has been referred to as \"not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy\". ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
        fesm2015_core/* ɵɵtext */._uU(15, " Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A self-contained comedy team responsible for both writing and performing their work, the Pythons had creative control which allowed them to experiment with form and content, discarding rules of television comedy. Following their television work, they began making films, which include Monty Python and the Holy Grail (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been apparent for years, while in North America, it has coloured the work of cult performers from the early editions of Saturday Night Live through to more recent absurdist trends in television comedy. \"Pythonesque\" has entered the English lexicon as a result. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
        fesm2015_core/* ɵɵtext */._uU(17, " In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking world to find \"The Comedian's Comedian\", three of the six Pythons members were voted to be among the top 50 greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.scrollTop);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.scrollLeft);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.duration);
      }
    },
    directives: [input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, button_component/* TuiButtonComponent */.v, scrollbar_component/* TuiScrollbarComponent */.I, element_directive/* TuiElementDirective */.U],
    styles: [".flex[_ngcontent-%COMP%]{display:flex}.element[_ngcontent-%COMP%]{width:10rem;margin:0 1rem 1rem 0}.scrollbar[_ngcontent-%COMP%]{display:flex;max-width:25rem;max-height:18.75rem;background:var(--tui-secondary)}.wrapper[_ngcontent-%COMP%]{width:50rem;padding:0 1rem}"],
    changeDetection: 0
  });
  return TuiScrollExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/scroll/scroll.component.ts









function ExampleTuiScrollComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-scroll-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiScrollComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiScrollComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiScrollComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiScrollComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiScrollComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 4);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "em");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiScrollComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiScrollComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiScrollComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiScrollComponent_ng_template_2_ng_template_10_Template, 2, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
  }
}

function ExampleTuiScrollComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 18);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleInjectService);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleScroll);
  }
}

let ExampleTuiScrollComponent = /*#__PURE__*/(() => {
  class ExampleTuiScrollComponent {
    constructor() {
      this.exampleScroll = __webpack_require__.e(/* import() */ 5619).then(__webpack_require__.t.bind(__webpack_require__, 5619, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 5608).then(__webpack_require__.t.bind(__webpack_require__, 5608, 17));
      this.exampleInjectService = __webpack_require__.e(/* import() */ 11533).then(__webpack_require__.t.bind(__webpack_require__, 11533, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 270).then(__webpack_require__.t.bind(__webpack_require__, 270, 17)),
        HTML: __webpack_require__.e(/* import() */ 31083).then(__webpack_require__.t.bind(__webpack_require__, 31083, 17)),
        LESS: __webpack_require__.e(/* import() */ 74469).then(__webpack_require__.t.bind(__webpack_require__, 74469, 17))
      };
    }

  }

  ExampleTuiScrollComponent.ɵfac = function ExampleTuiScrollComponent_Factory(t) {
    return new (t || ExampleTuiScrollComponent)();
  };

  ExampleTuiScrollComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiScrollComponent,
    selectors: [["example-tui-scrollbar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7434814380312864429$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__1 = goog.getMsg("A service for smooth scroll");
        i18n_0 = MSG_EXTERNAL_7434814380312864429$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟5de0ed1a10693fe7bfcf452a4d062e7d6d4ef0d2␟7434814380312864429:A service for smooth scroll`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_125574219991762482$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__3 = goog.getMsg("Interactive sample");
        i18n_2 = MSG_EXTERNAL_125574219991762482$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟a4a09c4b0d6af52311275a94f3004e2ecdf4d9ff␟125574219991762482:Interactive sample`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5305478869277950661$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__5 = goog.getMsg(" Method {$startTagStrong}{$startTagCode}scroll$: Observable<[number, number]>{$closeTagCode}{$closeTagStrong}{$startEmphasisedText} (emits a tuple tuple {$startTagCode}[scrollTop, scrollLeft]{$closeTagCode} ) {$closeEmphasisedText}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "startEmphasisedText": "\uFFFD#4\uFFFD",
          "closeEmphasisedText": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5305478869277950661$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟b81a0b399e9354cee346d86f6a8b08bb0420d52e␟5305478869277950661: Method ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:scroll$: Observable<[number, number]>${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD#4\uFFFD"}:START_EMPHASISED_TEXT: (emits a tuple tuple ${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:[scrollTop, scrollLeft]${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: ) ${"\uFFFD/#4\uFFFD"}:CLOSE_EMPHASISED_TEXT:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8382346508948398477$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___7 = goog.getMsg(" Element to be scrolled ");
        i18n_6 = MSG_EXTERNAL_8382346508948398477$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟1c588a396dbae7596fc24c0bb43376fa4c19f599␟8382346508948398477: Element to be scrolled `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4128706006600229434$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___9 = goog.getMsg(" Target position from top ");
        i18n_8 = MSG_EXTERNAL_4128706006600229434$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f1b6055ccf956ed74ee230f354dbfd6001c848ea␟4128706006600229434: Target position from top `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3555234076377898325$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___11 = goog.getMsg("{$startTagStrong}Optional{$closeTagStrong} . Target position from left ", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_3555234076377898325$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟c0db8adfe4f9678fe2810608ec1194c1d11f0127␟3555234076377898325:${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Optional${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . Target position from left `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5909677013173175174$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___13 = goog.getMsg("{$startTagStrong}Optional{$closeTagStrong} . Duration time in ms (0 for an instant scroll). ", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_5909677013173175174$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟ac7106bd93469a955bf2be84d89e4d8fc405d87b␟5909677013173175174:${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Optional${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . Duration time in ms (0 for an instant scroll). `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8146004937546901285$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__15 = goog.getMsg(" Inject {$startTagCode}TuiScrollService{$closeTagCode} into your component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_8146004937546901285$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟2b1758becd0964476830b80da8ddfef67ae32329␟8146004937546901285: Inject ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiScrollService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component: `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6628741806214233706$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__17 = goog.getMsg(" Call {$startTagCode}scroll${$closeTagCode} method and subscribe to returned {$startTagCode}Observable{$closeTagCode} : ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_16 = MSG_EXTERNAL_6628741806214233706$$PROJECTS_DEMO_SRC_MODULES_SERVICES_SCROLL_SCROLL_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟82225f9960bdee8c0d9f0d4fdcd0c93ef325eae3␟6628741806214233706: Call ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:scroll$${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: method and subscribe to returned ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: : `;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      return [["header", "ScrollService", "package", "CDK", "path", "cdk/services/scroll.service.ts"], ["pageTab", ""], i18n_0, ["id", "interactive", "heading", i18n_2, 3, "content"], [1, "b-full-width"], i18n_4, [3, "showValues"], ["documentationPropertyName", "element", "documentationPropertyType", "Element"], ["documentationPropertyName", "scrollTop", "documentationPropertyType", "number"], ["documentationPropertyName", "scrollLeft", "documentationPropertyType", "number"], ["documentationPropertyName", "duration", "documentationPropertyType", "number"], i18n_6, i18n_8, i18n_10, i18n_12, [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.component.ts", 3, "code"], i18n_16];
    },
    template: function ExampleTuiScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiScrollComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiScrollComponent_ng_template_2_Template, 11, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiScrollComponent_ng_template_3_Template, 12, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiScrollExample1, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".wrapper[_ngcontent-%COMP%]{width:31.25rem;height:31.25rem;overflow:auto;padding:1.25rem;background-color:var(--tui-secondary)}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar, .wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:2.667rem solid transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.content[_ngcontent-%COMP%]{position:relative;width:62.5rem;height:62.5rem}"],
    changeDetection: 0
  });
  return ExampleTuiScrollComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/scroll/scroll.module.ts











let ExampleTuiScrollModule = /*#__PURE__*/(() => {
  class ExampleTuiScrollModule {}

  ExampleTuiScrollModule.ɵfac = function ExampleTuiScrollModule_Factory(t) {
    return new (t || ExampleTuiScrollModule)();
  };

  ExampleTuiScrollModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiScrollModule
  });
  ExampleTuiScrollModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    providers: [cdk.TuiScrollService],
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, cdk.TuiElementModule, kit.TuiInputCountModule, core.TuiButtonModule, core.TuiScrollbarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiScrollComponent))]]
  });
  return ExampleTuiScrollModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiScrollModule, {
    declarations: [ExampleTuiScrollComponent, TuiScrollExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, cdk.TuiElementModule, kit.TuiInputCountModule, core.TuiButtonModule, core.TuiScrollbarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiScrollComponent]
  });
})();

/***/ })

}]);