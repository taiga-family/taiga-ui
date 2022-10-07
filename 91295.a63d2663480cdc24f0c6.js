"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91295],{

/***/ 91295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputCardGroupedModule": () => (/* binding */ ExampleTuiInputCardGroupedModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card-grouped/input-card-grouped.component.ts
var input_card_grouped_component = __webpack_require__(72602);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/examples/1/index.ts









const _c0 = function () {
  return [];
};

let TuiInputCardGroupedExample1 = /*#__PURE__*/(() => {
  class TuiInputCardGroupedExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(null, [addon_commerce.tuiCardNumberValidator, addon_commerce.tuiCardExpireValidator]);
    }

    get card() {
      const value = this.control.value ? this.control.value.card : ``;

      if (value.length < 7) {
        return null;
      }

      switch (value.charAt(0)) {
        case `0`:
        case `1`:
        case `2`:
          return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;

        case `3`:
        case `4`:
        case `5`:
          return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;

        case `6`:
        case `7`:
          return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;

        case `8`:
        case `9`:
        default:
          return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
      }
    }

  }

  TuiInputCardGroupedExample1.ɵfac = function TuiInputCardGroupedExample1_Factory(t) {
    return new (t || TuiInputCardGroupedExample1)();
  };

  TuiInputCardGroupedExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCardGroupedExample1,
    selectors: [["tui-input-card-grouped-example-1"]],
    decls: 4,
    vars: 9,
    consts: [[3, "cardSrc", "formControl"], [3, "formControl", "error"]],
    template: function TuiInputCardGroupedExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-input-card-grouped", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-error", 1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "async");
        fesm2015_core/* ɵɵpipe */.ALo(3, "tuiFieldError");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("cardSrc", ctx.card)("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 4, fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 6, fesm2015_core/* ɵɵpureFunction0 */.DdM(8, _c0))));
      }
    },
    directives: [input_card_grouped_component/* TuiInputCardGroupedComponent */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCardGroupedExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/addon-commerce/components/card/card.component.ts
var card_component = __webpack_require__(32675);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/examples/2/index.ts












function TuiInputCardGroupedExample2_tui_data_list_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 9);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-card", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "label", 11);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "span");
    fesm2015_core/* ɵɵtext */._uU(5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("cardNumber", item_r3.card.slice(-4));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLabel", item_r3.bank);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r3.name, " ");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r3.card.slice(-5));
  }
}

function TuiInputCardGroupedExample2_tui_data_list_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("keydown.escape", function TuiInputCardGroupedExample2_tui_data_list_3_Template_tui_data_list_keydown_escape_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

      return ctx_r5.onEsc(_r0);
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputCardGroupedExample2_tui_data_list_3_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

      return ctx_r7.onClick(_r0);
    });
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "span", 7);
    fesm2015_core/* ɵɵtext */._uU(4, "New card");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiInputCardGroupedExample2_tui_data_list_3_button_5_Template, 6, 5, "button", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.items);
  }
}

