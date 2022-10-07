"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[71732],{

/***/ 71732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSelectModule": () => (/* binding */ ExampleTuiSelectModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/scrolling.js + 7 modules
var scrolling = __webpack_require__(63737);
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
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
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
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/1/index.ts











function TuiSelectExample1_tui_data_list_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 6);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

function TuiSelectExample1_tui_data_list_wrapper_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 6);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r1.items);
  }
}

function TuiSelectExample1_tui_data_list_wrapper_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 6);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r2.items);
  }
}

let TuiSelectExample1 = /*#__PURE__*/(() => {
  class TuiSelectExample1 {
    constructor() {
      this.items = [`Luke Skywalker`, `Leia Organa Solo`, `Darth Vader`, `Han Solo`, `Obi-Wan Kenobi`, `Yoda`];
      this.testValue = new fesm2015_forms/* FormControl */.NI();
    }

  }

  TuiSelectExample1.ɵfac = function TuiSelectExample1_Factory(t) {
    return new (t || TuiSelectExample1)();
  };

  TuiSelectExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample1,
    selectors: [["tui-select-example-1"]],
    decls: 13,
    vars: 4,
    consts: [[1, "b-form"], ["tuiTextfieldSize", "s", 3, "formControl"], ["tuiTextfield", "", "placeholder", "Choose your hero"], [3, "items", 4, "tuiDataList"], ["tuiTextfieldSize", "m", 1, "tui-space_vertical-4", 3, "formControl", "tuiTextfieldLabelOutside"], [3, "formControl"], [3, "items"]],
    template: function TuiSelectExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Character ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiSelectExample1_tui_data_list_wrapper_4_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-select", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Character ");
        fesm2015_core/* ɵɵelement */._UZ(7, "input", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiSelectExample1_tui_data_list_wrapper_8_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-select", 5);
        fesm2015_core/* ɵɵtext */._uU(10, " Character ");
        fesm2015_core/* ɵɵelement */._UZ(11, "input", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiSelectExample1_tui_data_list_wrapper_12_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.testValue);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.testValue)("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.testValue);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* NgForm */.F, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_component/* TuiTextfieldComponent */.M, data_list_directive/* TuiDataListDirective */.g, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSelectExample1;
})();
// EXTERNAL MODULE: ./projects/addon-commerce/components/card/card.component.ts
var card_component = __webpack_require__(32675);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/2/index.ts











function TuiSelectExample2_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 7);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(11);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.cards)("itemContent", _r3);
  }
}

function TuiSelectExample2_tui_data_list_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 7);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(11);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r1.cards)("itemContent", _r3);
  }
}

function TuiSelectExample2_tui_data_list_wrapper_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 7);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(13);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r2.accounts)("itemContent", _r5);
  }
}

function TuiSelectExample2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 8);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-card", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 10);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "span", 11);
    fesm2015_core/* ɵɵtext */._uU(5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("cardNumber", item_r7.cardNumber.slice(1));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r7.cardName);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r7.cardNumber);
  }
}

function TuiSelectExample2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 12);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const account_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", account_r8.name, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", account_r8.amount);
  }
}

class Card {
  constructor(cardName, cardNumber) {
    this.cardName = cardName;
    this.cardNumber = cardNumber;
  }

}

class Account {
  constructor(id, name, amount, currency) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.currency = currency;
  }

}

let TuiSelectExample2 = /*#__PURE__*/(() => {
  class TuiSelectExample2 {
    constructor() {
      this.cards = [new Card(`Bitcoin`, `*6713`), new Card(`Money`, `*4562`), new Card(`Charity`, `*6788`), new Card(`Subscriptions`, `*1231`)];
      this.accounts = [new Account(`1`, `RUB`, 24876.55, "RUB"
      /* Ruble */
      ), new Account(`2`, `USD`, 335, "USD"
      /* Dollar */
      ), new Account(`3`, `EUR`, 10000, "EUR"
      /* Euro */
      ), new Account(`4`, `PND`, 100, "GBP"
      /* Pound */
      )];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(this.cards[0]),
        accounts: new fesm2015_forms/* FormControl */.NI(this.accounts[0])
      });
    }

  }

  TuiSelectExample2.ɵfac = function TuiSelectExample2_Factory(t) {
    return new (t || TuiSelectExample2)();
  };

  TuiSelectExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample2,
    selectors: [["tui-select-example-2"]],
    decls: 14,
    vars: 6,
    consts: [[1, "form", 3, "formGroup"], ["formControlName", "testValue", 3, "valueContent"], [3, "items", "itemContent", 4, "tuiDataList"], ["formControlName", "testValue", 1, "tui-space_vertical-5", 3, "tuiTextfieldLabelOutside", "valueContent"], ["formControlName", "accounts", 3, "tuiTextfieldLabelOutside", "valueContent"], ["cardContent", ""], ["accountContent", ""], [3, "items", "itemContent"], [1, "card-item"], ["size", "s", "paymentSystem", "mastercard", 1, "card", 3, "cardNumber"], [1, "card-name"], [1, "card-number"], [1, "account"], [3, "value"]],
    template: function TuiSelectExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose a card ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSelectExample2_tui_data_list_wrapper_3_Template, 1, 2, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-select", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Choose a card ");
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiSelectExample2_tui_data_list_wrapper_6_Template, 1, 2, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-select", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Choose an account ");
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiSelectExample2_tui_data_list_wrapper_9_Template, 1, 2, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiSelectExample2_ng_template_10_Template, 6, 3, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiSelectExample2_ng_template_12_Template, 3, 2, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r3 = fesm2015_core/* ɵɵreference */.MAs(11);

        const _r5 = fesm2015_core/* ɵɵreference */.MAs(13);

        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("valueContent", _r3);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("valueContent", _r3);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("valueContent", _r5);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, card_component/* TuiCardComponent */.S, money_component/* TuiMoneyComponent */.o],
    styles: [".form[_ngcontent-%COMP%]{max-width:25rem}.account-item[_ngcontent-%COMP%], .card-item[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;min-width:0}.account-item[_ngcontent-%COMP%]{height:4rem}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.card[_ngcontent-%COMP%]{background-color:var(--tui-support-05)}.card-name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 .5rem;min-width:0;flex:1 1 0}.card-number[_ngcontent-%COMP%]{margin-left:auto;color:var(--tui-text-02)}.icon[_ngcontent-%COMP%]{width:1.5rem}.account-currency[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:.5rem;width:2.25rem;height:2.25rem;border-radius:100%;background-color:var(--tui-base-01);font-weight:bold}.account-card[_ngcontent-%COMP%]{margin-left:auto;flex-shrink:0}.account-name[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}.account-value[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}"],
    changeDetection: 0
  });
  return TuiSelectExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.component.ts
