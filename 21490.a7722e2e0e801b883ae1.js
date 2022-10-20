"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[21490],{

/***/ 21490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMoneyModule": () => (/* binding */ ExampleTuiMoneyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/examples/1/index.ts


let TuiMoneyExample1 = /*#__PURE__*/(() => {
  class TuiMoneyExample1 {}

  TuiMoneyExample1.ɵfac = function TuiMoneyExample1_Factory(t) {
    return new (t || TuiMoneyExample1)();
  };

  TuiMoneyExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMoneyExample1,
    selectors: [["tui-money-example-1"]],
    decls: 11,
    vars: 6,
    consts: [[3, "currency", "value"], [3, "value"], ["currency", "EUR", 3, "value"], ["currency", "USD", 3, "value"], ["currency", "GBP", 3, "value"]],
    template: function TuiMoneyExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "li");
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "li");
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-money", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-money", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "li");
        fesm2015_core/* ɵɵelement */._UZ(10, "tui-money", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("currency", null)("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMoneyExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/examples/2/index.ts


let TuiMoneyExample2 = /*#__PURE__*/(() => {
  class TuiMoneyExample2 {}

  TuiMoneyExample2.ɵfac = function TuiMoneyExample2_Factory(t) {
    return new (t || TuiMoneyExample2)();
  };

  TuiMoneyExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMoneyExample2,
    selectors: [["tui-money-example-2"]],
    decls: 7,
    vars: 6,
    consts: [[3, "value", "colored"]],
    template: function TuiMoneyExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "li");
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "li");
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 150.5)("colored", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", -150.5)("colored", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 0)("colored", true);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMoneyExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/examples/3/index.ts


let TuiMoneyExample3 = /*#__PURE__*/(() => {
  class TuiMoneyExample3 {}

  TuiMoneyExample3.ɵfac = function TuiMoneyExample3_Factory(t) {
    return new (t || TuiMoneyExample3)();
  };

  TuiMoneyExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMoneyExample3,
    selectors: [["tui-money-example-3"]],
    decls: 9,
    vars: 4,
    consts: [[1, "extra-large", 3, "value"], [1, "large", 3, "value"], [1, "medium", 3, "value"], [1, "small", 3, "value"]],
    template: function TuiMoneyExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "li");
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "li");
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-money", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-money", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 10728.9);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o],
    styles: [".extra-large[_ngcontent-%COMP%]{font:var(--tui-font-text-xl)}.large[_ngcontent-%COMP%]{font:var(--tui-font-text-l)}.medium[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.small[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"],
    changeDetection: 0
  });
  return TuiMoneyExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/examples/4/index.ts


let TuiMoneyExample4 = /*#__PURE__*/(() => {
  class TuiMoneyExample4 {}

  TuiMoneyExample4.ɵfac = function TuiMoneyExample4_Factory(t) {
    return new (t || TuiMoneyExample4)();
  };

  TuiMoneyExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMoneyExample4,
    selectors: [["tui-money-example-4"]],
    decls: 12,
    vars: 5,
    consts: [[3, "value", "singleColor"], [1, "tui-space_bottom-2"], [3, "value"]],
    template: function TuiMoneyExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0, "You can use it inline =\n");
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-money", 0);
        fesm2015_core/* ɵɵtext */._uU(2, "\ninto your text that is cool! ");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " Deposit ");
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-money", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "span");
        fesm2015_core/* ɵɵtext */._uU(7, ",");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(8, " and continue shopping.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 1);
        fesm2015_core/* ɵɵtext */._uU(10, " (8918 + 10333.6 + 3527.78 + 805.62 + 140) = ");
        fesm2015_core/* ɵɵelement */._UZ(11, "tui-money", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", -12345.1)("singleColor", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 7)("singleColor", true);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 8918 + 10333.6 + 3527.78 + 805.62 + 140);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMoneyExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/examples/5/index.ts



let TuiMoneyExample5 = /*#__PURE__*/(() => {
  class TuiMoneyExample5 {}

  TuiMoneyExample5.ɵfac = function TuiMoneyExample5_Factory(t) {
    return new (t || TuiMoneyExample5)();
  };

  TuiMoneyExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMoneyExample5,
    selectors: [["tui-money-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_NUMBER_FORMAT,
      useValue: {
        decimalSeparator: `.`,
        thousandSeparator: `,`,
        zeroPadding: true
      }
    }])],
    decls: 16,
    vars: 4,
    consts: [[1, "tui-space_bottom-2"], ["currency", "", 3, "value"]],
    template: function TuiMoneyExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " $ ");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 0);
        fesm2015_core/* ɵɵtext */._uU(4, " \u00A3 ");
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-money", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "span");
        fesm2015_core/* ɵɵtext */._uU(7, ";");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(8, " \u20AC ");
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-money", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "span");
        fesm2015_core/* ɵɵtext */._uU(11, ";");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(12, " \u20BD ");
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-money", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "span");
        fesm2015_core/* ɵɵtext */._uU(15, ";");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 12345.1);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 100);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 200);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 300);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMoneyExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/money.component.ts


















function ExampleTuiMoneyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 5);
    fesm2015_core/* ɵɵelement */._UZ(9, "a", 6);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-money-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-money-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-money-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-money-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-money-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "ol");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "li");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "li");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "ol");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "li");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "li");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "li");
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiMoneyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-money", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMoneyComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.colored = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiMoneyComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.currency = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiMoneyComponent_ng_template_2_ng_template_5_Template, 8, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.decimal = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiMoneyComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.precision = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiMoneyComponent_ng_template_2_ng_template_7_Template, 12, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.sign = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiMoneyComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.singleColor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiMoneyComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMoneyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("decimal", ctx_r1.decimal)("currency", ctx_r1.currency)("sign", ctx_r1.sign)("precision", ctx_r1.precision)("singleColor", ctx_r1.singleColor)("colored", ctx_r1.colored);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.colored);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.currencyVariants)("documentationPropertyValue", ctx_r1.currency);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.decimalVariants)("documentationPropertyValue", ctx_r1.decimal);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.precisionVariants)("documentationPropertyValue", ctx_r1.precision);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.signVariants)("documentationPropertyValue", ctx_r1.sign);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.singleColor);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiMoneyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 27);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 28);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 29);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 30);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 31);
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

let ExampleTuiMoneyComponent = /*#__PURE__*/(() => {
  class ExampleTuiMoneyComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 91629).then(__webpack_require__.t.bind(__webpack_require__, 91629, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 30652).then(__webpack_require__.t.bind(__webpack_require__, 30652, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 70764).then(__webpack_require__.t.bind(__webpack_require__, 70764, 17)),
        HTML: __webpack_require__.e(/* import() */ 73959).then(__webpack_require__.t.bind(__webpack_require__, 73959, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 3367).then(__webpack_require__.t.bind(__webpack_require__, 3367, 17)),
        HTML: __webpack_require__.e(/* import() */ 56129).then(__webpack_require__.t.bind(__webpack_require__, 56129, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 25977).then(__webpack_require__.t.bind(__webpack_require__, 25977, 17)),
        HTML: __webpack_require__.e(/* import() */ 40600).then(__webpack_require__.t.bind(__webpack_require__, 40600, 17)),
        LESS: __webpack_require__.e(/* import() */ 35823).then(__webpack_require__.t.bind(__webpack_require__, 35823, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 47517).then(__webpack_require__.t.bind(__webpack_require__, 47517, 17)),
        HTML: __webpack_require__.e(/* import() */ 28224).then(__webpack_require__.t.bind(__webpack_require__, 28224, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 20737).then(__webpack_require__.t.bind(__webpack_require__, 20737, 17)),
        HTML: __webpack_require__.e(/* import() */ 63843).then(__webpack_require__.t.bind(__webpack_require__, 60978, 17))
      };
      this.decimalVariants = [`not-zero`, `always`, `never`];
      this.decimal = this.decimalVariants[0];
      this.currencyVariants = ["RUB"
      /* Ruble */
      , "EUR"
      /* Euro */
      , "USD"
      /* Dollar */
      , "GBP"
      /* Pound */
      , "949"
      /* TurkishLira */
      , `UGX`];
      this.currency = this.currencyVariants[0];
      this.valueVariants = [-12345.1, 237, 1234, 123123414.0234, 0];
      this.value = this.valueVariants[0];
      this.colored = false;
      this.signVariants = [`negative-only`, `always`, `never`, `force-negative`, `force-positive`];
      this.sign = this.signVariants[0];
      this.precisionVariants = [2, 3, 4];
      this.precision = this.precisionVariants[0];
      this.singleColor = false;
    }

  }

  ExampleTuiMoneyComponent.ɵfac = function ExampleTuiMoneyComponent_Factory(t) {
    return new (t || ExampleTuiMoneyComponent)();
  };

  ExampleTuiMoneyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMoneyComponent,
    selectors: [["example-tui-money"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3400413574835286977$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}Money{$closeTagCode} transforms and shows money sum. There are some ways to show currency symbol and various decimal settings ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_3400413574835286977$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟7a42216eebec3af0ea1dc213923cdf4b14b27a2f␟3400413574835286977:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Money${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: transforms and shows money sum. There are some ways to show currency symbol and various decimal settings `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8891703098829806306$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__3 = goog.getMsg(" Set {$startTagCode}singleColor{$closeTagCode} to {$startTagCode}true{$closeTagCode} if component is used in a text ", {
          "startTagCode": "[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]",
          "closeTagCode": "[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"
        });
        i18n_2 = MSG_EXTERNAL_8891703098829806306$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ac480fe7bef3b62e8e1a642a0f48e62c09bfa47d␟8891703098829806306: Set ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:singleColor${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: to ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:true${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: if component is used in a text `;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__5 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", {
          "startLink": "\uFFFD#9\uFFFD",
          "closeLink": "\uFFFD/#9\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#9\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#9\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4327471061205783634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__7 = goog.getMsg("Currency");
        i18n_6 = MSG_EXTERNAL_4327471061205783634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9011959596901584887$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__9 = goog.getMsg("Color");
        i18n_8 = MSG_EXTERNAL_9011959596901584887$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟8fa4d523f7b91df4390120b85ed0406138273e1a␟9011959596901584887:Color`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6729582878712588149$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__11 = goog.getMsg("Size inheritance");
        i18n_10 = MSG_EXTERNAL_6729582878712588149$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟b02588203d7188ef6595282af3b1f072095a46b3␟6729582878712588149:Size inheritance`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1061307521538294731$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___13 = goog.getMsg(" Shows positive number with green color and negative numbers with red ");
        i18n_12 = MSG_EXTERNAL_1061307521538294731$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟7c0be8a0f9527f5a8b058295c12a2f19c5e2095a␟1061307521538294731: Shows positive number with green color and negative numbers with red `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1521546505841737415$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___15 = goog.getMsg(" Currency ");
        i18n_14 = MSG_EXTERNAL_1521546505841737415$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟7754097d7a48ac6421d69e1ddc40ba3a5ec16240␟1521546505841737415: Currency `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5983304331223620785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___17 = goog.getMsg("{$startOrderedList}{$startListItem}{$startTagCode}not-zero{$closeTagCode} \u2014 shows not zero pennies (by default) {$closeListItem}{$startListItem}{$startTagCode}always{$closeTagCode} \u2014 always shows pennies {$closeListItem}{$startListItem}{$startTagCode}never{$closeTagCode} \u2014 never shows pennies (do not show them without rounding) {$closeListItem}{$closeOrderedList}", {
          "startOrderedList": "\uFFFD#1\uFFFD",
          "startListItem": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]",
          "closeListItem": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]",
          "closeOrderedList": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5983304331223620785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟78b7a73d804be3c71b0ac331945edd7bdedc1ac1␟5983304331223620785:${"\uFFFD#1\uFFFD"}:START_ORDERED_LIST:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:not-zero${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: — shows not zero pennies (by default) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:always${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: — always shows pennies ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:never${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: — never shows pennies (do not show them without rounding) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LIST_ITEM:${"\uFFFD/#1\uFFFD"}:CLOSE_ORDERED_LIST:`;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7859588428304649828$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___19 = goog.getMsg(" A number of digits after comma ");
        i18n_18 = MSG_EXTERNAL_7859588428304649828$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2620083522248467531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___21 = goog.getMsg("{$startOrderedList}{$startListItem}{$startTagCode}negative-only{$closeTagCode} \u2014 shows sign for negative only (by default) {$closeListItem}{$startListItem}{$startTagCode}always{$closeTagCode} \u2014 always shows sign (except 0) {$closeListItem}{$startListItem}{$startTagCode}never{$closeTagCode} \u2014 never shows sign {$closeListItem}{$startListItem}{$startTagCode}force-negative{$closeTagCode} \u2014 always shows minus (except 0) {$closeListItem}{$startListItem}{$startTagCode}force-positive{$closeTagCode} \u2014 always shows plus (except 0) {$closeListItem}{$closeOrderedList}", {
          "startOrderedList": "\uFFFD#1\uFFFD",
          "startListItem": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]",
          "closeListItem": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]",
          "closeOrderedList": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_2620083522248467531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟e03245b06a48271ff287ca174860bd592c86c1fb␟2620083522248467531:${"\uFFFD#1\uFFFD"}:START_ORDERED_LIST:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:negative-only${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: — shows sign for negative only (by default) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:always${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: — always shows sign (except 0) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:never${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: — never shows sign ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:force-negative${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: — always shows minus (except 0) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD|\uFFFD#10\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:force-positive${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: — always shows plus (except 0) ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LIST_ITEM:${"\uFFFD/#1\uFFFD"}:CLOSE_ORDERED_LIST:`;
      }

      i18n_20 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_20);
      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4228209860581450660$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___23 = goog.getMsg(" The same color for the whole money view ");
        i18n_22 = MSG_EXTERNAL_4228209860581450660$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟39d5713bf247efff2d7e9683b37951d0caa0c2e9␟4228209860581450660: The same color for the whole money view `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5044391444696352968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___25 = goog.getMsg(" Amount of money to be formatted ");
        i18n_24 = MSG_EXTERNAL_5044391444696352968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟1a8534a0051e4bedbe7fbf45302ede8031683289␟5044391444696352968: Amount of money to be formatted `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3455732016907555803$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiMoneyModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_3455732016907555803$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟8abc24d28d806d99c4e06676be0bdbda905d70d4␟3455732016907555803: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMoneyModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
        i18n_28 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MONEY_MONEY_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Money", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, i18n_2, i18n_4, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "currency", "heading", i18n_6, 3, "content"], ["id", "color", "heading", i18n_8, 3, "content"], ["id", "sizes", "heading", i18n_10, 3, "content"], ["id", "text", "heading", "in text", 3, "content"], ["id", "format", "heading", "Format", 3, "content"], [3, "value", "decimal", "currency", "sign", "precision", "singleColor", "colored"], ["documentationPropertyName", "colored", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "currency", "documentationPropertyMode", "input", "documentationPropertyType", "TuiCurrencyVariants", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "decimal", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDecimalT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "precision", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "sign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMoneySignT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "singleColor", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [1, "b-demo-steps"], i18n_26, ["filename", "myComponent.module.ts", 3, "code"], i18n_28, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMoneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMoneyComponent_ng_template_1_Template, 20, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMoneyComponent_ng_template_2_Template, 10, 19, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMoneyComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiMoneyExample1, TuiMoneyExample2, TuiMoneyExample3, TuiMoneyExample4, TuiMoneyExample5, demo_component/* TuiDocDemoComponent */.F, money_component/* TuiMoneyComponent */.o, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiMoneyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/money/money.module.ts















let ExampleTuiMoneyModule = /*#__PURE__*/(() => {
  class ExampleTuiMoneyModule {}

  ExampleTuiMoneyModule.ɵfac = function ExampleTuiMoneyModule_Factory(t) {
    return new (t || ExampleTuiMoneyModule)();
  };

  ExampleTuiMoneyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMoneyModule
  });
  ExampleTuiMoneyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[addon_commerce.TuiMoneyModule, kit.TuiRadioListModule, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMoneyComponent))]]
  });
  return ExampleTuiMoneyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMoneyModule, {
    declarations: [ExampleTuiMoneyComponent, TuiMoneyExample1, TuiMoneyExample2, TuiMoneyExample3, TuiMoneyExample4, TuiMoneyExample5],
    imports: [addon_commerce.TuiMoneyModule, kit.TuiRadioListModule, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiMoneyComponent]
  });
})();

/***/ })

}]);