let TuiInputCardGroupedExample2 = /*#__PURE__*/(() => {
  class TuiInputCardGroupedExample2 {
    constructor() {
      this.items = [{
        card: `4321***1234`,
        expire: `12/21`,
        name: `Salary`,
        bank: `Tinkoff`
      }, {
        card: `8765***5678`,
        expire: `03/42`,
        cvc: `***`,
        name: `Tips`,
        bank: `Bank of America`
      }, {
        card: `4200***9000`,
        name: `Dogecoins`,
        bank: `Crypto`
      }];
      this.card = new fesm2015_forms/* FormGroup */.cw({
        meta: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

    onClick(component) {
      var _a;

      (_a = this.card.get(`meta`)) === null || _a === void 0 ? void 0 : _a.setValue(null);
      this.onEsc(component);
    }

    onEsc(component) {
      var _a;

      (_a = component.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.focus();
      component.open = false;
    }

  }

  TuiInputCardGroupedExample2.ɵfac = function TuiInputCardGroupedExample2_Factory(t) {
    return new (t || TuiInputCardGroupedExample2)();
  };

  TuiInputCardGroupedExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCardGroupedExample2,
    selectors: [["tui-input-card-grouped-example-2"]],
    decls: 4,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "meta"], ["component", ""], [3, "keydown.escape", 4, "tuiDataList"], [3, "keydown.escape"], ["tuiOption", "", "size", "l", 3, "click"], ["src", "tuiIconPlus", 1, "new"], [1, "label"], ["tuiOption", "", "size", "l", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", "size", "l", 3, "value"], ["size", "s", 1, "card", 3, "cardNumber"], [1, "label", 3, "tuiLabel"]],
    template: function TuiInputCardGroupedExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-card-grouped", 1, 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputCardGroupedExample2_tui_data_list_3_Template, 6, 1, "tui-data-list", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.card);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_card_grouped_component/* TuiInputCardGroupedComponent */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, option_component/* TuiOptionComponent */.v, svg_component/* TuiSvgComponent */.P, common/* NgForOf */.sg, card_component/* TuiCardComponent */.S, label_component/* TuiLabelComponent */.A],
    styles: [".new[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:4px;background:var(--tui-secondary);color:var(--tui-link)}.card[_ngcontent-%COMP%]{background:var(--tui-support-01)}button[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%]{background:var(--tui-support-05)}.label[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}"],
    changeDetection: 0
  });
  return TuiInputCardGroupedExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/examples/3/index.ts










function TuiInputCardGroupedExample3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "img", 4);
  }
}

const _3_c0 = function () {
  return [];
};

let TuiInputCardGroupedExample3 = /*#__PURE__*/(() => {
  class TuiInputCardGroupedExample3 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(null, [addon_commerce.tuiCardNumberValidator, addon_commerce.tuiCardExpireValidator]);
    }

  }

  TuiInputCardGroupedExample3.ɵfac = function TuiInputCardGroupedExample3_Factory(t) {
    return new (t || TuiInputCardGroupedExample3)();
  };

  TuiInputCardGroupedExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCardGroupedExample3,
    selectors: [["tui-input-card-grouped-example-3"]],
    decls: 6,
    vars: 9,
    consts: [[3, "cardSrc", "formControl"], ["polymorpheus", ""], ["template", "polymorpheus"], [3, "formControl", "error"], ["width", "32", "height", "32", "alt", "custom-icon", "src", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg"]],
    template: function TuiInputCardGroupedExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-input-card-grouped", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputCardGroupedExample3_ng_template_1_Template, 1, 0, "ng-template", 1, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-error", 3);
        fesm2015_core/* ɵɵpipe */.ALo(4, "async");
        fesm2015_core/* ɵɵpipe */.ALo(5, "tuiFieldError");
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("cardSrc", _r0)("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 4, fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 6, fesm2015_core/* ɵɵpureFunction0 */.DdM(8, _3_c0))));
      }
    },
    directives: [input_card_grouped_component/* TuiInputCardGroupedComponent */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, tinkoff_ng_polymorpheus/* PolymorpheusTemplate */.GL, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCardGroupedExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/examples/4/index.ts




let TuiInputCardGroupedExample4 = /*#__PURE__*/(() => {
  class TuiInputCardGroupedExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI({
        card: ``,
        expire: ``,
        cvc: `***`
      });
    }

  }

  TuiInputCardGroupedExample4.ɵfac = function TuiInputCardGroupedExample4_Factory(t) {
    return new (t || TuiInputCardGroupedExample4)();
  };

  TuiInputCardGroupedExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCardGroupedExample4,
    selectors: [["tui-input-card-grouped-example-4"]],
    decls: 1,
    vars: 1,
    consts: [[3, "formControl"]],
    template: function TuiInputCardGroupedExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-input-card-grouped", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
      }
    },
    directives: [input_card_grouped_component/* TuiInputCardGroupedComponent */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCardGroupedExample4;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/interactive.ts
var interactive = __webpack_require__(57750);
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/input-card-grouped.component.ts
























function ExampleTuiInputCardGroupedComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "InputCardGrouped");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " is used to input a card as a separated control ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-input-card-grouped-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-input-card-grouped-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-input-card-grouped-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-input-card-grouped-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-card-grouped", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("binChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template_tui_input_card_grouped_binChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r12.onBinChange($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("autocompleteEnabled", ctx_r3.autocompleteEnabled)("cardSrc", ctx_r3.cardSrc)("codeLength", ctx_r3.codeLength)("exampleText", ctx_r3.exampleText)("readOnly", ctx_r3.readOnly)("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-card", 17);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_1_Template, 1, 11, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 8);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.autocompleteEnabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.cardSrcSelected = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.exampleText = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardGroupedComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.codeLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiInputCardGroupedComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "inherited-documentation");
  }

  if (rf & 2) {
    const _r4 = fesm2015_core/* ɵɵreference */.MAs(7);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.autocompleteEnabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.getContentVariants(_r4))("documentationPropertyValue", ctx_r1.cardSrcSelected);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.exampleText);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.codeLengthVariants)("documentationPropertyValue", ctx_r1.codeLength);
  }
}

function ExampleTuiInputCardGroupedComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 25);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 28);
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

let ExampleTuiInputCardGroupedComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputCardGroupedComponent extends interactive/* AbstractExampleTuiInteractive */.O {
    constructor(alertService) {
      super();
      this.alertService = alertService;
      this.exampleModule = __webpack_require__.e(/* import() */ 92593).then(__webpack_require__.t.bind(__webpack_require__, 92593, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 29352).then(__webpack_require__.t.bind(__webpack_require__, 29352, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 41940).then(__webpack_require__.t.bind(__webpack_require__, 41940, 17)),
        HTML: __webpack_require__.e(/* import() */ 49991).then(__webpack_require__.t.bind(__webpack_require__, 49991, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 29798).then(__webpack_require__.t.bind(__webpack_require__, 29798, 17)),
        HTML: __webpack_require__.e(/* import() */ 1393).then(__webpack_require__.t.bind(__webpack_require__, 1393, 17)),
        LESS: __webpack_require__.e(/* import() */ 5750).then(__webpack_require__.t.bind(__webpack_require__, 5750, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 1843).then(__webpack_require__.t.bind(__webpack_require__, 1843, 17)),
        HTML: __webpack_require__.e(/* import() */ 14228).then(__webpack_require__.t.bind(__webpack_require__, 14228, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 21727).then(__webpack_require__.t.bind(__webpack_require__, 21727, 17)),
        HTML: __webpack_require__.e(/* import() */ 33573).then(__webpack_require__.t.bind(__webpack_require__, 33573, 17))
      };
      this.cards = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`
      };
      this.cardSrcVariants = Object.keys(this.cards);
      this.cardSrcSelected = ``;
      this.autocompleteEnabled = false;
      this.exampleText = `0000 0000 0000 0000`;
      this.codeLengthVariants = [3, 4];
      this.codeLength = this.codeLengthVariants[0];
      this.pseudoInvalid = null;
      this.readOnly = false;
      this.control = new fesm2015_forms/* FormControl */.NI();
    }

    get cardSrc() {
      return (0,cdk.tuiIsString)(this.cardSrcSelected) ? this.cards[this.cardSrcSelected] : this.cardSrcSelected;
    }

    get disabled() {
      return this.control.disabled;
    }

    set disabled(value) {
      if (value) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }

    onBinChange(bin) {
      this.alertService.open(`bin: ${bin}`).subscribe();
    }

    getContentVariants(template) {
      return [...this.cardSrcVariants, template];
    }

  }

  ExampleTuiInputCardGroupedComponent.ɵfac = function ExampleTuiInputCardGroupedComponent_Factory(t) {
    return new (t || ExampleTuiInputCardGroupedComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiInputCardGroupedComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputCardGroupedComponent,
    selectors: [["example-input-card-grouped"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputCardGroupedComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2004268377756025676$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__1 = goog.getMsg("With validation");
        i18n_0 = MSG_EXTERNAL_2004268377756025676$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟576c74546986ae39d66902c10b330cef17c11742␟2004268377756025676:With validation`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7395231025733752915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__3 = goog.getMsg("With saved cards");
        i18n_2 = MSG_EXTERNAL_7395231025733752915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0b16cb2ad793d315ec0749caae74c51ea59f9dd1␟7395231025733752915:With saved cards`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1342170688498447742$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__5 = goog.getMsg("With custom card template");
        i18n_4 = MSG_EXTERNAL_1342170688498447742$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟9c59728c1210370022fbb770bda0d0b8fe1631c6␟1342170688498447742:With custom card template`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_134626459094672385$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__7 = goog.getMsg("Custom form state");
        i18n_6 = MSG_EXTERNAL_134626459094672385$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟d44becd24fa66aa31f134974747e1892db15c99a␟134626459094672385:Custom form state`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1504302675191121980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__9 = goog.getMsg(" Add {$startTagCode}tuiCreateLuhnValidator(customMessage?){$closeTagCode} to control validators to validate it with Luhn algorithm ", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1504302675191121980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___11 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7840524756891506982$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___13 = goog.getMsg(" Browser autocomplete of card ");
        i18n_12 = MSG_EXTERNAL_7840524756891506982$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟83ad20bde41f48a65e1ef7997973b9229940e933␟7840524756891506982: Browser autocomplete of card `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4001054117328009637$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___15 = goog.getMsg(" SVG card icon ");
        i18n_14 = MSG_EXTERNAL_4001054117328009637$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟fc048dc15100d76d9c59634a4cd574e69f6c4c27␟4001054117328009637: SVG card icon `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6871064863310761724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___17 = goog.getMsg(" An example of input ");
        i18n_16 = MSG_EXTERNAL_6871064863310761724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟26c4e17869f9a11168b776fecc88a93ba994a18b␟6871064863310761724: An example of input `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7430416980180297706$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___19 = goog.getMsg(" Code length ");
        i18n_18 = MSG_EXTERNAL_7430416980180297706$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟8772d8eccb2dc868d0dec6c6c5db9e2264085070␟7430416980180297706: Code length `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3816861219916976422$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___21 = goog.getMsg(" BIN value (card first 6 symbols) ");
        i18n_20 = MSG_EXTERNAL_3816861219916976422$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟8457ba25b1fa93009d4263b1ed4635c9d9c693f1␟3816861219916976422: BIN value (card first 6 symbols) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1773577931530005511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiInputCardGroupedModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_1773577931530005511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟33a49eba1a9f88fb51f268aeef91a4fce5f46b26␟1773577931530005511: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputCardGroupedModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
        i18n_24 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_GROUPED_INPUT_CARD_GROUPED_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputCardGrouped", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], ["id", "validation", "heading", i18n_0, 3, "content"], ["id", "select", "heading", i18n_2, 3, "content"], ["id", "cardSrc", "heading", i18n_4, 3, "content"], ["id", "form-state", "heading", i18n_6, 3, "content"], [3, "control"], [1, "b-full-width", "tui-space_bottom-6"], i18n_8, ["template", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autocompleteEnabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardSrc", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "exampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "codeLength", "documentationPropertyMode", "input", "documentationPropertyType", "3 | 4", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "binChange", "documentationPropertyMode", "output", "documentationPropertyType", "string | null"], [3, "formControl", "autocompleteEnabled", "cardSrc", "codeLength", "exampleText", "readOnly", "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "binChange"], ["cardNumber", "1234", "paymentSystem", "maestro", "size", "s", 1, "card"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputCardGroupedComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardGroupedComponent_ng_template_1_Template, 12, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCardGroupedComponent_ng_template_2_Template, 16, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCardGroupedComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputCardGroupedExample1, TuiInputCardGroupedExample2, TuiInputCardGroupedExample3, TuiInputCardGroupedExample4, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_card_grouped_component/* TuiInputCardGroupedComponent */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, card_component/* TuiCardComponent */.S, code_component/* TuiDocCodeComponent */.c],
    styles: [".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}.card[_ngcontent-%COMP%]{background:#87ceeb}"],
    changeDetection: 0
  });
  return ExampleTuiInputCardGroupedComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card-grouped/input-card-grouped.module.ts
















let ExampleTuiInputCardGroupedModule = /*#__PURE__*/(() => {
  class ExampleTuiInputCardGroupedModule {}

  ExampleTuiInputCardGroupedModule.ɵfac = function ExampleTuiInputCardGroupedModule_Factory(t) {
    return new (t || ExampleTuiInputCardGroupedModule)();
  };

  ExampleTuiInputCardGroupedModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputCardGroupedModule
  });
  ExampleTuiInputCardGroupedModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[addon_commerce.TuiInputCardGroupedModule, core.TuiLinkModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiDataListModule, addon_commerce.TuiCardModule, core.TuiLabelModule, core.TuiSvgModule, common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputCardGroupedComponent)), tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq]]
  });
  return ExampleTuiInputCardGroupedModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputCardGroupedModule, {
    declarations: [ExampleTuiInputCardGroupedComponent, TuiInputCardGroupedExample1, TuiInputCardGroupedExample2, TuiInputCardGroupedExample3, TuiInputCardGroupedExample4],
    imports: [addon_commerce.TuiInputCardGroupedModule, core.TuiLinkModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiDataListModule, addon_commerce.TuiCardModule, core.TuiLabelModule, core.TuiSvgModule, common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq],
    exports: [ExampleTuiInputCardGroupedComponent]
  });
})();

/***/ })

}]);