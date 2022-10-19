"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[39507],{

/***/ 39507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLineClampModule": () => (/* binding */ ExampleTuiLineClampModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/kit/components/line-clamp/line-clamp.component.ts
var line_clamp_component = __webpack_require__(80275);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/line-clamp/examples/1/index.ts





function TuiLineClampExample1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(1, " Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiLineClampExample1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 5);
    fesm2015_core/* ɵɵtext */._uU(1, "Jorah Mormont of House Mormont, Lord of Bear Island");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiLineClampExample1 = /*#__PURE__*/(() => {
  class TuiLineClampExample1 {}

  TuiLineClampExample1.ɵfac = function TuiLineClampExample1_Factory(t) {
    return new (t || TuiLineClampExample1)();
  };

  TuiLineClampExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineClampExample1,
    selectors: [["tui-line-clamp-example-1"]],
    decls: 13,
    vars: 6,
    consts: [[1, "island"], [3, "content", "lineHeight", "linesLimit"], ["daenerys", ""], ["mormont", ""], [1, "hint"], [1, "hint", "no-wrap"]],
    template: function TuiLineClampExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-clamp", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-notification", 0);
        fesm2015_core/* ɵɵtext */._uU(3, " Use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
        fesm2015_core/* ɵɵtext */._uU(5, "white-space: nowrap");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(6, " to expand to the right\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-island", 0);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-line-clamp", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiLineClampExample1_ng_template_9_Template, 2, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(11, TuiLineClampExample1_ng_template_11_Template, 2, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(10);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(12);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("lineHeight", 20)("linesLimit", 2);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r2)("lineHeight", 20)("linesLimit", 1);
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, line_clamp_component/* TuiLineClampComponent */.b, notification_component/* TuiNotificationComponent */.L],
    styles: [".island[_ngcontent-%COMP%]{width:20rem;margin-bottom:1rem;box-sizing:border-box}.hint[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}"],
    changeDetection: 0
  });
  return TuiLineClampExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/line-clamp/examples/2/index.ts




let TuiLineClampExample2 = /*#__PURE__*/(() => {
  class TuiLineClampExample2 {
    constructor() {
      this.linesLimit = 2;
    }

    toggle() {
      this.linesLimit = this.collpased ? 10 : 2;
    }

    get collpased() {
      return this.linesLimit === 2;
    }

  }

  TuiLineClampExample2.ɵfac = function TuiLineClampExample2_Factory(t) {
    return new (t || TuiLineClampExample2)();
  };

  TuiLineClampExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineClampExample2,
    selectors: [["tui-line-clamp-example-2"]],
    decls: 4,
    vars: 1,
    consts: [["size", "l", 1, "island"], ["content", "Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons", 1, "clamp", 3, "linesLimit"], ["tuiButton", "", 1, "tui-space_top-4", 3, "click"]],
    template: function TuiLineClampExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-clamp", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiLineClampExample2_Template_button_click_2_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Toggle ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("linesLimit", ctx.linesLimit);
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, line_clamp_component/* TuiLineClampComponent */.b, button_component/* TuiButtonComponent */.v],
    styles: [".island[_ngcontent-%COMP%]{max-width:20rem}.clamp[_ngcontent-%COMP%]{pointer-events:none}"],
    changeDetection: 0
  });
  return TuiLineClampExample2;
})();
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var ng_web_apis_common = __webpack_require__(62579);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/line-clamp/examples/3/index.ts




function TuiLineClampExample3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
  }
}

