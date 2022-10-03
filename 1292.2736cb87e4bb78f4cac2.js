"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1292],{

/***/ 1292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCardModule": () => (/* binding */ ExampleTuiCardModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-commerce/components/card/card.component.ts
var card_component = __webpack_require__(32675);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/card/examples/1/index.ts


let TuiCardExample1 = /*#__PURE__*/(() => {
  class TuiCardExample1 {}

  TuiCardExample1.ɵfac = function TuiCardExample1_Factory(t) {
    return new (t || TuiCardExample1)();
  };

  TuiCardExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiCardExample1,
    selectors: [["tui-card-example-1"]],
    decls: 1,
    vars: 1,
    consts: [["cardNumber", "1234", "paymentSystem", "visa", 1, "logo", 3, "active"]],
    template: function TuiCardExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-card", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("active", true);
      }
    },
    directives: [card_component/* TuiCardComponent */.S],
    styles: [".logo[_ngcontent-%COMP%]{color:var(--tui-base-01);background-color:var(--tui-base-09)}"],
    changeDetection: 0
  });
  return TuiCardExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/card/examples/2/index.ts


let TuiCardExample2 = /*#__PURE__*/(() => {
  class TuiCardExample2 {}

  TuiCardExample2.ɵfac = function TuiCardExample2_Factory(t) {
    return new (t || TuiCardExample2)();
  };

  TuiCardExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiCardExample2,
    selectors: [["tui-card-example-2"]],
    decls: 2,
    vars: 0,
    consts: [["size", "s", "cardNumber", "1234", "paymentSystem", "visa", 1, "logo"], ["cardNumber", "1234", "paymentSystem", "visa", 1, "logo"]],
    template: function TuiCardExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-card", 0);
        core/* ɵɵelement */._UZ(1, "tui-card", 1);
      }
    },
    directives: [card_component/* TuiCardComponent */.S],
    styles: [".logo[_ngcontent-%COMP%]{color:var(--tui-base-09);background-color:var(--tui-primary);margin:1rem 0}"],
    changeDetection: 0
  });
  return TuiCardExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/card/examples/3/index.ts


let TuiCardExample3 = /*#__PURE__*/(() => {
  class TuiCardExample3 {
    constructor() {
      this.paymentSystem = `mir`;
      this.brandLogo = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
    }

  }

  TuiCardExample3.ɵfac = function TuiCardExample3_Factory(t) {
    return new (t || TuiCardExample3)();
  };

  TuiCardExample3.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiCardExample3,
    selectors: [["tui-card-example-3"]],
    decls: 1,
    vars: 2,
    consts: [["cardNumber", "7777", 1, "logo", 3, "brandLogo", "paymentSystem"]],
    template: function TuiCardExample3_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-card", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("brandLogo", ctx.brandLogo)("paymentSystem", ctx.paymentSystem);
      }
    },
    directives: [card_component/* TuiCardComponent */.S],
    styles: ["@-webkit-keyframes spinCard{0%{transform:rotateY(0);box-shadow:0 0 rgba(0,0,0,.3)}12%{transform:rotateY(90deg) rotate(6deg) scale(1.7);box-shadow:0 .25rem .5rem rgba(0,0,0,.3)}25%{transform:rotateY(180deg);box-shadow:0 0 rgba(0,0,0,.3)}50%{transform:rotateY(180deg);box-shadow:0 0 rgba(0,0,0,.3)}62%{transform:rotateY(270deg) rotate(-8deg) scale(1.7);box-shadow:0 .25rem .5rem rgba(0,0,0,.3)}80%{transform:rotateY(720deg);box-shadow:0 0 rgba(0,0,0,.3)}to{transform:rotateY(720deg);box-shadow:0 0 rgba(0,0,0,.3)}}@keyframes spinCard{0%{transform:rotateY(0);box-shadow:0 0 rgba(0,0,0,.3)}12%{transform:rotateY(90deg) rotate(6deg) scale(1.7);box-shadow:0 .25rem .5rem rgba(0,0,0,.3)}25%{transform:rotateY(180deg);box-shadow:0 0 rgba(0,0,0,.3)}50%{transform:rotateY(180deg);box-shadow:0 0 rgba(0,0,0,.3)}62%{transform:rotateY(270deg) rotate(-8deg) scale(1.7);box-shadow:0 .25rem .5rem rgba(0,0,0,.3)}80%{transform:rotateY(720deg);box-shadow:0 0 rgba(0,0,0,.3)}to{transform:rotateY(720deg);box-shadow:0 0 rgba(0,0,0,.3)}}[_nghost-%COMP%]{perspective:50rem}.logo[_ngcontent-%COMP%]{color:var(--tui-base-01);background-color:#7c48c3;background-image:linear-gradient(45deg,#c86dd7 0%,#3023ae 100%);margin-bottom:1rem;-webkit-animation:spinCard 5s infinite;animation:spinCard 5s infinite}"],
    changeDetection: 0
  });
  return TuiCardExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/card/card.component.ts













function ExampleTuiCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-card-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(5, "tui-card-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(7, "tui-card-example-3");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiCardComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiCardComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiCardComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiCardComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiCardComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelement */._UZ(1, "tui-card", 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiCardComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return ctx_r8.active = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiCardComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = core/* ɵɵnextContext */.oxw();
      return ctx_r10.brandLogo = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiCardComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = core/* ɵɵnextContext */.oxw();
      return ctx_r11.cardNumber = $event;
    });
    core/* ɵɵtemplate */.YNc(6, ExampleTuiCardComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return ctx_r12.paymentSystem = $event;
    });
    core/* ɵɵtemplate */.YNc(7, ExampleTuiCardComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = core/* ɵɵnextContext */.oxw();
      return ctx_r13.size = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("active", ctx_r1.active)("brandLogo", ctx_r1.brandLogo)("cardNumber", ctx_r1.cardNumber)("paymentSystem", ctx_r1.paymentSystem)("size", ctx_r1.size);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.active);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.brandLogoVariants)("documentationPropertyValue", ctx_r1.brandLogo);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.cardNumber);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.paymentSystemVariants)("documentationPropertyValue", ctx_r1.paymentSystem);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiCardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 17);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 18);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 19);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 20);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 21);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "li");
    core/* ɵɵi18nStart */.tHW(11, 22);
    core/* ɵɵelement */._UZ(12, "code");
    core/* ɵɵelement */._UZ(13, "code");
    core/* ɵɵelement */._UZ(14, "code");
    core/* ɵɵelement */._UZ(15, "tui-doc-code", 23);
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleCustomizeStyles);
  }
}