var text_area_component = __webpack_require__(40329);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.directive.ts
var text_area_directive = __webpack_require__(78665);
// EXTERNAL MODULE: ./projects/cdk/directives/auto-focus/autofocus.directive.ts
var autofocus_directive = __webpack_require__(20986);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/3/index.ts
















function TuiSelectExample3_tui_data_list_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSelectExample3_tui_data_list_3_button_1_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r4.toggle();
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 7);
    fesm2015_core/* ɵɵtext */._uU(2, " Add signature ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiSelectExample3_tui_data_list_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r6);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r6, " ");
  }
}

function TuiSelectExample3_tui_data_list_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiSelectExample3_tui_data_list_3_button_1_Template, 3, 0, "button", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample3_tui_data_list_3_button_2_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.signatureVisible);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.items);
  }
}

function TuiSelectExample3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-text-area", 9);
    fesm2015_core/* ɵɵtext */._uU(2, " Type a signature ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSelectExample3_ng_container_4_Template_button_click_3_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.toggle();
    });
    fesm2015_core/* ɵɵtext */._uU(4, " Hide signature ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiSelectExample3 = /*#__PURE__*/(() => {
  class TuiSelectExample3 {
    constructor() {
      this.items = [`https://twitter.com/marsibarsi`, `https://twitter.com/waterplea`];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        email: new fesm2015_forms/* FormControl */.NI(null),
        signature: new fesm2015_forms/* FormControl */.NI(``)
      });
      this.signatureVisible = false;
    }

    toggle() {
      this.signatureVisible = !this.signatureVisible;
    }

  }

  TuiSelectExample3.ɵfac = function TuiSelectExample3_Factory(t) {
    return new (t || TuiSelectExample3)();
  };

  TuiSelectExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample3,
    selectors: [["tui-select-example-3"]],
    decls: 5,
    vars: 2,
    consts: [[1, "wrapper", 3, "formGroup"], ["formControlName", "email", 1, "tui-space_bottom-4"], [4, "tuiDataList"], [4, "ngIf"], ["tuiOption", "", "class", "link", 3, "click", 4, "ngIf"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 1, "link", 3, "click"], ["src", "tuiIconPlusCircleLarge", 1, "icon"], ["tuiOption", "", 3, "value"], ["formControlName", "signature", "tuiTextfieldSize", "m", "tuiAutoFocus", "", 1, "tui-space_bottom-4"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiSelectExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose an address ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSelectExample3_tui_data_list_3_Template, 3, 2, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiSelectExample3_ng_container_4_Template, 5, 0, "ng-container", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.signatureVisible);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, common/* NgIf */.O5, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, svg_component/* TuiSvgComponent */.P, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, textfield_size_directive/* TuiTextfieldSizeDirective */.s, autofocus_directive/* TuiAutoFocusDirective */.k, button_component/* TuiButtonComponent */.v],
    styles: [".wrapper[_ngcontent-%COMP%]{width:18.75rem}.link[_ngcontent-%COMP%]{color:var(--tui-link)}.link[_ngcontent-%COMP%]:hover{color:var(--tui-link-hover)}.icon[_ngcontent-%COMP%]{margin-right:.5rem}"],
    changeDetection: 0
  });
  return TuiSelectExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/opt-group.directive.ts
var opt_group_directive = __webpack_require__(89786);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/4/index.ts













function TuiSelectExample4_tui_data_list_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 10);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const python_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", python_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", python_r3, " ");
  }
}

function TuiSelectExample4_tui_data_list_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-opt-group", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample4_tui_data_list_3_button_2_Template, 2, 2, "button", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-opt-group", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(5, " Alexander Inkin ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 7);
    fesm2015_core/* ɵɵtext */._uU(7, " Roman Sedov ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSelectExample4_tui_data_list_3_Template_button_click_8_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

      return ctx_r4.addMore(_r0);
    });
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-svg", 9);
    fesm2015_core/* ɵɵtext */._uU(10, " Add more ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.pythons);
  }
}

let TuiSelectExample4 = /*#__PURE__*/(() => {
  class TuiSelectExample4 {
    constructor(alertService) {
      this.alertService = alertService;
      this.pythons = [`de la Concordia «Gabo» García Márquez`, `John Cleese`, `Eric Idle`, `Michael Palin`, `Terry Gilliam`, `Terry Jones`, `Graham Chapman`];
      this.value = this.pythons[0];
    }

    addMore(select) {
      select.handleOption(select.value);
      this.alertService.open(`Add more is clicked`).subscribe();
    }

  }

  TuiSelectExample4.ɵfac = function TuiSelectExample4_Factory(t) {
    return new (t || TuiSelectExample4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiSelectExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample4,
    selectors: [["tui-select-example-4"]],
    decls: 4,
    vars: 1,
    consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], ["select", ""], [4, "tuiDataList"], ["label", "Monty Python"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["label", "Open-source squad"], ["tuiOption", "", "value", "Alexander Inkin"], ["tuiOption", "", "value", "Roman Sedov"], ["tuiOption", "", 1, "more", 3, "click"], ["src", "tuiIconPlusCircleLarge", 1, "tui-space_right-2"], ["tuiOption", "", 3, "value"]],
    template: function TuiSelectExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 0, 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSelectExample4_Template_tui_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Select user ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSelectExample4_tui_data_list_3_Template, 11, 1, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
      }
    },
    directives: [select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, opt_group_directive/* TuiOptGroupDirective */.R, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, svg_component/* TuiSvgComponent */.P],
    styles: ["[_nghost-%COMP%]{display:block}.more[_ngcontent-%COMP%]{color:var(--tui-link)}.more[_ngcontent-%COMP%]:focus{color:var(--tui-link-hover)}"],
    changeDetection: 0
  });
  return TuiSelectExample4;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts
var let_directive = __webpack_require__(40939);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/5/index.ts
















function TuiSelectExample5_tui_select_0_ng_template_1_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r7.id);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r7.name, " ");
  }
}

function TuiSelectExample5_tui_select_0_ng_template_1_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiSelectExample5_tui_select_0_ng_template_1_tui_data_list_0_button_1_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r1 = fesm2015_core/* ɵɵnextContext */.oxw(2).tuiLet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", items_r1);
  }
}

function TuiSelectExample5_tui_select_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiSelectExample5_tui_select_0_ng_template_1_tui_data_list_0_Template, 2, 1, "tui-data-list", 4);
  }

  if (rf & 2) {
    const items_r1 = fesm2015_core/* ɵɵnextContext */.oxw().tuiLet;

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(3);

    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", items_r1)("ngIfElse", _r3);
  }
}

function TuiSelectExample5_tui_select_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader", 7);
  }
}

function TuiSelectExample5_tui_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSelectExample5_tui_select_0_Template_tui_select_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiSelectExample5_tui_select_0_ng_template_1_Template, 1, 2, "ng-template", 2);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample5_tui_select_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r1 = ctx.tuiLet;

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("valueContent", items_r1 ? ctx_r0.stringify(items_r1) : _r3)("ngModel", ctx_r0.value);
  }
}

const ITEMS = [{
  id: 42,
  name: `John Cleese`
}, {
  id: 237,
  name: `Eric Idle`
}, {
  id: 666,
  name: `Michael Palin`
}, {
  id: 123,
  name: `Terry Gilliam`
}, {
  id: 777,
  name: `Terry Jones`
}, {
  id: 999,
  name: `Graham Chapman`
}];
class TuiSelectExample5 {
  constructor() {
    this.value = 42; // Server request for items imitation

    this.items$ = (0,of.of)(ITEMS).pipe((0,delay/* delay */.g)(3000));
  }

  stringify(items) {
    const map = new Map(items.map(({
      id,
      name
    }) => [id, name]));
    return ({
      $implicit
    }) => map.get($implicit) || ``;
  }

}

TuiSelectExample5.ɵfac = function TuiSelectExample5_Factory(t) {
  return new (t || TuiSelectExample5)();
};

TuiSelectExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiSelectExample5,
  selectors: [["tui-select-example-5"]],
  decls: 2,
  vars: 3,
  consts: [["class", "b-form", 3, "tuiTextfieldLabelOutside", "valueContent", "ngModel", "ngModelChange", 4, "tuiLet"], [1, "b-form", 3, "tuiTextfieldLabelOutside", "valueContent", "ngModel", "ngModelChange"], ["tuiDataList", ""], ["loading", ""], [4, "ngIf", "ngIfElse"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"], [1, "tui-space_vertical-3", "loader"]],
  template: function TuiSelectExample5_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵtemplate */.YNc(0, TuiSelectExample5_tui_select_0_Template, 4, 3, "tui-select", 0);
      fesm2015_core/* ɵɵpipe */.ALo(1, "async");
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.items$));
    }
  },
  directives: [let_directive/* TuiLetDirective */.L, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, common/* NgIf */.O5, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, loader_component/* TuiLoaderComponent */.k],
  pipes: [common/* AsyncPipe */.Ov],
  styles: ["[_nghost-%COMP%]{display:block}.loader[_ngcontent-%COMP%]{flex:1}.more[_ngcontent-%COMP%]{color:var(--tui-link)}.more[_ngcontent-%COMP%]:focus{color:var(--tui-link-hover)}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiSelectExample5.prototype, "stringify", null);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/6/index.ts













function TuiSelectExample6_tui_select_0_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const items_r3 = fesm2015_core/* ɵɵnextContext */.oxw().tuiLet;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

    fesm2015_core/* ɵɵproperty */.Q6J("items", items_r3)("itemContent", _r1)("disabledItemHandler", ctx_r4.disabledItemHandler);
  }
}

function TuiSelectExample6_tui_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSelectExample6_tui_select_0_Template_tui_select_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.value = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Select user ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample6_tui_select_0_tui_data_list_wrapper_2_Template, 1, 3, "tui-data-list-wrapper", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.value);
  }
}

function TuiSelectExample6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 5);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 7);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", data_r8.avatarUrl || null)("text", data_r8.toString());
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(data_r8);
  }
}