let TuiLineClampExample3 = /*#__PURE__*/(() => {
  class TuiLineClampExample3 {
    constructor(windowRef) {
      this.windowRef = windowRef;
    }

    getDynamicLineHeight(element) {
      return parseInt(this.windowRef.getComputedStyle(element).lineHeight);
    }

    getDynamicLineLimit(element) {
      return Math.floor(element.offsetHeight / 24);
    }

  }

  TuiLineClampExample3.ɵfac = function TuiLineClampExample3_Factory(t) {
    return new (t || TuiLineClampExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(ng_web_apis_common/* WINDOW */.m9));
  };

  TuiLineClampExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineClampExample3,
    selectors: [["tui-line-clamp-example-3"]],
    decls: 6,
    vars: 3,
    consts: [[1, "example"], [1, "line-clamp-box"], ["parent", ""], [1, "line-clamp", 3, "lineHeight", "linesLimit", "content"], ["content", ""]],
    template: function TuiLineClampExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1, 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-clamp", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiLineClampExample3_ng_template_4_Template, 1, 0, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        const _r1 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("lineHeight", ctx.getDynamicLineHeight(_r0))("linesLimit", ctx.getDynamicLineLimit(_r0))("content", _r1);
      }
    },
    directives: [line_clamp_component/* TuiLineClampComponent */.b],
    styles: [".example[_ngcontent-%COMP%]{min-height:15rem;max-height:15rem}.line-clamp-box[_ngcontent-%COMP%]{height:5.75rem;min-height:1.5rem;resize:both;overflow:auto;padding:.5rem;border-radius:var(--tui-radius-l);border:1px solid var(--tui-base-03)}"],
    changeDetection: 0
  });
  return TuiLineClampExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/line-clamp/line-clamp.component.ts













function ExampleTuiLineClampComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-clamp-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-line-clamp-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-line-clamp-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiLineClampComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Lorem ipsum ");
    fesm2015_core/* ɵɵelement */._UZ(1, "br");
    fesm2015_core/* ɵɵtext */._uU(2, " Gaudeamus igitur ");
    fesm2015_core/* ɵɵelement */._UZ(3, "br");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "strong");
    fesm2015_core/* ɵɵtext */._uU(5, "Carpe diem");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "br");
    fesm2015_core/* ɵɵtext */._uU(7, " Veni, vidi, vici ");
  }
}

function ExampleTuiLineClampComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiLineClampComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiLineClampComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiLineClampComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiLineClampComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-clamp", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLineClampComponent_ng_template_2_ng_template_2_Template, 8, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiLineClampComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineClampComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.content = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiLineClampComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineClampComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.maxWidth = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiLineClampComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineClampComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.lineHeight = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiLineClampComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineClampComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.linesLimit = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("max-width", ctx_r1.maxWidth, "px");
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.content || _r3)("linesLimit", ctx_r1.linesLimit)("lineHeight", ctx_r1.lineHeight);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.content);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.maxWidth);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.lineHeight);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.linesLimit);
  }
}

function ExampleTuiLineClampComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 17);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiLineClampComponent = /*#__PURE__*/(() => {
  class ExampleTuiLineClampComponent {
    constructor() {
      this.linesLimit = 1;
      this.lineHeight = 24;
      this.maxWidth = 100;
      this.content = ``;
      this.exampleModule = __webpack_require__.e(/* import() */ 45398).then(__webpack_require__.t.bind(__webpack_require__, 45398, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 58456).then(__webpack_require__.t.bind(__webpack_require__, 58456, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 59432).then(__webpack_require__.t.bind(__webpack_require__, 59432, 17)),
        HTML: __webpack_require__.e(/* import() */ 75203).then(__webpack_require__.t.bind(__webpack_require__, 75203, 17)),
        LESS: __webpack_require__.e(/* import() */ 37186).then(__webpack_require__.t.bind(__webpack_require__, 37186, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 37319).then(__webpack_require__.t.bind(__webpack_require__, 37319, 17)),
        HTML: __webpack_require__.e(/* import() */ 6492).then(__webpack_require__.t.bind(__webpack_require__, 6492, 17)),
        LESS: __webpack_require__.e(/* import() */ 59059).then(__webpack_require__.t.bind(__webpack_require__, 59059, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 90817).then(__webpack_require__.t.bind(__webpack_require__, 90817, 17)),
        HTML: __webpack_require__.e(/* import() */ 19124).then(__webpack_require__.t.bind(__webpack_require__, 19124, 17)),
        LESS: __webpack_require__.e(/* import() */ 61916).then(__webpack_require__.t.bind(__webpack_require__, 61916, 17))
      };
    }

  }

  ExampleTuiLineClampComponent.ɵfac = function ExampleTuiLineClampComponent_Factory(t) {
    return new (t || ExampleTuiLineClampComponent)();
  };

  ExampleTuiLineClampComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLineClampComponent,
    selectors: [["example-tui-line-clamp"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6622825167249639461$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__1 = goog.getMsg("Component cuts overflown text with \"...\" and shows it by hover");
        i18n_0 = MSG_EXTERNAL_6622825167249639461$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟ce2b339f13a3be18ecb9210067a8623921435966␟6622825167249639461:Component cuts overflown text with "..." and shows it by hover`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6390623107955601371$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__3 = goog.getMsg("Styles change");
        i18n_2 = MSG_EXTERNAL_6390623107955601371$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ad75bb2791c6ac20f42eba727b4d5843bd2e2759␟6390623107955601371:Styles change`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3142541476125634673$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__5 = goog.getMsg("Expanding");
        i18n_4 = MSG_EXTERNAL_3142541476125634673$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c3466e18890f12ffac5010471ddf34cd9d873f19␟3142541476125634673:Expanding`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7735399201342576360$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__7 = goog.getMsg("Resize parent container");
        i18n_6 = MSG_EXTERNAL_7735399201342576360$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟ea6a9a75f5c4c8b91eb116c27915e88ff3d6b0e6␟7735399201342576360:Resize parent container`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___9 = goog.getMsg(" Content ");
        i18n_8 = MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4231221044409102766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___11 = goog.getMsg(" Value of max-width ");
        i18n_10 = MSG_EXTERNAL_4231221044409102766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟137f4354e48ac0d7a96618cfe31e63fc67eed29a␟4231221044409102766: Value of max-width `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_757303190321201319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___13 = goog.getMsg(" Height of single line. It used to limit component's height. ");
        i18n_12 = MSG_EXTERNAL_757303190321201319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟25d2954f348774dab7dc98536b7b1638b43eda20␟757303190321201319: Height of single line. It used to limit component's height. `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9220644262211067839$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___15 = goog.getMsg(" Number of visible lines ");
        i18n_14 = MSG_EXTERNAL_9220644262211067839$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟5350d4ee26589c53830208851ec2ee9ff9c5bb38␟9220644262211067839: Number of visible lines `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2311692943199158011$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiLineClampModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_2311692943199158011$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟7e8642bb2c9a6cd3383644b763b6118025d81967␟2311692943199158011: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLineClampModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINE_CLAMP_LINE_CLAMP_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "LineClamp", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "basic", "heading", i18n_2, 3, "content"], ["id", "expand", "heading", i18n_4, 3, "content"], ["id", "resize", "heading", i18n_6, 3, "content"], [3, "content", "linesLimit", "lineHeight"], ["defaultExampleContent", ""], ["documentationPropertyName", "content", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "style.maxWidth.px", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "lineHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "linesLimit", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLineClampComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLineClampComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLineClampComponent_ng_template_2_Template, 9, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLineClampComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLineClampExample1, TuiLineClampExample2, TuiLineClampExample3, demo_component/* TuiDocDemoComponent */.F, line_clamp_component/* TuiLineClampComponent */.b, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".text[_ngcontent-%COMP%]{max-width:60%}"],
    changeDetection: 0
  });
  return ExampleTuiLineClampComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/line-clamp/line-clamp.module.ts











let ExampleTuiLineClampModule = /*#__PURE__*/(() => {
  class ExampleTuiLineClampModule {}

  ExampleTuiLineClampModule.ɵfac = function ExampleTuiLineClampModule_Factory(t) {
    return new (t || ExampleTuiLineClampModule)();
  };

  ExampleTuiLineClampModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLineClampModule
  });
  ExampleTuiLineClampModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiNotificationModule, kit.TuiLineClampModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLineClampComponent)), core.TuiButtonModule, kit.TuiIslandModule]]
  });
  return ExampleTuiLineClampModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLineClampModule, {
    declarations: [ExampleTuiLineClampComponent, TuiLineClampExample1, TuiLineClampExample2, TuiLineClampExample3],
    imports: [common/* CommonModule */.ez, core.TuiNotificationModule, kit.TuiLineClampModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, core.TuiButtonModule, kit.TuiIslandModule],
    exports: [ExampleTuiLineClampComponent]
  });
})();

/***/ })

}]);