const BRAND_LOGOS = [`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
        <path fill="#424242" d="M4.7.3c-.5.4-.8 1.1-.2 1.9-1.7 1.2-2 2.7-2 4 0 1.4-.3 1.2.1 2.6 0 .1 0 .1-.1.1C.8 7.7-.2 4 2.6 2c.1-.1 0-.1-.2 0C0 3.4-.2 5.9.2 7.7c.2.8-.1 1 .2 2.1.7 2.3 1.3 2.5 2.2 2.5 1.6 0 .5-.9.6-2 0-.1.1-.1.1 0 .9 2 1.5 3.9 3.7 3.7 1.3-.2.6-.9.5-1.2-1-3.3 1.4-4.1.7-.9-.4 1.9.9 1.7 1.9 1 1-.7 2.3-5.2 1.5-7.7 0-.2-.1-.1-.1 0 0 1.6-.9 3.3-2.8 3.3-.5 0-.3.8-1.2.4-.2-.3-.5-.2-.7-.2-.2.1-.5.2-.8-.4-.1-.3-.2-.4-.4-.4-1.9-.5-2.5-3.3-.8-5.5.3.2.5.2.8-.1.2-.2.5-.4.7-.4.4-.2.6-.3.3-1.1-.3-.6-.7-.8-1-.8-.4 0-.7.2-.9.3m1.8 8.6c.5.1 1 .2 1.3.2 0 .3-.3.4-.5.4-.4 0-.8-.2-.8-.6m3.2-7.6c-.3.5-.2.8.1 1 .2.1.6.4.8.7.4.6 1.1 0 1.3-.5.2-.4.1-.9-.4-1.4-.2-.2-.5-.3-.8-.4-.4 0-.7.2-1 .6M5.8 4.6c-1 .6-1 1.8-.4 2.1.7.3 1-.6 1.4-1v-.1c0-.6-.2-1.2-.7-1.2-.1.1-.2.2-.3.2m3.3.4c-.4 0-.6.4-.8.9V6c.4.4.4 1.8 1.4 1.2.6-.3.6-1.7-.2-2.1-.1-.1-.2-.1-.4-.1M6.9 7.5c-.5.1-.5.5-.3.5.2.1.4.1.6.4.2.3.1-.1.7-.2.4 0 .3-.4 0-.5-.4-.1-.7-.2-1-.2"/>
    </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path fill="#1A9F29" d="M0 6.7v-.4l4.2 2.4 9-5.2c.5 1 .8 2.1.8 3.2 0 3.9-3.1 7.1-7 7.1s-7-3.2-7-7.1zm4.2 1.1L.1 5.5c.1-.3.1-.5.2-.8l3.9 2.2 8.1-4.7c.2.2.3.4.5.6l-8.6 5zm0-1.8L.6 4c.1-.2.2-.5.3-.7l3.3 1.9 7-4.1c.2.2.4.3.6.5L4.2 6zm0-1.8L1.3 2.6c.2-.2.3-.4.5-.6l2.4 1.4L9.7.2c.3.1.5.3.8.4L4.2 4.2z"/>
    </svg>`];
