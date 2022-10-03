"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[76643],{

/***/ 76643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputCardModule": () => (/* binding */ ExampleTuiInputCardModule)
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.component.ts
var input_card_component = __webpack_require__(98537);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.directive.ts
var input_card_directive = __webpack_require__(22436);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-expire/input-expire.component.ts
var input_expire_component = __webpack_require__(56021);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-cvc/input-cvc.component.ts
var input_cvc_component = __webpack_require__(22444);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card/examples/1/index.ts








let TuiInputCardExample1 = /*#__PURE__*/(() => {
  class TuiInputCardExample1 {
    constructor() {
      this.form = new fesm2015_forms/* FormGroup */.cw({
        card: new fesm2015_forms/* FormControl */.NI(``),
        expire: new fesm2015_forms/* FormControl */.NI(``),
        cvc: new fesm2015_forms/* FormControl */.NI(``)
      });
    }

    get card() {
      var _a, _b;

      const value = (_a = this.form.get(`card`)) === null || _a === void 0 ? void 0 : _a.value;

      if (((_b = value === null || value === void 0 ? void 0 : value.length) !== null && _b !== void 0 ? _b : 0) < 7) {
        return null;
      }

      switch (value === null || value === void 0 ? void 0 : value.charAt(0)) {
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

  TuiInputCardExample1.ɵfac = function TuiInputCardExample1_Factory(t) {
    return new (t || TuiInputCardExample1)();
  };

  TuiInputCardExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCardExample1,
    selectors: [["tui-input-card-example-1"]],
    decls: 10,
    vars: 5,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8368729506777256792$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("{$startTagCode}form{$closeTagCode} tag is used for better autocomplete\n", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8368729506777256792$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟55e971bc370c0719311d739ac5400bc8dcc4915a␟8368729506777256792:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:form${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: tag is used for better autocomplete
`;
      }

      return [i18n_0, ["tuiGroup", "", 3, "formGroup"], ["formControlName", "card", 3, "autocompleteEnabled", "cardSrc"], ["formControlName", "expire", 3, "autocompleteEnabled"], ["formControlName", "cvc", 3, "autocompleteEnabled"]];
    },
    template: function TuiInputCardExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-card", 2);
        fesm2015_core/* ɵɵtext */._uU(5, " Card number ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-expire", 3);
        fesm2015_core/* ɵɵtext */._uU(7, " Expire date ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-input-cvc", 4);
        fesm2015_core/* ɵɵtext */._uU(9, " CVC/CVV ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", true)("cardSrc", ctx.card);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, group_directive/* TuiGroupDirective */.g, fesm2015_forms/* FormGroupDirective */.sg, input_card_component/* TuiInputCardComponent */.z, input_card_directive/* TuiInputCardDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, input_expire_component/* TuiInputExpireComponent */.h, input_cvc_component/* TuiInputCVCComponent */.U],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCardExample1;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion.component.ts
var accordion_component = __webpack_require__(36710);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item.component.ts
var accordion_item_component = __webpack_require__(23178);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-content.directive.ts
var accordion_item_content_directive = __webpack_require__(7406);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card/input-card.component.ts

































function ExampleTuiInputCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-input-card-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

const _c4 = function () {
  return [];
};

function ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-card", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("binChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template_tui_input_card_binChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r7.onBinChange($event);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Card number ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-expire", 12);
    fesm2015_core/* ɵɵtext */._uU(4, " Expire date ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-cvc", 13);
    fesm2015_core/* ɵɵtext */._uU(6, " CVC/CVV ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-error", 14);
    fesm2015_core/* ɵɵpipe */.ALo(8, "async");
    fesm2015_core/* ɵɵpipe */.ALo(9, "tuiFieldError");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.control);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", ctx_r3.autocompleteEnabledCard)("cardSrc", ctx_r3.cardSrc)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoFocus", ctx_r3.pseudoFocused)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", ctx_r3.autocompleteEnabledExpire)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoFocus", ctx_r3.pseudoFocused);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("autocompleteEnabled", ctx_r3.autocompleteEnabledCVC)("focusable", ctx_r3.focusable)("length", ctx_r3.length)("readOnly", ctx_r3.readOnly)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoFocus", ctx_r3.pseudoFocused)("tuiHintContent", ctx_r3.hintContentCVC)("tuiHintDirection", ctx_r3.hintDirectionCVC)("tuiHintAppearance", ctx_r3.hintAppearanceCVC);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 38, fesm2015_core/* ɵɵpipeBind1 */.lcZ(9, 40, fesm2015_core/* ɵɵpureFunction0 */.DdM(42, _c4))));
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 19);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_1_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r13.disabledCard = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_2_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r15.autocompleteEnabledCard = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_3_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r16.cardSrcSelected = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_ng_template_4_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r4.disabledCard);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r4.autocompleteEnabledCard);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r4.cardSrcVariants)("documentationPropertyValue", ctx_r4.cardSrcSelected);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 23);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_1_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r20);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r19.disabledExpire = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_ng_template_2_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r20);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r21.autocompleteEnabledExpire = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(3, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r5.disabledExpire);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r5.autocompleteEnabledExpire);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_1_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r26);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r25.disabledCVC = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_2_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r26);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r27.autocompleteEnabledCVC = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_ng_template_3_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r26);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r28.length = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.disabledCVC);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.autocompleteEnabledCVC);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r6.lengthVariants)("documentationPropertyValue", ctx_r6.length);
  }
}

function ExampleTuiInputCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardComponent_ng_template_2_ng_template_1_Template, 10, 43, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 6);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-accordion", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-accordion-item", 8);
    fesm2015_core/* ɵɵtext */._uU(8, " TuiInputCardComponent ");
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputCardComponent_ng_template_2_ng_template_9_Template, 6, 4, "ng-template", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-accordion-item", 8);
    fesm2015_core/* ɵɵtext */._uU(11, " TuiInputExpireComponent ");
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputCardComponent_ng_template_2_ng_template_12_Template, 4, 2, "ng-template", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-accordion-item", 8);
    fesm2015_core/* ɵɵtext */._uU(14, " TuiInputCVCComponent ");
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiInputCardComponent_ng_template_2_ng_template_15_Template, 5, 4, "ng-template", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("closeOthers", false);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("open", true);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("open", false);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("open", false);
  }
}

function ExampleTuiInputCardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 29);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(2, 30);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 31);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18n */.SDv(9, 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiInputCardComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputCardComponent extends control/* AbstractExampleTuiControl */.b {
    constructor(alertService) {
      super();
      this.alertService = alertService;
      this.exampleModule = __webpack_require__.e(/* import() */ 7724).then(__webpack_require__.t.bind(__webpack_require__, 7724, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 51642).then(__webpack_require__.t.bind(__webpack_require__, 51642, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 2180).then(__webpack_require__.t.bind(__webpack_require__, 2180, 17)),
        HTML: __webpack_require__.e(/* import() */ 80379).then(__webpack_require__.t.bind(__webpack_require__, 80379, 17))
      };
      this.card = ``;
      this.lengthVariants = [3, 4];
      this.length = this.lengthVariants[0];
      this.cleaner = false;
      this.exampleText = `0000 0000 0000 0000`;
      this.hintContentCVC = null;
      this.hintDirectionCVC = `bottom-left`;
      this.hintAppearanceCVC = ``;
      this.cards = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`
      };
      this.cardSrcVariants = Object.keys(this.cards);
      this.cardSrcSelected = null;
      this.autocompleteEnabledCard = false;
      this.autocompleteEnabledCVC = false;
      this.autocompleteEnabledExpire = false;
      this.control = new fesm2015_forms/* FormGroup */.cw({
        card: new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, (0,addon_commerce.tuiCreateLuhnValidator)(`Invalid card number`)]),
        expire: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        cvc: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

    get cardSrc() {
      return this.cardSrcSelected === null ? null : this.cards[this.cardSrcSelected];
    }

    get disabledCard() {
      return this.isDisabled(`card`);
    }

    set disabledCard(value) {
      this.toggleDisabled(value, `card`);
    }

    get disabledExpire() {
      return this.isDisabled(`expire`);
    }

    set disabledExpire(value) {
      this.toggleDisabled(value, `expire`);
    }

    get disabledCVC() {
      return this.isDisabled(`cvc`);
    }

    set disabledCVC(value) {
      this.toggleDisabled(value, `cvc`);
    }

    isDisabled(control) {
      return this.control.get(control).disabled;
    }

    toggleDisabled(value, control) {
      if (value) {
        this.control.get(control).disable();
        return;
      }

      this.control.get(control).enable();
    }

    onBinChange(bin) {
      this.alertService.open(`bin: ${bin}`).subscribe();
    }

  }

  ExampleTuiInputCardComponent.ɵfac = function ExampleTuiInputCardComponent_Factory(t) {
    return new (t || ExampleTuiInputCardComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiInputCardComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputCardComponent,
    selectors: [["example-input-card"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputCardComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6470927994758536071$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputCard{$closeTagCode} can be used with {$startTagCode}InputExpire{$closeTagCode} and {$startTagCode}InputCVC{$closeTagCode} to input a card ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"
        });
        i18n_0 = MSG_EXTERNAL_6470927994758536071$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟2f640a16c0e05689a9493fa51d084298a92231d2␟6470927994758536071:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputCard${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: can be used with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputExpire${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:InputCVC${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: to input a card `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1504302675191121980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__3 = goog.getMsg(" Add {$startTagCode}tuiCreateLuhnValidator(customMessage?){$closeTagCode} to control validators to validate it with Luhn algorithm ", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1504302675191121980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____6 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_5 = MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____6;
      } else {
        i18n_5 = $localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____8 = goog.getMsg(" Browser autocomplete of card ");
        i18n_7 = MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____8;
      } else {
        i18n_7 = $localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_485699365067563704$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____10 = goog.getMsg(" SVG card icon ");
        i18n_9 = MSG_EXTERNAL_485699365067563704$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____10;
      } else {
        i18n_9 = $localize`:␟dcc7e3b746f7cded22fc2e353f17e985980623f7␟485699365067563704: SVG card icon `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3654424801956026296$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____12 = goog.getMsg(" BIN value (card first 6 symbols) ");
        i18n_11 = MSG_EXTERNAL_3654424801956026296$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____12;
      } else {
        i18n_11 = $localize`:␟fb5491175d895b16c29c18e6ee0deaac92726d60␟3654424801956026296: BIN value (card first 6 symbols) `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____14 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____14;
      } else {
        i18n_13 = $localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____16 = goog.getMsg(" Browser autocomplete of card ");
        i18n_15 = MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____16;
      } else {
        i18n_15 = $localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____18 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_8188315960463628611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____18;
      } else {
        i18n_17 = $localize`:␟2c6fe3ffbb7436fff8b7e8237f816105f5674c5b␟8188315960463628611: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____20 = goog.getMsg(" Browser autocomplete of card ");
        i18n_19 = MSG_EXTERNAL_3717227958474842046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____20;
      } else {
        i18n_19 = $localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8094181198746722162$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____22 = goog.getMsg(" Code length ");
        i18n_21 = MSG_EXTERNAL_8094181198746722162$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS____22;
      } else {
        i18n_21 = $localize`:␟f9633c5a291f65405f5a5ebdb40846783f6d65a1␟8094181198746722162: Code length `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3557620798016058872$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__24 = goog.getMsg(" Import {$startTagCode}TuiInputCardModule{$closeTagCode} , {$startTagCode}TuiInputCVCModule{$closeTagCode} , {$startTagCode}TuiInputExpireModule{$closeTagCode} modules into the module where you want to use them: {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagTuiDocCode": "\uFFFD#6\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#6\uFFFD"
        });
        i18n_23 = MSG_EXTERNAL_3557620798016058872$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__24;
      } else {
        i18n_23 = $localize`:␟ae4597c634cd72fb51db1738adfcb64703005369␟3557620798016058872: Import ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputCardModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputCVCModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiInputExpireModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: modules into the module where you want to use them: ${"\uFFFD#6\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      i18n_23 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_23);
      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__26 = goog.getMsg("Add to the template:");
        i18n_25 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_CARD_INPUT_CARD_COMPONENT_TS__26;
      } else {
        i18n_25 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputCard", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "group", "heading", "tui-group", 3, "content"], [3, "control"], [1, "b-full-width", "tui-space_bottom-6"], i18n_2, [1, "b-full-width", 3, "closeOthers"], [3, "open"], ["tuiAccordionItemContent", ""], [1, "form", 3, "formGroup"], ["formControlName", "card", 1, "control", 3, "autocompleteEnabled", "cardSrc", "focusable", "readOnly", "tuiTextfieldSize", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHover", "pseudoActive", "pseudoFocus", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "binChange"], ["formControlName", "expire", 1, "control", 3, "autocompleteEnabled", "focusable", "readOnly", "tuiTextfieldSize", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHover", "pseudoActive", "pseudoFocus"], ["formControlName", "cvc", 1, "control", 3, "autocompleteEnabled", "focusable", "length", "readOnly", "tuiTextfieldSize", "tuiTextfieldLabelOutside", "pseudoInvalid", "pseudoHover", "pseudoActive", "pseudoFocus", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], ["formControlName", "card", 1, "error", 3, "error"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autocompleteEnabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardSrc", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "binChange", "documentationPropertyMode", "output", "documentationPropertyType", "string | null"], i18n_5, i18n_7, i18n_9, i18n_11, i18n_13, i18n_15, ["documentationPropertyName", "length", "documentationPropertyMode", "input", "documentationPropertyType", "3 | 4", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_17, i18n_19, i18n_21, [1, "b-demo-steps"], i18n_23, ["filename", "myComponent.module.ts", 3, "code"], i18n_25, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCardComponent_ng_template_1_Template, 7, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCardComponent_ng_template_2_Template, 16, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCardComponent_ng_template_3_Template, 11, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputCardExample1, demo_component/* TuiDocDemoComponent */.F, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_card_component/* TuiInputCardComponent */.z, input_card_directive/* TuiInputCardDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, hint_options_directive/* TuiHintOptionsDirective */.bZ, input_expire_component/* TuiInputExpireComponent */.h, input_cvc_component/* TuiInputCVCComponent */.U, error_component/* TuiErrorComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],
    changeDetection: 0
  });
  return ExampleTuiInputCardComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-card/input-card.module.ts












let ExampleTuiInputCardModule = /*#__PURE__*/(() => {
  class ExampleTuiInputCardModule {}

  ExampleTuiInputCardModule.ɵfac = function ExampleTuiInputCardModule_Factory(t) {
    return new (t || ExampleTuiInputCardModule)();
  };

  ExampleTuiInputCardModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputCardModule
  });
  ExampleTuiInputCardModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[addon_commerce.TuiInputCardModule, addon_commerce.TuiInputCVCModule, addon_commerce.TuiInputExpireModule, core.TuiGroupModule, core.TuiLinkModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiAccordionModule, common/* CommonModule */.ez, core.TuiHintModule, core.TuiTextfieldControllerModule, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputCardComponent))]]
  });
  return ExampleTuiInputCardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputCardModule, {
    declarations: [ExampleTuiInputCardComponent, TuiInputCardExample1],
    imports: [addon_commerce.TuiInputCardModule, addon_commerce.TuiInputCVCModule, addon_commerce.TuiInputExpireModule, core.TuiGroupModule, core.TuiLinkModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiAccordionModule, common/* CommonModule */.ez, core.TuiHintModule, core.TuiTextfieldControllerModule, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputCardComponent]
  });
})();

/***/ })

}]);