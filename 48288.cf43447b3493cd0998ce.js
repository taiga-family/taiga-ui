"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48288],{

/***/ 48288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLoaderModule": () => (/* binding */ ExampleTuiLoaderModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/examples/1/index.ts



let TuiLoaderExample1 = /*#__PURE__*/(() => {
  class TuiLoaderExample1 {}

  TuiLoaderExample1.ɵfac = function TuiLoaderExample1_Factory(t) {
    return new (t || TuiLoaderExample1)();
  };

  TuiLoaderExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLoaderExample1,
    selectors: [["tui-loader-example-1"]],
    decls: 7,
    vars: 3,
    consts: [["tuiButton", "", "type", "button", 1, "tui-space_right-2"], [1, "inline-flex", "tui-space_right-2", 3, "showLoader", "inheritColor", "overlay"], ["tuiButton", "", "type", "button"]],
    template: function TuiLoaderExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Clickable button\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-loader", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Loading button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " Useless button\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("showLoader", true)("inheritColor", true)("overlay", true);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, loader_component/* TuiLoaderComponent */.k],
    styles: [".inline-flex[_ngcontent-%COMP%]{display:inline-flex}"],
    changeDetection: 0
  });
  return TuiLoaderExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/examples/2/index.ts


let TuiLoaderExample2 = /*#__PURE__*/(() => {
  class TuiLoaderExample2 {}

  TuiLoaderExample2.ɵfac = function TuiLoaderExample2_Factory(t) {
    return new (t || TuiLoaderExample2)();
  };

  TuiLoaderExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLoaderExample2,
    selectors: [["tui-loader-example-2"]],
    decls: 2,
    vars: 1,
    consts: [[3, "inheritColor"]],
    template: function TuiLoaderExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-loader", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("inheritColor", true);
      }
    },
    directives: [loader_component/* TuiLoaderComponent */.k],
    styles: ["[_nghost-%COMP%]{display:block;margin:-1.25rem;padding:1.25rem;background:var(--tui-primary);color:var(--tui-primary-text)}"],
    changeDetection: 0
  });
  return TuiLoaderExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/examples/3/index.ts


let TuiLoaderExample3 = /*#__PURE__*/(() => {
  class TuiLoaderExample3 {}

  TuiLoaderExample3.ɵfac = function TuiLoaderExample3_Factory(t) {
    return new (t || TuiLoaderExample3)();
  };

  TuiLoaderExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLoaderExample3,
    selectors: [["tui-loader-example-3"]],
    decls: 2,
    vars: 1,
    consts: [[3, "overlay"]],
    template: function TuiLoaderExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-loader", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("overlay", true);
      }
    },
    directives: [loader_component/* TuiLoaderComponent */.k],
    styles: ["[_nghost-%COMP%]{display:block;margin:-1.25rem;padding:1.25rem;background:#3e4757;color:var(--tui-base-01)}"],
    changeDetection: 0
  });
  return TuiLoaderExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/examples/4/index.ts




let TuiLoaderExample4 = /*#__PURE__*/(() => {
  class TuiLoaderExample4 {}

  TuiLoaderExample4.ɵfac = function TuiLoaderExample4_Factory(t) {
    return new (t || TuiLoaderExample4)();
  };

  TuiLoaderExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLoaderExample4,
    selectors: [["tui-loader-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,core.tuiLoaderOptionsProvider)({
      size: `l`,
      inheritColor: false,
      overlay: true
    })])],
    decls: 3,
    vars: 0,
    consts: [[1, "inline-flex"], ["tuiButton", "", "type", "button"]],
    template: function TuiLoaderExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-loader", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Loading button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [loader_component/* TuiLoaderComponent */.k, button_component/* TuiButtonComponent */.v],
    styles: [".inline-flex[_ngcontent-%COMP%]{display:inline-flex}"],
    changeDetection: 0
  });
  return TuiLoaderExample4;
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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/loader.component.ts















const _c0 = ["textTemplate"];

function ExampleTuiLoaderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-loader-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-loader-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-loader-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-loader-example-4");
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
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1, "Loading");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
    fesm2015_core/* ɵɵtext */._uU(3, " You can use a template with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "a", 14);
    fesm2015_core/* ɵɵtext */._uU(5, " HTML ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " here ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiLoaderComponent_ng_template_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiLoaderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-loader", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "b");
    fesm2015_core/* ɵɵtext */._uU(5, "Colonel Trautman:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " It's over Johnny. It's over! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "b");
    fesm2015_core/* ɵɵtext */._uU(9, "Rambo:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(10, " Nothing is over! Nothing! You just don't turn it off! It wasn't my war! You asked me I didn't ask you! And I did what I had to do to win, for somebody who wouldn't let us win! Then I come back to the world, and I see all those maggots at the airport, protestin' me, spittin', callin' me a baby killer and all kinds of vile crap! Who are they to protest me?! Huh?! Who are they?! Unless they been me and been there and know what the hell they yellin' about! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiLoaderComponent_ng_template_2_ng_template_11_Template, 7, 0, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiLoaderComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLoaderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.showLoader = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiLoaderComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLoaderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.inheritColor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiLoaderComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLoaderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.overlay = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(17, ExampleTuiLoaderComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLoaderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(18, ExampleTuiLoaderComponent_ng_template_2_ng_template_18_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLoaderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_18_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.selectedTemplate = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("showLoader", ctx_r1.showLoader)("inheritColor", ctx_r1.inheritColor)("overlay", ctx_r1.overlay)("size", ctx_r1.size)("textContent", ctx_r1.template);
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showLoader);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.inheritColor);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.overlay);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.textVariants)("documentationPropertyValue", ctx_r1.selectedTemplate);
  }
}

function ExampleTuiLoaderComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 21);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 25);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiLoaderComponent = /*#__PURE__*/(() => {
  class ExampleTuiLoaderComponent {
    constructor() {
      this.textTemplate = ``;
      this.exampleOptions = __webpack_require__.e(/* import() */ 87298).then(__webpack_require__.t.bind(__webpack_require__, 87298, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 77926).then(__webpack_require__.t.bind(__webpack_require__, 77926, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 30591).then(__webpack_require__.t.bind(__webpack_require__, 30591, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 61592).then(__webpack_require__.t.bind(__webpack_require__, 61592, 17)),
        HTML: __webpack_require__.e(/* import() */ 82387).then(__webpack_require__.t.bind(__webpack_require__, 16278, 17)),
        LESS: __webpack_require__.e(/* import() */ 59450).then(__webpack_require__.t.bind(__webpack_require__, 59450, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 56554).then(__webpack_require__.t.bind(__webpack_require__, 56554, 17)),
        HTML: __webpack_require__.e(/* import() */ 84238).then(__webpack_require__.t.bind(__webpack_require__, 84238, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 97683).then(__webpack_require__.t.bind(__webpack_require__, 97683, 17)),
        HTML: __webpack_require__.e(/* import() */ 74971).then(__webpack_require__.t.bind(__webpack_require__, 63843, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 88823).then(__webpack_require__.t.bind(__webpack_require__, 88823, 17)),
        HTML: __webpack_require__.e(/* import() */ 78061).then(__webpack_require__.t.bind(__webpack_require__, 78061, 17))
      };
      this.showLoader = true;
      this.inheritColor = false;
      this.overlay = false;
      this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`, `xxl`];
      this.size = this.sizeVariants[2];
      this.selectedTemplate = ``;
      this.textVariants = [``, `template`, `string`];
    }

    get template() {
      switch (this.selectedTemplate) {
        case `template`:
          {
            return this.textTemplate || ``;
          }

        case `string`:
          {
            return `string`;
          }

        default:
          {
            return ``;
          }
      }
    }

  }

  ExampleTuiLoaderComponent.ɵfac = function ExampleTuiLoaderComponent_Factory(t) {
    return new (t || ExampleTuiLoaderComponent)();
  };

  ExampleTuiLoaderComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLoaderComponent,
    selectors: [["example-tui-loader"]],
    viewQuery: function ExampleTuiLoaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.textTemplate = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6808049120034866910$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__2 = goog.getMsg("Button with loader");
        i18n_1 = MSG_EXTERNAL_6808049120034866910$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟54559e7660dc083bae434a84bd79549fb0d1c827␟6808049120034866910:Button with loader`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1892022928376946174$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__4 = goog.getMsg("With inherited background color");
        i18n_3 = MSG_EXTERNAL_1892022928376946174$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟cbddb15afc503f20893a5a2472cecc85fe527840␟1892022928376946174:With inherited background color`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6126359509055790477$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__6 = goog.getMsg("With content overlay");
        i18n_5 = MSG_EXTERNAL_6126359509055790477$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟1108f196652ad94b8c75a7ce8f27ee0cb9173b95␟6126359509055790477:With content overlay`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__8 = goog.getMsg("Options");
        i18n_7 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7679207561317803766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___10 = goog.getMsg(" Show/hide loader ");
        i18n_9 = MSG_EXTERNAL_7679207561317803766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___10;
      } else {
        i18n_9 = $localize`:␟000e97a7e8b06c36c7715d394911ccef1d396fa6␟7679207561317803766: Show/hide loader `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1140880280681090246$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___12 = goog.getMsg(" Inherit parent color ");
        i18n_11 = MSG_EXTERNAL_1140880280681090246$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___12;
      } else {
        i18n_11 = $localize`:␟9e5eb6b647bd5e5979dc30631a6edb118fe4d12a␟1140880280681090246: Inherit parent color `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6901719258436780262$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___14 = goog.getMsg(" Content overlay when loader is showed ");
        i18n_13 = MSG_EXTERNAL_6901719258436780262$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___14;
      } else {
        i18n_13 = $localize`:␟2140cef5ea7afb33566f7078cfc045a0cffc4d61␟6901719258436780262: Content overlay when loader is showed `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___16 = goog.getMsg(" Size ");
        i18n_15 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6624834706636147191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___18 = goog.getMsg(" Custom content under loader ");
        i18n_17 = MSG_EXTERNAL_6624834706636147191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS___18;
      } else {
        i18n_17 = $localize`:␟bf74f370a44344e3691f029f67eb7c903d9e5965␟6624834706636147191: Custom content under loader `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8835898427388029639$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__20 = goog.getMsg(" Import {$startTagCode}TuiLoaderModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_19 = MSG_EXTERNAL_8835898427388029639$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__20;
      } else {
        i18n_19 = $localize`:␟b39884267f39374351ab384a40a1aabd374ca527␟8835898427388029639: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLoaderModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__22 = goog.getMsg("Add to the template:");
        i18n_21 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__22;
      } else {
        i18n_21 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4587344236800240454$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__24 = goog.getMsg(" Optionally use the {$startTagCode}TUI_LOADER_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_23 = MSG_EXTERNAL_4587344236800240454$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LOADER_LOADER_COMPONENT_TS__24;
      } else {
        i18n_23 = $localize`:␟cfbb21c2bf9cfdc79ba9080bb022351820be234c␟4587344236800240454: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_LOADER_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "Loader", "package", "CORE", "type", "components"], ["pageTab", ""], ["id", "button", "heading", i18n_1, 3, "content"], ["id", "inherit-color", "heading", i18n_3, 3, "content"], ["id", "overlay", "heading", i18n_5, 3, "content"], ["id", "options", "heading", i18n_7, 3, "content"], [1, "example"], [3, "showLoader", "inheritColor", "overlay", "size", "textContent"], ["textTemplate", ""], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "inheritColor", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "overlay", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeXS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "textContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", "routerLink", "/components/notification"], i18n_9, i18n_11, i18n_13, i18n_15, i18n_17, [1, "b-demo-steps"], i18n_19, ["filename", "myComponent.module.ts", 3, "code"], i18n_21, ["filename", "myComponent.template.html", 3, "code"], i18n_23];
    },
    template: function ExampleTuiLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLoaderComponent_ng_template_1_Template, 8, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLoaderComponent_ng_template_2_Template, 19, 12, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLoaderComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLoaderExample1, TuiLoaderExample2, TuiLoaderExample3, TuiLoaderExample4, demo_component/* TuiDocDemoComponent */.F, loader_component/* TuiLoaderComponent */.k, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    styles: [".example[_ngcontent-%COMP%]{padding:1.25rem;background:var(--tui-base-03)}"],
    changeDetection: 0
  });
  return ExampleTuiLoaderComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/loader/loader.module.ts














let ExampleTuiLoaderModule = /*#__PURE__*/(() => {
  class ExampleTuiLoaderModule {}

  ExampleTuiLoaderModule.ɵfac = function ExampleTuiLoaderModule_Factory(t) {
    return new (t || ExampleTuiLoaderModule)();
  };

  ExampleTuiLoaderModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLoaderModule
  });
  ExampleTuiLoaderModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiLoaderModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, router/* RouterModule */.Bz, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLoaderComponent))]]
  });
  return ExampleTuiLoaderModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLoaderModule, {
    declarations: [ExampleTuiLoaderComponent, TuiLoaderExample1, TuiLoaderExample2, TuiLoaderExample3, TuiLoaderExample4],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiLoaderModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, router/* RouterModule */.Bz, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLoaderComponent]
  });
})();

/***/ })

}]);