class User {
  constructor(firstName, lastName, avatarUrl = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const databaseMockData = [new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`), new User(`Alex`, `Inkin`, utils/* assets */.L`/images/avatar.jpg`), new User(`Dmitriy`, `Demenskiy`), new User(`Evgeniy`, `Mamaev`), new User(`Ivan`, `Ishmametiev`), new User(`Igor`, `Katsuba`), new User(`Yulia`, `Tsareva`)];
let TuiSelectExample6 = /*#__PURE__*/(() => {
  class TuiSelectExample6 {
    constructor() {
      this.value = null;
      this.items$ = (0,of.of)(databaseMockData).pipe((0,delay/* delay */.g)(5000));

      this.disabledItemHandler = ({
        avatarUrl
      }) => !!avatarUrl;
    }

  }

  TuiSelectExample6.ɵfac = function TuiSelectExample6_Factory(t) {
    return new (t || TuiSelectExample6)();
  };

  TuiSelectExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample6,
    selectors: [["tui-select-example-6"]],
    decls: 4,
    vars: 3,
    consts: [["class", "b-form", 3, "ngModel", "ngModelChange", 4, "tuiLet"], ["content", ""], [1, "b-form", 3, "ngModel", "ngModelChange"], ["size", "l", 3, "items", "itemContent", "disabledItemHandler", 4, "tuiDataList"], ["size", "l", 3, "items", "itemContent", "disabledItemHandler"], [1, "template"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"], [1, "name"]],
    template: function TuiSelectExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiSelectExample6_tui_select_0_Template, 3, 1, "tui-select", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample6_ng_template_2_Template, 4, 3, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.items$));
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, avatar_component/* TuiAvatarComponent */.J],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],
    changeDetection: 0
  });
  return TuiSelectExample6;
})();
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.component.ts
var multi_select_group_component = __webpack_require__(31363);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.directive.ts
var multi_select_group_directive = __webpack_require__(20501);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/7/index.ts














function TuiSelectExample7_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 7);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLabel", item_r3.name);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r3.account, " ");
  }
}

function TuiSelectExample7_ng_template_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 7);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r4);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLabel", item_r4.name);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r4.account, " ");
  }
}

function TuiSelectExample7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-opt-group");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 2);
    fesm2015_core/* ɵɵtext */._uU(3, " All ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-opt-group", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-opt-group", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(6, TuiSelectExample7_ng_template_2_button_6_Template, 3, 3, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-opt-group", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-opt-group", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(9, TuiSelectExample7_ng_template_2_button_9_Template, 3, 3, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-opt-group", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "button", 2);
    fesm2015_core/* ɵɵtext */._uU(12, " Cash ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r0.all);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.bank);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.others);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r0.cash);
  }
}

const BANK = [{
  name: `Ruble`,
  account: `1234567890987654321`
}, {
  name: `Dollar`,
  account: `1234567890987654321`
}];
const OTHERS = [{
  name: `Bank`,
  account: `1234567890987654321`
}, {
  name: `Other bank`,
  account: `1234567890987654321`
}, {
  name: `Bank of America`,
  account: `1234567890987654321`
}];
const CASH = {
  name: `Cash`,
  account: ``
};
let TuiSelectExample7 = /*#__PURE__*/(() => {
  class TuiSelectExample7 {
    constructor() {
      this.value = cdk.EMPTY_ARRAY;
      this.all = cdk.EMPTY_ARRAY;
      this.cash = CASH;
      this.bank = BANK;
      this.others = OTHERS;

      this.content = ({
        $implicit: {
          length
        }
      }) => length ? `${length} accounts` : `All`;
    }

  }

  TuiSelectExample7.ɵfac = function TuiSelectExample7_Factory(t) {
    return new (t || TuiSelectExample7)();
  };

  TuiSelectExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample7,
    selectors: [["tui-select-example-7"]],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "valueContent", "ngModel", "ngModelChange"], ["tuiDataList", ""], ["tuiOption", "", 3, "value"], ["label", "Best bank"], ["tuiMultiSelectGroup", ""], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["label", "Other banks"], [3, "tuiLabel"]],
    template: function TuiSelectExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSelectExample7_Template_tui_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Bank and account ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample7_ng_template_2_Template, 13, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("valueContent", ctx.content)("ngModel", ctx.value);
      }
    },
    directives: [select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, opt_group_directive/* TuiOptGroupDirective */.R, option_component/* TuiOptionComponent */.v, multi_select_group_component/* TuiMultiSelectGroupComponent */.g, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, common/* NgForOf */.sg, label_component/* TuiLabelComponent */.A],
    styles: ["label[_ngcontent-%COMP%]{cursor:pointer}"],
    changeDetection: 0
  });
  return TuiSelectExample7;
})();
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollable.directive.ts
var scrollable_directive = __webpack_require__(62500);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/8/index.ts










function TuiSelectExample8_cdk_virtual_scroll_viewport_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 4);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2, " ");
  }
}

function TuiSelectExample8_cdk_virtual_scroll_viewport_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "cdk-virtual-scroll-viewport", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample8_cdk_virtual_scroll_viewport_2_button_2_Template, 2, 2, "button", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("itemSize", 44);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("cdkVirtualForOf", ctx_r0.countries);
  }
}

let TuiSelectExample8 = /*#__PURE__*/(() => {
  class TuiSelectExample8 {
    constructor() {
      this.value = null;
      this.countries = [`Afghanistan`, `Albania`, `Algeria`, `American Samoa`, `Andorra`, `Angola`, `Anguilla`, `Antarctica`, `Antigua and Barbuda`, `Argentina`, `Armenia`, `Aruba`, `Australia`, `Austria`, `Azerbaijan`, `Bahamas`, `Bahrain`, `Bangladesh`, `Barbados`, `Belarus`, `Belgium`, `Belize`, `Benin`, `Bermuda`, `Bhutan`, `Bolivia`, `Bonaire, Sint Eustatius and Saba`, `Bosnia and Herzegovina`, `Botswana`, `Bouvet Island`, `Brazil`, `British Indian Ocean Territory`, `Brunei Darussalam`, `Bulgaria`, `Burkina Faso`, `Burundi`, `Cabo Verde`, `Cambodia`, `Cameroon`, `Canada`, `Cayman Islands`, `Central African Republic`, `Chad`, `Chile`, `China`, `Christmas Island`, `Cocos (Keeling) Islands`, `Colombia`, `Comoros`, `Congo`, `Cook Islands`, `Costa Rica`, `Croatia`, `Cuba`, `Curaçao`, `Cyprus`, `Czechia`, `Côte d'Ivoire`, `Denmark`, `Djibouti`, `Dominica`, `Dominican Republic`, `Ecuador`, `Egypt`, `El Salvador`, `Equatorial Guinea`, `Eritrea`, `Estonia`, `Eswatini`, `Ethiopia`, `Falkland Islands`, `Faroe Islands`, `Fiji`, `Finland`, `France`, `French Guiana`, `French Polynesia`, `French Southern Territories`, `Gabon`, `Gambia`, `Georgia`, `Germany`, `Ghana`, `Gibraltar`, `Greece`, `Greenland`, `Grenada`, `Guadeloupe`, `Guam`, `Guatemala`, `Guernsey`, `Guinea`, `Guinea-Bissau`, `Guyana`, `Haiti`, `Heard Island and McDonald Islands`, `Holy See`, `Honduras`, `Hong Kong`, `Hungary`, `Iceland`, `India`, `Indonesia`, `Iran`, `Iraq`, `Ireland`, `Isle of Man`, `Israel`, `Italy`, `Jamaica`, `Japan`, `Jersey`, `Jordan`, `Kazakhstan`, `Kenya`, `Kiribati`, `Korea`, `Kuwait`, `Kyrgyzstan`, `Lao People's Democratic Republic`, `Latvia`, `Lebanon`, `Lesotho`, `Liberia`, `Libya`, `Liechtenstein`, `Lithuania`, `Luxembourg`, `Macao`, `Madagascar`, `Malawi`, `Malaysia`, `Maldives`, `Mali`, `Malta`, `Marshall Islands`, `Martinique`, `Mauritania`, `Mauritius`, `Mayotte`, `Mexico`, `Micronesia`, `Moldova`, `Monaco`, `Mongolia`, `Montenegro`, `Montserrat`, `Morocco`, `Mozambique`, `Myanmar`, `Namibia`, `Nauru`, `Nepal`, `Netherlands`, `New Caledonia`, `New Zealand`, `Nicaragua`, `Niger`, `Nigeria`, `Niue`, `Norfolk Island`, `Northern Mariana Islands`, `Norway`, `Oman`, `Pakistan`, `Palau`, `Palestine, State of`, `Panama`, `Papua New Guinea`, `Paraguay`, `Peru`, `Philippines`, `Pitcairn`, `Poland`, `Portugal`, `Puerto Rico`, `Qatar`, `Republic of North Macedonia`, `Romania`, `Russian Federation`, `Rwanda`, `Réunion`, `Saint Barthélemy`, `Saint Helena`, `Saint Kitts and Nevis`, `Saint Lucia`, `Saint Martin`, `Saint Pierre and Miquelon`, `Saint Vincent and the Grenadines`, `Samoa`, `San Marino`, `Sao Tome and Principe`, `Saudi Arabia`, `Senegal`, `Serbia`, `Seychelles`, `Sierra Leone`, `Singapore`, `Sint Maarten (Dutch part)`, `Slovakia`, `Slovenia`, `Solomon Islands`, `Somalia`, `South Africa`, `South Georgia`, `South Sudan`, `Spain`, `Sri Lanka`, `Sudan`, `Suriname`, `Svalbard and Jan Mayen`, `Sweden`, `Switzerland`, `Syrian Arab Republic`, `Taiwan`, `Tajikistan`, `Tanzania, United Republic of`, `Thailand`, `Timor-Leste`, `Togo`, `Tokelau`, `Tonga`, `Trinidad and Tobago`, `Tunisia`, `Turkey`, `Turkmenistan`, `Turks and Caicos Islands`, `Tuvalu`, `Uganda`, `Ukraine`, `United Arab Emirates`, `United Kingdom`, `United States of America`, `Uruguay`, `Uzbekistan`, `Vanuatu`, `Venezuela`, `Viet Nam`, `Virgin Islands (British)`, `Virgin Islands (U.S.)`, `Wallis and Futuna`, `Western Sahara`, `Yemen`, `Zambia`, `Zimbabwe`, `Åland Islands`];
    }

  }

  TuiSelectExample8.ɵfac = function TuiSelectExample8_Factory(t) {
    return new (t || TuiSelectExample8)();
  };

  TuiSelectExample8.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample8,
    selectors: [["tui-select-example-8"]],
    decls: 3,
    vars: 1,
    consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], ["tuiScrollable", "", "class", "scroll", 3, "itemSize", 4, "tuiDataList"], ["tuiScrollable", "", 1, "scroll", 3, "itemSize"], ["tuiOption", "", 3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiOption", "", 3, "value"]],
    template: function TuiSelectExample8_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSelectExample8_Template_tui_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Country ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample8_cdk_virtual_scroll_viewport_2_Template, 3, 2, "cdk-virtual-scroll-viewport", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
      }
    },
    directives: [select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, scrolling/* CdkVirtualScrollViewport */.N7, scrolling/* CdkFixedSizeVirtualScroll */.xd, scrollable_directive/* TuiScrollableDirective */.R, data_list_component/* TuiDataListComponent */.q, scrolling/* CdkVirtualForOf */.x0, option_component/* TuiOptionComponent */.v],
    styles: [".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;height:200px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],
    changeDetection: 0
  });
  return TuiSelectExample8;
})();
// EXTERNAL MODULE: ./projects/kit/components/marker-icon/marker-icon.component.ts
var marker_icon_component = __webpack_require__(86187);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/9/account/my-account.component.ts





function ExampleMyAccountComponent_tui_marker_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-marker-icon", 5);
  }

  if (rf & 2) {
    const src_r1 = ctx.polymorpheusOutlet;
    fesm2015_core/* ɵɵproperty */.Q6J("src", src_r1);
  }
}

let ExampleMyAccountComponent = /*#__PURE__*/(() => {
  class ExampleMyAccountComponent {}

  ExampleMyAccountComponent.ɵfac = function ExampleMyAccountComponent_Factory(t) {
    return new (t || ExampleMyAccountComponent)();
  };

  ExampleMyAccountComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleMyAccountComponent,
    selectors: [["my-account"]],
    inputs: {
      account: "account"
    },
    decls: 6,
    vars: 4,
    consts: [[1, "icon"], ["size", "xs", "class", "icon-content", 3, "src", 4, "polymorpheusOutlet"], [1, "info"], [1, "name"], ["decimal", "always", 1, "value", 3, "currency", "value"], ["size", "xs", 1, "icon-content", 3, "src"]],
    template: function ExampleMyAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleMyAccountComponent_tui_marker_icon_1_Template, 1, 1, "tui-marker-icon", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "span", 3);
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-money", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("polymorpheusOutlet", ctx.account.paymentSystem);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.account.name);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("currency", ctx.account.currency)("value", ctx.account.amount);
      }
    },
    directives: [tinkoff_ng_polymorpheus/* PolymorpheusOutletDirective */.Li, money_component/* TuiMoneyComponent */.o, marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex:1;align-items:center;max-width:100%;height:var(--tui-height-l);box-sizing:border-box;outline:none}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m)}*:focus[_nghost-%COMP%]   .icon-content[_ngcontent-%COMP%], *:focus   [_nghost-%COMP%]   .icon-content[_ngcontent-%COMP%]{background-color:var(--tui-base-01);color:var(--tui-text-03)}.icon[_ngcontent-%COMP%]{margin:0 .5rem 0 calc(-1px - .25rem)}[data-size=m][_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{transform:scale(.75)}.info[_ngcontent-%COMP%]{min-width:0;margin-right:.5rem;overflow:hidden}.icon-content[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{max-width:2rem;max-height:2rem;margin:0 .375rem 0 auto;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;font:var(--tui-font-text-s);color:var(--tui-text-02);margin-bottom:-.125rem}[data-size=m][_nghost-%COMP%]   .name[_ngcontent-%COMP%]{font:var(--tui-font-text-xs)}.value[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}[data-size=m][_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"]
  });
  return ExampleMyAccountComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/9/index.ts













function TuiSelectExample9_ng_template_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵelement */._UZ(1, "my-account", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r5);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("account", item_r5);
  }
}

function TuiSelectExample9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiSelectExample9_ng_template_2_button_1_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.accounts);
  }
}

function TuiSelectExample9_ng_template_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵelement */._UZ(1, "my-account", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r7);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("account", item_r7);
  }
}

function TuiSelectExample9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiSelectExample9_ng_template_4_button_1_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.accounts);
  }
}

function TuiSelectExample9_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "my-account", 7);
  }

  if (rf & 2) {
    const account_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("account", account_r8);
  }
}

let TuiSelectExample9 = /*#__PURE__*/(() => {
  class TuiSelectExample9 {
    constructor() {
      this.accounts = [{
        name: `Dollar deposit`,
        amount: 237000,
        currency: "USD"
        /* Dollar */
        ,
        paymentSystem: `tuiIconVisa`
      }, {
        name: `Pound deposit`,
        amount: 100,
        currency: "GBP"
        /* Pound */
        ,
        paymentSystem: `tuiIconMastercard`
      }, {
        name: `Rouble deposit`,
        amount: 1234567890,
        currency: "RUB"
        /* Ruble */
        ,
        paymentSystem: `tuiIconMir`
      }];
      this.account = new fesm2015_forms/* FormControl */.NI(this.accounts[0]);
    }

  }

  TuiSelectExample9.ɵfac = function TuiSelectExample9_Factory(t) {
    return new (t || TuiSelectExample9)();
  };

  TuiSelectExample9.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample9,
    selectors: [["tui-select-example-9"]],
    decls: 7,
    vars: 6,
    consts: [[1, "example"], ["tuiTextfieldSize", "l", 3, "tuiTextfieldLabelOutside", "formControl", "valueContent"], ["tuiDataList", ""], ["tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside", "formControl", "valueContent"], ["value", ""], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"], [3, "account"]],
    template: function TuiSelectExample9_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSelectExample9_ng_template_2_Template, 2, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-select", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiSelectExample9_ng_template_4_Template, 2, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiSelectExample9_ng_template_5_Template, 1, 1, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r2 = fesm2015_core/* ɵɵreference */.MAs(6);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("formControl", ctx.account)("valueContent", _r2);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("formControl", ctx.account)("valueContent", _r2);
      }
    },
    directives: [select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, ExampleMyAccountComponent],
    styles: [".example[_ngcontent-%COMP%]{max-width:25rem}"],
    changeDetection: 0
  });
  return TuiSelectExample9;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/examples/10/index.ts











function TuiSelectExample10_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 3);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

const STRINGIFY_EMPLOYEE = item => `${item.name} (${item.dept.title})`;

let TuiSelectExample10 = /*#__PURE__*/(() => {
  class TuiSelectExample10 {
    constructor() {
      this.testValue = new fesm2015_forms/* FormControl */.NI(null);
      this.items = [{
        id: 42,
        name: `John Cleese`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 237,
        name: `Eric Idle`,
        dept: {
          id: 560,
          title: `Staffing`
        }
      }, {
        id: 666,
        name: `Michael Palin`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 123,
        name: `Terry Gilliam`,
        dept: {
          id: 500,
          title: `Administrative`
        }
      }, {
        id: 777,
        name: `Terry Jones`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 999,
        name: `Graham Chapman`,
        dept: {
          id: 560,
          title: `Staffing`
        }
      }];
    }

  }

  TuiSelectExample10.ɵfac = function TuiSelectExample10_Factory(t) {
    return new (t || TuiSelectExample10)();
  };

  TuiSelectExample10.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSelectExample10,
    selectors: [["tui-select-example-10"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiItemsHandlersProvider)({
      stringify: STRINGIFY_EMPLOYEE
    })])],
    decls: 4,
    vars: 2,
    consts: [[1, "b-form"], ["tuiTextfieldSize", "m", 3, "formControl", "tuiTextfieldLabelOutside"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiSelectExample10_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Employee ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSelectExample10_tui_data_list_wrapper_3_Template, 1, 1, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.testValue)("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* NgForm */.F, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSelectExample10;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/select.component.ts







































const _c0 = ["valueTemplateContent"];

function ExampleTuiSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 5);
    fesm2015_core/* ɵɵtext */._uU(5, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵtext */._uU(7, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(8, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-select-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-select-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-select-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-select-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-select-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-select-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-select-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-doc-example", 12);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-select-example-8");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(28, "tui-select-example-9");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(30, "tui-select-example-10");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
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
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example9);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example10);
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 25);
  }

  if (rf & 2) {
    const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r9.items);
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 23);
    fesm2015_core/* ɵɵtext */._uU(1, " Choose an account ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("valueContent", ctx_r3.valueContent)("identityMatcher", ctx_r3.identityMatcher)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldCustomContent", ctx_r3.customContent)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 26);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 27);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r10);
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 28);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSelectComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiSelectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 15);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSelectComponent_ng_template_2_ng_template_1_Template, 3, 22, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSelectComponent_ng_template_2_ng_template_2_Template, 3, 1, "ng-template", null, 16, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiSelectComponent_ng_template_2_Template_button_click_8_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.setValue();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiSelectComponent_ng_template_2_ng_template_10_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiSelectComponent_ng_template_2_ng_template_11_Template, 3, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.identityMatcher = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiSelectComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.selectedValueTemplate = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "inherited-documentation", 22);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.identityMatcherVariants)("documentationPropertyValue", ctx_r1.identityMatcher);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueTemplateVariants)("documentationPropertyValue", ctx_r1.selectedValueTemplate);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiSelectComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 31);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 32);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 34);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(11, 35);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
    fesm2015_core/* ɵɵi18n */.SDv(17, 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-doc-code", 38);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

class select_component_Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  toString() {
    return `${this.name} (${this.balance})`;
  }

}

let ExampleTuiSelectComponent = /*#__PURE__*/(() => {
  class ExampleTuiSelectComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.valueTemplateRef = ``;
      this.exampleModule = __webpack_require__.e(/* import() */ 85019).then(__webpack_require__.t.bind(__webpack_require__, 85019, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 88502).then(__webpack_require__.t.bind(__webpack_require__, 88502, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 25155).then(__webpack_require__.t.bind(__webpack_require__, 25155, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 26293).then(__webpack_require__.t.bind(__webpack_require__, 26293, 17)),
        HTML: __webpack_require__.e(/* import() */ 44262).then(__webpack_require__.t.bind(__webpack_require__, 44262, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 55910).then(__webpack_require__.t.bind(__webpack_require__, 55910, 17)),
        HTML: __webpack_require__.e(/* import() */ 17210).then(__webpack_require__.t.bind(__webpack_require__, 17210, 17)),
        LESS: __webpack_require__.e(/* import() */ 54210).then(__webpack_require__.t.bind(__webpack_require__, 54210, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 93653).then(__webpack_require__.t.bind(__webpack_require__, 93653, 17)),
        HTML: __webpack_require__.e(/* import() */ 34811).then(__webpack_require__.t.bind(__webpack_require__, 34811, 17)),
        LESS: __webpack_require__.e(/* import() */ 95033).then(__webpack_require__.t.bind(__webpack_require__, 95033, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 92736).then(__webpack_require__.t.bind(__webpack_require__, 92736, 17)),
        HTML: __webpack_require__.e(/* import() */ 79530).then(__webpack_require__.t.bind(__webpack_require__, 79530, 17)),
        LESS: __webpack_require__.e(/* import() */ 6583).then(__webpack_require__.t.bind(__webpack_require__, 6583, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 616).then(__webpack_require__.t.bind(__webpack_require__, 616, 17)),
        HTML: __webpack_require__.e(/* import() */ 67661).then(__webpack_require__.t.bind(__webpack_require__, 67661, 17)),
        LESS: __webpack_require__.e(/* import() */ 56490).then(__webpack_require__.t.bind(__webpack_require__, 56490, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 78200).then(__webpack_require__.t.bind(__webpack_require__, 78200, 17)),
        HTML: __webpack_require__.e(/* import() */ 36409).then(__webpack_require__.t.bind(__webpack_require__, 88132, 17)),
        LESS: __webpack_require__.e(/* import() */ 76030).then(__webpack_require__.t.bind(__webpack_require__, 76030, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 56067).then(__webpack_require__.t.bind(__webpack_require__, 56067, 17)),
        HTML: __webpack_require__.e(/* import() */ 51407).then(__webpack_require__.t.bind(__webpack_require__, 51407, 17)),
        LESS: __webpack_require__.e(/* import() */ 36907).then(__webpack_require__.t.bind(__webpack_require__, 36907, 17))
      };
      this.example8 = {
        TypeScript: __webpack_require__.e(/* import() */ 40229).then(__webpack_require__.t.bind(__webpack_require__, 40229, 17)),
        HTML: __webpack_require__.e(/* import() */ 60620).then(__webpack_require__.t.bind(__webpack_require__, 60620, 17)),
        LESS: __webpack_require__.e(/* import() */ 96776).then(__webpack_require__.t.bind(__webpack_require__, 96776, 17))
      };
      this.example9 = {
        TypeScript: __webpack_require__.e(/* import() */ 64823).then(__webpack_require__.t.bind(__webpack_require__, 64823, 17)),
        HTML: __webpack_require__.e(/* import() */ 20632).then(__webpack_require__.t.bind(__webpack_require__, 20632, 17)),
        LESS: __webpack_require__.e(/* import() */ 20918).then(__webpack_require__.t.bind(__webpack_require__, 20918, 17)),
        './account/my-account.component.ts': __webpack_require__.e(/* import() */ 26665).then(__webpack_require__.t.bind(__webpack_require__, 26665, 17)),
        './account/my-account.component.less': __webpack_require__.e(/* import() */ 12661).then(__webpack_require__.t.bind(__webpack_require__, 12661, 17)),
        './account/my-account.component.html': __webpack_require__.e(/* import() */ 51483).then(__webpack_require__.t.bind(__webpack_require__, 51483, 17))
      };
      this.example10 = {
        TypeScript: __webpack_require__.e(/* import() */ 98787).then(__webpack_require__.t.bind(__webpack_require__, 98787, 17)),
        HTML: __webpack_require__.e(/* import() */ 37914).then(__webpack_require__.t.bind(__webpack_require__, 37914, 17))
      };
      this.items = [new select_component_Account(`Ruble`, 500), new select_component_Account(`Dollar`, 237)];
      this.valueTemplateVariants = [``, `Template`];
      this.iconVariants = [``, `tuiIconPiechartLarge`, `tuiIconCardsLarge`];
      this.iconLeft = this.iconVariants[0];
      this.selectedValueTemplate = this.valueTemplateVariants[0];
      this.identityMatcherVariants = [(item1, item2) => item1 === item2, (item1, item2) => item1.balance === item2.balance];
      this.identityMatcher = this.identityMatcherVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, item => item.balance < 300];
    }

    get valueContent() {
      return this.valueTemplateRef && this.selectedValueTemplate ? this.valueTemplateRef : ``;
    }

    setValue() {
      this.control.setValue(new select_component_Account(`Dollar`, 237));
    }

  }

  ExampleTuiSelectComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiSelectComponent_BaseFactory;
    return function ExampleTuiSelectComponent_Factory(t) {
      return (ɵExampleTuiSelectComponent_BaseFactory || (ɵExampleTuiSelectComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiSelectComponent)))(t || ExampleTuiSelectComponent);
    };
  }();

  ExampleTuiSelectComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSelectComponent,
    selectors: [["example-tui-select"]],
    viewQuery: function ExampleTuiSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.valueTemplateRef = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiSelectComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1680458409811932300$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__2 = goog.getMsg("{$startTagCode}Select{$closeTagCode} is a field with dropdown to choose one item. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_1 = MSG_EXTERNAL_1680458409811932300$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟de7e198bda4b7280110d662ad931071d6deb5e69␟1680458409811932300:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Select${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a field with dropdown to choose one item. `;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6800762720774839936$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__4 = goog.getMsg("String array");
        i18n_3 = MSG_EXTERNAL_6800762720774839936$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟18246b83094cc9589126b64e6d01e462adcdaed4␟6800762720774839936:String array`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6723454891017531511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__6 = goog.getMsg("Custom template");
        i18n_5 = MSG_EXTERNAL_6723454891017531511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟e3a9bc6f05dcc9b9ff9268b861cce4bbb2803428␟6723454891017531511:Custom template`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3010826173765785381$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__8 = goog.getMsg("Item delegate");
        i18n_7 = MSG_EXTERNAL_3010826173765785381$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟e615049c677cf3453552b326ea7bb0d2021aa8cc␟3010826173765785381:Item delegate`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6504226182753238526$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__10 = goog.getMsg("{$startParagraph} Set a value with copied object from items to check {$startTagCode}identityMatcher{$closeTagCode} : {$closeParagraph}{$startTagButton} Set {$closeTagButton}", {
          "startParagraph": "\uFFFD#6\uFFFD",
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD",
          "closeParagraph": "\uFFFD/#6\uFFFD",
          "startTagButton": "\uFFFD#8\uFFFD",
          "closeTagButton": "\uFFFD/#8\uFFFD"
        });
        i18n_9 = MSG_EXTERNAL_6504226182753238526$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\uFFFD#6\uFFFD"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:identityMatcher${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: : ${"\uFFFD/#6\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#8\uFFFD"}:START_TAG_BUTTON: Set ${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_BUTTON:`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___12 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_11 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___12;
      } else {
        i18n_11 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___14 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___14;
      } else {
        i18n_13 = $localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5590474436936398231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___16 = goog.getMsg(" A template for custom view of selected value ");
        i18n_15 = MSG_EXTERNAL_5590474436936398231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1726217683163408804$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__18 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiSelectModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_1726217683163408804$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__18;
      } else {
        i18n_17 = $localize`:␟ec2275c175f09c95e57431a265f79285eba36816␟1726217683163408804: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSelectModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8602164619926939169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__20 = goog.getMsg(" See samples to learn more about working with {$startTagCode}tui-data-list-wrapper{$closeTagCode} or without them ", {
          "startTagCode": "\uFFFD#8\uFFFD",
          "closeTagCode": "\uFFFD/#8\uFFFD"
        });
        i18n_19 = MSG_EXTERNAL_8602164619926939169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__20;
      } else {
        i18n_19 = $localize`:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-data-list-wrapper${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: or without them `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__22 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"
        });
        i18n_21 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__22;
      } else {
        i18n_21 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_21 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_21);
      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__24 = goog.getMsg("Add to the template:");
        i18n_23 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SELECT_SELECT_COMPONENT_TS__24;
      } else {
        i18n_23 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Select", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_1, ["id", "base", "heading", i18n_3, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "template", "heading", i18n_5, 3, "content"], ["id", "delegate", "heading", i18n_7, 3, "content"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "id", "heading", "ID only", 3, "content"], ["id", "wrapper", "heading", "DataListWrapper", 3, "content"], ["id", "complex", "heading", "Complex dropdown", 3, "content"], ["id", "virtual", "heading", "Virtual scroll", 3, "content"], ["id", "accounts", "heading", "Accounts list", 3, "content"], ["id", "options-stringify", "heading", "Options (stringify)", 3, "content"], [3, "control"], ["valueTemplateContent", ""], i18n_9, ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent<TuiValueContentContext<T>>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "valueContent", "identityMatcher", "tuiTextfieldIconLeft", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], [3, "items", 4, "tuiDataList"], [3, "items"], ["src", "tuiIconCheck", 1, "icon"], [1, "text-overflow"], i18n_11, i18n_13, i18n_15, [1, "b-demo-steps"], i18n_17, ["filename", "myComponent.module.ts", 3, "code"], i18n_19, i18n_21, ["filename", "myComponent.component.ts", 3, "code"], i18n_23, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSelectComponent_ng_template_1_Template, 31, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSelectComponent_ng_template_2_Template, 14, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSelectComponent_ng_template_3_Template, 19, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiSelectExample1, TuiSelectExample2, TuiSelectExample3, TuiSelectExample4, TuiSelectExample5, TuiSelectExample6, TuiSelectExample7, TuiSelectExample8, TuiSelectExample9, TuiSelectExample10, demo_component/* TuiDocDemoComponent */.F, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, svg_component/* TuiSvgComponent */.P, code_component/* TuiDocCodeComponent */.c],
    styles: [".icon[_ngcontent-%COMP%]{height:1.125rem;color:var(--tui-accent);margin:0 .25rem 0 -.25rem}.text-overflow[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}"],
    changeDetection: 0
  });
  return ExampleTuiSelectComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/select/select.module.ts

























let ExampleTuiSelectModule = /*#__PURE__*/(() => {
  class ExampleTuiSelectModule {}

  ExampleTuiSelectModule.ɵfac = function ExampleTuiSelectModule_Factory(t) {
    return new (t || ExampleTuiSelectModule)();
  };

  ExampleTuiSelectModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSelectModule
  });
  ExampleTuiSelectModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, scrolling/* ScrollingModule */.Cl, core.TuiScrollbarModule, core.TuiDataListModule, kit.TuiTextAreaModule, kit.TuiSelectModule, addon_commerce.TuiCardModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule, kit.TuiAvatarModule, core.TuiSvgModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, cdk.TuiAutoFocusModule, cdk.TuiLetModule, core.TuiLoaderModule, kit.TuiDataListWrapperModule, kit.TuiMultiSelectModule, core.TuiLabelModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, kit.TuiMarkerIconModule, cdk.TuiMapperPipeModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSelectComponent))]]
  });
  return ExampleTuiSelectModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSelectModule, {
    declarations: [ExampleTuiSelectComponent, ExampleMyAccountComponent, TuiSelectExample1, TuiSelectExample2, TuiSelectExample3, TuiSelectExample4, TuiSelectExample5, TuiSelectExample6, TuiSelectExample7, TuiSelectExample8, TuiSelectExample9, TuiSelectExample10],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, scrolling/* ScrollingModule */.Cl, core.TuiScrollbarModule, core.TuiDataListModule, kit.TuiTextAreaModule, kit.TuiSelectModule, addon_commerce.TuiCardModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule, kit.TuiAvatarModule, core.TuiSvgModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, cdk.TuiAutoFocusModule, cdk.TuiLetModule, core.TuiLoaderModule, kit.TuiDataListWrapperModule, kit.TuiMultiSelectModule, core.TuiLabelModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, kit.TuiMarkerIconModule, cdk.TuiMapperPipeModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiSelectComponent]
  });
})();

/***/ })

}]);