let ExampleTuiCardComponent = /*#__PURE__*/(() => {
  class ExampleTuiCardComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 84806).then(__webpack_require__.t.bind(__webpack_require__, 84806, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 4526).then(__webpack_require__.t.bind(__webpack_require__, 4526, 17));
      this.exampleCustomizeStyles = __webpack_require__.e(/* import() */ 83277).then(__webpack_require__.t.bind(__webpack_require__, 83277, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 79562).then(__webpack_require__.t.bind(__webpack_require__, 79562, 17)),
        HTML: __webpack_require__.e(/* import() */ 12972).then(__webpack_require__.t.bind(__webpack_require__, 12972, 17)),
        LESS: __webpack_require__.e(/* import() */ 37570).then(__webpack_require__.t.bind(__webpack_require__, 37570, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 46912).then(__webpack_require__.t.bind(__webpack_require__, 46912, 17)),
        HTML: __webpack_require__.e(/* import() */ 9364).then(__webpack_require__.t.bind(__webpack_require__, 9364, 17)),
        LESS: __webpack_require__.e(/* import() */ 30630).then(__webpack_require__.t.bind(__webpack_require__, 30630, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 60252).then(__webpack_require__.t.bind(__webpack_require__, 60252, 17)),
        HTML: __webpack_require__.e(/* import() */ 495).then(__webpack_require__.t.bind(__webpack_require__, 495, 17)),
        LESS: __webpack_require__.e(/* import() */ 6968).then(__webpack_require__.t.bind(__webpack_require__, 6968, 17))
      };
      this.paymentSystemVariants = [`visa`, `maestro`, `mastercard`, `mir`];
      this.brandLogoVariants = [``, ...BRAND_LOGOS];
      this.sizeVariants = [`s`, `m`];
      this.active = false;
      this.brandLogo = this.brandLogoVariants[0];
      this.cardNumber = `9999`;
      this.paymentSystem = null;
      this.size = `m`;
    }

  }

  ExampleTuiCardComponent.ɵfac = function ExampleTuiCardComponent_Factory(t) {
    return new (t || ExampleTuiCardComponent)();
  };

  ExampleTuiCardComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCardComponent,
    selectors: [["example-tui-card"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3623372078257453959$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__1 = goog.getMsg("Customizable card logo");
        i18n_0 = MSG_EXTERNAL_3623372078257453959$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟0b966d034584d5636641d94059abe08fd0b2296a␟3623372078257453959:Customizable card logo`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__5 = goog.getMsg("Sizes");
        i18n_4 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2200427043930517540$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__7 = goog.getMsg("A cool one");
        i18n_6 = MSG_EXTERNAL_2200427043930517540$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟c12a6a8cffc2a80e28c8a558ded81554d2d38e25␟2200427043930517540:A cool one`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4994672454532149706$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___9 = goog.getMsg(" Active state ");
        i18n_8 = MSG_EXTERNAL_4994672454532149706$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟5f9cbf4fd42dd0b95ec02b0296a830bd38597b34␟4994672454532149706: Active state `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4673690951539350231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___11 = goog.getMsg(" Bank logo ");
        i18n_10 = MSG_EXTERNAL_4673690951539350231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟bf47fac0e4bb70480d93c1a43e877ba4d2adbc41␟4673690951539350231: Bank logo `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7001324086178749695$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___13 = goog.getMsg(" Last four card number ");
        i18n_12 = MSG_EXTERNAL_7001324086178749695$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟7c284b3737d125f140234d26835a6a4ad331dd5f␟7001324086178749695: Last four card number `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2136630088762891236$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___15 = goog.getMsg(" Payment system ");
        i18n_14 = MSG_EXTERNAL_2136630088762891236$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟0a8c8b840b083ee95cbd4744ba5fd39234a91dc4␟2136630088762891236: Payment system `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___17 = goog.getMsg(" Size ");
        i18n_16 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3272984137524923070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiCardModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_3272984137524923070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟f8fdf0ee03e79268dfe1ae340baacb9a662033f2␟3272984137524923070: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCardModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_509976644121340015$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__23 = goog.getMsg(" Set card styles with {$startTagCode}color{$closeTagCode} , {$startTagCode}background-color{$closeTagCode} , {$startTagCode}background-image{$closeTagCode} : {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]",
          "startTagTuiDocCode": "\uFFFD#15\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#15\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_509976644121340015$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟7703480e7189ddf37a5da1780ede90fb3f0d2be5␟509976644121340015: Set card styles with ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:background-color${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:background-image${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: : ${"\uFFFD#15\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      i18n_22 = core/* ɵɵi18nPostprocess */.Zx4(i18n_22);
      return [["header", "Card", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "sizes", "heading", i18n_4, 3, "content"], ["id", "best", "heading", i18n_6, 3, "content"], [1, "logo", 3, "active", "brandLogo", "cardNumber", "paymentSystem", "size"], ["documentationPropertyName", "active", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "brandLogo", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardNumber", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "paymentSystem", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPaymentSystem | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"], i18n_22, ["filename", "myComponent.style.less", 3, "code"]];
    },
    template: function ExampleTuiCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiCardComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiCardComponent_ng_template_2_Template, 8, 13, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiCardComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiCardExample1, TuiCardExample2, TuiCardExample3, demo_component/* TuiDocDemoComponent */.F, card_component/* TuiCardComponent */.S, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".logo[_ngcontent-%COMP%]{color:var(--tui-base-09);background-color:var(--tui-primary)}"],
    changeDetection: 0
  });
  return ExampleTuiCardComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/card/card.module.ts










let ExampleTuiCardModule = /*#__PURE__*/(() => {
  class ExampleTuiCardModule {}

  ExampleTuiCardModule.ɵfac = function ExampleTuiCardModule_Factory(t) {
    return new (t || ExampleTuiCardModule)();
  };

  ExampleTuiCardModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCardModule
  });
  ExampleTuiCardModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_commerce.TuiCardModule, router/* RouterModule */.Bz, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCardComponent))]]
  });
  return ExampleTuiCardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCardModule, {
    declarations: [ExampleTuiCardComponent, TuiCardExample1, TuiCardExample2, TuiCardExample3],
    imports: [common/* CommonModule */.ez, addon_commerce.TuiCardModule, router/* RouterModule */.Bz, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCardComponent]
  });
})();

/***/ })

}]);